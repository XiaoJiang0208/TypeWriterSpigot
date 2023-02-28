"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=l,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.d(t,{Ps:()=>w,nU:()=>g,aD:()=>O,W5:()=>_,p4:()=>z,ej:()=>A});var n=r(7294);const l="entryField_LQuR",a="name_R6gP",o="header_odoB";var i=r(2949);const c={badge:"badge_JMXK"};function s(e){let{name:t,color:r}=e;const l="dark"===(0,i.I)().colorMode,a=l?`${r}CC`:`${r}44`,o=l?"white":r;return n.createElement("span",{style:{backgroundColor:a,color:o},className:c.badge},t)}var d=r(9960);const m=()=>n.createElement(s,{name:"Required",color:"#ff3838"}),u=()=>n.createElement(s,{name:"Inherited",color:"#a83dff"}),p=()=>n.createElement(s,{name:"Optional",color:"#3191f7"}),f=()=>n.createElement(s,{name:"List",color:"#20bf7c"}),b=()=>n.createElement(s,{name:"Deprecated",color:"#fa9d2a"}),h=()=>n.createElement(s,{name:"Colored",color:"#ff8e42"}),E=()=>n.createElement(s,{name:"Regex",color:"#f731d6"}),y=()=>n.createElement(s,{name:"Placeholders",color:"#00b300"}),g=e=>n.createElement("div",{className:l},n.createElement("div",{className:o},n.createElement("h2",{className:a},e.name),e.required&&n.createElement(m,null),e.inherited&&n.createElement(u,null),e.optional&&n.createElement(p,null),e.multiple&&n.createElement(f,null),e.deprecated&&n.createElement(b,null),e.colored&&n.createElement(h,null),e.regex&&n.createElement(E,null),e.placeholders&&n.createElement(y,null)),n.createElement("div",{className:""},e.children,e.colored&&n.createElement(x,null),e.regex&&n.createElement(j,null),e.placeholders&&n.createElement(T,null),e.duration&&n.createElement(P,null))),v=()=>n.createElement(g,{name:"Criteria",inherited:!0,multiple:!0},"A list of facts that must be met by the player before this entry can be triggered."),k=()=>n.createElement(g,{name:"Modifiers",inherited:!0,multiple:!0},"A list of facts that will be modified for the player when this entry is triggered."),S=()=>n.createElement(g,{name:"Triggers",inherited:!0,multiple:!0},"A list of entries that will be triggered after this entry is triggered."),w=()=>n.createElement("div",null,n.createElement(v,null),n.createElement(k,null),n.createElement(S,null)),_=()=>n.createElement("div",null,n.createElement(g,{name:"Comment",optional:!0,inherited:!0},"A comment to keep track of what this fact is used for.")),O=()=>n.createElement("div",null,n.createElement(S,null)),A=()=>n.createElement("div",null,n.createElement(g,{name:"Display Name",required:!0,inherited:!0},"The display name of the speaker."),n.createElement(g,{name:"Sound",required:!0,inherited:!0},"The sound that will be played when the speaker speaks.")),x=()=>n.createElement("div",null,n.createElement("br",null),"Colors and formatting from the"," ",n.createElement(d.Z,{to:"https://docs.advntr.dev/minimessage/format.html"},n.createElement("code",null,"MiniMessage Adventure Api"))," ","can be used. So for example, you can use ",n.createElement("code",null,"<red>Some Text</red>")," for red text."),T=()=>n.createElement("div",null,n.createElement("br",null),"Placeholders from the"," ",n.createElement(d.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki"},n.createElement("code",null,"PlaceholderApi"))," ","can be used. So for example, you can use ",n.createElement("code",null,"%player_name%")," for the player name."),P=()=>n.createElement("div",null,n.createElement("br",null),"Durations can be specified in the following format: ",n.createElement("code",null,"1d 2h 3m 4s"),". The following units are supported: ",n.createElement("code",null,"d")," for days, ",n.createElement("code",null,"h")," for hours,",n.createElement("code",null,"m")," for minutes and ",n.createElement("code",null,"s")," for seconds."),j=()=>n.createElement("div",null,n.createElement("br",null),n.createElement(d.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},n.createElement("code",null,"Regular expressions"))," ","can be used to match a pattern. For example, ",n.createElement("code",null,"^.*$")," will match any string."),z=()=>n.createElement("div",null,n.createElement("br",null),"This fact can only be ",n.createElement("b",null,"read"),", not written to. Hence, it is only suitable for criteria.")},9736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),l=(r(7294),r(3905)),a=r(2463);const o={},i="Island Set Border Size Action",c={unversionedId:"adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size",id:"adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size",title:"Island Set Border Size Action",description:"The Island Set Border Size action is used to set a player's island's border size.",source:"@site/docs/adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size.mdx",sourceDirName:"adapters/SuperiorSkyblockAdapter/entries/action",slug:"/adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/adapters/SuperiorSkyblockAdapter/entries/action/island_set_border_size.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Island Set Biome Action",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/action/island_set_biome"},next:{title:"Island Set Member Limit Action",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/action/island_set_member_limit"}},s={},d=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"island-set-border-size-action"},"Island Set Border Size Action"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Island Set Border Size")," action is used to set a player's island's border size."),(0,l.kt)("h2",{id:"how-could-this-be-used"},"How could this be used?"),(0,l.kt)("p",null,"It could be used to reward the player for completing a quest, or upon reaching a certain level."),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)(a.Ps,{mdxType:"ActionsField"}),(0,l.kt)(a.nU,{name:"Size",required:!0,mdxType:"EntryField"},"The size to set the island's border to."))}p.isMDXComponent=!0}}]);