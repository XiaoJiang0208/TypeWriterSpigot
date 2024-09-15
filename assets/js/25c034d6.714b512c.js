"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43046],{5197:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),n=s(28453);const r={title:"Snippets",difficulty:"Normal"},o="What are Snippets?",a={id:"docs/helpfull-features/snippets",title:"Snippets",description:"Snippets are small pieces of information that the adapters can use. Mostly related with how things are displayed to the users.",source:"@site/versioned_docs/version-0.5.1/docs/05-helpfull-features/05-snippets.mdx",sourceDirName:"docs/05-helpfull-features",slug:"/docs/helpfull-features/snippets",permalink:"/docs/helpfull-features/snippets",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/docs/05-helpfull-features/05-snippets.mdx",tags:[],version:"0.5.1",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1726402892e3,sidebarPosition:5,frontMatter:{title:"Snippets",difficulty:"Normal"},sidebar:"tutorialSidebar",previous:{title:"Shortcuts",permalink:"/docs/helpfull-features/shortcuts"},next:{title:"Troubleshooting Guide",permalink:"/docs/troubleshooting/"}},l={},d=[];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"what-are-snippets",children:"What are Snippets?"})}),"\n",(0,i.jsxs)(t.p,{children:["Snippets are small pieces of information that the adapters can use. Mostly related with how things are displayed to the users.\nSnippets allow you to customize all sorts of parts of different adpaters. For example, you can customize the way messages are displayed in the ",(0,i.jsx)(t.code,{children:"Basic Adapter"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"how-do-i-customize-snippets",children:"How do I customize Snippets?"}),"\n",(0,i.jsxs)(t.p,{children:["Snippets can be customized by editing the ",(0,i.jsx)(t.code,{children:"plugin/Typewriter/snippets.yml"})," file."]}),"\n",(0,i.jsx)(t.admonition,{title:"important",type:"info",children:(0,i.jsx)(t.p,{children:"Note that Snippets are only written the first time they are used. So if you want to customize a snippet, you will need to trigger the entry that uses the snippet first."})}),"\n",(0,i.jsxs)(t.p,{children:["So for the ",(0,i.jsx)(t.code,{children:"Basic Adapter"}),", after the first person reiceves a ",(0,i.jsx)(t.code,{children:"MessageDialogueEntry"}),", the ",(0,i.jsx)(t.code,{children:"snippets.yml"})," file will look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="plugin/Typewriter/snippets.yml"',children:"dialogue:\n  message:\n    format: |2\n\n      <gray> | <bold><speaker></bold><reset><gray> |\n      <reset><white> <message>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can then edit this file to customize the snippet. For example, if you wanted to change the default color of the speaker's name, you could change the ",(0,i.jsx)(t.code,{children:"<bold><speaker></bold>"})," to ",(0,i.jsx)(t.code,{children:"<bold><red><speaker></red></bold>"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Yaml uses the ",(0,i.jsx)(t.code,{children:"|"})," to indicate that the text is a multi-line string."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="plugin/Typewriter/snippets.yml"',children:"dialogue:\n  message:\n    // highlight-next-line\n    format: |2\n\n      <gray> | <bold><speaker></bold><reset><gray> |\n      <reset><white> <message>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"|2"})," indicates that the text is a multi-line string, and has ",(0,i.jsx)(t.code,{children:"2"})," new-lines at the end of the string. If you don't want the new-lines, you can remove the ",(0,i.jsx)(t.code,{children:"2"})," to make it ",(0,i.jsx)(t.code,{children:"|"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);