(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60510],{75024:(e,A,t)=>{"use strict";t.r(A),t.d(A,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>h});let i=JSON.parse('{"id":"docs/creating-stories/facts/index","title":"Facts","description":"Facts are essentially variables. They store information that can be modified by other entries. All facts are numbers and are treated as such.","source":"@site/versioned_docs/version-0.6.1/docs/03-creating-stories/03-facts/index.mdx","sourceDirName":"docs/03-creating-stories/03-facts","slug":"/docs/creating-stories/facts/","permalink":"/docs/creating-stories/facts/","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.6.1/docs/03-creating-stories/03-facts/index.mdx","tags":[],"version":"0.6.1","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1734202004000,"frontMatter":{"difficulty":"Normal"},"sidebar":"tutorialSidebar","previous":{"title":"First Join Cinematic","permalink":"/docs/creating-stories/cinematics/first-join"},"next":{"title":"Entities & NPC\'s","permalink":"/docs/creating-stories/entity-extension/"}}');var a=t(74848),s=t(28453),r=t(53720),n=t(5400),l=t(5453);let c={difficulty:"Normal"},o="Facts",d={},h=[{value:"Why Use Facts?",id:"why-use-facts",level:2},{value:"Types of facts",id:"types-of-facts",level:3},{value:"Groups",id:"groups",level:2},{value:"Fields",id:"fields",level:2},{value:"Criteria",id:"criteria",level:3},{value:"Modifiers",id:"modifiers",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let A={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.header,{children:(0,a.jsx)(A.h1,{id:"facts",children:"Facts"})}),"\n",(0,a.jsx)(A.p,{children:"Facts are essentially variables. They store information that can be modified by other entries. All facts are numbers and are treated as such."}),"\n",(0,a.jsxs)(A.p,{children:["The ",(0,a.jsx)(A.a,{href:"/adapters/BasicAdapter/",children:(0,a.jsx)(A.code,{children:"Basic Extension"})})," encompasses numerous facts available for use. However, it's important to note that ",(0,a.jsx)(A.a,{href:"/adapters/",children:(0,a.jsx)(A.code,{children:"extensions"})})," have the capability to further augment the array of available facts."]}),"\n",(0,a.jsx)(A.h2,{id:"why-use-facts",children:"Why Use Facts?"}),"\n",(0,a.jsx)(A.p,{children:"Facts play a crucial role in dynamic content creation and system behavior customization. Here are some reasons to consider using facts:"}),"\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:["\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Dynamic Quests:"})," Track player progress in quests by using facts to store and modify completion status."]}),"\n"]}),"\n",(0,a.jsxs)(A.li,{children:["\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Customization:"})," Personalize player experiences by utilizing facts to adjust in-game parameters, such as difficulty levels or character attributes."]}),"\n"]}),"\n",(0,a.jsxs)(A.li,{children:["\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Interactive Storytelling:"})," Enhance narrative elements by employing facts to remember player choices and actions, shaping the evolving story."]}),"\n"]}),"\n",(0,a.jsxs)(A.li,{children:["\n",(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Achievement Systems:"})," Implement achievement tracking by using facts to record specific milestones and accomplishments."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(A.h3,{id:"types-of-facts",children:"Types of facts"}),"\n",(0,a.jsx)(A.p,{children:"Facts have two types: readable and writable."}),"\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Readable Facts:"})," Used in the criteria of an entry. For example, checking if a player has a certain item in their inventory."]}),"\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Writable Facts:"})," Used in modifiers to modify the fact's value. For instance, updating a player's quest progression."]}),"\n"]}),"\n",(0,a.jsx)(A.admonition,{type:"info",children:(0,a.jsxs)(A.p,{children:["Some facts are both readable and writable. For example, the ",(0,a.jsx)(A.a,{href:"../../../adapters/BasicAdapter/entries/fact/permanent_fact",children:"permanent fact"})," can be used in both criteria and modifiers.\nBut some facts are only readable. For example, the ",(0,a.jsx)(A.a,{href:"../../../adapters/BasicAdapter/entries/fact/inventory_item_count_fact",children:"inventory item count fact"})," can only be used in criteria."]})}),"\n",(0,a.jsx)(A.h2,{id:"groups",children:"Groups"}),"\n",(0,a.jsx)(A.p,{children:"In a fact you can select a group. There are 3 types of groups:"}),"\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Global"}),": Sets a fact for all players."]}),"\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"World"}),": Sets a fact for all players in a specific world."]}),"\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Player"}),": Sets a fact for a specific player."]}),"\n"]}),"\n",(0,a.jsx)(A.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsx)(A.p,{children:"In some entries, there are fields that influence the way facts are handled."}),"\n",(0,a.jsx)(l.A,{img:t(26538),alt:"Criteria and modifiers fields",width:400}),"\n",(0,a.jsx)(A.h3,{id:"criteria",children:"Criteria"}),"\n",(0,a.jsxs)(A.p,{children:["Criteria is the condition for an entry, e.g., ",(0,a.jsx)(A.code,{children:"if fact = 10 then..."}),". It controls whether an entry will occur."]}),"\n",(0,a.jsx)(l.A,{img:t(97722),alt:"Criteria field",width:400}),"\n",(0,a.jsx)(A.p,{children:"When using criteria, follow these steps:"}),"\n",(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsx)(A.li,{children:"Select the fact to check."}),"\n",(0,a.jsx)(A.li,{children:"Choose the operator."}),"\n",(0,a.jsx)(A.li,{children:"Insert the value for the operator to check."}),"\n"]}),"\n",(0,a.jsx)(A.h3,{id:"modifiers",children:"Modifiers"}),"\n",(0,a.jsx)(A.p,{children:"Modifiers, as the name suggests, modify a fact."}),"\n",(0,a.jsx)(l.A,{img:t(48654),alt:"Modifier field",width:400}),"\n",(0,a.jsx)(A.p,{children:"When using modifiers, follow these steps:"}),"\n",(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsx)(A.li,{children:"Select the fact to modify."}),"\n",(0,a.jsx)(A.li,{children:"Select the operator. You can change the value directly (=) or add to it (+)."}),"\n",(0,a.jsx)(A.li,{children:"Insert the value for the operator to modify."}),"\n"]}),"\n",(0,a.jsx)(A.admonition,{type:"warning",children:(0,a.jsxs)(A.p,{children:["Modifiers only run when the entry is executed.\nIf the entry has criteria and ",(0,a.jsx)(A.strong,{children:"one of the criteria"})," is ",(0,a.jsx)(A.code,{children:"false"}),", then the entry won't be executed, and the fact won't be modified."]})}),"\n",(0,a.jsx)(A.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,a.jsx)(A.p,{children:"To get you started with facts, we will use a permanent fact to track progression in a quest."}),"\n",(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsxs)(A.li,{children:["Create a new page and select it as ",(0,a.jsx)(A.code,{children:"static"}),". Give it the name ",(0,a.jsx)(A.code,{children:"Playerprogress"})]}),"\n",(0,a.jsxs)(A.li,{children:["Click on the + icon and select ",(0,a.jsx)(A.code,{children:"Add Permanent Fact"}),". Rename it to ",(0,a.jsx)(A.code,{children:"Playerprogress"})," and give it a nice comment.","\n",(0,a.jsx)(l.A,{img:t(21231),alt:"Static page button"}),"\n"]}),"\n",(0,a.jsx)(A.li,{children:"Select the player group."}),"\n",(0,a.jsxs)(A.li,{children:["On the sequence page, click on an action.","\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:["Set a ",(0,a.jsx)(A.strong,{children:"Criteria:"})," Check if ",(0,a.jsx)(A.code,{children:"Playerprogress"})," == 0."]}),"\n",(0,a.jsxs)(A.li,{children:["Set a ",(0,a.jsx)(A.strong,{children:"Modifier:"})," If criteria are met, update ",(0,a.jsx)(A.code,{children:"Playerprogress"})," to 1."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(A.li,{children:["Create additional actions to represent different quest stages, modifying ",(0,a.jsx)(A.code,{children:"Playerprogress"})," accordingly."]}),"\n"]}),"\n",(0,a.jsx)(A.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(A.p,{children:"There are many possibilities with the fact's system. Here are some examples:"}),"\n",(0,a.jsxs)(r.A,{groupId:"example",queryString:!0,children:[(0,a.jsxs)(n.A,{value:"Gathering Items Quest",label:"Gathering Items Quest",default:!0,children:[(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Objective:"})," A player talks to an NPC and needs to gather items."]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Fact Used:"})}),(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Readable Fact:"})," ",(0,a.jsx)(A.a,{href:"../../../adapters/BasicAdapter/entries/fact/inventory_item_count_fact",children:"Inventory Item Count"})]}),"\n"]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Scenario:"})}),(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsx)(A.li,{children:"The player talks to the NPC."}),"\n",(0,a.jsx)(A.li,{children:"Check the criteria using the Inventory Item Count Fact to verify if the player has the required items."}),"\n"]})]}),(0,a.jsxs)(n.A,{value:"Progression Tracking",label:"Progression Tracking",children:[(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Objective:"})," Track a player's progression through different quest stages."]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Fact Used:"})}),(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Writable Fact:"})," ",(0,a.jsx)(A.a,{href:"../../../adapters/BasicAdapter/entries/fact/permanent_fact",children:"Permanent Fact"})]}),"\n"]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Scenario:"})}),(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsx)(A.li,{children:"The player talks to an NPC (progression set to 1)."}),"\n",(0,a.jsx)(A.li,{children:"Completes a specific action (progression set to 2)."}),"\n",(0,a.jsx)(A.li,{children:"Finishes the quest (progression set to 3)."}),"\n"]})]}),(0,a.jsxs)(n.A,{value:"Balance check",label:"Balance check",children:[(0,a.jsxs)(A.p,{children:[(0,a.jsx)(A.strong,{children:"Objective:"})," See if a player has enough money to buy an item."]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Fact Used:"})}),(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsxs)(A.li,{children:[(0,a.jsx)(A.strong,{children:"Readable Fact:"})," ",(0,a.jsx)(A.a,{href:"/adapters/VaultAdapter/entries/fact/balance_fact",children:"Balance Fact"})]}),"\n"]}),(0,a.jsx)(A.p,{children:(0,a.jsx)(A.strong,{children:"Scenario:"})}),(0,a.jsxs)(A.ol,{children:["\n",(0,a.jsx)(A.li,{children:"The player talks to an NPC."}),"\n",(0,a.jsx)(A.li,{children:"Check the criteria using the balance fact to see if the player has enough balance."}),"\n",(0,a.jsx)(A.li,{children:"If the player has enough balance, they can buy the item."}),"\n",(0,a.jsx)(A.li,{children:"If the player doesn't have enough balance, show a message to the player."}),"\n"]})]})]}),"\n",(0,a.jsx)(A.admonition,{type:"tip",children:(0,a.jsxs)(A.p,{children:["To see all the available facts, check out the ",(0,a.jsx)(A.a,{href:"/adapters/",children:"Extensions section"}),"."]})})]})}function u(e={}){let{wrapper:A}={...(0,s.R)(),...e.components};return A?(0,a.jsx)(A,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},97722:(e,A,t)=>{e.exports={srcSet:t.p+"assets/optimized-img/criteria.f897b60.320.avif 320w,"+t.p+"assets/optimized-img/criteria.c9a055c.428.avif 428w",images:[{path:t.p+"assets/optimized-img/criteria.f897b60.320.avif",width:320,height:265},{path:t.p+"assets/optimized-img/criteria.c9a055c.428.avif",width:428,height:355}],src:t.p+"assets/optimized-img/criteria.c9a055c.428.avif",toString:function(){return t.p+"assets/optimized-img/criteria.c9a055c.428.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFQABAAAAAAG9AAEAAAAAAAAAsAAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAIQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAADNbWRhdBIACgYYFWeBhUAyCRZAAAEABT8uqRIACgk4FWeBhAQ0GkAyoAEWQAccYQUA3S73M0J32mnq87WgFdvYzXk5zWf5GnewB8BUCjMvao7VhkTM3riCZKI5QVVlAOSKJVTna7wJs3NVFxeqUaNbBpbTCKGMx2LGOygcK2OB1415VbhtSfvpbnWg/y+mxxWCJoFamQuCUQrRESsdiJFNWvpXbWBgj/9BR+lpluTMBaB8B8jSemEdnzPJGtKXVkLQzBMCGv1vkvxA",width:428,height:355}},26538:(e,A,t)=>{e.exports={srcSet:t.p+"assets/optimized-img/criteria_and_modifier.ad2779d.320.avif 320w,"+t.p+"assets/optimized-img/criteria_and_modifier.c13f91b.432.avif 432w",images:[{path:t.p+"assets/optimized-img/criteria_and_modifier.ad2779d.320.avif",width:320,height:233},{path:t.p+"assets/optimized-img/criteria_and_modifier.c13f91b.432.avif",width:432,height:315}],src:t.p+"assets/optimized-img/criteria_and_modifier.c13f91b.432.avif",toString:function(){return t.p+"assets/optimized-img/criteria_and_modifier.c13f91b.432.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFQABAAAAAAG9AAEAAAAAAAAA+gAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAHQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAAEXbWRhdBIACgYYFSfjCoAyCRZAAAEABjT3qBIACgk4FSfjCAhoNIAy6gEWQAQQQQUA8auWHEGeHZgaSx+8tmx/OubdZ4aX112Fxy9LrWEAyGBwSI3hT/WE/ajRoDcXvc9AzGR1LQysPX6BZD2cdpeg077+LoiF3UHnDeap4X5HUaufUAFx4GZF92v6P+jwPjJKpVwPvUguwVDPWgllIRNjNcdiwYLzkW81nzSegz0dNJKLAmyQBsBVVJFk5W/gy6P8BrYy5T+pkEQp1OzDiTt7zZa7RlNUor3+rsJivVfww/odoANwEdvYEILe6jtlf5moKNYWWtaYOP7BkTTKeH7/cu/Lmyl9NpzKDq/aM3Zs3JjzCoA=",width:432,height:315}},48654:(e,A,t)=>{e.exports={srcSet:t.p+"assets/optimized-img/modifier.91ac8ba.320.avif 320w,"+t.p+"assets/optimized-img/modifier.3d68928.431.avif 431w",images:[{path:t.p+"assets/optimized-img/modifier.91ac8ba.320.avif",width:320,height:267},{path:t.p+"assets/optimized-img/modifier.3d68928.431.avif",width:431,height:360}],src:t.p+"assets/optimized-img/modifier.3d68928.431.avif",toString:function(){return t.p+"assets/optimized-img/modifier.3d68928.431.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFQABAAAAAAG9AAEAAAAAAAAArAAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAIQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAADJbWRhdBIACgYYFWeBhUAyCRZAAAEABT8uqRIACgk4FWeBhAQ0GkAynAEWQAMMQQUA3S75OeinbHpkVtUIRvmYDZJJ72lxxM9vDyjBP+l+gcFCPAdnp1XjL8SKUQRISD/2UhrpGktIZPAEYpNacApPc0UxO7jKunvH4PPQCpzlzl4iaZiAHQfWEFswhP6W1MT4PXG07sQbWtNEPWya+6buqFe+tlp4ph19hic6beT5/VhdQgqG7FPeOUA7JpfU2wW+fRX6khA=",width:431,height:360}},21231:(e,A,t)=>{e.exports={srcSet:t.p+"assets/optimized-img/static-page.fdc6f3e.320.avif 320w,"+t.p+"assets/optimized-img/static-page.685993c.640.avif 640w,"+t.p+"assets/optimized-img/static-page.6672a1c.960.avif 960w,"+t.p+"assets/optimized-img/static-page.2e2f0b5.1280.avif 1280w,"+t.p+"assets/optimized-img/static-page.37ec83f.1600.avif 1600w,"+t.p+"assets/optimized-img/static-page.eff5bd6.1789.avif 1789w",images:[{path:t.p+"assets/optimized-img/static-page.fdc6f3e.320.avif",width:320,height:9},{path:t.p+"assets/optimized-img/static-page.685993c.640.avif",width:640,height:18},{path:t.p+"assets/optimized-img/static-page.6672a1c.960.avif",width:960,height:27},{path:t.p+"assets/optimized-img/static-page.2e2f0b5.1280.avif",width:1280,height:36},{path:t.p+"assets/optimized-img/static-page.37ec83f.1600.avif",width:1600,height:45},{path:t.p+"assets/optimized-img/static-page.eff5bd6.1789.avif",width:1789,height:50}],src:t.p+"assets/optimized-img/static-page.eff5bd6.1789.avif",toString:function(){return t.p+"assets/optimized-img/static-page.eff5bd6.1789.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFAABAAAAAAG8AAEAAAAAAAAAKwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAAQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAABHbWRhdBIACgUYFCcwqDIJFkAAAQAGNPeoEgAKCDgUJzCAhoNIMh0WQAAAUOmOE30KLWxjxY5v+LzrU5x3xMdScG3DIA==",width:1789,height:50}},5400:(e,A,t)=>{"use strict";t.d(A,{A:()=>s});var i=t(74848);t(96540);var a=t(34164);function s(e){let{children:A,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)("tabItem_Ymn6",s),hidden:t,children:A})}},53720:(e,A,t)=>{"use strict";t.d(A,{A:()=>x});var i=t(74848),a=t(96540),s=t(34164),r=t(65697),n=t(56347),l=t(56650),c=t(9226),o=t(34387),d=t(10426);function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:A}=e;return!!A&&"object"==typeof A&&"value"in A}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:A,tabValues:t}=e;return t.some(e=>e.value===A)}var u=t(20162);function m(e){let{className:A,block:t,selectedValue:a,selectValue:n,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{let A=e.currentTarget,t=l[c.indexOf(A)].value;t!==a&&(o(A),n(t))},h=e=>{let A=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;A=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;A=c[t]??c[c.length-1]}}A?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},A),children:l.map(e=>{let{value:A,label:t,attributes:r}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:a===A?0:-1,"aria-selected":a===A,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item","tabItem_LNqP",r?.className,{"tabs__item--active":a===A}),children:t??A},A)})})}function f(e){let{lazy:A,children:t,selectedValue:r}=e,n=(Array.isArray(t)?t:[t]).filter(Boolean);if(A){let e=n.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:n.map((e,A)=>(0,a.cloneElement)(e,{key:A,hidden:e.props.value!==r}))})}function g(e){let A=function(e){let{defaultValue:A,queryString:t=!1,groupId:i}=e,s=function(e){let{values:A,children:t}=e;return(0,a.useMemo)(()=>{let e=A??h(t).map(e=>{let{props:{value:A,label:t,attributes:i,default:a}}=e;return{value:A,label:t,attributes:i,default:a}});return!function(e){let A=(0,o.XI)(e,(e,A)=>e.value===A.value);if(A.length>0)throw Error(`Docusaurus error: Duplicate values "${A.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[A,t])}(e),[r,u]=(0,a.useState)(()=>(function(e){let{defaultValue:A,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(A){if(!p({value:A,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return A}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:A,tabValues:s})),[m,f]=function(e){let{queryString:A=!1,groupId:t}=e,i=(0,n.W6)(),s=function(e){let{queryString:A=!1,groupId:t}=e;if("string"==typeof A)return A;if(!1===A)return null;if(!0===A&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:A,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)(e=>{if(!s)return;let A=new URLSearchParams(i.location.search);A.set(s,e),i.replace({...i.location,search:A.toString()})},[s,i])]}({queryString:t,groupId:i}),[g,x]=function(e){let{groupId:A}=e,t=A?`docusaurus.tab.${A}`:null,[i,s]=(0,d.Dv)(t);return[i,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:i}),j=(()=>{let e=m??g;return p({value:e,tabValues:s})?e:null})();return(0,l.A)(()=>{j&&u(j)},[j]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);u(e),f(e),x(e)},[f,x,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.A)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(m,{...A,...e}),(0,i.jsx)(f,{...A,...e})]})}function x(e){let A=(0,u.A)();return(0,i.jsx)(g,{...e,children:h(e.children)},String(A))}},5453:(e,A,t)=>{"use strict";t.d(A,{A:()=>s});var i=t(74848),a=t(96540);function s(e){let{img:A,...t}=e;if("string"==typeof A||"default"in A)return(0,i.jsx)("div",{className:"w-full h-full flex justify-center items-center pb-10",children:(0,i.jsx)("img",{src:"string"==typeof A?A:A.default,loading:"lazy",decoding:"async",className:"rounded-md",...t})});let[s,r]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"w-full h-full flex justify-center items-center relative",children:[(0,i.jsx)("img",{src:A.src,srcSet:A.srcSet,sizes:"(max-width: 320px) 280px, (max-width: 640px) 600px, 1200px",loading:"lazy",decoding:"async",onLoad:()=>r(!0),className:`rounded-md transition-opacity duration-300 ${s?"opacity-100":"opacity-0"}`,...t}),!s&&(0,i.jsx)("div",{className:"absolute inset-0 bg-cover bg-center rounded-md",style:{backgroundImage:`url(${A.placeholder})`}})]})}}}]);