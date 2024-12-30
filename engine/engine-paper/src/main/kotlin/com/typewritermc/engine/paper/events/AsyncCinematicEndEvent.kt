package com.typewritermc.engine.paper.events

import org.bukkit.entity.Player
import org.bukkit.event.HandlerList
import org.bukkit.event.player.PlayerEvent

class AsyncCinematicEndEvent(player: Player, val frame: Int, val pageId: String) : AsyncPlayerEvent(player, true) { // XiaoJiang
    override fun getHandlers(): HandlerList = HANDLER_LIST

    companion object {
        @JvmStatic
        val HANDLER_LIST = HandlerList()

        @JvmStatic
        fun getHandlerList(): HandlerList = HANDLER_LIST
    }
}