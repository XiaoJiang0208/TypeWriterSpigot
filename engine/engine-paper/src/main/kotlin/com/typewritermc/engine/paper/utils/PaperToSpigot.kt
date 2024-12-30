// XiaoJiang
package com.typewritermc.engine.paper.utils

import com.typewritermc.engine.paper.logger
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.json.JSONComponentSerializer
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.util.Ticks
import net.md_5.bungee.api.chat.BaseComponent
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.event.Event
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.util.VoxelShape
import java.time.Duration
import java.time.temporal.ChronoUnit
import java.time.temporal.Temporal
import java.time.temporal.TemporalUnit
import java.util.*

// Paperapi start
// Component
fun Component.toTextComponent(): BaseComponent {
    val legacyText = LegacyComponentSerializer.legacySection().serialize(this)
    return net.md_5.bungee.api.chat.TextComponent(*net.md_5.bungee.chat.ComponentSerializer.parse(legacyText))
}
fun Component.toStringComponent(): String {
    return JSONComponentSerializer.json().serialize(this)
}

// Event
fun Event.callEvent() = Bukkit.getPluginManager().callEvent(this)
fun PlayerMoveEvent.hasExplicitlyChangedBlock(): Boolean {
    return from.blockX != to?.blockX || from.blockY != to?.blockY || from.blockZ != to?.blockZ
}
fun PlayerMoveEvent.hasChangedBlock(): Boolean {
    return hasExplicitlyChangedBlock() || from.getWorld() != to?.getWorld()
}

fun BlockData.getCollisionShape(location: Location): VoxelShape {
    // WDF TODO: This is a temporary fix for the issue with the collision shape of the block data
    logger.info("WDF TODO PaperToSpigot.kt: BlockData.getCollisionShape")
    return this.createBlockState().block.collisionShape
}

fun Location.toCenterLocation(): Location {
    val centerLoc = clone()
    centerLoc.x = blockX + 0.5
    centerLoc.y = blockY + 0.5
    centerLoc.z = blockZ + 0.5
    return centerLoc
}
// Paperapi end

fun emptyItemStack():ItemStack {return ItemStack(Material.AIR, 1)}

/**
 * A TemporalUnit that represents the target length of one server tick. This is defined
 * as 50 milliseconds. Note that this class is not for measuring the length that a tick
 * took, rather it is used for simple conversion between times and ticks.
 *
 * @see .tick
 */
class Tick
/**
 * Creates a new tick.
 *
 * @param length the length of the tick in milliseconds
 * @see .tick
 */ private constructor(private val milliseconds: Long) : TemporalUnit {
    /**
     * Gets the number of whole ticks that occur in the provided duration. Note that this
     * method returns an `int` as this is the unit that Minecraft stores ticks in.
     *
     * @param duration the duration
     * @return the number of whole ticks in this duration
     * @throws ArithmeticException if the duration is zero or an overflow occurs
     */
    fun fromDuration(duration: Duration): Int {
        Objects.requireNonNull(duration, "duration cannot be null")
        return Math.toIntExact(Math.floorDiv(duration.toMillis(), this.milliseconds))
    }

    override fun getDuration(): Duration {
        return Duration.ofMillis(this.milliseconds)
    }

    // Note: This is a workaround in order to allow calculations with this duration.
    // See: Duration#add
    override fun isDurationEstimated(): Boolean {
        return false
    }

    override fun isDateBased(): Boolean {
        return false
    }

    override fun isTimeBased(): Boolean {
        return true
    }

    override fun <R : Temporal?> addTo(temporal: R, amount: Long): R {
        return temporal!!.plus(this.duration.multipliedBy(amount)) as R
    }

    override fun between(start: Temporal, end: Temporal): Long {
        return start.until(end, ChronoUnit.MILLIS) / this.milliseconds
    }

    companion object {
        private val INSTANCE = Tick(Ticks.SINGLE_TICK_DURATION_MS)

        /**
         * Gets the instance of the tick temporal unit.
         *
         * @return the tick instance
         */
        fun tick(): Tick {
            return INSTANCE
        }

        /**
         * Creates a duration from an amount of ticks. This is shorthand for
         * [Duration.of] called with the amount of ticks and
         * [.tick].
         *
         * @param ticks the amount of ticks
         * @return the duration
         */
        fun of(ticks: Long): Duration {
            return Duration.of(ticks, INSTANCE)
        }
    }
}
