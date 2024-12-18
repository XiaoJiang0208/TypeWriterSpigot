"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54174],{66579:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});let i=JSON.parse('{"id":"docs/troubleshooting/ports","title":"Panel Loading Issues Troubleshooting Guide","description":"Are you encountering difficulties with the Typewriter plugin\'s panel not loading? This guide will help you troubleshoot and ensure the correct setup for optimal functionality.","source":"@site/versioned_docs/version-0.5.1/docs/06-troubleshooting/ports.mdx","sourceDirName":"docs/06-troubleshooting","slug":"/docs/troubleshooting/ports","permalink":"/0.5.1/docs/troubleshooting/ports","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/docs/06-troubleshooting/ports.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734551518000,"frontMatter":{"difficulty":"Easy"},"sidebar":"tutorialSidebar","previous":{"title":"Adapters Troubleshooting","permalink":"/0.5.1/docs/troubleshooting/adapters"}}');var n=o(74848),r=o(28453);let s={difficulty:"Easy"},l="Panel Loading Issues Troubleshooting Guide",a={},h=[{value:"Assigning Ports Correctly",id:"assigning-ports-correctly",level:2},{value:"Using the Correct URL",id:"using-the-correct-url",level:2},{value:"Avoiding Duplicate Ports in Config",id:"avoiding-duplicate-ports-in-config",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"panel-loading-issues-troubleshooting-guide",children:"Panel Loading Issues Troubleshooting Guide"})}),"\n",(0,n.jsx)(t.p,{children:"Are you encountering difficulties with the Typewriter plugin's panel not loading? This guide will help you troubleshoot and ensure the correct setup for optimal functionality."}),"\n",(0,n.jsx)(t.h2,{id:"assigning-ports-correctly",children:"Assigning Ports Correctly"}),"\n",(0,n.jsx)(t.p,{children:"If the panel isn't loading, a common issue could be the lack of assigned ports. The Typewriter plugin requires two open ports:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"One port for the panel to load."}),"\n",(0,n.jsx)(t.li,{children:"Another port for the websocket to communicate with the server."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Hosting platforms like Aternos, which only offer a single port, are not compatible with the Typewriter plugin due to this requirement."})}),"\n",(0,n.jsx)(t.h2,{id:"using-the-correct-url",children:"Using the Correct URL"}),"\n",(0,n.jsxs)(t.p,{children:["Ensure that you are using the correct URL to access the panel. The format should be either ",(0,n.jsx)(t.code,{children:"ip:port"})," or, if you're using a subdomain, ",(0,n.jsx)(t.code,{children:"url:port"}),". Using the correct URL is crucial for accessing the panel successfully."]}),"\n",(0,n.jsx)(t.h2,{id:"avoiding-duplicate-ports-in-config",children:"Avoiding Duplicate Ports in Config"}),"\n",(0,n.jsxs)(t.p,{children:["A common mistake is including the port in the ",(0,n.jsx)(t.code,{children:"hostname"})," field of the ",(0,n.jsx)(t.code,{children:"config.yml"})," file.\nThe hostname should only be the IP address or the domain name. It should not contain the port.\nHere's an example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yml"',children:'# ...\n// highlight-red\nhostname: "127.0.0.1:25565" // Incorrect line\n// highlight-green\nhostname: "127.0.0.1"       // Correct line\n# ...\n'})}),"\n",(0,n.jsx)(t.p,{children:"Removing the port from the hostname field can resolve issues related to the panel not loading."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["For further assistance, please reach out to our community on ",(0,n.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),". We're here to help make your experience with the Typewriter plugin as smooth as possible!"]})]})}function d(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);