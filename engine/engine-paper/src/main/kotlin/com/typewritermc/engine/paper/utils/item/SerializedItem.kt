package com.typewritermc.engine.paper.utils.item

import com.typewritermc.core.books.pages.Colors
import com.typewritermc.core.extension.annotations.AlgebraicTypeInfo
import com.typewritermc.core.extension.annotations.Default
import com.typewritermc.engine.paper.logger // XiaoJiang
import com.typewritermc.engine.paper.utils.plainText
import de.tr7zw.nbtapi.NBT // XiaoJiang
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import kotlin.io.encoding.Base64
import kotlin.io.encoding.ExperimentalEncodingApi

@OptIn(ExperimentalEncodingApi::class)
@AlgebraicTypeInfo("serialized_item", Colors.ORANGE, "mingcute:file-code-fill")
class SerializedItem(
    private val material: Material = Material.AIR,
    private val name: String = material.name,

    @Default("1")
    private val amount: Int = 1,

    private val bytes: String = "", // Base64 encoded bytes
) : Item {
    constructor(itemStack: ItemStack) : this(
        itemStack.type,
        itemStack.itemMeta?.displayName ?: itemStack.type.name, // XiaoJiang
        itemStack.amount,
        if (itemStack.type != Material.AIR) NBT.itemStackToNBT(itemStack).toString()  else "", // XiaoJiang
    )

    @delegate:Transient
    private val itemStack: ItemStack by lazy(LazyThreadSafetyMode.NONE) {
        val bytes = Base64.decode(bytes).toString() // XiaoJiang
        if (bytes.isEmpty()) return@lazy ItemStack(Material.AIR)
        logger.info("NBT out"+NBT.parseNBT(bytes)) // XiaoJiang
        NBT.itemStackFromNBT(NBT.parseNBT(bytes))?.apply { // XiaoJiang
            this.amount = this@SerializedItem.amount // XiaoJiang
        }!! // XiaoJiang
    }

    override fun build(player: Player?): ItemStack = itemStack
    override fun isSameAs(player: Player?, item: ItemStack?): Boolean = this.itemStack.isSimilar(item)
}

fun ItemStack.toItem(): SerializedItem = SerializedItem(this)