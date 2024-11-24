"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72072],{56906:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});let n=JSON.parse('{"id":"develop/adapters/entries/static/asset","title":"AssetEntry","description":"The AssetEntry is a specialized interface that extends the StaticEntry.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/asset.mdx","sourceDirName":"develop/02-adapters/03-entries/static","slug":"/develop/adapters/entries/static/asset","permalink":"/0.4.2/develop/adapters/entries/static/asset","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/asset.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1732447497000,"frontMatter":{},"sidebar":"develop","previous":{"title":"ArtifactEntry","permalink":"/0.4.2/develop/adapters/entries/static/artifact"},"next":{"title":"SoundIdEntry","permalink":"/0.4.2/develop/adapters/entries/static/sound_id"}}');var a=s(74848),r=s(28453);let i={},c="AssetEntry",d={},l=[{value:"Usage",id:"usage",level:2},{value:"Defining an AssetEntry",id:"defining-an-assetentry",level:3},{value:"Accessing the Artifact&#39;s Content",id:"accessing-the-artifacts-content",level:3}];function o(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"assetentry",children:"AssetEntry"})}),"\n",(0,a.jsxs)(t.p,{children:["The AssetEntry is a specialized interface that extends the ",(0,a.jsx)(t.code,{children:"StaticEntry"}),".\nIt is primarily used for handling static assets within the game.\nAssets can include various types of files such as images, sounds, or other external resources that are crucial to enhancing the game environment and player experience.\nThe key attribute of AssetEntry is the path, which specifies the location of the asset."]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Here's a generic example of creating and using an ",(0,a.jsx)(t.code,{children:"AssetEntry"}),":"]}),"\n",(0,a.jsx)(t.h3,{id:"defining-an-assetentry",children:"Defining an AssetEntry"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_asset", "An example asset entry.", Colors.PINK, Icons.PERSON_WALKING)\nclass ExampleAssetEntry(\n    override val path: String = "",\n): AssetEntry\n'})}),"\n",(0,a.jsx)(t.h3,{id:"accessing-the-artifacts-content",children:"Accessing the Artifact's Content"}),"\n",(0,a.jsx)(t.p,{children:"To get the asset from the entry, you can use the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"import org.koin.java.KoinJavaComponent.get\n\nval assetManager = get<AssetManager>(AssetManager::class.java)\n\nval id = // ID of the entry\nval entry = Query.findById<ExampleAssetEntry>(id)\nval content: String = assetManager.fetchAsset(entry)\n"})})]})}function h(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);