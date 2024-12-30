package com.typewritermc.engine.paper.entry.entity

import com.typewritermc.engine.paper.entry.entries.EntityProperty
import com.typewritermc.engine.paper.logger // XiaoJiang
import org.bukkit.OfflinePlayer

data class SkinProperty(
    val texture: String = "",
    val signature: String = "",
) : EntityProperty {
    companion object : SinglePropertyCollectorSupplier<SkinProperty>(SkinProperty::class)
}

val OfflinePlayer.skin: SkinProperty
    get() {
        //WDT TODO: Implement this
        logger.info("WDF TODO")
        //val profile = playerProfile // XiaoJiang
        if (this.playerProfile.textures.isEmpty) return SkinProperty() // XiaoJiang
        //val textures = profile.properties.firstOrNull { it.name == "textures" } ?: return SkinProperty() // XiaoJiang

        return SkinProperty(skin.texture, skin.signature ?: "") // XiaoJiang
    }