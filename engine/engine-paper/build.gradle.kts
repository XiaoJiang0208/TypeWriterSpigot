import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
//import io.papermc.hangarpublishplugin.model.Platforms
import java.io.ByteArrayOutputStream

plugins {
    id("xyz.jpenilla.resource-factory-bukkit-convention") version "1.1.2"
    id("com.github.johnrengelman.shadow") version "8.1.1"
    //id("io.papermc.hangar-publish-plugin") version "0.1.2"
}

repositories {
    mavenCentral()
    // Floodgate
    maven("https://repo.opencollab.dev/maven-snapshots/")
    // PacketEvents, CommandAPI
    maven("https://repo.codemc.io/repository/maven-releases/")
    maven("https://repo.codemc.io/repository/maven-public/") // XiaoJiang
    // PlaceholderAPI
    maven("https://repo.extendedclip.com/content/repositories/placeholderapi/")
    // SpigotMC
    maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/") {
        name = "spigotmc-repo"
    }
    // PaperMC
    maven("https://repo.papermc.io/repository/maven-public/")
    maven("https://oss.sonatype.org/content/groups/public/") {
        name = "sonatype"
    }
    // EntityLib
    maven("https://maven.evokegames.gg/snapshots")
}

val centralDependencies = listOf(
    "org.jetbrains.kotlin:kotlin-stdlib:2.0.21",
    "org.jetbrains.kotlin:kotlin-reflect:2.0.21",
    "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.9.0",
    "com.corundumstudio.socketio:netty-socketio:1.7.19", // Keep this on a lower version as the newer version breaks the ping
)

dependencies {
    for (dependency in centralDependencies) {
        compileOnlyApi(dependency)
    }
    // XiaoJiang start
    //compileOnlyApi("io.papermc.paper:paper-api:1.21.4-R0.1-SNAPSHOT")
    compileOnlyApi("org.spigotmc:spigot-api:1.21.3-R0.1-SNAPSHOT")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("de.tr7zw:item-nbt-api-plugin:2.14.1")
    implementation ("com.extollit.gaming:hydrazine-path-engine:1.8.1")
    // XiaoJiang end

    api(project(":engine-core"))
    api(project(":engine-loader"))

    api("me.tofaa.entitylib:spigot:3.0.3-SNAPSHOT")
    api("com.github.shynixn.mccoroutine:mccoroutine-bukkit-api:2.20.0")
    api("com.github.shynixn.mccoroutine:mccoroutine-bukkit-core:2.20.0")
    api("dev.jorel:commandapi-bukkit-shade:9.6.1")
    api("dev.jorel:commandapi-bukkit-kotlin:9.6.1")

    // Doesn't want to load properly using the spigot api.
    implementation("io.ktor:ktor-server-core-jvm:2.3.12")
    implementation("io.ktor:ktor-server-netty-jvm:2.3.12")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:1.7.3")
    implementation("org.bstats:bstats-bukkit:3.1.0")
    implementation("org.eclipse.jetty:jetty-server:11.0.14")
    implementation("org.eclipse.jetty:jetty-servlet:11.0.14")

    val adventureVersion = "4.17.0"
    api("net.kyori:adventure-api:$adventureVersion")
    api("net.kyori:adventure-text-minimessage:$adventureVersion")
    api("net.kyori:adventure-text-serializer-plain:$adventureVersion")
    api("net.kyori:adventure-text-serializer-legacy:$adventureVersion")
    api("net.kyori:adventure-text-serializer-gson:$adventureVersion")
    api("net.kyori:adventure-platform-bukkit:4.3.4")

    api("com.github.retrooper:packetevents-api:2.7.0-SNAPSHOT")
    api("com.github.retrooper:packetevents-spigot:2.7.0-SNAPSHOT")
    compileOnly("me.clip:placeholderapi:2.11.6")
    compileOnlyApi("org.geysermc.floodgate:api:2.2.0-SNAPSHOT")

    testImplementation("org.mockbukkit.mockbukkit:mockbukkit-v1.21:4.18.0")
}

tasks.withType<ShadowJar> {
    relocate("org.bstats", "com.typewritermc.engine.paper.extensions.bstats")
    relocate("dev.jorel.commandapi", "com.typewritermc.engine.paper.extensions.commandapi") {
        include("dev.jorel.commandapi.**")
    }
    relocate("net.kyori.adventure", "com.typewritermc.engine.paper.relocated.adventure") {
        include("net.kyori.adventure.**")
    }
    relocate("io.ktor.server", "com.typewritermc.engine.paper.relocated.server") {
        include("io.ktor.server.**")
    }
    relocate("com.github.retrooper.packetevents", "com.typewritermc.engine.paper.relocated.packetevents.api") {
        include("com.github.retrooper.packetevents.**")
    }
    relocate("io.github.retrooper.packetevents", "com.typewritermc.engine.paper.relocated.packetevents.impl") {
        include("io.github.retrooper.packetevents.**")
    }
    minimize {
        exclude(dependency("org.jetbrains.kotlin:kotlin-stdlib"))
        exclude(dependency("org.jetbrains.kotlin:kotlin-reflect"))
        exclude(dependency("com.github.shynixn.mccoroutine:mccoroutine-bukkit-core"))
        exclude(dependency("com.github.Tofaa2.EntityLib:spigot"))
        exclude(dependency("web::"))
    }
}

task<ShadowJar>("buildAndMove") {
    dependsOn("shadowJar")

    group = "build"
    description = "Builds the jar and moves it to the server folder"
    outputs.upToDateWhen { false }

    // Move the jar from the build/libs folder to the server/plugins folder
    doLast {
        val jar = file("build/libs/%s-%s-all.jar".format(project.name, project.version))
        val server = file("../../server/plugins/Typewriter.jar")
        jar.copyTo(server, overwrite = true)
    }
}

task("copyFlutterWebFiles") {
    group = "build"
    description = "Copies the flutter web files to the resources folder"

    doLast {
        val flutterWeb = file("../../app/build/web")
        val flutterWebDest = file("src/main/resources/web")
        flutterWeb.copyRecursively(flutterWebDest, overwrite = true)
    }
}

task("buildRelease") {
    dependsOn("copyFlutterWebFiles", "shadowJar")
    group = "build"
    description = "Builds the jar including the flutter web panel"

    outputs.upToDateWhen { false }

    doLast {
        // Remove the flutter web folder
        val flutterWebDest = file("src/main/resources/web")
        flutterWebDest.deleteRecursively()

        // Rename the jar to remove the version and -all
        val jar = file("build/libs/%s-%s-all.jar".format(project.name, project.version))
        if (!jar.exists()) {
            throw IllegalStateException("Jar does not exist: ${jar.absolutePath}")
        }
        jar.renameTo(file("build/libs/Typewriter.jar".format(project.name)))
        file("build/libs/%s-%s.jar".format(project.name, project.version)).delete()
    }
}

fun executeGitCommand(vararg command: String): String {
    val byteOut = ByteArrayOutputStream()
    exec {
        commandLine = listOf("git", *command)
        standardOutput = byteOut
    }
    return byteOut.toString(Charsets.UTF_8.name()).trim()
}

fun latestCommitMessage(): String {
    return executeGitCommand("log", "-1", "--pretty=%B")
}

//hangarPublish {
//    publications.register("plugin") {
//        version.set(project.version.toString())
//        if (project.version.toString().contains("beta")) {
//            channel.set("Beta")
//        } else {
//            channel.set("Release")
//        }
//
//        id.set("Typewriter")
//        changelog.set(latestCommitMessage())
//        apiKey.set(System.getenv("HANGAR_API_TOKEN"))
//
//        platforms {
//            register(Platforms.PAPER) {
//                url.set("https://modrinth.com/plugin/typewriter/version/${project.version}")
//
//                val versions: List<String> = (property("paperVersion") as String)
//                    .split(",")
//                    .map { it.trim() }
//                platformVersions.set(versions)
//
//                dependencies {
//                    url("PacketEvents", "https://modrinth.com/plugin/packetevents/versions?l=paper&l=purpur") {
//                        required.set(true)
//                    }
//                }
//            }
//        }
//    }
//}

bukkitPluginYaml {
    name = "Typewriter"
    description = "Next Generation Story Telling Plugin"
    authors = listOf("gabber235")
    website = "https://docs.typewritermc.com"
    version = project.version.toString()

    main = "com.typewritermc.engine.paper.TypewriterPaperPlugin"
    apiVersion = "1.20"
    //depend = listOf("packetevents")
    softDepend = listOf("PlaceholderAPI","ProtocolSupport","ViaVersion","ViaBackwards","ViaRewind","Geyser-Spigot", "floodgate")
    libraries = centralDependencies
}