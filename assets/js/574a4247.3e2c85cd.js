"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33319],{99893:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});let n=JSON.parse('{"id":"develop/adapters/entries/trigger/dialogue","title":"DialogueEntry","description":"The DialogueEntry is used to define a type of dialogue. When a DialogueEntry is triggered it\'s associated DialogueMessenger will be used to display the dialogue to the player.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/dialogue.mdx","sourceDirName":"develop/02-adapters/03-entries/trigger","slug":"/develop/adapters/entries/trigger/dialogue","permalink":"/0.4.2/develop/adapters/entries/trigger/dialogue","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/dialogue.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten-Mrfc","lastUpdatedAt":1731950932000,"frontMatter":{},"sidebar":"develop","previous":{"title":"CustomTriggeringActionEntry","permalink":"/0.4.2/develop/adapters/entries/trigger/custom_triggering_action"},"next":{"title":"EventEntry","permalink":"/0.4.2/develop/adapters/entries/trigger/event"}}');var r=t(74848),s=t(28453);let a={},l="DialogueEntry",d={},o=[{value:"Usage",id:"usage",level:2}];function c(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"dialogueentry",children:"DialogueEntry"})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"DialogueEntry"})," is used to define a type of dialogue. When a ",(0,r.jsx)(i.code,{children:"DialogueEntry"})," is triggered it's associated ",(0,r.jsx)(i.code,{children:"DialogueMessenger"})," will be used to display the dialogue to the player.\nMultiple ",(0,r.jsx)(i.code,{children:"DialogueMessenger"}),"'s can be associated with a single ",(0,r.jsx)(i.code,{children:"DialogueEntry"})," and the ",(0,r.jsx)(i.code,{children:"DialogueMessenger"})," that is used is determined by the ",(0,r.jsx)(i.code,{children:"DialogueMessenger"}),"'s ",(0,r.jsx)(i.code,{children:"MessengerFilter"}),"."]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["There can always be at most one ",(0,r.jsx)(i.code,{children:"DialogueEntry"})," active for a player.\nThis is automatically handled by Typewriter."]})}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-kotlin",children:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, Icons.MESSAGE)\nclass ExampleDialogueEntry(\n) : SoundIdEntr    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<String> = emptyList(),\n    override val speaker: String = "",\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n): DialogueEntry\n'})}),"\n",(0,r.jsxs)(i.p,{children:["To define the messenger that will be used to display the dialogue to the player, you must create a class that implements the ",(0,r.jsx)(i.code,{children:"DialogueMessenger"})," interface."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-kotlin",children:'@Messenger(ExampleDialogueEntry::class)\nclass UniversalMessageDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(cycle: Int) {\n        super.tick(cycle)\n        if (cycle == 0) {\n            player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n            state = MessengerState.FINISHED\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"DialogueMessenger"})," has a ",(0,r.jsx)(i.code,{children:"MessengerFilter"})," that is used to determine if the messenger should be used to display the dialogue to the player. When having multiple ",(0,r.jsx)(i.code,{children:"MessageFilter"}),"'s make sure that they are deterministic. So if you have some condition, such as if they are bedrock players. One message check that the player is a bedrock player and the other filter check that they are not."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"state"})," of the messenger determines what happens to the messenger."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"MessengerState.FINISHED"})," - The dialogue is finished and the next dialogue in the chain will be triggered."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"MessengerState.CANCELLED"})," - The dialogue is cancelled and dialogue chain is stopped, even if there are more dialogues in the chain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"MessengerState.RUNNING"})," - The dialogue is still running and will continue to run until the state is changed."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The state object can be changed inside the ",(0,r.jsx)(i.code,{children:"tick"})," method or from outside. It can even be changed from the plugin itself. For example when the user runs a command the dialogue will be cancelled."]}),"\n",(0,r.jsx)(i.p,{children:"There are some additional lifecycle methods that can be overridden."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"init"})," - Called when the messenger is initialized. Will be called before the first ",(0,r.jsx)(i.code,{children:"tick"})," call."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"dispose"})," - Called when the messenger is disposed. By default this will unregister any listeners that were registered by the messenger."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"end"})," - Normally this does not need to be overwritten. Only if you do not want to resend the chat history for some reason."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);