var Qe=(B,e,a)=>new Promise((o,n)=>{var s=c=>{try{v(a.next(c))}catch(u){n(u)}},f=c=>{try{v(a.throw(c))}catch(u){n(u)}},v=c=>c.done?o(c.value):Promise.resolve(c.value).then(s,f);v((a=a.apply(B,e)).next())});import{a3 as St}from"./vendor-shared-XbCbQuHZ.js";import{I as ae,_ as wt}from"./bootstrap-CBSC6qi5.js";import{E as yt,V as F,l as Ee,O as Pt,B as Rt,aW as $e,n as q,aJ as xe,a as G,aX as ge,aY as ve,aZ as Et,a_ as it,a$ as At,aB as Dt,b0 as Bt,b1 as zt,b2 as Ft,b3 as Nt,x as at,b4 as Ut,b5 as It,b6 as Lt,d as Q,o as kt,p as rt,c as Ot,f as Vt,W as Gt,g as Ht,H as Qt,D as $t,e as je,G as We,aV as jt,b7 as Ke,F as Wt,K as Kt}from"./three.module-C3hd88bs.js";import{O as Xt}from"./OrbitControls-DYr6Mc40.js";import{n as Xe,c as re,b as Yt}from"./SmartQa-BmVAuaA4.js";import{C as qt,r as W,w as Ye,c as V,p as Jt,d as Zt,V as es,P as oe,Q as m,U as ne,Z as U,u as le,_ as I,O as pe,W as ts,F as qe,ar as ss,a4 as is,$ as as,bo as rs,n as os}from"./vendor-element-plus-Cb8mRXYr.js";import"../jse/index-index-aPaky9zv.js";import"./AssistantProcessTimeline-BeO04IDI.js";import"./agent-memory-BaLXyTbT.js";import"./useIncrementalText-CVwpVADZ.js";import"./learning-progress-8Z8J1dSK.js";import"./use-learning-progress-BUz0yvVx.js";import"./marked.esm-CO_Vmz4B.js";import"./lazy-component-BmuGdZ_u.js";import"./course-document-markdown-DhvYH2Ui.js";const ue=new F;function k(B,e,a,o,n,s){const f=2*Math.PI*n/4,v=Math.max(s-2*n,0),c=Math.PI/4;ue.copy(e),ue[o]=0,ue.normalize();const u=.5*f/(f+v),M=1-ue.angleTo(B)/c;return Math.sign(ue[a])===1?M*u:v/(f+v)+u+u*(1-M)}class Ae extends yt{constructor(e=1,a=1,o=1,n=2,s=.1){const f=n*2+1;if(s=Math.min(e/2,a/2,o/2,s),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:a,depth:o,segments:n,radius:s},f===1)return;const v=this.toNonIndexed();this.index=null,this.attributes.position=v.attributes.position,this.attributes.normal=v.attributes.normal,this.attributes.uv=v.attributes.uv;const c=new F,u=new F,M=new F(e,a,o).divideScalar(2).subScalar(s),g=this.attributes.position.array,R=this.attributes.normal.array,z=this.attributes.uv.array,H=g.length/6,x=new F,ee=.5/f;for(let L=0,E=0;L<g.length;L+=3,E+=2)switch(c.fromArray(g,L),u.copy(c),u.x-=Math.sign(u.x)*ee,u.y-=Math.sign(u.y)*ee,u.z-=Math.sign(u.z)*ee,u.normalize(),g[L+0]=M.x*Math.sign(c.x)+u.x*s,g[L+1]=M.y*Math.sign(c.y)+u.y*s,g[L+2]=M.z*Math.sign(c.z)+u.z*s,R[L+0]=u.x,R[L+1]=u.y,R[L+2]=u.z,Math.floor(L/H)){case 0:x.set(1,0,0),z[E+0]=k(x,u,"z","y",s,o),z[E+1]=1-k(x,u,"y","z",s,a);break;case 1:x.set(-1,0,0),z[E+0]=1-k(x,u,"z","y",s,o),z[E+1]=1-k(x,u,"y","z",s,a);break;case 2:x.set(0,1,0),z[E+0]=1-k(x,u,"x","z",s,e),z[E+1]=k(x,u,"z","x",s,o);break;case 3:x.set(0,-1,0),z[E+0]=1-k(x,u,"x","z",s,e),z[E+1]=1-k(x,u,"z","x",s,o);break;case 4:x.set(0,0,1),z[E+0]=1-k(x,u,"x","y",s,e),z[E+1]=1-k(x,u,"y","x",s,a);break;case 5:x.set(0,0,-1),z[E+0]=k(x,u,"x","y",s,e),z[E+1]=1-k(x,u,"y","x",s,a);break}}static fromJSON(e){return new Ae(e.width,e.height,e.depth,e.segments,e.radius)}}const be={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ns=new Pt(-1,1,1,-1,0,1);class ls extends Rt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const us=new ls;class De{constructor(e){this._mesh=new Ee(us,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ns)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cs extends Z{constructor(e,a="tDiffuse"){super(),this.textureID=a,this.uniforms=null,this.material=null,e instanceof q?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xe.clone(e.uniforms),this.material=new q({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new De(this.material)}render(e,a,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Je extends Z{constructor(e,a){super(),this.scene=e,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,a,o){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let f,v;this.inverse?(f=0,v=1):(f=1,v=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,f,4294967295),s.buffers.stencil.setClear(v),s.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class hs extends Z{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fs{constructor(e,a){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),a===void 0){const o=e.getSize(new G);this._width=o.width,this._height=o.height,a=new ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ve}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cs(be),this.copyPass.material.blending=Et,this.timer=new it}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,a){this.passes.splice(a,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const a=this.passes.indexOf(e);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(e){for(let a=e+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const a=this.renderer.getRenderTarget();let o=!1;for(let n=0,s=this.passes.length;n<s;n++){const f=this.passes[n];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),f.needsSwap){if(o){const v=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(v.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(v.EQUAL,1,4294967295)}this.swapBuffers()}Je!==void 0&&(f instanceof Je?o=!0:f instanceof hs&&(o=!1))}}this.renderer.setRenderTarget(a)}reset(e){if(e===void 0){const a=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,a){this._width=e,this._height=a;const o=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(o,n),this.renderTarget2.setSize(o,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(o,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const me={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ds extends Z{constructor(){super(),this.isOutputPass=!0,this.uniforms=xe.clone(me.uniforms),this.material=new At({name:me.name,uniforms:this.uniforms,vertexShader:me.vertexShader,fragmentShader:me.fragmentShader}),this._fsQuad=new De(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,a,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Dt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ft?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===at?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ut?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===It?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lt&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ps extends Z{constructor(e,a,o=null,n=null,s=null){super(),this.scene=e,this.camera=a,this.overrideMaterial=o,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Q}render(e,a,o){const n=e.autoClear;e.autoClear=!1;let s,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=n}}const ms={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class J extends Z{constructor(e,a=1,o,n){super(),this.strength=a,this.radius=o,this.threshold=n,this.resolution=e!==void 0?new G(e.x,e.y):new G(256,256),this.clearColor=new Q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new ge(s,f,{type:ve}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let M=0;M<this.nMips;M++){const g=new ge(s,f,{type:ve});g.texture.name="UnrealBloomPass.h"+M,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const R=new ge(s,f,{type:ve});R.texture.name="UnrealBloomPass.v"+M,R.texture.generateMipmaps=!1,this.renderTargetsVertical.push(R),s=Math.round(s/2),f=Math.round(f/2)}const v=ms;this.highPassUniforms=xe.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new q({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let M=0;M<this.nMips;M++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[M])),this.separableBlurMaterials[M].uniforms.invSize.value=new G(1/s,1/f),s=Math.round(s/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xe.clone(be.uniforms),this.blendMaterial=new q({uniforms:this.copyUniforms,vertexShader:be.vertexShader,fragmentShader:be.fragmentShader,premultipliedAlpha:!0,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Q,this._oldClearAlpha=1,this._basic=new rt,this._fsQuad=new De(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,a){let o=Math.round(e/2),n=Math.round(a/2);this.renderTargetBright.setSize(o,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(o,n),this.renderTargetsVertical[s].setSize(o,n),this.separableBlurMaterials[s].uniforms.invSize.value=new G(1/o,1/n),o=Math.round(o/2),n=Math.round(n/2)}render(e,a,o,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=o.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=o.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let v=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=v.texture,this.separableBlurMaterials[c].uniforms.direction.value=J.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=J.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),v=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=f}_getSeparableBlurMaterial(e){const a=[],o=e/3;for(let n=0;n<e;n++)a.push(.39894*Math.exp(-.5*n*n/(o*o))/o);return new q({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},gaussianCoefficients:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new q({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}J.BlurDirectionX=new G(1,0);J.BlurDirectionY=new G(0,1);const gs=["role","aria-modal"],vs={class:"algorithm-3d-header"},bs={class:"algorithm-3d-heading"},xs={class:"algorithm-3d-badge"},Ms={class:"algorithm-3d-meta"},_s={class:"algorithm-3d-explanation"},Ts={class:"algorithm-3d-message"},Cs={class:"algorithm-3d-queue"},Ss={key:0,class:"algorithm-3d-loading",role:"status"},ws={class:"algorithm-3d-legend","aria-label":"颜色图例"},ys={class:"algorithm-3d-controls"},Ps=["disabled"],Rs=["title","aria-expanded"],Re=5324850,Es=2168335,Ze=15114589,et=16751164,tt=16774234,As=16735548,Ds=3397247,Bs=12089680,st=1314057,zs=qt({__name:"Algorithm3DVisualizer",props:{config:{}},setup(B){const e=B,a=W(null),o=W(!1),n=W(!1),s=W(!1),f=St(document.body),v=W(null);Ye(s,t=>Qe(null,null,function*(){var i;f.value=t,yield os(),we(),(i=v.value)==null||i.focus({preventScroll:!0})}));const c=W(0),u=W([]),M=W(0),g=W(Xe(e.config)),R=V(()=>u.value[c.value]||null),z=V(()=>`${Math.min(c.value+1,u.value.length)}/${u.value.length||1}`),H=V(()=>g.value.algorithm==="insertion-sort"),x=V(()=>g.value.algorithm==="dfs"),ee=V(()=>H.value?"当前数组":x.value?"当前栈":"当前 BFS 队列"),L=V(()=>{var t,i,r;if(H.value){const l=(((t=R.value)==null?void 0:t.arrayValues)||[]).join("  "),h=(i=R.value)==null?void 0:i.keyValue;return h==null?l:`key=${h}  [${l}]`}return(((r=R.value)==null?void 0:r.queue)||[]).slice(0,8).map(l=>`(${l})`).join("，")}),E=V(()=>g.value.algorithm.toUpperCase()),Be=V(()=>H.value?`${g.value.values.length} 个元素`:`${g.value.gridSize.join(" × ")} 网格`),ot=V(()=>H.value?"每次取出关键字，向左比较并把更大的元素右移，已排序前缀逐步增长；原地、稳定。":x.value?"沿一条分支一路深入，撞墙就回溯到最近的分岔点（后进先出的栈），用于连通性与拓扑排序。":"从起点出发，逐层向外扩展（按距离分层），先进先出（队列），保证首次到达即最短路径（无权图）。"),nt=V(()=>{if(H.value)return`${g.value.values.length} 个元素，柱高代表数值，颜色代表状态。`;const[t,i,r]=g.value.gridSize,l=g.value.start.join(", "),h=g.value.end.join(", "),_=x.value?"颜色代表递归深度。":"颜色代表探索层级（距离）。";return`${t}×${i}×${r} 网格空间（${t*i*r} 节点），起点 (${l})，终点 (${h})。${_}`}),lt=V(()=>{const t=Math.max(M.value,1),i=j.length;return Array.from({length:i},(r,l)=>{const h=Math.round(l/(i-1)*t);return{color:`#${Ue(l/(i-1)).toString(16).padStart(6,"0")}`,label:l===0?"第0层 (起点)":l===i-1?`第${h}层 / 终点`:`第${h}层`}})});let T=null,w=null,C=null,y=null,P=null,$=null,te=null,ze=0,ce=null,O=null,N=null,he=null,se=0,Fe=6,Me=0,_e=!0,Ne="";const Te=new it,K=new Map,Ce=new Set,ut=new Q,ct=new Q,ht=new Q,ft=new Q,j=[13138256,14129249,12152668,14724718,16747051];function Ue(t){var d,p;const i=Math.min(Math.max(t,0),1)*(j.length-1),r=Math.floor(i),l=Math.min(r+1,j.length-1),h=(d=j[r])!=null?d:j[0],_=(p=j[l])!=null?p:j[j.length-1];return ht.setHex(h).lerp(ft.setHex(_),i-r).getHex()}function Se(){ce!==null&&(window.clearInterval(ce),ce=null)}function fe(t){n.value=t,Se(),t&&(ce=window.setInterval(()=>{if(c.value>=u.value.length-1){fe(!1);return}c.value+=1,Y()},g.value.speed))}function dt(){fe(!1),c.value=0,Y()}function pt(){c.value>=u.value.length-1&&(c.value=0,Y()),fe(!n.value)}function mt(){fe(!1),c.value<u.value.length-1&&(c.value+=1,Y())}function X(t,i,r,l,h,_){const d=t.userData.target;if(d){d.color=i,d.emissive=i,d.emissiveIntensity=r,d.opacity=l,d.scale.setScalar(h);return}t.userData.target={color:i,emissive:i,emissiveIntensity:r,opacity:l,scale:new F(h,h,h),y:_}}function ie(t,i,r,l,h,_,d){const p=t.userData.target;if(p){p.color=i,p.emissive=i,p.emissiveIntensity=r,p.opacity=l,p.scale.set(h,_/.82,h),p.y=d;return}t.userData.target={color:i,emissive:i,emissiveIntensity:r,opacity:l,scale:new F(h,_/.82,h),y:d}}function gt(t){const i=new Set(t.activeIndices),r=new Set(t.compareIndices),l=new Set(t.sortedIndices);K.forEach((h,_)=>{var A,D,ye;const d=Number((A=_.split(",")[0])!=null?A:0),p=t.keyIndex===d&&t.keyValue!==null?t.keyValue:(ye=(D=t.arrayValues[d])!=null?D:g.value.values[d])!=null?ye:1,b=Math.max(.4,p*.42),S=se+b/2;if(t.keyIndex===d){ie(h,tt,.75,1,1.02,b*1.06,S);return}if(r.has(d)){ie(h,et,.6,1,.98,b,S);return}if(i.has(d)){ie(h,Ze,.5,1,.96,b,S);return}if(l.has(d)){ie(h,Ds,.34,1,.94,b,S);return}ie(h,Bs,.14,.96,.92,b,S)})}function Y(){const t=R.value;if(!t)return;if(H.value){gt(t);return}const i=new Set(t.visited),r=new Set(t.frontier),l=new Set(t.path),h=t.current,_=re(g.value.start),d=re(g.value.end);K.forEach((p,b)=>{if(Ce.has(b)){X(p,Es,0,.2,.58);return}if(i.has(b)){const S=t.levels[b]||0,A=M.value>0?Math.min(S/M.value,1):0;X(p,Ue(A),.22+(1-A)*.18,1,.9)}else X(p,Re,.05,.4,.72);r.has(b)&&X(p,Ze,.5,1,1),l.has(b)&&X(p,et,.55,1,1.04),b===_&&X(p,j[0],.5,1,1.1),b===d&&X(p,As,.62,1,1.08),b===h&&X(p,tt,.72,1,1.26)})}function vt(t,i){var l;const r=(l=R.value)==null?void 0:l.current;K.forEach((h,_)=>{const d=h.userData.target;if(!d)return;const p=h.material;p.color.lerp(ut.setHex(d.color),t),p.emissive.lerp(ct.setHex(d.emissive),t);const b=_===r?1+Math.sin(i*5)*.16:1;p.emissiveIntensity+=(d.emissiveIntensity*b-p.emissiveIntensity)*t,p.opacity+=(d.opacity-p.opacity)*t,h.scale.lerp(d.scale,t),d.y!==void 0&&(h.position.y+=(d.y-h.position.y)*t)})}function de(t){t.traverse(i=>{const r=i;r.geometry&&r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(l=>l.dispose()):r.material&&r.material.dispose()})}function bt(){O&&T&&(T.remove(O),de(O)),N&&T&&(T.remove(N),de(N)),K.clear(),O=new We,N=new We,he=new Ae(.82,.82,.82,3,.11),Ce.clear()}function Ie(){const t=new Wt({color:Re,roughness:.38,metalness:.12,transparent:!0,opacity:.4});return t.emissive=new Q(Re),t.emissiveIntensity=.05,new Ee(he,t)}function Le(t,i){if(!N)return;const r=new Ee(new Kt(t,96),new rt({color:2430991,transparent:!0,opacity:.52}));r.rotation.x=-Math.PI/2,r.position.y=i,N.add(r)}function xt(t){if(!w)return t*3;const i=w.fov*Math.PI/180,r=2*Math.atan(Math.tan(i/2)*Math.max(w.aspect,.1)),l=w.aspect<1?1.3:1.06;return t/Math.sin(Math.min(i,r)/2)*l}function ke(){if(!w||!y)return;const t=xt(Fe);_e&&(w.position.copy(new F(.6,.44,.7).normalize()).multiplyScalar(t).add(new F(0,Me,0)),y.target.set(0,Me,0),y.minDistance=t*.42,y.maxDistance=t*2.4,y.update()),w.near=Math.max(.1,t/100),w.far=t*8,T&&(T.fog=new jt(st,t*1.35,t*2.5))}function Oe(t,i=0){Fe=Math.max(t,2.6),Me=i,_e=!0,ke()}function Mt(){if(!T||!O||!N||!he)return;const t=O,i=N,r=g.value.values,l=1.16,h=(r.length-1)/2,d=Math.max(...r,1)*.42;se=-d/2-.4,r.forEach((S,A)=>{const D=Ie();D.position.x=(A-h)*l,D.position.z=0,t.add(D),K.set(re([A,0,0]),D)});const p=new Ke(r.length*l*1.2,r.length*2,7886140,3876892);p.position.y=se-.1,i.add(p);const b=Math.max(r.length*l,d*2.2);Le(b*.58,se-.12),T.add(t,i),Oe(b*.46,se+d*.34),Y()}function Ve(){Ne=JSON.stringify(e.config),g.value=Xe(e.config);const t=Yt(g.value);if(u.value=t.steps,M.value=t.steps.reduce((S,A)=>{const D=Object.values(A.levels||{});return D.length?Math.max(S,...D):S},0),c.value=0,g.value=t.config,Se(),n.value=!1,bt(),!T||!O||!N||!he)return;if(H.value){Mt();return}const[i,r,l]=g.value.gridSize,h=[(i-1)/2,(r-1)/2,(l-1)/2],_=1.12;g.value.obstacles.map(re).forEach(S=>Ce.add(S));for(let S=0;S<l;S+=1)for(let A=0;A<r;A+=1)for(let D=0;D<i;D+=1){const Ct=re([D,A,S]),Pe=Ie();Pe.position.set((D-h[0])*_,(A-h[1])*_,(S-h[2])*_),O.add(Pe),K.set(Ct,Pe)}const p=Math.max(i,r,l)*_,b=new Ke(p*1.25,Math.max(i,l)*2,7886140,3876892);b.position.y=-(r/2)*_-.72,N.add(b),Le(p*.62,b.position.y-.03),T.add(O,N),Oe(p*.55),Y()}function we(){if(!a.value||!C||!w)return;const t=Math.max(1,a.value.clientWidth),i=Math.max(1,a.value.clientHeight),r=Math.min(window.devicePixelRatio||1,2);w.aspect=t/i,w.updateProjectionMatrix(),ke(),C.setPixelRatio(r),C.setSize(t,i),P==null||P.setPixelRatio(r),P==null||P.setSize(t,i),$==null||$.setSize(t,i)}function Ge(){var l;if(!C||!T||!w)return;ze=window.requestAnimationFrame(Ge),Te.update();const t=Te.getDelta(),i=Te.getElapsed();vt(1-Math.exp(-t*9),i);const r=(l=R.value)==null?void 0:l.current;if(r){const h=K.get(r);h&&(h.rotation.y+=t*.7,h.rotation.x+=t*.24)}y==null||y.update(),P?P.render():C.render(T,w)}function _t(){if(!a.value)return;T=new Ot,T.background=new Q(st),w=new Vt(38,1,.1,200),C=new Gt({antialias:!0,alpha:!1,powerPreference:"high-performance"}),C.outputColorSpace=Ht,C.toneMapping=at,C.toneMappingExposure=1,a.value.appendChild(C.domElement),y=new Xt(w,C.domElement),y.enableDamping=!0,y.dampingFactor=.08,y.enablePan=!1,y.addEventListener("start",()=>{_e=!1}),P=new fs(C),P.addPass(new ps(T,w)),$=new J(new G(1,1),.42,.5,.86),P.addPass($),P.addPass(new ds),T.add(new Qt(16177073,1314057,.85));const t=new $t(16777215,1.7);t.position.set(6,10,7),T.add(t);const i=new je(14125394,90,60,2);i.position.set(-8,5,-9),T.add(i);const r=new je(16747068,55,50,2);r.position.set(9,-4,6),T.add(r),te=new ResizeObserver(we),te.observe(a.value),Ve(),we(),o.value=!0,Ge()}function Tt(){Se(),window.cancelAnimationFrame(ze),te==null||te.disconnect(),y==null||y.dispose(),O&&de(O),N&&de(N),$==null||$.dispose(),P==null||P.dispose(),C==null||C.dispose(),C==null||C.domElement.remove(),K.clear(),T=null,w=null,C=null,y=null,P=null,$=null}Ye(()=>e.config,()=>{JSON.stringify(e.config)!==Ne&&Ve()},{deep:!0});function He(t){t.key==="Escape"&&s.value&&(s.value=!1)}return Jt(()=>{_t(),window.addEventListener("keydown",He)}),Zt(()=>{window.removeEventListener("keydown",He),Tt()}),(t,i)=>{var r;return oe(),es(rs,{to:"body",disabled:!s.value},[m("section",{class:as(["algorithm-3d-card",{"is-fullscreen":s.value}]),role:s.value?"dialog":void 0,"aria-modal":s.value?!0:void 0,"aria-label":"3D 算法教学可视化"},[m("header",vs,[m("div",bs,[m("span",xs,[ne(le(ae),{icon:"lucide:box"}),i[1]||(i[1]=U("3D 交互场景",-1))]),m("strong",null,I(g.value.title),1)]),m("span",Ms,I(E.value)+" · "+I(Be.value),1)]),m("div",{ref_key:"stageRef",ref:a,class:"algorithm-3d-stage"},[m("div",_s,[m("strong",null,I(g.value.title),1),m("p",null,[i[2]||(i[2]=m("b",null,"核心思想：",-1)),U(I(ot.value),1)]),m("p",null,[i[3]||(i[3]=m("b",null,"本场景：",-1)),U(I(nt.value),1)]),m("small",null,"拖动旋转视角 · 滚轮缩放 · 当前步骤 "+I(z.value),1),m("small",Ts,I(((r=R.value)==null?void 0:r.message)||"准备开始"),1)]),m("div",Cs,[m("span",null,I(ee.value),1),m("code",null,I(L.value||"空"),1)]),o.value?ts("",!0):(oe(),pe("div",Ss,[...i[4]||(i[4]=[m("span",null,null,-1),U("正在建立 3D 教学场景… ",-1)])])),m("div",ws,[H.value?(oe(),pe(qe,{key:0},[i[5]||(i[5]=m("span",null,[m("i",{class:"legend-dot sorted"}),U("已排序前缀")],-1)),i[6]||(i[6]=m("span",null,[m("i",{class:"legend-dot frontier"}),U("关键字")],-1)),i[7]||(i[7]=m("span",null,[m("i",{class:"legend-dot path"}),U("比较/移动")],-1)),i[8]||(i[8]=m("span",null,[m("i",{class:"legend-dot current"}),U("当前元素")],-1))],64)):(oe(!0),pe(qe,{key:1},ss(lt.value,l=>(oe(),pe("span",{key:l.label},[m("i",{class:"legend-dot",style:is({background:l.color,color:l.color})},null,4),U(I(l.label),1)]))),128))]),m("div",ys,[m("button",{type:"button",title:"播放或暂停",onClick:pt},[ne(le(ae),{icon:n.value?"lucide:pause":"lucide:play"},null,8,["icon"]),U(" "+I(n.value?"暂停":"播放"),1)]),m("button",{type:"button",title:"执行下一步",disabled:c.value>=u.value.length-1,onClick:mt},[ne(le(ae),{icon:"lucide:step-forward"}),i[9]||(i[9]=U("下一步 ",-1))],8,Ps),m("button",{type:"button",title:"重置场景",onClick:dt},[ne(le(ae),{icon:"lucide:rotate-ccw"}),i[10]||(i[10]=U("重置 ",-1))]),m("button",{ref_key:"fullscreenButtonRef",ref:v,type:"button",title:s.value?"退出全屏":"全屏查看","aria-expanded":s.value,onClick:i[0]||(i[0]=l=>s.value=!s.value)},[ne(le(ae),{icon:s.value?"lucide:minimize-2":"lucide:maximize-2"},null,8,["icon"]),U(" "+I(s.value?"退出全屏":"全屏"),1)],8,Rs)])],512)],10,gs)],8,["disabled"])}}}),Ys=wt(zs,[["__scopeId","data-v-239676e9"]]);export{Ys as default};
