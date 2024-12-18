"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46198],{34714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>m});let r=JSON.parse('{"id":"develop/extensions/entries/static/speaker","title":"SpeakerEntry","description":"The SpeakerEntry is a specialized interface extending the EntityEntry.","source":"@site/docs/develop/02-extensions/04-entries/static/speaker.mdx","sourceDirName":"develop/02-extensions/04-entries/static","slug":"/develop/extensions/entries/static/speaker","permalink":"/beta/develop/extensions/entries/static/speaker","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/04-entries/static/speaker.mdx","tags":[],"version":"current","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734523215000,"frontMatter":{},"sidebar":"develop","previous":{"title":"SoundSourceEntry","permalink":"/beta/develop/extensions/entries/static/sound_source"},"next":{"title":"VariableEntry","permalink":"/beta/develop/extensions/entries/static/variable"}}');var i=t(74848),a=t(28453),l=t(26137);let s={},o="SpeakerEntry",c={},m=[{value:"Usage",id:"usage",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"speakerentry",children:"SpeakerEntry"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SpeakerEntry"})," is a specialized interface extending the ",(0,i.jsx)(n.code,{children:"EntityEntry"}),".\nIt is designed to enhance dialogues in the game by associating non-player characters (NPCs) with specific names and sounds.\nThis feature is pivotal for creating more immersive and interactive storytelling experiences in Minecraft."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(l.A,{tag:"speaker_entry",json:t(76590)}),"\n",(0,i.jsxs)(n.p,{children:["This speaker can be used by users in various dialogues and interactions within the game.\nYou almost never need to access the ",(0,i.jsx)(n.code,{children:"SpeakerEntry"})," directly, as it is automatically handled by the ",(0,i.jsx)(n.code,{children:"DialogueSequence"}),"."]})]})}function d(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},26137:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(74848);let i={initializer:{file:"src/main/kotlin/com/typewritermc/example/ExampleInitializer.kt",content:"import com.typewritermc.core.extension.Initializable\nimport com.typewritermc.core.extension.annotations.Singleton\n\n@Singleton\nobject ExampleInitializer : Initializable {\n    override suspend fun initialize() {\n        // Do something when the extension is initialized\n    }\n\n    override suspend fun shutdown() {\n        // Do something when the extension is shutdown\n    }\n}"},query_multiple:{file:"src/main/kotlin/com/typewritermc/example/QueryExample.kt",content:"    val entries = Query.find<MyEntry>()"},query_multiple_with_filter:{file:"src/main/kotlin/com/typewritermc/example/QueryExample.kt",content:'    val entries = Query.findWhere<MyEntry> {\n        it.someField == "some value"\n    }'},query_by_id:{file:"src/main/kotlin/com/typewritermc/example/QueryExample.kt",content:'    val id = "some_id"\n    val entry = Query.findById<MyEntry>(id)'},query_from_page:{file:"src/main/kotlin/com/typewritermc/example/QueryExample.kt",content:'    val pageId = "some_page_id"\n    val entries = Query.findWhereFromPage<MyEntry>(pageId) {\n        it.someField == "some value"\n    }'},trigger_without_context:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:'    // If you only have one entry\n    val triggerEntry: TriggerEntry = Query.findById<MyTriggerableEntry>("some_id") ?: return\n    // Triggers all the next entries in the sequence.\n    triggerEntry.triggerAllFor(player, context())\n\n    // If you have multiple entries\n    val triggerEntries: Sequence<TriggerEntry> = Query.find<MyTriggerableEntry>()\n    // Triggers all the next entries for all entries.\n    triggerEntries.triggerAllFor(player, context())'},start_dialogue_with_or_trigger:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:"    val triggerEntries: Sequence<MyTriggerableEntry> = Query.find<MyTriggerableEntry>()\n    triggerEntries.startDialogueWithOrNextDialogue(player, context())\n\n    // Or trigger something completely different when the player is in dialogue:\n    val customTrigger: EventTrigger = InteractionEndTrigger\n    triggerEntries.startDialogueWithOrTrigger(player, customTrigger, context())"},trigger_with_context:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:"    // The context that you have, most likely provided by Typewriter in some way.\n    val context = player.interactionContext ?: context()\n    // Triggers all the next entries in the sequence.\n    triggerEntries.triggerAllFor(player, context)"},interaction_triggers:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:"    // Indicates that the current interaction should be ended\n    InteractionEndTrigger.triggerFor(player, context())"},dialogue_triggers:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:"    // Next dialogue should be triggered or the current dialogue should complete its typing animation.\n    DialogueTrigger.NEXT_OR_COMPLETE.triggerFor(player, context())\n\n    // Forces the next dialogue to be triggered, even if the animation hasn't finished.\n    DialogueTrigger.FORCE_NEXT.triggerFor(player, context())"},temporal_triggers:{file:"src/main/kotlin/com/typewritermc/example/TriggerExample.kt",content:'    // To start a temporal sequence\n    TemporalStartTrigger(\n        pageId = "some_id",\n        eventTriggers = listOf<EventTrigger>(),\n        settings = TemporalSettings(\n            blockChatMessages = true,\n            blockActionBarMessages = true\n        )\n    ).triggerFor(player, context())\n\n    // To stop the temporal sequence and trigger the following entries.\n    TemporalStopTrigger.triggerFor(player, player.interactionContext ?: context())'},simple_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'class SimpleExamplePlaceholderEntry(\n    override val id: String,\n    override val name: String,\n) : PlaceholderEntry {\n    override fun parser(): PlaceholderParser = placeholderParser {\n        supply { player ->\n            "Hello, ${player?.name ?: "World"}!"\n        }\n    }\n}'},literal_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        literal("greet") {\n            literal("enthusiastic") {\n                supply { player ->\n                    "HEY HOW IS YOUR DAY, ${player?.name ?: "World"}!"\n                }\n            }\n            supply { player ->\n                "Hello, ${player?.name ?: "World"}"\n            }\n        }\n        supply {\n            "Standard text"\n        }\n    }'},string_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        string("name") { name ->\n            supply {\n                "Hello, ${name()}!"\n            }\n        }\n    }'},cinematic_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'@Entry("example_cinematic", "An example cinematic entry", Colors.BLUE, "material-symbols:cinematic-blur")\nclass ExampleCinematicEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    val segments: List<ExampleSegment> = emptyList(),\n) : CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}'},cinematic_segment_with_min_max:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    @InnerMin(Min(10))\n    @InnerMax(Max(20))\n    val segments: List<ExampleSegment> = emptyList(),'},cinematic_create_actions:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"    // This will be used when the cinematic is normally displayed to the player.\n    override fun create(player: Player): CinematicAction {\n        return DefaultCinematicAction(player, this)\n    }\n\n    // This is used during content mode to display the cinematic to the player.\n    // It may be null to not show it during simulation.\n    override fun createSimulating(player: Player): CinematicAction? {\n        return SimulatedCinematicAction(player, this)\n    }\n\n    // This is used during content mode to record the cinematic.\n    // It may be null to not record it during simulation.\n    override fun createRecording(player: Player): CinematicAction? {\n        return RecordingCinematicAction(player, this)\n    }"},cinematic_segment:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"data class ExampleSegment(\n    override val startFrame: Int = 0,\n    override val endFrame: Int = 0,\n) : Segment"},cinematic_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleCinematicAction(\n    val player: Player,\n    val entry: ExampleCinematicEntry,\n) : CinematicAction {\n    override suspend fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override suspend fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n\n        // Execute tick logic for the segment\n    }\n\n    override suspend fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}"},cinematic_simple_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleSimpleTemporalAction(\n    val player: Player,\n    entry: ExampleCinematicEntry,\n) : SimpleCinematicAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        super.startSegment(segment) // Keep this\n        // Called when a segment starts\n    }\n\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\n        super.tickSegment(segment, frame) // Keep this\n        // Called every tick while the segment is active\n        // Will always be called after startSegment and never after stopSegment\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n    }\n\n    override suspend fun stopSegment(segment: ExampleSegment) {\n        super.stopSegment(segment) // Keep this\n        // Called when the segment ends\n        // Will also be called if the cinematic is stopped early\n    }\n}"},audience_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:'@Entry("example_audience", "An example audience entry.", Colors.GREEN, "material-symbols:chat-rounded")\nclass ExampleAudienceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : AudienceEntry {\n    override fun display(): AudienceDisplay {\n        return ExampleAudienceDisplay()\n    }\n}'},audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class ExampleAudienceDisplay : AudienceDisplay() {\n    override fun initialize() {\n        // This is called when the first player is added to the audience.\n        super.initialize()\n        // Do something when the audience is initialized\n    }\n\n    override fun onPlayerAdd(player: Player) {\n        // Do something when a player gets added to the audience\n    }\n\n    override fun onPlayerRemove(player: Player) {\n        // Do something when a player gets removed from the audience\n    }\n\n    override fun dispose() {\n        super.dispose()\n        // Do something when the audience is disposed\n        // It will always call onPlayerRemove for all players.\n        // So no player cleanup is needed here.\n    }\n}"},tickable_audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"// highlight-next-line\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    override fun tick() {\n        // Do something when the audience is ticked\n        players.forEach { player ->\n            // Do something with the player\n        }\n\n        // This is running asynchronously\n        // If you need to do something on the main thread\n        ThreadType.SYNC.launch {\n            // Though this will run a tick later, to sync with the bukkit scheduler.\n        }\n    }\n    // highlight-end\n}"},audience_display_with_events:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class AudienceDisplayWithEvents : AudienceDisplay() {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    @EventHandler\n    fun onSomeEvent(event: SomeBukkitEvent) {\n        // Do something when the event is triggered\n        // This will trigger for all players, not just the ones in the audience.\n        // So we need to check if the player is in the audience.\n        if (event.player in this) {\n            // Do something with the player\n        }\n    }\n    // highlight-end\n}"},artifact_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:'@Entry("example_artifact", "An example artifact entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleArtifactEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val artifactId: String = "",\n) : ArtifactEntry'},artifact_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},asset_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:'@Entry("example_asset", "An example asset entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleAssetEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val path: String = "",\n) : AssetEntry'},asset_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},sound_id_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt",content:'@Entry("example_sound", "An example sound entry.", Colors.BLUE, "icon-park-solid:volume-up")\nclass ExampleSoundIdEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val soundId: String = "",\n) : SoundIdEntry'},sound_source_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt",content:'@Entry("example_sound_source", "An example sound source entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSoundSourceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : SoundSourceEntry {\n    override fun getEmitter(player: Player): SoundEmitter {\n        // Return the emitter that should be used for the sound.\n        // An entity should be provided.\n        return SoundEmitter(player.entityId)\n    }\n}'},speaker_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt",content:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: Var<String> = ConstVar(""),\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry'},variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable", "An example variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        TODO("Do something with the player and the klass")\n    }\n}'},variable_entry_with_data:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable_with_data", "An example variable entry with data.", Colors.GREEN, "mdi:code-tags")\n// Register the variable data associated with this variable.\n@VariableData(ExampleVariableWithData::class)\nclass ExampleVariableWithDataEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // This data will be the same for all uses of this variable.\n    val someString: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n        this.someString\n        val data = context.getData<ExampleVariableWithData>() ?: throw IllegalStateException("Could not find data for ${context.klass}, data: ${context.data}")\n\n        TODO("Do something with the player, the klass, and the data")\n    }\n}\n\nclass ExampleVariableWithData(\n    // This data can change at the place where the variable is used.\n    val otherInfo: Int = 0,\n)'},generic_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_generic_variable", "An example generic variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleGenericVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}\n\nclass ExampleGenericVariableData(\n    // Generic data will always be the same as the generic type in the variable.\n    val otherGeneric: Generic,\n)'},constraint_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_constraint_variable", "An example constraint variable entry.", Colors.GREEN, "mdi:code-tags")\n@GenericConstraint(String::class)\n@GenericConstraint(Int::class)\nclass ExampleConstraintVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        // This can only be a String or an Int.\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}'},variable_usage:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_action_using_variable", "An example action that uses a variable.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionUsingVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    val someString: Var<String> = ConstVar(""),\n    val someInt: Var<Int> = ConstVar(0),\n) : ActionEntry {\n    override fun ActionTrigger.execute() {\n        val someString = someString.get(player)\n        val someInt = someInt.get(player)\n\n        // Do something with the variables\n    }\n}'},action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    override fun ActionTrigger.execute() {\n        // Do something with the player\n    }\n}'},action_entry_manual:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:"    override fun ActionTrigger.execute() {\n        // This disables Typewriter's automatic triggering of the next entries,\n        // and disables the automatic apply of the modifiers.\n        disableAutomaticTriggering()\n\n        // Now you can manually trigger the next entries.\n        triggerManually()\n\n        // Or if you want to specify which triggers to trigger, you can do so.\n        triggers.filterIndexed { index, _ -> index % 2 == 0 }.triggerFor(player)\n\n        // You can also manually apply the modifiers.\n        applyModifiers()\n    }"},dialogue_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry {\n    // May return null to skip the dialogue\n    override fun messenger(player: Player, context: InteractionContext): DialogueMessenger<*>? {\n        // You can use if statements to return a different messenger depending on different conditions\n        return ExampleDialogueDialogueMessenger(player, context, this)\n    }\n}'},dialogue_messenger:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'class ExampleDialogueDialogueMessenger(player: Player, context: InteractionContext, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, context, entry) {\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(context: TickContext) {\n        super.tick(context)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}'},event_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event", "An example event entry.", Colors.YELLOW, "material-symbols:bigtop-updates")\nclass ExampleEventEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry'},event_entry_listener:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:"@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries.triggerAllFor(event.player, context())\n}"},event_entry_with_context_keys:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event_with_context_keys", "An example event entry with context keys.", Colors.YELLOW, "material-symbols:bigtop-updates")\n// This tells Typewriter that this entry exposes some context\n@ContextKeys(ExampleContextKeys::class)\nclass ExampleEventEntryWithContextKeys(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry\n\nenum class ExampleContextKeys(override val klass: KClass<*>) : EntryContextKey {\n    // The two `String::class` have to be the same.\n    // The @KeyType is for the panel to know\n    @KeyType(String::class)\n    // The type here is for casting during runtime\n    TEXT(String::class),\n\n    @KeyType(Int::class)\n    NUMBER(Int::class),\n\n    // More complex types are also allowed.\n    @KeyType(Position::class)\n    POSITION(Position::class)\n}\n\n@EntryListener(ExampleEventEntryWithContextKeys::class)\nfun onEventAddContext(event: SomeBukkitEvent, query: Query<ExampleEventEntryWithContextKeys>) {\n    val entries = query.find()\n    entries.triggerAllFor(event.player) {\n        // Make sure these values are drawn from the event.\n        // You MUST supply all the context keys.\n        ExampleContextKeys.TEXT withValue "Hello World"\n        ExampleContextKeys.NUMBER withValue 42\n        ExampleContextKeys.POSITION withValue Position.ORIGIN\n    }\n}'}};var a=t(84996);function l(e){let n,{tag:t,json:l}=e;if(!l)throw Error("JSON not provided");if(null==(n=Object.keys(l).length>0?l[t]:i[t]))return(0,r.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t]});let{file:s,content:o}=n;if(null==s||null==o)return(0,r.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t," (",n,")"]});let c=s.split("/").pop();return(0,r.jsx)(a.A,{language:"kotlin",showLineNumbers:!0,title:c,children:o})}},76590:e=>{e.exports={}}}]);