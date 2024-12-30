package com.typewritermc.engine.paper.utils.item.components

import com.typewritermc.core.books.pages.Colors
import com.typewritermc.core.extension.annotations.*
import com.typewritermc.engine.paper.extensions.placeholderapi.parsePlaceholders
import com.typewritermc.engine.paper.utils.asMini
import com.typewritermc.engine.paper.utils.toStringComponent // XiaoJiang
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

@AlgebraicTypeInfo("lore", Colors.ORANGE, "flowbite:file-lines-solid")
class ItemLoreComponent(
    @Placeholder
    @Colored
    @MultiLine
    val lore: String,
) : ItemComponent {
    override fun apply(player: Player?, item: ItemStack) {
        // XiaoJiang start
        //item.editMeta { meta ->
        //    meta.lore(lore.parsePlaceholders(player).split("\n").map { it.asMini() })
        //}
        item.itemMeta?.let { meta ->
            meta.lore= lore.parsePlaceholders(player).split("\n").map { it.asMini().toStringComponent() }
        }
        // XiaoJiang end
    }
}