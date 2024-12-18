"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33923],{83660:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});let t=JSON.parse('{"id":"develop/extensions/api-changes/0.7","title":"0.7.X API Changes","description":"The v0.7.X release contains the new Dynamic variable.","source":"@site/docs/develop/02-extensions/08-api-changes/0.7.mdx","sourceDirName":"develop/02-extensions/08-api-changes","slug":"/develop/extensions/api-changes/0.7","permalink":"/beta/develop/extensions/api-changes/0.7","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/08-api-changes/0.7.mdx","tags":[],"version":"current","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734551518000,"frontMatter":{"title":"0.7.X API Changes"},"sidebar":"develop","previous":{"title":"0.6.X API Changes","permalink":"/beta/develop/extensions/api-changes/0.6"},"next":{"title":"0.8.X API Changes","permalink":"/beta/develop/extensions/api-changes/0.8"}}');var n=a(74848),l=a(28453),s=a(53720),i=a(5400);let o={title:"0.7.X API Changes"},u="All API changes to 0.7.X",c={},d=[{value:"PlaceholderEntry Changes",id:"placeholderentry-changes",level:2}];function h(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"all-api-changes-to-07x",children:"All API changes to 0.7.X"})}),"\n",(0,n.jsxs)(r.p,{children:["The v0.7.X release contains the new Dynamic variable.\nTo learn how to use them, see ",(0,n.jsx)(r.a,{href:"/beta/develop/extensions/entries/static/variable",children:"Dynamic Variables"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"placeholderentry-changes",children:"PlaceholderEntry Changes"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"old",label:"Old",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'override fun display(player: Player?): String? {\n    return "Hello, ${player?.name ?: "World"}!"\n}\n'})})}),(0,n.jsx)(i.A,{value:"new",label:"New",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'override fun parser(): PlaceholderParser = placeholderParser {\n    supply { player ->\n        "Hello, ${player?.name ?: "World"}!"\n    }\n}\n'})})})]}),"\n",(0,n.jsx)(r.p,{children:"The placeholder now returns a parser instead of directly parsing.\nThis allows for more complex placeholders to be created.\nWith sub placeholders, for example."}),"\n",(0,n.jsxs)(r.p,{children:["For example the ",(0,n.jsx)(r.code,{children:"TimedFact"})," returns the fact value by default for fact ",(0,n.jsx)(r.code,{children:"%typewriter_<entry id>%"}),".\nBut if you want the time when the fact will expire you can use ",(0,n.jsx)(r.code,{children:"%typewriter_<entry id>:time:expires:relative%"}),"\nWhere the ",(0,n.jsx)(r.code,{children:":time:expires:relative"})," is a sub placeholder."]})]})}function p(e={}){let{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5400:(e,r,a)=>{a.d(r,{A:()=>l});var t=a(74848);a(96540);var n=a(34164);function l(e){let{children:r,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",l),hidden:a,children:r})}},53720:(e,r,a)=>{a.d(r,{A:()=>x});var t=a(74848),n=a(96540),l=a(34164),s=a(65697),i=a(56347),o=a(56650),u=a(9226),c=a(34387),d=a(10426);function h(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var f=a(20162);function m(e){let{className:r,block:a,selectedValue:n,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{let r=e.currentTarget,a=o[u.indexOf(r)].value;a!==n&&(c(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;r=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;r=u[a]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},r),children:o.map(e=>{let{value:r,label:a,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.A)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":n===r}),children:a??r},r)})})}function v(e){let{lazy:r,children:a,selectedValue:s}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===s);return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,l=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??h(a).map(e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}});return!function(e){let r=(0,c.XI)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[s,f]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:l})),[m,v]=function(e){let{queryString:r=!1,groupId:a}=e,t=(0,i.W6)(),l=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,u.aZ)(l),(0,n.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})},[l,t])]}({queryString:a,groupId:t}),[b,x]=function(e){let{groupId:r}=e,a=r?`docusaurus.tab.${r}`:null,[t,l]=(0,d.Dv)(a);return[t,(0,n.useCallback)(e=>{a&&l.set(e)},[a,l])]}({groupId:t}),g=(()=>{let e=m??b;return p({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{g&&f(g)},[g]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(v,{...r,...e})]})}function x(e){let r=(0,f.A)();return(0,t.jsx)(b,{...e,children:h(e.children)},String(r))}}}]);