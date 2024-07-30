"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18401],{18054:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ie});var s=t(96540),a=t(17153),i=t(4799),o=t(74848);const l=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(l.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(34164),m=t(82216),h=t(23230),v=t(13555);function b(e){const{previous:n,next:t}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(v.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,o.jsx)(v.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(b,{previous:e.previous,next:e.next})}var f=t(97639),g=t(14783),p=t(54721),j=t(18630),C=t(6178),L=t(2780),A=t(33403);const N={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that they're browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label}),betatext:(0,o.jsx)("b",{children:"beta"})},children:"You are currently looking at the {betatext} documentation of Typewriter. This means that the documentation may be incomplete or outdated."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that they're browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is a version of Typewriter {versionLabel} is no longer actively maintained."})}};function _(e){const n=N[e.versionMetadata.banner];return(0,o.jsx)(n,{...e})}function k(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{to:t,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For the latest released version, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,f.A)(),{pluginId:a}=(0,p.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,L.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,p.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;const m="unreleased"===t.banner?"Warning: Beta Version":"Warning: Unmaintained Version";return(0,o.jsx)(C.A,{type:"danger",title:m,children:(0,o.jsxs)("div",{className:(0,u.A)(n,j.G.docs.docVersionBanner),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(_,{siteTitle:s,versionMetadata:t})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})})}function y(e){let{className:n}=e;const t=(0,A.r)();return t.banner?(0,o.jsx)(T,{className:n,versionMetadata:t}):null}function H(){const e=(0,A.r)(),n=function(){const{frontMatter:e}=c();return e.difficulty}(),t=e=>{switch(e.toLowerCase()){case"easy":return"badge--success";case"normal":return"badge--warning";case"hard":return"badge--danger";default:return"badge--secondary"}};return e.badge?(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{className:"inline-block mb-2 mr-2",children:(0,o.jsx)("span",{className:` ${j.G.docs.docVersionBadge} badge badge--primary`,children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:e.label},children:"Version: {versionLabel}"})})}),n&&(0,o.jsx)("div",{className:"inline-block mb-2",children:(0,o.jsx)("span",{className:`badge ${t(n)}`,children:(0,o.jsx)(h.A,{id:"theme.docs.difficultyBadge.label",values:{difficultyLevel:n},children:"Difficulty: {difficultyLevel}"})})})]}):null}var M=t(81113),w=t(15659);function I(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(n||t||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(M.A,{tags:a})})}),l&&(0,o.jsx)(w.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var E=t(94549),B=t(61507);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",O.tocCollapsibleButton,!n&&O.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const S={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,E.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(S.tocCollapsible,!i&&S.tocCollapsibleExpanded,t),children:[(0,o.jsx)(V,{collapsed:i,onClick:l}),(0,o.jsx)(E.N,{lazy:!0,className:S.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(B.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const P={tocMobile:"tocMobile_ITEo"};function U(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(G,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,P.tocMobile)})}var D=t(98793);function R(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(D.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var F=t(85225),z=t(44430);function W(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(F.A,{as:"h1",children:t})}),(0,o.jsx)(z.A,{children:n})]})}var $=t(5215),q=t(80260),Y=t(98180);function Q(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Z={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function J(){const e=(0,Y.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(Q,{className:Z.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function X(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,o.jsx)(g.A,{className:a,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:a,children:n})}function ee(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ne(){const e=(0,$.OF)(),n=(0,q.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(J,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(ee,{active:s,index:t,addMicrodata:!!a,children:(0,o.jsx)(X,{href:a,isLast:s,children:n.label})},t)}))]})}):null}var te=t(36057);const se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ae(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,o.jsx)(U,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(R,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&se.docItemCol),children:[s&&(0,o.jsx)(te.A,{}),(0,o.jsx)(y,{}),(0,o.jsxs)("div",{className:se.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ne,{}),(0,o.jsx)(H,{}),t.mobile,(0,o.jsx)(W,{children:n}),(0,o.jsx)(I,{})]}),(0,o.jsx)(x,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ie(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(ae,{children:(0,o.jsx)(t,{})})]})})}},98793:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164),a=t(61507);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(74848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:r})})}},61507:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(96540),a=t(86957);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(14783),m=t(74848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,m.jsx)(v,{toc:g,className:t,linkClassName:l,...h})}},36057:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var s=t(34164),a=t(23230),i=t(21141),o=t(74848);function l(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(18630),u=t(6178);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},28051:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164),a=t(6178);const i={img:"img_CujE"};var o=t(74848);function l(e){return e.src.endsWith(".gif")?(0,o.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,s.A)(n,i.img))}):(0,o.jsxs)(a.A,{type:"danger",title:"Invalid image",children:["Image component not found, please report this in the ",(0,o.jsx)("a",{href:"https://discord.gg/gs5QYhfv9x",children:"TypeWriter Discord"}),"."]});var n}}}]);