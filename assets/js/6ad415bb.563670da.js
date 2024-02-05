"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[480],{6428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(7624),i=t(2172);const r={},o="Installation Guide",l={id:"docs/installation-guide",title:"Installation Guide",description:"Typewriter only works on Paper Spigot servers. It will not work on Spigot or Bukkit servers.",source:"@site/docs/docs/02-installation-guide.md",sourceDirName:"docs",slug:"/docs/installation-guide",permalink:"/TypeWriter/docs/installation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/docs/02-installation-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/TypeWriter/docs/home"},next:{title:"First Interaction",permalink:"/TypeWriter/docs/first-interaction"}},a={},d=[{value:"Installing the Plugin",id:"installing-the-plugin",level:2},{value:"Basic Adapter",id:"basic-adapter",level:3},{value:"Pre-Made Adapters",id:"pre-made-adapters",level:4},{value:"Configuring the Web Panel",id:"configuring-the-web-panel",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Typewriter only works on ",(0,s.jsx)(n.strong,{children:"Paper"})," Spigot servers. It will not work on Spigot or Bukkit servers."]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Typewriter is currently in beta. This means that the plugin is still in development and may contain bugs. If you find\nany bugs, please report them ",(0,s.jsx)(n.a,{href:"https://discord.gg/p7WH9VvdMQ",children:"here"})]})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-plugin",children:"Installing the Plugin"}),"\n",(0,s.jsx)(n.p,{children:"To install the Typewriter plugin on your paper spigot Minecraft server, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download the plugin from ",(0,s.jsx)(n.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Place the downloaded .jar file in your server's ",(0,s.jsx)(n.code,{children:"plugins"})," folder."]}),"\n",(0,s.jsxs)(n.li,{children:["Download and install all the required plugins from the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"dependencies",children:"dependencies"})}),". Also check if you have installed any incompatible plugins."]}),"\n",(0,s.jsx)(n.li,{children:"Restart your server to complete the installation."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"basic-adapter",children:"Basic Adapter"}),"\n",(0,s.jsx)(n.p,{children:"The basic adapter contains the base entries for any server."}),"\n",(0,s.jsx)(n.p,{children:"To install the basic adapter (or any for that matter), follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download the ",(0,s.jsx)(n.code,{children:"BasicAdapter.jar"})," file from ",(0,s.jsx)(n.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Place it in the ",(0,s.jsx)(n.code,{children:"server/plugins/Typewriter/adapters"})," folder."]}),"\n",(0,s.jsx)(n.li,{children:"Restart your server to complete the installation."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"pre-made-adapters",children:"Pre-Made Adapters"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the basic adapter, Typewriter also offers several pre-made adapters that can be easily installed and\nconfigured. For a list of available adapters and instructions on how to install them, see ",(0,s.jsx)(n.a,{href:"adapters",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-the-web-panel",children:"Configuring the Web Panel"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Typewriter's web panel does ",(0,s.jsx)(n.strong,{children:"not"})," support external server providers such as Minehut, Aternos, or Apex. You can still use everthing else in Typewriter. It is possible to use the panel still by setting up a local server with Typewriter installed. For more information, please visit the ",(0,s.jsx)(n.a,{href:"https://discord.gg/p7WH9VvdMQ",children:"Discord"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"The web panel to configure your server's interactions. The web panel is preinstalled inside the plugin, though it is\ndisabled by default for security and performance reasons."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The web should only be used on a development server and ",(0,s.jsx)(n.strong,{children:"NOT"})," on a production server.\nAs it uses precious resources to both host a website and web sockets."]})}),"\n",(0,s.jsxs)(n.p,{children:["The web panel needs two ports to be open. These can be changed, but it does need at least two new ports to be open. The\ndefault ports are ",(0,s.jsx)(n.code,{children:"8080"})," and ",(0,s.jsx)(n.code,{children:"9092"}),". If you are not able to open these ports, the easiest way is to use typewriter\nlocally and copying the files in ",(0,s.jsx)(n.code,{children:"server/plugins/Typewriter/pages"})," to your production server."]}),"\n",(0,s.jsx)(n.p,{children:"To enable the web panel, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.code,{children:"server/plugins/Typewriter/config.yml"})," file."]}),"\n",(0,s.jsx)(n.li,{children:"Change the settings to the following:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="server/plugins/Typewriter/config.yml"',children:'# Whether the web panel and web sockets are enabled.\nenabled: true\n# The hostname of the server. CHANGE THIS to your servers ip.\nhostname: "127.0.0.1"\n# The panel uses web sockets to sync changes to the server and it allows you to work with multiple people at the same time.\nwebsocket:\n    # The port of the websocket server. Make sure this port is open.\n    port: 9092\n    # The authentication that is used. Leave unchanged if you don\'t know what you are doing.\n    auth: "session"\npanel:\n    # The panel can be disabled while the sockets are still open. Only disable this if you know what you are doing.\n    # If the web sockets are disabled then the panel wil always be disabled.\n    enabled: true\n    # The port of the web panel. Make sure this port is open.\n    port: 8080\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Restart your server to complete the installation."}),"\n",(0,s.jsxs)(n.li,{children:["To connect to the web panel. Run ",(0,s.jsx)(n.code,{children:"/typewriter connect"})," in game. This will give you a link to the web panel."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:["If the web panel is not working, make sure that the ports are open and that the ",(0,s.jsx)(n.code,{children:"hostname"})," is set to your servers IP.\nCheck the ",(0,s.jsx)(n.a,{href:"troubleshooting",children:"Troubleshooting Guide"})," for more information.\nIf it still doesn't work, ask for help in the ",(0,s.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Once opened, you can use the web panel to create and configure quests, NPC dialogues, and more. The panel also allows\nyou to view and edit your server's existing player interactions."}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["Got any problems? Check out the ",(0,s.jsx)(n.a,{href:"troubleshooting",children:"Troubleshooting"})," page for solutions to common problems.\nIf you still have problems, feel free to ask them in the ",(0,s.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,s.jsxs)(n.p,{children:["Try to create your first interaction by following the ",(0,s.jsx)(n.a,{href:"/TypeWriter/docs/first-interaction",children:"First Interaction"})," guide. If you have any\nquestions, feel free to ask them in the ",(0,s.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);