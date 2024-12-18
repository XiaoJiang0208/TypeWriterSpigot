"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76265],{48526:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>m});let r=JSON.parse('{"id":"adapters/BasicAdapter/entries/action/remove_item","title":"Remove Item Action","description":"The Remove Item Action is an action that removes an item from the player\'s inventory.","source":"@site/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/action/remove_item.mdx","sourceDirName":"adapters/BasicAdapter/entries/action","slug":"/adapters/BasicAdapter/entries/action/remove_item","permalink":"/0.4.2/adapters/BasicAdapter/entries/action/remove_item","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/adapters/BasicAdapter/entries/action/remove_item.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734534199000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Random Trigger Gate","permalink":"/0.4.2/adapters/BasicAdapter/entries/action/random_trigger"},"next":{"title":"Message Action","permalink":"/0.4.2/adapters/BasicAdapter/entries/action/send_message"}}');var n=i(74848),s=i(28453),o=i(29214),a=i(40497),d=i(96867);let c={},l="Remove Item Action",h={},m=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function p(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return o||v("fields",!1),o.CriteriaField||v("fields.CriteriaField",!0),o.EntryField||v("fields.EntryField",!0),o.ModifiersField||v("fields.ModifiersField",!0),o.TriggersField||v("fields.TriggersField",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"remove-item-action",children:"Remove Item Action"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Remove Item Action"})," is an action that removes an item from the player's inventory.\nThis action provides you with the ability to remove items from the player's inventory in response to specific events."]}),"\n",(0,n.jsx)(a.A,{type:"caution",children:(0,n.jsxs)(t.p,{children:['This action will try to remove "as much as possible" but does not verify if the player has enough items in their inventory.\nIf you want to guarantee that the player has enough items in their inventory, add an\n',(0,n.jsx)(d.A,{to:"../fact/inventory_item_count_fact",children:"Inventory Item Count Fact"})," to the criteria."]})}),"\n",(0,n.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,n.jsxs)(t.p,{children:["This can be used when ",(0,n.jsx)(t.code,{children:"giving"})," an NPC an item, and you want to remove the item from the player's inventory.\nOr when you want to remove a key from the player's inventory after they use it to unlock a door."]}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(o.CriteriaField,{}),"\n",(0,n.jsx)(o.ModifiersField,{}),"\n",(0,n.jsx)(o.TriggersField,{}),"\n",(0,n.jsx)(o.EntryField,{name:"Item",required:!0,children:(0,n.jsx)(t.p,{children:"The item to remove."})})]})}function u(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);