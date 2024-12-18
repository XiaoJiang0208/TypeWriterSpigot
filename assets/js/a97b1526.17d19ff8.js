"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59928],{31621:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>o});let d=JSON.parse('{"id":"adapters/BasicAdapter/entries/fact/value_placeholder","title":"Value Placeholder Fact","description":"A fact that is computed from a placeholder.","source":"@site/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/fact/value_placeholder.mdx","sourceDirName":"adapters/BasicAdapter/entries/fact","slug":"/adapters/BasicAdapter/entries/fact/value_placeholder","permalink":"/0.4.2/adapters/BasicAdapter/entries/fact/value_placeholder","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/fact/value_placeholder.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734523215000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Timed Fact","permalink":"/0.4.2/adapters/BasicAdapter/entries/fact/timed_fact"},"next":{"title":"Custom Sound","permalink":"/0.4.2/adapters/BasicAdapter/entries/sound/custom_sound"}}');var r=t(74848),l=t(28453),s=t(29214);t(40497),t(96867);let n={},i="Value Placeholder Fact",c={},o=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return s||u("fields",!1),s.CommentField||u("fields.CommentField",!0),s.EntryField||u("fields.EntryField",!0),s.ReadonlyFactInfo||u("fields.ReadonlyFactInfo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"value-placeholder-fact",children:"Value Placeholder Fact"})}),"\n",(0,r.jsxs)(a.p,{children:["A ",(0,r.jsx)(a.a,{href:"/docs/creating-stories/facts",children:"fact"})," that is computed from a placeholder.\nThis placeholder is evaluated when the fact is read and can return anything.\nThe value will be computed based on the ",(0,r.jsx)(a.code,{children:"values"})," specified."]}),"\n",(0,r.jsx)(s.ReadonlyFactInfo,{}),"\n",(0,r.jsx)(a.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,r.jsx)(a.p,{children:"If you only want to run certain actions if the player is in creative mode.\nOr depending on the weather, change the dialogue of the NPC."}),"\n",(0,r.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(s.CommentField,{}),"\n",(0,r.jsx)(s.EntryField,{name:"Placeholder",required:!0,placeholders:!0,children:(0,r.jsx)(a.p,{children:"Placeholder to parse (e.g. %player_gamemode%"})}),"\n",(0,r.jsxs)(s.EntryField,{name:"Values",required:!0,map:!0,regex:!0,children:[(0,r.jsx)(a.p,{children:"The values to match the placeholder with and their corresponding fact value."}),(0,r.jsx)(a.p,{children:"An example would be:"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"values:\nSURVIVAL: 0\nCREATIVE: 1\nADVENTURE: 2\nSPECTATOR: 3\n"})}),(0,r.jsxs)(a.p,{children:["If the placeholder returns ",(0,r.jsx)(a.code,{children:"CREATIVE"}),", the fact value will be ",(0,r.jsx)(a.code,{children:"1"}),"."]}),(0,r.jsxs)(a.p,{children:["If no value matches, the fact value will be ",(0,r.jsx)(a.code,{children:"0"}),"."]})]})]})}function p(e={}){let{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function u(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);