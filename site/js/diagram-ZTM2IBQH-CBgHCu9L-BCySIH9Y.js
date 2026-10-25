var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var M=(a,t,e)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,C=(a,t)=>{for(var e in t||(t={}))E.call(t,e)&&M(a,e,t[e]);if(b)for(var e of b(t))D.call(t,e)&&M(a,e,t[e]);return a};var A=(a,t,e)=>new Promise((r,n)=>{var o=l=>{try{s(e.next(l))}catch(d){n(d)}},i=l=>{try{s(e.throw(l))}catch(d){n(d)}},s=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,i);s((e=e.apply(a,t)).next())});import{p as G}from"./chunk-353BL4L5-Dn_Y_Yna-B0ZOS0vG.js";import{_ as c,s as z,g as P,t as H,q as V,a as W,b as B,K as j,z as q,F as w,G as L,H as K,l as N,a1 as U}from"./mermaid.core-CAqkCmS1-BuvEoRkN.js";import{p as X}from"./treemap-75Q7IDZK-B2atdfMH-ixazSCBl.js";import"../jse/index-index-aPaky9zv.js";import"./vendor-element-plus-Cb8mRXYr.js";import"./vendor-shared-XbCbQuHZ.js";import"./index-BGvQLskK.js";import"./error-BVJkE67s-Cayz0RMb.js";import"./_plugin-vue_export-helper-1tPrXgE0-D7qTn_WD.js";import"./icon-n3MH9mZ4-Db86UoZD.js";import"./purify.es-DsYfPu6--CxcH1KIU.js";import"./_baseUniq-BXtq6_NW-Bb9YTfIC.js";import"./min-BngCxx8g-pZ7n1cjT.js";import"./isUndefined-Ikng25Pb-Dgw4-efh.js";import"./clone-CEJtuQzg-uGCQBg_K.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},T={axes:[],curves:[],options:x},h=structuredClone(T),Y=K.radar,Z=c(()=>w(C(C({},Y),L().radar)),"getConfig"),_=c(()=>h.axes,"getAxes"),J=c(()=>h.curves,"getCurves"),Q=c(()=>h.options,"getOptions"),tt=c(a=>{h.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),et=c(a=>{h.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:at(t.entries)}})},"setCurves"),at=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=_();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(n=>{var o;return((o=n.axis)==null?void 0:o.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),rt=c(a=>{var s,l,d,u,p;var t,e,r,n,o;const i=a.reduce((m,g)=>(m[g.name]=g,m),{});h.options={showLegend:(s=(t=i.showLegend)==null?void 0:t.value)!=null?s:x.showLegend,ticks:(l=(e=i.ticks)==null?void 0:e.value)!=null?l:x.ticks,max:(d=(r=i.max)==null?void 0:r.value)!=null?d:x.max,min:(u=(n=i.min)==null?void 0:n.value)!=null?u:x.min,graticule:(p=(o=i.graticule)==null?void 0:o.value)!=null?p:x.graticule}},"setOptions"),nt=c(()=>{q(),h=structuredClone(T)},"clear"),f={getAxes:_,getCurves:J,getOptions:Q,setAxes:tt,setCurves:et,setOptions:rt,getConfig:Z,clear:nt,setAccTitle:B,getAccTitle:W,setDiagramTitle:V,getDiagramTitle:H,getAccDescription:P,setAccDescription:z},st=c(a=>{G(a,f);const{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),ot={parse:c(a=>A(null,null,function*(){const t=yield X("radar",a);N.debug(t),st(t)}),"parse")},it=c((a,t,e,r)=>{var $;const n=r.db,o=n.getAxes(),i=n.getCurves(),s=n.getOptions(),l=n.getConfig(),d=n.getDiagramTitle(),u=j(t),p=lt(u,l),m=($=s.max)!=null?$:Math.max(...i.map(y=>Math.max(...y.entries))),g=s.min,v=Math.min(l.width,l.height)/2;ct(p,o,v,s.ticks,s.graticule),dt(p,o,v,l),O(p,o,i,g,m,s.graticule,l),R(p,i,s.showLegend,l),p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-l.height/2-l.marginTop)},"draw"),lt=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,n={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${n.x}, ${n.y})`)},"drawFrame"),ct=c((a,t,e,r,n)=>{if(n==="circle")for(let o=0;o<r;o++){const i=e*(o+1)/r;a.append("circle").attr("r",i).attr("class","radarGraticule")}else if(n==="polygon"){const o=t.length;for(let i=0;i<r;i++){const s=e*(i+1)/r,l=t.map((d,u)=>{const p=2*u*Math.PI/o-Math.PI/2,m=s*Math.cos(p),g=s*Math.sin(p);return`${m},${g}`}).join(" ");a.append("polygon").attr("points",l).attr("class","radarGraticule")}}},"drawGraticule"),dt=c((a,t,e,r)=>{const n=t.length;for(let o=0;o<n;o++){const i=t[o].label,s=2*o*Math.PI/n-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(s)).attr("y2",e*r.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),a.append("text").text(i).attr("x",e*r.axisLabelFactor*Math.cos(s)).attr("y",e*r.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function O(a,t,e,r,n,o,i){const s=t.length,l=Math.min(i.width,i.height)/2;e.forEach((d,u)=>{if(d.entries.length!==s)return;const p=d.entries.map((m,g)=>{const v=2*Math.PI*g/s-Math.PI/2,$=S(m,r,n,l),y=$*Math.cos(v),F=$*Math.sin(v);return{x:y,y:F}});o==="circle"?a.append("path").attr("d",k(p,i.curveTension)).attr("class",`radarCurve-${u}`):o==="polygon"&&a.append("polygon").attr("points",p.map(m=>`${m.x},${m.y}`).join(" ")).attr("class",`radarCurve-${u}`)})}c(O,"drawCurves");function S(a,t,e,r){const n=Math.min(Math.max(a,t),e);return r*(n-t)/(e-t)}c(S,"relativeRadius");function k(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let n=0;n<e;n++){const o=a[(n-1+e)%e],i=a[n],s=a[(n+1)%e],l=a[(n+2)%e],d={x:i.x+(s.x-o.x)*t,y:i.y+(s.y-o.y)*t},u={x:s.x-(l.x-i.x)*t,y:s.y-(l.y-i.y)*t};r+=` C${d.x},${d.y} ${u.x},${u.y} ${s.x},${s.y}`}return`${r} Z`}c(k,"closedRoundCurve");function R(a,t,e,r){if(!e)return;const n=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,i=20;t.forEach((s,l)=>{const d=a.append("g").attr("transform",`translate(${n}, ${o+l*i})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${l}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}c(R,"drawLegend");var pt={draw:it},ut=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const n=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return e},"genIndexStyles"),mt=c(a=>{const t=U(),e=L(),r=w(t,e.themeVariables),n=w(r.radar,a);return{themeVariables:r,radarOptions:n}},"buildRadarStyleOptions"),gt=c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=mt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${ut(t,e)}
	`},"styles"),kt={parser:ot,db:f,renderer:pt,styles:gt};export{kt as diagram};
