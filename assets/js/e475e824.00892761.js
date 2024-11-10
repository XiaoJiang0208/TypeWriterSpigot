"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["39722"],{89459:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"develop/adapters/entries/cinematic/index","title":"CinematicEntry","description":"The CinematicEntry does not have any decentends, but is very customizable. When a entry is needed in a cinematic page, it needs to inherid this.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/cinematic/index.mdx","sourceDirName":"develop/02-adapters/03-entries/cinematic","slug":"/develop/adapters/entries/cinematic/","permalink":"/0.4.2/develop/adapters/entries/cinematic/","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/cinematic/index.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Gabber235","lastUpdatedAt":1731262043000,"frontMatter":{},"sidebar":"develop","previous":{"title":"Create Entries","permalink":"/0.4.2/develop/adapters/entries/"},"next":{"title":"ArtifactEntry","permalink":"/0.4.2/develop/adapters/entries/static/artifact"}}'),a=t("85893"),s=t("50065");let r={},c="CinematicEntry",d={},l=[{value:"Usage",id:"usage",level:2},{value:"ExampleSegment",id:"examplesegment",level:3},{value:"ExampleCinematicAction",id:"examplecinematicaction",level:3},{value:"SimpleCinematicAction",id:"simplecinematicaction",level:3}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"cinematicentry",children:"CinematicEntry"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CinematicEntry"})," does not have any decentends, but is very customizable. When a entry is needed in a cinematic page, it needs to inherid this."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CinematicEntry"})," works by having at least 1 list of ",(0,a.jsx)(n.code,{children:"Segment"}),"'s. Segments are the parts of the cinematic and may have sub-properties defined. A segment needs to have at least a ",(0,a.jsx)(n.code,{children:"startFrame"})," and ",(0,a.jsx)(n.code,{children:"endFrame"})," which are the integers of the frames."]}),"\n",(0,a.jsxs)(n.p,{children:["Frames are the ticks in a second. So there are 20 frames in a second. A cinematic takes as long as the latest ",(0,a.jsx)(n.code,{children:"endFrame"})," of a segment from all it's entries."]}),"\n",(0,a.jsxs)(n.p,{children:["Segments are defined in the entry using the ",(0,a.jsx)(n.code,{children:"@Segments"})," annotation. And it needs to be a list of ",(0,a.jsx)(n.code,{children:"Segment"}),"'s."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"CinematicEntry"})," can have multiple different segment tracks.\nFor example, a cinematic entry may have a ",(0,a.jsx)(n.code,{children:"TextSegment"})," and a ",(0,a.jsx)(n.code,{children:"SoundSegment"}),"."]}),(0,a.jsxs)(n.p,{children:["Though this is supported in the plugin, it is not yet implemented in the cinematic editor.\nIf you need this, reach out to me on ",(0,a.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["As entries are not allowed to have any state, we create a ",(0,a.jsx)(n.code,{children:"CinematicAction"})," everytime a entry is used in a cinematic for a player."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@Entry("example_cinematic", "An example cinematic entry.", Colors.CYAN, Icons.TERMINAL)\nclass ExampleCinematicEntry(\n    override val id: String,\n    override val name: String,\n    override val criteria: List<Criteria>,\n    @Segments(Colors.CYAN, Icons.TERMINAL)\n    override val segments: List<ExampleSegment>,\n): CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Segments sometimes need a minimum or maximum duration. This can be done using the ",(0,a.jsx)(n.code,{children:"@InnerMin"})," and ",(0,a.jsx)(n.code,{children:"@InnerMax"})," annotations."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Segments(Colors.CYAN, Icons.TERMINAL)\n@InnerMin(Min(10))\n@InnerMax(Max(20))\noverride val segments: List<ExampleSegment>,\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will make sure that the segment will be at least 10 frames long and at most 20 frames long."}),"\n",(0,a.jsx)(n.h3,{id:"examplesegment",children:"ExampleSegment"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"data class ExampleSegment(\n    override val startFrame: Int,\n    override val endFrame: Int,\n): Segment\n"})}),"\n",(0,a.jsx)(n.h3,{id:"examplecinematicaction",children:"ExampleCinematicAction"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CinematicAction"})," is the action that is created when a cinematic is started. It is used to keep track of the current frame and to execute the segments.\nThere are a few different lifecycle methods that can be used."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"setup()"})," is called when the cinematic is created. This is the place to initialize any variables, spawn entities, etc."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tick(frame: Int)"})," is called every frame. This is the place to execute the segments. It is even executed when no segments are active."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"teardown()"})," is called when the cinematic is finished. This is the place to remove any entities, etc."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"canFinish(frame: Int)"})," the only method that needs to be implemented. It is used by the ",(0,a.jsx)(n.code,{children:"CinematicSequence"})," to determine if the cinematic is finished."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you need all the customization, you can can implement the ",(0,a.jsx)(n.code,{children:"CinematicAction"})," directly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class ExampleCinematicAction(\n    override val player: Player,\n    override val entry: ExampleCinematicEntry,\n): CinematicAction {\n    override fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // Execute segments\n    }\n\n    override fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"simplecinematicaction",children:"SimpleCinematicAction"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you don't need all the customization and flexiblity. If you only care about 1 segment track, and only need to do something when a segment starts or ends, you can use the ",(0,a.jsx)(n.code,{children:"SimpleCinematicAction"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class ExampleCinematicAction(\n    override val player: Player,\n    override val entry: ExampleCinematicEntry,\n): SimpleCinematicAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        // Called when a segment starts\n    }\n\n    override suspend fun endSegment(segment: ExampleSegment) {\n        // Called when a segment ends\n    }\n}\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);