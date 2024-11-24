"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96243],{22441:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});let a=JSON.parse('{"id":"adapters/BasicAdapter/entries/fact/quest_status_fact","title":"Quest Status Fact","description":"The QuestStatusFact is a fact that returns the status of a specific quest.","source":"@site/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/fact/quest_status_fact.mdx","sourceDirName":"adapters/BasicAdapter/entries/fact","slug":"/adapters/BasicAdapter/entries/fact/quest_status_fact","permalink":"/0.5.1/adapters/BasicAdapter/entries/fact/quest_status_fact","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/fact/quest_status_fact.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1732447497000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Permanent Fact","permalink":"/0.5.1/adapters/BasicAdapter/entries/fact/permanent_fact"},"next":{"title":"Session Fact","permalink":"/0.5.1/adapters/BasicAdapter/entries/fact/session_fact"}}');var i=s(74848),d=s(28453),r=s(29214);s(40497),s(96867);let n={},c="Quest Status Fact",o={},l=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return r||f("fields",!1),r.CommentField||f("fields.CommentField",!0),r.EntryField||f("fields.EntryField",!0),r.ReadonlyFactInfo||f("fields.ReadonlyFactInfo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quest-status-fact",children:"Quest Status Fact"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"QuestStatusFact"})," is a fact that returns the status of a specific quest."]}),"\n",(0,i.jsx)(r.ReadonlyFactInfo,{}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Status"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Inactive"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Active"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Active and Tracked"}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Completed"}),(0,i.jsx)(t.td,{children:"-1"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"completed"})," status has a value of ",(0,i.jsx)(t.strong,{children:"-1"}),", this is to make it easy to query if the quest is active by ",(0,i.jsx)(t.code,{children:">= 1"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,i.jsx)(t.p,{children:"This can be used to abstract the status of a quest.\nIf a quest has multiple criteria, you can check for this fact instead of checking for each criterion."}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(r.CommentField,{}),"\n",(0,i.jsx)(r.EntryField,{name:"Group",required:!0}),"\n",(0,i.jsx)(r.EntryField,{name:"Quest",required:!0})]})}function u(e={}){let{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);