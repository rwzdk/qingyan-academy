var Ct=Object.defineProperty;var rt=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var st=(t,e,n)=>e in t?Ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Q=(t,e)=>{for(var n in e||(e={}))Dt.call(e,n)&&st(t,n,e[n]);if(rt)for(var n of rt(e))vt.call(e,n)&&st(t,n,e[n]);return t};var it=(t,e,n)=>new Promise((o,s)=>{var f=r=>{try{b(n.next(r))}catch(u){s(u)}},$=r=>{try{b(n.throw(r))}catch(u){s(u)}},b=r=>r.done?o(r.value):Promise.resolve(r.value).then(f,$);b((n=n.apply(t,e)).next())});import{p as kt}from"./chunk-JWPE2WC7-B1LY8Qqe.js";import{_ as c,s as Tt,g as At,v as Bt,t as St,a as Mt,b as zt,l as X,S as Lt,d as Nt,B as Pt,P as Z,N as J,Q as It,a6 as lt}from"./MermaidDiagram-DfOkuGvi.js";import{p as Wt}from"./cynefin-OW5HDTMX-DKJnaz2D.js";import"./vendor-element-plus-Cb8mRXYr.js";import"./vendor-shared-XbCbQuHZ.js";import"../jse/index-index-aPaky9zv.js";import"./transform-Da4nq5GG.js";import"./mimo-colors-CN1vs4a4.js";import"./bootstrap-CBSC6qi5.js";var ft=c(()=>({domains:new Map,transitions:[]}),"createDefaultData"),H=ft(),Rt=c(()=>H.domains,"getDomains"),_t=c(()=>H.transitions,"getTransitions"),Ft=c(t=>{var e;if(t)for(const n of t){const o=n.domain,s=((e=n.items)!=null?e:[]).map(f=>({label:f.label}));H.domains.set(o,{name:o,items:s})}},"setDomains"),Vt=c(t=>{t&&(H.transitions=t.filter(e=>e.from===e.to?(X.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1):!0).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},"setTransitions"),Et=c(()=>Z(Q(Q({},It.cynefin),J().cynefin)),"getConfig"),Ht=c(()=>{Pt(),H=ft()},"clear"),Y={getDomains:Rt,getTransitions:_t,setDomains:Ft,setTransitions:Vt,getConfig:Et,clear:Ht,setAccTitle:zt,getAccTitle:Mt,setDiagramTitle:St,getDiagramTitle:Bt,getAccDescription:At,setAccDescription:Tt},Gt=c(t=>{kt(t,Y),Y.setDomains(t.domains),Y.setTransitions(t.transitions)},"populate"),Yt={parse:c(t=>it(null,null,function*(){const e=yield Wt("cynefin",t);X.debug(e),Gt(e)}),"parse")};function E(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}c(E,"seededRandom");function dt(t){let e=0;for(let n=0;n<t.length;n++){const o=t.charCodeAt(n);e=(e<<5)-e+o,e|=0}return e}c(dt,"hashString");function mt(t,e){return typeof t=="number"&&Number.isFinite(t)&&t!==0?t:dt(e)}c(mt,"resolveSeed");function pt(t,e,n,o){const s=t/2,f=o!=null?o:t*.015,$=7,b=e/$,r=[];for(let a=0;a<=$;a++){const p=E(n+a*17)*f*2-f;r.push({x:s+p,y:a*b})}let u=`M${r[0].x},${r[0].y}`;for(let a=0;a<r.length-1;a++){const p=r[a],l=r[a+1],m=(p.y+l.y)/2,D=a%2===0?1:-1,x=f*1.5*D*E(n+a*31+7),R=p.x+x,_=m,F=l.x-x;u+=` C${R},${_} ${F},${m} ${l.x},${l.y}`}return u}c(pt,"generateFoldPath");function yt(t,e,n,o){const s=e/2,f=o!=null?o:e*.015,$=7,b=t/$,r=[];for(let a=0;a<=$;a++){const p=E(n+a*23)*f*2-f;r.push({x:a*b,y:s+p})}let u=`M${r[0].x},${r[0].y}`;for(let a=0;a<r.length-1;a++){const p=r[a],l=r[a+1],m=(p.x+l.x)/2,D=a%2===0?1:-1,x=f*1.5*D*E(n+a*37+11),R=m,_=p.y+x,F=m,L=l.y-x;u+=` C${R},${_} ${F},${L} ${l.x},${l.y}`}return u}c(yt,"generateHorizontalBoundary");function ut(t,e){const n=t/2,o=e*.5,s=e,f=t*.03;return[`M${n},${o}`,`C${n+f},${o+(s-o)*.2}`,`${n-f*1.5},${o+(s-o)*.55}`,`${n+f*.5},${o+(s-o)*.75}`,`C${n-f},${o+(s-o)*.85}`,`${n+f*.3},${o+(s-o)*.95}`,`${n},${s}`].join(" ")}c(ut,"generateCliffPath");function ht(t,e,n,o){return[`M${t-n},${e}`,`A${n},${o} 0 1,1 ${t+n},${e}`,`A${n},${o} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}c(ht,"generateConfusionPath");var ct={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Xt=c((t,e)=>{const n=t/2,o=e/2;return{complex:{cx:n/2,cy:o/2,x:0,y:0,w:n,h:o},complicated:{cx:n+n/2,cy:o/2,x:n,y:0,w:n,h:o},chaotic:{cx:n/2,cy:o+o/2,x:0,y:o,w:n,h:o},clear:{cx:n+n/2,cy:o+o/2,x:n,y:o,w:n,h:o},confusion:{cx:n,cy:o,x:n*.7,y:o*.7,w:n*.6,h:o*.6}}},"getDomainLayouts"),jt=c(()=>{const t=lt(),e=J();return Z(t,e.themeVariables).cynefin},"getCynefinDomainColors"),U=3,qt=c((t,e,n,o)=>{var nt;const s=o.db,f=s.getDomains(),$=s.getTransitions(),b=s.getDiagramTitle(),r=s.getAccTitle(),u=s.getAccDescription(),a=s.getConfig(),p=jt();X.debug("Rendering Cynefin diagram");const l=a.width,m=a.height,D=a.padding,x=a.showDomainDescriptions,R=a.boundaryAmplitude,_=l+D*2,F=m+D*2,L={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},T=Lt(e);Nt(T,F,_,(nt=a.useMaxWidth)!=null?nt:!0),T.attr("viewBox",`0 0 ${_} ${F}`),r&&T.append("title").text(r),u&&T.append("desc").text(u);const A=T.append("g").attr("transform",`translate(${D}, ${D})`),V=Xt(l,m),K=mt(a.seed,e),xt=A.append("g").attr("class","cynefin-backgrounds"),j=["complex","complicated","chaotic","clear"];for(const d of j){const i=V[d];xt.append("rect").attr("class","cynefinDomain").attr("x",i.x).attr("y",i.y).attr("width",i.w).attr("height",i.h).attr("fill",L[d]).attr("fill-opacity",.4).attr("stroke","none")}const q=A.append("g").attr("class","cynefin-boundaries");q.append("path").attr("class","cynefinBoundary").attr("d",pt(l,m,K,R)).attr("fill","none"),q.append("path").attr("class","cynefinBoundary").attr("d",yt(l,m,K+100,R)).attr("fill","none"),q.append("path").attr("class","cynefinCliff").attr("d",ut(l,m)).attr("fill","none");const gt=l*.15,$t=m*.15;A.append("path").attr("class","cynefinConfusion").attr("d",ht(l/2,m/2,gt,$t)).attr("fill",L.confusion).attr("fill-opacity",.5);const O=A.append("g").attr("class","cynefin-labels");for(const d of j){const i=V[d];O.append("text").attr("class","cynefinDomainLabel").attr("x",i.cx).attr("y",x?i.cy-30:i.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(d.charAt(0).toUpperCase()+d.slice(1))}if(O.append("text").attr("class","cynefinDomainLabel").attr("x",l/2).attr("y",x?m/2-10:m/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),x){const d=A.append("g").attr("class","cynefin-subtitles");for(const i of j){const h=V[i],y=ct[i];d.append("text").attr("class","cynefinSubtitle").attr("x",h.cx).attr("y",h.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.model),d.append("text").attr("class","cynefinSubtitle").attr("x",h.cx).attr("y",h.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.practice)}d.append("text").attr("class","cynefinSubtitle").attr("x",l/2).attr("y",m/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(ct.confusion.practice)}const tt=A.append("g").attr("class","cynefin-items"),B=26,et=10,bt=["complex","complicated","chaotic","clear","confusion"];for(const d of bt){const i=f.get(d);if(!i||i.items.length===0)continue;const h=V[d],y=d==="confusion";let N=i.items,P=0;y&&i.items.length>U&&(P=i.items.length-U,N=i.items.slice(0,U));let S;if(y){const w=x?22:14;S=h.cy+w}else S=h.cy+(x?25:15);if([...N].forEach((w,M)=>{const v=S+M*(B+4),z=tt.append("g"),I=z.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",B/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(w.label);let C=w.label.length*7;const g=I.node();if(g&&typeof g.getBBox=="function"){const G=g.getBBox();G.width>0&&(C=G.width)}const k=C+et*2,W=h.cx-k/2;z.attr("transform",`translate(${W}, ${v})`),z.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",k).attr("height",B).attr("rx",4).attr("ry",4).attr("fill",L[d]).attr("fill-opacity",.95),I.attr("x",k/2).attr("y",B/2)}),P>0){const w=S+N.length*(B+4),M=`+${P} more`,v=tt.append("g"),z=v.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",B/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(M);let I=M.length*7;const C=z.node();if(C&&typeof C.getBBox=="function"){const W=C.getBBox();W.width>0&&(I=W.width)}const g=I+et*2,k=h.cx-g/2;v.attr("transform",`translate(${k}, ${w})`),v.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",g).attr("height",B).attr("rx",4).attr("ry",4).attr("fill",L[d]).attr("fill-opacity",.6),z.attr("x",g/2).attr("y",B/2)}}if($.length>0){const d=T.select("defs").empty()?T.append("defs"):T.select("defs"),i=`cynefin-arrow-${e}`;d.append("marker").attr("id",i).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");const h=A.append("g").attr("class","cynefin-arrows");$.forEach(y=>{const N=V[y.from],P=V[y.to];if(!N||!P)return;if(y.from===y.to){X.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);return}const S=N.cx,w=N.cy,M=P.cx,v=P.cy,z=(S+M)/2,I=(w+v)/2,C=M-S,g=v-w,k=Math.sqrt(C*C+g*g),W=k*.15,G=-g/k,wt=C/k,ot=z+G*W,at=I+wt*W;h.append("path").attr("class","cynefinArrowLine").attr("d",`M${S},${w} Q${ot},${at} ${M},${v}`).attr("fill","none").attr("marker-end",`url(#${i})`),y.label&&h.append("text").attr("class","cynefinArrowLabel").attr("x",ot).attr("y",at-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(y.label)})}b&&A.append("text").attr("class","cynefinTitle").attr("x",l/2).attr("y",-D/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(b)},"draw"),Qt={draw:qt},Ut=c(()=>{const t=lt(),e=J();return Z(t,e.themeVariables).cynefin},"getCynefinTheme"),Zt=c(()=>{const t=Ut();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles"),Jt=Zt,ce={parser:Yt,db:Y,renderer:Qt,styles:Jt};export{ce as diagram};
