"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21327],{96746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});let r=JSON.parse('{"id":"develop/adapters/getting_started","title":"Getting Started","description":"Introduction","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/02-getting_started.mdx","sourceDirName":"develop/02-adapters","slug":"/develop/adapters/getting_started","permalink":"/0.4.2/develop/adapters/getting_started","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/02-getting_started.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1731953972000,"sidebarPosition":2,"frontMatter":{"title":"Getting Started"},"sidebar":"develop","previous":{"title":"Adapters","permalink":"/0.4.2/develop/adapters/"},"next":{"title":"Create Entries","permalink":"/0.4.2/develop/adapters/entries/"}}');var i=n(74848),a=n(28453);let s={title:"Getting Started"},d="Creating an Adapter",o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Setting Up a Gradle Project",id:"step-1-setting-up-a-gradle-project",level:2},{value:"Choosing the TypeWriter Version",id:"choosing-the-typewriter-version",level:3},{value:"Step 2: Creating an Adapter Class",id:"step-2-creating-an-adapter-class",level:2},{value:"Step 3: Building the Adapter",id:"step-3-building-the-adapter",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"creating-an-adapter",children:"Creating an Adapter"})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"TypeWriter is a dynamic platform that supports the development of adapters, which are modular components enhancing the overall functionality. Adapters are self-contained, easily shareable, and integrate smoothly into the TypeWriter system. This guide is tailored to guide you through the process of creating an adapter, suitable for both beginners and experienced developers."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Java Development Kit (JDK) 17 or higher."}),"\n",(0,i.jsx)(t.li,{children:"An Integrated Development Environment (IDE) such as IntelliJ IDEA or Eclipse."}),"\n",(0,i.jsx)(t.li,{children:"A basic understanding of Gradle and the Spigot API."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-setting-up-a-gradle-project",children:"Step 1: Setting Up a Gradle Project"}),"\n",(0,i.jsxs)(t.p,{children:["Begin by establishing a Gradle project for your TypeWriter adapter. Below is a comprehensive setup for your ",(0,i.jsx)(t.code,{children:"build.gradle.kts"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    kotlin("jvm") version "1.8.20"\n    id("com.github.johnrengelman.shadow") version "8.1.1"\n}\n\n// Replace with your own information\ngroup = "me.yourusername"\nversion = "0.0.1"\n\nrepositories {\n    maven("https://jitpack.io")\n    mavenCentral()\n    maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")\n    maven("https://oss.sonatype.org/content/groups/public/")\n    maven("https://libraries.minecraft.net/")\n    maven("https://repo.papermc.io/repository/maven-public/")\n    maven("https://repo.codemc.io/repository/maven-snapshots/")\n    maven("https://repo.opencollab.dev/maven-snapshots/")\n\n    // Add other necessary repositories\n}\n\ndependencies {\n    compileOnly(kotlin("stdlib"))\n    compileOnly("io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT")\n    compileOnly("com.github.gabber235:typewriter:main-SNAPSHOT") // Latest release version\n\n    // Already included in the TypeWriter plugin but still needed for compilation\n    compileOnly("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.0-RC")\n    compileOnly("com.github.dyam0:LirandAPI:96cc59d4fb")\n    compileOnly("net.kyori:adventure-api:4.13.1")\n    compileOnly("net.kyori:adventure-text-minimessage:4.13.1")\n\n    // Add other dependencies as needed\n}\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_17\n    targetCompatibility = JavaVersion.VERSION_17\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Ensure to replace placeholders like ",(0,i.jsx)(t.code,{children:"me.yourusername"})," with your project details."]}),"\n",(0,i.jsx)(t.h3,{id:"choosing-the-typewriter-version",children:"Choosing the TypeWriter Version"}),"\n",(0,i.jsx)(t.p,{children:"Select the appropriate TypeWriter dependency version:\nFor stable and tested features, use the latest release version:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'compileOnly("com.github.gabber235:typewriter:main-SNAPSHOT")\n'})}),"\n",(0,i.jsx)(t.p,{children:"This is suitable for most development needs and is recommended for general adapter creation."}),"\n",(0,i.jsx)(t.p,{children:"If you need the latest features and improvements (which might be unstable), use the latest development version:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'compileOnly("com.github.gabber235:typewriter:develop-SNAPSHOT")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Note that this version may include changes that are not yet fully tested or documented."}),"\n",(0,i.jsxs)(t.p,{children:["If you need a specific version, visit the ",(0,i.jsx)(t.a,{href:"https://jitpack.io/#gabber235/typewriter",children:"JitPack page"})," and select the version you need."]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-creating-an-adapter-class",children:"Step 2: Creating an Adapter Class"}),"\n",(0,i.jsx)(t.p,{children:'After setting up your project, create an adapter class. Here\'s an example:\nkotlin title="ExampleAdapter.kt"'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import me.gabber235.typewriter.adapters.Adapter\nimport me.gabber235.typewriter.adapters.TypewriteAdapter\n\n@Adapter("Example", "An example adapter for documentation purposes", "0.0.1")\nobject ExampleAdapter : TypewriteAdapter() {\n    override fun initialize() {\n        // Any initializations needed to run the adapter.\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"step-3-building-the-adapter",children:"Step 3: Building the Adapter"}),"\n",(0,i.jsxs)(t.p,{children:["After creating the adapter class, build the adapter. This can be done by running the ",(0,i.jsx)(t.code,{children:"shadowJar"})," Gradle task.\nThis will generate a JAR file in the ",(0,i.jsx)(t.code,{children:"build/libs"})," directory.\nThis JAR file can be used as an adapter in TypeWriter.\nPlace the JAR file in the ",(0,i.jsx)(t.code,{children:"plugins/TypeWriter/adapters"})," directory and restart the server.\nTypewriter will automatically load the adapter and run it."]}),"\n",(0,i.jsxs)(t.p,{children:["If any problems occur, check the console for errors and ensure that the adapter is properly configured.\nIf you need help, join the ",(0,i.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord server"})," and ask for help."]}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsxs)(t.p,{children:["After creating an adapter, you can start adding features to it.\nCheck out the ",(0,i.jsx)(t.a,{href:"entries",children:"Creating Entries"})," guide to learn how to add entries to your adapter."]})]})}function c(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);