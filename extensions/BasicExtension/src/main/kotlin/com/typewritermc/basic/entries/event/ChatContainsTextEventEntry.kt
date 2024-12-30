package com.typewritermc.basic.entries.event

import org.bukkit.event.player.AsyncPlayerChatEvent // XiaoJiang
import com.typewritermc.core.books.pages.Colors
import com.typewritermc.core.entries.Query
import com.typewritermc.core.entries.Ref
import com.typewritermc.engine.paper.entry.TriggerableEntry
import com.typewritermc.core.extension.annotations.Entry
import com.typewritermc.core.extension.annotations.EntryListener
import com.typewritermc.core.extension.annotations.Help
import com.typewritermc.core.extension.annotations.Regex
import com.typewritermc.engine.paper.entry.*
import com.typewritermc.engine.paper.entry.entries.EventEntry
import com.typewritermc.engine.paper.utils.plainText
import net.kyori.adventure.text.Component // XiaoJiang
import kotlin.text.Regex as KotlinRegex

@Entry(
    "on_message_contains_text",
    "When the player sends a chat message containing certain text",
    Colors.YELLOW,
    "fluent:note-48-filled"
)
/**
 * The `Chat Contains Text Event` is called when a player sends a chat message containing certain text.
 *
 * ## How could this be used?
 *
 * When a player mentions something, you could display dialogue to them.
 */
class ChatContainsTextEventEntry(
    override val id: String = "",
    override val name: String = "",
    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),
    @Regex
    @Help("The text to look for in the message.")
    val text: String = "",
    @Help("If the text should be matched exactly or if it should be a substring.")
    val exactSame: Boolean = false
) : EventEntry


@EntryListener(ChatContainsTextEventEntry::class)
fun onChat(event: AsyncPlayerChatEvent, query: Query<ChatContainsTextEventEntry>) { // XiaoJiang
    val message = Component.text(event.message).plainText() // XiaoJiang
    query findWhere {
        if (it.exactSame)
            KotlinRegex(it.text).matches(message)
        else
            KotlinRegex(it.text).containsMatchIn(message)
    } triggerAllFor event.player
}