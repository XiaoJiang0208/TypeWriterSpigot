"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72072],{18110:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=s(74848),a=s(28453);const r={},i="AssetEntry",c={id:"develop/adapters/entries/static/asset",title:"AssetEntry",description:"The AssetEntry is a specialized interface that extends the StaticEntry.",source:"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/asset.mdx",sourceDirName:"develop/02-adapters/03-entries/static",slug:"/develop/adapters/entries/static/asset",permalink:"/0.4.2/develop/adapters/entries/static/asset",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/asset.mdx",tags:[],version:"0.4.2",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1723305675e3,frontMatter:{},sidebar:"develop",previous:{title:"ArtifactEntry",permalink:"/0.4.2/develop/adapters/entries/static/artifact"},next:{title:"SoundIdEntry",permalink:"/0.4.2/develop/adapters/entries/static/sound_id"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Defining an AssetEntry",id:"defining-an-assetentry",level:3},{value:"Accessing the Artifact&#39;s Content",id:"accessing-the-artifacts-content",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"assetentry",children:"AssetEntry"})}),"\n",(0,n.jsxs)(t.p,{children:["The AssetEntry is a specialized interface that extends the ",(0,n.jsx)(t.code,{children:"StaticEntry"}),".\nIt is primarily used for handling static assets within the game.\nAssets can include various types of files such as images, sounds, or other external resources that are crucial to enhancing the game environment and player experience.\nThe key attribute of AssetEntry is the path, which specifies the location of the asset."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Here's a generic example of creating and using an ",(0,n.jsx)(t.code,{children:"AssetEntry"}),":"]}),"\n",(0,n.jsx)(t.h3,{id:"defining-an-assetentry",children:"Defining an AssetEntry"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_asset", "An example asset entry.", Colors.PINK, Icons.PERSON_WALKING)\nclass ExampleAssetEntry(\n    override val path: String = "",\n): AssetEntry\n'})}),"\n",(0,n.jsx)(t.h3,{id:"accessing-the-artifacts-content",children:"Accessing the Artifact's Content"}),"\n",(0,n.jsx)(t.p,{children:"To get the asset from the entry, you can use the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"import org.koin.java.KoinJavaComponent.get\n\nval assetManager = get<AssetManager>(AssetManager::class.java)\n\nval id = // ID of the entry\nval entry = Query.findById<ExampleAssetEntry>(id)\nval content: String = assetManager.fetchAsset(entry)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);