var Fe=Math.pow;import{c as nt,d as x,A as ot,e as at,D as it,f as rt,W as lt,g as st,M as re,T as Te,h as ct,G as U,i as dt,L as X,B as K,j as _e,k as ut,V as F,b as Oe,l as A,m as Y,n as Ge,o as J,p as He,q as Q,r as Ve,s as Z,t as Ue,a as mt,u as ft,v as pt}from"./three.module-C3hd88bs.js";import{O as vt}from"./OrbitControls-DYr6Mc40.js";import{p as u,s as ht}from"./dashboardTheme-CIwnh0Xd.js";import{C as gt,r as le,p as wt,w as se,d as xt,O as j,P as ee,Q as T,W as Ye,a4 as yt,_ as Pt}from"./vendor-element-plus-Cb8mRXYr.js";import{_ as Mt}from"./bootstrap-CBSC6qi5.js";import"./vendor-shared-XbCbQuHZ.js";import"../jse/index-index-aPaky9zv.js";const St={key:0,class:"scene-fallback"},Ct={key:1,class:"scene-fallback"},ce=5.05,bt=`
  uniform float uRelief;
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  void main() {
    vLocalPosition = normalize(position);
    float relief = sin(position.x * 7.0 + sin(position.z * 4.0))
      * sin(position.y * 9.0) * uRelief;
    vec3 surface = position + normal * relief;
    vec4 worldPosition = modelMatrix * vec4(surface, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Et=`
  uniform vec3 uBaseColor;
  uniform vec3 uDeepColor;
  uniform vec3 uHighlightColor;
  uniform float uSelected;
  uniform float uSeed;
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  float hash(vec3 point) {
    return fract(sin(dot(point, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }

  float noise(vec3 point) {
    vec3 cell = floor(point);
    vec3 fraction = fract(point);
    fraction = fraction * fraction * (3.0 - 2.0 * fraction);
    return mix(
      mix(mix(hash(cell), hash(cell + vec3(1.0, 0.0, 0.0)), fraction.x),
          mix(hash(cell + vec3(0.0, 1.0, 0.0)), hash(cell + vec3(1.0, 1.0, 0.0)), fraction.x), fraction.y),
      mix(mix(hash(cell + vec3(0.0, 0.0, 1.0)), hash(cell + vec3(1.0, 0.0, 1.0)), fraction.x),
          mix(hash(cell + vec3(0.0, 1.0, 1.0)), hash(cell + vec3(1.0, 1.0, 1.0)), fraction.x), fraction.y),
      fraction.z
    );
  }

  float fractalNoise(vec3 point) {
    float result = 0.0;
    float weight = 0.5;
    for (int i = 0; i < 4; i++) {
      result += noise(point) * weight;
      point *= 2.03;
      weight *= 0.5;
    }
    return result;
  }

  void main() {
    vec3 samplePosition = vLocalPosition + vec3(uSeed * 0.31, uSeed * 0.47, uSeed * 0.19);
    float largeDetail = fractalNoise(samplePosition * 4.3);
    float fineDetail = fractalNoise(samplePosition * 16.0 + largeDetail * 2.0);
    float mineralGrain = noise(samplePosition * 48.0);
    float fissure = 1.0 - abs(sin(largeDetail * 24.0 + fineDetail * 9.0));
    fissure = pow(fissure, 20.0) * smoothstep(0.3, 0.65, largeDetail);
    vec3 normal = normalize(vWorldNormal + vec3(
      sin(samplePosition.x * 48.0 + fineDetail * 6.0),
      cos(samplePosition.y * 51.0 + largeDetail * 7.0),
      sin(samplePosition.z * 44.0 + fineDetail * 5.0)
    ) * 0.028);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 lightDirection = normalize(vec3(-0.78, 0.68, 0.68));
    float bands = sin(vLocalPosition.y * 22.0 + largeDetail * 9.0) * 0.09;
    float terrain = smoothstep(0.34, 0.68, largeDetail + bands);
    vec3 surface = mix(uDeepColor, uBaseColor, terrain);
    surface = mix(surface, uHighlightColor, smoothstep(0.59, 0.78, fineDetail) * 0.32);
    surface *= 0.67 + fineDetail * 0.43 + mineralGrain * 0.28;
    surface += uHighlightColor * fissure * 0.16;
    surface = mix(surface, uHighlightColor, smoothstep(0.72, 0.95, abs(vLocalPosition.y)) * 0.13);

    float diffuse = max(dot(normal, lightDirection), 0.0);
    float reflected = pow(max(dot(reflect(-lightDirection, normal), viewDirection), 0.0), 32.0);
    float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 3.1);
    float illumination = 0.13 + diffuse * 1.08;
    vec3 color = surface * illumination;
    color += uHighlightColor * (reflected * 0.22 + rim * 0.27);
    color += uBaseColor * (0.04 + uSelected * 0.05);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Dt=`
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Lt=`
  uniform vec3 uColor;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float rim = pow(1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0), 3.0);
    gl_FragColor = vec4(uColor, rim * 0.54);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Wt=gt({__name:"KnowledgeUniverseScene",props:{nodes:{},selectedNodeIndex:{},selectedStageIndex:{}},emits:["select-node","select-stage"],setup(de,{expose:$e,emit:qe}){const m=de,ue=qe,_=le(null),L=le(!1),b=le(null),me=[...ht],Xe=[u.cyan,u.purple,u.orange,u.green,u.pink],y=new Map,O=[],fe=new ft,pe=new mt,ve=new F,$=new F;let d=null,s=null,r=null,a=null,h=null,w=null,k=null,G=null,H=null,B=null,p=null,P=0,te=0,W=null,E=!1;function he(t,e,n){const o=new x(t);return new Ge({vertexShader:bt,fragmentShader:Et,uniforms:{uBaseColor:{value:o.clone().multiplyScalar(.8)},uDeepColor:{value:o.clone().multiplyScalar(.12)},uHighlightColor:{value:o.clone().lerp(new x("#ffffff"),.68)},uSelected:{value:0},uRelief:{value:e},uSeed:{value:n}}})}function ge(t){let e=t>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function we(t){const e=document.createElement("canvas");e.width=t?128:64,e.height=e.width;const n=e.getContext("2d");if(n){const o=e.width/2,i=n.createRadialGradient(o,o,0,o,o,o);t?(i.addColorStop(0,"rgba(255,255,255,0.75)"),i.addColorStop(.2,"rgba(255,255,255,0.42)"),i.addColorStop(.55,"rgba(255,255,255,0.12)")):(i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.9)"),i.addColorStop(.65,"rgba(255,255,255,0.25)")),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,e.width,e.height)}return new ct(e)}function xe(t,e,n,o,i){const l=ge(o),v=new Float32Array(e*3),g=new Float32Array(e*3),M=new x(n),N=new x(u.text),f=M.clone().multiplyScalar(.58),c=new x;for(let C=0;C<e;C+=1){const R=l()*2-1,Re=l()*Math.PI*2,Ie=Math.sqrt(1-R*R),ie=t*(.98+l()*.07),I=C*3;v[I]=Ie*Math.cos(Re)*ie,v[I+1]=Ie*Math.sin(Re)*ie,v[I+2]=R*ie,c.copy(M).lerp(l()>.77?N:f,l()*.46),g[I]=c.r,g[I+1]=c.g,g[I+2]=c.b}const D=new K;D.setAttribute("position",new Z(v,3)),D.setAttribute("color",new Z(g,3));const S=new Ue({map:k,size:i,sizeAttenuation:!0,transparent:!0,opacity:.94,vertexColors:!0,depthWrite:!1,blending:J});return new Q(D,S)}function ne(t,e,n){const o=new Ve(new pt({map:G,color:t,opacity:n,transparent:!0,depthWrite:!1,blending:J}));return o.scale.set(e,e,1),o}function ye(t,e,n){const o=[];for(let i=0;i<=160;i+=1){const l=i/160*Math.PI*2;o.push(new F(Math.cos(l)*t,Math.sin(l)*t,0))}return new X(new K().setFromPoints(o),new _e({color:e,transparent:!0,opacity:n,depthWrite:!1}))}function Ke(t,e){return new F((t-(e-1)/2)*13.4,Math.sin(t*1.3)*2.2,Math.cos(t*1.18)*1.4)}function Je(t,e,n){const o=-Math.PI/2+e*(Math.PI*2/5),i=new U;i.position.set(Math.cos(o)*ce,Math.sin(o)*ce,Math.sin(o*2)*.42);const l=ne(n,2.45,.38);i.add(l);const v=new A(new Y(.43,32,24),he(n,.008,t*5+e+1));i.add(v),i.add(xe(.51,260,n,t*79+e*17+17,.055));const g=new A(new Y(.77,12,10),new He({colorWrite:!1,depthWrite:!1}));return g.userData={nodeIndex:t,stageIndex:e},i.add(g),O.push(g),{group:i,core:v,halo:l}}function Qe(t,e,n){const o=me[e%me.length],i=3.12,l=new U;l.position.copy(Ke(e,n));const v=ne(o,10.5,.25);v.position.z=-.18,l.add(v);const g=new x(o),M=new A(new Y(i,112,80),he(o,.055,t.index+1));l.add(M),l.add(new A(new Y(i*1.075,64,48),new Ge({vertexShader:Dt,fragmentShader:Lt,uniforms:{uColor:{value:g}},transparent:!0,depthWrite:!1,blending:J})));const N=xe(i*1.025,n>12?4200:7e3,o,t.index*101+913,.046);l.add(N);const f=new A(new Y(i*1.06,28,20),new He({colorWrite:!1,depthWrite:!1}));f.userData={nodeIndex:t.index},l.add(f),O.push(f);const c=new U;c.rotation.x=.34+e*.055,c.rotation.y=-.13-e%3*.07,c.add(ye(ce,o,.25)),c.add(ye(4.28,o,.08));const D=Xe.map((S,C)=>{const R=Je(t.index,C,S);return c.add(R.group),R});return l.add(c),{group:l,orbit:c,core:M,cloud:N,halo:v,stages:D}}function q(t){t.traverse(e=>{(e instanceof A||e instanceof Q||e instanceof X)&&e.geometry.dispose(),(e instanceof A||e instanceof Q||e instanceof X||e instanceof Ve)&&(Array.isArray(e.material)?e.material:[e.material]).forEach(o=>o.dispose())})}function Ze(){if(!d)return;w&&(d.remove(w),q(w)),w=new U;const t=ge(8271),e=Math.max(100,m.nodes.length*15+65),n=Math.min(7e3,Math.max(2200,m.nodes.length*460)),o=new Float32Array(n*3),i=new Float32Array(n*3),l=new x(u.text),v=new x(u.blue),g=new x(u.purple);for(let f=0;f<n;f+=1){const c=f*3;o[c]=(t()-.5)*e,o[c+1]=(t()-.5)*90,o[c+2]=-22-t()*55;const D=t();let S=l;D<.16?S=g:D<.5&&(S=v);const C=.36+t()*.64;i[c]=S.r*C,i[c+1]=S.g*C,i[c+2]=S.b*C}const M=new K;M.setAttribute("position",new Z(o,3)),M.setAttribute("color",new Z(i,3)),w.add(new Q(M,new Ue({map:k,size:.24,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.84,depthWrite:!1,blending:J})));const N=Math.max(6,Math.ceil(m.nodes.length*.85));for(let f=0;f<N;f+=1){const c=ne(f%3===0?u.purple:f%2?u.blue:u.cyan,28+t()*28,.085);c.position.set((t()-.5)*e,(t()-.5)*35,-22-t()*20),w.add(c)}d.add(w)}function oe(){for(const[t,e]of y){const n=t===m.selectedNodeIndex;e.halo.material.opacity=n?.39:.22,e.core.material.uniforms.uSelected.value=n?1:0,e.cloud.material.opacity=n?.68:.4,e.stages.forEach((o,i)=>{const l=n&&i===m.selectedStageIndex;o.group.scale.setScalar(l?1.3:1),o.halo.material.opacity=.22,o.core.material.uniforms.uSelected.value=0,n&&(o.halo.material.opacity=.38,o.core.material.uniforms.uSelected.value=.5),l&&(o.halo.material.opacity=.64,o.core.material.uniforms.uSelected.value=1)})}z()}function Pe(){if(!d)return;h&&(d.remove(h),q(h)),h=new U,y.clear(),O.length=0;const t=[];if(m.nodes.forEach((e,n)=>{const o=Qe(e,n,m.nodes.length);h==null||h.add(o.group),y.set(e.index,o),t.push(o.group.position.clone())}),t.length>1){const e=new dt(t),n=new X(new K().setFromPoints(e.getPoints((t.length-1)*32)),new _e({color:u.deepBlue,transparent:!0,opacity:.18,depthWrite:!1}));h.add(n)}d.add(h),Ze(),a&&(a.maxDistance=Math.max(120,m.nodes.length*18)),oe(),V(m.selectedNodeIndex)}function Me(t,e,n=!1){if(!s||!a)return;const o=t.clone().add(new F(0,0,e));if(n||E){p=null,s.position.copy(o),a.target.copy(t),a.update(),z();return}p={fromPosition:s.position.clone(),toPosition:o,fromTarget:a.target.clone(),toTarget:t.clone(),startedAt:performance.now(),duration:850},ae()}function V(t){var n;const e=(n=y.get(t))!=null?n:y.values().next().value;e&&Me(e.group.position,14)}function je(){if(!s||!a||y.size===0)return;const t=new ut;for(const i of y.values())t.expandByPoint(i.group.position);t.expandByScalar(5.85);const e=t.getSize(new F);t.getCenter(ve);const n=Oe.degToRad(s.fov),o=Math.max(e.y/(2*Math.tan(n/2)),e.x/(2*s.aspect*Math.tan(n/2)),17)*1.22;Me(ve,Math.min(o,a.maxDistance-1))}function Se(t){if(!s||!a)return;p=null,$.subVectors(s.position,a.target);const e=Oe.clamp($.length()*t,a.minDistance,a.maxDistance);$.setLength(e),s.position.copy(a.target).add($),a.update(),z()}function et(){Se(.74)}function tt(){Se(1.35)}$e({zoomIn:et,zoomOut:tt,fitAll:je,focusNode:V});function z(){!d||!s||!r||L.value||r.render(d,s)}function Ce(t){if(P=0,!d||!s||!r||!a||E||L.value)return;const e=Math.min((t-(te||t))/1e3,.05);if(te=t,p){const n=Math.min((t-p.startedAt)/p.duration,1),o=1-Fe(1-n,3);s.position.lerpVectors(p.fromPosition,p.toPosition,o),a.target.lerpVectors(p.fromTarget,p.toTarget,o),n>=1&&(p=null)}for(const n of y.values())n.core.rotation.y+=e*.085,n.cloud.rotation.y+=e*.12,n.cloud.rotation.z+=e*.025,n.orbit.rotation.z+=e*.025,n.stages.forEach(o=>{o.core.rotation.y+=e*.35});a.update(),r.render(d,s),P=requestAnimationFrame(Ce)}function ae(){!P&&!E&&r&&!L.value&&(te=0,P=requestAnimationFrame(Ce))}function be(){if(!_.value||!s||!r)return;const t=Math.max(1,_.value.clientWidth),e=Math.max(1,_.value.clientHeight);s.aspect=t/e,s.updateProjectionMatrix(),r.setSize(t,e,!1),z()}function Ee(t){var n;if(!s||!r)return null;const e=r.domElement.getBoundingClientRect();return!e.width||!e.height?null:(pe.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),fe.setFromCamera(pe,s),(n=fe.intersectObjects(O,!1)[0])==null?void 0:n.object.userData)}function De(t){if(!r||t.pointerType==="touch")return;const e=Ee(t);if(r.domElement.style.cursor=e?"pointer":"grab",!e){b.value=null;return}const n=m.nodes.find(l=>l.index===e.nodeIndex),o=e.stageIndex===void 0?(n==null?void 0:n.title)||`学习节点 ${e.nodeIndex+1}`:`${(n==null?void 0:n.title)||"学习节点"} · 第 ${e.stageIndex+1} 阶段`,i=r.domElement.getBoundingClientRect();b.value={label:o,x:Math.min(t.clientX-i.left+18,i.width-22),y:Math.max(18,t.clientY-i.top-36)}}function Le(t){W={x:t.clientX,y:t.clientY},b.value=null}function We(){W=null,b.value=null}function ze(){W=null}function Ae(){p=null}function ke(t){if(!W)return;const e=Math.hypot(t.clientX-W.x,t.clientY-W.y);if(W=null,e>8)return;const n=Ee(t);n&&(n.nodeIndex!==m.selectedNodeIndex&&ue("select-node",n.nodeIndex),n.stageIndex===void 0||ue("select-stage",n.stageIndex),V(n.nodeIndex))}function Be(t){E=t.matches,a&&(a.enableDamping=!E),E?(cancelAnimationFrame(P),P=0,p=null,z()):ae()}function Ne(t){t.preventDefault(),L.value=!0,cancelAnimationFrame(P),P=0}return wt(()=>{const t=_.value;if(t)try{B=window.matchMedia("(prefers-reduced-motion: reduce)"),E=B.matches,B.addEventListener("change",Be),k=we(!1),G=we(!0),d=new nt,d.background=new x("#180f09"),d.add(new ot("#e7c7ad",.72));const e=new at(u.text,45,120);e.position.set(-8,12,18),d.add(e);const n=new it(u.orange,1.8);n.position.set(8,-3,10),d.add(n),s=new rt(48,1,.1,1e3),s.position.set(0,0,55),r=new lt({antialias:!0,alpha:!1,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),r.outputColorSpace=st,r.domElement.className="knowledge-universe-canvas",r.domElement.setAttribute("aria-hidden","true"),r.domElement.addEventListener("pointermove",De),r.domElement.addEventListener("pointerdown",Le),r.domElement.addEventListener("pointerup",ke),r.domElement.addEventListener("pointerleave",We),r.domElement.addEventListener("pointercancel",ze),r.domElement.addEventListener("webglcontextlost",Ne),t.append(r.domElement),a=new vt(s,r.domElement),a.enableDamping=!E,a.dampingFactor=.08,a.minDistance=7.2,a.maxDistance=140,a.enablePan=!0,a.screenSpacePanning=!0,a.mouseButtons={LEFT:re.ROTATE,MIDDLE:re.DOLLY,RIGHT:re.PAN},a.touches={ONE:Te.ROTATE,TWO:Te.DOLLY_PAN},a.addEventListener("start",Ae),a.addEventListener("change",z),H=new ResizeObserver(be),H.observe(t),be(),Pe(),ae()}catch(e){L.value=!0}}),se(()=>m.nodes,()=>Pe(),{deep:!0}),se(()=>m.selectedNodeIndex,t=>{oe(),V(t)}),se(()=>m.selectedStageIndex,oe),xt(()=>{cancelAnimationFrame(P),H==null||H.disconnect(),B==null||B.removeEventListener("change",Be),a==null||a.removeEventListener("start",Ae),a==null||a.removeEventListener("change",z),a==null||a.dispose(),r&&(r.domElement.removeEventListener("pointermove",De),r.domElement.removeEventListener("pointerdown",Le),r.domElement.removeEventListener("pointerup",ke),r.domElement.removeEventListener("pointerleave",We),r.domElement.removeEventListener("pointercancel",ze),r.domElement.removeEventListener("webglcontextlost",Ne),r.domElement.remove(),r.dispose(),r.forceContextLoss()),h&&q(h),w&&q(w),k==null||k.dispose(),G==null||G.dispose(),y.clear(),O.length=0,h=null,w=null,d=null,s=null,r=null,a=null}),(t,e)=>(ee(),j("div",{ref_key:"containerRef",ref:_,class:"knowledge-universe-scene","aria-hidden":"true"},[e[2]||(e[2]=T("div",{class:"scene-vignette"},null,-1)),L.value?(ee(),j("div",St,[...e[0]||(e[0]=[T("span",{class:"fallback-orbit","aria-hidden":"true"},"✦",-1),T("strong",null,"知识宇宙暂时无法显示",-1),T("span",null,"可通过左侧节点与阶段列表继续探索学习路线。",-1)])])):de.nodes.length===0?(ee(),j("div",Ct,[...e[1]||(e[1]=[T("span",{class:"fallback-orbit","aria-hidden":"true"},"✦",-1),T("strong",null,"正在等待学习路线",-1)])])):Ye("",!0),b.value&&!L.value?(ee(),j("div",{key:2,class:"scene-tooltip",style:yt({left:`${b.value.x}px`,top:`${b.value.y}px`})},Pt(b.value.label),5)):Ye("",!0)],512))}}),Tt=Mt(Wt,[["__scopeId","data-v-6f511d88"]]);export{Tt as default};
