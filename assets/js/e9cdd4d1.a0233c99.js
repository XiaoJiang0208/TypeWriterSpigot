"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92913],{52029:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(74848),a=r(28453);const s={},i="SpeakerEntry",d={id:"develop/adapters/entries/static/speaker",title:"SpeakerEntry",description:"The SpeakerEntry is a specialized interface extending the EntityEntry.",source:"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/speaker.mdx",sourceDirName:"develop/02-adapters/03-entries/static",slug:"/develop/adapters/entries/static/speaker",permalink:"/0.4.2/develop/adapters/entries/static/speaker",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/speaker.mdx",tags:[],version:"0.4.2",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1728481493e3,frontMatter:{},sidebar:"develop",previous:{title:"SoundSourceEntry",permalink:"/0.4.2/develop/adapters/entries/static/sound_source"},next:{title:"ActionEntry",permalink:"/0.4.2/develop/adapters/entries/trigger/action"}},o={},c=[{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"speakerentry",children:"SpeakerEntry"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SpeakerEntry"})," is a specialized interface extending the ",(0,t.jsx)(n.code,{children:"EntityEntry"}),".\nIt is designed to enhance dialogues in the game by associating non-player characters (NPCs) with specific names and sounds.\nThis feature is pivotal for creating more immersive and interactive storytelling experiences in Minecraft."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, Icons.PERSON_TALKING)\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: String = "",\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This speaker can be used by users in various dialogues and interactions within the game.\nNormally, you never need to access the ",(0,t.jsx)(n.code,{children:"SpeakerEntry"})," directly, as it is automatically handled by the ",(0,t.jsx)(n.code,{children:"DialogueSequence"}),".\nIf you ever do need to access the ",(0,t.jsx)(n.code,{children:"SpeakerEntry"}),", you can do so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val id = // ID of the speaker\nval entry = Query.findById<ExampleSpeakerEntry>(id)\nval name = entry.displayName\nval sound = entry.sound\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);