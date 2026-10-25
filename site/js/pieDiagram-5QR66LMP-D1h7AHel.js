var J=(t,n,g)=>new Promise((A,l)=>{var u=a=>{try{e(g.next(a))}catch(o){l(o)}},i=a=>{try{e(g.throw(a))}catch(o){l(o)}},e=a=>a.done?A(a.value):Promise.resolve(a.value).then(u,i);e((g=g.apply(t,n)).next())});import{p as it}from"./chunk-JWPE2WC7-B1LY8Qqe.js";import{W as B,_ as h,g as ot,s as st,a as lt,b as ct,v as gt,t as ut,l as G,c as dt,P as pt,S as ht,a9 as ft,d as mt,B as vt,Q as xt}from"./MermaidDiagram-DfOkuGvi.js";import{p as yt}from"./cynefin-OW5HDTMX-DKJnaz2D.js";import{c as b,a as St}from"./transform-Da4nq5GG.js";import{d as K}from"./arc-Bc_ViPmQ.js";import{o as wt}from"./ordinal-Cboi1Yqb.js";import"./vendor-element-plus-Cb8mRXYr.js";import"./vendor-shared-XbCbQuHZ.js";import"../jse/index-index-aPaky9zv.js";import"./mimo-colors-CN1vs4a4.js";import"./bootstrap-CBSC6qi5.js";import"./init-Gi6I4Gst.js";function At(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Ct(t){return t}function $t(){var t=Ct,n=At,g=null,A=b(0),l=b(B),u=b(0);function i(e){var a,o=(e=St(e)).length,f,C,T=0,m=new Array(o),s=new Array(o),v=+A.apply(this,arguments),E=Math.min(B,Math.max(-B,l.apply(this,arguments)-v)),k,L=Math.min(Math.abs(E)/o,u.apply(this,arguments)),d=L*(E<0?-1:1),$;for(a=0;a<o;++a)($=s[m[a]=a]=+t(e[a],a,e))>0&&(T+=$);for(n!=null?m.sort(function(M,x){return n(s[M],s[x])}):g!=null&&m.sort(function(M,x){return g(e[M],e[x])}),a=0,C=T?(E-o*d)/T:0;a<o;++a,v=k)f=m[a],$=s[f],k=v+($>0?$*C:0)+d,s[f]={data:e[f],index:a,value:$,startAngle:v,endAngle:k,padAngle:L};return s}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:b(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,g=null,i):n},i.sort=function(e){return arguments.length?(g=e,n=null,i):g},i.startAngle=function(e){return arguments.length?(A=typeof e=="function"?e:b(+e),i):A},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:b(+e),i):l},i.padAngle=function(e){return arguments.length?(u=typeof e=="function"?e:b(+e),i):u},i}var Dt=xt.pie,I={sections:new Map,showData:!1},F=I.sections,V=I.showData,Tt=structuredClone(Dt),bt=h(()=>structuredClone(Tt),"getConfig"),kt=h(()=>{F=new Map,V=I.showData,vt()},"clear"),zt=h(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);F.has(t)||(F.set(t,n),G.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Et=h(()=>F,"getSections"),Mt=h(t=>{V=t},"setShowData"),Rt=h(()=>V,"getShowData"),Y={getConfig:bt,clear:kt,setDiagramTitle:ut,getDiagramTitle:gt,setAccTitle:ct,getAccTitle:lt,setAccDescription:st,getAccDescription:ot,addSection:zt,getSections:Et,setShowData:Mt,getShowData:Rt},Lt=h((t,n)=>{it(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Pt={parse:h(t=>J(null,null,function*(){const n=yield yt("pie",t);G.debug(n),Lt(n,Y)}),"parse")},_t=h(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Ft=_t,Ht=h(t=>{const n=[...t.values()].reduce((l,u)=>l+u,0),g=[...t.entries()].map(([l,u])=>({label:l,value:u})).filter(l=>l.value/n*100>=1);return $t().value(l=>l.value).sort(null)(g)},"createPieArcs"),Nt=h((t,n,g,A)=>{var Z,q;G.debug(`rendering pie chart
`+t);const l=A.db,u=dt(),i=pt(l.getConfig(),u.pie),e=40,a=18,o=4,f=450,C=f,T=ht(n),m=T.append("g");m.attr("transform","translate("+C/2+","+f/2+")");const{themeVariables:s}=u;let[v]=ft(s.pieOuterStrokeWidth);v!=null||(v=2);const E=i.legendPosition,k=i.textPosition,L=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,d=Math.min(C,f)/2-e,$=K().innerRadius(L*d).outerRadius(d),M=K().innerRadius(d*k).outerRadius(d*k),x=m.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",d+v/2).attr("class","pieOuterCircle");const P=l.getSections(),tt=Ht(P),et=[s.pie1,s.pie2,s.pie3,s.pie4,s.pie5,s.pie6,s.pie7,s.pie8,s.pie9,s.pie10,s.pie11,s.pie12];let H=0;P.forEach(r=>{H+=r});const U=tt.filter(r=>(r.data.value/H*100).toFixed(0)!=="0"),N=wt(et).domain([...P.keys()]);x.selectAll("mySlices").data(U).enter().append("path").attr("d",$).attr("fill",r=>N(r.data.label)).attr("class",r=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===r.data.label&&(c+=" highlighted"),c}),x.selectAll("mySlices").data(U).enter().append("text").text(r=>(r.data.value/H*100).toFixed(0)+"%").attr("transform",r=>"translate("+M.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const at=m.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...P.entries()].map(([r,c])=>({label:r,value:c})),D=m.selectAll(".legend").data(R).enter().append("g").attr("class","legend");D.append("rect").attr("width",a).attr("height",a).style("fill",r=>N(r.label)).style("stroke",r=>N(r.label)),D.append("text").attr("x",a+o).attr("y",a-o).text(r=>l.getShowData()?`${r.label} [${r.value}]`:r.label);const z=Math.max(...D.selectAll("text").nodes().map(r=>{var c;return(c=r==null?void 0:r.getBoundingClientRect().width)!=null?c:0}));let _=f,O=C+e;const p=a+o,W=R.length*p;switch(E){case"center":D.attr("transform",(r,c)=>{const y=p*R.length/2,S=-z/2-(a+o),w=c*p-y;return"translate("+S+","+w+")"});break;case"top":_+=W,D.attr("transform",(r,c)=>{const y=d,S=-z/2-(a+o),w=c*p-y;return`translate(${S}, ${w})`}),x.attr("transform",()=>`translate(0, ${W+p})`);break;case"bottom":_+=W,D.attr("transform",(r,c)=>{const y=-d-p,S=-z/2-(a+o),w=c*p-y;return"translate("+S+","+w+")"});break;case"left":O+=a+o+z,D.attr("transform",(r,c)=>{const y=p*R.length/2,S=-d-(a+o),w=c*p-y;return"translate("+S+","+w+")"}),x.attr("transform",()=>`translate(${z+a+o}, 0)`);break;case"right":default:O+=a+o+z,D.attr("transform",(r,c)=>{const y=p*R.length/2,S=12*a,w=c*p-y;return"translate("+S+","+w+")"});break}const j=(q=(Z=at.node())==null?void 0:Z.getBoundingClientRect().width)!=null?q:0,rt=C/2-j/2,nt=C/2+j/2,Q=Math.min(0,rt),X=Math.max(O,nt)-Q;T.attr("viewBox",`${Q} 0 ${X} ${_}`),mt(T,_,X,i.useMaxWidth)},"draw"),Ot={draw:Nt},te={parser:Pt,db:Y,renderer:Ot,styles:Ft};export{te as diagram};
