"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8995],{14075:(e,t,n)=>{n.d(t,{M:()=>a});var r=n(69592),i=n(50053),l=n(74722);function a(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:l.A(e.nodes(),function(t){var n=e.node(t),i=e.parent(t),l={v:t};return r.A(n)||(l.value=n),r.A(i)||(l.parent=i),l}),edges:l.A(e.edges(),function(t){var n=e.edge(t),i={v:t.v,w:t.w};return r.A(t.name)||(i.name=t.name),r.A(n)||(i.value=n),i})};return r.A(e.graph())||(t.value=i.A(e.graph())),t}n(73046)},50053:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(91641);let i=function(e){return(0,r.A)(e,4)}},8995:(e,t,n)=>{n.d(t,{r:()=>O});var r=n(21176),i=n(14075),l=n(88146),a=n(86079),d=n(697),o=n(9312),s=n(19549);let h={},g={},c={},f=()=>{g={},c={},h={}},u=(e,t)=>(a.l.trace("In isDescendant",t," ",e," = ",g[t].includes(e)),!!g[t].includes(e)),w=(e,t)=>(a.l.info("Descendants of ",t," is ",g[t]),a.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(g[t]?g[t].includes(e.v)||u(e.v,t)||u(e.w,t)||g[t].includes(e.w):(a.l.debug("Tilt, ",t,",not in descendants"),!1))),p=(e,t,n,r)=>{a.l.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let i=t.children(e)||[];e!==r&&i.push(e),a.l.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(t.children(i).length>0)p(i,t,n,r);else{let l=t.node(i);a.l.info("cp ",i," to ",r," with parent ",e),n.setNode(i,l),r!==t.parent(i)&&(a.l.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(a.l.debug("Setting parent",i,e),n.setParent(i,e)):(a.l.info("In copy ",e,"root",r,"data",t.node(e),r),a.l.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let d=t.edges(i);a.l.debug("Copying Edges",d),d.forEach(i=>{a.l.info("Edge",i);let l=t.edge(i.v,i.w,i.name);a.l.info("Edge data",l,r);try{w(i,r)?(a.l.info("Copying as ",i.v,i.w,l,i.name),n.setEdge(i.v,i.w,l,i.name),a.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):a.l.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(e){a.l.error(e)}})}a.l.debug("Removing node",i),t.removeNode(i)})},v=(e,t)=>{let n=t.children(e),r=[...n];for(let i of n)c[i]=e,r=[...r,...v(i,t)];return r},y=(e,t)=>{a.l.trace("Searching",e);let n=t.children(e);if(a.l.trace("Searching children of id ",e,n),n.length<1)return a.l.trace("This is a valid node",e),e;for(let r of n){let n=y(r,t);if(n)return a.l.trace("Found replacement for",e," => ",n),n}},x=e=>h[e]&&h[e].externalConnections&&h[e]?h[e].id:e,m=(e,t)=>{if(!e||t>10){a.l.debug("Opting out, no graph ");return}for(let t of(a.l.debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&(a.l.warn("Cluster identified",t," Replacement id in edges: ",y(t,e)),g[t]=v(t,e),h[t]={id:y(t,e),clusterData:e.node(t)})}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?(a.l.debug("Cluster identified",t,g),r.forEach(e=>{e.v!==t&&e.w!==t&&u(e.v,t)^u(e.w,t)&&(a.l.warn("Edge: ",e," leaves cluster ",t),a.l.warn("Descendants of XXX ",t,": ",g[t]),h[t].externalConnections=!0)})):a.l.debug("Not a cluster ",t,g)}),Object.keys(h))){let n=h[t].id,r=e.parent(n);r!==t&&h[r]&&!h[r].externalConnections&&(h[t].id=r)}e.edges().forEach(function(t){let n=e.edge(t);a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(a.l.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h[t.v]," --- ",h[t.w]),h[t.v]&&h[t.w]&&h[t.v]===h[t.w]){a.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name);let l=t.w+"---"+t.v;e.setNode(l,{domId:l,id:l,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});let d=structuredClone(n),o=structuredClone(n);d.label="",d.arrowTypeEnd="none",o.label="",d.fromCluster=t.v,o.toCluster=t.v,e.setEdge(r,l,d,t.name+"-cyclic-special"),e.setEdge(l,i,o,t.name+"-cyclic-special")}else(h[t.v]||h[t.w])&&(a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(h[e.parent(r)].externalConnections=!0,n.fromCluster=t.v),i!==t.w&&(h[e.parent(i)].externalConnections=!0,n.toCluster=t.w),a.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name))}),a.l.warn("Adjusted Graph",i.M(e)),b(e,0),a.l.trace(h)},b=(e,t)=>{if(a.l.warn("extractor - ",t,i.M(e),e.children("D")),t>10){a.l.error("Bailing out");return}let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r){a.l.debug("Done, no node has children",e.nodes());return}for(let r of(a.l.debug("Nodes = ",n,t),n))if(a.l.debug("Extracting node",r,h,h[r]&&!h[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),h[r]){if(!h[r].externalConnections&&e.children(r)&&e.children(r).length>0){a.l.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";h[r]&&h[r].clusterData&&h[r].clusterData.dir&&(n=h[r].clusterData.dir,a.l.warn("Fixing dir",h[r].clusterData.dir,n));let l=new d.T({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.l.warn("Old graph before copy",i.M(e)),p(r,e,l,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:h[r].clusterData,labelText:h[r].labelText,graph:l}),a.l.warn("New graph after copy node: (",r,")",i.M(l)),a.l.debug("Old graph after copy",i.M(e))}else a.l.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!h[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),a.l.debug(h)}else a.l.debug("Not a cluster",r,t);for(let r of(n=e.nodes(),a.l.warn("New list of nodes",n),n)){let n=e.node(r);a.l.warn(" Now next level",r,n),n.clusterNode&&b(n.graph,t+1)}},C=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach(t=>{let r=e.children(t),i=C(e,r);n=[...n,...i]}),n},E=e=>C(e,e.children()),N={rect:(e,t)=>{a.l.info("Creating subgraph rect for ",t.id,t);let n=(0,a.c)(),r=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),i=r.insert("rect",":first-child"),d=(0,a.m)(n.flowchart.htmlLabels),h=r.insert("g").attr("class","cluster-label"),g="markdown"===t.labelType?(0,o.a)(h,t.labelText,{style:t.labelStyle,useHtmlLabels:d}):h.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),c=g.getBBox();if((0,a.m)(n.flowchart.htmlLabels)){let e=g.children[0],t=(0,s.Ltv)(g);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}let f=0*t.padding,u=t.width<=c.width+f?c.width+f:t.width;t.width<=c.width+f?t.diff=(c.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,a.l.trace("Data ",t,JSON.stringify(t)),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f/2).attr("width",u).attr("height",t.height+f);let{subGraphTitleTopMargin:w}=(0,l.g)(n);d?h.attr("transform",`translate(${t.x-c.width/2}, ${t.y-t.height/2+w})`):h.attr("transform",`translate(${t.x}, ${t.y-t.height/2+w})`);let p=i.node().getBBox();return t.width=p.width,t.height=p.height,t.intersect=function(e){return(0,l.i)(t,e)},r},roundedWithTitle:(e,t)=>{let n=(0,a.c)(),r=e.insert("g").attr("class",t.classes).attr("id",t.id),i=r.insert("rect",":first-child"),d=r.insert("g").attr("class","cluster-label"),o=r.append("rect"),h=d.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),g=h.getBBox();if((0,a.m)(n.flowchart.htmlLabels)){let e=h.children[0],t=(0,s.Ltv)(h);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}g=h.getBBox();let c=0*t.padding,f=c/2,u=t.width<=g.width+t.padding?g.width+t.padding:t.width;t.width<=g.width+t.padding?t.diff=(g.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,i.attr("class","outer").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f).attr("width",u+c).attr("height",t.height+c),o.attr("class","inner").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f+g.height-1).attr("width",u+c).attr("height",t.height+c-g.height-3);let{subGraphTitleTopMargin:w}=(0,l.g)(n);d.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2-t.padding/3+((0,a.m)(n.flowchart.htmlLabels)?5:3)+w})`);let p=i.node().getBBox();return t.height=p.height,t.intersect=function(e){return(0,l.i)(t,e)},r},noteGroup:(e,t)=>{let n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");let d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.intersect=function(e){return(0,l.i)(t,e)},n},divider:(e,t)=>{let n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding;r.attr("class","divider").attr("x",t.x-t.width/2-i/2).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);let a=r.node().getBBox();return t.width=a.width,t.height=a.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,l.i)(t,e)},n}},X={},S=(e,t)=>{a.l.trace("Inserting cluster");let n=t.shape||"rect";X[t.id]=N[n](e,t)},D=()=>{X={}},B=async(e,t,n,d,o,s)=>{a.l.info("Graph in recursive render: XXX",i.M(t),o);let g=t.graph().rankdir;a.l.trace("Dir in recursive render - dir:",g);let c=e.insert("g").attr("class","root");t.nodes()?a.l.info("Recursive render XXX",t.nodes()):a.l.info("No nodes found for",t),t.edges().length>0&&a.l.trace("Recursive edges",t.edge(t.edges()[0]));let f=c.insert("g").attr("class","clusters"),u=c.insert("g").attr("class","edgePaths"),w=c.insert("g").attr("class","edgeLabels"),p=c.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let r=t.node(e);if(void 0!==o){let n=JSON.parse(JSON.stringify(o.clusterData));a.l.info("Setting data for cluster XXX (",e,") ",n,o),t.setNode(o.id,n),t.parent(e)||(a.l.trace("Setting parent",e,o.id),t.setParent(e,o.id,n))}if(a.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){a.l.info("Cluster identified",e,r.width,t.node(e));let i=await B(p,r.graph,n,d,t.node(e),s),o=i.elem;(0,l.u)(r,o),r.diff=i.diff||0,a.l.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),(0,l.s)(o,r),a.l.warn("Recursive render complete ",o,r)}else t.children(e).length>0?(a.l.info("Cluster - the non recursive path XXX",e,r.id,r,t),a.l.info(y(r.id,t)),h[r.id]={id:y(r.id,t),node:r}):(a.l.info("Node - the non recursive path",e,r.id,r),await (0,l.e)(p,t.node(e),g))})),t.edges().forEach(function(e){let n=t.edge(e.v,e.w,e.name);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),a.l.info("Fix",h,"ids:",e.v,e.w,"Translating: ",h[e.v],h[e.w]),(0,l.f)(w,n)}),t.edges().forEach(function(e){a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))}),a.l.info("#############################################"),a.l.info("###                Layout                 ###"),a.l.info("#############################################"),a.l.info(t),(0,r.Zp)(t),a.l.info("Graph after layout:",i.M(t));let v=0,{subGraphTitleTotalMargin:x}=(0,l.g)(s);return E(t).forEach(function(e){let n=t.node(e);a.l.info("Position "+e+": "+JSON.stringify(t.node(e))),a.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=x,(0,l.p)(n)):t.children(e).length>0?(n.height+=x,S(f,n),h[n.id].node=n):(n.y+=x/2,(0,l.p)(n))}),t.edges().forEach(function(e){let r=t.edge(e);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r),r.points.forEach(e=>e.y+=x/2);let i=(0,l.h)(u,e,r,h,n,t,d);(0,l.j)(r,i)}),t.nodes().forEach(function(e){let n=t.node(e);a.l.info(e,n.type,n.diff),"group"===n.type&&(v=n.diff)}),{elem:c,diff:v}},O=async(e,t,n,r,d)=>{(0,l.a)(e,n,r,d),(0,l.b)(),(0,l.d)(),D(),f(),a.l.warn("Graph at first:",JSON.stringify(i.M(t))),m(t),a.l.warn("Graph after:",JSON.stringify(i.M(t)));let o=(0,a.c)();await B(e,t,r,d,void 0,o)}}}]);