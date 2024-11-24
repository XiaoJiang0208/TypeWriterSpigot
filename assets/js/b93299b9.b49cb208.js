"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40326],{24720:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>a,toc:()=>l});let a=JSON.parse('{"id":"adapters/EntityAdapter/entries/activity/timed_activity","title":"Timed Activity","description":"The TimedActivityEntry is an activity that allows child activities for a limited amount of time.","source":"@site/versioned_docs/version-0.6.1/adapters/EntityAdapter/entries/activity/timed_activity.mdx","sourceDirName":"adapters/EntityAdapter/entries/activity","slug":"/adapters/EntityAdapter/entries/activity/timed_activity","permalink":"/adapters/EntityAdapter/entries/activity/timed_activity","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.6.1/adapters/EntityAdapter/entries/activity/timed_activity.mdx","tags":[],"version":"0.6.1","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1732447497000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Target Location Activity","permalink":"/adapters/EntityAdapter/entries/activity/target_location_activity"},"next":{"title":"Trigger Activity","permalink":"/adapters/EntityAdapter/entries/activity/trigger_activity"}}');var d=i(74848),n=i(28453),r=i(29214);i(40497),i(96867);let o={},s="Timed Activity",c={},l=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(t){let e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...t.components};return r||y("fields",!1),r.EntryField||y("fields.EntryField",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"timed-activity",children:"Timed Activity"})}),"\n",(0,d.jsxs)(e.p,{children:["The ",(0,d.jsx)(e.code,{children:"TimedActivityEntry"})," is an activity that allows child activities for a limited amount of time."]}),"\n",(0,d.jsx)(e.p,{children:"When the duration is up, the activity will deactivate.\nThen the activity will be on cooldown for a set amount of time before it can be activated again."}),"\n",(0,d.jsx)(e.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,d.jsx)(e.p,{children:"This could be used to make an entity do something for a limited amount of time."}),"\n",(0,d.jsx)(e.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsx)(r.EntryField,{name:"Duration",required:!0,duration:!0,children:(0,d.jsx)(e.p,{children:"The duration child activities will be active for."})}),"\n",(0,d.jsx)(r.EntryField,{name:"Cooldown",required:!0,duration:!0,children:(0,d.jsx)(e.p,{children:"The cooldown time before the activity can be activated again."})}),"\n",(0,d.jsx)(r.EntryField,{name:"Active Activity",required:!0,children:(0,d.jsx)(e.p,{children:"The activity that will be used when the duration is active."})}),"\n",(0,d.jsx)(r.EntryField,{name:"Cooldown Activity",required:!0,children:(0,d.jsx)(e.p,{children:"The activity that will be used when it is on cooldown."})})]})}function v(t={}){let{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(h,{...t})}):h(t)}function y(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);