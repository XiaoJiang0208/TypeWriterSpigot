"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46330],{60466:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>l});let a=JSON.parse('{"id":"adapters/BasicAdapter/entries/cinematic/camera_cinematic","title":"Camera Cinematic","description":"The Camera Cinematic entry is used to create a cinematic camera path.","source":"@site/versioned_docs/version-0.7.0/adapters/BasicAdapter/entries/cinematic/camera_cinematic.mdx","sourceDirName":"adapters/BasicAdapter/entries/cinematic","slug":"/adapters/BasicAdapter/entries/cinematic/camera_cinematic","permalink":"/adapters/BasicAdapter/entries/cinematic/camera_cinematic","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.7.0/adapters/BasicAdapter/entries/cinematic/camera_cinematic.mdx","tags":[],"version":"0.7.0","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734551518000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Blinding Cinematic","permalink":"/adapters/BasicAdapter/entries/cinematic/blinding_cinematic"},"next":{"title":"Cinematic Console Command","permalink":"/adapters/BasicAdapter/entries/cinematic/cinematic_console_command"}}');var n=i(74848),r=i(28453),s=i(29214);i(40497),i(96867);let d={},c="Camera Cinematic",o={},l=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return s||m("fields",!1),s.CriteriaField||m("fields.CriteriaField",!0),s.EntryField||m("fields.EntryField",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"camera-cinematic",children:"Camera Cinematic"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Camera Cinematic"})," entry is used to create a cinematic camera path."]}),"\n",(0,n.jsx)(t.p,{children:"Durations for path points calculated based on the total duration of each segment and specified path point's duration.\nSuppose you have a segment with a duration of 300 ticks, and it has 3 path points.\nThen we specify the duration on the second path point as 200 ticks.\nThe resulting durations between path points are as follows:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"From"}),(0,n.jsx)(t.th,{children:"To"}),(0,n.jsx)(t.th,{children:"Duration"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"200"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["::: warning\nSince the duration of a path point is the duration from that point to the next point,\nthe last path point will always have a duration of ",(0,n.jsx)(t.code,{children:"0"}),".\nRegardless of the duration specified on the last path point.\n:::"]}),"\n",(0,n.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,n.jsx)(t.p,{children:"When you want to direct the player's attention to a specific object/location.\nOr when you want to show off a build."}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(s.CriteriaField,{}),"\n",(0,n.jsx)(s.EntryField,{name:"Segments",required:!0,multiple:!0,segment:!0})]})}function p(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);