"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31365],{47162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});let r=JSON.parse('{"id":"develop/extensions/api-changes/0.8","title":"0.8.X API Changes","description":"There are quite a few changes to the API.","source":"@site/docs/develop/02-extensions/08-api-changes/0.8.mdx","sourceDirName":"develop/02-extensions/08-api-changes","slug":"/develop/extensions/api-changes/0.8","permalink":"/beta/develop/extensions/api-changes/0.8","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/08-api-changes/0.8.mdx","tags":[],"version":"current","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734534199000,"frontMatter":{"title":"0.8.X API Changes"},"sidebar":"develop","previous":{"title":"0.7.X API Changes","permalink":"/beta/develop/extensions/api-changes/0.7"}}');var i=t(74848),a=t(28453),s=t(53720),l=t(5400);let o={title:"0.8.X API Changes"},h="All API changes to 0.8.X",g={},d=[{value:"<code>build.gradle.kts</code> Changes",id:"buildgradlekts-changes",level:2},{value:"<code>Initializable</code> Changes",id:"initializable-changes",level:2},{value:"Triggering Entries Changes",id:"triggering-entries-changes",level:2},{value:"ActionEntry Changes",id:"actionentry-changes",level:2},{value:"Dialogue Messenger Changes",id:"dialogue-messenger-changes",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"all-api-changes-to-08x",children:"All API changes to 0.8.X"})}),"\n",(0,i.jsx)(n.p,{children:"There are quite a few changes to the API.\nMake sure to read these changes before updating your extension."}),"\n",(0,i.jsxs)(n.h2,{id:"buildgradlekts-changes",children:[(0,i.jsx)(n.code,{children:"build.gradle.kts"})," Changes"]}),"\n",(0,i.jsxs)(n.p,{children:["Now the engine version is not specified in a seperate ",(0,i.jsx)(n.code,{children:"engine"})," block, but in the ",(0,i.jsx)(n.code,{children:"extension"})," block."]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"release",label:"Release",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts" showLineNumbers',children:'import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar\nplugins {\n    kotlin("jvm") version "2.0.21"\n    // highlight-red\n    id("com.typewritermc.module-plugin") version "1.0.1"\n    // highlight-green\n    id("com.typewritermc.module-plugin") version "1.1.0"\n}\n// Replace with your own information\ngroup = "me.yourusername"\nversion = "0.0.1"\ntypewriter {\n// highlight-red-start\n    engine {\n        version = "<latest typewriter version>"\n    }\n// highlight-red-end\n\n    namespace = "<a name for the company which all your extensions are published under>"\n\n    extension {\n        name = "<Name of the extension>"\n        shortDescription = "<Short description of the extension>"\n        description = "<Long description of the extension>"\n        // highlight-green\n        engineVersion = "<latest typewriter version>"\n\n        paper {\n            // Optional - If you want to make sure a plugin is required to be installed to use this extension\n            dependency("<plugin name>")\n        }\n    }\n}\nkotlin {\n    jvmToolchain(21)\n}\n'})})}),(0,i.jsx)(l.A,{value:"beta",label:"Beta",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts" showLineNumbers',children:'import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar\nplugins {\n    kotlin("jvm") version "2.0.21"\n    // highlight-red\n    id("com.typewritermc.module-plugin") version "1.0.1"\n    // highlight-green\n    id("com.typewritermc.module-plugin") version "1.1.0"\n}\n// Replace with your own information\ngroup = "me.yourusername"\nversion = "0.0.1"\ntypewriter {\n// highlight-red-start\n    engine {\n        version = "<latest typewriter version>"\n        channel = com.typewritermc.moduleplugin.ReleaseChannel.BETA\n    }\n// highlight-red-end\n\n    namespace = "<a name for the company which all your extensions are published under>"\n\n    extension {\n        name = "<Name of the extension>"\n        shortDescription = "<Short description of the extension>"\n        description = "<Long description of the extension>"\n        // highlight-green-start\n        engineVersion = "<latest typewriter version>"\n        channel = com.typewritermc.moduleplugin.ReleaseChannel.BETA\n        // highlight-green-end\n         \n        paper {\n            // Optional - If you want to make sure a plugin is required to be installed to use this extension\n            dependency("<plugin name>")\n        }\n    }\n}\nkotlin {\n    jvmToolchain(21)\n}\n'})})})]}),"\n",(0,i.jsxs)(n.h2,{id:"initializable-changes",children:[(0,i.jsx)(n.code,{children:"Initializable"})," Changes"]}),"\n",(0,i.jsxs)(n.p,{children:["The way to register a ",(0,i.jsx)(n.code,{children:"Initializable"})," has changed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:"// highlight-red\n@Initializer\n// highlight-green\n@Singleton\nobject ExampleInitializer : Initializable {\n    override suspend fun initialize() {\n        // Do something when the extension is initialized\n    }\n\n    override suspend fun shutdown() {\n        // Do something when the extension is shutdown\n    }\n}\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"triggering-entries-changes",children:"Triggering Entries Changes"}),"\n",(0,i.jsxs)(n.p,{children:["Since Typewriter now has ",(0,i.jsx)(n.code,{children:"InteractionContext"}),", this needs to be passed around when triggering entries.\nAs a lot changed, have a look at the ",(0,i.jsx)(n.a,{href:"../triggering",children:"Triggering Entries"})," page for more information."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:"val entries: List<TriggerableEntry> = ...\n\n// highlight-red\nentries triggerAllFor player\n// highlight-green\nentries.triggerAllFor(player, context())\n"})}),"\n",(0,i.jsx)(n.h2,{id:"actionentry-changes",children:"ActionEntry Changes"}),"\n",(0,i.jsxs)(n.p,{children:["As the ",(0,i.jsx)(n.code,{children:"ActionEntry"})," now needs a ",(0,i.jsx)(n.code,{children:"InteractionContext"}),", the ",(0,i.jsx)(n.code,{children:"execute"})," function signature has changed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    // highlight-red-start\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply all the modifiers.\n    // highlight-red-end\n    // highlight-green-start\n    override fun ActionTrigger.execute() {\n        // Will now automatically apply all the modifiers.\n        // Do something with the player\n    }\n}\n\n## Removal of `CustomTriggeringActionEntry`\n\nAs the action entry now can specify itself how Typewriter should handle the triggering:\n\n```kotlin showLineNumbers\n@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n// highlight-red-start\n    @SerializedName("triggers")\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        // Do something with the player\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    // highlight-red-end\n// highlight-green-start\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n override fun ActionTrigger.execute() {\n        // This disables Typewriter\'s automatic triggering of the next entries,\n        // and disables the automatic apply of the modifiers.\n        disableAutomaticTriggering()\n\n        // Now you can manually trigger the next entries.\n        triggerManually()\n\n        // Or if you want to specify which triggers to trigger, you can do so.\n        triggers.filterIndexed { index, _ -> index % 2 == 0 }.triggerFor(player)\n\n        // You can also manually apply the modifiers.\n        applyModifiers()\n        // highlight-green-end\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dialogue-messenger-changes",children:"Dialogue Messenger Changes"}),"\n",(0,i.jsxs)(n.p,{children:["As it was the only place in Typewriter where you had to register something with an annotation, we changed it to allow the DialogueEntry to specify the messengers that it uses.\nAdditionally, we now need to forward the ",(0,i.jsx)(n.code,{children:"context"})," parameter to the messengers."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry {\n    // highlight-green-start\n    // May return null to skip the dialogue\n    override fun messenger(player: Player, context: InteractionContext): DialogueMessenger<*>? {\n        // You can use if statements to return a different messenger depending on different conditions\n        return ExampleDialogueDialogueMessenger(player, context, this)\n    }\n    // highlight-green-end\n}\n\n// highlight-red-start\n@Messenger(ExampleDialogueEntry::class)\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n    // highlight-red-end\n// highlight-green-start\nclass ExampleDialogueDialogueMessenger(player: Player, context: InteractionContext, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, context, entry) {\n// highlight-green-end\n\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(context: TickContext) {\n        super.tick(context)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5400:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(74848);t(96540);var i=t(34164);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_Ymn6",a),hidden:t,children:n})}},53720:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(74848),i=t(96540),a=t(34164),s=t(65697),l=t(56347),o=t(56650),h=t(9226),g=t(34387),d=t(10426);function c(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function u(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t(20162);function m(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o}=e,h=[],{blockElementScrollPositionUntilNextRender:g}=(0,s.a_)(),d=e=>{let n=e.currentTarget,t=o[h.indexOf(n)].value;t!==i&&(g(n),l(t))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{let t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>h.push(e),onKeyDown:c,onClick:d,...s,className:(0,a.A)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function y(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,a=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??c(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,g.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,p]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[m,y]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,h.aZ)(a),(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:t,groupId:r}),[x,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:r}),f=(()=>{let e=m??x;return u({value:e,tabValues:a})?e:null})();return(0,o.A)(()=>{f&&p(f)},[f]),{selectedValue:s,selectValue:(0,i.useCallback)(e=>{if(!u({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),y(e),v(e)},[y,v,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.A)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(m,{...n,...e}),(0,r.jsx)(y,{...n,...e})]})}function v(e){let n=(0,p.A)();return(0,r.jsx)(x,{...e,children:c(e.children)},String(n))}}}]);