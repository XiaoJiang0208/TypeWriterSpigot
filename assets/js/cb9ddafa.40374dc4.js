"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78065],{8403:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>o});let a=JSON.parse('{"id":"adapters/BasicAdapter/entries/fact/quest_status_fact","title":"Quest Status Fact","description":"The QuestStatusFact is a fact that returns the status of a specific quest.","source":"@site/docs/adapters/BasicAdapter/entries/fact/quest_status_fact.mdx","sourceDirName":"adapters/BasicAdapter/entries/fact","slug":"/adapters/BasicAdapter/entries/fact/quest_status_fact","permalink":"/beta/adapters/BasicAdapter/entries/fact/quest_status_fact","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/adapters/BasicAdapter/entries/fact/quest_status_fact.mdx","tags":[],"version":"current","lastUpdatedBy":"Marten-Mrfc","lastUpdatedAt":1731950932000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Permanent Fact","permalink":"/beta/adapters/BasicAdapter/entries/fact/permanent_fact"},"next":{"title":"Session Fact","permalink":"/beta/adapters/BasicAdapter/entries/fact/session_fact"}}');var d=s(74848),r=s(28453),i=s(29214);s(40497),s(96867);let n={},c="Quest Status Fact",l={},o=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(t){let e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return i||f("fields",!1),i.CommentField||f("fields.CommentField",!0),i.EntryField||f("fields.EntryField",!0),i.ReadonlyFactInfo||f("fields.ReadonlyFactInfo",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"quest-status-fact",children:"Quest Status Fact"})}),"\n",(0,d.jsxs)(e.p,{children:["The ",(0,d.jsx)(e.code,{children:"QuestStatusFact"})," is a fact that returns the status of a specific quest."]}),"\n",(0,d.jsx)(i.ReadonlyFactInfo,{}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Status"}),(0,d.jsx)(e.th,{children:"Value"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Inactive"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Active"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Active and Tracked"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Completed"}),(0,d.jsx)(e.td,{children:"-1"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{type:"warning",children:(0,d.jsxs)(e.p,{children:["The ",(0,d.jsx)(e.strong,{children:"completed"})," status has a value of ",(0,d.jsx)(e.strong,{children:"-1"}),", this is to make it easy to query if the quest is active by ",(0,d.jsx)(e.code,{children:">= 1"}),"."]})}),"\n",(0,d.jsx)(e.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,d.jsx)(e.p,{children:"This can be used to abstract the status of a quest.\nIf a quest has multiple criteria, you can check for this fact instead of checking for each criterion."}),"\n",(0,d.jsx)(e.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsx)(i.CommentField,{}),"\n",(0,d.jsx)(i.EntryField,{name:"Group",required:!0}),"\n",(0,d.jsx)(i.EntryField,{name:"Quest",required:!0})]})}function u(t={}){let{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(h,{...t})}):h(t)}function f(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);