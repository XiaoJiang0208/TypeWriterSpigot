(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90725],{20888:(e,A,i)=>{"use strict";i.r(A),i.d(A,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});let t=JSON.parse('{"id":"docs/creating-stories/interactions/conditional-dialogue","title":"Conditional dialogue","description":"It\'s best to first read First Interaction Facts before starting this tutorial.","source":"@site/versioned_docs/version-0.5.1/docs/03-creating-stories/01-interactions/03-conditional-dialogue.mdx","sourceDirName":"docs/03-creating-stories/01-interactions","slug":"/docs/creating-stories/interactions/conditional-dialogue","permalink":"/0.5.1/docs/creating-stories/interactions/conditional-dialogue","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/docs/03-creating-stories/01-interactions/03-conditional-dialogue.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734523215000,"sidebarPosition":3,"frontMatter":{"difficulty":"Normal"},"sidebar":"tutorialSidebar","previous":{"title":"Giving items","permalink":"/0.5.1/docs/creating-stories/interactions/items"},"next":{"title":"Cinematics","permalink":"/0.5.1/docs/creating-stories/cinematics/"}}');var n=i(74848),o=i(28453),s=i(5453),a=i(12325);let d={difficulty:"Normal"},l="Conditional dialogue",r={},c=[{value:"Adding a spoken",id:"adding-a-spoken",level:2},{value:"Configuring the spoken",id:"configuring-the-spoken",level:2},{value:"Setting the Criteria",id:"setting-the-criteria",level:3},{value:"Configuring the Modifier",id:"configuring-the-modifier",level:3},{value:"Adding the second spoken",id:"adding-the-second-spoken",level:2},{value:"Configuring the second spoken Criteria",id:"configuring-the-second-spoken-criteria",level:3},{value:"Additional dialogue",id:"additional-dialogue",level:3},{value:"Result",id:"result",level:2}];function h(e){let A={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.header,{children:(0,n.jsx)(A.h1,{id:"conditional-dialogue",children:"Conditional dialogue"})}),"\n",(0,n.jsx)(A.admonition,{title:"Before starting",type:"info",children:(0,n.jsxs)(A.p,{children:["It's best to first read ",(0,n.jsx)(A.a,{href:"/0.5.1/docs/creating-stories/interactions/",children:"First Interaction"})," ",(0,n.jsx)(A.a,{href:"/0.5.1/docs/creating-stories/facts/",children:"Facts"})," before starting this tutorial.\nAlso, make sure you have created a ",(0,n.jsx)(A.strong,{children:"sequence"})," page."]})}),"\n",(0,n.jsx)(A.p,{children:"In this tutorial, you will learn how to create conditional dialogue. This means that if the player has a certain fact set to a specific value, it will then display the correct dialogue."}),"\n",(0,n.jsx)(A.h2,{id:"adding-a-spoken",children:"Adding a spoken"}),"\n",(0,n.jsxs)(A.p,{children:["First we need to add a spoken. This can be learned by following the ",(0,n.jsx)(A.a,{href:"/0.5.1/docs/creating-stories/interactions/",children:"First Interaction"})," tutorial."]}),"\n",(0,n.jsx)(A.h2,{id:"configuring-the-spoken",children:"Configuring the spoken"}),"\n",(0,n.jsxs)(A.p,{children:["In the spoken we will set the field text to ",(0,n.jsx)(A.code,{children:"Hey you clicked me for the first time."})]}),"\n",(0,n.jsx)(A.h3,{id:"setting-the-criteria",children:"Setting the Criteria"}),"\n",(0,n.jsxs)(A.p,{children:["Now we need to configure the criteria for the spoken. This can be done by clicking on the + icon in the inspector next to the criteria field. Then, you can select the fact you want to use. For this tutorial, we will use a permanent fact called ",(0,n.jsx)(A.code,{children:"Flower Clicked"})," with the group set to a player group."]}),"\n",(0,n.jsx)(s.A,{img:i(55882),alt:"Flower Clicked Fact",width:400}),"\n",(0,n.jsxs)(A.p,{children:["Inside the criteria, set the operator to ",(0,n.jsx)(A.code,{children:"=="})," and the value to ",(0,n.jsx)(A.code,{children:"0"}),"."]}),"\n",(0,n.jsx)(A.h3,{id:"configuring-the-modifier",children:"Configuring the Modifier"}),"\n",(0,n.jsxs)(A.p,{children:["You have configured the criteria, but now we need to modify the fact so that when you click the flower again, a different spoken is displayed. This can be done by clicking on the + icon in the inspector next to the modifier field. Then, you can select the fact you want to modify. For this tutorial, we will use the same fact as the criteria. Inside the modifier, set the operator to ",(0,n.jsx)(A.code,{children:"="})," and the value to ",(0,n.jsx)(A.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(s.A,{img:i(15548),alt:"Add Spoken Fields",width:400}),"\n",(0,n.jsx)(A.h2,{id:"adding-the-second-spoken",children:"Adding the second spoken"}),"\n",(0,n.jsxs)(A.p,{children:["Now we need to add the second spoken. This can be done by right-clicking on the ",(0,n.jsx)(A.code,{children:"On Interact Block Event"})," entry and selecting ",(0,n.jsx)(A.code,{children:"+ Link with ..."}),". Then, search for ",(0,n.jsx)(A.code,{children:"Add Spoken"})," and click on the + icon to add it to your sequence.",(0,n.jsx)(A.br,{}),"\n","In the text field we will set ",(0,n.jsx)(A.code,{children:"Wow you clicked me again!"}),"\nYour sequence page should look like this:"]}),"\n",(0,n.jsx)(s.A,{img:i(32933),alt:"Conditional dialogue sequence",width:400}),"\n",(0,n.jsx)(A.h3,{id:"configuring-the-second-spoken-criteria",children:"Configuring the second spoken Criteria"}),"\n",(0,n.jsxs)(A.p,{children:["Now we need to configure the criteria for the second spoken. This can be done by clicking on the + icon in the inspector next to the criteria field. Then, select the ",(0,n.jsx)(A.code,{children:"Flower Clicked"})," fact again. Inside the criteria, set the operator to ",(0,n.jsx)(A.code,{children:"=="})," and the value to ",(0,n.jsx)(A.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(A.h3,{id:"additional-dialogue",children:"Additional dialogue"}),"\n",(0,n.jsxs)(A.p,{children:["To add more dialogues or interactions when you click the flower, set another modifier with the operator to ",(0,n.jsx)(A.code,{children:"="})," and the value to ",(0,n.jsx)(A.code,{children:"2"})," (or any other value), then repeat the previous steps."]}),"\n",(0,n.jsx)(A.h2,{id:"result",children:"Result"}),"\n",(0,n.jsx)(A.p,{children:"Now, when you click the flower for the first time, the first spoken will be displayed. When you click the flower again, the second spoken will be displayed."}),"\n",(0,n.jsx)(a.A,{url:i(85186).A})]})}function u(e={}){let{wrapper:A}={...(0,o.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},15548:(e,A,i)=>{e.exports={srcSet:i.p+"assets/optimized-img/add-spoken-fields.083c160.320.avif 320w,"+i.p+"assets/optimized-img/add-spoken-fields.f266d61.528.avif 528w",images:[{path:i.p+"assets/optimized-img/add-spoken-fields.083c160.320.avif",width:320,height:579},{path:i.p+"assets/optimized-img/add-spoken-fields.f266d61.528.avif",width:528,height:956}],src:i.p+"assets/optimized-img/add-spoken-fields.f266d61.528.avif",toString:function(){return i.p+"assets/optimized-img/add-spoken-fields.f266d61.528.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFgABAAAAAAG+AAEAAAAAAAABtwAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAASAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAAHVbWRhdBIACgYYFaeOwqAyChMgAACABT8uqfASAAoJOBWnjsICGg0gMqcDEyADjiCCgN1OWQADMX1cLfDH3/O2eotaXztxJ3PK001PDsE2tEHKo1V6+HVYEl8Tgt/4fK2IhZNU0wNfoL2+Fekxp3P96OE2KzVWfCNSv/rQWQOnouTZ2dri0VPyhSnQu6NtKKicwETOM/2h81vt5p+2TsYLZ4yPc8NT7N1+kptA29hrJkG3qPa3qUk7mZThjqdccNCsJiSpOHmqgAcXcG5WABbIQzaGwhwZbWRTSNi9ajCKK9cuDBkvR+u13b4SkQ2qcirHD0BhPl5RVb69nSXQuWLYDyd/2WdAO011ABr+tSiAjhP2BNWsIG66rNaqZgBOMXDukEJP9TP3C8bZvbl7cWo7rtFLT9P72q+Oc/1+ViRukmqfhaPG/76NxGyxH3r3hn26+3nt2gw1prraQ22h/9/3VP+Y/vF20/ayWYVKEBmvkkssm1SffF561/zJA9jwsEcccu9c/S/yS8Au9JTpXVW8VsSzZL/Ii2/6a77YhnrSH3igIx+2cLKWU/syV6iPa89tQBMrOtbyXpMhUme5IbVHhoAF7MmlPeLWeHJBUu0R/veg",width:528,height:956}},32933:(e,A,i)=>{e.exports={srcSet:i.p+"assets/optimized-img/conditional-dialogue-sequence.9bcca02.320.avif 320w,"+i.p+"assets/optimized-img/conditional-dialogue-sequence.5dd68c6.640.avif 640w,"+i.p+"assets/optimized-img/conditional-dialogue-sequence.806b501.863.avif 863w",images:[{path:i.p+"assets/optimized-img/conditional-dialogue-sequence.9bcca02.320.avif",width:320,height:179},{path:i.p+"assets/optimized-img/conditional-dialogue-sequence.5dd68c6.640.avif",width:640,height:357},{path:i.p+"assets/optimized-img/conditional-dialogue-sequence.806b501.863.avif",width:863,height:482}],src:i.p+"assets/optimized-img/conditional-dialogue-sequence.806b501.863.avif",toString:function(){return i.p+"assets/optimized-img/conditional-dialogue-sequence.806b501.863.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFQABAAAAAAG9AAEAAAAAAAAA8wAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAFgAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAAEQbWRhdBIACgYYFSerCoAyCRZAAAEABjT3qBIACgk4FSerCAhoNIAy4wEWQAQQogUA8dkhrONjHUI8f0t+I7bu1U12SZ9rVk36lynYG9MinbZ1AxFe7GFxXqkcSF19JuZpY1jLpWG5jdJslAVhzaf0vDK4u+qAjKaPl7d1SW/Eic+wTzOCsp2+hHZjmlbYDo2NuZrn0V37PjHIfgZtOvp3PwdQeeohIob8/OGAnAOTo83/b0llm6bxaIbpvu17Row9tlWXTou+F4bFM3SI+leMB/7Q18tBEqLDlg140s0et8YAhaQVivJR5K/SscTY/UF2XLTko8he5a8ipY0cyoMRyDzxov7Ozdq+pm2OWg==",width:863,height:482}},55882:(e,A,i)=>{e.exports={srcSet:i.p+"assets/optimized-img/flower-clicked-fact.09b1710.320.avif 320w,"+i.p+"assets/optimized-img/flower-clicked-fact.f2002d6.539.avif 539w",images:[{path:i.p+"assets/optimized-img/flower-clicked-fact.09b1710.320.avif",width:320,height:296},{path:i.p+"assets/optimized-img/flower-clicked-fact.f2002d6.539.avif",width:539,height:499}],src:i.p+"assets/optimized-img/flower-clicked-fact.f2002d6.539.avif",toString:function(){return i.p+"assets/optimized-img/flower-clicked-fact.f2002d6.539.avif"},placeholder:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAYRtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAGoAAEAAAAAAAAAFQABAAAAAAG9AAEAAAAAAAABKQAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAw2lwcnAAAACdaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAoAAAAJQAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EgAgAAAAAQcGl4aQAAAAADCAgIAAAAHmlwbWEAAAAAAAAAAgABBAGGAwcAAgSCAwSFAAAAGmlyZWYAAAAAAAAADmF1eGwAAgABAAEAAAFGbWRhdBIACgYYFWeRhUAyCRZAAAEABT8uqRIACgk4FWeRhAQ0GkAymQIWQA884gUA3UqyzFyO9cVZZVUXsi+RrF1KWAISPtvpFwMh/hI5Tc6akAGcSOqIN1WNU5v8lcfoliCSe8wTjBFb0IGRMfwqcAhXwaC0ecLyP502mxvOtWwBU9uMA2QKuino8IshZfImPrfNpJDGwLi7H7kr2oNB7rACI+7MA44rMc0im2BFV3vOJWXCZWa1MjHLhXq3ieblI9BnxnyUk40TkJmJxdXTRux1yKTCBNrlFyMNzjpCnrkaSTSJh7OmY+/jm+30loK1e5wRNPpH3JjAIOkwPG4g4KleETjFteQyoooVYkVHNusJnsAtODGCIwFjK3LfIxsPxAwBJqF1Na4FRb6MZmofXD62ngApRwfI4ReTDAqm5ovHvw==",width:539,height:499}},5453:(e,A,i)=>{"use strict";i.d(A,{A:()=>o});var t=i(74848),n=i(96540);function o(e){let{img:A,...i}=e;if("string"==typeof A||"default"in A)return(0,t.jsx)("div",{className:"w-full h-full flex justify-center items-center pb-10",children:(0,t.jsx)("img",{src:"string"==typeof A?A:A.default,loading:"lazy",decoding:"async",className:"rounded-md",...i})});let[o,s]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"w-full h-full flex justify-center items-center relative",children:[(0,t.jsx)("img",{src:A.src,srcSet:A.srcSet,sizes:"(max-width: 320px) 280px, (max-width: 640px) 600px, 1200px",loading:"lazy",decoding:"async",onLoad:()=>s(!0),className:`rounded-md transition-opacity duration-300 ${o?"opacity-100":"opacity-0"}`,...i}),!o&&(0,t.jsx)("div",{className:"absolute inset-0 bg-cover bg-center rounded-md",style:{backgroundImage:`url(${A.placeholder})`}})]})}},12325:(e,A,i)=>{"use strict";i.d(A,{A:()=>l});var t=i(74848),n=i(96540),o=i(13554),s=i.n(o),a=i(37399),d=i(45041);function l(e){let{url:A}=e,[i,o]=(0,n.useState)(0),[l,c]=(0,n.useState)(!0),[h,u]=(0,n.useState)(!1),g=(0,n.useRef)(null),p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(d.A.isEnabled)return d.A.on("change",()=>{u(d.A.isFullscreen)}),()=>{d.A.off("change",()=>{u(d.A.isFullscreen)})}},[]),(0,t.jsxs)("div",{ref:p,className:"relative w-full h-full",children:[(0,t.jsx)(r,{progress:i,onSeek:e=>{let A=parseFloat(e.target.value);o(A),g.current?.seekTo(A/100,"fraction")}}),(0,t.jsx)(s(),{ref:g,url:A,playing:l,loop:!0,muted:!0,playsInline:!0,playsinline:!0,controls:!1,width:"100%",height:"100%",progressInterval:100,onProgress:e=>o(100*e.played)}),(0,t.jsxs)("div",{className:"opacity-0 hover:opacity-100 transition-opacity duration-300 w-full h-full flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer h-[97%]",onClick:()=>{c(e=>!e)},children:(0,t.jsx)("div",{children:(0,t.jsx)(a.In,{icon:l?"mdi:pause-circle":"mdi:play-circle",fontSize:50,color:"white"})})}),(0,t.jsx)("div",{className:"absolute bottom-2 right-2 p-2",children:(0,t.jsx)(a.In,{onClick:()=>{d.A.isEnabled&&d.A.toggle(p.current)},className:"cursor-pointer hover:scale-110 transition duration-150",icon:h?"mdi:fullscreen-exit":"mdi:fullscreen",fontSize:40,color:"white"})})]})]})}function r(e){let{progress:A,onSeek:i}=e;return(0,t.jsx)("div",{className:"w-full flex items-center text-white",children:(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)(c,{progress:A,onSeek:i})})})}function c(e){let{progress:A,onSeek:i}=e;return(0,t.jsxs)("div",{className:"relative h-[5px] rounded-t-lg overflow-hidden pb-2",children:[(0,t.jsx)("input",{type:"range",min:"0",max:"100",value:A,onChange:i,className:"absolute top-0 left-0 w-full h-[5px] opacity-0 cursor-pointer",style:{WebkitAppearance:"none",MozAppearance:"none",appearance:"none"}}),(0,t.jsx)("div",{className:"h-full bg-primary transition-width duration-200 pb-2",style:{width:`${A}%`}})]})}},85186:(e,A,i)=>{"use strict";i.d(A,{A:()=>t});let t=i.p+"assets/medias/final-result-conditional-dialogue-d060f1daac01392779d4ae63d9b78759.webm"}}]);