import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
    kotlin("jvm") version "1.9.22"
    id("com.github.johnrengelman.shadow") version "8.1.1"
}

group = "com.caleb"
version = file("../../version.txt").readText().trim()

repositories {
    // Required
    maven("https://jitpack.io")
    mavenCentral()
    maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")
    maven("https://oss.sonatype.org/content/groups/public/")
    maven("https://libraries.minecraft.net/")
    maven { url = uri("https://repo.papermc.io/repository/maven-public/") }
    maven("https://repo.codemc.io/repository/maven-snapshots/")
    maven("https://repo.opencollab.dev/maven-snapshots/")
    // Adapter Specific
}

dependencies {
    compileOnly(kotlin("stdlib"))
    compileOnly("io.papermc.paper:paper-api:1.19.4-R0.1-SNAPSHOT")

    compileOnly("com.github.gabber235:typewriter:$version")

    // Already included in the TypeWriter plugin
    compileOnly("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.0-RC")
    compileOnly("com.github.dyam0:LirandAPI:96cc59d4fb")
    compileOnly("net.kyori:adventure-api:4.15.0")
    compileOnly("net.kyori:adventure-text-minimessage:4.15.0")

    // External dependencies
    compileOnly("com.github.MilkBowl:VaultAPI:1.7.1")

    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

val targetJavaVersion = 17
java {
    val javaVersion = JavaVersion.toVersion(targetJavaVersion)
    sourceCompatibility = javaVersion
    targetCompatibility = javaVersion
    toolchain.languageVersion.set(JavaLanguageVersion.of(targetJavaVersion))
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
    kotlinOptions {
        jvmTarget = "$targetJavaVersion"
    }
}

val copyTemplates by tasks.registering(Copy::class) {
    filteringCharset = "UTF-8"
    from(projectDir.resolve("src/main/templates")) {
        expand("version" to version)
    }
    into(buildDir.resolve("generated-sources/templates/kotlin/main"))
}

sourceSets {
    main {
        java.srcDirs(copyTemplates)
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
        val server =
            file("../../plugin/server/plugins/Typewriter/adapters/%s.jar".format(project.name))
        jar.copyTo(server, overwrite = true)
    }
}

task<ShadowJar>("buildRelease") {
    dependsOn("shadowJar")
    group = "build"
    description = "Builds the jar and renames it"
    outputs.upToDateWhen { false }


    doLast {
        // Rename the jar to remove the version and -all
        val jar = file("build/libs/%s-%s-all.jar".format(project.name, project.version))
        if (!jar.exists()) {
            throw IllegalStateException("Jar does not exist: ${jar.absolutePath}")
        }
        jar.renameTo(file("build/libs/%s.jar".format(project.name)))
        file("build/libs/%s-%s.jar".format(project.name, project.version)).delete()
    }
}