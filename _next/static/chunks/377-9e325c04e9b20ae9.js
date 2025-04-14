(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{4146:(t,e,n)=>{"use strict";var r=n(4363),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(t){return r.isMemo(t)?o:s[t.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=o;var l=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(p){var i=d(n);i&&i!==p&&t(e,i,r)}var o=c(n);f&&(o=o.concat(f(n)));for(var s=u(e),m=u(n),y=0;y<o.length;++y){var g=o[y];if(!a[g]&&!(r&&r[g])&&!(m&&m[g])&&!(s&&s[g])){var v=h(n,g);try{l(e,g,v)}catch(t){}}}}return e}},6526:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return b}});let r=n(7677),i=n(544),a=n(4848),o=i._(n(6540)),s=r._(n(961)),u=r._(n(6085)),l=n(7282),c=n(2105),f=n(9641);n(7679);let h=n(7644),d=r._(n(5472)),p=n(1903),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/JaskaranPortfolio/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0};function y(t,e,n,r,i,a,o){let s=null==t?void 0:t.src;t&&t["data-loaded-src"]!==s&&(t["data-loaded-src"]=s,("decode"in t?t.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("empty"!==e&&i(!0),null==n?void 0:n.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let r=!1,i=!1;n.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,e.preventDefault()},stopPropagation:()=>{i=!0,e.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(t)}}))}function g(t){return o.use?{fetchPriority:t}:{fetchpriority:t}}let v=(0,o.forwardRef)((t,e)=>{let{src:n,srcSet:r,sizes:i,height:s,width:u,decoding:l,className:c,style:f,fetchPriority:h,placeholder:d,loading:m,unoptimized:v,fill:x,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:k,sizesInput:M,onLoad:S,onError:N,...A}=t,$=(0,o.useCallback)(t=>{t&&(N&&(t.src=t.src),t.complete&&y(t,d,b,_,w,v,M))},[n,d,b,_,w,N,v,M]),E=(0,p.useMergedRef)(e,$);return(0,a.jsx)("img",{...A,...g(h),loading:m,width:u,height:s,decoding:l,"data-nimg":x?"fill":"1",className:c,style:f,sizes:i,srcSet:r,src:n,ref:E,onLoad:t=>{y(t.currentTarget,d,b,_,w,v,M)},onError:t=>{k(!0),"empty"!==d&&w(!0),N&&N(t)}})});function x(t){let{isAppRouter:e,imgAttributes:n}=t,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return e&&s.default.preload?(s.default.preload(n.src,r),null):(0,a.jsx)(u.default,{children:(0,a.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,o.forwardRef)((t,e)=>{let n=(0,o.useContext)(h.RouterContext),r=(0,o.useContext)(f.ImageConfigContext),i=(0,o.useMemo)(()=>{var t;let e=m||r||c.imageConfigDefault,n=[...e.deviceSizes,...e.imageSizes].sort((t,e)=>t-e),i=e.deviceSizes.sort((t,e)=>t-e),a=null==(t=e.qualities)?void 0:t.sort((t,e)=>t-e);return{...e,allSizes:n,deviceSizes:i,qualities:a}},[r]),{onLoad:s,onLoadingComplete:u}=t,p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let y=(0,o.useRef)(u);(0,o.useEffect)(()=>{y.current=u},[u]);let[g,b]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:k,meta:M}=(0,l.getImgProps)(t,{defaultLoader:d.default,imgConf:i,blurComplete:g,showAltText:_});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...k,unoptimized:M.unoptimized,placeholder:M.placeholder,fill:M.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:w,sizesInput:t.sizes,ref:e}),M.priority?(0,a.jsx)(x,{isAppRouter:!n,imgAttributes:k}):null]})});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1903:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=n(6540);function i(t,e){let n=(0,r.useRef)(()=>{}),i=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>t&&e?r=>{null===r?(n.current(),i.current()):(n.current=a(t,r),i.current=a(e,r))}:t||e,[t,e])}function a(t,e){if("function"!=typeof t)return t.current=e,()=>{t.current=null};{let n=t(e);return"function"==typeof n?n:()=>t(null)}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7282:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return s}}),n(7679);let r=n(9197),i=n(2105);function a(t){return void 0!==t.default}function o(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function s(t,e){var n,s;let u,l,c,{src:f,sizes:h,unoptimized:d=!1,priority:p=!1,loading:m,className:y,quality:g,width:v,height:x,fill:b=!1,style:_,overrideSrc:w,onLoad:k,onLoadingComplete:M,placeholder:S="empty",blurDataURL:N,fetchPriority:A,decoding:$="async",layout:E,objectFit:C,objectPosition:j,lazyBoundary:z,lazyRoot:P,...O}=t,{imgConf:R,showAltText:X,blurComplete:T,defaultLoader:Y}=e,I=R||i.imageConfigDefault;if("allSizes"in I)u=I;else{let t=[...I.deviceSizes,...I.imageSizes].sort((t,e)=>t-e),e=I.deviceSizes.sort((t,e)=>t-e),r=null==(n=I.qualities)?void 0:n.sort((t,e)=>t-e);u={...I,allSizes:t,deviceSizes:e,qualities:r}}if(void 0===Y)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let q=O.loader||Y;delete O.loader,delete O.srcSet;let D="__next_img_default"in q;if(D){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=q;q=e=>{let{config:n,...r}=e;return t(r)}}if(E){"fill"===E&&(b=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];t&&(_={..._,...t});let e={responsive:"100vw",fill:"100vw"}[E];e&&!h&&(h=e)}let L="",V=o(v),F=o(x);if((s=f)&&"object"==typeof s&&(a(s)||void 0!==s.src)){let t=a(f)?f.default:f;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(l=t.blurWidth,c=t.blurHeight,N=N||t.blurDataURL,L=t.src,!b){if(V||F){if(V&&!F){let e=V/t.width;F=Math.round(t.height*e)}else if(!V&&F){let e=F/t.height;V=Math.round(t.width*e)}}else V=t.width,F=t.height}}let B=!p&&("lazy"===m||void 0===m);(!(f="string"==typeof f?f:L)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,B=!1),u.unoptimized&&(d=!0),D&&!u.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(d=!0);let G=o(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:j}:{},X?{}:{color:"transparent"},_),W=T||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:V,heightInt:F,blurWidth:l,blurHeight:c,blurDataURL:N||"",objectFit:H.objectFit})+'")':'url("'+S+'")',U=W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},J=function(t){let{config:e,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=t;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(t,e,n){let{deviceSizes:r,allSizes:i}=t;if(n){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let r;r=t.exec(n);r)e.push(parseInt(r[2]));if(e.length){let t=.01*Math.min(...e);return{widths:i.filter(e=>e>=r[0]*t),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof e?{widths:r,kind:"w"}:{widths:[...new Set([e,2*e].map(t=>i.find(e=>e>=t)||i[i.length-1]))],kind:"x"}}(e,i,o),c=u.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:u.map((t,r)=>s({config:e,src:n,quality:a,width:t})+" "+("w"===l?t:r+1)+l).join(", "),src:s({config:e,src:n,quality:a,width:u[c]})}}({config:u,src:f,unoptimized:d,width:V,quality:G,sizes:h,loader:q});return{props:{...O,loading:B?"lazy":m,fetchPriority:A,width:V,height:F,decoding:$,className:y,style:{...H,...U},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:d,priority:p,placeholder:S,fill:b}}}},9197:(t,e)=>{"use strict";function n(t){let{widthInt:e,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}=t,s=r?40*r:e,u=i?40*i:n,l=s&&u?"viewBox='0 0 "+s+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},2364:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return u},getImageProps:function(){return s}});let r=n(7677),i=n(7282),a=n(6526),o=r._(n(5472));function s(t){let{props:e}=(0,i.getImgProps)(t,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/JaskaranPortfolio/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!0}});for(let[t,n]of Object.entries(e))void 0===n&&delete e[t];return{props:e}}let u=a.Image},5472:(t,e)=>{"use strict";function n(t){var e;let{config:n,src:r,width:i,quality:a}=t,o=a||(null==(e=n.qualities)?void 0:e.reduce((t,e)=>Math.abs(e-75)<Math.abs(t-75)?e:t))||75;return n.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+o+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},3368:(t,e,n)=>{t.exports=n(6085)},9965:(t,e,n)=>{t.exports=n(2364)},9998:(t,e)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case i:case o:case a:case f:case h:return t;default:switch(t=t&&t.$$typeof){case l:case u:case c:case p:case d:case s:return t;default:return e}}case r:return e}}}(t)===i}},8338:(t,e,n)=>{"use strict";t.exports=n(9998)},2799:(t,e)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function _(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case c:case f:case a:case s:case o:case d:return t;default:switch(t=t&&t.$$typeof){case l:case h:case y:case m:case u:return t;default:return e}}case i:return e}}}function w(t){return _(t)===f}e.AsyncMode=c,e.ConcurrentMode=f,e.ContextConsumer=l,e.ContextProvider=u,e.Element=r,e.ForwardRef=h,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=s,e.StrictMode=o,e.Suspense=d,e.isAsyncMode=function(t){return w(t)||_(t)===c},e.isConcurrentMode=w,e.isContextConsumer=function(t){return _(t)===l},e.isContextProvider=function(t){return _(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return _(t)===h},e.isFragment=function(t){return _(t)===a},e.isLazy=function(t){return _(t)===y},e.isMemo=function(t){return _(t)===m},e.isPortal=function(t){return _(t)===i},e.isProfiler=function(t){return _(t)===s},e.isStrictMode=function(t){return _(t)===o},e.isSuspense=function(t){return _(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===f||t===s||t===o||t===d||t===p||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===u||t.$$typeof===l||t.$$typeof===h||t.$$typeof===v||t.$$typeof===x||t.$$typeof===b||t.$$typeof===g)},e.typeOf=_},4363:(t,e,n)=>{"use strict";t.exports=n(2799)},5660:(t,e,n)=>{"use strict";function r(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let i of t)null!=(i=e(i,++r,t))&&(n<i||void 0===n&&i>=i)&&(n=i)}return n}function i(){}function a(t){return null==t?i:function(){return this.querySelector(t)}}function o(){return[]}function s(t){return null==t?o:function(){return this.querySelectorAll(t)}}function u(t){return function(){return this.matches(t)}}function l(t){return function(e){return e.matches(t)}}n.d(e,{$Er:()=>ez,jTM:()=>eP,eRw:()=>eG,xJS:()=>eK,tXi:()=>eJ,KS8:()=>eZ,TSS:()=>eQ,T9B:()=>r,Bv9:()=>nw,Ltv:()=>eb});var c,f,h,d,p,m=Array.prototype.find;function y(){return this.firstElementChild}var g=Array.prototype.filter;function v(){return Array.from(this.children)}function x(t){return Array(t.length)}function b(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function _(t,e,n,r,i,a){for(var o,s=0,u=e.length,l=a.length;s<l;++s)(o=e[s])?(o.__data__=a[s],r[s]=o):n[s]=new b(t,a[s]);for(;s<u;++s)(o=e[s])&&(i[s]=o)}function w(t,e,n,r,i,a,o){var s,u,l,c=new Map,f=e.length,h=a.length,d=Array(f);for(s=0;s<f;++s)(u=e[s])&&(d[s]=l=o.call(u,u.__data__,s,e)+"",c.has(l)?i[s]=u:c.set(l,u));for(s=0;s<h;++s)l=o.call(t,a[s],s,a)+"",(u=c.get(l))?(r[s]=u,u.__data__=a[s],c.delete(l)):n[s]=new b(t,a[s]);for(s=0;s<f;++s)(u=e[s])&&c.get(d[s])===u&&(i[s]=u)}function k(t){return t.__data__}function M(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}b.prototype={constructor:b,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var S="http://www.w3.org/1999/xhtml";let N={svg:"http://www.w3.org/2000/svg",xhtml:S,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function A(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),N.hasOwnProperty(e)?{space:N[e],local:t}:t}function $(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function E(t,e){return t.style.getPropertyValue(e)||$(t).getComputedStyle(t,null).getPropertyValue(e)}function C(t){return t.trim().split(/^|\s+/)}function j(t){return t.classList||new z(t)}function z(t){this._node=t,this._names=C(t.getAttribute("class")||"")}function P(t,e){for(var n=j(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function O(t,e){for(var n=j(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function R(){this.textContent=""}function X(){this.innerHTML=""}function T(){this.nextSibling&&this.parentNode.appendChild(this)}function Y(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function I(t){var e=A(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===S&&e.documentElement.namespaceURI===S?e.createElement(t):e.createElementNS(n,t)}})(e)}function q(){return null}function D(){var t=this.parentNode;t&&t.removeChild(this)}function L(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function V(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function F(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,a=e.length;r<a;++r)(n=e[r],t.type&&n.type!==t.type||n.name!==t.name)?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function B(t,e,n){return function(){var r,i=this.__on,a=function(t){e.call(this,t,this.__data__)};if(i){for(var o=0,s=i.length;o<s;++o)if((r=i[o]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=a,r.options=n),r.value=e;return}}this.addEventListener(t.type,a,n),r={type:t.type,name:t.name,value:e,listener:a,options:n},i?i.push(r):this.__on=[r]}}function G(t,e,n){var r=$(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}z.prototype={add:function(t){0>this._names.indexOf(t)&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var H=[null];function W(t,e){this._groups=t,this._parents=e}function U(){return new W([[document.documentElement]],H)}W.prototype=U.prototype={constructor:W,select:function(t){"function"!=typeof t&&(t=a(t));for(var e=this._groups,n=e.length,r=Array(n),i=0;i<n;++i)for(var o,s,u=e[i],l=u.length,c=r[i]=Array(l),f=0;f<l;++f)(o=u[f])&&(s=t.call(o,o.__data__,f,u))&&("__data__"in o&&(s.__data__=o.__data__),c[f]=s);return new W(r,this._parents)},selectAll:function(t){if("function"==typeof t){var e;e=t,t=function(){var t;return t=e.apply(this,arguments),null==t?[]:Array.isArray(t)?t:Array.from(t)}}else t=s(t);for(var n=this._groups,r=n.length,i=[],a=[],o=0;o<r;++o)for(var u,l=n[o],c=l.length,f=0;f<c;++f)(u=l[f])&&(i.push(t.call(u,u.__data__,f,l)),a.push(u));return new W(i,a)},selectChild:function(t){var e;return this.select(null==t?y:(e="function"==typeof t?t:l(t),function(){return m.call(this.children,e)}))},selectChildren:function(t){var e;return this.selectAll(null==t?v:(e="function"==typeof t?t:l(t),function(){return g.call(this.children,e)}))},filter:function(t){"function"!=typeof t&&(t=u(t));for(var e=this._groups,n=e.length,r=Array(n),i=0;i<n;++i)for(var a,o=e[i],s=o.length,l=r[i]=[],c=0;c<s;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&l.push(a);return new W(r,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,k);var n=e?w:_,r=this._parents,i=this._groups;"function"!=typeof t&&(v=t,t=function(){return v});for(var a=i.length,o=Array(a),s=Array(a),u=Array(a),l=0;l<a;++l){var c=r[l],f=i[l],h=f.length,d="object"==typeof(g=t.call(c,c&&c.__data__,l,r))&&"length"in g?g:Array.from(g),p=d.length,m=s[l]=Array(p),y=o[l]=Array(p);n(c,f,m,y,u[l]=Array(h),d,e);for(var g,v,x,b,M=0,S=0;M<p;++M)if(x=m[M]){for(M>=S&&(S=M+1);!(b=y[S])&&++S<p;);x._next=b||null}}return(o=new W(o,r))._enter=s,o._exit=u,o},enter:function(){return new W(this._enter||this._groups.map(x),this._parents)},exit:function(){return new W(this._exit||this._groups.map(x),this._parents)},join:function(t,e,n){var r=this.enter(),i=this,a=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==n?a.remove():n(a),r&&i?r.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,n=this._groups,r=e._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),u=0;u<o;++u)for(var l,c=n[u],f=r[u],h=c.length,d=s[u]=Array(h),p=0;p<h;++p)(l=c[p]||f[p])&&(d[p]=l);for(;u<i;++u)s[u]=n[u];return new W(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r,o),o=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=M);for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o,s=n[a],u=s.length,l=i[a]=Array(u),c=0;c<u;++c)(o=s[c])&&(l[c]=o);l.sort(e)}return new W(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null},size:function(){let t=0;for(let e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,a=e[n],o=0,s=a.length;o<s;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this},attr:function(t,e){var n=A(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof e?n.local?function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}:function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}:n.local?function(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}:function(t,e){return function(){this.setAttribute(t,e)}})(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof e?function(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}:function(t,e,n){return function(){this.style.setProperty(t,e,n)}})(t,e,null==n?"":n)):E(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?function(t){return function(){delete this[t]}}:"function"==typeof e?function(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}:function(t,e){return function(){this[t]=e}})(t,e)):this.node()[t]},classed:function(t,e){var n=C(t+"");if(arguments.length<2){for(var r=j(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?function(t,e){return function(){(e.apply(this,arguments)?P:O)(this,t)}}:e?function(t){return function(){P(this,t)}}:function(t){return function(){O(this,t)}})(n,e))},text:function(t){return arguments.length?this.each(null==t?R:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?X:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(T)},lower:function(){return this.each(Y)},append:function(t){var e="function"==typeof t?t:I(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var n="function"==typeof t?t:I(t),r=null==e?q:"function"==typeof e?e:a(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(D)},clone:function(t){return this.select(t?V:L)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,a=(t+"").trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}),o=a.length;if(arguments.length<2){var s=this.node().__on;if(s){for(var u,l=0,c=s.length;l<c;++l)for(r=0,u=s[l];r<o;++r)if((i=a[r]).type===u.type&&i.name===u.name)return u.value}return}for(r=0,s=e?B:F;r<o;++r)this.each(s(a[r],e,n));return this},dispatch:function(t,e){return this.each(("function"==typeof e?function(t,e){return function(){return G(this,t,e.apply(this,arguments))}}:function(t,e){return function(){return G(this,t,e)}})(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],a=0,o=i.length;a<o;++a)(r=i[a])&&(yield r)}};var J={value:()=>{}};function K(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw Error("illegal type: "+t);r[t]=[]}return new Z(r)}function Z(t){this._=t}function Q(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=J,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}Z.prototype=K.prototype={constructor:Z,on:function(t,e){var n,r=this._,i=(t+"").trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!r.hasOwnProperty(t))throw Error("unknown type: "+t);return{type:t,name:e}}),a=-1,o=i.length;if(arguments.length<2){for(;++a<o;)if((n=(t=i[a]).type)&&(n=function(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}(r[n],t.name)))return n;return}if(null!=e&&"function"!=typeof e)throw Error("invalid callback: "+e);for(;++a<o;)if(n=(t=i[a]).type)r[n]=Q(r[n],t.name,e);else if(null==e)for(n in r)r[n]=Q(r[n],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Z(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=Array(n),a=0;a<n;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(r=this._[t],a=0,n=r.length;a<n;++a)r[a].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n)}};var tt,te,tn=0,tr=0,ti=0,ta=0,to=0,ts=0,tu="object"==typeof performance&&performance.now?performance:Date,tl="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function tc(){return to||(tl(tf),to=tu.now()+ts)}function tf(){to=0}function th(){this._call=this._time=this._next=null}function td(t,e,n){var r=new th;return r.restart(t,e,n),r}function tp(){to=(ta=tu.now())+ts,tn=tr=0;try{!function(){tc(),++tn;for(var t,e=tt;e;)(t=to-e._time)>=0&&e._call.call(void 0,t),e=e._next;--tn}()}finally{tn=0,function(){for(var t,e,n=tt,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:tt=e);te=t,ty(r)}(),to=0}}function tm(){var t=tu.now(),e=t-ta;e>1e3&&(ts-=e,ta=t)}function ty(t){!tn&&(tr&&(tr=clearTimeout(tr)),t-to>24?(t<1/0&&(tr=setTimeout(tp,t-tu.now()-ts)),ti&&(ti=clearInterval(ti))):(ti||(ta=tu.now(),ti=setInterval(tm,1e3)),tn=1,tl(tp)))}function tg(t,e,n){var r=new th;return e=null==e?0:+e,r.restart(n=>{r.stop(),t(n+e)},e,n),r}th.prototype=td.prototype={constructor:th,restart:function(t,e,n){if("function"!=typeof t)throw TypeError("callback is not a function");n=(null==n?tc():+n)+(null==e?0:+e),this._next||te===this||(te?te._next=this:tt=this,te=this),this._call=t,this._time=n,ty()},stop:function(){this._call&&(this._call=null,this._time=1/0,ty())}};var tv=K("start","end","cancel","interrupt"),tx=[];function tb(t,e,n,r,i,a){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function(t,e,n){var r,i=t.__transition;function a(u){var l,c,f,h;if(1!==n.state)return s();for(l in i)if((h=i[l]).name===n.name){if(3===h.state)return tg(a);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[l]):+l<e&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[l])}if(tg(function(){3===n.state&&(n.state=4,n.timer.restart(o,n.delay,n.time),o(u))}),n.state=2,n.on.call("start",t,t.__data__,n.index,n.group),2===n.state){for(l=0,n.state=3,r=Array(f=n.tween.length),c=-1;l<f;++l)(h=n.tween[l].value.call(t,t.__data__,n.index,n.group))&&(r[++c]=h);r.length=c+1}}function o(e){for(var i=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(s),n.state=5,1),a=-1,o=r.length;++a<o;)r[a].call(t,i);5===n.state&&(n.on.call("end",t,t.__data__,n.index,n.group),s())}function s(){for(var r in n.state=6,n.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=n,n.timer=td(function(t){n.state=1,n.timer.restart(a,n.delay,n.time),n.delay<=t&&a(t-n.delay)},0,n.time)}(t,n,{name:e,index:r,group:i,on:tv,tween:tx,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function t_(t,e){var n=tk(t,e);if(n.state>0)throw Error("too late; already scheduled");return n}function tw(t,e){var n=tk(t,e);if(n.state>3)throw Error("too late; already running");return n}function tk(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw Error("transition not found");return n}function tM(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var tS=180/Math.PI,tN={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function tA(t,e,n,r,i,a){var o,s,u;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(u=t*n+e*r)&&(n-=t*u,r-=e*u),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,u/=s),t*r<e*n&&(t=-t,e=-e,u=-u,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*tS,skewX:Math.atan(u)*tS,scaleX:o,scaleY:s}}function t$(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var s,u,l,c,f=[],h=[];return a=t(a),o=t(o),!function(t,r,i,a,o,s){if(t!==i||r!==a){var u=o.push("translate(",null,e,null,n);s.push({i:u-4,x:tM(t,i)},{i:u-2,x:tM(r,a)})}else(i||a)&&o.push("translate("+i+e+a+n)}(a.translateX,a.translateY,o.translateX,o.translateY,f,h),(s=a.rotate)!==(u=o.rotate)?(s-u>180?u+=360:u-s>180&&(s+=360),h.push({i:f.push(i(f)+"rotate(",null,r)-2,x:tM(s,u)})):u&&f.push(i(f)+"rotate("+u+r),(l=a.skewX)!==(c=o.skewX)?h.push({i:f.push(i(f)+"skewX(",null,r)-2,x:tM(l,c)}):c&&f.push(i(f)+"skewX("+c+r),!function(t,e,n,r,a,o){if(t!==n||e!==r){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:tM(t,n)},{i:s-2,x:tM(e,r)})}else(1!==n||1!==r)&&a.push(i(a)+"scale("+n+","+r+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,f,h),a=o=null,function(t){for(var e,n=-1,r=h.length;++n<r;)f[(e=h[n]).i]=e.x(t);return f.join("")}}}var tE=t$(function(t){let e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?tN:tA(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),tC=t$(function(t){return null==t?tN:(c||(c=document.createElementNS("http://www.w3.org/2000/svg","g")),c.setAttribute("transform",t),t=c.transform.baseVal.consolidate())?tA((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):tN},", ",")",")");function tj(t,e,n){var r=t._id;return t.each(function(){var t=tw(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)}),function(t){return tk(t,r).value[e]}}function tz(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function tP(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function tO(){}var tR="\\s*([+-]?\\d+)\\s*",tX="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",tT="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",tY=/^#([0-9a-f]{3,8})$/,tI=RegExp(`^rgb\\(${tR},${tR},${tR}\\)$`),tq=RegExp(`^rgb\\(${tT},${tT},${tT}\\)$`),tD=RegExp(`^rgba\\(${tR},${tR},${tR},${tX}\\)$`),tL=RegExp(`^rgba\\(${tT},${tT},${tT},${tX}\\)$`),tV=RegExp(`^hsl\\(${tX},${tT},${tT}\\)$`),tF=RegExp(`^hsla\\(${tX},${tT},${tT},${tX}\\)$`),tB={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32};function tG(){return this.rgb().formatHex()}function tH(){return this.rgb().formatRgb()}function tW(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=tY.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?tU(e):3===n?new tZ(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?tJ(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?tJ(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=tI.exec(t))?new tZ(e[1],e[2],e[3],1):(e=tq.exec(t))?new tZ(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=tD.exec(t))?tJ(e[1],e[2],e[3],e[4]):(e=tL.exec(t))?tJ(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=tV.exec(t))?t2(e[1],e[2]/100,e[3]/100,1):(e=tF.exec(t))?t2(e[1],e[2]/100,e[3]/100,e[4]):tB.hasOwnProperty(t)?tU(tB[t]):"transparent"===t?new tZ(NaN,NaN,NaN,0):null}function tU(t){return new tZ(t>>16&255,t>>8&255,255&t,1)}function tJ(t,e,n,r){return r<=0&&(t=e=n=NaN),new tZ(t,e,n,r)}function tK(t,e,n,r){var i;return 1==arguments.length?((i=t)instanceof tO||(i=tW(i)),i)?new tZ((i=i.rgb()).r,i.g,i.b,i.opacity):new tZ:new tZ(t,e,n,null==r?1:r)}function tZ(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function tQ(){return`#${t5(this.r)}${t5(this.g)}${t5(this.b)}`}function t0(){let t=t1(this.opacity);return`${1===t?"rgb(":"rgba("}${t3(this.r)}, ${t3(this.g)}, ${t3(this.b)}${1===t?")":`, ${t})`}`}function t1(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function t3(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function t5(t){return((t=t3(t))<16?"0":"")+t.toString(16)}function t2(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new t6(t,e,n,r)}function t4(t){if(t instanceof t6)return new t6(t.h,t.s,t.l,t.opacity);if(t instanceof tO||(t=tW(t)),!t)return new t6;if(t instanceof t6)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),a=Math.max(e,n,r),o=NaN,s=a-i,u=(a+i)/2;return s?(o=e===a?(n-r)/s+(n<r)*6:n===a?(r-e)/s+2:(e-n)/s+4,s/=u<.5?a+i:2-a-i,o*=60):s=u>0&&u<1?0:o,new t6(o,s,u,t.opacity)}function t6(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function t9(t){return(t=(t||0)%360)<0?t+360:t}function t8(t){return Math.max(0,Math.min(1,t||0))}function t7(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}function et(t,e,n,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6}tz(tO,tW,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:tG,formatHex:tG,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return t4(this).formatHsl()},formatRgb:tH,toString:tH}),tz(tZ,tK,tP(tO,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new tZ(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new tZ(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new tZ(t3(this.r),t3(this.g),t3(this.b),t1(this.opacity))},displayable(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:tQ,formatHex:tQ,formatHex8:function(){return`#${t5(this.r)}${t5(this.g)}${t5(this.b)}${t5((isNaN(this.opacity)?1:this.opacity)*255)}`},formatRgb:t0,toString:t0})),tz(t6,function(t,e,n,r){return 1==arguments.length?t4(t):new t6(t,e,n,null==r?1:r)},tP(tO,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new t6(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new t6(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new tZ(t7(t>=240?t-240:t+120,i,r),t7(t,i,r),t7(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new t6(t9(this.h),t8(this.s),t8(this.l),t1(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=t1(this.opacity);return`${1===t?"hsl(":"hsla("}${t9(this.h)}, ${100*t8(this.s)}%, ${100*t8(this.l)}%${1===t?")":`, ${t})`}`}}));let ee=t=>()=>t;function en(t,e){var n=e-t;return n?function(e){return t+e*n}:ee(isNaN(t)?e:t)}let er=function t(e){var n,r=1==(n=+(n=e))?en:function(t,e){var r,i,a;return e-t?(r=t,i=e,r=Math.pow(r,a=n),i=Math.pow(i,a)-r,a=1/a,function(t){return Math.pow(r+t*i,a)}):ee(isNaN(t)?e:t)};function i(t,e){var n=r((t=tK(t)).r,(e=tK(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),o=en(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+""}}return i.gamma=t,i}(1);function ei(t){return function(e){var n,r,i=e.length,a=Array(i),o=Array(i),s=Array(i);for(n=0;n<i;++n)r=tK(e[n]),a[n]=r.r||0,o[n]=r.g||0,s[n]=r.b||0;return a=t(a),o=t(o),s=t(s),r.opacity=1,function(t){return r.r=a(t),r.g=o(t),r.b=s(t),r+""}}}ei(function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],a=t[r+1],o=r>0?t[r-1]:2*i-a,s=r<e-1?t[r+2]:2*a-i;return et((n-r/e)*e,o,i,a,s)}}),ei(function(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],a=t[r%e],o=t[(r+1)%e],s=t[(r+2)%e];return et((n-r/e)*e,i,a,o,s)}});var ea=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,eo=RegExp(ea.source,"g");function es(t,e){var n,r,i,a,o,s=ea.lastIndex=eo.lastIndex=0,u=-1,l=[],c=[];for(t+="",e+="";(i=ea.exec(t))&&(a=eo.exec(e));)(o=a.index)>s&&(o=e.slice(s,o),l[u]?l[u]+=o:l[++u]=o),(i=i[0])===(a=a[0])?l[u]?l[u]+=a:l[++u]=a:(l[++u]=null,c.push({i:u,x:tM(i,a)})),s=eo.lastIndex;return s<e.length&&(o=e.slice(s),l[u]?l[u]+=o:l[++u]=o),l.length<2?c[0]?(n=c[0].x,function(t){return n(t)+""}):(r=e,function(){return r}):(e=c.length,function(t){for(var n,r=0;r<e;++r)l[(n=c[r]).i]=n.x(t);return l.join("")})}function eu(t,e){var n;return("number"==typeof e?tM:e instanceof tW?er:(n=tW(e))?(e=n,er):es)(t,e)}var el=U.prototype.constructor;function ec(t){return function(){this.style.removeProperty(t)}}var ef=0;function eh(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}var ed=U.prototype;eh.prototype=(function(t){return U().transition(t)}).prototype={constructor:eh,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=a(t));for(var r=this._groups,i=r.length,o=Array(i),s=0;s<i;++s)for(var u,l,c=r[s],f=c.length,h=o[s]=Array(f),d=0;d<f;++d)(u=c[d])&&(l=t.call(u,u.__data__,d,c))&&("__data__"in u&&(l.__data__=u.__data__),h[d]=l,tb(h[d],e,n,d,h,tk(u,n)));return new eh(o,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=s(t));for(var r=this._groups,i=r.length,a=[],o=[],u=0;u<i;++u)for(var l,c=r[u],f=c.length,h=0;h<f;++h)if(l=c[h]){for(var d,p=t.call(l,l.__data__,h,c),m=tk(l,n),y=0,g=p.length;y<g;++y)(d=p[y])&&tb(d,e,n,y,p,m);a.push(p),o.push(l)}return new eh(a,o,e,n)},selectChild:ed.selectChild,selectChildren:ed.selectChildren,filter:function(t){"function"!=typeof t&&(t=u(t));for(var e=this._groups,n=e.length,r=Array(n),i=0;i<n;++i)for(var a,o=e[i],s=o.length,l=r[i]=[],c=0;c<s;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&l.push(a);return new eh(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw Error();for(var e=this._groups,n=t._groups,r=e.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var u,l=e[s],c=n[s],f=l.length,h=o[s]=Array(f),d=0;d<f;++d)(u=l[d]||c[d])&&(h[d]=u);for(;s<r;++s)o[s]=e[s];return new eh(o,this._parents,this._name,this._id)},selection:function(){return new el(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=++ef,r=this._groups,i=r.length,a=0;a<i;++a)for(var o,s=r[a],u=s.length,l=0;l<u;++l)if(o=s[l]){var c=tk(o,e);tb(o,t,n,l,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new eh(r,this._parents,t,n)},call:ed.call,nodes:ed.nodes,node:ed.node,size:ed.size,empty:ed.empty,each:ed.each,on:function(t,e){var n,r,i,a=this._id;return arguments.length<2?tk(this.node(),a).on.on(t):this.each((i=(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})?t_:tw,function(){var o=i(this,a),s=o.on;s!==n&&(r=(n=s).copy()).on(t,e),o.on=r}))},attr:function(t,e){var n=A(t),r="transform"===n?tC:eu;return this.attrTween(t,"function"==typeof e?(n.local?function(t,e,n){var r,i,a;return function(){var o,s,u=n(this);return null==u?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local))===(s=u+"")?null:o===r&&s===i?a:(i=s,a=e(r=o,u))}}:function(t,e,n){var r,i,a;return function(){var o,s,u=n(this);return null==u?void this.removeAttribute(t):(o=this.getAttribute(t))===(s=u+"")?null:o===r&&s===i?a:(i=s,a=e(r=o,u))}})(n,r,tj(this,"attr."+t,e)):null==e?(n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(n):(n.local?function(t,e,n){var r,i,a=n+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===a?null:o===r?i:i=e(r=o,n)}}:function(t,e,n){var r,i,a=n+"";return function(){var o=this.getAttribute(t);return o===a?null:o===r?i:i=e(r=o,n)}})(n,r,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw Error();var r=A(t);return this.tween(n,(r.local?function(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&function(e){this.setAttributeNS(t.space,t.local,i.call(this,e))}),n}return i._value=e,i}:function(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&function(e){this.setAttribute(t,i.call(this,e))}),n}return i._value=e,i})(r,e))},style:function(t,e,n){var r,i,a,o,s,u,l,c,f,h,d,p,m,y,g,v,x,b,_,w,k,M="transform"==(t+="")?tE:eu;return null==e?this.styleTween(t,(r=t,function(){var t=E(this,r),e=(this.style.removeProperty(r),E(this,r));return t===e?null:t===i&&e===a?o:o=M(i=t,a=e)})).on("end.style."+t,ec(t)):"function"==typeof e?this.styleTween(t,(s=t,u=tj(this,"style."+t,e),function(){var t=E(this,s),e=u(this),n=e+"";return null==e&&(this.style.removeProperty(s),n=e=E(this,s)),t===n?null:t===l&&n===c?f:(c=n,f=M(l=t,e))})).each((h=this._id,x="end."+(v="style."+(d=t)),function(){var t=tw(this,h),e=t.on,n=null==t.value[v]?g||(g=ec(d)):void 0;(e!==p||y!==n)&&(m=(p=e).copy()).on(x,y=n),t.on=m})):this.styleTween(t,(b=t,k=e+"",function(){var t=E(this,b);return t===k?null:t===_?w:w=M(_=t,e)}),n).on("end.style."+t,null)},styleTween:function(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw Error();return this.tween(r,function(t,e,n){var r,i;function a(){var a=e.apply(this,arguments);return a!==i&&(r=(i=a)&&function(e){this.style.setProperty(t,a.call(this,e),n)}),r}return a._value=e,a}(t,e,null==n?"":n))},text:function(t){var e,n;return this.tween("text","function"==typeof t?(e=tj(this,"text",t),function(){var t=e(this);this.textContent=null==t?"":t}):(n=null==t?"":t+"",function(){this.textContent=n}))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw Error();return this.tween(e,function(t){var e,n;function r(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&function(t){this.textContent=r.call(this,t)}),e}return r._value=t,r}(t))},remove:function(){var t;return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}))},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r,i=tk(this.node(),n).tween,a=0,o=i.length;a<o;++a)if((r=i[a]).name===t)return r.value;return null}return this.each((null==e?function(t,e){var n,r;return function(){var i=tw(this,t),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===e){(r=r.slice()).splice(o,1);break}}i.tween=r}}:function(t,e,n){var r,i;if("function"!=typeof n)throw Error();return function(){var a=tw(this,t),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:e,value:n},u=0,l=i.length;u<l;++u)if(i[u].name===e){i[u]=s;break}u===l&&i.push(s)}a.tween=i}})(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){t_(this,t).delay=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){t_(this,t).delay=e}})(e,t)):tk(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){tw(this,t).duration=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){tw(this,t).duration=e}})(e,t)):tk(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw Error();return function(){tw(this,t).ease=e}}(e,t)):tk(this.node(),e).ease},easeVarying:function(t){var e;if("function"!=typeof t)throw Error();return this.each((e=this._id,function(){var n=t.apply(this,arguments);if("function"!=typeof n)throw Error();tw(this,e).ease=n}))},end:function(){var t,e,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},u={value:function(){0==--i&&a()}};n.each(function(){var n=tw(this,r),i=n.on;i!==t&&((e=(t=i).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(u)),n.on=e}),0===i&&a()})},[Symbol.iterator]:ed[Symbol.iterator]};var ep={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};U.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var n,r,i,a=t.__transition,o=!0;if(a){for(i in e=null==e?null:e+"",a){if((n=a[i]).name!==e){o=!1;continue}r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete a[i]}o&&delete t.__transition}}(this,t)})},U.prototype.transition=function(t){var e,n;t instanceof eh?(e=t._id,t=t._name):(e=++ef,(n=ep).time=tc(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o,s=r[a],u=s.length,l=0;l<u;++l)(o=s[l])&&tb(o,t,e,l,s,n||function(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw Error(`transition ${e} not found`);return n}(o,e));return new eh(r,this._parents,t,e)};let{abs:em,max:ey,min:eg}=Math;function ev(t){return[+t[0],+t[1]]}function ex(t){return{type:t}}["w","e"].map(ex),["n","s"].map(ex),["n","w","e","s","nw","ne","sw","se"].map(ex);function eb(t){return"string"==typeof t?new W([[document.querySelector(t)]],[document.documentElement]):new W([[t]],H)}function e_(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}let ew={passive:!1},ek={capture:!0,passive:!1};function eM(t){t.stopImmediatePropagation()}function eS(t){t.preventDefault(),t.stopImmediatePropagation()}let eN=t=>()=>t;function eA(t,{sourceEvent:e,subject:n,target:r,identifier:i,active:a,x:o,y:s,dx:u,dy:l,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:u,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:c}})}function e$(t){return!t.ctrlKey&&!t.button}function eE(){return this.parentNode}function eC(t,e){return null==e?{x:t.x,y:t.y}:e}function ej(){return navigator.maxTouchPoints||"ontouchstart"in this}function ez(){var t,e,n,r,i=e$,a=eE,o=eC,s=ej,u={},l=K("start","drag","end"),c=0,f=0;function h(t){t.on("mousedown.drag",d).filter(s).on("touchstart.drag",y).on("touchmove.drag",g,ew).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(o,s){if(!r&&i.call(this,o,s)){var u,l,c,f=x(this,a.call(this,o,s),o,s,"mouse");f&&(eb(o.view).on("mousemove.drag",p,ek).on("mouseup.drag",m,ek),l=(u=o.view).document.documentElement,c=eb(u).on("dragstart.drag",eS,ek),"onselectstart"in l?c.on("selectstart.drag",eS,ek):(l.__noselect=l.style.MozUserSelect,l.style.MozUserSelect="none"),eM(o),n=!1,t=o.clientX,e=o.clientY,f("start",o))}}function p(r){if(eS(r),!n){var i=r.clientX-t,a=r.clientY-e;n=i*i+a*a>f}u.mouse("drag",r)}function m(t){var e,r,i,a;eb(t.view).on("mousemove.drag mouseup.drag",null),e=t.view,r=n,i=e.document.documentElement,a=eb(e).on("dragstart.drag",null),r&&(a.on("click.drag",eS,ek),setTimeout(function(){a.on("click.drag",null)},0)),"onselectstart"in i?a.on("selectstart.drag",null):(i.style.MozUserSelect=i.__noselect,delete i.__noselect),eS(t),u.mouse("end",t)}function y(t,e){if(i.call(this,t,e)){var n,r,o=t.changedTouches,s=a.call(this,t,e),u=o.length;for(n=0;n<u;++n)(r=x(this,s,t,e,o[n].identifier,o[n]))&&(eM(t),r("start",t,o[n]))}}function g(t){var e,n,r=t.changedTouches,i=r.length;for(e=0;e<i;++e)(n=u[r[e].identifier])&&(eS(t),n("drag",t,r[e]))}function v(t){var e,n,i=t.changedTouches,a=i.length;for(r&&clearTimeout(r),r=setTimeout(function(){r=null},500),e=0;e<a;++e)(n=u[i[e].identifier])&&(eM(t),n("end",t,i[e]))}function x(t,e,n,r,i,a){var s,f,d,p=l.copy(),m=e_(a||n,e);if(null!=(d=o.call(t,new eA("beforestart",{sourceEvent:n,target:h,identifier:i,active:c,x:m[0],y:m[1],dx:0,dy:0,dispatch:p}),r)))return s=d.x-m[0]||0,f=d.y-m[1]||0,function n(a,o,l){var y,g=m;switch(a){case"start":u[i]=n,y=c++;break;case"end":delete u[i],--c;case"drag":m=e_(l||o,e),y=c}p.call(a,t,new eA(a,{sourceEvent:o,subject:d,target:h,identifier:i,active:y,x:m[0]+s,y:m[1]+f,dx:m[0]-g[0],dy:m[1]-g[1],dispatch:p}),r)}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:eN(!!t),h):i},h.container=function(t){return arguments.length?(a="function"==typeof t?t:eN(t),h):a},h.subject=function(t){return arguments.length?(o="function"==typeof t?t:eN(t),h):o},h.touchable=function(t){return arguments.length?(s="function"==typeof t?t:eN(!!t),h):s},h.on=function(){var t=l.on.apply(l,arguments);return t===l?h:t},h.clickDistance=function(t){return arguments.length?(f=(t=+t)*t,h):Math.sqrt(f)},h}function eP(t,e){var n,r=1;function i(){var i,a,o=n.length,s=0,u=0;for(i=0;i<o;++i)s+=(a=n[i]).x,u+=a.y;for(s=(s/o-t)*r,u=(u/o-e)*r,i=0;i<o;++i)a=n[i],a.x-=s,a.y-=u}return null==t&&(t=0),null==e&&(e=0),i.initialize=function(t){n=t},i.x=function(e){return arguments.length?(t=+e,i):t},i.y=function(t){return arguments.length?(e=+t,i):e},i.strength=function(t){return arguments.length?(r=+t,i):r},i}function eO(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,a,o,s,u,l,c,f,h,d=t._root,p={data:r},m=t._x0,y=t._y0,g=t._x1,v=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((l=e>=(a=(m+g)/2))?m=a:g=a,(c=n>=(o=(y+v)/2))?y=o:v=o,i=d,!(d=d[f=c<<1|l]))return i[f]=p,t;if(s=+t._x.call(null,d.data),u=+t._y.call(null,d.data),e===s&&n===u)return p.next=d,i?i[f]=p:t._root=p,t;do i=i?i[f]=[,,,,]:t._root=[,,,,],(l=e>=(a=(m+g)/2))?m=a:g=a,(c=n>=(o=(y+v)/2))?y=o:v=o;while((f=c<<1|l)==(h=(u>=o)<<1|s>=a));return i[h]=d,i[f]=p,t}function eR(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function eX(t){return t[0]}function eT(t){return t[1]}function eY(t,e,n){var r=new eI(null==e?eX:e,null==n?eT:n,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function eI(t,e,n,r,i,a){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function eq(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}eA.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var eD=eY.prototype=eI.prototype;function eL(t){return function(){return t}}function eV(t){return(t()-.5)*1e-6}function eF(t){return t.x+t.vx}function eB(t){return t.y+t.vy}function eG(t){var e,n,r,i=1,a=1;function o(){for(var t,o,u,l,c,f,h,d=e.length,p=0;p<a;++p)for(t=0,o=eY(e,eF,eB).visitAfter(s);t<d;++t)h=(f=n[(u=e[t]).index])*f,l=u.x+u.vx,c=u.y+u.vy,o.visit(m);function m(t,e,n,a,o){var s=t.data,d=t.r,p=f+d;if(s){if(s.index>u.index){var m=l-s.x-s.vx,y=c-s.y-s.vy,g=m*m+y*y;g<p*p&&(0===m&&(g+=(m=eV(r))*m),0===y&&(g+=(y=eV(r))*y),g=(p-(g=Math.sqrt(g)))/g*i,u.vx+=(m*=g)*(p=(d*=d)/(h+d)),u.vy+=(y*=g)*p,s.vx-=m*(p=1-p),s.vy-=y*p)}return}return e>l+p||a<l-p||n>c+p||o<c-p}}function s(t){if(t.data)return t.r=n[t.data.index];for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r)}function u(){if(e){var r,i,a=e.length;for(r=0,n=Array(a);r<a;++r)n[(i=e[r]).index]=+t(i,r,e)}}return"function"!=typeof t&&(t=eL(null==t?1:+t)),o.initialize=function(t,n){e=t,r=n,u()},o.iterations=function(t){return arguments.length?(a=+t,o):a},o.strength=function(t){return arguments.length?(i=+t,o):i},o.radius=function(e){return arguments.length?(t="function"==typeof e?e:eL(+e),u(),o):t},o}function eH(t){return t.x}function eW(t){return t.y}eD.copy=function(){var t,e,n=new eI(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return n;if(!r.length)return n._root=eq(r),n;for(t=[{source:r,target:n._root=[,,,,]}];r=t.pop();)for(var i=0;i<4;++i)(e=r.source[i])&&(e.length?t.push({source:e,target:r.target[i]=[,,,,]}):r.target[i]=eq(e));return n},eD.add=function(t){let e=+this._x.call(null,t),n=+this._y.call(null,t);return eO(this.cover(e,n),e,n,t)},eD.addAll=function(t){var e,n,r,i,a=t.length,o=Array(a),s=Array(a),u=1/0,l=1/0,c=-1/0,f=-1/0;for(n=0;n<a;++n)!(isNaN(r=+this._x.call(null,e=t[n]))||isNaN(i=+this._y.call(null,e)))&&(o[n]=r,s[n]=i,r<u&&(u=r),r>c&&(c=r),i<l&&(l=i),i>f&&(f=i));if(u>c||l>f)return this;for(this.cover(u,l).cover(c,f),n=0;n<a;++n)eO(this,o[n],s[n],t[n]);return this},eD.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,a=(r=Math.floor(e))+1;else{for(var o,s,u=i-n||1,l=this._root;n>t||t>=i||r>e||e>=a;)switch(s=(e<r)<<1|t<n,(o=[,,,,])[s]=l,l=o,u*=2,s){case 0:i=n+u,a=r+u;break;case 1:n=i-u,a=r+u;break;case 2:i=n+u,r=a-u;break;case 3:n=i-u,r=a-u}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this},eD.data=function(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t},eD.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},eD.find=function(t,e,n){var r,i,a,o,s,u,l,c=this._x0,f=this._y0,h=this._x1,d=this._y1,p=[],m=this._root;for(m&&p.push(new eR(m,c,f,h,d)),null==n?n=1/0:(c=t-n,f=e-n,h=t+n,d=e+n,n*=n);u=p.pop();)if((m=u.node)&&!((i=u.x0)>h)&&!((a=u.y0)>d)&&!((o=u.x1)<c)&&!((s=u.y1)<f)){if(m.length){var y=(i+o)/2,g=(a+s)/2;p.push(new eR(m[3],y,g,o,s),new eR(m[2],i,g,y,s),new eR(m[1],y,a,o,g),new eR(m[0],i,a,y,g)),(l=(e>=g)<<1|t>=y)&&(u=p[p.length-1],p[p.length-1]=p[p.length-1-l],p[p.length-1-l]=u)}else{var v=t-+this._x.call(null,m.data),x=e-+this._y.call(null,m.data),b=v*v+x*x;if(b<n){var _=Math.sqrt(n=b);c=t-_,f=e-_,h=t+_,d=e+_,r=m.data}}}return r},eD.remove=function(t){if(isNaN(a=+this._x.call(null,t))||isNaN(o=+this._y.call(null,t)))return this;var e,n,r,i,a,o,s,u,l,c,f,h,d=this._root,p=this._x0,m=this._y0,y=this._x1,g=this._y1;if(!d)return this;if(d.length)for(;;){if((l=a>=(s=(p+y)/2))?p=s:y=s,(c=o>=(u=(m+g)/2))?m=u:g=u,e=d,!(d=d[f=c<<1|l]))return this;if(!d.length)break;(e[f+1&3]||e[f+2&3]||e[f+3&3])&&(n=e,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return((i=d.next)&&delete d.next,r)?i?r.next=i:delete r.next:e?(i?e[f]=i:delete e[f],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[h]=d:this._root=d)):this._root=i,this},eD.removeAll=function(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this},eD.root=function(){return this._root},eD.size=function(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t},eD.visit=function(t){var e,n,r,i,a,o,s=[],u=this._root;for(u&&s.push(new eR(u,this._x0,this._y0,this._x1,this._y1));e=s.pop();)if(!t(u=e.node,r=e.x0,i=e.y0,a=e.x1,o=e.y1)&&u.length){var l=(r+a)/2,c=(i+o)/2;(n=u[3])&&s.push(new eR(n,l,c,a,o)),(n=u[2])&&s.push(new eR(n,r,c,l,o)),(n=u[1])&&s.push(new eR(n,l,i,a,c)),(n=u[0])&&s.push(new eR(n,r,i,l,c))}return this},eD.visitAfter=function(t){var e,n=[],r=[];for(this._root&&n.push(new eR(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var i=e.node;if(i.length){var a,o=e.x0,s=e.y0,u=e.x1,l=e.y1,c=(o+u)/2,f=(s+l)/2;(a=i[0])&&n.push(new eR(a,o,s,c,f)),(a=i[1])&&n.push(new eR(a,c,s,u,f)),(a=i[2])&&n.push(new eR(a,o,f,c,l)),(a=i[3])&&n.push(new eR(a,c,f,u,l))}r.push(e)}for(;e=r.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this},eD.x=function(t){return arguments.length?(this._x=t,this):this._x},eD.y=function(t){return arguments.length?(this._y=t,this):this._y};var eU=Math.PI*(3-Math.sqrt(5));function eJ(t){let e;var n,r=1,i=.001,a=1-Math.pow(.001,1/300),o=0,s=.6,u=new Map,l=td(h),c=K("tick","end"),f=(e=1,()=>(e=(1664525*e+0x3c6ef35f)%0x100000000)/0x100000000);function h(){d(),c.call("tick",n),r<i&&(l.stop(),c.call("end",n))}function d(e){var i,l,c=t.length;void 0===e&&(e=1);for(var f=0;f<e;++f)for(r+=(o-r)*a,u.forEach(function(t){t(r)}),i=0;i<c;++i)null==(l=t[i]).fx?l.x+=l.vx*=s:(l.x=l.fx,l.vx=0),null==l.fy?l.y+=l.vy*=s:(l.y=l.fy,l.vy=0);return n}function p(){for(var e,n=0,r=t.length;n<r;++n){if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),isNaN(e.x)||isNaN(e.y)){var i=10*Math.sqrt(.5+n),a=n*eU;e.x=i*Math.cos(a),e.y=i*Math.sin(a)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function m(e){return e.initialize&&e.initialize(t,f),e}return null==t&&(t=[]),p(),n={tick:d,restart:function(){return l.restart(h),n},stop:function(){return l.stop(),n},nodes:function(e){return arguments.length?(t=e,p(),u.forEach(m),n):t},alpha:function(t){return arguments.length?(r=+t,n):r},alphaMin:function(t){return arguments.length?(i=+t,n):i},alphaDecay:function(t){return arguments.length?(a=+t,n):+a},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(s=1-t,n):1-s},randomSource:function(t){return arguments.length?(f=t,u.forEach(m),n):f},force:function(t,e){return arguments.length>1?(null==e?u.delete(t):u.set(t,m(e)),n):u.get(t)},find:function(e,n,r){var i,a,o,s,u,l=0,c=t.length;for(null==r?r=1/0:r*=r,l=0;l<c;++l)(o=(i=e-(s=t[l]).x)*i+(a=n-s.y)*a)<r&&(u=s,r=o);return u},on:function(t,e){return arguments.length>1?(c.on(t,e),n):c.on(t)}}}function eK(){var t,e,n,r,i,a=eL(-30),o=1,s=1/0,u=.81;function l(n){var i,a=t.length,o=eY(t,eH,eW).visitAfter(f);for(r=n,i=0;i<a;++i)e=t[i],o.visit(h)}function c(){if(t){var e,n,r=t.length;for(e=0,i=Array(r);e<r;++e)i[(n=t[e]).index]=+a(n,e,t)}}function f(t){var e,n,r,a,o,s=0,u=0;if(t.length){for(r=a=o=0;o<4;++o)(e=t[o])&&(n=Math.abs(e.value))&&(s+=e.value,u+=n,r+=n*e.x,a+=n*e.y);t.x=r/u,t.y=a/u}else{(e=t).x=e.data.x,e.y=e.data.y;do s+=i[e.data.index];while(e=e.next)}t.value=s}function h(t,a,l,c){if(!t.value)return!0;var f=t.x-e.x,h=t.y-e.y,d=c-a,p=f*f+h*h;if(d*d/u<p)return p<s&&(0===f&&(p+=(f=eV(n))*f),0===h&&(p+=(h=eV(n))*h),p<o&&(p=Math.sqrt(o*p)),e.vx+=f*t.value*r/p,e.vy+=h*t.value*r/p),!0;if(!t.length&&!(p>=s)){(t.data!==e||t.next)&&(0===f&&(p+=(f=eV(n))*f),0===h&&(p+=(h=eV(n))*h),p<o&&(p=Math.sqrt(o*p)));do t.data!==e&&(d=i[t.data.index]*r/p,e.vx+=f*d,e.vy+=h*d);while(t=t.next)}}return l.initialize=function(e,r){t=e,n=r,c()},l.strength=function(t){return arguments.length?(a="function"==typeof t?t:eL(+t),c(),l):a},l.distanceMin=function(t){return arguments.length?(o=t*t,l):Math.sqrt(o)},l.distanceMax=function(t){return arguments.length?(s=t*t,l):Math.sqrt(s)},l.theta=function(t){return arguments.length?(u=t*t,l):Math.sqrt(u)},l}function eZ(t){var e,n,r,i=eL(.1);function a(t){for(var i,a=0,o=e.length;a<o;++a)i=e[a],i.vx+=(r[a]-i.x)*n[a]*t}function o(){if(e){var a,o=e.length;for(a=0,n=Array(o),r=Array(o);a<o;++a)n[a]=isNaN(r[a]=+t(e[a],a,e))?0:+i(e[a],a,e)}}return"function"!=typeof t&&(t=eL(null==t?0:+t)),a.initialize=function(t){e=t,o()},a.strength=function(t){return arguments.length?(i="function"==typeof t?t:eL(+t),o(),a):i},a.x=function(e){return arguments.length?(t="function"==typeof e?e:eL(+e),o(),a):t},a}function eQ(t){var e,n,r,i=eL(.1);function a(t){for(var i,a=0,o=e.length;a<o;++a)i=e[a],i.vy+=(r[a]-i.y)*n[a]*t}function o(){if(e){var a,o=e.length;for(a=0,n=Array(o),r=Array(o);a<o;++a)n[a]=isNaN(r[a]=+t(e[a],a,e))?0:+i(e[a],a,e)}}return"function"!=typeof t&&(t=eL(null==t?0:+t)),a.initialize=function(t){e=t,o()},a.strength=function(t){return arguments.length?(i="function"==typeof t?t:eL(+t),o(),a):i},a.y=function(e){return arguments.length?(t="function"==typeof e?e:eL(+e),o(),a):t},a}let e0=Math.sqrt(50),e1=Math.sqrt(10),e3=Math.sqrt(2);function e5(t,e,n){let r,i,a;let o=(e-t)/Math.max(0,n),s=Math.floor(Math.log10(o)),u=o/Math.pow(10,s),l=u>=e0?10:u>=e1?5:u>=e3?2:1;return(s<0?(r=Math.round(t*(a=Math.pow(10,-s)/l)),i=Math.round(e*a),r/a<t&&++r,i/a>e&&--i,a=-a):(r=Math.round(t/(a=Math.pow(10,s)*l)),i=Math.round(e/a),r*a<t&&++r,i*a>e&&--i),i<r&&.5<=n&&n<2)?e5(t,e,2*n):[r,i,a]}function e2(t,e,n){return e5(t=+t,e=+e,n=+n)[2]}var e4=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function e6(t){var e;if(!(e=e4.exec(t)))throw Error("invalid format: "+t);return new e9({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function e9(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function e8(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function e7(t){return(t=e8(Math.abs(t)))?t[1]:NaN}function nt(t,e){var n=e8(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+Array(i-r.length+2).join("0")}e6.prototype=e9.prototype,e9.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};let ne={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>nt(100*t,e),r:nt,s:function(t,e){var n=e8(t,e);if(!n)return t+"";var r=n[0],i=n[1],a=i-(f=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+Array(1-a).join("0")+e8(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function nn(t){return t}var nr=Array.prototype.map,ni=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function na(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function no(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function ns(t){let e,n,r;function i(t,r,a=0,o=t.length){if(a<o){if(0!==e(r,r))return o;do{let e=a+o>>>1;0>n(t[e],r)?a=e+1:o=e}while(a<o)}return a}return 2!==t.length?(e=na,n=(e,n)=>na(t(e),n),r=(e,n)=>t(e)-n):(e=t===na||t===no?t:nu,n=t,r=t),{left:i,center:function(t,e,n=0,a=t.length){let o=i(t,e,n,a-1);return o>n&&r(t[o-1],e)>-r(t[o],e)?o-1:o},right:function(t,r,i=0,a=t.length){if(i<a){if(0!==e(r,r))return a;do{let e=i+a>>>1;0>=n(t[e],r)?i=e+1:a=e}while(i<a)}return i}}}function nu(){return 0}d=(h=function(t){var e,n,r,i=void 0===t.grouping||void 0===t.thousands?nn:(e=nr.call(t.grouping,Number),n=t.thousands+"",function(t,r){for(var i=t.length,a=[],o=0,s=e[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),a.push(t.substring(i-=s,i+s)),!((u+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(n)}),a=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?nn:(r=nr.call(t.numerals,String),function(t){return t.replace(/[0-9]/g,function(t){return r[+t]})}),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",h=void 0===t.nan?"NaN":t.nan+"";function d(t){var e=(t=e6(t)).fill,n=t.align,r=t.sign,d=t.symbol,p=t.zero,m=t.width,y=t.comma,g=t.precision,v=t.trim,x=t.type;"n"===x?(y=!0,x="g"):ne[x]||(void 0===g&&(g=12),v=!0,x="g"),(p||"0"===e&&"="===n)&&(p=!0,e="0",n="=");var b="$"===d?a:"#"===d&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",_="$"===d?o:/[%p]/.test(x)?l:"",w=ne[x],k=/[defgprs%]/.test(x);function M(t){var a,o,l,d=b,M=_;if("c"===x)M=w(t)+M,t="";else{var S=(t=+t)<0||1/t<0;if(t=isNaN(t)?h:w(Math.abs(t),g),v&&(t=function(t){t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break;case"0":0===i&&(i=r),e=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),S&&0==+t&&"+"!==r&&(S=!1),d=(S?"("===r?r:c:"-"===r||"("===r?"":r)+d,M=("s"===x?ni[8+f/3]:"")+M+(S&&"("===r?")":""),k){for(a=-1,o=t.length;++a<o;)if(48>(l=t.charCodeAt(a))||l>57){M=(46===l?s+t.slice(a+1):t.slice(a))+M,t=t.slice(0,a);break}}}y&&!p&&(t=i(t,1/0));var N=d.length+t.length+M.length,A=N<m?Array(m-N+1).join(e):"";switch(y&&p&&(t=i(A+t,A.length?m-M.length:1/0),A=""),n){case"<":t=d+t+M+A;break;case"=":t=d+A+t+M;break;case"^":t=A.slice(0,N=A.length>>1)+d+t+M+A.slice(N);break;default:t=A+d+t+M}return u(t)}return g=void 0===g?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:d,formatPrefix:function(t,e){var n=d(((t=e6(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(e7(e)/3))),i=Math.pow(10,-r),a=ni[8+r/3];return function(t){return n(i*t)+a}}}}({thousands:",",grouping:[3],currency:["$",""]})).format,p=h.formatPrefix;let nl=ns(na),nc=nl.right;nl.left,ns(function(t){return null===t?NaN:+t}).center;function nf(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function nh(t){return+t}var nd=[0,1];function np(t){return t}function nm(t,e){var n;return(e-=t=+t)?function(n){return(n-t)/e}:(n=isNaN(e)?NaN:.5,function(){return n})}function ny(t,e,n){var r=t[0],i=t[1],a=e[0],o=e[1];return i<r?(r=nm(i,r),a=n(o,a)):(r=nm(r,i),a=n(a,o)),function(t){return a(r(t))}}function ng(t,e,n){var r=Math.min(t.length,e.length)-1,i=Array(r),a=Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<r;)i[o]=nm(t[o],t[o+1]),a[o]=n(e[o],e[o+1]);return function(e){var n=nc(t,e,1,r)-1;return a[n](i[n](e))}}function nv(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function nx(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function nb(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function n_(t){return t<0?-t*t:t*t}function nw(){return(function t(){var e,n,r,i,a=(r=(n=function(){var t,e,n,r,i,a,o=nd,s=nd,u=function t(e,n){var r,i,a=typeof n;return null==n||"boolean"===a?ee(n):("number"===a?tM:"string"===a?(i=tW(n))?(n=i,er):es:n instanceof tW?er:n instanceof Date?function(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}:!ArrayBuffer.isView(r=n)||r instanceof DataView?Array.isArray(n)?function(e,n){var r,i=n?n.length:0,a=e?Math.min(i,e.length):0,o=Array(a),s=Array(i);for(r=0;r<a;++r)o[r]=t(e[r],n[r]);for(;r<i;++r)s[r]=n[r];return function(t){for(r=0;r<a;++r)s[r]=o[r](t);return s}}:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?function(e,n){var r,i={},a={};for(r in(null===e||"object"!=typeof e)&&(e={}),(null===n||"object"!=typeof n)&&(n={}),n)r in e?i[r]=t(e[r],n[r]):a[r]=n[r];return function(t){for(r in i)a[r]=i[r](t);return a}}:tM:function(t,e){e||(e=[]);var n,r=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(n=0;n<r;++n)i[n]=t[n]*(1-a)+e[n]*a;return i}})(e,n)},l=np;function c(){var t,e,n,u=Math.min(o.length,s.length);return l!==np&&(t=o[0],e=o[u-1],t>e&&(n=t,t=e,e=n),l=function(n){return Math.max(t,Math.min(e,n))}),r=u>2?ng:ny,i=a=null,f}function f(e){return null==e||isNaN(e=+e)?n:(i||(i=r(o.map(t),s,u)))(t(l(e)))}return f.invert=function(n){return l(e((a||(a=r(s,o.map(t),tM)))(n)))},f.domain=function(t){return arguments.length?(o=Array.from(t,nh),c()):o.slice()},f.range=function(t){return arguments.length?(s=Array.from(t),c()):s.slice()},f.rangeRound=function(t){return s=Array.from(t),u=nf,c()},f.clamp=function(t){return arguments.length?(l=!!t||np,c()):l!==np},f.interpolate=function(t){return arguments.length?(u=t,c()):u},f.unknown=function(t){return arguments.length?(n=t,f):n},function(n,r){return t=n,e=r,c()}}())(np,np),i=1,r.exponent=function(t){return arguments.length?1==(i=+t)?n(np,np):.5===i?n(nb,n_):n(nx(i),nx(1/i)):i},e=r.domain,r.ticks=function(t){var n=e();return function(t,e,n){if(e=+e,t=+t,!((n=+n)>0))return[];if(t===e)return[t];let r=e<t,[i,a,o]=r?e5(e,t,n):e5(t,e,n);if(!(a>=i))return[];let s=a-i+1,u=Array(s);if(r){if(o<0)for(let t=0;t<s;++t)u[t]=-((a-t)/o);else for(let t=0;t<s;++t)u[t]=(a-t)*o}else if(o<0)for(let t=0;t<s;++t)u[t]=-((i+t)/o);else for(let t=0;t<s;++t)u[t]=(i+t)*o;return u}(n[0],n[n.length-1],null==t?10:t)},r.tickFormat=function(t,n){var r=e();return function(t,e,n,r){var i,a,o=function(t,e,n){e=+e,t=+t,n=+n;let r=e<t,i=r?e2(e,t,n):e2(t,e,n);return(r?-1:1)*(i<0?-(1/i):i)}(t,e,n);switch((r=e6(null==r?",f":r)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(e));return null!=r.precision||isNaN(a=Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(e7(s)/3)))-e7(Math.abs(o))))||(r.precision=a),p(r,s);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(a=Math.max(0,e7(Math.abs(Math.max(Math.abs(t),Math.abs(e)))-(i=Math.abs(i=o)))-e7(i))+1)||(r.precision=a-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(a=Math.max(0,-e7(Math.abs(o))))||(r.precision=a-("%"===r.type)*2)}return d(r)}(r[0],r[r.length-1],null==t?10:t,n)},r.nice=function(t){null==t&&(t=10);var n,i,a=e(),o=0,s=a.length-1,u=a[o],l=a[s],c=10;for(l<u&&(i=u,u=l,l=i,i=o,o=s,s=i);c-- >0;){if((i=e2(u,l,t))===n)return a[o]=u,a[s]=l,e(a);if(i>0)u=Math.floor(u/i)*i,l=Math.ceil(l/i)*i;else if(i<0)u=Math.ceil(u*i)/i,l=Math.floor(l*i)/i;else break;n=i}return r},r);return a.copy=function(){return t().domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp()).unknown(a.unknown()).exponent(a.exponent())},nv.apply(a,arguments),a}).apply(null,arguments).exponent(.5)}function nk(t,e,n){this.k=t,this.x=e,this.y=n}nk.prototype={constructor:nk,scale:function(t){return 1===t?this:new nk(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new nk(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new nk(1,0,0),nk.prototype},7225:(t,e,n)=>{"use strict";n.d(e,{zW:()=>ei});var r,i=n(4848),a=n(6540),o=n.t(a,2),s=function(){function t(t){var e=this;this._insertTag=function(t){var n;n=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,n),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(n);try{r.insertRule(t,r.cssRules.length)}catch(t){}}else n.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),this.tags=[],this.ctr=0},t}(),u=Math.abs,l=String.fromCharCode,c=Object.assign;function f(t,e,n){return t.replace(e,n)}function h(t,e){return t.indexOf(e)}function d(t,e){return 0|t.charCodeAt(e)}function p(t,e,n){return t.slice(e,n)}function m(t){return t.length}function y(t,e){return e.push(t),t}var g=1,v=1,x=0,b=0,_=0,w="";function k(t,e,n,r,i,a,o){return{value:t,root:e,parent:n,type:r,props:i,children:a,line:g,column:v,length:o,return:""}}function M(t,e){return c(k("",null,null,"",null,null,0),t,{length:-t.length},e)}function S(){return _=b<x?d(w,b++):0,v++,10===_&&(v=1,g++),_}function N(){return d(w,b)}function A(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(t){return g=v=1,x=m(w=t),b=0,[]}function E(t){var e,n;return(e=b-1,n=function t(e){for(;S();)switch(_){case e:return b;case 34:case 39:34!==e&&39!==e&&t(_);break;case 40:41===e&&t(e);break;case 92:S()}return b}(91===t?t+2:40===t?t+1:t),p(w,e,n)).trim()}var C="-ms-",j="-moz-",z="-webkit-",P="comm",O="rule",R="decl",X="@keyframes";function T(t,e){for(var n="",r=t.length,i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Y(t,e,n,r){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case R:return t.return=t.return||t.value;case P:return"";case X:return t.return=t.value+"{"+T(t.children,r)+"}";case O:t.value=t.props.join(",")}return m(n=T(t.children,r))?t.return=t.value+"{"+n+"}":""}function I(t,e,n,r,i,a,o,s,l,c,h){for(var d=i-1,m=0===i?a:[""],y=m.length,g=0,v=0,x=0;g<r;++g)for(var b=0,_=p(t,d+1,d=u(v=o[g])),w=t;b<y;++b)(w=(v>0?m[b]+" "+_:f(_,/&\f/g,m[b])).trim())&&(l[x++]=w);return k(t,e,n,0===i?O:s,l,c,h)}function q(t,e,n,r){return k(t,e,n,R,p(t,0,r),p(t,r+1,-1),r)}var D=function(t,e,n){for(var r=0,i=0;r=i,i=N(),38===r&&12===i&&(e[n]=1),!A(i);)S();return p(w,t,b)},L=function(t,e){var n=-1,r=44;do switch(A(r)){case 0:38===r&&12===N()&&(e[n]=1),t[n]+=D(b-1,e,n);break;case 2:t[n]+=E(r);break;case 4:if(44===r){t[++n]=58===N()?"&\f":"",e[n]=t[n].length;break}default:t[n]+=l(r)}while(r=S());return t},V=function(t,e){var n;return n=L($(t),e),w="",n},F=new WeakMap,B=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,n=t.parent,r=t.column===n.column&&t.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||F.get(n))&&!r){F.set(t,!0);for(var i=[],a=V(e,i),o=n.props,s=0,u=0;s<a.length;s++)for(var l=0;l<o.length;l++,u++)t.props[u]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+" "+a[s]}}},G=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},H=[function(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case R:t.return=function t(e,n){switch(45^d(e,0)?(((n<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3):0){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+j+e+C+e+e;case 6828:case 4268:return z+e+C+e+e;case 6165:return z+e+C+"flex-"+e+e;case 5187:return z+e+f(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return z+e+C+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return z+e+C+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return z+e+C+f(e,"shrink","negative")+e;case 5292:return z+e+C+f(e,"basis","preferred-size")+e;case 6060:return z+"box-"+f(e,"-grow","")+z+e+C+f(e,"grow","positive")+e;case 4554:return z+f(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-n>6)switch(d(e,n+1)){case 109:if(45!==d(e,n+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+j+(108==d(e,n+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?t(f(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==d(e,n+1))break;case 6444:switch(d(e,m(e)-3-(~h(e,"!important")&&10))){case 107:return f(e,":",":"+z)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(45===d(e,14)?"inline-":"")+"box$3$1"+z+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(d(e,n+11)){case 114:return z+e+C+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+C+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+C+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return z+e+C+e+e}return e}(t.value,t.length);break;case X:return T([M(t,{value:f(t.value,"@","@"+z)})],r);case O:if(t.length){var i,a;return i=t.props,a=function(e){var n;switch(n=e,(n=/(::plac\w+|:read-\w+)/.exec(n))?n[0]:n){case":read-only":case":read-write":return T([M(t,{props:[f(e,/:(read-\w+)/,":"+j+"$1")]})],r);case"::placeholder":return T([M(t,{props:[f(e,/:(plac\w+)/,":"+z+"input-$1")]}),M(t,{props:[f(e,/:(plac\w+)/,":"+j+"$1")]}),M(t,{props:[f(e,/:(plac\w+)/,C+"input-$1")]})],r)}return""},i.map(a).join("")}}}];function W(t,e,n){var r="";return n.split(" ").forEach(function(n){void 0!==t[n]?e.push(t[n]+";"):n&&(r+=n+" ")}),r}var U=function(t,e,n){var r=t.key+"-"+e.name;!1===n&&void 0===t.registered[r]&&(t.registered[r]=e.styles)},J=function(t,e,n){U(t,e,n);var r=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var i=e;do t.insert(e===i?"."+r:"",i,t.sheet,!0),i=i.next;while(void 0!==i)}},K={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Z=/[A-Z]|^ms/g,Q=/_EMO_([^_]+?)_([^]*?)_EMO_/g,tt=function(t){return 45===t.charCodeAt(1)},te=function(t){return null!=t&&"boolean"!=typeof t},tn=function(t){var e=Object.create(null);return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}(function(t){return tt(t)?t:t.replace(Z,"-$&").toLowerCase()}),tr=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(Q,function(t,e,n){return r={name:e,styles:n,next:r},e})}return 1===K[t]||tt(t)||"number"!=typeof e||0===e?e:e+"px"};function ti(t,e,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return r={name:n.name,styles:n.styles,next:r},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)r={name:i.name,styles:i.styles,next:r},i=i.next;return n.styles+";"}return function(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ti(t,e,n[i])+";";else for(var a in n){var o=n[a];if("object"!=typeof o)null!=e&&void 0!==e[o]?r+=a+"{"+e[o]+"}":te(o)&&(r+=tn(a)+":"+tr(a,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==e||void 0===e[o[0]]))for(var s=0;s<o.length;s++)te(o[s])&&(r+=tn(a)+":"+tr(a,o[s])+";");else{var u=ti(t,e,o);switch(a){case"animation":case"animationName":r+=tn(a)+":"+u+";";break;default:r+=a+"{"+u+"}"}}}return r}(t,e,n);case"function":if(void 0!==t){var a=r,o=n(t);return r=a,ti(t,e,o)}}if(null==e)return n;var s=e[n];return void 0!==s?s:n}var ta=/label:\s*([^\s;{]+)\s*(;|$)/g;function to(t,e,n){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var i,a=!0,o="";r=void 0;var s=t[0];null==s||void 0===s.raw?(a=!1,o+=ti(n,e,s)):o+=s[0];for(var u=1;u<t.length;u++)o+=ti(n,e,t[u]),a&&(o+=s[u]);ta.lastIndex=0;for(var l="";null!==(i=ta.exec(o));)l+="-"+i[1];return{name:function(t){for(var e,n=0,r=0,i=t.length;i>=4;++r,i-=4)e=(65535&(e=255&t.charCodeAt(r)|(255&t.charCodeAt(++r))<<8|(255&t.charCodeAt(++r))<<16|(255&t.charCodeAt(++r))<<24))*0x5bd1e995+((e>>>16)*59797<<16),e^=e>>>24,n=(65535&e)*0x5bd1e995+((e>>>16)*59797<<16)^(65535&n)*0x5bd1e995+((n>>>16)*59797<<16);switch(i){case 3:n^=(255&t.charCodeAt(r+2))<<16;case 2:n^=(255&t.charCodeAt(r+1))<<8;case 1:n^=255&t.charCodeAt(r),n=(65535&n)*0x5bd1e995+((n>>>16)*59797<<16)}return n^=n>>>13,(((n=(65535&n)*0x5bd1e995+((n>>>16)*59797<<16))^n>>>15)>>>0).toString(36)}(o)+l,styles:o,next:r}}var ts=!!o.useInsertionEffect&&o.useInsertionEffect,tu=ts||function(t){return t()};ts||a.useLayoutEffect;var tl=a.createContext("undefined"!=typeof HTMLElement?function(t){var e,n,r,i,a,o,u=t.key;if("css"===u){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var x=t.stylisPlugins||H,M={},C=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+u+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),n=1;n<e.length;n++)M[e[n]]=!0;C.push(t)});var j=(n=(e=[B,G].concat(x,[Y,(r=function(t){o.insert(t)},function(t){!t.root&&(t=t.return)&&r(t)})])).length,function(t,r,i,a){for(var o="",s=0;s<n;s++)o+=e[s](t,r,i,a)||"";return o}),z=function(t){var e,n;return T((n=function t(e,n,r,i,a,o,s,u,c){for(var x,M=0,$=0,C=s,j=0,z=0,O=0,R=1,X=1,T=1,Y=0,D="",L=a,V=o,F=i,B=D;X;)switch(O=Y,Y=S()){case 40:if(108!=O&&58==d(B,C-1)){-1!=h(B+=f(E(Y),"&","&\f"),"&\f")&&(T=-1);break}case 34:case 39:case 91:B+=E(Y);break;case 9:case 10:case 13:case 32:B+=function(t){for(;_=N();)if(_<33)S();else break;return A(t)>2||A(_)>3?"":" "}(O);break;case 92:B+=function(t,e){for(var n;--e&&S()&&!(_<48)&&!(_>102)&&(!(_>57)||!(_<65))&&(!(_>70)||!(_<97)););return n=b+(e<6&&32==N()&&32==S()),p(w,t,n)}(b-1,7);continue;case 47:switch(N()){case 42:case 47:y(k(x=function(t,e){for(;S();)if(t+_===57)break;else if(t+_===84&&47===N())break;return"/*"+p(w,e,b-1)+"*"+l(47===t?t:S())}(S(),b),n,r,P,l(_),p(x,2,-2),0),c);break;default:B+="/"}break;case 123*R:u[M++]=m(B)*T;case 125*R:case 59:case 0:switch(Y){case 0:case 125:X=0;case 59+$:-1==T&&(B=f(B,/\f/g,"")),z>0&&m(B)-C&&y(z>32?q(B+";",i,r,C-1):q(f(B," ","")+";",i,r,C-2),c);break;case 59:B+=";";default:if(y(F=I(B,n,r,M,$,a,u,D,L=[],V=[],C),o),123===Y){if(0===$)t(B,n,F,F,L,o,C,u,V);else switch(99===j&&110===d(B,3)?100:j){case 100:case 108:case 109:case 115:t(e,F,F,i&&y(I(e,F,F,0,0,a,u,D,a,L=[],C),V),a,V,C,u,i?L:V);break;default:t(B,F,F,F,[""],V,0,u,V)}}}M=$=z=0,R=T=1,D=B="",C=s;break;case 58:C=1+m(B),z=O;default:if(R<1){if(123==Y)--R;else if(125==Y&&0==R++&&125==(_=b>0?d(w,--b):0,v--,10===_&&(v=1,g--),_))continue}switch(B+=l(Y),Y*R){case 38:T=$>0?1:(B+="\f",-1);break;case 44:u[M++]=(m(B)-1)*T,T=1;break;case 64:45===N()&&(B+=E(S())),j=N(),$=C=m(D=B+=function(t){for(;!A(N());)S();return p(w,t,b)}(b)),Y++;break;case 45:45===O&&2==m(B)&&(R=0)}}return o}("",null,null,null,[""],e=$(e=t),0,[0],e),w="",n),j)};a=function(t,e,n,r){o=n,z(t?t+"{"+e.styles+"}":e.styles),r&&(O.inserted[e.name]=!0)};var O={key:u,sheet:new s({key:u,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:M,registered:{},insert:a};return O.sheet.hydrate(C),O}({key:"css"}):null);tl.Provider;var tc=function(t){return(0,a.forwardRef)(function(e,n){return t(e,(0,a.useContext)(tl),n)})},tf=a.createContext({}),th={}.hasOwnProperty,td="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tp=function(t,e){var n={};for(var r in e)th.call(e,r)&&(n[r]=e[r]);return n[td]=t,n},tm=function(t){var e=t.cache,n=t.serialized,r=t.isStringTag;return U(e,n,r),tu(function(){return J(e,n,r)}),null},ty=tc(function(t,e,n){var r=t.css;"string"==typeof r&&void 0!==e.registered[r]&&(r=e.registered[r]);var i=t[td],o=[r],s="";"string"==typeof t.className?s=W(e.registered,o,t.className):null!=t.className&&(s=t.className+" ");var u=to(o,void 0,a.useContext(tf));s+=e.key+"-"+u.name;var l={};for(var c in t)th.call(t,c)&&"css"!==c&&c!==td&&(l[c]=t[c]);return l.className=s,n&&(l.ref=n),a.createElement(a.Fragment,null,a.createElement(tm,{cache:e,serialized:u,isStringTag:"string"==typeof i}),a.createElement(i,l))});n(4146);var tg=i.Fragment,tv=function(t,e,n){return th.call(e,"css")?i.jsx(ty,tp(t,e),n):i.jsx(t,e,n)},tx=function(t,e){var n=arguments;if(null==e||!th.call(e,"css"))return a.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=ty,i[1]=tp(t,e);for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)};function tb(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return to(e)}function t_(){var t=tb.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}!function(t){var e;e||(e=t.JSX||(t.JSX={}))}(tx||(tx={}));var tw=function t(e){for(var n=e.length,r=0,i="";r<n;r++){var a=e[r];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=t(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(i&&(i+=" "),i+=o)}}return i},tk=function(t){var e=t.cache,n=t.serializedArr;return tu(function(){for(var t=0;t<n.length;t++)J(e,n[t],!1)}),null},tM=tc(function(t,e){var n=[],r=function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];var a=to(r,e.registered);return n.push(a),U(e,a,!1),e.key+"-"+a.name},i={css:r,cx:function(){for(var t,n,i,a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return i=W(e.registered,n=[],t=tw(o)),n.length<2?t:i+r(n)},theme:a.useContext(tf)},o=t.children(i);return a.createElement(a.Fragment,null,a.createElement(tk,{cache:e,serializedArr:n}),o)}),tS=Object.defineProperty,tN=(t,e,n)=>e in t?tS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tA=(t,e,n)=>tN(t,"symbol"!=typeof e?e+"":e,n),t$=new Map,tE=new WeakMap,tC=0,tj=void 0;function tz(t,e,n={},r=tj){if(void 0===window.IntersectionObserver&&void 0!==r){let i=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:a,elements:o}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var n;return`${e}_${"root"===e?(n=t.root)?(tE.has(n)||(tC+=1,tE.set(n,tC.toString())),tE.get(n)):"0":t[e]}`}).toString(),n=t$.get(e);if(!n){let r;let i=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{var n;let a=e.isIntersecting&&r.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=a),null==(n=i.get(e.target))||n.forEach(t=>{t(a,e)})})},t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:a,elements:i},t$.set(e,n)}return n}(n),s=o.get(t)||[];return o.has(t)||o.set(t,s),s.push(e),a.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(o.delete(t),a.unobserve(t)),0===o.size&&(a.disconnect(),t$.delete(i))}}var tP=class extends a.Component{constructor(t){super(t),tA(this,"node",null),tA(this,"_unobserveCb",null),tA(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),tA(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=tz(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}let{as:e,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:s,skip:u,trackVisibility:l,delay:c,initialInView:f,fallbackInView:h,...d}=this.props;return a.createElement(e||"div",{ref:this.handleNode,...d},t)}};function tO({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:u,fallbackInView:l,onChange:c}={}){var f;let[h,d]=a.useState(null),p=a.useRef(c),[m,y]=a.useState({inView:!!u,entry:void 0});p.current=c,a.useEffect(()=>{let a;if(!s&&h)return a=tz(h,(t,e)=>{y({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&o&&a&&(a(),a=void 0)},{root:i,rootMargin:r,threshold:t,trackVisibility:n,delay:e},l),()=>{a&&a()}},[Array.isArray(t)?t.toString():t,h,i,r,o,s,n,l,e]);let g=null==(f=m.entry)?void 0:f.target,v=a.useRef(void 0);h||!g||o||s||v.current===g||(v.current=g,y({inView:!!u,entry:void 0}));let x=[d,m.inView,m.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var tR=n(8338);t_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,t_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,t_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,t_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,t_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,t_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,t_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,t_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,t_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,t_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,t_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,t_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,t_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let tX=t_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tT=t_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tY=t_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tI=t_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tq=t_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tD=t_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tL=t_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tV=t_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tF=t_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tB=t_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tG=t_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tH=t_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tW=t_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function tU(t){var e;return e=()=>null,n=>n?t():e()}function tJ(t){return tU(()=>({opacity:0}))(t)}let tK=t=>{let{cascade:e=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:s=tD,triggerOnce:u=!1,className:l,style:c,childClassName:f,childStyle:h,children:d,onVisibilityChange:p}=t,m=(0,a.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:r=tD,iterationCount:i=1}){return tb`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:s,duration:i}),[i,s]);return void 0==d?null:!function(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}(d)?(0,tR.isFragment)(d)?tv(t0,{...t,animationStyles:m}):tv(tg,{children:a.Children.map(d,(s,d)=>{if(!(0,a.isValidElement)(s))return null;let y=r+(e?d*i*n:0);switch(s.type){case"ol":case"ul":return tv(tM,{children:({cx:e})=>tv(s.type,{...s.props,className:e(l,s.props.className),style:Object.assign({},c,s.props.style),children:tv(tK,{...t,children:s.props.children})})});case"li":return tv(tP,{threshold:o,triggerOnce:u,onChange:p,children:({inView:t,ref:e})=>tv(tM,{children:({cx:n})=>tv(s.type,{...s.props,ref:e,className:n(f,s.props.className),css:tU(()=>m)(t),style:Object.assign({},h,s.props.style,tJ(!t),{animationDelay:y+"ms"})})})});default:return tv(tP,{threshold:o,triggerOnce:u,onChange:p,children:({inView:t,ref:e})=>tv("div",{ref:e,className:l,css:tU(()=>m)(t),style:Object.assign({},c,tJ(!t),{animationDelay:y+"ms"}),children:tv(tM,{children:({cx:t})=>tv(s.type,{...s.props,className:t(f,s.props.className),style:Object.assign({},h,s.props.style)})})})})}})}):tv(tQ,{...t,animationStyles:m,children:String(d)})},tZ={display:"inline-block",whiteSpace:"pre"},tQ=t=>{var e,n;let{animationStyles:r,cascade:i=!1,damping:a=.5,delay:o=0,duration:s=1e3,fraction:u=0,triggerOnce:l=!1,className:c,style:f,children:h,onVisibilityChange:d}=t,{ref:p,inView:m}=tO({triggerOnce:l,threshold:u,onChange:d});return(e=()=>tv("div",{ref:p,className:c,style:Object.assign({},f,tZ),children:h.split("").map((t,e)=>tv("span",{css:tU(()=>r)(m),style:{animationDelay:o+e*s*a+"ms"},children:t},e))}),n=()=>tv(t0,{...t,children:h}),t=>t?e():n())(i)},t0=t=>{let{animationStyles:e,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:s}=t,{ref:u,inView:l}=tO({triggerOnce:r,threshold:n,onChange:s});return tv("div",{ref:u,className:i,css:tU(()=>e)(l),style:Object.assign({},a,tJ(!l)),children:o})},t1=(t_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,t_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,t_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,t_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,t_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,t_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`),t3=t_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,t5=t_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,t2=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,t4=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,t6=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,t9=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,t8=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,t7=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,et=t_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ee=t_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,en=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,er=t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,ei=t=>{let{big:e=!1,direction:n,reverse:r=!1,...i}=t;return tv(tK,{keyframes:(0,a.useMemo)(()=>(function(t,e,n){switch(n){case"bottom-left":return e?t3:tT;case"bottom-right":return e?t5:tY;case"down":return t?e?t4:tq:e?t2:tI;case"left":return t?e?t9:tL:e?t6:tD;case"right":return t?e?t7:tF:e?t8:tV;case"top-left":return e?et:tB;case"top-right":return e?ee:tG;case"up":return t?e?er:tW:e?en:tH;default:return e?t1:tX}})(e,r,n),[e,n,r]),...i})};t_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,t_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,t_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,t_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,t_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,t_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,t_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,t_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,t_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,t_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,t_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,t_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,t_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,t_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,t_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,t_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,t_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,t_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,t_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,t_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,t_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,t_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,t_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,t_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,t_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,t_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,t_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);