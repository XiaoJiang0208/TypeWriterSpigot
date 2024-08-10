"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57363],{53034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453),a=t(71625);const s={title:"Getting Started"},l="Creating an Adapter",o={id:"develop/adapters/getting_started",title:"Getting Started",description:"Introduction",source:"@site/versioned_docs/version-0.5.0/develop/02-adapters/02-getting_started.mdx",sourceDirName:"develop/02-adapters",slug:"/develop/adapters/getting_started",permalink:"/develop/adapters/getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.0/develop/02-adapters/02-getting_started.mdx",tags:[],version:"0.5.0",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1723305675e3,sidebarPosition:2,frontMatter:{title:"Getting Started"},sidebar:"develop",previous:{title:"Adapters",permalink:"/develop/adapters/"},next:{title:"Create Entries",permalink:"/develop/adapters/entries/"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Setting Up a Gradle Project",id:"step-1-setting-up-a-gradle-project",level:2},{value:"Choosing the TypeWriter Version",id:"choosing-the-typewriter-version",level:3},{value:"Step 2: Creating an Adapter Class",id:"step-2-creating-an-adapter-class",level:2},{value:"Step 3: Building the Adapter",id:"step-3-building-the-adapter",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-an-adapter",children:"Creating an Adapter"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Typewriter is a dynamic platform that supports the development of adapters, which are modular components enhancing the overall functionality.\nAdapters are self-contained, easily shareable, and integrate smoothly into the TypeWriter system.\nThey allow you to create custom entries and have them show up in the web panel.\nThis guide is tailored to guide you through the process of creating an adapter, suitable for both beginners and experienced developers."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Java Development Kit (JDK) 21 or higher."}),"\n",(0,r.jsx)(n.li,{children:"An Integrated Development Environment (IDE) such as IntelliJ IDEA or Eclipse."}),"\n",(0,r.jsx)(n.li,{children:"A basic understanding of Gradle and the Spigot API."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-setting-up-a-gradle-project",children:"Step 1: Setting Up a Gradle Project"}),"\n",(0,r.jsxs)(n.p,{children:["Begin by establishing a Gradle project for your Typewriter adapter. Below is a comprehensive setup for your ",(0,r.jsx)(n.code,{children:"build.gradle.kts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    kotlin("jvm") version "2.0.0"\n    id("io.github.goooler.shadow") version "8.1.7"\n}\n\n// Replace with your own information\ngroup = "me.yourusername"\nversion = "0.0.1"\n\nrepositories {\n    // Typewriter required repositories\n    mavenCentral()\n    maven("https://repo.papermc.io/repository/maven-public/")\n    maven("https://repo.codemc.io/repository/maven-releases/")\n    maven("https://repo.opencollab.dev/maven-snapshots/")\n    maven("https://jitpack.io")\n\n    // Add other necessary repositories\n}\n\ndependencies {\n    compileOnly("com.github.gabber235:typewriter:main-SNAPSHOT") // Latest release version\n\n    // Add other dependencies as needed\n}\n\ntasks.withType<ShadowJar> {\n    exclude("kotlin/**")\n    exclude("META-INF/maven/**")\n    // Important: Use the relocated commandapi which is shadowed by the plugin\n    relocate("dev.jorel.commandapi", "com.github.gabber235.typewriter.extensions.commandapi") {\n        include("dev.jorel.commandapi.**")\n    }\n}\n\nkotlin {\n    jvmToolchain(21)\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Ensure to replace placeholders like ",(0,r.jsx)(n.code,{children:"me.yourusername"})," with your project details."]}),"\n",(0,r.jsx)(n.h3,{id:"choosing-the-typewriter-version",children:"Choosing the TypeWriter Version"}),"\n",(0,r.jsx)(n.p,{children:"Select the appropriate TypeWriter dependency version:\nFor stable and tested features, use the latest release version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'compileOnly("com.github.gabber235:typewriter:main-SNAPSHOT")\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is suitable for most development needs and is recommended for general adapter creation."}),"\n",(0,r.jsx)(n.p,{children:"If you need the latest features and improvements (which might be unstable), use the latest development version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'compileOnly("com.github.gabber235:typewriter:develop-SNAPSHOT")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Note that this version may include changes that are not yet fully tested or documented."}),"\n",(0,r.jsxs)(n.p,{children:["If you need a specific version, visit the ",(0,r.jsx)(n.a,{href:"https://jitpack.io/#gabber235/typewriter",children:"JitPack page"})," and select the version you need."]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-creating-an-adapter-class",children:"Step 2: Creating an Adapter Class"}),"\n",(0,r.jsx)(n.p,{children:"After setting up your project, create an adapter class. Here's an example:"}),"\n",(0,r.jsx)(a.A,{tag:"adapter",json:t(71311)}),"\n",(0,r.jsx)(n.h2,{id:"step-3-building-the-adapter",children:"Step 3: Building the Adapter"}),"\n",(0,r.jsxs)(n.p,{children:["After creating the adapter class, build the adapter. This can be done by running the ",(0,r.jsx)(n.code,{children:"shadowJar"})," Gradle task.\nThis will generate a JAR file in the ",(0,r.jsx)(n.code,{children:"build/libs"})," directory.\nThis JAR file can be used as an adapter in TypeWriter.\nPlace the JAR file in the ",(0,r.jsx)(n.code,{children:"plugins/TypeWriter/adapters"})," directory and restart the server.\nTypewriter will automatically load the adapter and run it."]}),"\n",(0,r.jsxs)(n.p,{children:["If any problems occur, check the console for errors and ensure that the adapter is properly configured.\nIf you need help, join the ",(0,r.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord server"})," and ask for help."]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,r.jsxs)(n.p,{children:["After creating an adapter, you can start adding features to it.\nCheck out the ",(0,r.jsx)(n.a,{href:"entries",children:"Creating Entries"})," guide to learn how to add entries to your adapter."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71625:(e,n,t)=>{t.d(n,{A:()=>s});const r={adapter:{file:"src/main/kotlin/com/typewritermc/example/ExampleAdapter.kt",content:'import me.gabber235.typewriter.adapters.Adapter\nimport me.gabber235.typewriter.adapters.TypewriterAdapter\n\n@Adapter("Example", "An example adapter for documentation purposes", "0.0.1")\nobject ExampleAdapter : TypewriterAdapter() {\n    override fun initialize() {\n        // Do something when the adapter is initialized\n    }\n\n    override fun shutdown() {\n        // Do something when the adapter is shutdown\n    }\n}'},cinematic_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'@Entry("example_cinematic", "An example cinematic entry", Colors.BLUE, "material-symbols:cinematic-blur")\nclass ExampleCinematicEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    val segments: List<ExampleSegment> = emptyList(),\n) : CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}'},cinematic_segment_with_min_max:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    @InnerMin(Min(10))\n    @InnerMax(Max(20))\n    val segments: List<ExampleSegment> = emptyList(),'},cinematic_create_actions:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"    // This will be used when the cinematic is normally displayed to the player.\n    override fun create(player: Player): CinematicAction {\n        return DefaultCinematicAction(player, this)\n    }\n\n    // This is used during content mode to display the cinematic to the player.\n    // It may be null to not show it during simulation.\n    override fun createSimulating(player: Player): CinematicAction? {\n        return SimulatedCinematicAction(player, this)\n    }\n\n    // This is used during content mode to record the cinematic.\n    // It may be null to not record it during simulation.\n    override fun createRecording(player: Player): CinematicAction? {\n        return RecordingCinematicAction(player, this)\n    }"},cinematic_segment:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"data class ExampleSegment(\n    override val startFrame: Int = 0,\n    override val endFrame: Int = 0,\n) : Segment"},cinematic_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleCinematicAction(\n    val player: Player,\n    val entry: ExampleCinematicEntry,\n) : CinematicAction {\n    override suspend fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override suspend fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n\n        // Execute tick logic for the segment\n    }\n\n    override suspend fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}"},cinematic_simple_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleSimpleCinematicAction(\n    val player: Player,\n    entry: ExampleCinematicEntry,\n) : SimpleCinematicAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        super.startSegment(segment) // Keep this\n        // Called when a segment starts\n    }\n\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\n        super.tickSegment(segment, frame) // Keep this\n        // Called every tick while the segment is active\n        // Will always be called after startSegment and never after stopSegment\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n    }\n\n    override suspend fun stopSegment(segment: ExampleSegment) {\n        super.stopSegment(segment) // Keep this\n        // Called when the segment ends\n        // Will also be called if the cinematic is stopped early\n    }\n}"},audience_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:'@Entry("example_audience", "An example audience entry.", Colors.GREEN, "material-symbols:chat-rounded")\nclass ExampleAudienceEntry(\n    override val id: String,\n    override val name: String,\n) : AudienceEntry {\n    override fun display(): AudienceDisplay {\n        return ExampleAudienceDisplay()\n    }\n}'},audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class ExampleAudienceDisplay : AudienceDisplay() {\n    override fun initialize() {\n        // This is called when the first player is added to the audience.\n        super.initialize()\n        // Do something when the audience is initialized\n    }\n\n    override fun onPlayerAdd(player: Player) {\n        // Do something when a player gets added to the audience\n    }\n\n    override fun onPlayerRemove(player: Player) {\n        // Do something when a player gets removed from the audience\n    }\n\n    override fun dispose() {\n        super.dispose()\n        // Do something when the audience is disposed\n        // It will always call onPlayerRemove for all players.\n        // So no player cleanup is needed here.\n    }\n}"},tickable_audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"// highlight-next-line\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    override fun tick() {\n        // Do something when the audience is ticked\n        players.forEach { player ->\n            // Do something with the player\n        }\n\n        // This is running asynchronously\n        // If you need to do something on the main thread\n        ThreadType.SYNC.launch {\n            // Though this will run a tick later, to sync with the bukkit scheduler.\n        }\n    }\n    // highlight-end\n}"},audience_display_with_events:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class AudienceDisplayWithEvents : AudienceDisplay() {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    @EventHandler\n    fun onSomeEvent(event: SomeBukkitEvent) {\n        // Do something when the event is triggered\n        // This will trigger for all players, not just the ones in the audience.\n        // So we need to check if the player is in the audience.\n        if (event.player in this) {\n            // Do something with the player\n        }\n    }\n    // highlight-end\n}"},artifact_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:'@Entry("example_artifact", "An example artifact entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleArtifactEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val artifactId: String = "",\n) : ArtifactEntry'},artifact_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},asset_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:'@Entry("example_asset", "An example asset entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleAssetEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val path: String = "",\n) : AssetEntry'},asset_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},sound_id_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt",content:'@Entry("example_sound", "An example sound entry.", Colors.BLUE, "icon-park-solid:volume-up")\nclass ExampleSoundIdEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val soundId: String = "",\n) : SoundIdEntry'},sound_source_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt",content:'@Entry("example_sound_source", "An example sound source entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSoundSourceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : SoundSourceEntry {\n    override fun getEmitter(): Sound.Emitter {\n        // Return the emitter that should be used for the sound.\n        // A bukkit entity can be used here.\n        return Sound.Emitter.self()\n    }\n}'},speaker_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt",content:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: String = "",\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry'},action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply all the modifiers.\n        // Do something with the player\n    }\n}'},custom_triggering_action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleCustomTriggeringActionEntry.kt",content:'@Entry("example_custom_triggering_action", "An example custom triggering entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    @SerializedName("triggers")\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        // Do something with the player\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    }\n}'},dialogue_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry'},dialogue_messenger:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Messenger(ExampleDialogueEntry::class)\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(playTime: Duration) {\n        super.tick(playTime)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}'},event_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event", "An example event entry.", Colors.YELLOW, "material-symbols:bigtop-updates")\nclass ExampleEventEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry'},event_entry_listener:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:"// Must be scoped to be public\n@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries triggerAllFor event.player\n}"}};var i=t(2250),a=t(74848);function s(e){let n,{tag:t,json:s}=e;if(!s)throw new Error("JSON not provided");if(n=Object.keys(s).length>0?s[t]:r[t],null==n)return(0,a.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t]});const{file:l,content:o}=n;if(null==l||null==o)return(0,a.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t," (",n,")"]});const m=l.split("/").pop();return(0,a.jsx)(i.A,{language:"kotlin",showLineNumbers:!0,title:m,children:o})}},71311:e=>{e.exports=JSON.parse('{"adapter":{"file":"src/main/kotlin/com/typewritermc/example/ExampleAdapter.kt","content":"import me.gabber235.typewriter.adapters.Adapter\\nimport me.gabber235.typewriter.adapters.TypewriterAdapter\\n\\n@Adapter(\\"Example\\", \\"An example adapter for documentation purposes\\", \\"0.0.1\\")\\nobject ExampleAdapter : TypewriterAdapter() {\\n    override fun initialize() {\\n        // Do something when the adapter is initialized\\n    }\\n\\n    override fun shutdown() {\\n        // Do something when the adapter is shutdown\\n    }\\n}"},"cinematic_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"@Entry(\\"example_cinematic\\", \\"An example cinematic entry\\", Colors.BLUE, \\"material-symbols:cinematic-blur\\")\\nclass ExampleCinematicEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val criteria: List<Criteria> = emptyList(),\\n    @Segments(Colors.BLUE, \\"material-symbols:cinematic-blur\\")\\n    val segments: List<ExampleSegment> = emptyList(),\\n) : CinematicEntry {\\n    override fun create(player: Player): CinematicAction {\\n        return ExampleCinematicAction(player, this)\\n    }\\n}"},"cinematic_segment_with_min_max":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"    @Segments(Colors.BLUE, \\"material-symbols:cinematic-blur\\")\\n    @InnerMin(Min(10))\\n    @InnerMax(Max(20))\\n    val segments: List<ExampleSegment> = emptyList(),"},"cinematic_create_actions":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"    // This will be used when the cinematic is normally displayed to the player.\\n    override fun create(player: Player): CinematicAction {\\n        return DefaultCinematicAction(player, this)\\n    }\\n\\n    // This is used during content mode to display the cinematic to the player.\\n    // It may be null to not show it during simulation.\\n    override fun createSimulating(player: Player): CinematicAction? {\\n        return SimulatedCinematicAction(player, this)\\n    }\\n\\n    // This is used during content mode to record the cinematic.\\n    // It may be null to not record it during simulation.\\n    override fun createRecording(player: Player): CinematicAction? {\\n        return RecordingCinematicAction(player, this)\\n    }"},"cinematic_segment":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"data class ExampleSegment(\\n    override val startFrame: Int = 0,\\n    override val endFrame: Int = 0,\\n) : Segment"},"cinematic_action":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"class ExampleCinematicAction(\\n    val player: Player,\\n    val entry: ExampleCinematicEntry,\\n) : CinematicAction {\\n    override suspend fun setup() {\\n        // Initialize variables, spawn entities, etc.\\n    }\\n\\n    override suspend fun tick(frame: Int) {\\n        val segment = entry.segments activeSegmentAt frame\\n        // Can be null if no segment is active\\n\\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\\n\\n        // Execute tick logic for the segment\\n    }\\n\\n    override suspend fun teardown() {\\n        // Remove entities, etc.\\n    }\\n\\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\\n}"},"cinematic_simple_action":{"file":"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt","content":"class ExampleSimpleCinematicAction(\\n    val player: Player,\\n    entry: ExampleCinematicEntry,\\n) : SimpleCinematicAction<ExampleSegment>() {\\n    override val segments: List<ExampleSegment> = entry.segments\\n\\n    override suspend fun startSegment(segment: ExampleSegment) {\\n        super.startSegment(segment) // Keep this\\n        // Called when a segment starts\\n    }\\n\\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\\n        super.tickSegment(segment, frame) // Keep this\\n        // Called every tick while the segment is active\\n        // Will always be called after startSegment and never after stopSegment\\n\\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\\n    }\\n\\n    override suspend fun stopSegment(segment: ExampleSegment) {\\n        super.stopSegment(segment) // Keep this\\n        // Called when the segment ends\\n        // Will also be called if the cinematic is stopped early\\n    }\\n}"},"audience_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt","content":"@Entry(\\"example_audience\\", \\"An example audience entry.\\", Colors.GREEN, \\"material-symbols:chat-rounded\\")\\nclass ExampleAudienceEntry(\\n    override val id: String,\\n    override val name: String,\\n) : AudienceEntry {\\n    override fun display(): AudienceDisplay {\\n        return ExampleAudienceDisplay()\\n    }\\n}"},"audience_display":{"file":"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt","content":"class ExampleAudienceDisplay : AudienceDisplay() {\\n    override fun initialize() {\\n        // This is called when the first player is added to the audience.\\n        super.initialize()\\n        // Do something when the audience is initialized\\n    }\\n\\n    override fun onPlayerAdd(player: Player) {\\n        // Do something when a player gets added to the audience\\n    }\\n\\n    override fun onPlayerRemove(player: Player) {\\n        // Do something when a player gets removed from the audience\\n    }\\n\\n    override fun dispose() {\\n        super.dispose()\\n        // Do something when the audience is disposed\\n        // It will always call onPlayerRemove for all players.\\n        // So no player cleanup is needed here.\\n    }\\n}"},"tickable_audience_display":{"file":"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt","content":"// highlight-next-line\\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\\n    override fun onPlayerAdd(player: Player) {}\\n    override fun onPlayerRemove(player: Player) {}\\n\\n    // highlight-start\\n    override fun tick() {\\n        // Do something when the audience is ticked\\n        players.forEach { player ->\\n            // Do something with the player\\n        }\\n\\n        // This is running asynchronously\\n        // If you need to do something on the main thread\\n        ThreadType.SYNC.launch {\\n            // Though this will run a tick later, to sync with the bukkit scheduler.\\n        }\\n    }\\n    // highlight-end\\n}"},"audience_display_with_events":{"file":"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt","content":"class AudienceDisplayWithEvents : AudienceDisplay() {\\n    override fun onPlayerAdd(player: Player) {}\\n    override fun onPlayerRemove(player: Player) {}\\n\\n    // highlight-start\\n    @EventHandler\\n    fun onSomeEvent(event: SomeBukkitEvent) {\\n        // Do something when the event is triggered\\n        // This will trigger for all players, not just the ones in the audience.\\n        // So we need to check if the player is in the audience.\\n        if (event.player in this) {\\n            // Do something with the player\\n        }\\n    }\\n    // highlight-end\\n}"},"artifact_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt","content":"@Entry(\\"example_artifact\\", \\"An example artifact entry.\\", Colors.BLUE, \\"material-symbols:home-storage-rounded\\")\\nclass ExampleArtifactEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val artifactId: String = \\"\\",\\n) : ArtifactEntry"},"artifact_access":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt","content":"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\\n    val entry = ref.get() ?: return\\n    val content: String? = assetManager.fetchAsset(entry)\\n    // Do something with the content\\n}"},"asset_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt","content":"@Entry(\\"example_asset\\", \\"An example asset entry.\\", Colors.BLUE, \\"material-symbols:home-storage-rounded\\")\\nclass ExampleAssetEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val path: String = \\"\\",\\n) : AssetEntry"},"asset_access":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt","content":"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\\n    val entry = ref.get() ?: return\\n    val content: String? = assetManager.fetchAsset(entry)\\n    // Do something with the content\\n}"},"sound_id_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt","content":"@Entry(\\"example_sound\\", \\"An example sound entry.\\", Colors.BLUE, \\"icon-park-solid:volume-up\\")\\nclass ExampleSoundIdEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val soundId: String = \\"\\",\\n) : SoundIdEntry"},"sound_source_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt","content":"@Entry(\\"example_sound_source\\", \\"An example sound source entry.\\", Colors.BLUE, \\"ic:round-spatial-audio-off\\")\\nclass ExampleSoundSourceEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n) : SoundSourceEntry {\\n    override fun getEmitter(): Sound.Emitter {\\n        // Return the emitter that should be used for the sound.\\n        // A bukkit entity can be used here.\\n        return Sound.Emitter.self()\\n    }\\n}"},"speaker_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt","content":"@Entry(\\"example_speaker\\", \\"An example speaker entry.\\", Colors.BLUE, \\"ic:round-spatial-audio-off\\")\\nclass ExampleSpeakerEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val displayName: String = \\"\\",\\n    override val sound: Sound = Sound.EMPTY,\\n) : SpeakerEntry"},"action_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt","content":"@Entry(\\"example_action\\", \\"An example action entry.\\", Colors.RED, \\"material-symbols:touch-app-rounded\\")\\nclass ExampleActionEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val criteria: List<Criteria> = emptyList(),\\n    override val modifiers: List<Modifier> = emptyList(),\\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\\n) : ActionEntry {\\n    override fun execute(player: Player) {\\n        super.execute(player) // This will apply all the modifiers.\\n        // Do something with the player\\n    }\\n}"},"custom_triggering_action_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleCustomTriggeringActionEntry.kt","content":"@Entry(\\"example_custom_triggering_action\\", \\"An example custom triggering entry.\\", Colors.RED, \\"material-symbols:touch-app-rounded\\")\\nclass ExampleCustomTriggeringActionEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val criteria: List<Criteria> = emptyList(),\\n    override val modifiers: List<Modifier> = emptyList(),\\n    @SerializedName(\\"triggers\\")\\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\\n) : CustomTriggeringActionEntry {\\n    override fun execute(player: Player) {\\n        super.execute(player) // This will apply the modifiers.\\n        // Do something with the player\\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\\n    }\\n}"},"dialogue_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt","content":"@Entry(\\"example_dialogue\\", \\"An example dialogue entry.\\", Colors.BLUE, \\"material-symbols:chat-rounded\\")\\nclass ExampleDialogueEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val criteria: List<Criteria> = emptyList(),\\n    override val modifiers: List<Modifier> = emptyList(),\\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\\n    @MultiLine\\n    @Placeholder\\n    @Colored\\n    @Help(\\"The text to display to the player.\\")\\n    val text: String = \\"\\",\\n) : DialogueEntry"},"dialogue_messenger":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt","content":"@Messenger(ExampleDialogueEntry::class)\\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\\n\\n    companion object : MessengerFilter {\\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\\n    }\\n\\n    // Called every game tick (20 times per second).\\n    // The cycle is a parameter that is incremented every tick, starting at 0.\\n    override fun tick(playTime: Duration) {\\n        super.tick(playTime)\\n        if (state != MessengerState.RUNNING) return\\n\\n        player.sendMessage(\\"${entry.speakerDisplayName}: ${entry.text}\\".parsePlaceholders(player).asMini())\\n\\n        // When we want the dialogue to end, we can set the state to FINISHED.\\n        state = MessengerState.FINISHED\\n    }\\n}"},"event_entry":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt","content":"@Entry(\\"example_event\\", \\"An example event entry.\\", Colors.YELLOW, \\"material-symbols:bigtop-updates\\")\\nclass ExampleEventEntry(\\n    override val id: String = \\"\\",\\n    override val name: String = \\"\\",\\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\\n) : EventEntry"},"event_entry_listener":{"file":"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt","content":"// Must be scoped to be public\\n@EntryListener(ExampleEventEntry::class)\\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\\n    // Do something\\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\\n    // Do something with the entries, for example trigger them\\n    entries triggerAllFor event.player\\n}"}}')}}]);