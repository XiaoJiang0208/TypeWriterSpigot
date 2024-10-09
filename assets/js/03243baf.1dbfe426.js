"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69040],{45700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=t(74848),d=t(28453),s=t(50494),r=t(6178);t(14783);const o={},i="Detect Command Ran Event",c={id:"adapters/BasicAdapter/entries/event/on_detect_command_ran",title:"Detect Command Ran Event",description:"The Detect Command Ran Event event is triggered when an already existing command is ran.",source:"@site/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/event/on_detect_command_ran.mdx",sourceDirName:"adapters/BasicAdapter/entries/event",slug:"/adapters/BasicAdapter/entries/event/on_detect_command_ran",permalink:"/0.4.2/adapters/BasicAdapter/entries/event/on_detect_command_ran",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/event/on_detect_command_ran.mdx",tags:[],version:"0.4.2",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1728481493e3,frontMatter:{},sidebar:"adapters",previous:{title:"Block Break Event",permalink:"/0.4.2/adapters/BasicAdapter/entries/event/on_block_break"},next:{title:"Interact Block Event",permalink:"/0.4.2/adapters/BasicAdapter/entries/event/on_interact_with_block"}},l={},m=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,d.R)(),...e.components};return s||u("fields",!1),s.EntryField||u("fields.EntryField",!0),s.TriggersField||u("fields.TriggersField",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"detect-command-ran-event",children:"Detect Command Ran Event"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Detect Command Ran Event"})," event is triggered when an ",(0,a.jsx)(n.strong,{children:"already existing"})," command is ran."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["This event only works if the command already exists. If you are trying to make a new command that does not exist already, use the ",(0,a.jsx)(n.a,{href:"on_run_command",children:(0,a.jsx)(n.code,{children:"Run Command Event"})})," instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,a.jsx)(n.p,{children:"This event could be used to trigger a response when a specific command has been run.\nFor example, you could have a command that sends a message to a channel when a command has been run,\nwhich could be used as an audit log for your admins."}),"\n",(0,a.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsx)(s.TriggersField,{}),"\n",(0,a.jsxs)(s.EntryField,{name:"Command",required:!0,regex:!0,children:[(0,a.jsxs)(n.p,{children:["The command to listen for.\nThis can be partial, so if you wanted to listen for any warp command,\nyou could use ",(0,a.jsx)("code",{children:"warp"})," as the command.\nHowever, this can also include parameters, so if you\nwanted to listen if the player warps to spawn, you could use\n",(0,a.jsx)("code",{children:"warp spawn"})," as the command."]}),(0,a.jsx)("br",{}),(0,a.jsx)(r.A,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Do not include the ",(0,a.jsx)("code",{children:"/"})," at the start of the command.\nThis will be added automatically."]})})]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);