"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91517],{3519:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=i(74848),n=i(28453),r=i(50494);i(6178),i(14783);const s={},d="Camera Cinematic",c={id:"adapters/BasicAdapter/entries/cinematic/camera_cinematic",title:"Camera Cinematic",description:"The Camera Cinematic entry is used to create a cinematic camera path.",source:"@site/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/cinematic/camera_cinematic.mdx",sourceDirName:"adapters/BasicAdapter/entries/cinematic",slug:"/adapters/BasicAdapter/entries/cinematic/camera_cinematic",permalink:"/adapters/BasicAdapter/entries/cinematic/camera_cinematic",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/cinematic/camera_cinematic.mdx",tags:[],version:"0.5.1",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1726402892e3,frontMatter:{},sidebar:"adapters",previous:{title:"Blinding Cinematic",permalink:"/adapters/BasicAdapter/entries/cinematic/blinding_cinematic"},next:{title:"Cinematic Console Command",permalink:"/adapters/BasicAdapter/entries/cinematic/cinematic_console_command"}},o={},l=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return r||m("fields",!1),r.CriteriaField||m("fields.CriteriaField",!0),r.EntryField||m("fields.EntryField",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"camera-cinematic",children:"Camera Cinematic"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Camera Cinematic"})," entry is used to create a cinematic camera path."]}),"\n",(0,a.jsx)(t.p,{children:"Durations for path points calculated based on the total duration of each segment and specified path point's duration.\nSuppose you have a segment with a duration of 300 ticks, and it has 3 path points.\nThen we specify the duration on the second path point as 200 ticks.\nThe resulting durations between path points are as follows:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"From"}),(0,a.jsx)(t.th,{children:"To"}),(0,a.jsx)(t.th,{children:"Duration"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"100"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"3"}),(0,a.jsx)(t.td,{children:"200"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["::: warning\nSince the duration of a path point is the duration from that point to the next point,\nthe last path point will always have a duration of ",(0,a.jsx)(t.code,{children:"0"}),".\nRegardless of the duration specified on the last path point.\n:::"]}),"\n",(0,a.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,a.jsx)(t.p,{children:"When you want to direct the player's attention to a specific object/location.\nOr when you want to show off a build."}),"\n",(0,a.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsx)(r.CriteriaField,{}),"\n",(0,a.jsx)(r.EntryField,{name:"Segments",required:!0,multiple:!0,segment:!0})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);