package com.typewritermc.engine.paper.events

import org.bukkit.entity.Player
import org.bukkit.event.Event

abstract class AsyncPlayerEvent(var player: Player, async: Boolean) : Event(async)
