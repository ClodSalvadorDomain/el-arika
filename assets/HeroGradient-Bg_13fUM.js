import{M as e}from"./app-BI8_0-gV.js";import{t}from"./react-Da9hWGlf.js";import{B as n,C as r,D as i,G as a,M as o,N as s,O as c,Q as l,T as u,U as d,W as f,X as p,Y as m,_ as h,a as g,at as _,b as v,c as y,d as ee,f as b,g as te,gt as x,ht as S,i as ne,k as C,lt as re,m as ie,mt as w,n as ae,nt as oe,o as se,pt as ce,r as le,s as T,t as ue,tt as de,ut as fe,w as pe,y as me,z as he}from"./react-three-fiber.esm-CvNs5YYQ.js";import{t as ge}from"./jsx-runtime-CxquSuoD.js";var E=ge(),_e=192;function ve({type:e}){return(0,E.jsxs)(E.Fragment,{children:[e===`plane`&&(0,E.jsx)(`planeGeometry`,{args:[10,10,1,_e]}),e===`sphere`&&(0,E.jsx)(`icosahedronGeometry`,{args:[1,_e/3]}),e===`waterPlane`&&(0,E.jsx)(`planeGeometry`,{args:[10,10,_e,_e]})]})}function ye(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function be(e){let t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t?{r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3])}:null}function xe(e){if(e.startsWith(`#`))return ye(e);if(e.startsWith(`rgb`))return be(e);throw Error(`Invalid color format`)}function D(e=0){return e/255}var Se=Object.create,Ce=Object.defineProperty,we=Object.defineProperties,Te=Object.getOwnPropertyDescriptor,Ee=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,Oe=Object.getOwnPropertySymbols,ke=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||={})Ae.call(t,n)&&Me(e,n,t[n]);if(Oe)for(var n of Oe(t))je.call(t,n)&&Me(e,n,t[n]);return e},Ne=(e,t)=>we(e,Ee(t)),k=(e,t)=>{var n={};for(var r in e)Ae.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Oe)for(var r of Oe(e))t.indexOf(r)<0&&je.call(e,r)&&(n[r]=e[r]);return n},Pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),A=(e,t)=>{for(var n in t)Ce(e,n,{get:t[n],enumerable:!0})},Fe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of De(t))!Ae.call(e,i)&&i!==n&&Ce(e,i,{get:()=>t[i],enumerable:!(r=Te(t,i))||r.enumerable});return e},Ie=(e,t,n)=>(n=e==null?{}:Se(ke(e)),Fe(t||!e||!e.__esModule?Ce(n,`default`,{value:e,enumerable:!0}):n,e)),j=e(t(),1),Le=({animate:e,range:t,rangeStart:n,rangeEnd:r,loop:i,loopDuration:a,reflection:o,uniforms:s,vertexShader:c,fragmentShader:l,onInit:u,shader:f})=>{let p=(0,j.useRef)(new me),m=(0,j.useMemo)(()=>{let e=Object.entries(s),t=s.colors,n=xe(t[0]),r=xe(t[1]),i=xe(t[2]),a={uC1r:{value:D(n?.r)},uC1g:{value:D(n?.g)},uC1b:{value:D(n?.b)},uC2r:{value:D(r?.r)},uC2g:{value:D(r?.g)},uC2b:{value:D(r?.b)},uC3r:{value:D(i?.r)},uC3g:{value:D(i?.g)},uC3b:{value:D(i?.b)}},p=e.reduce((e,[t,n])=>{let r=fe.clone({[t]:{value:n}});return O(O({},e),r)},{}),m={userData:p,metalness:f===`glass`?0:.2,roughness:f===`glass`?.1:1-(typeof o==`number`?o:.1),side:2,onBeforeCompile:e=>{e.uniforms=O(O(O({},e.uniforms),p),a),e.vertexShader=c,e.fragmentShader=l}};f===`glass`&&(m.transparent=!0,m.opacity=.3,m.transmission=.9,m.thickness=.5,m.clearcoat=1,m.clearcoatRoughness=0,m.ior=1.5,m.envMapIntensity=1);let h=new d(m);return e.forEach(([e])=>Object.defineProperty(h,e,{get:()=>h.uniforms[e].value,set:t=>h.uniforms[e].value=t})),u&&u(h),h},[s,c,l,u,o,f]);return(0,j.useEffect)(()=>()=>{m.dispose()},[m]),(0,j.useEffect)(()=>{e===`on`?p.current.start():p.current.stop()},[e]),g(()=>{if(e===`on`&&m.userData.uTime){let e=p.current.getElapsedTime();i===`on`&&Number.isFinite(a)&&a>0?(e%=a,m.userData.uLoop&&(m.userData.uLoop.value=1),m.userData.uLoopDuration&&(m.userData.uLoopDuration.value=a)):(m.userData.uLoop&&(m.userData.uLoop.value=0),t===`enabled`&&Number.isFinite(n)&&Number.isFinite(r)&&r>n&&(e=n+e,e>=r&&(e=n,p.current.start()))),m.userData.uTime.value=e}}),(0,E.jsx)(`primitive`,{attach:`material`,object:m})},Re={};A(Re,{fragment:()=>ze,vertex:()=>Be});var ze=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,Be=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    // Loop progress only depends on time and duration, not speed
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    // Larger radius = more distance traveled = faster perceived motion
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points around the circle
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights using cosine
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    // Normalize weights
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend all samples with amplitude boost to match single-sample strength
    // Blending reduces amplitude by ~30%, so we compensate
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Ve={};A(Ve,{fragment:()=>He,vertex:()=>Ue});var He=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,Ue=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  float distortion;
  float angle;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float loopAngle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(loopAngle) * radius, sin(loopAngle) * radius, 0.0);
    vec3 offset1 = vec3(cos(loopAngle + 1.57079632679) * radius, sin(loopAngle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(loopAngle + 3.14159265359) * radius, sin(loopAngle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(loopAngle + 4.71238898038) * radius, sin(loopAngle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = pnoise((normal + offset0) * uNoiseDensity, vec3(10.0));
    float n1 = pnoise((normal + offset1) * uNoiseDensity, vec3(10.0));
    float n2 = pnoise((normal + offset2) * uNoiseDensity, vec3(10.0));
    float n3 = pnoise((normal + offset3) * uNoiseDensity, vec3(10.0));
    
    // Smooth interpolation weights
    float w0 = (cos(loopAngle) + 1.0) * 0.5;
    float w1 = (cos(loopAngle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(loopAngle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(loopAngle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = blendedNoise * 1.5 * uNoiseStrength;
    
    // Apply loop to spiral effect with blended offset
    float angleOffset = offset0.x * w0 + offset1.x * w1 + offset2.x * w2 + offset3.x * w3;
    angle = sin(uv.y * uFrequency + angleOffset) * uAmplitude;
  } else {
    // Normal linear time progression
    distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
    angle = sin(uv.y * uFrequency + t) * uAmplitude;
  }
  
  vec3 pos = position + (normal * distortion);
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,We={};A(We,{fragment:()=>Ge,vertex:()=>Ke});var Ge=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,Ke=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,qe={};A(qe,{plane:()=>Re,sphere:()=>Ve,waterPlane:()=>We});var Je={};A(Je,{fragment:()=>Ye,vertex:()=>Xe});var Ye=`// Glass Plane Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - dot(viewDirection, normal), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Base glass color gradient
  vec3 gradientColor = mix(uColor1, uColor2, vUv.y);
  gradientColor = mix(gradientColor, uColor3, fresnelFactor);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, uChromaticAberration);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Combine with gradient color
  vec3 finalColor = mix(gradientColor, envColor, 0.7);
  
  // Apply transparency
  float finalAlpha = mix(uTransparency, 1.0, fresnelFactor * 0.5);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.8;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,Xe=`// Glass Plane Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Create subtle wave distortion for glass effect
  float waveX = sin(position.x * uWaveFrequency + time) * uWaveAmplitude;
  float waveY = cos(position.y * uWaveFrequency + time) * uWaveAmplitude;
  float waveZ = sin(position.z * uWaveFrequency + time * 0.5) * uWaveAmplitude * 0.5;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.5) * uNoiseStrength;
  
  // Apply distortion to transformed position
  transformed += vec3(waveX, waveY, waveZ) * uDistortion + normal * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  float ior = 1.5;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,Ze={};A(Ze,{fragment:()=>Qe,vertex:()=>$e});var Qe=`// Glass Sphere Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

// Caustics simulation for sphere
float caustics(vec3 position, float time) {
  float c1 = sin(position.x * 4.0 + time) * sin(position.y * 4.0 + time * 0.8);
  float c2 = sin(position.z * 3.0 - time * 1.2) * sin(position.x * 3.0 + time);
  return (c1 + c2) * 0.5 + 0.5;
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // For sphere, use spherical UV mapping for gradient
  float sphericalU = atan(vPosition.z, vPosition.x) / (2.0 * PI) + 0.5;
  float sphericalV = acos(vPosition.y / length(vPosition)) / PI;
  vec2 sphericalUV = vec2(sphericalU, sphericalV);
  
  // Create color gradient based on spherical coordinates
  vec3 gradientColor = mix(uColor1, uColor2, sphericalUV.y);
  gradientColor = mix(gradientColor, uColor3, pow(fresnelFactor, 1.5));
  
  // Add caustics effect for sphere
  float causticsValue = caustics(vGlassWorldPos, uTime);
  gradientColor += vec3(causticsValue * 0.1);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (enhanced for sphere)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float chromaticIntensity = uChromaticAberration * (1.0 + vDistortion * 0.5);
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, chromaticIntensity);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel (stronger effect for sphere)
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Add inner glow effect for sphere
  float innerGlow = pow(1.0 - abs(dot(viewDirection, worldNormal)), 3.0);
  vec3 glowColor = mix(uColor2, uColor3, innerGlow) * innerGlow * 0.5;
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.8) + glowColor;
  
  // Apply transparency with sphere thickness consideration
  float thickness = 1.0 - pow(abs(dot(viewDirection, worldNormal)), 0.5);
  float finalAlpha = mix(uTransparency * thickness, 1.0, fresnelFactor * 0.7);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.9;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,$e=`// Glass Sphere Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // For sphere, use spherical coordinates for better distortion
  float theta = atan(position.z, position.x);
  float phi = acos(position.y / length(position));
  
  // Create waves based on spherical coordinates
  float waveTheta = sin(theta * uWaveFrequency * 2.0 + time) * uWaveAmplitude;
  float wavePhi = cos(phi * uWaveFrequency + time * 1.5) * uWaveAmplitude;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.8) * uNoiseStrength;
  
  // Calculate distortion based on position on sphere
  float distortionAmount = (waveTheta + wavePhi) * uDistortion + noise;
  vDistortion = distortionAmount;
  
  // Apply distortion along normal for sphere
  transformed += normal * distortionAmount;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  // For sphere, adjust IOR based on curvature
  float ior = 1.5 + sin(theta * 2.0 + time) * 0.1;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,et={};A(et,{fragment:()=>tt,vertex:()=>nt});var tt=`// Glass WaterPlane Fragment Shader - Liquid Glass Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for liquid glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js
uniform float uLiquidEffect;
uniform float uFoamIntensity;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  vec3 result = vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  
  // Add distortion based on wave height
  float distortion = vWaveHeight * 0.1;
  result = mix(result, textureCube(envMap, refractedG + vec3(distortion)).rgb, 0.3);
  #else
  vec3 result = vec3(0.5);
  #endif
  
  return result;
}

// Foam effect for water surface
float foam(vec2 uv, float waveHeight, float time) {
  float foamThreshold = 0.3;
  float foamAmount = smoothstep(foamThreshold - 0.1, foamThreshold + 0.1, abs(waveHeight));
  
  // Add foam texture pattern
  float foamPattern = sin(uv.x * 40.0 + time) * cos(uv.y * 30.0 - time * 0.5);
  foamPattern += sin(uv.x * 25.0 - time * 0.8) * sin(uv.y * 35.0 + time);
  foamPattern = clamp(foamPattern * 0.5 + 0.5, 0.0, 1.0);
  
  return foamAmount * foamPattern;
}

// Caustics for underwater effect
vec3 caustics(vec3 position, float time) {
  float c1 = sin(position.x * 6.0 + time * 1.5) * sin(position.z * 6.0 + time);
  float c2 = cos(position.x * 4.0 - time) * cos(position.z * 5.0 + time * 1.2);
  float c3 = sin((position.x + position.z) * 3.0 + time * 0.8);
  
  float causticPattern = (c1 + c2 + c3) / 3.0;
  causticPattern = pow(max(0.0, causticPattern), 2.0);
  
  return vec3(causticPattern) * vec3(0.3, 0.6, 1.0);
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Use wave normal for more accurate water surface
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vWaveNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Water color gradient with depth effect
  float depth = 1.0 - abs(vWaveHeight) * 2.0;
  vec3 shallowColor = mix(uColor1, uColor2, vUv.y);
  vec3 deepColor = mix(uColor2, uColor3, depth);
  vec3 gradientColor = mix(shallowColor, deepColor, fresnelFactor);
  
  // Add foam effect
  float foamAmount = foam(vUv, vWaveHeight, uTime) * uFoamIntensity;
  vec3 foamColor = vec3(1.0, 1.0, 1.0);
  gradientColor = mix(gradientColor, foamColor, foamAmount);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  
  // Add slight blur to reflection for water effect
  vec3 blurredReflection = reflectionColor;
  for (int i = 0; i < 4; i++) {
    vec3 offset = vec3(
      sin(float(i) * 2.0) * 0.01,
      0.0,
      cos(float(i) * 2.0) * 0.01
    );
    blurredReflection += textureCube(envMap, vReflect + offset).rgb * envMapIntensity;
  }
  blurredReflection /= 5.0;
  reflectionColor = mix(reflectionColor, blurredReflection, uLiquidEffect);
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (stronger for water)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float waterIOR = 1.33 + vWaveHeight * 0.1;
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, waterIOR, uChromaticAberration * 1.5);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Add caustics to refraction
  vec3 causticsColor = caustics(vGlassWorldPos, uTime);
  refractionColor += causticsColor * 0.3 * uLiquidEffect;
  
  // Mix reflection and refraction based on Fresnel and wave
  float reflectionMix = fresnelFactor * uReflectivity * (1.0 + abs(vWaveHeight));
  vec3 envColor = mix(refractionColor, reflectionColor, clamp(reflectionMix, 0.0, 1.0));
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.85);
  
  // Apply transparency with wave variation
  float waveAlpha = 1.0 - abs(vWaveHeight) * 0.3;
  float finalAlpha = mix(uTransparency * waveAlpha, 1.0, fresnelFactor * 0.6 + foamAmount * 0.4);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our liquid glass color contribution
  outgoingLight += finalColor * 0.95;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,nt=`// Glass WaterPlane Vertex Shader - Liquid Glass Effect

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;
uniform float uFlowSpeed;
uniform vec2 uFlowDirection;

// Noise functions for water-like glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

// Water wave function
vec3 waterWave(vec2 pos, float time) {
  // Flow effect
  vec2 flowPos = pos + uFlowDirection * time * uFlowSpeed;
  
  // Multiple wave layers for realistic water
  float wave1 = sin(flowPos.x * uWaveFrequency + time) * cos(flowPos.y * uWaveFrequency * 0.8 + time * 0.7);
  float wave2 = sin(flowPos.x * uWaveFrequency * 1.7 - time * 1.3) * sin(flowPos.y * uWaveFrequency * 1.3 + time);
  float wave3 = cos(flowPos.x * uWaveFrequency * 0.5 + time * 0.5) * sin(flowPos.y * uWaveFrequency * 0.6 - time * 0.8);
  
  // Combine waves
  float height = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * uWaveAmplitude;
  
  // Calculate wave normals
  float dx = cos(flowPos.x * uWaveFrequency + time) * uWaveFrequency * 0.5 * uWaveAmplitude;
  float dz = -sin(flowPos.y * uWaveFrequency * 0.8 + time * 0.7) * uWaveFrequency * 0.8 * 0.5 * uWaveAmplitude;
  
  return vec3(dx, height, dz);
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Calculate water waves
  vec3 waveData = waterWave(position.xz, time);
  float waveHeight = waveData.y;
  vec2 waveGradient = waveData.xz;
  
  // Add noise for organic water movement
  vec3 noisePos = vec3(position.x, position.y, position.z) + vec3(time * 0.05);
  float noise = snoise(noisePos * 1.2) * uNoiseStrength * 0.5;
  
  // Store wave height for fragment shader
  vWaveHeight = waveHeight + noise;
  
  // Calculate perturbed normal for water surface
  vec3 waveNormal = normalize(vec3(-waveGradient.x, 1.0, -waveGradient.y));
  vWaveNormal = waveNormal;
  
  // Blend original normal with wave normal
  vec3 blendedNormal = normalize(mix(normal, waveNormal, 0.7));
  
  #ifndef FLAT_SHADED
  vNormal = normalize(mat3(modelViewMatrix) * blendedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Apply wave displacement and additional distortion
  transformed.y += waveHeight + noise;
  transformed += blendedNormal * uDistortion * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors with wave normal
  vec3 worldNormal = normalize(mat3(modelMatrix) * blendedNormal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with varying IOR for water effect
  float ior = 1.33 + sin(time + position.x * 2.0) * 0.1; // Water IOR ~1.33
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,rt={};A(rt,{plane:()=>Je,sphere:()=>Ze,waterPlane:()=>et});var it={};A(it,{fragment:()=>at,vertex:()=>ot});var at=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,ot=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,st={};A(st,{fragment:()=>ct,vertex:()=>lt});var ct=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;
void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,lt=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,ut={};A(ut,{fragment:()=>dt,vertex:()=>ft});var dt=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,ft=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,pt={};A(pt,{plane:()=>it,sphere:()=>st,waterPlane:()=>ut});var mt={};A(mt,{fragment:()=>ht,vertex:()=>gt});var ht=`// Cosmic Plane Fragment Shader - Holographic Gradient

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Holographic helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Holographic Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.2; // More reflective for holographic effect

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float interference1 = sin(vPos.x * 20.0 + t * 3.0) * cos(vPos.y * 15.0 + t * 2.0);
  float interference2 = sin(vPos.x * 35.0 + t * 4.0) * sin(vPos.y * 30.0 + t * 3.5);
  float interference3 = cos(vPos.x * 50.0 + t * 5.0) * cos(vPos.y * 45.0 + t * 4.5);
  
  // Combine interference patterns
  float holographicPattern = (interference1 + interference2 * 0.5 + interference3 * 0.25) / 1.75;
  
  // Create cosmic shimmer effect
  float shimmer = noise2D(vPos.xy * 40.0 + t * 2.0) * 0.3;
  float cosmicGlow = noise2D(vPos.xy * 8.0 + t * 0.5) * 0.5;
  
  // Holographic color shifting
  vec3 holographicShift = vec3(
    sin(vPos.x * 10.0 + t * 2.0 + 0.0) * 0.1,
    sin(vPos.x * 10.0 + t * 2.0 + 2.094) * 0.1,  // 120 degrees
    sin(vPos.x * 10.0 + t * 2.0 + 4.188) * 0.1   // 240 degrees
  );
  
  // Enhanced gradient mixing with cosmic effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + holographicPattern * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vCosmicWave * 1.5);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + shimmer);
  
  // Multi-layer color mixing for depth
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply holographic color shifts
  vec3 holographicColor = baseGradient + holographicShift;
  
  // Add cosmic glow and shimmer
  vec3 cosmicEnhancement = vec3(
    cosmicGlow * 0.2,
    shimmer * 0.15,
    (cosmicGlow + shimmer) * 0.1
  );
  
  // Holographic intensity modulation
  float intensityMod = 1.0 + vHolographicIntensity * 0.5 + abs(holographicPattern) * 0.3;
  
  // Final color with cosmic and holographic effects
  vec3 finalColor = (holographicColor + cosmicEnhancement) * intensityMod;
  
  // Add subtle iridescence
  float iridescence = sin(vPos.x * 25.0 + t * 3.0) * cos(vPos.y * 20.0 + t * 2.5) * 0.1;
  finalColor += vec3(iridescence * 0.2, iridescence * 0.3, iridescence * 0.4);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Holographic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.1; // Add some emission for glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,gt=`// Cosmic Plane Vertex Shader - Holographic Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Holographic Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Holographic Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float holographicPattern = sin(position.x * 15.0 + t * 2.0) * 
                            sin(position.y * 12.0 + t * 1.5) * 0.1;
  
  // Cosmic wave distortion
  float cosmicWave = cnoise(position * uNoiseDensity * 0.5 + vec3(t * 0.3, t * 0.2, t * 0.4));
  vCosmicWave = cosmicWave;
  
  // Multi-layer noise for depth
  float noise1 = cnoise(position * uNoiseDensity * 2.0 + t * 0.8);
  float noise2 = cnoise(position * uNoiseDensity * 0.3 + t * 0.2) * 0.5;
  float noise3 = cnoise(position * uNoiseDensity * 4.0 + t * 1.2) * 0.25;
  
  float combinedNoise = noise1 + noise2 + noise3;
  
  // Holographic shimmer effect
  float shimmer = sin(position.x * 30.0 + t * 4.0) * 
                  cos(position.y * 25.0 + t * 3.0) * 0.05;
  
  // Calculate holographic intensity for fragment shader
  vHolographicIntensity = abs(holographicPattern) + abs(shimmer) * 2.0;
  
  // Apply displacement with holographic and cosmic effects
  float totalDisplacement = (combinedNoise + holographicPattern + shimmer) * uNoiseStrength * uLoadingTime;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation effect for cosmic feel
  pos = rotateY(pos, sin(t * 0.1) * 0.05);
  pos = rotateX(pos, cos(t * 0.07) * 0.03);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,_t={};A(_t,{fragment:()=>vt,vertex:()=>yt});var vt=`// Cosmic Sphere Fragment Shader - Nebula Particle Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Nebula helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for complex nebula patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Star field generation
float stars(vec2 p, float density) {
    vec2 n = floor(p * density);
    vec2 f = fract(p * density);
    
    float d = 1.0;
    for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash(n + g) * vec2(1.0);
            vec2 r = g + o - f;
            d = min(d, dot(r, r));
        }
    }
    
    return 1.0 - smoothstep(0.0, 0.02, sqrt(d));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Nebula Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.1; // Very reflective for cosmic shine

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Calculate distance from center for radial effects
  float distanceFromCenter = length(vPos);
  float angle = atan(vPos.y, vPos.x);
  
  // Create complex nebula patterns using FBM
  vec2 nebulaCoords = vPos.xy * 3.0 + vCosmicSwirl.xy;
  float nebulaPattern1 = fbm(nebulaCoords + t * 0.1);
  float nebulaPattern2 = fbm(nebulaCoords * 2.0 + t * 0.15);
  float nebulaPattern3 = fbm(nebulaCoords * 4.0 + t * 0.2);
  
  // Combine nebula patterns
  float combinedNebula = (nebulaPattern1 + nebulaPattern2 * 0.5 + nebulaPattern3 * 0.25) / 1.75;
  
  // Create particle-like bright spots
  float particleField = stars(vPos.xy * 20.0 + t * 0.5, 50.0);
  float microParticles = stars(vPos.xy * 80.0 + t * 1.0, 200.0) * 0.5;
  
  // Create cosmic dust clouds
  float dustClouds = fbm(vPos.xy * 8.0 + t * 0.05) * 0.3;
  
  // Energy streams
  float energyStream1 = sin(vPos.x * 15.0 + t * 3.0 + angle * 2.0) * 0.1;
  float energyStream2 = cos(vPos.y * 20.0 + t * 2.5 + distanceFromCenter * 5.0) * 0.1;
  
  // Cosmic gradient mixing with nebula influence
  float gradientX = smoothstep(-3.0, 3.0, vPos.x + combinedNebula * 2.0 + vCosmicSwirl.x * 3.0);
  float gradientY = smoothstep(-3.0, 3.0, vPos.y + vNebulaIntensity * 1.5 + vCosmicSwirl.y * 2.0);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + dustClouds * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.6 + gradientZ * 0.4
  );
  
  // Add nebula color variations
  vec3 nebulaColor = baseGradient;
  nebulaColor.r += combinedNebula * 0.3 + energyStream1;
  nebulaColor.g += vNebulaIntensity * 0.2 + energyStream2;
  nebulaColor.b += dustClouds * 0.4 + abs(vCosmicSwirl.z) * 0.5;
  
  // Add particle brightness
  vec3 particleGlow = vec3(
    particleField * 0.8 + microParticles * 0.4,
    particleField * 0.6 + microParticles * 0.3,
    particleField * 0.9 + microParticles * 0.5
  );
  
  // Create pulsing cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 3.0) * 0.1 + 1.0;
  
  // Combine all effects
  vec3 finalColor = (nebulaColor + particleGlow * 2.0) * cosmicPulse;
  
  // Add cosmic rim lighting effect
  float rimLight = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
  finalColor += rimLight * 0.3 * (color1 + color2 + color3) / 3.0;
  
  // Enhance particle density areas
  finalColor = mix(finalColor, finalColor * 1.5, vParticleDensity * 0.5);
  
  // Add subtle color temperature variation
  float temperature = sin(angle * 3.0 + t * 0.8) * 0.1;
  finalColor.r += temperature * 0.1;
  finalColor.b -= temperature * 0.1;

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Cosmic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.2; // Strong emission for nebula glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,yt=`// Cosmic Sphere Vertex Shader - Nebula Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Nebula Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotation3dZ(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }
vec3 rotateZ(vec3 v, float angle) { return rotation3dZ(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Nebula Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create swirling nebula patterns
  vec3 swirlCenter = vec3(0.0, 0.0, 0.0);
  vec3 toCenter = position - swirlCenter;
  float distanceFromCenter = length(toCenter);
  
  // Create spiral motion
  float angle = atan(toCenter.y, toCenter.x);
  float spiralAngle = angle + distanceFromCenter * 2.0 + t * 0.5;
  
  // Multi-octave noise for nebula density
  float nebula1 = cnoise(position * uNoiseDensity * 0.8 + vec3(t * 0.2, t * 0.3, t * 0.1));
  float nebula2 = cnoise(position * uNoiseDensity * 1.5 + vec3(t * 0.4, t * 0.2, t * 0.5)) * 0.7;
  float nebula3 = cnoise(position * uNoiseDensity * 3.0 + vec3(t * 0.8, t * 0.6, t * 0.9)) * 0.4;
  float nebula4 = cnoise(position * uNoiseDensity * 6.0 + vec3(t * 1.2, t * 1.0, t * 1.4)) * 0.2;
  
  // Combine nebula layers for complexity
  float nebulaPattern = nebula1 + nebula2 + nebula3 + nebula4;
  vNebulaIntensity = abs(nebulaPattern);
  
  // Create particle-like density variations
  float particleDensity = cnoise(position * uNoiseDensity * 8.0 + vec3(t * 2.0, t * 1.5, t * 2.5));
  vParticleDensity = smoothstep(-0.3, 0.8, particleDensity);
  
  // Create cosmic swirl effect
  vec3 swirl = vec3(
    sin(spiralAngle + t * 0.3) * distanceFromCenter * 0.1,
    cos(spiralAngle + t * 0.2) * distanceFromCenter * 0.1,
    sin(distanceFromCenter * 3.0 + t * 0.4) * 0.05
  );
  vCosmicSwirl = swirl;
  
  // Create pulsing effect for cosmic energy
  float pulse = sin(t * 2.0 + distanceFromCenter * 5.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = nebulaPattern * uNoiseStrength * uLoadingTime * pulse;
  
  // Add swirl displacement
  vec3 pos = position + normal * totalDisplacement + swirl * 0.3;
  vPos = pos;
  
  // Add cosmic rotation for dynamic feel
  pos = rotateY(pos, sin(t * 0.1 + distanceFromCenter) * 0.1);
  pos = rotateX(pos, cos(t * 0.08 + angle) * 0.08);
  pos = rotateZ(pos, sin(t * 0.05 + spiralAngle) * 0.05);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,bt={};A(bt,{fragment:()=>xt,vertex:()=>St});var xt=`// Cosmic WaterPlane Fragment Shader - Aurora Wave Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Aurora helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for aurora patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Aurora curtain effect
float aurora(vec2 p, float time) {
    vec2 q = vec2(fbm(p + vec2(0.0, time * 0.1)),
                  fbm(p + vec2(5.2, time * 0.15)));
    
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, time * 0.2)),
                  fbm(p + 4.0 * q + vec2(8.3, time * 0.18)));
    
    return fbm(p + 4.0 * r);
}

// Water caustics effect
float caustics(vec2 p, float time) {
    vec2 uv = p * 4.0;
    vec2 p0 = uv + vec2(time * 0.3, time * 0.2);
    vec2 p1 = uv + vec2(time * -0.4, time * 0.3);
    
    float c1 = sin(length(p0) * 8.0 - time * 2.0) * 0.5 + 0.5;
    float c2 = sin(length(p1) * 6.0 - time * 1.5) * 0.5 + 0.5;
    
    return (c1 + c2) * 0.5;
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Aurora Water Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.05; // Very smooth for water-like reflection

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create aurora patterns
  vec2 auroraCoords = vPos.xy * 2.0 + vFlowDirection.xy * t * 0.5;
  float auroraPattern1 = aurora(auroraCoords, t);
  float auroraPattern2 = aurora(auroraCoords * 1.5 + vec2(3.0, 1.0), t * 1.2);
  float auroraPattern3 = aurora(auroraCoords * 0.7 + vec2(-2.0, 4.0), t * 0.8);
  
  // Combine aurora layers
  float combinedAurora = (auroraPattern1 + auroraPattern2 * 0.7 + auroraPattern3 * 0.5) / 2.2;
  
  // Create water caustics
  float causticsPattern = caustics(vPos.xy, t);
  
  // Create flowing light streams
  float lightStream1 = sin(vPos.x * 8.0 + t * 2.0 + combinedAurora * 3.0) * 0.2;
  float lightStream2 = cos(vPos.y * 6.0 + t * 1.5 + vWaveHeight * 4.0) * 0.15;
  float lightStream3 = sin((vPos.x + vPos.y) * 10.0 + t * 2.5) * 0.1;
  
  // Create cosmic energy waves
  float distanceFromCenter = length(vPos.xy);
  float energyWave = sin(distanceFromCenter * 5.0 - t * 3.0) * 
                     exp(-distanceFromCenter * 0.05) * 0.3;
  
  // Aurora color shifting effect
  vec3 auroraShift = vec3(
    sin(combinedAurora * 6.28 + t * 1.0) * 0.2,
    sin(combinedAurora * 6.28 + t * 1.0 + 2.094) * 0.2,  // 120 degrees
    sin(combinedAurora * 6.28 + t * 1.0 + 4.188) * 0.2   // 240 degrees
  );
  
  // Enhanced gradient mixing with aurora and water effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + combinedAurora * 3.0 + vFlowDirection.x * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vWaveHeight * 2.0 + lightStream1 * 3.0);
  float gradientZ = smoothstep(-3.0, 3.0, vPos.z + causticsPattern * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply aurora color shifts
  vec3 auroraColor = baseGradient + auroraShift;
  
  // Add water caustics coloring
  vec3 causticsColor = vec3(
    causticsPattern * 0.3,
    causticsPattern * 0.4,
    causticsPattern * 0.5
  );
  
  // Add light streams
  vec3 lightStreams = vec3(
    abs(lightStream1) * 0.4,
    abs(lightStream2) * 0.3,
    abs(lightStream3) * 0.5
  );
  
  // Aurora intensity modulation
  float auroraIntensityMod = 1.0 + vAuroraIntensity * 0.8 + abs(combinedAurora) * 0.6;
  
  // Combine all effects
  vec3 finalColor = (auroraColor + causticsColor + lightStreams + vec3(energyWave * 0.2)) * auroraIntensityMod;
  
  // Add water-like shimmer
  float shimmer = sin(vPos.x * 20.0 + t * 4.0) * 
                  cos(vPos.y * 18.0 + t * 3.5) * 
                  vWaveHeight * 0.1;
  finalColor += vec3(shimmer * 0.3, shimmer * 0.4, shimmer * 0.6);
  
  // Add aurora dancing effect
  float auroraMovement = sin(vPos.x * 3.0 + t * 1.2 + combinedAurora * 2.0) * 
                         cos(vPos.y * 2.5 + t * 0.9) * 0.15;
  finalColor.g += abs(auroraMovement) * 0.4;
  finalColor.b += abs(auroraMovement) * 0.2;
  
  // Add cosmic depth variation
  float depthVariation = noise2D(vPos.xy * 5.0 + t * 0.3) * 0.1;
  finalColor *= (1.0 + depthVariation);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Water Aurora Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.15; // Moderate emission for aurora glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,St=`// Cosmic WaterPlane Vertex Shader - Aurora Wave Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Aurora Wave Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Aurora Wave Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create flowing aurora patterns
  float auroraFlow1 = sin(position.x * 5.0 + t * 1.5) * cos(position.y * 3.0 + t * 1.0);
  float auroraFlow2 = sin(position.x * 8.0 + t * 2.0) * sin(position.y * 6.0 + t * 1.8);
  float auroraFlow3 = cos(position.x * 12.0 + t * 2.5) * cos(position.y * 9.0 + t * 2.2);
  
  // Combine aurora flows
  float auroraPattern = (auroraFlow1 + auroraFlow2 * 0.7 + auroraFlow3 * 0.4) / 2.1;
  vAuroraIntensity = abs(auroraPattern);
  
  // Create multi-layered waves
  float wave1 = cnoise(vec3(position.xy * uNoiseDensity * 0.5, t * 0.3));
  float wave2 = cnoise(vec3(position.xy * uNoiseDensity * 1.2, t * 0.5)) * 0.6;
  float wave3 = cnoise(vec3(position.xy * uNoiseDensity * 2.5, t * 0.8)) * 0.3;
  float wave4 = cnoise(vec3(position.xy * uNoiseDensity * 5.0, t * 1.2)) * 0.15;
  
  // Combine waves for complex water surface
  float combinedWaves = wave1 + wave2 + wave3 + wave4;
  vWaveHeight = combinedWaves;
  
  // Create flowing current patterns
  vec2 flowDirection = vec2(
    sin(position.x * 2.0 + t * 0.8) + cos(position.y * 1.5 + t * 0.6),
    cos(position.x * 1.8 + t * 0.7) + sin(position.y * 2.2 + t * 0.9)
  );
  vFlowDirection = vec3(normalize(flowDirection), 0.0);
  
  // Aurora-influenced wave distortion
  float auroraWave = sin(position.x * 15.0 + t * 3.0 + auroraPattern * 5.0) * 
                     cos(position.y * 12.0 + t * 2.5 + auroraPattern * 4.0) * 0.2;
  
  // Create cosmic energy ripples
  float distanceFromCenter = length(position.xy);
  float cosmicRipple = sin(distanceFromCenter * 8.0 - t * 4.0) * 
                       exp(-distanceFromCenter * 0.1) * 0.3;
  
  // Pulsing effect for cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 2.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = (combinedWaves + auroraWave + cosmicRipple) * 
                           uNoiseStrength * uLoadingTime * cosmicPulse;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation for cosmic flow
  pos = rotateY(pos, sin(t * 0.05 + distanceFromCenter * 0.1) * 0.02);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Ct={};A(Ct,{plane:()=>mt,sphere:()=>_t,waterPlane:()=>bt});var wt={};A(wt,{cosmic:()=>Ct,defaults:()=>qe,glass:()=>rt,positionMix:()=>pt});var M={performance:!1,render:!0},Tt={enable:e=>{M[e]=!0},disable:e=>{M[e]=!1},enableAll:()=>{Object.keys(M).forEach(e=>{M[e]=!0})},disableAll:()=>{Object.keys(M).forEach(e=>{M[e]=!1})},performance:(...e)=>{M.performance&&console.log(`[Performance]`,...e)},render:(...e)=>{M.render&&console.log(`[Render]`,...e)}};typeof window<`u`&&(window.debug=Tt);function Et(e){return e/180*Math.PI}function Dt(e){return e.map(e=>Et(e))}function Ot(e){return e.replace(`http://localhost:3001/customize`,``).replace(`https://shadergradient.co/customize`,``).replace(`https://www.shadergradient.co/customize`,``)}function kt({animate:e,range:t,rangeStart:n,rangeEnd:r,loop:i,loopDuration:a,positionX:o,positionY:s,positionZ:c,rotationX:l,rotationY:u,rotationZ:d,type:f,color1:p,color2:m,color3:h,reflection:g,uTime:_,uSpeed:v,uDensity:y,uStrength:ee,uFrequency:b,uAmplitude:te,shader:x}){let{vertex:S,fragment:ne}=wt[x][f],C={colors:[p,m,h],uTime:_,uSpeed:v,uLoadingTime:1,uNoiseDensity:y,uNoiseStrength:ee,uFrequency:b,uAmplitude:te,uIntensity:.5,uLoop:+(i===`on`),uLoopDuration:a||5},re=x===`glass`?{uColor1:xe(p),uColor2:xe(m),uColor3:xe(h),uTransparency:.1,uRefraction:1.5,uChromaticAberration:.1,uFresnelPower:2,uReflectivity:.9,uWaveAmplitude:.02,uWaveFrequency:5,uDistortion:.1,uFlowSpeed:.1,uFlowDirection:{x:1,y:.5},uLiquidEffect:.5,uFoamIntensity:.3,envMapIntensity:1}:{},ie=O(O({},C),re);return(0,E.jsxs)(`mesh`,{name:`shadergradient-mesh`,position:[o,s,c],rotation:Dt([l,u,d]),children:[(0,E.jsx)(ve,{type:f}),(0,E.jsx)(Le,{animate:e,range:t,rangeStart:n,rangeEnd:r,loop:i,loopDuration:a,reflection:g,shader:x,uniforms:ie,vertexShader:S,fragmentShader:ne,onInit:e=>{Tt.performance(`material (onInit)`,e)}})]})}var At=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}},jt=new a(-1,1,1,-1,0,1),Mt=new ie;Mt.setAttribute(`position`,new i([-1,3,0,-1,-1,0,3,-1,0],3)),Mt.setAttribute(`uv`,new i([0,2,0,0,2,0],2));var Nt=class{constructor(e){this._mesh=new n(Mt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Pt=class extends At{constructor(e,t,n,r,i){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i===void 0?0:i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new v}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ft=class extends At{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof oe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fe.clone(e.uniforms),this.material=new oe({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nt(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}},It={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`},Lt=class extends At{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Rt=class extends At{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},zt=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:s,magFilter:s,format:p},r=e.getSize(new ce);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new x(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name=`EffectComposer.rt1`}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],It===void 0&&console.error(`THREE.EffectComposer relies on CopyShader`),Ft===void 0&&console.error(`THREE.EffectComposer relies on ShaderPass`),this.copyPass=new Ft(It),this.clock=new me}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Lt!==void 0&&(r instanceof Lt?n=!0:r instanceof Rt&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};new a(-1,1,1,-1,0,1);var Bt=new ie;Bt.setAttribute(`position`,new i([-1,3,0,-1,-1,0,3,-1,0],3)),Bt.setAttribute(`uv`,new i([0,2,0,0,2,0],2));var N={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`},Vt=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}},Ht=new a(-1,1,1,-1,0,1),Ut=new ie;Ut.setAttribute(`position`,new i([-1,3,0,-1,-1,0,3,-1,0],3)),Ut.setAttribute(`uv`,new i([0,2,0,0,2,0],2));var Wt=class{constructor(e){this._mesh=new n(Ut,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ht)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},P={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},Gt=new Map([[P.SKIP,null],[P.ADD,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`],[P.ALPHA,`vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`],[P.AVERAGE,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`],[P.COLOR_BURN,`float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.COLOR_DODGE,`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.DARKEN,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`],[P.DIFFERENCE,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`],[P.EXCLUSION,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`],[P.LIGHTEN,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`],[P.MULTIPLY,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`],[P.DIVIDE,`float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.NEGATION,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`],[P.NORMAL,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`],[P.OVERLAY,`float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.REFLECT,`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.SCREEN,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`],[P.SOFT_LIGHT,`float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`],[P.SUBTRACT,`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`]]),Kt=class extends u{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new re(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:`change`})}getShaderCode(){return Gt.get(this.blendFunction)}},qt=!0,Jt=class extends Vt{constructor(e,t,n){super(),N===void 0&&console.error(`THREE.HalftonePass requires HalftoneShader`),this.uniforms=fe.clone(N.uniforms),this.material=new oe({uniforms:this.uniforms,fragmentShader:N.fragmentShader,vertexShader:N.vertexShader}),qt&&(this.uniforms.width.value=e,this.uniforms.height.value=t),this.uniforms.disable.value=n.disable,this.fsQuad=new Wt(this.material),this.blendMode=new Kt(P.SCREEN),this.extensions=null}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){qt&&(this.uniforms.width.value=e,this.uniforms.height.value=t)}initialize(e,t,n){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return N.fragmentShader}getVertexShader(){return N.vertexShader}update(e,t,n){}};function Yt({disable:e=!1}){let{gl:t,scene:n,camera:r,size:i}=T(),a=(0,j.useRef)(null),o=(0,j.useRef)(null),s=(0,j.useMemo)(()=>({shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1}),[]);return(0,j.useEffect)(()=>{let c=new zt(t),l=new Pt(n,r),u=new Jt(i.width,i.height,Ne(O({},s),{disable:e}));return c.addPass(l),c.addPass(u),a.current=c,o.current=u,()=>{var e,t,n,r,i,s,d,f;(e=l.dispose)==null||e.call(l),(t=u.fsQuad)!=null&&t.dispose&&u.fsQuad.dispose(),(r=(n=u.material)?.dispose)==null||r.call(n),(s=(i=c.renderTarget1)?.dispose)==null||s.call(i),(f=(d=c.renderTarget2)?.dispose)==null||f.call(d),a.current=null,o.current=null}},[r,t,s,n]),(0,j.useEffect)(()=>{var e;let t=a.current;t&&(t.setSize(i.width,i.height),(e=o.current)==null||e.setSize(i.width,i.height))},[i.height,i.width]),(0,j.useEffect)(()=>{var t;(t=o.current?.uniforms)!=null&&t.disable&&(o.current.uniforms.disable.value=e)},[e]),g((e,n)=>{let r=a.current;r&&(t.autoClear=!0,r.render(n))},1),(0,E.jsx)(E.Fragment,{})}var Xt=(e,t,n)=>({dpr:e,camera:{fov:t},linear:!0,flat:!0,gl:{preserveDrawingBuffer:n?.preserveDrawingBuffer,powerPreference:n?.powerPreference}}),Zt={zoom:1,distance:14},Qt={zoom:5,distance:14};function $t({type:e,cAzimuthAngle:t,cPolarAngle:n,cDistance:r,cameraZoom:i,zoomOut:a,enableTransition:o=!0}){let s=(0,j.useRef)();return g((e,t)=>s.current.update(t)),(0,j.useEffect)(()=>{s.current?.rotateTo(Et(t),Et(n),o)},[s,t,n,o]),(0,j.useEffect)(()=>{let t=s.current;a?e===`sphere`?(t?.dollyTo(Qt.distance,o),t?.zoomTo(Qt.zoom,o)):(t?.dollyTo(Zt.distance,o),t?.zoomTo(Zt.zoom,o)):e===`sphere`?(t?.zoomTo(i,o),t?.dollyTo(14,o)):(t?.dollyTo(r,o),t?.zoomTo(1,o))},[s,a,e,i,r,o]),s}var F={LEFT:1,RIGHT:2,MIDDLE:4},I=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768}),L={NONE:0,IN:1,OUT:-1};function R(e){return e.isPerspectiveCamera}function z(e){return e.isOrthographicCamera}var B=Math.PI*2,en=Math.PI/2,tn=1e-5,nn=Math.PI/180;function V(e,t,n){return Math.max(t,Math.min(n,e))}function H(e,t=tn){return Math.abs(e)<t}function U(e,t,n=tn){return H(e-t,n)}function rn(e,t){return Math.round(e/t)*t}function an(e){return isFinite(e)?e:e<0?-Number.MAX_VALUE:Number.MAX_VALUE}function on(e){return Math.abs(e)<Number.MAX_VALUE?e:1/0*e}function sn(e,t,n,r,i=1/0,a){r=Math.max(1e-4,r);let o=2/r,s=o*a,c=1/(1+s+.48*s*s+.235*s*s*s),l=e-t,u=t,d=i*r;l=V(l,-d,d),t=e-l;let f=(n.value+o*l)*a;n.value=(n.value-o*f)*c;let p=t+(l+f)*c;return u-e>0==p>u&&(p=u,n.value=(p-u)/a),p}function cn(e,t,n,r,i=1/0,a,o){r=Math.max(1e-4,r);let s=2/r,c=s*a,l=1/(1+c+.48*c*c+.235*c*c*c),u=t.x,d=t.y,f=t.z,p=e.x-u,m=e.y-d,h=e.z-f,g=u,_=d,v=f,y=i*r,ee=y*y,b=p*p+m*m+h*h;if(b>ee){let e=Math.sqrt(b);p=p/e*y,m=m/e*y,h=h/e*y}u=e.x-p,d=e.y-m,f=e.z-h;let te=(n.x+s*p)*a,x=(n.y+s*m)*a,S=(n.z+s*h)*a;n.x=(n.x-s*te)*l,n.y=(n.y-s*x)*l,n.z=(n.z-s*S)*l,o.x=u+(p+te)*l,o.y=d+(m+x)*l,o.z=f+(h+S)*l;let ne=g-e.x,C=_-e.y,re=v-e.z,ie=o.x-g,w=o.y-_,ae=o.z-v;return ne*ie+C*w+re*ae>0&&(o.x=g,o.y=_,o.z=v,n.x=(o.x-g)/a,n.y=(o.y-_)/a,n.z=(o.z-v)/a),o}function ln(e,t){t.set(0,0),e.forEach(e=>{t.x+=e.clientX,t.y+=e.clientY}),t.x/=e.length,t.y/=e.length}function un(e,t){return z(e)?(console.warn(`${t} is not supported in OrthographicCamera`),!0):!1}var dn=class{constructor(){this._listeners={}}addEventListener(e,t){let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}removeAllEventListeners(e){e?Array.isArray(this._listeners[e])&&(this._listeners[e].length=0):this._listeners={}}dispatchEvent(e){let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e)}}},fn=`2.9.0`,pn=1/8,mn=/Mac/.test((globalThis==null?void 0:globalThis.navigator)?.platform),W,hn,gn,_n,G,K,q,vn,yn,J,Y,X,bn,xn,Z,Sn,Cn,wn,Tn,En,Dn,On,kn,Q=class e extends dn{static install(e){W=e.THREE,hn=Object.freeze(new W.Vector3(0,0,0)),gn=Object.freeze(new W.Vector3(0,1,0)),_n=Object.freeze(new W.Vector3(0,0,1)),G=new W.Vector2,K=new W.Vector3,q=new W.Vector3,vn=new W.Vector3,yn=new W.Vector3,J=new W.Vector3,Y=new W.Vector3,X=new W.Vector3,bn=new W.Vector3,xn=new W.Vector3,Z=new W.Spherical,Sn=new W.Spherical,Cn=new W.Box3,wn=new W.Box3,Tn=new W.Sphere,En=new W.Quaternion,Dn=new W.Quaternion,On=new W.Matrix4,kn=new W.Raycaster}static get ACTION(){return I}constructor(t,n){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=2**-52,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=I.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=L.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new W.Vector3,this._focalOffsetVelocity=new W.Vector3,this._zoomVelocity={value:0},this._truckInternal=(e,t,n)=>{let r,i;if(R(this._camera)){let n=K.copy(this._camera.position).sub(this._target),a=this._camera.getEffectiveFOV()*nn,o=n.length()*Math.tan(a*.5);r=this.truckSpeed*e*o/this._elementRect.height,i=this.truckSpeed*t*o/this._elementRect.height}else if(z(this._camera)){let n=this._camera;r=e*(n.right-n.left)/n.zoom/this._elementRect.width,i=t*(n.top-n.bottom)/n.zoom/this._elementRect.height}else return;this.verticalDragToForward?(n?this.setFocalOffset(this._focalOffsetEnd.x+r,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(r,0,!0),this.forward(-i,!0)):n?this.setFocalOffset(this._focalOffsetEnd.x+r,this._focalOffsetEnd.y+i,this._focalOffsetEnd.z,!0):this.truck(r,i,!0)},this._rotateInternal=(e,t)=>{let n=B*this.azimuthRotateSpeed*e/this._elementRect.height,r=B*this.polarRotateSpeed*t/this._elementRect.height;this.rotate(n,r,!0)},this._dollyInternal=(e,t,n)=>{let r=.95**(-e*this.dollySpeed),i=this._sphericalEnd.radius,a=this._sphericalEnd.radius*r,o=V(a,this.minDistance,this.maxDistance),s=o-a;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(a,!0):(this.infinityDolly&&!this.dollyToCursor&&this.dollyInFixed(s,!0),this._dollyToNoClamp(o,!0)),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?a:o)-i,this._dollyControlCoord.set(t,n)),this._lastDollyDirection=Math.sign(-e)},this._zoomInternal=(e,t,n)=>{let r=.95**(e*this.dollySpeed),i=this._zoom,a=this._zoom*r;this.zoomTo(a,!0),this.dollyToCursor&&(this._changedZoom+=a-i,this._dollyControlCoord.set(t,n))},W===void 0&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=t,this._yAxisUpSpace=new W.Quaternion().setFromUnitVectors(this._camera.up,gn),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=I.NONE,this._target=new W.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new W.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new W.Spherical().setFromVector3(K.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new W.Vector3,new W.Vector3,new W.Vector3,new W.Vector3],this._updateNearPlaneCorners(),this._boundary=new W.Box3(new W.Vector3(-1/0,-1/0,-1/0),new W.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new W.Vector2,this.mouseButtons={left:I.ROTATE,middle:I.DOLLY,right:I.TRUCK,wheel:R(this._camera)?I.DOLLY:z(this._camera)?I.ZOOM:I.NONE},this.touches={one:I.TOUCH_ROTATE,two:R(this._camera)?I.TOUCH_DOLLY_TRUCK:z(this._camera)?I.TOUCH_ZOOM_TRUCK:I.NONE,three:I.TOUCH_TRUCK};let r=new W.Vector2,i=new W.Vector2,a=new W.Vector2,o=e=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let t=this._domElement.getBoundingClientRect(),n=e.clientX/t.width,r=e.clientY/t.height;if(n<this._interactiveArea.left||n>this._interactiveArea.right||r<this._interactiveArea.top||r>this._interactiveArea.bottom)return}let t=e.pointerType===`mouse`?(e.buttons&F.LEFT)===F.LEFT?F.LEFT:(e.buttons&F.MIDDLE)===F.MIDDLE?F.MIDDLE:(e.buttons&F.RIGHT)===F.RIGHT?F.RIGHT:null:null;if(t!==null){let e=this._findPointerByMouseButton(t);e&&this._disposePointer(e)}if((e.buttons&F.LEFT)===F.LEFT&&this._lockedPointer)return;let n={pointerId:e.pointerId,clientX:e.clientX,clientY:e.clientY,deltaX:0,deltaY:0,mouseButton:t};this._activePointers.push(n),this._domElement.ownerDocument.removeEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.removeEventListener(`pointerup`,c),this._domElement.ownerDocument.addEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.addEventListener(`pointerup`,c),this._isDragging=!0,f(e)},s=e=>{e.cancelable&&e.preventDefault();let t=e.pointerId,n=this._lockedPointer||this._findPointerById(t);if(n){if(n.clientX=e.clientX,n.clientY=e.clientY,n.deltaX=e.movementX,n.deltaY=e.movementY,this._state=0,e.pointerType===`touch`)switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(e.buttons&F.LEFT)===F.LEFT)&&(this._state|=this.mouseButtons.left),this._isDragging&&(e.buttons&F.MIDDLE)===F.MIDDLE&&(this._state|=this.mouseButtons.middle),this._isDragging&&(e.buttons&F.RIGHT)===F.RIGHT&&(this._state|=this.mouseButtons.right);p()}},c=e=>{let t=this._findPointerById(e.pointerId);if(!(t&&t===this._lockedPointer)){if(t&&this._disposePointer(t),e.pointerType===`touch`)switch(this._activePointers.length){case 0:this._state=I.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else this._state=I.NONE;m()}},l=-1,u=e=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===I.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let t=this._domElement.getBoundingClientRect(),n=e.clientX/t.width,r=e.clientY/t.height;if(n<this._interactiveArea.left||n>this._interactiveArea.right||r<this._interactiveArea.top||r>this._interactiveArea.bottom)return}if(e.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===I.ROTATE||this.mouseButtons.wheel===I.TRUCK){let e=performance.now();l-e<1e3&&this._getClientRect(this._elementRect),l=e}let t=mn?-1:-3,n=e.deltaMode===1?e.deltaY/t:e.deltaY/(t*10),r=this.dollyToCursor?(e.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,i=this.dollyToCursor?(e.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case I.ROTATE:this._rotateInternal(e.deltaX,e.deltaY),this._isUserControllingRotate=!0;break;case I.TRUCK:this._truckInternal(e.deltaX,e.deltaY,!1),this._isUserControllingTruck=!0;break;case I.OFFSET:this._truckInternal(e.deltaX,e.deltaY,!0),this._isUserControllingOffset=!0;break;case I.DOLLY:this._dollyInternal(-n,r,i),this._isUserControllingDolly=!0;break;case I.ZOOM:this._zoomInternal(-n,r,i),this._isUserControllingZoom=!0}this.dispatchEvent({type:`control`})},d=t=>{if(this._domElement&&this._enabled){if(this.mouseButtons.right===e.ACTION.NONE){let e=t instanceof PointerEvent?t.pointerId:0,n=this._findPointerById(e);n&&this._disposePointer(n),this._domElement.ownerDocument.removeEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.removeEventListener(`pointerup`,c);return}t.preventDefault()}},f=e=>{if(this._enabled){if(ln(this._activePointers,G),this._getClientRect(this._elementRect),r.copy(G),i.copy(G),this._activePointers.length>=2){let e=G.x-this._activePointers[1].clientX,t=G.y-this._activePointers[1].clientY,n=Math.sqrt(e*e+t*t);a.set(0,n);let r=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,o=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(r,o)}if(this._state=0,!e)this._lockedPointer&&(this._state|=this.mouseButtons.left);else if(`pointerType`in e&&e.pointerType===`touch`)switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three}else!this._lockedPointer&&(e.buttons&F.LEFT)===F.LEFT&&(this._state|=this.mouseButtons.left),(e.buttons&F.MIDDLE)===F.MIDDLE&&(this._state|=this.mouseButtons.middle),(e.buttons&F.RIGHT)===F.RIGHT&&(this._state|=this.mouseButtons.right);((this._state&I.ROTATE)===I.ROTATE||(this._state&I.TOUCH_ROTATE)===I.TOUCH_ROTATE||(this._state&I.TOUCH_DOLLY_ROTATE)===I.TOUCH_DOLLY_ROTATE||(this._state&I.TOUCH_ZOOM_ROTATE)===I.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&I.TRUCK)===I.TRUCK||(this._state&I.TOUCH_TRUCK)===I.TOUCH_TRUCK||(this._state&I.TOUCH_DOLLY_TRUCK)===I.TOUCH_DOLLY_TRUCK||(this._state&I.TOUCH_ZOOM_TRUCK)===I.TOUCH_ZOOM_TRUCK)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&I.DOLLY)===I.DOLLY||(this._state&I.TOUCH_DOLLY)===I.TOUCH_DOLLY||(this._state&I.TOUCH_DOLLY_TRUCK)===I.TOUCH_DOLLY_TRUCK||(this._state&I.TOUCH_DOLLY_OFFSET)===I.TOUCH_DOLLY_OFFSET||(this._state&I.TOUCH_DOLLY_ROTATE)===I.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&I.ZOOM)===I.ZOOM||(this._state&I.TOUCH_ZOOM)===I.TOUCH_ZOOM||(this._state&I.TOUCH_ZOOM_TRUCK)===I.TOUCH_ZOOM_TRUCK||(this._state&I.TOUCH_ZOOM_OFFSET)===I.TOUCH_ZOOM_OFFSET||(this._state&I.TOUCH_ZOOM_ROTATE)===I.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&I.OFFSET)===I.OFFSET||(this._state&I.TOUCH_OFFSET)===I.TOUCH_OFFSET||(this._state&I.TOUCH_DOLLY_OFFSET)===I.TOUCH_DOLLY_OFFSET||(this._state&I.TOUCH_ZOOM_OFFSET)===I.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:`controlstart`})}},p=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,ln(this._activePointers,G);let e=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,t=e?-e.deltaX:i.x-G.x,n=e?-e.deltaY:i.y-G.y;if(i.copy(G),((this._state&I.ROTATE)===I.ROTATE||(this._state&I.TOUCH_ROTATE)===I.TOUCH_ROTATE||(this._state&I.TOUCH_DOLLY_ROTATE)===I.TOUCH_DOLLY_ROTATE||(this._state&I.TOUCH_ZOOM_ROTATE)===I.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(t,n),this._isUserControllingRotate=!0),(this._state&I.DOLLY)===I.DOLLY||(this._state&I.ZOOM)===I.ZOOM){let e=this.dollyToCursor?(r.x-this._elementRect.x)/this._elementRect.width*2-1:0,t=this.dollyToCursor?(r.y-this._elementRect.y)/this._elementRect.height*-2+1:0,i=this.dollyDragInverted?-1:1;(this._state&I.DOLLY)===I.DOLLY?(this._dollyInternal(i*n*pn,e,t),this._isUserControllingDolly=!0):(this._zoomInternal(i*n*pn,e,t),this._isUserControllingZoom=!0)}if((this._state&I.TOUCH_DOLLY)===I.TOUCH_DOLLY||(this._state&I.TOUCH_ZOOM)===I.TOUCH_ZOOM||(this._state&I.TOUCH_DOLLY_TRUCK)===I.TOUCH_DOLLY_TRUCK||(this._state&I.TOUCH_ZOOM_TRUCK)===I.TOUCH_ZOOM_TRUCK||(this._state&I.TOUCH_DOLLY_OFFSET)===I.TOUCH_DOLLY_OFFSET||(this._state&I.TOUCH_ZOOM_OFFSET)===I.TOUCH_ZOOM_OFFSET||(this._state&I.TOUCH_DOLLY_ROTATE)===I.TOUCH_DOLLY_ROTATE||(this._state&I.TOUCH_ZOOM_ROTATE)===I.TOUCH_ZOOM_ROTATE){let e=G.x-this._activePointers[1].clientX,t=G.y-this._activePointers[1].clientY,n=Math.sqrt(e*e+t*t),r=a.y-n;a.set(0,n);let o=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,s=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&I.TOUCH_DOLLY)===I.TOUCH_DOLLY||(this._state&I.TOUCH_DOLLY_ROTATE)===I.TOUCH_DOLLY_ROTATE||(this._state&I.TOUCH_DOLLY_TRUCK)===I.TOUCH_DOLLY_TRUCK||(this._state&I.TOUCH_DOLLY_OFFSET)===I.TOUCH_DOLLY_OFFSET?(this._dollyInternal(r*pn,o,s),this._isUserControllingDolly=!0):(this._zoomInternal(r*pn,o,s),this._isUserControllingZoom=!0)}((this._state&I.TRUCK)===I.TRUCK||(this._state&I.TOUCH_TRUCK)===I.TOUCH_TRUCK||(this._state&I.TOUCH_DOLLY_TRUCK)===I.TOUCH_DOLLY_TRUCK||(this._state&I.TOUCH_ZOOM_TRUCK)===I.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(t,n,!1),this._isUserControllingTruck=!0),((this._state&I.OFFSET)===I.OFFSET||(this._state&I.TOUCH_OFFSET)===I.TOUCH_OFFSET||(this._state&I.TOUCH_DOLLY_OFFSET)===I.TOUCH_DOLLY_OFFSET||(this._state&I.TOUCH_ZOOM_OFFSET)===I.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(t,n,!0),this._isUserControllingOffset=!0),this.dispatchEvent({type:`control`})},m=()=>{ln(this._activePointers,G),i.copy(G),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.removeEventListener(`pointerup`,c),this.dispatchEvent({type:`controlend`}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.removeEventListener(`pointerup`,c),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener(`pointerlockchange`,h),this._domElement.ownerDocument.addEventListener(`pointerlockerror`,g),this._domElement.ownerDocument.addEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.addEventListener(`pointerup`,c),f())},this.unlockPointer=()=>{var e,t,n;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(e=this._domElement)==null||e.ownerDocument.exitPointerLock(),(t=this._domElement)==null||t.ownerDocument.removeEventListener(`pointerlockchange`,h),(n=this._domElement)==null||n.ownerDocument.removeEventListener(`pointerlockerror`,g),this.cancel()};let h=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},g=()=>{this.unlockPointer()};this._addAllEventListeners=e=>{this._domElement=e,this._domElement.style.touchAction=`none`,this._domElement.style.userSelect=`none`,this._domElement.style.webkitUserSelect=`none`,this._domElement.addEventListener(`pointerdown`,o),this._domElement.addEventListener(`pointercancel`,c),this._domElement.addEventListener(`wheel`,u,{passive:!1}),this._domElement.addEventListener(`contextmenu`,d)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction=``,this._domElement.style.userSelect=``,this._domElement.style.webkitUserSelect=``,this._domElement.removeEventListener(`pointerdown`,o),this._domElement.removeEventListener(`pointercancel`,c),this._domElement.removeEventListener(`wheel`,u,{passive:!1}),this._domElement.removeEventListener(`contextmenu`,d),this._domElement.ownerDocument.removeEventListener(`pointermove`,s,{passive:!1}),this._domElement.ownerDocument.removeEventListener(`pointerup`,c),this._domElement.ownerDocument.removeEventListener(`pointerlockchange`,h),this._domElement.ownerDocument.removeEventListener(`pointerlockerror`,g))},this.cancel=()=>{this._state!==I.NONE&&(this._state=I.NONE,this._activePointers.length=0,m())},n&&this.connect(n),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction=`none`,this._domElement.style.userSelect=`none`,this._domElement.style.webkitUserSelect=`none`):(this.cancel(),this._domElement.style.touchAction=``,this._domElement.style.userSelect=``,this._domElement.style.webkitUserSelect=``))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=V(e.width,0,1),this._interactiveArea.height=V(e.height,0,1),this._interactiveArea.x=V(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=V(e.y,0,1-this._interactiveArea.height)}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,n=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,n)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,n=!1){this._isUserControllingRotate=!1;let r=V(e,this.minAzimuthAngle,this.maxAzimuthAngle),i=V(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=r,this._sphericalEnd.phi=i,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,n||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let a=!n||U(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&U(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(a)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=L.NONE,this._changedDolly=0,this._dollyToNoClamp(V(e,this.minDistance,this.maxDistance),t)}_dollyToNoClamp(e,t=!1){let n=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){let t=this._collisionTest(),r=U(t,this._spherical.radius);if(!(n>e)&&r)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,t)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let r=!t||U(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(r)}dollyInFixed(e,t=!1){this._targetEnd.add(this._getCameraDirection(yn).multiplyScalar(e)),t||this._target.copy(this._targetEnd);let n=!t||U(this._target.x,this._targetEnd.x,this.restThreshold)&&U(this._target.y,this._targetEnd.y,this.restThreshold)&&U(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._isUserControllingZoom=!1,this._zoomEnd=V(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let n=!t||U(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(n)}pan(e,t,n=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,n)}truck(e,t,n=!1){this._camera.updateMatrix(),J.setFromMatrixColumn(this._camera.matrix,0),Y.setFromMatrixColumn(this._camera.matrix,1),J.multiplyScalar(e),Y.multiplyScalar(-t);let r=K.copy(J).add(Y),i=q.copy(this._targetEnd).add(r);return this.moveTo(i.x,i.y,i.z,n)}forward(e,t=!1){K.setFromMatrixColumn(this._camera.matrix,0),K.crossVectors(this._camera.up,K),K.multiplyScalar(e);let n=q.copy(this._targetEnd).add(K);return this.moveTo(n.x,n.y,n.z,t)}elevate(e,t=!1){return K.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+K.x,this._targetEnd.y+K.y,this._targetEnd.z+K.z,t)}moveTo(e,t,n,r=!1){this._isUserControllingTruck=!1;let i=K.set(e,t,n).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,i,this.boundaryFriction),this._needsUpdate=!0,r||this._target.copy(this._targetEnd);let a=!r||U(this._target.x,this._targetEnd.x,this.restThreshold)&&U(this._target.y,this._targetEnd.y,this.restThreshold)&&U(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}lookInDirectionOf(e,t,n,r=!1){let i=K.set(e,t,n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(i.x,i.y,i.z,r)}fitToBox(e,t,{cover:n=!1,paddingLeft:r=0,paddingRight:i=0,paddingBottom:a=0,paddingTop:o=0}={}){let s=[],c=e.isBox3?Cn.copy(e):Cn.setFromObject(e);c.isEmpty()&&(console.warn(`camera-controls: fitTo() cannot be used with an empty box. Aborting`),Promise.resolve());let l=rn(this._sphericalEnd.theta,en),u=rn(this._sphericalEnd.phi,en);s.push(this.rotateTo(l,u,t));let d=K.setFromSpherical(this._sphericalEnd).normalize(),f=En.setFromUnitVectors(d,_n),p=U(Math.abs(d.y),1);p&&f.multiply(Dn.setFromAxisAngle(gn,l)),f.multiply(this._yAxisUpSpaceInverse);let m=wn.makeEmpty();q.copy(c.min).applyQuaternion(f),m.expandByPoint(q),q.copy(c.min).setX(c.max.x).applyQuaternion(f),m.expandByPoint(q),q.copy(c.min).setY(c.max.y).applyQuaternion(f),m.expandByPoint(q),q.copy(c.max).setZ(c.min.z).applyQuaternion(f),m.expandByPoint(q),q.copy(c.min).setZ(c.max.z).applyQuaternion(f),m.expandByPoint(q),q.copy(c.max).setY(c.min.y).applyQuaternion(f),m.expandByPoint(q),q.copy(c.max).setX(c.min.x).applyQuaternion(f),m.expandByPoint(q),q.copy(c.max).applyQuaternion(f),m.expandByPoint(q),m.min.x-=r,m.min.y-=a,m.max.x+=i,m.max.y+=o,f.setFromUnitVectors(_n,d),p&&f.premultiply(Dn.invert()),f.premultiply(this._yAxisUpSpace);let h=m.getSize(K),g=m.getCenter(q).applyQuaternion(f);if(R(this._camera)){let e=this.getDistanceToFitBox(h.x,h.y,h.z,n);s.push(this.moveTo(g.x,g.y,g.z,t)),s.push(this.dollyTo(e,t)),s.push(this.setFocalOffset(0,0,0,t))}else if(z(this._camera)){let e=this._camera,r=e.right-e.left,i=e.top-e.bottom,a=n?Math.max(r/h.x,i/h.y):Math.min(r/h.x,i/h.y);s.push(this.moveTo(g.x,g.y,g.z,t)),s.push(this.zoomTo(a,t)),s.push(this.setFocalOffset(0,0,0,t))}return Promise.all(s)}fitToSphere(t,n){let r=[],i=`isObject3D`in t?e.createBoundingSphere(t,Tn):Tn.copy(t);if(r.push(this.moveTo(i.center.x,i.center.y,i.center.z,n)),R(this._camera)){let e=this.getDistanceToFitSphere(i.radius);r.push(this.dollyTo(e,n))}else if(z(this._camera)){let e=this._camera.right-this._camera.left,t=this._camera.top-this._camera.bottom,a=2*i.radius,o=Math.min(e/a,t/a);r.push(this.zoomTo(o,n))}return r.push(this.setFocalOffset(0,0,0,n)),Promise.all(r)}setLookAt(e,t,n,r,i,a,o=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=L.NONE,this._changedDolly=0;let s=q.set(r,i,a),c=K.set(e,t,n);this._targetEnd.copy(s),this._sphericalEnd.setFromVector3(c.sub(s).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,o||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let l=!o||U(this._target.x,this._targetEnd.x,this.restThreshold)&&U(this._target.y,this._targetEnd.y,this.restThreshold)&&U(this._target.z,this._targetEnd.z,this.restThreshold)&&U(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&U(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&U(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(l)}lerpLookAt(e,t,n,r,i,a,o,s,c,l,u,d,f,p=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=L.NONE,this._changedDolly=0;let m=K.set(r,i,a),h=q.set(e,t,n);Z.setFromVector3(h.sub(m).applyQuaternion(this._yAxisUpSpace));let g=vn.set(l,u,d),_=q.set(o,s,c);Sn.setFromVector3(_.sub(g).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(m.lerp(g,f));let v=Sn.theta-Z.theta,y=Sn.phi-Z.phi,ee=Sn.radius-Z.radius;this._sphericalEnd.set(Z.radius+ee*f,Z.phi+y*f,Z.theta+v*f),this.normalizeRotations(),this._needsUpdate=!0,p||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let b=!p||U(this._target.x,this._targetEnd.x,this.restThreshold)&&U(this._target.y,this._targetEnd.y,this.restThreshold)&&U(this._target.z,this._targetEnd.z,this.restThreshold)&&U(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&U(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&U(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(b)}setPosition(e,t,n,r=!1){return this.setLookAt(e,t,n,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,r)}setTarget(e,t,n,r=!1){let i=this.getPosition(K),a=this.setLookAt(i.x,i.y,i.z,e,t,n,r);return this._sphericalEnd.phi=V(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),a}setFocalOffset(e,t,n,r=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,t,n),this._needsUpdate=!0,r||this._focalOffset.copy(this._focalOffsetEnd);let i=!r||U(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&U(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&U(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(i)}setOrbitPoint(e,t,n){this._camera.updateMatrixWorld(),J.setFromMatrixColumn(this._camera.matrixWorldInverse,0),Y.setFromMatrixColumn(this._camera.matrixWorldInverse,1),X.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let r=K.set(e,t,n),i=r.distanceTo(this._camera.position),a=r.sub(this._camera.position);J.multiplyScalar(a.x),Y.multiplyScalar(a.y),X.multiplyScalar(a.z),K.copy(J).add(Y).add(X),K.z+=i,this.dollyTo(i,!1),this.setFocalOffset(-K.x,K.y,-K.z,!1),this.moveTo(e,t,n,!1)}setBoundary(e){e?(this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0):(this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0)}setViewport(e,t,n,r){e===null?this._viewport=null:(this._viewport=this._viewport||new W.Vector4,typeof e==`number`?this._viewport.set(e,t,n,r):this._viewport.copy(e))}getDistanceToFitBox(e,t,n,r=!1){if(un(this._camera,`getDistanceToFitBox`))return this._spherical.radius;let i=e/t,a=this._camera.getEffectiveFOV()*nn,o=this._camera.aspect;return((r?i>o:i<o)?t:e/o)*.5/Math.tan(a*.5)+n*.5}getDistanceToFitSphere(e){if(un(this._camera,`getDistanceToFitSphere`))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*nn,n=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,r=1<this._camera.aspect?t:n;return e/Math.sin(r*.5)}getTarget(e,t=!0){return(e&&e.isVector3?e:new W.Vector3).copy(t?this._targetEnd:this._target)}getPosition(e,t=!0){return(e&&e.isVector3?e:new W.Vector3).setFromSpherical(t?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t?this._targetEnd:this._target)}getSpherical(e,t=!0){return(e||new W.Spherical).copy(t?this._sphericalEnd:this._spherical)}getFocalOffset(e,t=!0){return(e&&e.isVector3?e:new W.Vector3).copy(t?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%B,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=B),this._spherical.theta+=B*Math.round((this._sphericalEnd.theta-this._spherical.theta)/B)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!U(this._camera.up.x,this._cameraUp0.x)||!U(this._camera.up.y,this._cameraUp0.y)||!U(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);let e=this.getPosition(K);this.updateCameraUp(),this.setPosition(e.x,e.y,e.z)}let t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,gn),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){let e=K.subVectors(this._target,this._camera.position).normalize(),t=q.crossVectors(e,this._camera.up);this._camera.up.crossVectors(t,e).normalize(),this._camera.updateMatrixWorld();let n=this.getPosition(K);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}update(e){let t=this._sphericalEnd.theta-this._spherical.theta,n=this._sphericalEnd.phi-this._spherical.phi,r=this._sphericalEnd.radius-this._spherical.radius,i=bn.subVectors(this._targetEnd,this._target),a=xn.subVectors(this._focalOffsetEnd,this._focalOffset),o=this._zoomEnd-this._zoom;if(H(t))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{let t=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=sn(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,t,1/0,e),this._needsUpdate=!0}if(H(n))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{let t=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=sn(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,t,1/0,e),this._needsUpdate=!0}if(H(r))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{let t=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=sn(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,t,this.maxSpeed,e),this._needsUpdate=!0}if(H(i.x)&&H(i.y)&&H(i.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{let t=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;cn(this._target,this._targetEnd,this._targetVelocity,t,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(H(a.x)&&H(a.y)&&H(a.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{let t=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;cn(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,t,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(H(o))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{let t=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=sn(this._zoom,this._zoomEnd,this._zoomVelocity,t,1/0,e)}if(this.dollyToCursor){if(R(this._camera)&&this._changedDolly!==0){let e=this._spherical.radius-this._lastDistance,t=this._camera,n=this._getCameraDirection(yn),r=K.copy(n).cross(t.up).normalize();r.lengthSq()===0&&(r.x=1);let i=q.crossVectors(r,n),a=this._sphericalEnd.radius*Math.tan(t.getEffectiveFOV()*nn*.5),o=(this._sphericalEnd.radius-e-this._sphericalEnd.radius)/this._sphericalEnd.radius,s=vn.copy(this._targetEnd).add(r.multiplyScalar(this._dollyControlCoord.x*a*t.aspect)).add(i.multiplyScalar(this._dollyControlCoord.y*a)),c=K.copy(this._targetEnd).lerp(s,o),l=this._lastDollyDirection===L.IN&&this._spherical.radius<=this.minDistance,u=this._lastDollyDirection===L.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(l||u)){this._sphericalEnd.radius-=e,this._spherical.radius-=e;let t=q.copy(n).multiplyScalar(-e);c.add(t)}this._boundary.clampPoint(c,c);let d=q.subVectors(c,this._targetEnd);this._targetEnd.copy(c),this._target.add(d),this._changedDolly-=e,H(this._changedDolly)&&(this._changedDolly=0)}else if(z(this._camera)&&this._changedZoom!==0){let e=this._zoom-this._lastZoom,t=this._camera,n=K.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(t.near+t.far)/(t.near-t.far)).unproject(t),r=q.set(0,0,-1).applyQuaternion(t.quaternion),i=vn.copy(n).add(r.multiplyScalar(-n.dot(t.up))),a=-(this._zoom-e-this._zoom)/this._zoom,o=this._getCameraDirection(yn),s=this._targetEnd.dot(o),c=K.copy(this._targetEnd).lerp(i,a),l=c.dot(o),u=o.multiplyScalar(l-s);c.sub(u),this._boundary.clampPoint(c,c);let d=q.subVectors(c,this._targetEnd);this._targetEnd.copy(c),this._target.add(d),this._changedZoom-=e,H(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;let s=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,s),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),H(this._focalOffset.x)&&H(this._focalOffset.y)&&H(this._focalOffset.z)||(this._camera.updateMatrixWorld(),J.setFromMatrixColumn(this._camera.matrix,0),Y.setFromMatrixColumn(this._camera.matrix,1),X.setFromMatrixColumn(this._camera.matrix,2),J.multiplyScalar(this._focalOffset.x),Y.multiplyScalar(-this._focalOffset.y),X.multiplyScalar(this._focalOffset.z),K.copy(J).add(Y).add(X),this._camera.position.add(K)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),K.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let c=this._needsUpdate;return c&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:`wake`}),this.dispatchEvent({type:`update`})):c?(this.dispatchEvent({type:`update`}),H(t,this.restThreshold)&&H(n,this.restThreshold)&&H(r,this.restThreshold)&&H(i.x,this.restThreshold)&&H(i.y,this.restThreshold)&&H(i.z,this.restThreshold)&&H(a.x,this.restThreshold)&&H(a.y,this.restThreshold)&&H(a.z,this.restThreshold)&&H(o,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:`rest`}))):!c&&this._updatedLastTime&&this.dispatchEvent({type:`sleep`}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=c,this._needsUpdate=!1,c}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:an(this.maxDistance),minZoom:this.minZoom,maxZoom:an(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:an(this.maxPolarAngle),minAzimuthAngle:an(this.minAzimuthAngle),maxAzimuthAngle:an(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:K.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let n=JSON.parse(e);this.enabled=n.enabled,this.minDistance=n.minDistance,this.maxDistance=on(n.maxDistance),this.minZoom=n.minZoom,this.maxZoom=on(n.maxZoom),this.minPolarAngle=n.minPolarAngle,this.maxPolarAngle=on(n.maxPolarAngle),this.minAzimuthAngle=on(n.minAzimuthAngle),this.maxAzimuthAngle=on(n.maxAzimuthAngle),this.smoothTime=n.smoothTime,this.draggingSmoothTime=n.draggingSmoothTime,this.dollySpeed=n.dollySpeed,this.truckSpeed=n.truckSpeed,this.dollyToCursor=n.dollyToCursor,this.verticalDragToForward=n.verticalDragToForward,this._target0.fromArray(n.target0),this._position0.fromArray(n.position0),this._zoom0=n.zoom0,this._focalOffset0.fromArray(n.focalOffset0),this.moveTo(n.target[0],n.target[1],n.target[2],t),Z.setFromVector3(K.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(Z.theta,Z.phi,t),this.dollyTo(Z.radius,t),this.zoomTo(n.zoom,t),this.setFocalOffset(n.focalOffset[0],n.focalOffset[1],n.focalOffset[2],t),this._needsUpdate=!0}connect(e){this._domElement?console.warn(`camera-controls is already connected.`):(e.setAttribute(`data-camera-controls-version`,fn),this._addAllEventListeners(e),this._getClientRect(this._elementRect))}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&=(this._domElement.removeAttribute(`data-camera-controls-version`),void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(t=>t.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(t=>t.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,t,n){let r=t.lengthSq();if(r===0)return e;let i=q.copy(t).add(e),a=this._boundary.clampPoint(i,vn).sub(i),o=a.lengthSq();if(o===0)return e.add(t);if(o===r)return e;if(n===0)return e.add(t).add(a);{let r=1+n*o/t.dot(a);return e.add(q.copy(t).multiplyScalar(r)).add(a.multiplyScalar(1-n))}}_updateNearPlaneCorners(){if(R(this._camera)){let e=this._camera,t=e.near,n=e.getEffectiveFOV()*nn,r=Math.tan(n*.5)*t,i=r*e.aspect;this._nearPlaneCorners[0].set(-i,-r,0),this._nearPlaneCorners[1].set(i,-r,0),this._nearPlaneCorners[2].set(i,r,0),this._nearPlaneCorners[3].set(-i,r,0)}else if(z(this._camera)){let e=this._camera,t=1/e.zoom,n=e.left*t,r=e.right*t,i=e.top*t,a=e.bottom*t;this._nearPlaneCorners[0].set(n,i,0),this._nearPlaneCorners[1].set(r,i,0),this._nearPlaneCorners[2].set(r,a,0),this._nearPlaneCorners[3].set(n,a,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||un(this._camera,`_collisionTest`))return e;let t=this._getTargetDirection(yn);On.lookAt(hn,t,this._camera.up);for(let n=0;n<4;n++){let r=q.copy(this._nearPlaneCorners[n]);r.applyMatrix4(On);let i=vn.addVectors(this._target,r);kn.set(i,t),kn.far=this._spherical.radius+1;let a=kn.intersectObjects(this.colliderMeshes);a.length!==0&&a[0].distance<e&&(e=a[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:`transitionstart`}),new Promise(e=>{let t=()=>{this.removeEventListener(`rest`,t),e()};this.addEventListener(`rest`,t)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(`.dampingFactor has been deprecated. use smoothTime (in seconds) instead.`),0}set dampingFactor(e){console.warn(`.dampingFactor has been deprecated. use smoothTime (in seconds) instead.`)}get draggingDampingFactor(){return console.warn(`.draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.`),0}set draggingDampingFactor(e){console.warn(`.draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.`)}static createBoundingSphere(e,t=new W.Sphere){let n=t,r=n.center;Cn.makeEmpty(),e.traverseVisible(e=>{e.isMesh&&Cn.expandByObject(e)}),Cn.getCenter(r);let i=0;return e.traverseVisible(e=>{if(!e.isMesh)return;let t=e,n=t.geometry.clone();n.applyMatrix4(t.matrixWorld);let a=n.attributes.position;for(let e=0,t=a.count;e<t;e++)K.fromBufferAttribute(a,e),i=Math.max(i,r.distanceToSquared(K))}),n.radius=Math.sqrt(i),n}};function An(e){var t=e,{smoothTime:n=.05}=t,r=k(t,[`smoothTime`]);Q.install({THREE:ee}),ne({CameraControls:Q});let i=T(e=>e.camera),a=T(e=>e.gl),o=$t(r),[s,c]=(0,j.useState)(!1);return(0,j.useEffect)(()=>{let e=o.current;if(!e)return;let{type:t,onCameraUpdate:n}=r||{};if(!n)return;let i=e=>Math.round(e*180/Math.PI),a=()=>({cAzimuthAngle:i(e.azimuthAngle),cPolarAngle:i(e.polarAngle)}),s=()=>{let n={};if(t===`sphere`){let t=e?.zoom;if(Number.isFinite(t))n.cameraZoom=Number(t.toFixed(2));else{let t=e?.camera?.zoom;Number.isFinite(t)&&(n.cameraZoom=Number(t.toFixed(2)))}}else Number.isFinite(e.distance)&&(n.cDistance=Number(e.distance.toFixed(2)));return n},l=()=>{c(!0)},u=()=>{c(!1),n(O(O({},a()),s()))};return e.addEventListener(`controlstart`,l),e.addEventListener(`rest`,u),()=>{e.removeEventListener(`controlstart`,l),e.removeEventListener(`rest`,u)}},[o,r]),(0,E.jsx)(`cameraControls`,{ref:o,args:[i,a.domElement],smoothTime:s?0:n,zoomSpeed:10,dollySpeed:5,maxDistance:1e3,restThreshold:.01,mouseButtons:{left:Q.ACTION.ROTATE,middle:r.type===`sphere`?Q.ACTION.ZOOM:Q.ACTION.DOLLY,right:Q.ACTION.NONE,wheel:r.type===`sphere`?Q.ACTION.ZOOM:Q.ACTION.DOLLY},touches:{one:Q.ACTION.ROTATE,two:Q.ACTION.NONE,three:Q.ACTION.NONE}})}function jn(e){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(An,O({},e))})}var Mn=class extends r{constructor(e){super(e),this.type=C}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.RGBELoader: Read Error: `+(t||``));case 2:throw Error(`THREE.RGBELoader: Write Error: `+(t||``));case 3:throw Error(`THREE.RGBELoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.RGBELoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(n!==!1&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),l!==!1;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=pe.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=pe.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=pe.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=pe.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let l=r(s),u=l.width,d=l.height,f=i(s.subarray(s.pos),u,d),p,m,h;switch(this.type){case c:h=f.length/4;let e=new Float32Array(h*4);for(let t=0;t<h;t++)a(f,t*4,e,t*4);p=e,m=c;break;case C:h=f.length/4;let t=new Uint16Array(h*4);for(let e=0;e<h;e++)o(f,e*4,t,e*4);p=t,m=C;break;default:throw Error(`THREE.RGBELoader: Unsupported type: `+this.type)}return{width:u,height:d,data:p,header:l.string,gamma:l.gamma,exposure:l.exposure,type:m}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case c:case C:`colorSpace`in e?e.colorSpace=`srgb-linear`:e.encoding=3e3,e.minFilter=s,e.magFilter=s,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}};new b,new w,parseInt(`186`.replace(/\D+/g,``)),new S,new w,new w,new S,new S,new S,new w,new he,new o,new w,new b,new _,new S;function Nn(e,{path:t}){return se(Mn,e,e=>e.setPath(t))}function Pn(e=!0,t=.1,n=`0px`){let[r,i]=(0,j.useState)(!e),a=(0,j.useRef)(null);return(0,j.useEffect)(()=>{if(!e)return;let r=new IntersectionObserver(([e])=>{i(e.isIntersecting)},{threshold:t,rootMargin:n});return a.current&&r.observe(a.current),()=>r.disconnect()},[e,t,n]),{isInView:r,containerRef:a}}var Fn=(0,j.createContext)({}),In=()=>(0,j.useContext)(Fn);function Ln({children:e,style:t={},pixelDensity:n=1,fov:r=45,pointerEvents:i,className:a,envBasePath:o,lazyLoad:s=!0,threshold:c=.1,rootMargin:l=`0px`,preserveDrawingBuffer:u,powerPreference:d}){let{isInView:f,containerRef:p}=Pn(s,c,l),m=(0,j.useMemo)(()=>({envBasePath:o}),[o]);return Rn(),(0,E.jsx)(`div`,{ref:p,style:O({width:`100%`,height:`100%`},t),children:(!s||f)&&(0,E.jsx)(Fn.Provider,{value:m,children:(0,E.jsx)(ue,Ne(O({id:`gradientCanvas`,style:{pointerEvents:i},resize:{offsetSize:!0},className:a},Xt(n,r,{preserveDrawingBuffer:u,powerPreference:d})),{children:e}),n+r)})})}function Rn(){(0,j.useEffect)(()=>{y.uv2_pars_vertex=``,y.uv2_vertex=``,y.uv2_pars_fragment=``,y.encodings_fragment=``},[])}var zn=e=>e.current&&e.current.isScene,Bn=e=>zn(e)?e.current:e;function Vn({background:e=!1,envPreset:t}){let{envBasePath:n}=In(),r=n||`https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/`,i={city:Nn(`city.hdr`,{path:r}),dawn:Nn(`dawn.hdr`,{path:r}),lobby:Nn(`lobby.hdr`,{path:r})}[t],a=T(e=>e.scene);j.useLayoutEffect(()=>{if(i){let t=Bn(a);t.background;let n=t.environment;return e!==`only`&&(t.environment=i),e&&(t.background=i),()=>{e!==`only`&&(t.environment=n),e&&(t.background=`black`)}}},[a,i,e]);let o=i;return o.mapping=303,null}function Hn({lightType:e,brightness:t,envPreset:n}){return(0,E.jsxs)(E.Fragment,{children:[e===`3d`&&(0,E.jsx)(`ambientLight`,{intensity:(t||1)*Math.PI}),e===`env`&&(0,E.jsx)(j.Suspense,{fallback:(0,E.jsx)(Un,{}),children:(0,E.jsx)(Vn,{envPreset:n,background:!1,loadingCallback:()=>{}})})]})}function Un(){return(0,E.jsx)(`ambientLight`,{intensity:.4})}function Wn(e,t){let n=T(e=>e.pointer),[r]=j.useState(()=>{let r=new l;return t&&ae(r,t,{}),function(t,i){r.setFromCamera(n,e instanceof te?e:e.current);let a=this.constructor.prototype.raycast.bind(this);a&&a(r,i)}});return r}function Gn(e,t,n){let{gl:r,size:i,viewport:a}=T(),o=typeof e==`number`?e:i.width*a.dpr,c=typeof t==`number`?t:i.height*a.dpr,l=(typeof e==`number`?n:e)||{},{samples:u}=l,d=k(l,[`samples`]),f=j.useMemo(()=>{let e;return e=new x(o,c,O({minFilter:s,magFilter:s,encoding:r.outputEncoding,type:C},d)),e.samples=u,e},[]);return j.useLayoutEffect(()=>{f.setSize(o,c),u&&(f.samples=u)},[u,f,o,c]),j.useEffect(()=>()=>f.dispose(),[]),f}function Kn(e,t){if(typeof e==`function`)return e(t);e&&(e.current=t)}function qn(e){return t=>{for(let n of e)Kn(n,t)}}var Jn=e=>typeof e==`function`,Yn=j.forwardRef((e,t)=>{var n=e,{envMap:r,resolution:i=256,frames:a=1/0,children:o,makeDefault:s}=n,c=k(n,[`envMap`,`resolution`,`frames`,`children`,`makeDefault`]);let l=T(({set:e})=>e),u=T(({camera:e})=>e),d=T(({size:e})=>e),f=j.useRef(null),p=j.useRef(null),m=Gn(i);j.useLayoutEffect(()=>{c.manual||f.current.updateProjectionMatrix()},[d,c]),j.useLayoutEffect(()=>{f.current.updateProjectionMatrix()}),j.useLayoutEffect(()=>{if(s){let e=u;return l(()=>({camera:f.current})),()=>l(()=>({camera:e}))}},[f,s,l]);let h=0,_=null,v=Jn(o);return g(e=>{v&&(a===1/0||h<a)&&(p.current.visible=!1,e.gl.setRenderTarget(m),_=e.scene.background,r&&(e.scene.background=r),e.gl.render(e.scene,f.current),e.scene.background=_,e.gl.setRenderTarget(null),p.current.visible=!0,h++)}),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`orthographicCamera`,Ne(O({left:d.width/-2,right:d.width/2,top:d.height/2,bottom:d.height/-2,ref:qn([f,t])},c),{children:!v&&o})),(0,E.jsx)(`group`,{ref:p,children:v&&o(m.texture)})]})}),Xn=j.createContext({}),Zn=()=>j.useContext(Xn),Qn=2*Math.PI,$n=new f,er=new he,[$,tr]=[new m,new m],nr=new w,rr=new w,ir=e=>`minPolarAngle`in e,ar=({alignment:e=`bottom-right`,margin:t=[80,80],renderPriority:n=0,autoClear:r=!0,onUpdate:i,onTarget:a,children:o})=>{let s=T(({size:e})=>e),c=T(({camera:e})=>e),l=T(({controls:e})=>e),u=T(({gl:e})=>e),d=T(({scene:e})=>e),f=T(({invalidate:e})=>e),p=j.useRef(),m=j.useRef(),h=j.useRef(null),[_]=j.useState(()=>new de),v=j.useRef(!1),y=j.useRef(0),ee=j.useRef(new w(0,0,0)),b=j.useRef(new w(0,0,0));j.useEffect(()=>{b.current.copy(c.up)},[c]);let te=j.useCallback(e=>{v.current=!0,(l||a)&&(ee.current=l?.target||a?.()),y.current=c.position.distanceTo(nr),$.copy(c.quaternion),rr.copy(e).multiplyScalar(y.current).add(nr),$n.lookAt(rr),tr.copy($n.quaternion),f()},[l,c,a,f]);j.useEffect(()=>(d.background&&(p.current=d.background,d.background=null,_.background=p.current),()=>{p.current&&(d.background=p.current)}),[]),g((e,t)=>{var n;if(h.current&&m.current){if(v.current){if($.angleTo(tr)<.01)v.current=!1,ir(l)&&c.up.copy(b.current);else{let e=t*Qn;$.rotateTowards(tr,e),c.position.set(0,0,1).applyQuaternion($).multiplyScalar(y.current).add(ee.current),c.up.set(0,1,0).applyQuaternion($).normalize(),c.quaternion.copy($),i?i():l&&l.update(),f()}}er.copy(c.matrix).invert(),(n=m.current)==null||n.quaternion.setFromRotationMatrix(er),r&&(u.autoClear=!1),u.clearDepth(),u.render(_,h.current)}},n);let x=Wn(h),S=j.useMemo(()=>({tweenCamera:te,raycast:x}),[te]),[ne,C]=t,re=e.endsWith(`-center`)?0:e.endsWith(`-left`)?-s.width/2+ne:s.width/2-ne,ie=e.startsWith(`center-`)?0:e.startsWith(`top-`)?s.height/2-C:-s.height/2+C;return le((0,E.jsxs)(Xn.Provider,{value:S,children:[(0,E.jsx)(Yn,{ref:h,position:[0,0,200]}),(0,E.jsx)(`group`,{ref:m,position:[re,ie,0],children:o})]}),_)};function or({scale:e=[.8,.05,.05],color:t,rotation:n}){return(0,E.jsx)(`group`,{rotation:n,children:(0,E.jsxs)(`mesh`,{position:[.4,0,0],children:[(0,E.jsx)(`boxGeometry`,{args:e}),(0,E.jsx)(`meshBasicMaterial`,{color:t,toneMapped:!1})]})})}function sr(e){var t=e,{onClick:n,font:r,disabled:i,arcStyle:a,label:o,labelColor:s,axisHeadScale:c=1}=t,l=k(t,[`onClick`,`font`,`disabled`,`arcStyle`,`label`,`labelColor`,`axisHeadScale`]);let u=T(e=>e.gl),d=j.useMemo(()=>{let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);return t.beginPath(),t.arc(32,32,16,0,2*Math.PI),t.closePath(),t.fillStyle=a,t.fill(),o&&(t.font=r,t.textAlign=`center`,t.fillStyle=s,t.fillText(o,32,41)),new h(e)},[a,o,s,r]),[f,p]=j.useState(!1),m=(o?1:.75)*(f?1.2:1)*c;return(0,E.jsx)(`sprite`,Ne(O({scale:m,onPointerOver:i?void 0:e=>{e.stopPropagation(),p(!0)},onPointerOut:i?void 0:n||(e=>{e.stopPropagation(),p(!1)})},l),{children:(0,E.jsx)(`spriteMaterial`,{map:d,"map-encoding":u.outputEncoding,"map-anisotropy":u.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:o?1:.75,toneMapped:!1})}))}var cr=e=>{var t=e,{hideNegativeAxes:n,hideAxisHeads:r,disabled:i,font:a=`18px Inter var, Arial, sans-serif`,axisColors:o=[`#ff2060`,`#20df80`,`#2080ff`],axisHeadScale:s=1,axisScale:c,labels:l=[`X`,`Y`,`Z`],labelColor:u=`#000`,onClick:d}=t,f=k(t,[`hideNegativeAxes`,`hideAxisHeads`,`disabled`,`font`,`axisColors`,`axisHeadScale`,`axisScale`,`labels`,`labelColor`,`onClick`]);let[p,m,h]=o,{tweenCamera:g,raycast:_}=Zn(),v={font:a,disabled:i,labelColor:u,raycast:_,onClick:d,axisHeadScale:s,onPointerDown:i?void 0:e=>{g(e.object.position),e.stopPropagation()}};return(0,E.jsxs)(`group`,Ne(O({scale:40},f),{children:[(0,E.jsx)(or,{color:p,rotation:[0,0,0],scale:c}),(0,E.jsx)(or,{color:m,rotation:[0,0,Math.PI/2],scale:c}),(0,E.jsx)(or,{color:h,rotation:[0,-Math.PI/2,0],scale:c}),!r&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(sr,O({arcStyle:p,position:[1,0,0],label:l[0]},v)),(0,E.jsx)(sr,O({arcStyle:m,position:[0,1,0],label:l[1]},v)),(0,E.jsx)(sr,O({arcStyle:h,position:[0,0,1],label:l[2]},v)),!n&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(sr,O({arcStyle:p,position:[-1,0,0]},v)),(0,E.jsx)(sr,O({arcStyle:m,position:[0,-1,0]},v)),(0,E.jsx)(sr,O({arcStyle:h,position:[0,0,-1]},v))]})]}),(0,E.jsx)(`ambientLight`,{intensity:.5}),(0,E.jsx)(`pointLight`,{position:[10,10,10],intensity:.5})]}))};function lr({margin:e=[65,110]}){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(ar,{alignment:`bottom-right`,margin:e,renderPriority:2,children:(0,E.jsx)(cr,{axisColors:[`#FF430A`,`#FF430A`,`#FF430A`],labelColor:`white`,hideNegativeAxes:!0,axisHeadScale:.8})})})}var ur={halo:{title:`Halo`,color:`white`,props:{type:`plane`,uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,axesHelper:`off`,brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:`#ff5005`,color2:`#dbba95`,color3:`#d0bce1`,embedMode:`off`,envPreset:`city`,gizmoHelper:`hide`,grain:`on`,lightType:`3d`,pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:`defaults`,animate:`on`,wireframe:!1}},pensive:{title:`Pensive`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`off`,brightness:1.5,cAzimuthAngle:250,cDistance:1.5,cPolarAngle:140,cameraZoom:12.5,color1:`#809bd6`,color2:`#910aff`,color3:`#af38ff`,embedMode:`off`,envPreset:`city`,gizmoHelper:`hide`,grain:`on`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.5,rotationX:0,rotationY:0,rotationZ:140,shader:`defaults`,type:`sphere`,uAmplitude:7,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.4,uTime:0,wireframe:!1}},mint:{title:`Mint`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`off`,brightness:1.2,cAzimuthAngle:170,cDistance:4.4,cPolarAngle:70,cameraZoom:1,color1:`#94ffd1`,color2:`#6bf5ff`,color3:`#ffffff`,embedMode:`off`,envPreset:`city`,gizmoHelper:`hide`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:.9,positionZ:-.3,reflection:.1,rotationX:45,rotationY:0,rotationZ:0,shader:`defaults`,type:`waterPlane`,uAmplitude:0,uDensity:1.2,uFrequency:0,uSpeed:.2,uStrength:3.4,uTime:0,wireframe:!1}},interstella:{title:`Interstella`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`off`,brightness:.8,cAzimuthAngle:270,cDistance:.5,cPolarAngle:180,cameraZoom:15.1,color1:`#73bfc4`,color2:`#ff810a`,color3:`#8da0ce`,embedMode:`off`,envPreset:`city`,gizmoHelper:`hide`,grain:`on`,lightType:`env`,pixelDensity:1,fov:45,positionX:-.1,positionY:0,positionZ:0,reflection:.4,rotationX:0,rotationY:130,rotationZ:70,shader:`defaults`,type:`sphere`,uAmplitude:3.2,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.3,uTime:0,wireframe:!1}},nightyNight:{title:`Nighty night`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`off`,brightness:1,cAzimuthAngle:180,cDistance:2.8,cPolarAngle:80,cameraZoom:9.1,color1:`#606080`,color2:`#8d7dca`,color3:`#212121`,embedMode:`off`,envPreset:`city`,gizmoHelper:`hide`,grain:`on`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.1,rotationX:50,rotationY:0,rotationZ:-60,shader:`defaults`,type:`waterPlane`,uAmplitude:0,uDensity:1.5,uFrequency:0,uSpeed:.3,uStrength:1.5,uTime:8,wireframe:!1}},violaOrientalis:{title:`Viola`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`on`,brightness:1.1,cAzimuthAngle:0,cDistance:7.1,cPolarAngle:140,cameraZoom:17.3,color1:`#ffffff`,color2:`#ffbb00`,color3:`#0700ff`,embedMode:`off`,envPreset:`city`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:0,rotationZ:0,shader:`defaults`,type:`sphere`,uAmplitude:1.4,uDensity:1.1,uSpeed:.1,uStrength:1,uTime:0,uFrequency:5.5,wireframe:!1}},universe:{title:`Universe`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`on`,brightness:1.1,cAzimuthAngle:180,cDistance:3.9,cPolarAngle:115,cameraZoom:1,color1:`#5606ff`,color2:`#fe8989`,color3:`#000000`,embedMode:`off`,envPreset:`city`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:-.5,positionY:.1,positionZ:0,reflection:.1,rotationX:0,rotationY:0,rotationZ:235,shader:`defaults`,type:`waterPlane`,uAmplitude:0,uDensity:1.1,uSpeed:.1,uStrength:2.4,uTime:.2,uFrequency:5.5,wireframe:!1}},sunset:{title:`Sunset`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`on`,bgColor1:`#000000`,bgColor2:`#000000`,brightness:1.5,cAzimuthAngle:60,cDistance:7.1,cPolarAngle:90,cameraZoom:15.3,color1:`#ff7a33`,color2:`#33a0ff`,color3:`#ffc53d`,embedMode:`off`,envPreset:`dawn`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:-.15,positionZ:0,reflection:.1,rotationX:0,rotationY:0,rotationZ:0,shader:`defaults`,type:`sphere`,uAmplitude:1.4,uDensity:1.1,uSpeed:.1,uStrength:.4,uTime:0,uFrequency:5.5,wireframe:!1}},mandarin:{title:`Mandarin`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`on`,bgColor1:`#000000`,bgColor2:`#000000`,brightness:1.2,cAzimuthAngle:180,cDistance:2.4,cPolarAngle:95,cameraZoom:1,color1:`#ff6a1a`,color2:`#c73c00`,color3:`#FD4912`,embedMode:`off`,envPreset:`city`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:-2.1,positionZ:0,reflection:.1,rotationX:0,rotationY:0,rotationZ:225,shader:`defaults`,type:`waterPlane`,uAmplitude:0,uDensity:1.8,uSpeed:.2,uStrength:3,uTime:.2,uFrequency:5.5,wireframe:!1}},cottonCandy:{title:`Cotton Candy`,color:`white`,props:{range:`disabled`,rangeStart:0,rangeEnd:40,frameRate:10,destination:`onCanvas`,format:`gif`,animate:`on`,axesHelper:`off`,brightness:1.2,cAzimuthAngle:180,cDistance:2.9,cPolarAngle:120,cameraZoom:1,color1:`#ebedff`,color2:`#f3f2f8`,color3:`#dbf8ff`,embedMode:`off`,envPreset:`city`,grain:`off`,lightType:`3d`,pixelDensity:1,fov:45,positionX:0,positionY:1.8,positionZ:0,reflection:.1,rotationX:0,rotationY:0,rotationZ:-90,shader:`defaults`,type:`waterPlane`,uAmplitude:0,uDensity:1,uSpeed:.3,uStrength:3,uTime:.2,uFrequency:5.5,wireframe:!1}}};Object.values(ur);var dr=Pe((e,t)=>{t.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}),fr=Pe((e,t)=>{var n=`%[a-f0-9]{2}`,r=RegExp(`(`+n+`)|([^%]+?)`,`gi`),i=RegExp(`(`+n+`)+`,`gi`);function a(e,t){try{return[decodeURIComponent(e.join(``))]}catch{}if(e.length===1)return e;t||=1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function o(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(r)||[],n=1;n<t.length;n++)e=a(t,n).join(``),t=e.match(r)||[];return e}}function s(e){for(var t={"%FE%FF":`��`,"%FF%FE":`��`},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=o(n[0]);r!==n[0]&&(t[n[0]]=r)}n=i.exec(e)}t[`%C2`]=`�`;for(var a=Object.keys(t),s=0;s<a.length;s++){var c=a[s];e=e.replace(new RegExp(c,`g`),t[c])}return e}t.exports=function(e){if(typeof e!=`string`)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g,` `),decodeURIComponent(e)}catch{return s(e)}}}),pr=Pe((e,t)=>{t.exports=(e,t)=>{if(typeof e!=`string`||typeof t!=`string`)throw TypeError("Expected the arguments to be of type `string`");if(t===``)return[e];let n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]}}),mr=Pe((e,t)=>{t.exports=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),a=0;a<r.length;a++){var o=r[a],s=e[o];(i?t.indexOf(o)!==-1:t(o,s,e))&&(n[o]=s)}return n}}),hr=Ie(Pe(e=>{var t=dr(),n=fr(),r=pr(),i=mr(),a=e=>e==null,o=Symbol(`encodeFragmentIdentifier`);function s(e){switch(e.arrayFormat){case`index`:return t=>(n,r)=>{let i=n.length;return r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===``?n:r===null?[...n,[u(t,e),`[`,i,`]`].join(``)]:[...n,[u(t,e),`[`,u(i,e),`]=`,u(r,e)].join(``)]};case`bracket`:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===``?n:r===null?[...n,[u(t,e),`[]`].join(``)]:[...n,[u(t,e),`[]=`,u(r,e)].join(``)];case`colon-list-separator`:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===``?n:r===null?[...n,[u(t,e),`:list=`].join(``)]:[...n,[u(t,e),`:list=`,u(r,e)].join(``)];case`comma`:case`separator`:case`bracket-separator`:{let t=e.arrayFormat===`bracket-separator`?`[]=`:`=`;return n=>(r,i)=>i===void 0||e.skipNull&&i===null||e.skipEmptyString&&i===``?r:(i=i===null?``:i,r.length===0?[[u(n,e),t,u(i,e)].join(``)]:[[r,u(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===``?n:r===null?[...n,u(t,e)]:[...n,[u(t,e),`=`,u(r,e)].join(``)]}}function c(e){let t;switch(e.arrayFormat){case`index`:return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,``),t?(r[e]===void 0&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case`bracket`:return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,``),t?r[e]===void 0?r[e]=[n]:r[e]=[].concat(r[e],n):r[e]=n};case`colon-list-separator`:return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,``),t?r[e]===void 0?r[e]=[n]:r[e]=[].concat(r[e],n):r[e]=n};case`comma`:case`separator`:return(t,n,r)=>{let i=typeof n==`string`&&n.includes(e.arrayFormatSeparator),a=typeof n==`string`&&!i&&d(n,e).includes(e.arrayFormatSeparator);n=a?d(n,e):n,r[t]=i||a?n.split(e.arrayFormatSeparator).map(t=>d(t,e)):n===null?n:d(n,e)};case`bracket-separator`:return(t,n,r)=>{let i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,``),!i){r[t]=n&&d(n,e);return}let a=n===null?[]:n.split(e.arrayFormatSeparator).map(t=>d(t,e));r[t]===void 0?r[t]=a:r[t]=[].concat(r[t],a)};default:return(e,t,n)=>{n[e]=n[e]===void 0?t:[].concat(n[e],t)}}}function l(e){if(typeof e!=`string`||e.length!==1)throw TypeError(`arrayFormatSeparator must be single character string`)}function u(e,n){return n.encode?n.strict?t(e):encodeURIComponent(e):e}function d(e,t){return t.decode?n(e):e}function f(e){return Array.isArray(e)?e.sort():typeof e==`object`?f(Object.keys(e)).sort((e,t)=>Number(e)-Number(t)).map(t=>e[t]):e}function p(e){let t=e.indexOf(`#`);return t!==-1&&(e=e.slice(0,t)),e}function m(e){let t=``,n=e.indexOf(`#`);return n!==-1&&(t=e.slice(n)),t}function h(e){e=p(e);let t=e.indexOf(`?`);return t===-1?``:e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e==`string`&&e.trim()!==``?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()===`true`||e.toLowerCase()===`false`)&&(e=e.toLowerCase()===`true`),e}function _(e,t){t=Object.assign({decode:!0,sort:!0,arrayFormat:`none`,arrayFormatSeparator:`,`,parseNumbers:!1,parseBooleans:!1},t),l(t.arrayFormatSeparator);let n=c(t),i=Object.create(null);if(typeof e!=`string`||(e=e.trim().replace(/^[?#&]/,``),!e))return i;for(let a of e.split(`&`)){if(a===``)continue;let[e,o]=r(t.decode?a.replace(/\+/g,` `):a,`=`);o=o===void 0?null:[`comma`,`separator`,`bracket-separator`].includes(t.arrayFormat)?o:d(o,t),n(d(e,t),o,i)}for(let e of Object.keys(i)){let n=i[e];if(typeof n==`object`&&n)for(let e of Object.keys(n))n[e]=g(n[e],t);else i[e]=g(n,t)}return t.sort===!1?i:(t.sort===!0?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let n=i[t];return e[t]=n&&typeof n==`object`&&!Array.isArray(n)?f(n):n,e},Object.create(null))}e.extract=h,e.parse=_,e.stringify=(e,t)=>{if(!e)return``;t=Object.assign({encode:!0,strict:!0,arrayFormat:`none`,arrayFormatSeparator:`,`},t),l(t.arrayFormatSeparator);let n=n=>t.skipNull&&a(e[n])||t.skipEmptyString&&e[n]===``,r=s(t),i={};for(let t of Object.keys(e))n(t)||(i[t]=e[t]);let o=Object.keys(i);return t.sort!==!1&&o.sort(t.sort),o.map(n=>{let i=e[n];return i===void 0?``:i===null?u(n,t):Array.isArray(i)?i.length===0&&t.arrayFormat===`bracket-separator`?u(n,t)+`[]`:i.reduce(r(n),[]).join(`&`):u(n,t)+`=`+u(i,t)}).filter(e=>e.length>0).join(`&`)},e.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[n,i]=r(e,`#`);return Object.assign({url:n.split(`?`)[0]||``,query:_(h(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},e.stringifyUrl=(t,n)=>{n=Object.assign({encode:!0,strict:!0,[o]:!0},n);let r=p(t.url).split(`?`)[0]||``,i=e.extract(t.url),a=e.parse(i,{sort:!1}),s=Object.assign(a,t.query),c=e.stringify(s,n);c&&=`?${c}`;let l=m(t.url);return t.fragmentIdentifier&&(l=`#${n[o]?u(t.fragmentIdentifier,n):t.fragmentIdentifier}`),`${r}${c}${l}`},e.pick=(t,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[o]:!1},r);let{url:a,query:s,fragmentIdentifier:c}=e.parseUrl(t,r);return e.stringifyUrl({url:a,query:i(s,n),fragmentIdentifier:c},r)},e.exclude=(t,n,r)=>{let i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return e.pick(t,i,r)}})());function gr(e){let t=O(O({},ur.halo.props),e),{control:n,urlString:r,onCameraUpdate:i}=t,a=k(t,[`control`,`urlString`,`onCameraUpdate`]);n===`query`&&(a=hr.parse(Ot(r),{parseNumbers:!0,parseBooleans:!0,arrayFormat:`index`}));let o=a,{lightType:s,envPreset:c,brightness:l,grain:u,toggleAxis:d}=o;return k(o,[`lightType`,`envPreset`,`brightness`,`grain`,`toggleAxis`]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(kt,O({},a)),(0,E.jsx)(Hn,{lightType:s,brightness:l,envPreset:c}),u!==`off`&&(0,E.jsx)(Yt,{}),d&&(0,E.jsx)(lr,{}),(0,E.jsx)(jn,Ne(O({},a),{onCameraUpdate:i}))]})}var _r={hero:{type:`waterPlane`,uSpeed:.2,uStrength:3,uDensity:1.6,uFrequency:5.5,uAmplitude:0,color1:`#e30613`,color2:`#b0120a`,color3:`#ff8a4c`,positionX:0,positionY:-1.2,rotationZ:225,cAzimuthAngle:180,cPolarAngle:95,cDistance:2.6,brightness:.95},finance:{type:`waterPlane`,uSpeed:.18,uStrength:2.4,uDensity:1.2,uFrequency:5.5,uAmplitude:0,color1:`#ffd57b`,color2:`#fff1cf`,color3:`#ffb84d`,positionX:0,positionY:.9,rotationX:45,rotationZ:0,cAzimuthAngle:170,cPolarAngle:70,cDistance:4.4,brightness:1.2},dark:{type:`waterPlane`,uSpeed:.15,uStrength:2.6,uDensity:1.4,uFrequency:5.5,uAmplitude:0,color1:`#e30613`,color2:`#5c0a0a`,color3:`#161616`,positionX:-.5,positionY:.1,rotationZ:235,cAzimuthAngle:180,cPolarAngle:115,cDistance:3.9,brightness:1.1},sunset:{type:`plane`,uSpeed:.3,uStrength:4,uDensity:1.3,uFrequency:5.5,uAmplitude:1,color1:`#e30613`,color2:`#ff8a3c`,color3:`#ffd57b`,positionX:-1.4,rotationY:10,rotationZ:50,cAzimuthAngle:180,cPolarAngle:90,cDistance:3.6,brightness:1.2},orb:{type:`sphere`,uSpeed:.12,uStrength:.4,uDensity:1.1,uFrequency:5.5,uAmplitude:1.4,color1:`#ff3d2e`,color2:`#ffb36b`,color3:`#e30613`,positionX:1.5,positionY:.1,cAzimuthAngle:60,cPolarAngle:90,cDistance:7.1,cameraZoom:3.2,brightness:1.4},night:{type:`waterPlane`,uSpeed:.15,uStrength:2.4,uDensity:1.1,uFrequency:5.5,uAmplitude:0,color1:`#e30613`,color2:`#1e3e93`,color3:`#0b0b12`,positionX:-.5,positionY:.1,rotationZ:235,cAzimuthAngle:180,cPolarAngle:115,cDistance:3.9,brightness:1.1},gold:{type:`waterPlane`,uSpeed:.18,uStrength:3,uDensity:1.8,uFrequency:5.5,uAmplitude:0,color1:`#c8902e`,color2:`#ffd57b`,color3:`#4a2006`,positionY:-2.1,rotationZ:225,cAzimuthAngle:180,cPolarAngle:95,cDistance:2.4,brightness:1.1},sahara:{type:`waterPlane`,uSpeed:.12,uStrength:2.4,uDensity:1.1,uFrequency:5.5,uAmplitude:0,color1:`#c0593a`,color2:`#ecd2a6`,color3:`#7a3b1d`,positionX:-.5,positionY:.1,rotationZ:235,cAzimuthAngle:180,cPolarAngle:115,cDistance:3.9,brightness:1.15},soft:{type:`waterPlane`,uSpeed:.25,uStrength:3,uDensity:1,uFrequency:5.5,uAmplitude:0,color1:`#ffffff`,color2:`#fdeeec`,color3:`#ececec`,positionY:1.8,rotationZ:-90,cAzimuthAngle:180,cPolarAngle:120,cDistance:2.9,brightness:1.2},trust:{type:`waterPlane`,uSpeed:.2,uStrength:3.4,uDensity:1.2,uFrequency:0,uAmplitude:0,color1:`#1e3e93`,color2:`#4a6fd6`,color3:`#a9bdf0`,positionY:.9,positionZ:-.3,rotationX:45,cAzimuthAngle:170,cPolarAngle:70,cDistance:4.4,brightness:1.2}};function vr(e){let[t,n]=(0,j.useState)(!0);return(0,j.useEffect)(()=>{if(!e)return;let t=new IntersectionObserver(([e])=>n(e.isIntersecting),{rootMargin:`200px 0px`});return t.observe(e),()=>t.disconnect()},[e]),t}function yr({variant:e=`hero`,reducedMotion:t,host:n}){let r=_r[e]??_r.hero;return vr(n)?(0,E.jsx)(Ln,{style:{position:`absolute`,inset:0,pointerEvents:`none`},pixelDensity:1,fov:45,pointerEvents:`none`,lazyLoad:!1,children:(0,E.jsx)(gr,{...r,animate:t?`off`:`on`,lightType:`3d`,grain:`off`,reflection:.1,shader:`defaults`})}):null}export{yr as default};