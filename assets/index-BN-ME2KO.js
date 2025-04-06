(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Uf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Cx(){if(Og)return Mo;Og=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var Pg;function wx(){return Pg||(Pg=1,Uf.exports=Cx()),Uf.exports}var It=wx(),Lf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Dx(){if(zg)return le;zg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(L,nt,Mt){this.props=L,this.context=nt,this.refs=C,this.updater=Mt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(L,nt,Mt){this.props=L,this.context=nt,this.refs=C,this.updater=Mt||M}var N=P.prototype=new v;N.constructor=P,T(N,y.prototype),N.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function F(L,nt,Mt,At,Y,pt){return Mt=pt.ref,{$$typeof:o,type:L,key:nt,ref:Mt!==void 0?Mt:null,props:pt}}function W(L,nt){return F(L.type,nt,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function b(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return nt[Mt]})}var B=/\/+/g;function ut(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):nt.toString(36)}function at(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(at,at):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function dt(L,nt,Mt,At,Y){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case t:xt=!0;break;case _:return xt=L._init,dt(xt(L._payload),nt,Mt,At,Y)}}if(xt)return Y=Y(L),xt=At===""?"."+ut(L,0):At,D(Y)?(Mt="",xt!=null&&(Mt=xt.replace(B,"$&/")+"/"),dt(Y,nt,Mt,"",function(Zt){return Zt})):Y!=null&&(w(Y)&&(Y=W(Y,Mt+(Y.key==null||L&&L.key===Y.key?"":(""+Y.key).replace(B,"$&/")+"/")+xt)),nt.push(Y)),1;xt=0;var Et=At===""?".":At+":";if(D(L))for(var Ct=0;Ct<L.length;Ct++)At=L[Ct],pt=Et+ut(At,Ct),xt+=dt(At,nt,Mt,pt,Y);else if(Ct=g(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(At=L.next()).done;)At=At.value,pt=Et+ut(At,Ct++),xt+=dt(At,nt,Mt,pt,Y);else if(pt==="object"){if(typeof L.then=="function")return dt(mt(L),nt,Mt,At,Y);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function G(L,nt,Mt){if(L==null)return L;var At=[],Y=0;return dt(L,At,"","",function(pt){return nt.call(Mt,pt,Y++)}),At}function rt(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(Mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Mt)},function(Mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Mt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var j=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function vt(){}return le.Children={map:G,forEach:function(L,nt,Mt){G(L,function(){nt.apply(this,arguments)},Mt)},count:function(L){var nt=0;return G(L,function(){nt++}),nt},toArray:function(L){return G(L,function(nt){return nt})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=P,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,nt,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=T({},L.props),Y=L.key,pt=void 0;if(nt!=null)for(xt in nt.ref!==void 0&&(pt=void 0),nt.key!==void 0&&(Y=""+nt.key),nt)!I.call(nt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&nt.ref===void 0||(At[xt]=nt[xt]);var xt=arguments.length-2;if(xt===1)At.children=Mt;else if(1<xt){for(var Et=Array(xt),Ct=0;Ct<xt;Ct++)Et[Ct]=arguments[Ct+2];At.children=Et}return F(L.type,Y,void 0,void 0,pt,At)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},le.createElement=function(L,nt,Mt){var At,Y={},pt=null;if(nt!=null)for(At in nt.key!==void 0&&(pt=""+nt.key),nt)I.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Y[At]=nt[At]);var xt=arguments.length-2;if(xt===1)Y.children=Mt;else if(1<xt){for(var Et=Array(xt),Ct=0;Ct<xt;Ct++)Et[Ct]=arguments[Ct+2];Y.children=Et}if(L&&L.defaultProps)for(At in xt=L.defaultProps,xt)Y[At]===void 0&&(Y[At]=xt[At]);return F(L,pt,void 0,void 0,null,Y)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=w,le.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:rt}},le.memo=function(L,nt){return{$$typeof:m,type:L,compare:nt===void 0?null:nt}},le.startTransition=function(L){var nt=H.T,Mt={};H.T=Mt;try{var At=L(),Y=H.S;Y!==null&&Y(Mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(vt,j)}catch(pt){j(pt)}finally{H.T=nt}},le.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},le.use=function(L){return H.H.use(L)},le.useActionState=function(L,nt,Mt){return H.H.useActionState(L,nt,Mt)},le.useCallback=function(L,nt){return H.H.useCallback(L,nt)},le.useContext=function(L){return H.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,nt){return H.H.useDeferredValue(L,nt)},le.useEffect=function(L,nt){return H.H.useEffect(L,nt)},le.useId=function(){return H.H.useId()},le.useImperativeHandle=function(L,nt,Mt){return H.H.useImperativeHandle(L,nt,Mt)},le.useInsertionEffect=function(L,nt){return H.H.useInsertionEffect(L,nt)},le.useLayoutEffect=function(L,nt){return H.H.useLayoutEffect(L,nt)},le.useMemo=function(L,nt){return H.H.useMemo(L,nt)},le.useOptimistic=function(L,nt){return H.H.useOptimistic(L,nt)},le.useReducer=function(L,nt,Mt){return H.H.useReducer(L,nt,Mt)},le.useRef=function(L){return H.H.useRef(L)},le.useState=function(L){return H.H.useState(L)},le.useSyncExternalStore=function(L,nt,Mt){return H.H.useSyncExternalStore(L,nt,Mt)},le.useTransition=function(){return H.H.useTransition()},le.version="19.0.0",le}var Bg;function rd(){return Bg||(Bg=1,Lf.exports=Dx()),Lf.exports}var Sn=rd(),Nf={exports:{}},yo={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Ux(){return Fg||(Fg=1,function(o){function t(G,rt){var j=G.length;G.push(rt);t:for(;0<j;){var vt=j-1>>>1,L=G[vt];if(0<l(L,rt))G[vt]=rt,G[j]=L,j=vt;else break t}}function i(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var rt=G[0],j=G.pop();if(j!==rt){G[0]=j;t:for(var vt=0,L=G.length,nt=L>>>1;vt<nt;){var Mt=2*(vt+1)-1,At=G[Mt],Y=Mt+1,pt=G[Y];if(0>l(At,j))Y<L&&0>l(pt,At)?(G[vt]=pt,G[Y]=j,vt=Y):(G[vt]=At,G[Mt]=j,vt=Mt);else if(Y<L&&0>l(pt,j))G[vt]=pt,G[Y]=j,vt=Y;else break t}}return rt}function l(G,rt){var j=G.sortIndex-rt.sortIndex;return j!==0?j:G.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,x=null,g=3,M=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(G){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=G)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(G){if(C=!1,N(G),!T)if(i(p)!==null)T=!0,mt();else{var rt=i(m);rt!==null&&dt(D,rt.startTime-G)}}var H=!1,I=-1,F=5,W=-1;function w(){return!(o.unstable_now()-W<F)}function b(){if(H){var G=o.unstable_now();W=G;var rt=!0;try{t:{T=!1,C&&(C=!1,v(I),I=-1),M=!0;var j=g;try{e:{for(N(G),x=i(p);x!==null&&!(x.expirationTime>G&&w());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,g=x.priorityLevel;var L=vt(x.expirationTime<=G);if(G=o.unstable_now(),typeof L=="function"){x.callback=L,N(G),rt=!0;break e}x===i(p)&&r(p),N(G)}else r(p);x=i(p)}if(x!==null)rt=!0;else{var nt=i(m);nt!==null&&dt(D,nt.startTime-G),rt=!1}}break t}finally{x=null,g=j,M=!1}rt=void 0}}finally{rt?B():H=!1}}}var B;if(typeof P=="function")B=function(){P(b)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,at=ut.port2;ut.port1.onmessage=b,B=function(){at.postMessage(null)}}else B=function(){y(b,0)};function mt(){H||(H=!0,B())}function dt(G,rt){I=y(function(){G(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){T||M||(T=!0,mt())},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(G){switch(g){case 1:case 2:case 3:var rt=3;break;default:rt=g}var j=g;g=rt;try{return G()}finally{g=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,rt){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var j=g;g=G;try{return rt()}finally{g=j}},o.unstable_scheduleCallback=function(G,rt,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,G){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=j+L,G={id:_++,callback:rt,priorityLevel:G,startTime:j,expirationTime:L,sortIndex:-1},j>vt?(G.sortIndex=j,t(m,G),i(p)===null&&G===i(m)&&(C?(v(I),I=-1):C=!0,dt(D,j-vt))):(G.sortIndex=L,t(p,G),T||M||(T=!0,mt())),G},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(G){var rt=g;return function(){var j=g;g=rt;try{return G.apply(this,arguments)}finally{g=j}}}}(Pf)),Pf}var Ig;function Lx(){return Ig||(Ig=1,Of.exports=Ux()),Of.exports}var zf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Nx(){if(Hg)return Tn;Hg=1;var o=rd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},Tn.flushSync=function(p){var m=h.T,_=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=_,r.d.f()}},Tn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Tn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Tn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&r.d.X(p,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Tn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Tn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Tn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Tn.requestFormReset=function(p){r.d.r(p)},Tn.unstable_batchedUpdates=function(p,m){return p(m)},Tn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var Gg;function Ox(){if(Gg)return zf.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zf.exports=Nx(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Px(){if(Vg)return yo;Vg=1;var o=Lx(),t=rd(),i=Ox();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),g=Symbol.for("react.consumer"),M=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case C:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case g:return(e._context.displayName||"Context")+".Consumer";case T:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,B,ut;function at(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+ut}var mt=!1;function dt(e,n){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ct){var it=ct}Reflect.construct(e,[],St)}else{try{St.call()}catch(ct){it=ct}e.call(St.prototype)}}else{try{throw Error()}catch(ct){it=ct}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var O=S.split(`
`),k=A.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===k.length)for(s=O.length-1,c=k.length-1;1<=s&&0<=c&&O[s]!==k[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==k[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==k[c]){var ft=`
`+O[s].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=s&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function G(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=dt(e.type,!1),e;case 11:return e=dt(e.type.render,!1),e;case 1:return e=dt(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=G(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function vt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(j(e)!==e)throw Error(r(188))}function nt(e){var n=e.alternate;if(!n){if(n=j(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===s)return L(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Mt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Mt(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function Ct(e){return{current:e}}function Zt(e){0>Et||(e.current=xt[Et],xt[Et]=null,Et--)}function Ot(e,n){Et++,xt[Et]=e.current,e.current=n}var Me=Ct(null),we=Ct(null),$t=Ct(null),z=Ct(null);function Ge(e,n){switch(Ot($t,n),Ot(we,e),Ot(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?cg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=cg(e),n=ug(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Zt(Me),Ot(Me,n)}function ae(){Zt(Me),Zt(we),Zt($t)}function oe(e){e.memoizedState!==null&&Ot(z,e);var n=Me.current,a=ug(n,e.type);n!==a&&(Ot(we,e),Ot(Me,a))}function Vt(e){we.current===e&&(Zt(Me),Zt(we)),z.current===e&&(Zt(z),go._currentValue=pt)}var Ee=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,$=o.unstable_requestPaint,ht=o.unstable_now,st=o.unstable_getCurrentPriorityLevel,ot=o.unstable_ImmediatePriority,bt=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,he=o.unstable_IdlePriority,Tt=o.log,Ft=o.unstable_setDisableYieldValue,qt=null,Xt=null;function Ht(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Tt=="function"&&Ft(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(qt,e)}catch{}}var Kt=Math.clz32?Math.clz32:Nt,Ue=Math.log,X=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Ue(e)/X|0)|0}var lt=128,_t=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?s=Dt(a):(f&=A,f!==0?s=Dt(f):e||(S=A&~S,S!==0&&(s=Dt(S))))):(A=a&~c,A!==0?s=Dt(A):f!==0?s=Dt(f):e||(S=a&~S,S!==0&&(s=Dt(S)))),s===0?0:n!==0&&n!==s&&(n&c)===0&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function He(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=lt;return lt<<=1,(lt&4194176)===0&&(lt=128),e}function Te(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Rn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bo(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,O=e.expirationTimes,k=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Kt(a),St=1<<ft;A[ft]=0,O[ft]=-1;var it=k[ft];if(it!==null)for(k[ft]=null,ft=0;ft<it.length;ft++){var ct=it[ft];ct!==null&&(ct.lane&=-536870913)}a&=~St}s!==0&&As(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function As(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Kt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function Ei(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Kt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function Fo(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var kn=Math.random().toString(36).slice(2),an="__reactFiber$"+kn,rn="__reactProps$"+kn,Li="__reactContainer$"+kn,xr="__reactEvents$"+kn,Cc="__reactListeners$"+kn,wc="__reactHandles$"+kn,Io="__reactResources$"+kn,Ba="__reactMarker$"+kn;function Cs(e){delete e[an],delete e[rn],delete e[xr],delete e[Cc],delete e[wc]}function Ni(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dg(e);e!==null;){if(a=e[an])return a;e=dg(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[an]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function et(e){var n=e[Io];return n||(n=e[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ba]=!0}var Z=new Set,yt={};function wt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(yt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},jt={};function _e(e){return Ee.call(jt,e)?!0:Ee.call(ne,e)?!1:ee.test(e)?jt[e]=!0:(ne[e]=!0,!1)}function ve(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ie(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=Qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=sn(e))}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function fn(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,s,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?yn(e,S,ie(n)):a!=null?yn(e,S,ie(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ie(A):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function yn(e,n,a){n==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function We(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Sr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||b0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&_d(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&_d(e,f,n[f])}function Dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return R0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uc=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,yr=null;function xd(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[rn]||null;if(!c)throw Error(r(90));Le(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Pn(s)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&We(e,!!a.multiple,n,!1)}}}var Nc=!1;function Sd(e,n,a){if(Nc)return e(n,a);Nc=!0;try{var s=e(n);return s}finally{if(Nc=!1,(Mr!==null||yr!==null)&&(El(),Mr&&(n=Mr,e=yr,yr=Mr=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function ws(e,n){var a=e.stateNode;if(a===null)return null;var s=a[rn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Pt)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{Oc=!1}var ra=null,Pc=null,Go=null;function Md(){if(Go)return Go;var e,n=Pc,a=n.length,s,c="value"in ra?ra.value:ra.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Go=c.slice(e,1<s?1-s:void 0)}function Vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function yd(){return!1}function Bn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:yd,this.isPropagationStopped=yd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Bn(Fa),Us=b({},Fa,{view:0,detail:0}),C0=Bn(Us),zc,Bc,Ls,Wo=b({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ls&&(Ls&&e.type==="mousemove"?(zc=e.screenX-Ls.screenX,Bc=e.screenY-Ls.screenY):Bc=zc=0,Ls=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),Ed=Bn(Wo),w0=b({},Wo,{dataTransfer:0}),D0=Bn(w0),U0=b({},Us,{relatedTarget:0}),Fc=Bn(U0),L0=b({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Bn(L0),O0=b({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=Bn(O0),z0=b({},Fa,{data:0}),Td=Bn(z0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=I0[e])?!!n[e]:!1}function Ic(){return H0}var G0=b({},Us,{key:function(e){if(e.key){var n=B0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=Bn(G0),k0=b({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Bn(k0),X0=b({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),W0=Bn(X0),q0=b({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Bn(q0),j0=b({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Bn(j0),K0=b({},Fa,{newState:0,oldState:0}),Q0=Bn(K0),J0=[9,13,27,32],Hc=Pt&&"CompositionEvent"in window,Ns=null;Pt&&"documentMode"in document&&(Ns=document.documentMode);var $0=Pt&&"TextEvent"in window&&!Ns,Ad=Pt&&(!Hc||Ns&&8<Ns&&11>=Ns),Rd=" ",Cd=!1;function wd(e,n){switch(e){case"keyup":return J0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function tv(e,n){switch(e){case"compositionend":return Dd(n);case"keypress":return n.which!==32?null:(Cd=!0,Rd);case"textInput":return e=n.data,e===Rd&&Cd?null:e;default:return null}}function ev(e,n){if(Er)return e==="compositionend"||!Hc&&wd(e,n)?(e=Md(),Go=Pc=ra=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nv[e.type]:n==="textarea"}function Ld(e,n,a,s){Mr?yr?yr.push(s):yr=[s]:Mr=s,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Os=null,Ps=null;function iv(e){ag(e,0)}function qo(e){var n=q(e);if(Pn(n))return e}function Nd(e,n){if(e==="change")return n}var Od=!1;if(Pt){var Gc;if(Pt){var Vc="oninput"in document;if(!Vc){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Vc=typeof Pd.oninput=="function"}Gc=Vc}else Gc=!1;Od=Gc&&(!document.documentMode||9<document.documentMode)}function zd(){Os&&(Os.detachEvent("onpropertychange",Bd),Ps=Os=null)}function Bd(e){if(e.propertyName==="value"&&qo(Ps)){var n=[];Ld(n,Ps,e,Lc(e)),Sd(iv,n)}}function av(e,n,a){e==="focusin"?(zd(),Os=n,Ps=a,Os.attachEvent("onpropertychange",Bd)):e==="focusout"&&zd()}function rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ps)}function sv(e,n){if(e==="click")return qo(n)}function ov(e,n){if(e==="input"||e==="change")return qo(n)}function lv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:lv;function zs(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ee.call(n,c)||!Xn(e[c],n[c]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,n){var a=Fd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Hd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hi(e.document)}return n}function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cv(e,n){var a=Gd(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(s!==null&&kc(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=Id(n,f);var S=Id(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var uv=Pt&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xc=null,Bs=null,Wc=!1;function Vd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Tr==null||Tr!==hi(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bs&&zs(Bs,s)||(Bs=s,s=Cl(Xc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Tr)))}function Ia(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var br={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},qc={},kd={};Pt&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ha(e){if(qc[e])return qc[e];if(!br[e])return e;var n=br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kd)return qc[e]=n[a];return e}var Xd=Ha("animationend"),Wd=Ha("animationiteration"),qd=Ha("animationstart"),fv=Ha("transitionrun"),hv=Ha("transitionstart"),dv=Ha("transitioncancel"),Yd=Ha("transitionend"),jd=new Map,Zd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function di(e,n){jd.set(e,n),wt(n,[e])}var Jn=[],Ar=0,Yc=0;function Yo(){for(var e=Ar,n=Yc=Ar=0;n<e;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Kd(a,c,f)}}function jo(e,n,a,s){Jn[Ar++]=e,Jn[Ar++]=n,Jn[Ar++]=a,Jn[Ar++]=s,Yc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function jc(e,n,a,s){return jo(e,n,a,s),Zo(e)}function sa(e,n){return jo(e,null,null,n),Zo(e)}function Kd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Kt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Zo(e){if(50<lo)throw lo=0,tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rr={},Qd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Qd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},Qd.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Cr=[],wr=0,Ko=null,Qo=0,ti=[],ei=0,Ga=null,Oi=1,Pi="";function Va(e,n){Cr[wr++]=Qo,Cr[wr++]=Ko,Ko=e,Qo=n}function Jd(e,n,a){ti[ei++]=Oi,ti[ei++]=Pi,ti[ei++]=Ga,Ga=e;var s=Oi;e=Pi;var c=32-Kt(s)-1;s&=~(1<<c),a+=1;var f=32-Kt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Oi=1<<32-Kt(n)+c|a<<c|s,Pi=f+e}else Oi=1<<f|a<<c|s,Pi=e}function Zc(e){e.return!==null&&(Va(e,1),Jd(e,1,0))}function Kc(e){for(;e===Ko;)Ko=Cr[--wr],Cr[wr]=null,Qo=Cr[--wr],Cr[wr]=null;for(;e===Ga;)Ga=ti[--ei],ti[ei]=null,Pi=ti[--ei],ti[ei]=null,Oi=ti[--ei],ti[ei]=null}var Un=null,_n=null,Ae=!1,pi=null,Ti=!1,Qc=Error(r(519));function ka(e){var n=Error(r(418,""));throw Hs($n(n,e)),Qc}function $d(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[an]=e,n[rn]=s,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)Se(uo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Sr(n,s.value,s.defaultValue,s.children),xe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lg(n.textContent,a)?(s.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),s.onScroll!=null&&Se("scroll",n),s.onScrollEnd!=null&&Se("scrollend",n),s.onClick!=null&&(n.onclick=wl),n=!0):n=!1,n||ka(e)}function tp(e){for(Un=e.return;Un;)switch(Un.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:Un=Un.return}}function Fs(e){if(e!==Un)return!1;if(!Ae)return tp(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&ka(e),tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){_n=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}_n=null}}else _n=Un?gi(e.stateNode.nextSibling):null;return!0}function Is(){_n=Un=null,Ae=!1}function Hs(e){pi===null?pi=[e]:pi.push(e)}var Gs=Error(r(460)),ep=Error(r(474)),Jc={then:function(){}};function np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jo(){}function ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Gs?Error(r(483)):e;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Gs?Error(r(483)):e}throw Vs=n,Gs}}var Vs=null;function ap(){if(Vs===null)throw Error(r(459));var e=Vs;return Vs=null,e}var Dr=null,ks=0;function $o(e){var n=ks;return ks+=1,Dr===null&&(Dr=[]),ip(Dr,e,n)}function Xs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function tl(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rp(e){var n=e._init;return n(e._payload)}function sp(e){function n(K,V){if(e){var J=K.deletions;J===null?(K.deletions=[V],K.flags|=16):J.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function s(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=va(K,V),K.index=0,K.sibling=null,K}function f(K,V,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<V?(K.flags|=33554434,V):J):(K.flags|=33554434,V)):(K.flags|=1048576,V)}function S(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function A(K,V,J,gt){return V===null||V.tag!==6?(V=qu(J,K.mode,gt),V.return=K,V):(V=c(V,J),V.return=K,V)}function O(K,V,J,gt){var Gt=J.type;return Gt===p?ft(K,V,J.props.children,gt,J.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===P&&rp(Gt)===V.type)?(V=c(V,J.props),Xs(V,J),V.return=K,V):(V=vl(J.type,J.key,J.props,null,K.mode,gt),Xs(V,J),V.return=K,V)}function k(K,V,J,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Yu(J,K.mode,gt),V.return=K,V):(V=c(V,J.children||[]),V.return=K,V)}function ft(K,V,J,gt,Gt){return V===null||V.tag!==7?(V=$a(J,K.mode,gt,Gt),V.return=K,V):(V=c(V,J),V.return=K,V)}function St(K,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=qu(""+V,K.mode,J),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return J=vl(V.type,V.key,V.props,null,K.mode,J),Xs(J,V),J.return=K,J;case d:return V=Yu(V,K.mode,J),V.return=K,V;case P:var gt=V._init;return V=gt(V._payload),St(K,V,J)}if(At(V)||I(V))return V=$a(V,K.mode,J,null),V.return=K,V;if(typeof V.then=="function")return St(K,$o(V),J);if(V.$$typeof===M)return St(K,ml(K,V),J);tl(K,V)}return null}function it(K,V,J,gt){var Gt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:A(K,V,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===Gt?O(K,V,J,gt):null;case d:return J.key===Gt?k(K,V,J,gt):null;case P:return Gt=J._init,J=Gt(J._payload),it(K,V,J,gt)}if(At(J)||I(J))return Gt!==null?null:ft(K,V,J,gt,null);if(typeof J.then=="function")return it(K,V,$o(J),gt);if(J.$$typeof===M)return it(K,V,ml(K,J),gt);tl(K,J)}return null}function ct(K,V,J,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(J)||null,A(V,K,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case h:return K=K.get(gt.key===null?J:gt.key)||null,O(V,K,gt,Gt);case d:return K=K.get(gt.key===null?J:gt.key)||null,k(V,K,gt,Gt);case P:var pe=gt._init;return gt=pe(gt._payload),ct(K,V,J,gt,Gt)}if(At(gt)||I(gt))return K=K.get(J)||null,ft(V,K,gt,Gt,null);if(typeof gt.then=="function")return ct(K,V,J,$o(gt),Gt);if(gt.$$typeof===M)return ct(K,V,J,ml(V,gt),Gt);tl(V,gt)}return null}function Wt(K,V,J,gt){for(var Gt=null,pe=null,Yt=V,Jt=V=0,pn=null;Yt!==null&&Jt<J.length;Jt++){Yt.index>Jt?(pn=Yt,Yt=null):pn=Yt.sibling;var Re=it(K,Yt,J[Jt],gt);if(Re===null){Yt===null&&(Yt=pn);break}e&&Yt&&Re.alternate===null&&n(K,Yt),V=f(Re,V,Jt),pe===null?Gt=Re:pe.sibling=Re,pe=Re,Yt=pn}if(Jt===J.length)return a(K,Yt),Ae&&Va(K,Jt),Gt;if(Yt===null){for(;Jt<J.length;Jt++)Yt=St(K,J[Jt],gt),Yt!==null&&(V=f(Yt,V,Jt),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Ae&&Va(K,Jt),Gt}for(Yt=s(Yt);Jt<J.length;Jt++)pn=ct(Yt,K,Jt,J[Jt],gt),pn!==null&&(e&&pn.alternate!==null&&Yt.delete(pn.key===null?Jt:pn.key),V=f(pn,V,Jt),pe===null?Gt=pn:pe.sibling=pn,pe=pn);return e&&Yt.forEach(function(ba){return n(K,ba)}),Ae&&Va(K,Jt),Gt}function re(K,V,J,gt){if(J==null)throw Error(r(151));for(var Gt=null,pe=null,Yt=V,Jt=V=0,pn=null,Re=J.next();Yt!==null&&!Re.done;Jt++,Re=J.next()){Yt.index>Jt?(pn=Yt,Yt=null):pn=Yt.sibling;var ba=it(K,Yt,Re.value,gt);if(ba===null){Yt===null&&(Yt=pn);break}e&&Yt&&ba.alternate===null&&n(K,Yt),V=f(ba,V,Jt),pe===null?Gt=ba:pe.sibling=ba,pe=ba,Yt=pn}if(Re.done)return a(K,Yt),Ae&&Va(K,Jt),Gt;if(Yt===null){for(;!Re.done;Jt++,Re=J.next())Re=St(K,Re.value,gt),Re!==null&&(V=f(Re,V,Jt),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return Ae&&Va(K,Jt),Gt}for(Yt=s(Yt);!Re.done;Jt++,Re=J.next())Re=ct(Yt,K,Jt,Re.value,gt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?Jt:Re.key),V=f(Re,V,Jt),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return e&&Yt.forEach(function(Rx){return n(K,Rx)}),Ae&&Va(K,Jt),Gt}function je(K,V,J,gt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var Gt=J.key;V!==null;){if(V.key===Gt){if(Gt=J.type,Gt===p){if(V.tag===7){a(K,V.sibling),gt=c(V,J.props.children),gt.return=K,K=gt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===P&&rp(Gt)===V.type){a(K,V.sibling),gt=c(V,J.props),Xs(gt,J),gt.return=K,K=gt;break t}a(K,V);break}else n(K,V);V=V.sibling}J.type===p?(gt=$a(J.props.children,K.mode,gt,J.key),gt.return=K,K=gt):(gt=vl(J.type,J.key,J.props,null,K.mode,gt),Xs(gt,J),gt.return=K,K=gt)}return S(K);case d:t:{for(Gt=J.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(K,V.sibling),gt=c(V,J.children||[]),gt.return=K,K=gt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}gt=Yu(J,K.mode,gt),gt.return=K,K=gt}return S(K);case P:return Gt=J._init,J=Gt(J._payload),je(K,V,J,gt)}if(At(J))return Wt(K,V,J,gt);if(I(J)){if(Gt=I(J),typeof Gt!="function")throw Error(r(150));return J=Gt.call(J),re(K,V,J,gt)}if(typeof J.then=="function")return je(K,V,$o(J),gt);if(J.$$typeof===M)return je(K,V,ml(K,J),gt);tl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(K,V.sibling),gt=c(V,J),gt.return=K,K=gt):(a(K,V),gt=qu(J,K.mode,gt),gt.return=K,K=gt),S(K)):a(K,V)}return function(K,V,J,gt){try{ks=0;var Gt=je(K,V,J,gt);return Dr=null,Gt}catch(Yt){if(Yt===Gs)throw Yt;var pe=ri(29,Yt,null,K.mode);return pe.lanes=gt,pe.return=K,pe}finally{}}}var Xa=sp(!0),op=sp(!1),Ur=Ct(null),el=Ct(0);function lp(e,n){e=qi,Ot(el,e),Ot(Ur,n),qi=e|n.baseLanes}function $c(){Ot(el,qi),Ot(Ur,Ur.current)}function tu(){qi=el.current,Zt(Ur),Zt(el)}var ni=Ct(null),bi=null;function oa(e){var n=e.alternate;Ot(on,on.current&1),Ot(ni,e),bi===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(bi=e)}function cp(e){if(e.tag===22){if(Ot(on,on.current),Ot(ni,e),bi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(bi=e)}}else la()}function la(){Ot(on,on.current),Ot(ni,ni.current)}function zi(e){Zt(ni),bi===e&&(bi=null),Zt(on)}var on=Ct(0);function nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},mv=o.unstable_scheduleCallback,gv=o.unstable_NormalPriority,ln={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new pv,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&mv(gv,function(){e.controller.abort()})}var qs=null,nu=0,Lr=0,Nr=null;function _v(e,n){if(qs===null){var a=qs=[];nu=0,Lr=cf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return nu++,n.then(up,up),n}function up(){if(--nu===0&&qs!==null){Nr!==null&&(Nr.status="fulfilled");var e=qs;qs=null,Lr=0,Nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function vv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var fp=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&_v(e,n),fp!==null&&fp(e,n)};var Wa=Ct(null);function iu(){var e=Wa.current;return e!==null?e:Be.pooledCache}function il(e,n){n===null?Ot(Wa,Wa.current):Ot(Wa,n.pool)}function hp(){var e=iu();return e===null?null:{parent:ln._currentValue,pool:e}}var ca=0,de=null,Ne=null,Qe=null,al=!1,Or=!1,qa=!1,rl=0,Ys=0,Pr=null,xv=0;function Ke(){throw Error(r(321))}function au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function ru(e,n,a,s,c,f){return ca=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?Ya:ua,qa=!1,f=a(s,c),qa=!1,Or&&(f=pp(n,a,s,c)),dp(e),f}function dp(e){w.H=Ai;var n=Ne!==null&&Ne.next!==null;if(ca=0,Qe=Ne=de=null,al=!1,Ys=0,Pr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&pl(e)&&(hn=!0))}function pp(e,n,a,s){de=e;var c=0;do{if(Or&&(Pr=null),Ys=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,Qe=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=ja,f=n(a,s)}while(Or);return f}function Sv(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?js(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function su(){var e=rl!==0;return rl=0,e}function ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lu(e){if(al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}al=!1}ca=0,Qe=Ne=de=null,Or=!1,Ys=rl=0,Pr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?de.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Qe===null?de.memoizedState:Qe.next;if(n!==null)Qe=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Qe===null?de.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var sl;sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function js(e){var n=Ys;return Ys+=1,Pr===null&&(Pr=[]),e=ip(Pr,e,n),n=de,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Ya:ua),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return js(e);if(e.$$typeof===M)return En(e)}throw Error(r(438,String(e)))}function cu(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Bi(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=Je();return uu(n,Ne,e)}function uu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,O=null,k=n,ft=!1;do{var St=k.lane&-536870913;if(St!==k.lane?(ye&St)===St:(ca&St)===St){var it=k.revertLane;if(it===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),St===Lr&&(ft=!0);else if((ca&it)===it){k=k.next,it===Lr&&(ft=!0);continue}else St={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},O===null?(A=O=St,S=f):O=O.next=St,de.lanes|=it,xa|=it;St=k.action,qa&&a(f,St),f=k.hasEagerState?k.eagerState:a(f,St)}else it={lane:St,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},O===null?(A=O=it,S=f):O=O.next=it,de.lanes|=St,xa|=St;k=k.next}while(k!==null&&k!==n);if(O===null?S=f:O.next=A,!Xn(f,e.memoizedState)&&(hn=!0,ft&&(a=Nr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function fu(e){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function mp(e,n,a){var s=de,c=Je(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,hn=!0),c=c.queue,pu(vp.bind(null,s,c,e),[e]),c.getSnapshot!==n||S||Qe!==null&&Qe.memoizedState.tag&1){if(s.flags|=2048,zr(9,_p.bind(null,s,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||(ca&60)!==0||gp(s,n,a)}return a}function gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=sl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _p(e,n,a,s){n.value=a,n.getSnapshot=s,xp(n)&&Sp(e)}function vp(e,n,a){return a(function(){xp(n)&&Sp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Sp(e){var n=sa(e,2);n!==null&&Ln(n,e,2)}function hu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),qa){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},n}function Mp(e,n,a,s){return e.baseState=a,uu(e,Ne,typeof s=="function"?s:Bi)}function Mv(e,n,a,s,c){if(fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};w.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function yp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=w.T,S={};w.T=S;try{var A=a(c,s),O=w.S;O!==null&&O(S,A),Ep(e,n,A)}catch(k){du(e,n,k)}finally{w.T=f}}else try{f=a(c,s),Ep(e,n,f)}catch(k){du(e,n,k)}}function Ep(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tp(e,n,s)},function(s){return du(e,n,s)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,bp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,yp(e,a)))}function du(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}e.action=null}function bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ap(e,n){return n}function Rp(e,n){if(Ae){var a=Be.formState;if(a!==null){t:{var s=de;if(Ae){if(_n){e:{for(var c=_n,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){_n=gi(c.nextSibling),s=c.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=s,a=Wp.bind(null,de,s),s.dispatch=a,s=hu(!1),f=xu.bind(null,de,!1,s.queue),s=Fn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Mv.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Cp(e){var n=Je();return wp(n,Ne,e)}function wp(e,n,a){n=uu(e,n,Ap)[0],e=ll(Bi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?js(n):n;var s=Je(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(de.flags|=2048,zr(9,yv.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function yv(e,n){e.action=n}function Dp(e){var n=Je(),a=Ne;if(a!==null)return wp(n,a,e);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function zr(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=de.updateQueue,n===null&&(n=sl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Up(){return Je().memoizedState}function cl(e,n,a,s){var c=Fn();de.flags|=e,c.memoizedState=zr(1|n,a,{destroy:void 0},s===void 0?null:s)}function ul(e,n,a,s){var c=Je();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&au(s,Ne.memoizedState.deps)?c.memoizedState=zr(n,a,f,s):(de.flags|=e,c.memoizedState=zr(1|n,a,f,s))}function Lp(e,n){cl(8390656,8,e,n)}function pu(e,n){ul(2048,8,e,n)}function Np(e,n){return ul(4,2,e,n)}function Op(e,n){return ul(4,4,e,n)}function Pp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zp(e,n,a){a=a!=null?a.concat([e]):null,ul(4,4,Pp.bind(null,n,e),a)}function mu(){}function Bp(e,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&au(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Fp(e,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&au(n,s[1]))return s[0];if(s=e(),qa){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[s,n],s}function gu(e,n,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Hm(),de.lanes|=e,xa|=e,a)}function Ip(e,n,a,s){return Xn(a,n)?a:Ur.current!==null?(e=gu(e,a,s),Xn(e,n)||(hn=!0),e):(ca&42)===0?(hn=!0,e.memoizedState=a):(e=Hm(),de.lanes|=e,xa|=e,n)}function Hp(e,n,a,s,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=w.T,A={};w.T=A,xu(e,!1,n,a);try{var O=c(),k=w.S;if(k!==null&&k(A,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ft=vv(O,s);Zs(e,n,ft,jn(e))}else Zs(e,n,s,jn(e))}catch(St){Zs(e,n,{then:function(){},status:"rejected",reason:St},jn())}finally{Y.p=f,w.T=S}}function Ev(){}function _u(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Gp(e).queue;Hp(e,c,n,pt,a===null?Ev:function(){return Vp(e),a(s)})}function Gp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vp(e){var n=Gp(e).next.queue;Zs(e,n,{},jn())}function vu(){return En(go)}function kp(){return Je().memoizedState}function Xp(){return Je().memoizedState}function Tv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=da(a);var s=pa(n,e,a);s!==null&&(Ln(s,n,a),Js(s,n,a)),n={cache:eu()},e.payload=n;return}n=n.return}}function bv(e,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?qp(n,a):(a=jc(e,n,a,s),a!==null&&(Ln(a,e,s),Yp(a,n,s)))}function Wp(e,n,a){var s=jn();Zs(e,n,a,s)}function Zs(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))qp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Xn(A,S))return jo(e,n,c,0),Be===null&&Yo(),!1}catch{}finally{}if(a=jc(e,n,c,s),a!==null)return Ln(a,e,s),Yp(a,n,s),!0}return!1}function xu(e,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(n)throw Error(r(479))}else n=jc(e,a,s,2),n!==null&&Ln(n,e,2)}function fl(e){var n=e.alternate;return e===de||n!==null&&n===de}function qp(e,n){Or=al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Yp(e,n,a){if((a&4194176)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ei(e,a)}}var Ai={readContext:En,use:ol,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke};Ai.useCacheRefresh=Ke,Ai.useMemoCache=Ke,Ai.useHostTransitionStatus=Ke,Ai.useFormState=Ke,Ai.useActionState=Ke,Ai.useOptimistic=Ke;var Ya={readContext:En,use:ol,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Lp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cl(4194308,4,Pp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cl(4194308,4,e,n)},useInsertionEffect:function(e,n){cl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var s=e();if(qa){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Fn();if(a!==void 0){var c=a(n);if(qa){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=bv.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=hu(e);var n=e.queue,a=Wp.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(e,n){var a=Fn();return gu(a,e,n)},useTransition:function(){var e=hu(!1);return e=Hp.bind(null,de,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,c=Fn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));(ye&60)!==0||gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Lp(vp.bind(null,s,f,e),[e]),s.flags|=2048,zr(9,_p.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Fn(),n=Be.identifierPrefix;if(Ae){var a=Pi,s=Oi;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=xv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Fn().memoizedState=Tv.bind(null,de)}};Ya.useMemoCache=cu,Ya.useHostTransitionStatus=vu,Ya.useFormState=Rp,Ya.useActionState=Rp,Ya.useOptimistic=function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xu.bind(null,de,!0,a),a.dispatch=n,[e,n]};var ua={readContext:En,use:ol,useCallback:Bp,useContext:En,useEffect:pu,useImperativeHandle:zp,useInsertionEffect:Np,useLayoutEffect:Op,useMemo:Fp,useReducer:ll,useRef:Up,useState:function(){return ll(Bi)},useDebugValue:mu,useDeferredValue:function(e,n){var a=Je();return Ip(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ll(Bi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:js(e),n]},useSyncExternalStore:mp,useId:kp};ua.useCacheRefresh=Xp,ua.useMemoCache=cu,ua.useHostTransitionStatus=vu,ua.useFormState=Cp,ua.useActionState=Cp,ua.useOptimistic=function(e,n){var a=Je();return Mp(a,Ne,e,n)};var ja={readContext:En,use:ol,useCallback:Bp,useContext:En,useEffect:pu,useImperativeHandle:zp,useInsertionEffect:Np,useLayoutEffect:Op,useMemo:Fp,useReducer:fu,useRef:Up,useState:function(){return fu(Bi)},useDebugValue:mu,useDeferredValue:function(e,n){var a=Je();return Ne===null?gu(a,e,n):Ip(a,Ne.memoizedState,e,n)},useTransition:function(){var e=fu(Bi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:js(e),n]},useSyncExternalStore:mp,useId:kp};ja.useCacheRefresh=Xp,ja.useMemoCache=cu,ja.useHostTransitionStatus=vu,ja.useFormState=Dp,ja.useActionState=Dp,ja.useOptimistic=function(e,n){var a=Je();return Ne!==null?Mp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Su(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mu={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=jn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&(Ln(n,e,s),Js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=jn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(e,c,s),n!==null&&(Ln(n,e,s),Js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(e,s,a),n!==null&&(Ln(n,e,a),Js(n,e,a))}};function jp(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!zs(a,s)||!zs(c,f):!0}function Zp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Mu.enqueueReplaceState(n,n.state,null)}function Za(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kp(e){hl(e)}function Qp(e){console.error(e)}function Jp(e){hl(e)}function dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $p(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yu(e,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(e,n)},a}function tm(e){return e=da(e),e.tag=3,e}function em(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){$p(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){$p(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Av(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return bi===null?af():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(e,s,c)),!1;case 22:return a.flags|=65536,s===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(e,s,c)),!1}throw Error(r(435,a.tag))}return sf(e,s,c),af(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(e=Error(r(422),{cause:s}),Hs($n(e,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Hs($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=$n(s,a),c=yu(e.stateNode,s,c),Bu(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),so===null?so=[f]:so.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=yu(a.stateNode,s,e),Bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=tm(c),em(c,e,a,s),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var nm=Error(r(461)),hn=!1;function vn(e,n,a,s){n.child=e===null?op(n,null,a,s):Xa(n,e.child,a,s)}function im(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return Qa(n),s=ru(e,n,a,S,f,c),A=su(),e!==null&&!hn?(ou(e,n,c),Fi(e,n,c)):(Ae&&A&&Zc(n),n.flags|=1,vn(e,n,s,c),n.child)}function am(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rm(e,n,f,s,c)):(e=vl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:zs,a(S,s)&&e.ref===n.ref)return Fi(e,n,c)}return n.flags|=1,e=va(f,s),e.ref=n.ref,e.return=n,n.child=e}function rm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(zs(f,s)&&e.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Uu(e,c))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Fi(e,n,c)}return Eu(e,n,a,s,c)}function sm(e,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(Ks(e,n),s.mode==="hidden"||f){if((n.flags&128)!==0){if(s=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return om(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,S!==null?S.cachePool:null),S!==null?lp(n,S):$c(),cp(n);else return n.lanes=n.childLanes=536870912,om(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(il(n,S.cachePool),lp(n,S),la(),n.memoizedState=null):(e!==null&&il(n,null),$c(),la());return vn(e,n,c,a),n.child}function om(e,n,a,s){var c=iu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&il(n,null),$c(),cp(n),e!==null&&Qs(e,n,s,!0),null}function Ks(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Eu(e,n,a,s,c){return Qa(n),a=ru(e,n,a,s,void 0,c),s=su(),e!==null&&!hn?(ou(e,n,c),Fi(e,n,c)):(Ae&&s&&Zc(n),n.flags|=1,vn(e,n,a,c),n.child)}function lm(e,n,a,s,c,f){return Qa(n),n.updateQueue=null,a=pp(n,s,a,c),dp(e),s=su(),e!==null&&!hn?(ou(e,n,f),Fi(e,n,f)):(Ae&&s&&Zc(n),n.flags|=1,vn(e,n,a,f),n.child)}function cm(e,n,a,s,c){if(Qa(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Mu.enqueueReplaceState(f,f.state,null),to(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,O=Za(a,A);f.props=O;var k=f.context,ft=a.contextType;S=Rr,typeof ft=="object"&&ft!==null&&(S=En(ft));var St=a.getDerivedStateFromProps;ft=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||k!==S)&&Zp(n,f,s,S),ha=!1;var it=n.memoizedState;f.state=it,to(n,s,f,c),$s(),k=n.memoizedState,A||it!==k||ha?(typeof St=="function"&&(Su(n,a,St,s),k=n.memoizedState),(O=ha||jp(n,a,O,s,it,k,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=k),f.props=s,f.state=k,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,zu(e,n),S=n.memoizedProps,ft=Za(a,S),f.props=ft,St=n.pendingProps,it=f.context,k=a.contextType,O=Rr,typeof k=="object"&&k!==null&&(O=En(k)),A=a.getDerivedStateFromProps,(k=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==St||it!==O)&&Zp(n,f,s,O),ha=!1,it=n.memoizedState,f.state=it,to(n,s,f,c),$s();var ct=n.memoizedState;S!==St||it!==ct||ha||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof A=="function"&&(Su(n,a,A,s),ct=n.memoizedState),(ft=ha||jp(n,a,ft,s,it,ct,O)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=O,s=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ks(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Xa(n,e.child,null,c),n.child=Xa(n,null,a,c)):vn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Fi(e,n,c),e}function um(e,n,a,s){return Is(),n.flags|=256,vn(e,n,a,s),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(e){return{baseLanes:e,cachePool:hp()}}function Au(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function fm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?oa(n):la(),Ae){var A=_n,O;if(O=A){t:{for(O=A,A=Ti;O.nodeType!==8;){if(!A){A=null;break t}if(O=gi(O.nextSibling),O===null){A=null;break t}}A=O}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ga!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912},O=ri(18,null,null,0),O.stateNode=A,O.return=n,n.child=O,Un=n,_n=null,O=!0):O=!1}O||ka(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;zi(n)}return A=s.children,s=s.fallback,c?(la(),c=n.mode,A=Cu({mode:"hidden",children:A},c),s=$a(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(e,S,a),n.memoizedState=Tu,s):(oa(n),Ru(n,A))}if(O=e.memoizedState,O!==null&&(A=O.dehydrated,A!==null)){if(f)n.flags&256?(oa(n),n.flags&=-257,n=wu(e,n,a)):n.memoizedState!==null?(la(),n.child=e.child,n.flags|=128,n=null):(la(),c=s.fallback,A=n.mode,s=Cu({mode:"visible",children:s.children},A),c=$a(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Xa(n,e.child,null,a),s=n.child,s.memoizedState=bu(a),s.childLanes=Au(e,S,a),n.memoizedState=Tu,n=c);else if(oa(n),A.data==="$!"){if(S=A.nextSibling&&A.nextSibling.dataset,S)var k=S.dgst;S=k,s=Error(r(419)),s.stack="",s.digest=S,Hs({value:s,source:null,stack:null}),n=wu(e,n,a)}else if(hn||Qs(e,n,a,!1),S=(a&e.childLanes)!==0,hn||S){if(S=Be,S!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane)throw O.retryLane=s,sa(e,s),Ln(S,e,s),nm}A.data==="$?"||af(),n=wu(e,n,a)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=Gv.bind(null,e),A._reactRetry=n,n=null):(e=O.treeContext,_n=gi(A.nextSibling),Un=n,Ae=!0,pi=null,Ti=!1,e!==null&&(ti[ei++]=Oi,ti[ei++]=Pi,ti[ei++]=Ga,Oi=e.id,Pi=e.overflow,Ga=n),n=Ru(n,s.children),n.flags|=4096);return n}return c?(la(),c=s.fallback,A=n.mode,O=e.child,k=O.sibling,s=va(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&31457280,k!==null?c=va(k,c):(c=$a(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=e.child.memoizedState,A===null?A=bu(a):(O=A.cachePool,O!==null?(k=ln._currentValue,O=O.parent!==k?{parent:k,pool:k}:O):O=hp(),A={baseLanes:A.baseLanes|a,cachePool:O}),c.memoizedState=A,c.childLanes=Au(e,S,a),n.memoizedState=Tu,s):(oa(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ru(e,n){return n=Cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cu(e,n){return Bm(e,n,0,null)}function wu(e,n,a){return Xa(n,e.child,null,a),e=Ru(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Nu(e.return,n,a)}function Du(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function dm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(vn(e,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,a,n);else if(e.tag===19)hm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Ot(on,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&nl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&nl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function Rv(e,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),fa(n,ln,e.memoizedState.cache),Is();break;case 27:case 5:oe(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fm(e,n,a):(oa(n),e=Fi(e,n,a),e!==null?e.sibling:null);oa(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Qs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return dm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ot(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,sm(e,n,a);case 24:fa(n,ln,e.memoizedState.cache)}return Fi(e,n,a)}function pm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Uu(e,a)&&(n.flags&128)===0)return hn=!1,Rv(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ae&&(n.flags&1048576)!==0&&Jd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Wu(s)?(e=Za(s,e),n.tag=1,n=cm(null,n,s,e,a)):(n.tag=0,n=Eu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===T){n.tag=11,n=im(null,n,s,e,a);break t}else if(c===v){n.tag=14,n=am(null,n,s,e,a);break t}}throw n=W(s)||s,Error(r(306,n,""))}}return n;case 0:return Eu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Za(s,n.pendingProps),cm(e,n,s,c,a);case 3:t:{if(Ge(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,zu(e,n),to(n,f,null,a);var S=n.memoizedState;if(f=S.cache,fa(n,ln,f),f!==c.cache&&Ou(n,[ln],a,!0),$s(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=um(e,n,f,a);break t}else if(f!==s){s=$n(Error(r(424)),n),Hs(s),n=um(e,n,f,a);break t}else for(_n=gi(n.stateNode.containerInfo.firstChild),Un=n,Ae=!0,pi=null,Ti=!0,a=op(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Is(),f===s){n=Fi(e,n,a);break t}vn(e,n,f,a)}n=n.child}return n;case 26:return Ks(e,n),e===null?(a=_g(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,s=Dl($t.current).createElement(a),s[an]=n,s[rn]=e,xn(s,a,e),Q(s),n.stateNode=s):n.memoizedState=_g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return oe(n),e===null&&Ae&&(s=n.stateNode=pg(n.type,n.pendingProps,$t.current),Un=n,Ti=!0,_n=gi(s.firstChild)),s=n.pendingProps.children,e!==null||Ae?vn(e,n,s,a):n.child=Xa(n,null,s,a),Ks(e,n),n.child;case 5:return e===null&&Ae&&((c=s=_n)&&(s=ix(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,Un=n,_n=gi(s.firstChild),Ti=!1,c=!0):c=!1),c||ka(n)),oe(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(e,n,Sv,null,null,a),go._currentValue=c),Ks(e,n),vn(e,n,s,a),n.child;case 6:return e===null&&Ae&&((e=a=_n)&&(a=ax(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Un=n,_n=null,e=!0):e=!1),e||ka(n)),null;case 13:return fm(e,n,a);case 4:return Ge(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Xa(n,null,s,a):vn(e,n,s,a),n.child;case 11:return im(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),vn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Qa(n),c=En(c),s=s(c),n.flags|=1,vn(e,n,s,a),n.child;case 14:return am(e,n,n.type,n.pendingProps,a);case 15:return rm(e,n,n.type,n.pendingProps,a);case 19:return dm(e,n,a);case 22:return sm(e,n,a);case 24:return Qa(n),s=En(ln),e===null?(c=iu(),c===null&&(c=Be,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Pu(n),fa(n,ln,c)):((e.lanes&a)!==0&&(zu(e,n),to(n,null,null,a),$s()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,ln,s)):(s=f.cache,fa(n,ln,s),s!==c.cache&&Ou(n,[ln],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Lu=Ct(null),Ka=null,Ii=null;function fa(e,n,a){Ot(Lu,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=Lu.current,Zt(Lu)}function Nu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Ou(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var O=0;O<n.length;O++)if(A.context===n[O]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Nu(f.return,a,e),s||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Qs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Xn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===z.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}c=c.return}e!==null&&Ou(n,e,a,s),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Ka=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return mm(Ka,e)}function ml(e,n){return Ka===null&&Qa(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var ha=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ke&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Zo(e),Kd(e,null,a),n}return jo(e,s,n,a),Zo(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ei(e,a)}}function Bu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function $s(){if(Fu){var e=Nr;if(e!==null)throw e}}function to(e,n,a,s){Fu=!1;var c=e.updateQueue;ha=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var O=A,k=O.next;O.next=null,S===null?f=k:S.next=k,S=O;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==S&&(A===null?ft.firstBaseUpdate=k:A.next=k,ft.lastBaseUpdate=O))}if(f!==null){var St=c.baseState;S=0,ft=k=O=null,A=f;do{var it=A.lane&-536870913,ct=it!==A.lane;if(ct?(ye&it)===it:(s&it)===it){it!==0&&it===Lr&&(Fu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Wt=e,re=A;it=n;var je=a;switch(re.tag){case 1:if(Wt=re.payload,typeof Wt=="function"){St=Wt.call(je,St,it);break t}St=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=re.payload,it=typeof Wt=="function"?Wt.call(je,St,it):Wt,it==null)break t;St=b({},St,it);break t;case 2:ha=!0}}it=A.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(k=ft=ct,O=St):ft=ft.next=ct,S|=it;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ft===null&&(O=St),c.baseState=O,c.firstBaseUpdate=k,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),xa|=S,e.lanes=S,e.memoizedState=St}}function gm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}function eo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){ze(n,n.return,A)}}function ma(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var O=a;try{A()}catch(k){ze(c,O,k)}}}s=s.next}while(s!==f)}}catch(k){ze(n,n.return,k)}}function vm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(s){ze(e,e.return,s)}}}function xm(e,n,a){a.props=Za(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ze(e,n,s)}}function Ja(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){ze(e,n,f)}}function Wn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(e,n,c)}else a.current=null}function Sm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(e,e.return,c)}}function Mm(e,n,a){try{var s=e.stateNode;Jv(s,e.type,a,n),s[rn]=n}catch(c){ze(e,e.return,c)}}function ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Iu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wl));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Hu(e,n,a),e=e.sibling;e!==null;)Hu(e,n,a),e=e.sibling}function gl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(gl(e,n,a),e=e.sibling;e!==null;)gl(e,n,a),e=e.sibling}var Gi=!1,qe=!1,Gu=!1,Em=typeof WeakSet=="function"?WeakSet:Set,dn=null,Tm=!1;function Cv(e,n){if(e=e.containerInfo,gf=zl,e=Gd(e),kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,O=-1,k=0,ft=0,St=e,it=null;e:for(;;){for(var ct;St!==a||c!==0&&St.nodeType!==3||(A=S+c),St!==f||s!==0&&St.nodeType!==3||(O=S+s),St.nodeType===3&&(S+=St.nodeValue.length),(ct=St.firstChild)!==null;)it=St,St=ct;for(;;){if(St===e)break e;if(it===a&&++k===c&&(A=S),it===f&&++ft===s&&(O=S),(ct=St.nextSibling)!==null)break;St=it,it=St.parentNode}St=ct}a=A===-1||O===-1?null:{start:A,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:e,selectionRange:a},zl=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=Za(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(re){ze(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}return Wt=Tm,Tm=!1,Wt}function bm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a),s&4&&eo(5,a);break;case 1:if(ki(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(A){ze(a,a.return,A)}else{var c=Za(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){ze(a,a.return,A)}}s&64&&vm(a),s&512&&Ja(a,a.return);break;case 3:if(ki(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{_m(s,e)}catch(A){ze(a,a.return,A)}}break;case 26:ki(e,a),s&512&&Ja(a,a.return);break;case 27:case 5:ki(e,a),n===null&&s&4&&Sm(a),s&512&&Ja(a,a.return);break;case 12:ki(e,a);break;case 13:ki(e,a),s&4&&Cm(e,a);break;case 22:if(c=a.memoizedState!==null||Gi,!c){n=n!==null&&n.memoizedState!==null||qe;var f=Gi,S=qe;Gi=c,(qe=n)&&!S?ga(e,a,(a.subtreeFlags&8772)!==0):ki(e,a),Gi=f,qe=S}s&512&&(a.memoizedProps.mode==="manual"?Ja(a,a.return):Wn(a,a.return));break;default:ki(e,a)}}function Am(e){var n=e.alternate;n!==null&&(e.alternate=null,Am(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,qn=!1;function Vi(e,n,a){for(a=a.child;a!==null;)Rm(e,n,a),a=a.sibling}function Rm(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:qe||Wn(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Wn(a,n);var s=$e,c=qn;for($e=a.stateNode,Vi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Cs(a),$e=s,qn=c;break;case 5:qe||Wn(a,n);case 6:c=$e;var f=qn;if($e=null,Vi(e,n,a),$e=c,qn=f,$e!==null)if(qn)try{e=$e,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(S){ze(a,n,S)}else try{$e.removeChild(a.stateNode)}catch(S){ze(a,n,S)}break;case 18:$e!==null&&(qn?(n=$e,a=a.stateNode,n.nodeType===8?Sf(n.parentNode,a):n.nodeType===1&&Sf(n,a),So(n)):Sf($e,a.stateNode));break;case 4:s=$e,c=qn,$e=a.stateNode.containerInfo,qn=!0,Vi(e,n,a),$e=s,qn=c;break;case 0:case 11:case 14:case 15:qe||ma(2,a,n),qe||ma(4,a,n),Vi(e,n,a);break;case 1:qe||(Wn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&xm(a,n,s)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:qe||Wn(a,n),qe=(s=qe)||a.memoizedState!==null,Vi(e,n,a),qe=s;break;default:Vi(e,n,a)}}function Cm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(a){ze(n,n.return,a)}}function wv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Em),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Em),n;default:throw Error(r(435,e.tag))}}function Vu(e,n){var a=wv(e);n.forEach(function(s){var c=Vv.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:case 5:$e=A.stateNode,qn=!1;break t;case 3:$e=A.stateNode.containerInfo,qn=!0;break t;case 4:$e=A.stateNode.containerInfo,qn=!0;break t}A=A.return}if($e===null)throw Error(r(160));Rm(f,S,c),$e=null,qn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wm(n,e),n=n.sibling}var mi=null;function wm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),s&4&&(ma(3,e,e.return),eo(3,e),ma(5,e,e.return));break;case 1:ii(n,e),ai(e),s&512&&(qe||a===null||Wn(a,a.return)),s&64&&Gi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(ii(n,e),ai(e),s&512&&(qe||a===null||Wn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ba]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,s,a),f[an]=e,Q(f),s=f;break t;case"link":var S=Sg("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Sg("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=e,Q(f),s=f}e.stateNode=s}else Mg(c,e.type,e.stateNode);else e.stateNode=xg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Mg(c,e.type,e.stateNode):xg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Mm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var O=c.firstChild;O;){var k=O.nextSibling,ft=O.nodeName;O[Ba]||ft==="HEAD"||ft==="BODY"||ft==="SCRIPT"||ft==="STYLE"||ft==="LINK"&&O.rel.toLowerCase()==="stylesheet"||c.removeChild(O),O=k}for(var St=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);xn(c,St,f),c[an]=e,c[rn]=f}catch(Wt){ze(e,e.return,Wt)}}case 5:if(ii(n,e),ai(e),s&512&&(qe||a===null||Wn(a,a.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(Wt){ze(e,e.return,Wt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Mm(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Gu=!0);break;case 6:if(ii(n,e),ai(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Wt){ze(e,e.return,Wt)}}break;case 3:if(Nl=null,c=mi,mi=Ul(n.containerInfo),ii(n,e),mi=c,ai(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{So(n.containerInfo)}catch(Wt){ze(e,e.return,Wt)}Gu&&(Gu=!1,Dm(e));break;case 4:s=mi,mi=Ul(e.stateNode.containerInfo),ii(n,e),ai(e),mi=s;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vu(e,s)));break;case 22:if(s&512&&(qe||a===null||Wn(a,a.return)),O=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ft=Gi,St=qe,Gi=ft||O,qe=St||k,ii(n,e),qe=St,Gi=ft,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=O?n._visibility&-2:n._visibility|1,O&&(n=Gi||qe,a===null||k||n||Br(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,O)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=k.stateNode,A=k.memoizedProps.style;var ct=A!=null&&A.hasOwnProperty("display")?A.display:null;S.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Wt){ze(k,k.return,Wt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=O?"":k.memoizedProps}catch(Wt){ze(k,k.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vu(e,a))));break;case 19:ii(n,e),ai(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vu(e,s)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(ym(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Iu(e);gl(e,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(zn(S,""),s.flags&=-33);var A=Iu(e);gl(e,A,S);break;case 3:case 4:var O=s.stateNode.containerInfo,k=Iu(e);Hu(e,k,O);break;default:throw Error(r(161))}}}catch(ft){ze(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(e,n.alternate,n),n=n.sibling}function Br(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Br(n);break;case 1:Wn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xm(n,n.return,a),Br(n);break;case 26:case 27:case 5:Wn(n,n.return),Br(n);break;case 22:Wn(n,n.return),n.memoizedState===null&&Br(n);break;default:Br(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),eo(4,f);break;case 1:if(ga(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){ze(s,s.return,k)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)gm(O[c],A)}catch(k){ze(s,s.return,k)}}a&&S&64&&vm(f),Ja(f,f.return);break;case 26:case 27:case 5:ga(c,f,a),a&&s===null&&S&4&&Sm(f),Ja(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&S&4&&Cm(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),Ja(f,f.return);break;default:ga(c,f,a)}n=n.sibling}}function ku(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function Xu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function _a(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(e,n,a,s),n=n.sibling}function Um(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_a(e,n,a,s),c&2048&&eo(9,n);break;case 3:_a(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(c&2048){_a(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){ze(n,n.return,O)}}else _a(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?_a(e,n,a,s):no(e,n):f._visibility&4?_a(e,n,a,s):(f._visibility|=4,Fr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:_a(e,n,a,s),c&2048&&Xu(n.alternate,n);break;default:_a(e,n,a,s)}}function Fr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,O=s,k=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,A,O,c),eo(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&4?Fr(f,S,A,O,c):no(f,S):(ft._visibility|=4,Fr(f,S,A,O,c)),c&&k&2048&&ku(S.alternate,S);break;case 24:Fr(f,S,A,O,c),c&&k&2048&&Xu(S.alternate,S);break;default:Fr(f,S,A,O,c)}n=n.sibling}}function no(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:no(a,s),c&2048&&ku(s.alternate,s);break;case 24:no(a,s),c&2048&&Xu(s.alternate,s);break;default:no(a,s)}n=n.sibling}}var io=8192;function Ir(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 26:Ir(e),e.flags&io&&e.memoizedState!==null&&_x(mi,e.memoizedState,e.memoizedProps);break;case 5:Ir(e);break;case 3:case 4:var n=mi;mi=Ul(e.stateNode.containerInfo),Ir(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,Ir(e),io=n):Ir(e));break;default:Ir(e)}}function Nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Pm(s,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Om(e),e=e.sibling}function Om(e){switch(e.tag){case 0:case 11:case 15:ao(e),e.flags&2048&&ma(9,e,e.return);break;case 3:ao(e);break;case 12:ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,_l(e)):ao(e);break;default:ao(e)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Pm(s,e)}Nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,_l(n));break;default:_l(n)}e=e.sibling}}function Pm(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=e;dn!==null;){s=dn;var c=s.sibling,f=s.return;if(Am(s),s===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}function Dv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,s){return new Dv(e,n,a,s)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")Wu(e)&&(S=1);else if(typeof e=="string")S=mx(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return $a(a.children,c,f,n);case m:S=8,c|=24;break;case _:return e=ri(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case C:return e=ri(13,a,n,c),e.elementType=C,e.lanes=f,e;case y:return e=ri(19,a,n,c),e.elementType=y,e.lanes=f,e;case N:return Bm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case M:S=10;break t;case g:S=9;break t;case T:S=11;break t;case v:S=14;break t;case P:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ri(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function $a(e,n,a,s){return e=ri(7,e,s,n),e.lanes=a,e}function Bm(e,n,a,s){e=ri(22,e,s,n),e.elementType=N,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var S=sa(f,2);S!==null&&(c._pendingVisibility|=2,Ln(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var S=sa(f,2);S!==null&&(c._pendingVisibility&=-3,Ln(S,f,2))}}};return e.stateNode=c,e}function qu(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function Yu(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xi(e){e.flags|=4}function Fm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yg(n)){if(n=ni.current,n!==null&&((ye&4194176)===ye?bi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==bi))throw Vs=Jc,ep;e.flags|=8192}}function xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,Gr|=n)}function ro(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Uv(e,n,a){var s=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(ln),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pi!==null&&(ef(pi),pi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(Ve(n),Fm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),Ve(n),Fm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==s&&Xi(n),Ve(n),n.flags&=-16777217),null;case 27:Vt(n),a=$t.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}e=Me.current,Fs(n)?$d(n):(e=pg(c,s,a),n.stateNode=e,Xi(n))}return Ve(n),null;case 5:if(Vt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}if(e=Me.current,Fs(n))$d(n);else{switch(c=Dl($t.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[an]=n,e[rn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(xn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=$t.current,Fs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Un,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(e.nodeValue,a)),e||ka(n)}else e=Dl(e).createTextNode(s),e[an]=n,n.stateNode=e}return Ve(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else pi!==null&&(ef(pi),pi=null),c=!0;if(!c)return n.flags&256?(zi(n),n):(zi(n),null)}if(zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Ve(n),null;case 4:return ae(),e===null&&df(n.stateNode.containerInfo),Ve(n),null;case 10:return Hi(n.type),Ve(n),null;case 19:if(Zt(on),c=n.memoizedState,c===null)return Ve(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ro(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=nl(e),f!==null){for(n.flags|=128,ro(c,!1),e=f.updateQueue,n.updateQueue=e,xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zm(a,e),a=a.sibling;return Ot(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&ht()>Sl&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304)}else{if(!s)if(e=nl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,xl(n,e),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Ve(n),null}else 2*ht()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ht(),n.sibling=null,e=on.current,Ot(on,s?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return zi(n),tu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Zt(Wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(ln),Ve(n),null;case 25:return null}throw Error(r(156,n.tag))}function Lv(e,n){switch(Kc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(ln),ae(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Vt(n),null;case 13:if(zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Zt(on),null;case 4:return ae(),null;case 10:return Hi(n.type),null;case 22:case 23:return zi(n),tu(),e!==null&&Zt(Wa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(ln),null;case 25:return null;default:return null}}function Im(e,n){switch(Kc(n),n.tag){case 3:Hi(ln),ae();break;case 26:case 27:case 5:Vt(n);break;case 4:ae();break;case 13:zi(n);break;case 19:Zt(on);break;case 10:Hi(n.type);break;case 22:case 23:zi(n),tu(),e!==null&&Zt(Wa);break;case 24:Hi(ln)}}var Nv={getCacheForType:function(e){var n=En(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Ov=typeof WeakMap=="function"?WeakMap:Map,ke=0,Be=null,me=null,ye=0,Fe=0,Yn=null,Wi=!1,Hr=!1,ju=!1,qi=0,Ye=0,xa=0,tr=0,Zu=0,si=0,Gr=0,so=null,Ri=null,Ku=!1,Qu=0,Sl=1/0,Ml=null,Sa=null,yl=!1,er=null,oo=0,Ju=0,$u=null,lo=0,tf=null;function jn(){if((ke&2)!==0&&ye!==0)return ye&-ye;if(w.T!==null){var e=Lr;return e!==0?e:cf()}return Rs()}function Hm(){si===0&&(si=(ye&536870912)===0||Ae?nn():536870912);var e=ni.current;return e!==null&&(e.flags|=32),si}function Ln(e,n,a){(e===Be&&Fe===2||e.cancelPendingCommit!==null)&&(Vr(e,0),Yi(e,ye,si,!1)),Cn(e,a),((ke&2)===0||e!==Be)&&(e===Be&&((ke&2)===0&&(tr|=a),Ye===4&&Yi(e,ye,si,!1)),Ci(e))}function Gm(e,n,a){if((ke&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||te(e,n),c=s?Bv(e,n):rf(e,n,!0),f=s;do{if(c===0){Hr&&!s&&Yi(e,n,0,!1);break}else if(c===6)Yi(e,n,0,!Wi);else{if(a=e.current.alternate,f&&!Pv(a)){c=rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=so;var O=A.current.memoizedState.isDehydrated;if(O&&(Vr(A,S).flags|=256),S=rf(A,S,!1),S!==2){if(ju&&!O){A.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=Ri,Ri=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Vr(e,0),Yi(e,n,0,!0);break}t:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Yi(s,n,si,!Wi);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ht(),10<f)){if(Yi(s,n,si,!Wi),Ut(s,0)!==0)break t;s.timeoutHandle=fg(Vm.bind(null,s,a,Ri,Ml,Ku,n,si,tr,Gr,Wi,2,-0,0),f);break t}Vm(s,a,Ri,Ml,Ku,n,si,tr,Gr,Wi,0,-0,0)}}break}while(!0);Ci(e)}function ef(e){Ri===null?Ri=e:Ri.push.apply(Ri,e)}function Vm(e,n,a,s,c,f,S,A,O,k,ft,St,it){var ct=n.subtreeFlags;if((ct&8192||(ct&16785408)===16785408)&&(mo={stylesheets:null,count:0,unsuspend:gx},Lm(n),n=vx(),n!==null)){e.cancelPendingCommit=n(Zm.bind(null,e,a,s,c,S,A,O,1,St,it)),Yi(e,f,S,!k);return}Zm(e,a,s,c,S,A,O,ft,St,it)}function Pv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yi(e,n,a,s){n&=~Zu,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Kt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&As(e,a,n)}function El(){return(ke&6)===0?(co(0),!1):!0}function nf(){if(me!==null){if(Fe===0)var e=me.return;else e=me,Ii=Ka=null,lu(e),Dr=null,ks=0,e=me;for(;e!==null;)Im(e.alternate,e),e=e.return;me=null}}function Vr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nf(),Be=e,me=a=va(e.current,null),ye=n,Fe=0,Yn=null,Wi=!1,Hr=te(e,n),ju=!1,Gr=si=Zu=tr=xa=Ye=0,Ri=so=null,Ku=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Kt(s),f=1<<c;n|=e[c],s&=~f}return qi=n,Yo(),a}function km(e,n){de=null,w.H=Ai,n===Gs?(n=ap(),Fe=3):n===ep?(n=ap(),Fe=4):Fe=n===nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,me===null&&(Ye=1,dl(e,$n(n,e.current)))}function Xm(){var e=w.H;return w.H=Ai,e===null?Ai:e}function Wm(){var e=w.A;return w.A=Nv,e}function af(){Ye=4,Wi||(ye&4194176)!==ye&&ni.current!==null||(Hr=!0),(xa&134217727)===0&&(tr&134217727)===0||Be===null||Yi(Be,ye,si,!1)}function rf(e,n,a){var s=ke;ke|=2;var c=Xm(),f=Wm();(Be!==e||ye!==n)&&(Ml=null,Vr(e,n)),n=!1;var S=Ye;t:do try{if(Fe!==0&&me!==null){var A=me,O=Yn;switch(Fe){case 8:nf(),S=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var k=Fe;if(Fe=0,Yn=null,kr(e,A,O,k),a&&Hr){S=0;break t}break;default:k=Fe,Fe=0,Yn=null,kr(e,A,O,k)}}zv(),S=Ye;break}catch(ft){km(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Ii=Ka=null,ke=s,w.H=c,w.A=f,me===null&&(Be=null,ye=0,Yo()),S}function zv(){for(;me!==null;)qm(me)}function Bv(e,n){var a=ke;ke|=2;var s=Xm(),c=Wm();Be!==e||ye!==n?(Ml=null,Sl=ht()+500,Vr(e,n)):Hr=te(e,n);t:do try{if(Fe!==0&&me!==null){n=me;var f=Yn;e:switch(Fe){case 1:Fe=0,Yn=null,kr(e,n,f,1);break;case 2:if(np(f)){Fe=0,Yn=null,Ym(n);break}n=function(){Fe===2&&Be===e&&(Fe=7),Ci(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:np(f)?(Fe=0,Yn=null,Ym(n)):(Fe=0,Yn=null,kr(e,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var A=me;if(!S||yg(S)){Fe=0,Yn=null;var O=A.sibling;if(O!==null)me=O;else{var k=A.return;k!==null?(me=k,Tl(k)):me=null}break e}}Fe=0,Yn=null,kr(e,n,f,5);break;case 6:Fe=0,Yn=null,kr(e,n,f,6);break;case 8:nf(),Ye=6;break t;default:throw Error(r(462))}}Fv();break}catch(ft){km(e,ft)}while(!0);return Ii=Ka=null,w.H=s,w.A=c,ke=a,me!==null?0:(Be=null,ye=0,Yo(),Ye)}function Fv(){for(;me!==null&&!E();)qm(me)}function qm(e){var n=pm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Tl(e):me=n}function Ym(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=lm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:lu(n);default:Im(a,n),n=me=zm(n,qi),n=pm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Tl(e):me=n}function kr(e,n,a,s){Ii=Ka=null,lu(n),Dr=null,ks=0;var c=n.return;try{if(Av(e,c,n,a,ye)){Ye=1,dl(e,$n(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ye=1,dl(e,$n(a,e.current)),me=null;return}n.flags&32768?(Ae||s===1?e=!0:Hr||(ye&536870912)!==0?e=!1:(Wi=e=!0,(s===2||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),jm(n,e)):Tl(n)}function Tl(e){var n=e;do{if((n.flags&32768)!==0){jm(n,Wi);return}e=n.return;var a=Uv(n.alternate,n,qi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ye===0&&(Ye=5)}function jm(e,n){do{var a=Lv(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function Zm(e,n,a,s,c,f,S,A,O,k){var ft=w.T,St=Y.p;try{Y.p=2,w.T=null,Iv(e,n,a,s,St,c,f,S,A,O,k)}finally{w.T=ft,Y.p=St}}function Iv(e,n,a,s,c,f,S,A){do Xr();while(er!==null);if((ke&6)!==0)throw Error(r(327));var O=e.finishedWork;if(s=e.finishedLanes,O===null)return null;if(e.finishedWork=null,e.finishedLanes=0,O===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=O.lanes|O.childLanes;if(k|=Yc,Bo(e,s,k,f,S,A),e===Be&&(me=Be=null,ye=0),(O.subtreeFlags&10256)===0&&(O.flags&10256)===0||yl||(yl=!0,Ju=k,$u=a,kv(Rt,function(){return Xr(),null})),a=(O.flags&15990)!==0,(O.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,f=Y.p,Y.p=2,S=ke,ke|=4,Cv(e,O),wm(O,e),cv(_f,e.containerInfo),zl=!!gf,_f=gf=null,e.current=O,bm(e,O.alternate,O),$(),ke=S,Y.p=f,w.T=a):e.current=O,yl?(yl=!1,er=e,oo=s):Km(e,k),k=e.pendingLanes,k===0&&(Sa=null),Ht(O.stateNode),Ci(e),n!==null)for(c=e.onRecoverableError,O=0;O<n.length;O++)k=n[O],c(k.value,{componentStack:k.stack});return(oo&3)!==0&&Xr(),k=e.pendingLanes,(s&4194218)!==0&&(k&42)!==0?e===tf?lo++:(lo=0,tf=e):lo=0,co(0),null}function Km(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function Xr(){if(er!==null){var e=er,n=Ju;Ju=0;var a=vr(oo),s=w.T,c=Y.p;try{if(Y.p=32>a?32:a,w.T=null,er===null)var f=!1;else{a=$u,$u=null;var S=er,A=oo;if(er=null,oo=0,(ke&6)!==0)throw Error(r(331));var O=ke;if(ke|=4,Om(S.current),Um(S,S.current,A,a),ke=O,co(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(qt,S)}catch{}f=!0}return f}finally{Y.p=c,w.T=s,Km(e,n)}}return!1}function Qm(e,n,a){n=$n(a,n),n=yu(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(Cn(e,2),Ci(e))}function ze(e,n,a){if(e.tag===3)Qm(e,e,a);else for(;n!==null;){if(n.tag===3){Qm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){e=$n(a,e),a=tm(2),s=pa(n,a,2),s!==null&&(em(a,s,n,e),Cn(s,2),Ci(s));break}}n=n.return}}function sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Ov;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),e=Hv.bind(null,e,n,a),n.then(e,e))}function Hv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>ht()-Qu?(ke&2)===0&&Vr(e,0):Zu|=a,Gr===ye&&(Gr=0)),Ci(e)}function Jm(e,n){n===0&&(n=Te()),e=sa(e,n),e!==null&&(Cn(e,n),Ci(e))}function Gv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jm(e,a)}function Vv(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Jm(e,a)}function kv(e,n){return kt(e,n)}var bl=null,Wr=null,of=!1,Al=!1,lf=!1,nr=0;function Ci(e){e!==Wr&&e.next===null&&(Wr===null?bl=Wr=e:Wr=Wr.next=e),Al=!0,of||(of=!0,Wv(Xv))}function co(e,n){if(!lf&&Al){lf=!0;do for(var a=!1,s=bl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Kt(42|e)+1)-1,f&=c&~(S&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,eg(s,f))}else f=ye,f=Ut(s,s===Be?f:0),(f&3)===0||te(s,f)||(a=!0,eg(s,f));s=s.next}while(a);lf=!1}}function Xv(){Al=of=!1;var e=0;nr!==0&&($v()&&(e=nr),nr=0);for(var n=ht(),a=null,s=bl;s!==null;){var c=s.next,f=$m(s,n);f===0?(s.next=null,a===null?bl=c:a.next=c,c===null&&(Wr=a)):(a=s,(e!==0||(f&3)!==0)&&(Al=!0)),s=c}co(e)}function $m(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Kt(f),A=1<<S,O=c[S];O===-1?((A&a)===0||(A&s)!==0)&&(c[S]=He(A,n)):O<=n&&(e.expiredLanes|=A),f&=~A}if(n=Be,a=ye,a=Ut(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&Fe===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&U(s),vr(a)){case 2:case 8:a=bt;break;case 32:a=Rt;break;case 268435456:a=he;break;default:a=Rt}return s=tg.bind(null,e),a=kt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&U(s),e.callbackPriority=2,e.callbackNode=null,2}function tg(e,n){var a=e.callbackNode;if(Xr()&&e.callbackNode!==a)return null;var s=ye;return s=Ut(e,e===Be?s:0),s===0?null:(Gm(e,s,n),$m(e,ht()),e.callbackNode!=null&&e.callbackNode===a?tg.bind(null,e):null)}function eg(e,n){if(Xr())return null;Gm(e,n,!0)}function Wv(e){ex(function(){(ke&6)!==0?kt(ot,e):e()})}function cf(){return nr===0&&(nr=nn()),nr}function ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ng((c[rn]||null).action),S=s.submitter;S&&(n=(n=S[rn]||null)?ng(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Xo("action","action",null,s,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(nr!==0){var O=S?ig(c,S):new FormData(c);_u(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(A.preventDefault(),O=S?ig(c,S):new FormData(c),_u(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var uf=0;uf<Zd.length;uf++){var ff=Zd[uf],Yv=ff.toLowerCase(),jv=ff[0].toUpperCase()+ff.slice(1);di(Yv,"on"+jv)}di(Xd,"onAnimationEnd"),di(Wd,"onAnimationIteration"),di(qd,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(fv,"onTransitionRun"),di(hv,"onTransitionStart"),di(dv,"onTransitionCancel"),di(Yd,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],O=A.instance,k=A.currentTarget;if(A=A.listener,O!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ft){hl(ft)}c.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(A=s[S],O=A.instance,k=A.currentTarget,A=A.listener,O!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ft){hl(ft)}c.currentTarget=null,f=O}}}}function Se(e,n){var a=n[xr];a===void 0&&(a=n[xr]=new Set);var s=e+"__bubble";a.has(s)||(rg(n,e,2,!1),a.add(s))}function hf(e,n,a){var s=0;n&&(s|=4),rg(a,e,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function df(e){if(!e[Rl]){e[Rl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||hf(a,!1,e),hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,hf("selectionchange",!1,n))}}function rg(e,n,a,s){switch(Cg(n)){case 2:var c=Mx;break;case 8:c=yx;break;default:c=Af}a=c.bind(null,n,a,e),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&(O=S.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;S=S.return}for(;A!==null;){if(S=Ni(A),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}A=A.parentNode}}s=s.return}Sd(function(){var k=f,ft=Lc(a),St=[];t:{var it=jd.get(e);if(it!==void 0){var ct=Xo,Wt=e;switch(e){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":ct=V0;break;case"focusin":Wt="focus",ct=Fc;break;case"focusout":Wt="blur",ct=Fc;break;case"beforeblur":case"afterblur":ct=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=W0;break;case Xd:case Wd:case qd:ct=N0;break;case Yd:ct=Y0;break;case"scroll":case"scrollend":ct=C0;break;case"wheel":ct=Z0;break;case"copy":case"cut":case"paste":ct=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=bd;break;case"toggle":case"beforetoggle":ct=Q0}var re=(n&4)!==0,je=!re&&(e==="scroll"||e==="scrollend"),K=re?it!==null?it+"Capture":null:it;re=[];for(var V=k,J;V!==null;){var gt=V;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||K===null||(gt=ws(V,K),gt!=null&&re.push(fo(V,gt,J))),je)break;V=V.return}0<re.length&&(it=new ct(it,Wt,null,a,ft),St.push({event:it,listeners:re}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&a!==Uc&&(Wt=a.relatedTarget||a.fromElement)&&(Ni(Wt)||Wt[Li]))break t;if((ct||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Wt=a.relatedTarget||a.toElement,ct=k,Wt=Wt?Ni(Wt):null,Wt!==null&&(je=j(Wt),re=Wt.tag,Wt!==je||re!==5&&re!==27&&re!==6)&&(Wt=null)):(ct=null,Wt=k),ct!==Wt)){if(re=Ed,gt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(re=bd,gt="onPointerLeave",K="onPointerEnter",V="pointer"),je=ct==null?it:q(ct),J=Wt==null?it:q(Wt),it=new re(gt,V+"leave",ct,a,ft),it.target=je,it.relatedTarget=J,gt=null,Ni(ft)===k&&(re=new re(K,V+"enter",Wt,a,ft),re.target=J,re.relatedTarget=je,gt=re),je=gt,ct&&Wt)e:{for(re=ct,K=Wt,V=0,J=re;J;J=qr(J))V++;for(J=0,gt=K;gt;gt=qr(gt))J++;for(;0<V-J;)re=qr(re),V--;for(;0<J-V;)K=qr(K),J--;for(;V--;){if(re===K||K!==null&&re===K.alternate)break e;re=qr(re),K=qr(K)}re=null}else re=null;ct!==null&&sg(St,it,ct,re,!1),Wt!==null&&je!==null&&sg(St,je,Wt,re,!0)}}t:{if(it=k?q(k):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Gt=Nd;else if(Ud(it))if(Od)Gt=ov;else{Gt=rv;var pe=av}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Dc(k.elementType)&&(Gt=Nd):Gt=sv;if(Gt&&(Gt=Gt(e,k))){Ld(St,Gt,a,ft);break t}pe&&pe(e,it,k),e==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(pe=k?q(k):window,e){case"focusin":(Ud(pe)||pe.contentEditable==="true")&&(Tr=pe,Xc=k,Bs=null);break;case"focusout":Bs=Xc=Tr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Vd(St,a,ft);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Vd(St,a,ft)}var Yt;if(Hc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Er?wd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Ad&&a.locale!=="ko"&&(Er||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Er&&(Yt=Md()):(ra=ft,Pc="value"in ra?ra.value:ra.textContent,Er=!0)),pe=Cl(k,Jt),0<pe.length&&(Jt=new Td(Jt,e,null,a,ft),St.push({event:Jt,listeners:pe}),Yt?Jt.data=Yt:(Yt=Dd(a),Yt!==null&&(Jt.data=Yt)))),(Yt=$0?tv(e,a):ev(e,a))&&(Jt=Cl(k,"onBeforeInput"),0<Jt.length&&(pe=new Td("onBeforeInput","beforeinput",null,a,ft),St.push({event:pe,listeners:Jt}),pe.data=Yt)),qv(St,e,k,a,ft)}ag(St,n)})}function fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Cl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ws(e,a),c!=null&&s.unshift(fo(e,c,f)),c=ws(e,n),c!=null&&s.push(fo(e,c,f))),e=e.return}return s}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,O=A.alternate,k=A.stateNode;if(A=A.tag,O!==null&&O===s)break;A!==5&&A!==26&&A!==27||k===null||(O=k,c?(k=ws(a,f),k!=null&&S.unshift(fo(a,k,O))):c||(k=ws(a,f),k!=null&&S.push(fo(a,k,O)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Kv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(Kv,`
`).replace(Qv,"")}function lg(e,n){return n=og(n),og(e)===n}function wl(){}function Oe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||zn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&zn(e,""+s);break;case"className":Ie(e,"class",s);break;case"tabIndex":Ie(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(e,a,s);break;case"style":vd(e,s,f);break;case"data":if(n!=="object"){Ie(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=wl);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ho(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ve(e,"popover",s);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A0.get(a)||a,ve(e,a,s))}}function mf(e,n,a,s,c,f){switch(a){case"style":vd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?zn(e,s):(typeof s=="number"||typeof s=="bigint")&&zn(e,""+s);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"onClick":s!=null&&(e.onclick=wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ve(e,a,s)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),s&&Oe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=S=c=null,O=null,k=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":S=ft;break;case"checked":O=ft;break;case"defaultChecked":k=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Oe(e,n,s,ft,a,null)}}Dn(e,f,A,O,k,S,c,!1),xe(e);return;case"select":Se("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Oe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!s,n!=null?We(e,!!s,n,!1):a!=null&&We(e,!!s,a,!0);return;case"textarea":Se("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Oe(e,n,S,A,a,null)}Sr(e,s,c,f),xe(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(e,n,O,s,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(s=0;s<uo.length;s++)Se(uo[s],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(s=a[k],s!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,k,s,a,null)}return;default:if(Dc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&mf(e,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Oe(e,n,A,s,a,null))}function Jv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,O=null,k=null,ft=null;for(ct in a){var St=a[ct];if(a.hasOwnProperty(ct)&&St!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":O=St;default:s.hasOwnProperty(ct)||Oe(e,n,ct,null,s,St)}}for(var it in s){var ct=s[it];if(St=a[it],s.hasOwnProperty(it)&&(ct!=null||St!=null))switch(it){case"type":f=ct;break;case"name":c=ct;break;case"checked":k=ct;break;case"defaultChecked":ft=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==St&&Oe(e,n,it,ct,s,St)}}Le(e,S,A,O,k,ft,f,c);return;case"select":ct=S=A=it=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":ct=O;default:s.hasOwnProperty(f)||Oe(e,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==O&&Oe(e,n,c,f,s,O)}n=A,a=S,s=ct,it!=null?We(e,!!a,it,!1):!!s!=!!a&&(n!=null?We(e,!!a,n,!0):We(e,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Oe(e,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,n,S,c,s,f)}gn(e,it,ct);return;case"option":for(var Wt in a)if(it=a[Wt],a.hasOwnProperty(Wt)&&it!=null&&!s.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Oe(e,n,Wt,null,s,it)}for(O in s)if(it=s[O],ct=a[O],s.hasOwnProperty(O)&&it!==ct&&(it!=null||ct!=null))switch(O){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,O,it,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)it=a[re],a.hasOwnProperty(re)&&it!=null&&!s.hasOwnProperty(re)&&Oe(e,n,re,null,s,it);for(k in s)if(it=s[k],ct=a[k],s.hasOwnProperty(k)&&it!==ct&&(it!=null||ct!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,k,it,s,ct)}return;default:if(Dc(n)){for(var je in a)it=a[je],a.hasOwnProperty(je)&&it!==void 0&&!s.hasOwnProperty(je)&&mf(e,n,je,void 0,s,it);for(ft in s)it=s[ft],ct=a[ft],!s.hasOwnProperty(ft)||it===ct||it===void 0&&ct===void 0||mf(e,n,ft,it,s,ct);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!s.hasOwnProperty(K)&&Oe(e,n,K,null,s,it);for(St in s)it=s[St],ct=a[St],!s.hasOwnProperty(St)||it===ct||it==null&&ct==null||Oe(e,n,St,it,s,ct)}var gf=null,_f=null;function Dl(e){return e.nodeType===9?e:e.ownerDocument}function cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function $v(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(nx)}:fg;function nx(e){setTimeout(function(){throw e})}function Sf(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){e.removeChild(c),So(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);So(n)}function Mf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ix(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ba])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function ax(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function pg(e,n,a){switch(n=Dl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var oi=new Map,mg=new Set;function Ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ji=Y.d;Y.d={f:rx,r:sx,D:ox,C:lx,L:cx,m:ux,X:hx,S:fx,M:dx};function rx(){var e=ji.f(),n=El();return e||n}function sx(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?Vp(n):ji.r(e)}var Yr=typeof document>"u"?null:document;function gg(e,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var c=fn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),mg.has(c)||(mg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),xn(n,"link",e),Q(n),s.head.appendChild(n)))}}function ox(e){ji.D(e),gg("dns-prefetch",e,null)}function lx(e,n){ji.C(e,n),gg("preconnect",e,n)}function cx(e,n,a){ji.L(e,n,a);var s=Yr;if(s&&e&&n){var c='link[rel="preload"][as="'+fn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fn(a.imageSizes)+'"]')):c+='[href="'+fn(e)+'"]';var f=c;switch(n){case"style":f=jr(e);break;case"script":f=Zr(e)}oi.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(ho(f))||n==="script"&&s.querySelector(po(f))||(n=s.createElement("link"),xn(n,"link",e),Q(n),s.head.appendChild(n)))}}function ux(e,n){ji.m(e,n);var a=Yr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fn(s)+'"][href="'+fn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(e)}if(!oi.has(f)&&(e=b({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(po(f)))return}s=a.createElement("link"),xn(s,"link",e),Q(s),a.head.appendChild(s)}}}function fx(e,n,a){ji.S(e,n,a);var s=Yr;if(s&&e){var c=et(s).hoistableStyles,f=jr(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(ho(f)))A.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&yf(e,a);var O=S=s.createElement("link");Q(O),xn(O,"link",e),O._p=new Promise(function(k,ft){O.onload=k,O.onerror=ft}),O.addEventListener("load",function(){A.loading|=1}),O.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ll(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function hx(e,n){ji.X(e,n);var a=Yr;if(a&&e){var s=et(a).hoistableScripts,c=Zr(e),f=s.get(c);f||(f=a.querySelector(po(c)),f||(e=b({src:e,async:!0},n),(n=oi.get(c))&&Ef(e,n),f=a.createElement("script"),Q(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function dx(e,n){ji.M(e,n);var a=Yr;if(a&&e){var s=et(a).hoistableScripts,c=Zr(e),f=s.get(c);f||(f=a.querySelector(po(c)),f||(e=b({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Ef(e,n),f=a.createElement("script"),Q(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function _g(e,n,a,s){var c=(c=$t.current)?Ul(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=et(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jr(a.href);var f=et(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(ho(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||px(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=et(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function jr(e){return'href="'+fn(e)+'"'}function ho(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function px(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),Q(n),e.head.appendChild(n))}function Zr(e){return'[src="'+fn(e)+'"]'}function po(e){return"script[async]"+e}function xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+fn(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Q(s),xn(s,"style",c),Ll(s,a.precedence,e),n.instance=s;case"stylesheet":c=jr(a.href);var f=e.querySelector(ho(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=vg(a),(c=oi.get(c))&&yf(s,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(A,O){S.onload=A,S.onerror=O}),xn(f,"link",s),n.state.loading|=4,Ll(f,a.precedence,e),n.instance=f;case"script":return f=Zr(a.src),(c=e.querySelector(po(f)))?(n.instance=c,Q(c),c):(s=a,(c=oi.get(f))&&(s=b({},a),Ef(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),xn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ll(s,a.precedence,e));return n.instance}function Ll(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Nl=null;function Sg(e,n,a){if(Nl===null){var s=new Map,c=Nl=new Map;c.set(a,s)}else c=Nl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ba]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function Mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function mx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var mo=null;function gx(){}function _x(e,n,a){if(mo===null)throw Error(r(475));var s=mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=jr(a.href),f=e.querySelector(ho(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Ol.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=vg(a),(c=oi.get(c))&&yf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(A,O){S.onload=A,S.onerror=O}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ol.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function vx(){if(mo===null)throw Error(r(475));var e=mo;return e.stylesheets&&e.count===0&&Tf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Tf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pl=null;function Tf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pl=new Map,n.forEach(xx,e),Pl=null,Ol.call(e))}function xx(e,n){if(!(n.state.loading&4)){var a=Pl.get(e);if(a)var s=a.get(null);else{a=new Map,Pl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Ol.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var go={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function Sx(e,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.hiddenUpdates=Rn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Eg(e,n,a,s,c,f,S,A,O,k,ft,St){return e=new Sx(e,n,a,S,A,O,k,St),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),e}function Tg(e){return e?(e=Rr,e):Rr}function bg(e,n,a,s,c,f){c=Tg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(e,s,n),a!==null&&(Ln(a,e,n),Js(a,e,n))}function Ag(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function bf(e,n){Ag(e,n),(e=e.alternate)&&Ag(e,n)}function Rg(e){if(e.tag===13){var n=sa(e,67108864);n!==null&&Ln(n,e,67108864),bf(e,67108864)}}var zl=!0;function Mx(e,n,a,s){var c=w.T;w.T=null;var f=Y.p;try{Y.p=2,Af(e,n,a,s)}finally{Y.p=f,w.T=c}}function yx(e,n,a,s){var c=w.T;w.T=null;var f=Y.p;try{Y.p=8,Af(e,n,a,s)}finally{Y.p=f,w.T=c}}function Af(e,n,a,s){if(zl){var c=Rf(s);if(c===null)pf(e,n,s,Bl,a),wg(e,s);else if(Tx(c,e,n,a,s))s.stopPropagation();else if(wg(e,s),n&4&&-1<Ex.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Dt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var O=1<<31-Kt(S);A.entanglements[1]|=O,S&=~O}Ci(f),(ke&6)===0&&(Sl=ht()+500,co(0))}}break;case 13:A=sa(f,2),A!==null&&Ln(A,f,2),El(),bf(f,2)}if(f=Rf(s),f===null&&pf(e,n,s,Bl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(e,n,s,null,a)}}function Rf(e){return e=Lc(e),Cf(e)}var Bl=null;function Cf(e){if(Bl=null,e=Ni(e),e!==null){var n=j(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=vt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Bl=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case ot:return 2;case bt:return 8;case Rt:case Bt:return 32;case he:return 268435456;default:return 32}default:return 32}}var wf=!1,Ma=null,ya=null,Ea=null,_o=new Map,vo=new Map,Ta=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function xo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&Rg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Tx(e,n,a,s,c){switch(n){case"focusin":return Ma=xo(Ma,e,n,a,s,c),!0;case"dragenter":return ya=xo(ya,e,n,a,s,c),!0;case"mouseover":return Ea=xo(Ea,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return _o.set(f,xo(_o.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,xo(vo.get(f)||null,e,n,a,s,c)),!0}return!1}function Dg(e){var n=Ni(e.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=vt(a),n!==null){e.blockedOn=n,Fo(e.priority,function(){if(a.tag===13){var s=jn(),c=sa(a,s);c!==null&&Ln(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Rf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=R(a),n!==null&&Rg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ug(e,n,a){Fl(e)&&a.delete(n)}function bx(){wf=!1,Ma!==null&&Fl(Ma)&&(Ma=null),ya!==null&&Fl(ya)&&(ya=null),Ea!==null&&Fl(Ea)&&(Ea=null),_o.forEach(Ug),vo.forEach(Ug)}function Il(e,n){e.blockedOn===n&&(e.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bx)))}var Hl=null;function Lg(e){Hl!==e&&(Hl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hl===e&&(Hl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function So(e){function n(O){return Il(O,e)}Ma!==null&&Il(Ma,e),ya!==null&&Il(ya,e),Ea!==null&&Il(Ea,e),_o.forEach(n),vo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[rn]||null;if(typeof f=="function")S||Lg(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[rn]||null)A=S.formAction;else if(Cf(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Lg(a)}}}function Df(e){this._internalRoot=e}Gl.prototype.render=Df.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();bg(a,s,e,n,null,null)},Gl.prototype.unmount=Df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Xr(),bg(e.current,2,null,e,null,null),El(),n[Li]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Rs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Dg(e)}};var Ng=t.version;if(Ng!=="19.0.0")throw Error(r(527,Ng,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=nt(n),e=e!==null?Mt(e):null,e=e===null?null:e.stateNode,e};var Ax={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Ni,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{qt=Vl.inject(Ax),Xt=Vl}catch{}}return yo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Kp,f=Qp,S=Jp,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Eg(e,1,!1,null,null,a,s,c,f,S,A,null),e[Li]=n.current,df(e.nodeType===8?e.parentNode:e),new Df(n)},yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Kp,S=Qp,A=Jp,O=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=Eg(e,1,!0,n,a??null,s,c,f,S,A,O,k),n.context=Tg(null),a=n.current,s=jn(),c=da(s),c.callback=null,pa(a,c,s),n.current.lanes=s,Cn(n,s),Ci(n),e[Li]=n.current,df(e),new Gl(n)},yo.version="19.0.0",yo}var kg;function zx(){if(kg)return Nf.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nf.exports=Px(),Nf.exports}var Bx=zx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="174",Fx=0,Xg=1,Ix=2,W_=1,Hx=2,ta=3,Pa=0,Gn=1,Si=2,Na=0,ds=1,Wg=2,qg=3,Yg=4,Gx=5,hr=100,Vx=101,kx=102,Xx=103,Wx=104,qx=200,Yx=201,jx=202,Zx=203,_h=204,vh=205,Kx=206,Qx=207,Jx=208,$x=209,tS=210,eS=211,nS=212,iS=213,aS=214,xh=0,Sh=1,Mh=2,gs=3,yh=4,Eh=5,Th=6,bh=7,q_=0,rS=1,sS=2,Oa=0,oS=1,lS=2,cS=3,uS=4,fS=5,hS=6,dS=7,Y_=300,_s=301,vs=302,Ah=303,Rh=304,Tc=306,Ch=1e3,pr=1001,wh=1002,Qn=1003,pS=1004,kl=1005,Di=1006,Bf=1007,mr=1008,aa=1009,j_=1010,Z_=1011,Uo=1012,od=1013,gr=1014,ea=1015,Lo=1016,ld=1017,cd=1018,xs=1020,K_=35902,Q_=1021,J_=1022,fi=1023,$_=1024,t0=1025,ps=1026,Ss=1027,e0=1028,ud=1029,n0=1030,fd=1031,hd=1033,dc=33776,pc=33777,mc=33778,gc=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Oh=36196,Ph=37492,zh=37496,Bh=37808,Fh=37809,Ih=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,jh=37819,Zh=37820,Kh=37821,_c=36492,Qh=36494,Jh=36495,i0=36283,$h=36284,td=36285,ed=36286,mS=3200,gS=3201,a0=0,_S=1,La="",ci="srgb",Ms="srgb-linear",xc="linear",Pe="srgb",Kr=7680,jg=519,vS=512,xS=513,SS=514,r0=515,MS=516,yS=517,ES=518,TS=519,Zg=35044,Kg="300 es",na=2e3,Sc=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,nd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function ge(o,t,i){return Math.max(t,Math.min(i,o))}function bS(o,t){return(o%t+t)%t}function If(o,t,i){return(1-i)*o+i*t}function Eo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,u,h,d,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],g=r[2],M=r[5],T=r[8],C=l[0],y=l[3],v=l[6],P=l[1],N=l[4],D=l[7],H=l[2],I=l[5],F=l[8];return u[0]=h*C+d*P+p*H,u[3]=h*y+d*N+p*I,u[6]=h*v+d*D+p*F,u[1]=m*C+_*P+x*H,u[4]=m*y+_*N+x*I,u[7]=m*v+_*D+x*F,u[2]=g*C+M*P+T*H,u[5]=g*y+M*N+T*I,u[8]=g*v+M*D+T*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-r*u*_+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=_*h-d*m,g=d*p-_*u,M=m*u-h*p,T=i*x+r*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=x*C,t[1]=(l*m-_*r)*C,t[2]=(d*r-l*h)*C,t[3]=g*C,t[4]=(_*i-l*p)*C,t[5]=(l*u-d*i)*C,t[6]=M*C,t[7]=(r*p-m*i)*C,t[8]=(h*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Hf.makeScale(t,i)),this}rotate(t){return this.premultiply(Hf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new ce;function s0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function AS(){const o=Mc("canvas");return o.style.display="block",o}const Qg={};function cr(o){o in Qg||(Qg[o]=!0,console.warn(o))}function RS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function CS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jg=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$g=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DS(){const o={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===La?xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ms]:{primaries:t,whitePoint:r,transfer:xc,toXYZ:Jg,fromXYZ:$g,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:Jg,fromXYZ:$g,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Ce=DS();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class US{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qr===void 0&&(Qr=Mc("canvas")),Qr.width=t.width,Qr.height=t.height;const r=Qr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Qr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Mc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LS=0;class dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=No(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Gf(l[h].image)):u.push(Gf(l[h]))}else u=Gf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Gf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?US.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class On extends Es{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=pr,l=pr,u=Di,h=mr,d=fi,p=aa,m=On.DEFAULT_ANISOTROPY,_=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=No(),this.name="",this.source=new dd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Y_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ch:t.x=t.x-Math.floor(t.x);break;case pr:t.x=t.x<0?0:1;break;case wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ch:t.y=t.y-Math.floor(t.y);break;case pr:t.y=t.y<0?0:1;break;case wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Y_;On.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],x=p[8],g=p[1],M=p[5],T=p[9],C=p[2],y=p[6],v=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,D=(M+1)/2,H=(v+1)/2,I=(_+g)/4,F=(x+C)/4,W=(T+y)/4;return N>D&&N>H?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=I/r,u=F/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=W/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=W/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-T)*(y-T)+(x-C)*(x-C)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(x-C)/P,this.z=(g-_)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OS extends Es{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ze(0,0,t,i),this.scissorTest=!1,this.viewport=new Ze(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new On(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends OS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class o0 extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class PS extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],x=r[l+3];const g=u[h+0],M=u[h+1],T=u[h+2],C=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=g,t[i+1]=M,t[i+2]=T,t[i+3]=C;return}if(x!==C||p!==g||m!==M||_!==T){let y=1-d;const v=p*g+m*M+_*T+x*C,P=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const H=Math.sqrt(N),I=Math.atan2(H,v*P);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const D=d*P;if(p=p*y+g*D,m=m*y+M*D,_=_*y+T*D,x=x*y+C*D,y===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=H,m*=H,_*=H,x*=H}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],x=u[h],g=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*x+p*M-m*g,t[i+1]=p*T+_*g+m*x-d*M,t[i+2]=m*T+_*M+d*g-p*x,t[i+3]=_*T-d*x-p*g-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),x=d(u/2),g=p(r/2),M=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=g*_*x+m*M*T,this._y=m*M*x-g*_*T,this._z=m*_*T+g*M*x,this._w=m*_*x-g*M*T;break;case"YXZ":this._x=g*_*x+m*M*T,this._y=m*M*x-g*_*T,this._z=m*_*T-g*M*x,this._w=m*_*x+g*M*T;break;case"ZXY":this._x=g*_*x-m*M*T,this._y=m*M*x+g*_*T,this._z=m*_*T+g*M*x,this._w=m*_*x-g*M*T;break;case"ZYX":this._x=g*_*x-m*M*T,this._y=m*M*x+g*_*T,this._z=m*_*T-g*M*x,this._w=m*_*x+g*M*T;break;case"YZX":this._x=g*_*x+m*M*T,this._y=m*M*x+g*_*T,this._z=m*_*T-g*M*x,this._w=m*_*x-g*M*T;break;case"XZY":this._x=g*_*x-m*M*T,this._y=m*M*x-g*_*T,this._z=m*_*T+g*M*x,this._w=m*_*x+g*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],x=i[10],g=r+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(_-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-u*p,this._y=l*_+h*p+u*d-r*m,this._z=u*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-i)*_)/m,g=Math.sin(i*_)/m;return this._w=h*x+this._w*g,this._x=r*x+this._x*g,this._y=l*x+this._y*g,this._z=u*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(t_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(t_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),_=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+p*m+h*x-d*_,this.y=r+p*_+d*m-u*x,this.z=l+p*x+u*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Vf.copy(this).projectOnVector(t),this.sub(Vf)}reflect(t){return this.sub(Vf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new tt,t_=new Oo;class Po{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(u,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(t.matrixWorld),this.union(Xl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Wl.subVectors(this.max,To),Jr.subVectors(t.a,To),$r.subVectors(t.b,To),ts.subVectors(t.c,To),Aa.subVectors($r,Jr),Ra.subVectors(ts,$r),ir.subVectors(Jr,ts);let i=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-ir.z,ir.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,ir.z,0,-ir.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-ir.y,ir.x,0];return!kf(i,Jr,$r,ts,Wl)||(i=[1,0,0,0,1,0,0,0,1],!kf(i,Jr,$r,ts,Wl))?!1:(ql.crossVectors(Aa,Ra),i=[ql.x,ql.y,ql.z],kf(i,Jr,$r,ts,Wl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],_i=new tt,Xl=new Po,Jr=new tt,$r=new tt,ts=new tt,Aa=new tt,Ra=new tt,ir=new tt,To=new tt,Wl=new tt,ql=new tt,ar=new tt;function kf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ar.fromArray(o,u);const d=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),p=t.dot(ar),m=i.dot(ar),_=r.dot(ar);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const zS=new Po,bo=new tt,Xf=new tt;class bc{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):zS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(Xf)),this.expandByPoint(bo.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new tt,Wf=new tt,Yl=new tt,Ca=new tt,qf=new tt,jl=new tt,Yf=new tt;class l0{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Wf.copy(t).add(i).multiplyScalar(.5),Yl.copy(i).sub(t).normalize(),Ca.copy(this.origin).sub(Wf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Yl),d=Ca.dot(this.direction),p=-Ca.dot(Yl),m=Ca.lengthSq(),_=Math.abs(1-h*h);let x,g,M,T;if(_>0)if(x=h*p-d,g=h*d-p,T=u*_,x>=0)if(g>=-T)if(g<=T){const C=1/_;x*=C,g*=C,M=x*(x+h*g+2*d)+g*(h*x+g+2*p)+m}else g=u,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*p)+m;else g=-u,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*p)+m;else g<=-T?(x=Math.max(0,-(-h*u+d)),g=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+g*(g+2*p)+m):g<=T?(x=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(x=Math.max(0,-(h*u+d)),g=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+g*(g+2*p)+m);else g=h>0?-u:u,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Wf).addScaledVector(Yl,g),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(r=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(r=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),_>=0?(u=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(u=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,p=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,p=(t.min.z-g.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){qf.subVectors(i,t),jl.subVectors(r,t),Yf.crossVectors(qf,jl);let h=this.direction.dot(Yf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,t);const p=d*this.direction.dot(jl.crossVectors(Ca,jl));if(p<0)return null;const m=d*this.direction.dot(qf.cross(Ca));if(m<0||p+m>h)return null;const _=-d*Ca.dot(Yf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,r,l,u,h,d,p,m,_,x,g,M,T,C,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,_,x,g,M,T,C,y)}set(t,i,r,l,u,h,d,p,m,_,x,g,M,T,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=g,v[3]=M,v[7]=T,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/es.setFromMatrixColumn(t,0).length(),u=1/es.setFromMatrixColumn(t,1).length(),h=1/es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const g=h*_,M=h*x,T=d*_,C=d*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=M+T*m,i[5]=g-C*m,i[9]=-d*p,i[2]=C-g*m,i[6]=T+M*m,i[10]=h*p}else if(t.order==="YXZ"){const g=p*_,M=p*x,T=m*_,C=m*x;i[0]=g+C*d,i[4]=T*d-M,i[8]=h*m,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=C+g*d,i[10]=h*p}else if(t.order==="ZXY"){const g=p*_,M=p*x,T=m*_,C=m*x;i[0]=g-C*d,i[4]=-h*x,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=C-g*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const g=h*_,M=h*x,T=d*_,C=d*x;i[0]=p*_,i[4]=T*m-M,i[8]=g*m+C,i[1]=p*x,i[5]=C*m+g,i[9]=M*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const g=h*p,M=h*m,T=d*p,C=d*m;i[0]=p*_,i[4]=C-g*x,i[8]=T*x+M,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=M*x+T,i[10]=g-C*x}else if(t.order==="XZY"){const g=h*p,M=h*m,T=d*p,C=d*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=g*x+C,i[5]=h*_,i[9]=M*x-T,i[2]=T*x-M,i[6]=d*_,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BS,t,FS)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),wa.crossVectors(r,Zn),wa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),wa.crossVectors(r,Zn)),wa.normalize(),Zl.crossVectors(Zn,wa),l[0]=wa.x,l[4]=Zl.x,l[8]=Zn.x,l[1]=wa.y,l[5]=Zl.y,l[9]=Zn.y,l[2]=wa.z,l[6]=Zl.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],g=r[9],M=r[13],T=r[2],C=r[6],y=r[10],v=r[14],P=r[3],N=r[7],D=r[11],H=r[15],I=l[0],F=l[4],W=l[8],w=l[12],b=l[1],B=l[5],ut=l[9],at=l[13],mt=l[2],dt=l[6],G=l[10],rt=l[14],j=l[3],vt=l[7],L=l[11],nt=l[15];return u[0]=h*I+d*b+p*mt+m*j,u[4]=h*F+d*B+p*dt+m*vt,u[8]=h*W+d*ut+p*G+m*L,u[12]=h*w+d*at+p*rt+m*nt,u[1]=_*I+x*b+g*mt+M*j,u[5]=_*F+x*B+g*dt+M*vt,u[9]=_*W+x*ut+g*G+M*L,u[13]=_*w+x*at+g*rt+M*nt,u[2]=T*I+C*b+y*mt+v*j,u[6]=T*F+C*B+y*dt+v*vt,u[10]=T*W+C*ut+y*G+v*L,u[14]=T*w+C*at+y*rt+v*nt,u[3]=P*I+N*b+D*mt+H*j,u[7]=P*F+N*B+D*dt+H*vt,u[11]=P*W+N*ut+D*G+H*L,u[15]=P*w+N*at+D*rt+H*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],x=t[6],g=t[10],M=t[14],T=t[3],C=t[7],y=t[11],v=t[15];return T*(+u*p*x-l*m*x-u*d*g+r*m*g+l*d*M-r*p*M)+C*(+i*p*M-i*m*g+u*h*g-l*h*M+l*m*_-u*p*_)+y*(+i*m*x-i*d*M-u*h*x+r*h*M+u*d*_-r*m*_)+v*(-l*d*_-i*p*x+i*d*g+l*h*x-r*h*g+r*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],x=t[9],g=t[10],M=t[11],T=t[12],C=t[13],y=t[14],v=t[15],P=x*y*m-C*g*m+C*p*M-d*y*M-x*p*v+d*g*v,N=T*g*m-_*y*m-T*p*M+h*y*M+_*p*v-h*g*v,D=_*C*m-T*x*m+T*d*M-h*C*M-_*d*v+h*x*v,H=T*x*p-_*C*p-T*d*g+h*C*g+_*d*y-h*x*y,I=i*P+r*N+l*D+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=P*F,t[1]=(C*g*u-x*y*u-C*l*M+r*y*M+x*l*v-r*g*v)*F,t[2]=(d*y*u-C*p*u+C*l*m-r*y*m-d*l*v+r*p*v)*F,t[3]=(x*p*u-d*g*u-x*l*m+r*g*m+d*l*M-r*p*M)*F,t[4]=N*F,t[5]=(_*y*u-T*g*u+T*l*M-i*y*M-_*l*v+i*g*v)*F,t[6]=(T*p*u-h*y*u-T*l*m+i*y*m+h*l*v-i*p*v)*F,t[7]=(h*g*u-_*p*u+_*l*m-i*g*m-h*l*M+i*p*M)*F,t[8]=D*F,t[9]=(T*x*u-_*C*u-T*r*M+i*C*M+_*r*v-i*x*v)*F,t[10]=(h*C*u-T*d*u+T*r*m-i*C*m-h*r*v+i*d*v)*F,t[11]=(_*d*u-h*x*u-_*r*m+i*x*m+h*r*M-i*d*M)*F,t[12]=H*F,t[13]=(_*C*l-T*x*l+T*r*g-i*C*g-_*r*y+i*x*y)*F,t[14]=(T*d*l-h*C*l-T*r*p+i*C*p+h*r*y-i*d*y)*F,t[15]=(h*x*l-_*d*l+_*r*p-i*x*p-h*r*g+i*d*g)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,_=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,_=h+h,x=d+d,g=u*m,M=u*_,T=u*x,C=h*_,y=h*x,v=d*x,P=p*m,N=p*_,D=p*x,H=r.x,I=r.y,F=r.z;return l[0]=(1-(C+v))*H,l[1]=(M+D)*H,l[2]=(T-N)*H,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(g+v))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(T+N)*F,l[9]=(y-P)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=es.set(l[0],l[1],l[2]).length();const h=es.set(l[4],l[5],l[6]).length(),d=es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const m=1/u,_=1/h,x=1/d;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=x,vi.elements[9]*=x,vi.elements[10]*=x,i.setFromRotationMatrix(vi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=na){const p=this.elements,m=2*u/(i-t),_=2*u/(r-l),x=(i+t)/(i-t),g=(r+l)/(r-l);let M,T;if(d===na)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Sc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=g,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=na){const p=this.elements,m=1/(i-t),_=1/(r-l),x=1/(h-u),g=(i+t)*m,M=(r+l)*_;let T,C;if(d===na)T=(h+u)*x,C=-2*x;else if(d===Sc)T=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-g,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const es=new tt,vi=new Xe,BS=new tt(0,0,0),FS=new tt(1,1,1),wa=new tt,Zl=new tt,Zn=new tt,e_=new Xe,n_=new Oo;class Ui{constructor(t=0,i=0,r=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return e_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return n_.setFromEuler(this),this.setFromQuaternion(n_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class c0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IS=0;const i_=new tt,ns=new Oo,Qi=new Xe,Kl=new tt,Ao=new tt,HS=new tt,GS=new Oo,a_=new tt(1,0,0),r_=new tt(0,1,0),s_=new tt(0,0,1),o_={type:"added"},VS={type:"removed"},is={type:"childadded",child:null},jf={type:"childremoved",child:null};class Mn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new tt,i=new Ui,r=new Oo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ce}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(a_,t)}rotateY(t){return this.rotateOnAxis(r_,t)}rotateZ(t){return this.rotateOnAxis(s_,t)}translateOnAxis(t,i){return i_.copy(t).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(a_,t)}translateY(t){return this.translateOnAxis(r_,t)}translateZ(t){return this.translateOnAxis(s_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Kl.copy(t):Kl.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ao,Kl,this.up):Qi.lookAt(Kl,Ao,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ns.setFromRotationMatrix(Qi),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o_),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VS),jf.child=t,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o_),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,HS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,GS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new tt(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new tt,Ji=new tt,Zf=new tt,$i=new tt,as=new tt,rs=new tt,l_=new tt,Kf=new tt,Qf=new tt,Jf=new tt,$f=new Ze,th=new Ze,eh=new Ze;class Mi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){xi.subVectors(l,i),Ji.subVectors(r,i),Zf.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(Ji),p=xi.dot(Zf),m=Ji.dot(Ji),_=Ji.dot(Zf),x=h*m-d*d;if(x===0)return u.set(0,0,0),null;const g=1/x,M=(m*p-d*_)*g,T=(h*_-d*p)*g;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(h,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return $f.setScalar(0),th.setScalar(0),eh.setScalar(0),$f.fromBufferAttribute(t,i),th.fromBufferAttribute(t,r),eh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector($f,u.x),h.addScaledVector(th,u.y),h.addScaledVector(eh,u.z),h}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),Ji.subVectors(t,i),xi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),xi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;as.subVectors(l,r),rs.subVectors(u,r),Kf.subVectors(t,r);const p=as.dot(Kf),m=rs.dot(Kf);if(p<=0&&m<=0)return i.copy(r);Qf.subVectors(t,l);const _=as.dot(Qf),x=rs.dot(Qf);if(_>=0&&x<=_)return i.copy(l);const g=p*x-_*m;if(g<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(as,h);Jf.subVectors(t,u);const M=as.dot(Jf),T=rs.dot(Jf);if(T>=0&&M<=T)return i.copy(u);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(rs,d);const y=_*T-M*x;if(y<=0&&x-_>=0&&M-T>=0)return l_.subVectors(u,l),d=(x-_)/(x-_+(M-T)),i.copy(l).addScaledVector(l_,d);const v=1/(y+C+g);return h=C*v,d=g*v,i.copy(r).addScaledVector(as,h).addScaledVector(rs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function nh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ue{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=bS(t,1),i=ge(i,0,1),r=ge(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nh(h,u,t+1/3),this.g=nh(h,u,t),this.b=nh(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=u0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ce.fromWorkingColorSpace(An.copy(this),t),Math.round(ge(An.r*255,0,255))*65536+Math.round(ge(An.g*255,0,255))*256+Math.round(ge(An.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=_<=.5?x/(h+d):x/(2-h-d),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(An.copy(this),i),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=ci){Ce.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,l=An.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Da),this.setHSL(Da.h+t,Da.s+i,Da.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Da),t.getHSL(Ql);const r=If(Da.h,Ql.h,i),l=If(Da.s,Ql.s,i),u=If(Da.l,Ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new ue;ue.NAMES=u0;let kS=0;class Ts extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ds,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pd extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new tt,Jl=new De;let XS=0;class yi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Zg,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(t),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zg&&(t.usage=this.usage),t}}class f0 extends yi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class h0 extends yi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Vn extends yi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let WS=0;const li=new Xe,ih=new Mn,ss=new tt,Kn=new Po,Ro=new Po,mn=new tt;class en extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s0(t)?h0:f0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Kn.min,Ro.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Ro.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Ro.min),Kn.expandByPoint(Ro.max))}Kn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)mn.fromBufferAttribute(d,m),p&&(ss.fromBufferAttribute(t,m),mn.add(ss)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new tt,p[W]=new tt;const m=new tt,_=new tt,x=new tt,g=new De,M=new De,T=new De,C=new tt,y=new tt;function v(W,w,b){m.fromBufferAttribute(r,W),_.fromBufferAttribute(r,w),x.fromBufferAttribute(r,b),g.fromBufferAttribute(u,W),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,b),_.sub(m),x.sub(m),M.sub(g),T.sub(g);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(B),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(B),d[W].add(C),d[w].add(C),d[b].add(C),p[W].add(y),p[w].add(y),p[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let W=0,w=P.length;W<w;++W){const b=P[W],B=b.start,ut=b.count;for(let at=B,mt=B+ut;at<mt;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new tt,D=new tt,H=new tt,I=new tt;function F(W){H.fromBufferAttribute(l,W),I.copy(H);const w=d[W];N.copy(w),N.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(I,w);const B=D.dot(p[W])<0?-1:1;h.setXYZW(W,N.x,N.y,N.z,B)}for(let W=0,w=P.length;W<w;++W){const b=P[W],B=b.start,ut=b.count;for(let at=B,mt=B+ut;at<mt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,p=new tt,m=new tt,_=new tt,x=new tt;if(t)for(let g=0,M=t.count;g<M;g+=3){const T=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,x=d.normalized,g=new m.constructor(p.length*_);let M=0,T=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*_;for(let v=0;v<_;v++)g[T++]=m[M++]}return new yi(g,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new en,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const g=m[_],M=t(g,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];_.push(M.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],x=u[m];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new Xe,rr=new l0,$l=new bc,u_=new tt,tc=new tt,ec=new tt,nc=new tt,ah=new tt,ic=new tt,f_=new tt,ac=new tt;class Hn extends Mn{constructor(t=new en,i=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){ic.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(ah.fromBufferAttribute(x,t),h?ic.addScaledVector(ah,_):ic.addScaledVector(ah.sub(i),_))}i.add(ic)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(u),rr.copy(t.ray).recast(t.near),!($l.containsPoint(rr.origin)===!1&&(rr.intersectSphere($l,u_)===null||rr.origin.distanceToSquared(u_)>(t.far-t.near)**2))&&(c_.copy(u).invert(),rr.copy(t.ray).applyMatrix4(c_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,rr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],v=h[y.materialIndex],P=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=N;D<H;D+=3){const I=d.getX(D),F=d.getX(D+1),W=d.getX(D+2);l=rc(this,v,t,r,m,_,x,I,F,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=T,v=C;y<v;y+=3){const P=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=rc(this,h,t,r,m,_,x,P,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],v=h[y.materialIndex],P=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=N;D<H;D+=3){const I=D,F=D+1,W=D+2;l=rc(this,v,t,r,m,_,x,I,F,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=T,v=C;y<v;y+=3){const P=y,N=y+1,D=y+2;l=rc(this,h,t,r,m,_,x,P,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qS(o,t,i,r,l,u,h,d){let p;if(t.side===Gn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===Pa,d),p===null)return null;ac.copy(d),ac.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(ac);return m<i.near||m>i.far?null:{distance:m,point:ac.clone(),object:o}}function rc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,tc),o.getVertexPosition(p,ec),o.getVertexPosition(m,nc);const _=qS(o,t,i,r,tc,ec,nc,f_);if(_){const x=new tt;Mi.getBarycoord(f_,tc,ec,nc,x),l&&(_.uv=Mi.getInterpolatedAttribute(l,d,p,m,x,new De)),u&&(_.uv1=Mi.getInterpolatedAttribute(u,d,p,m,x,new De)),h&&(_.normal=Mi.getInterpolatedAttribute(h,d,p,m,x,new tt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new tt,materialIndex:0};Mi.getNormal(tc,ec,nc,g.normal),_.face=g,_.barycoord=x}return _}class zo extends en{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],_=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Vn(m,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(x,2));function T(C,y,v,P,N,D,H,I,F,W,w){const b=D/F,B=H/W,ut=D/2,at=H/2,mt=I/2,dt=F+1,G=W+1;let rt=0,j=0;const vt=new tt;for(let L=0;L<G;L++){const nt=L*B-at;for(let Mt=0;Mt<dt;Mt++){const At=Mt*b-ut;vt[C]=At*P,vt[y]=nt*N,vt[v]=mt,m.push(vt.x,vt.y,vt.z),vt[C]=0,vt[y]=0,vt[v]=I>0?1:-1,_.push(vt.x,vt.y,vt.z),x.push(Mt/F),x.push(1-L/W),rt+=1}}for(let L=0;L<W;L++)for(let nt=0;nt<F;nt++){const Mt=g+nt+dt*L,At=g+nt+dt*(L+1),Y=g+(nt+1)+dt*(L+1),pt=g+(nt+1)+dt*L;p.push(Mt,At,pt),p.push(At,Y,pt),j+=6}d.addGroup(M,j,w),M+=j,g+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=ys(o[i]);for(const l in r)t[l]=r[l]}return t}function YS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function d0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const jS={clone:ys,merge:Nn};var ZS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class za extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZS,this.fragmentShader=KS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=YS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class p0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new tt,h_=new De,d_=new De;class ui extends p0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z)}getViewSize(t,i){return this.getViewBounds(t,h_,d_),i.subVectors(d_,h_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,ls=1;class QS extends Mn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(os,ls,t,i);l.layers=this.layers,this.add(l);const u=new ui(os,ls,t,i);u.layers=this.layers,this.add(u);const h=new ui(os,ls,t,i);h.layers=this.layers,this.add(h);const d=new ui(os,ls,t,i);d.layers=this.layers,this.add(d);const p=new ui(os,ls,t,i);p.layers=this.layers,this.add(p);const m=new ui(os,ls,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,g,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class m0 extends On{constructor(t,i,r,l,u,h,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:_s,super(t,i,r,l,u,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class JS extends _r{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new m0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zo(5,5,5),u=new za({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Na});u.uniforms.tEquirect.value=i;const h=new Hn(l,u),d=i.minFilter;return i.minFilter===mr&&(i.minFilter=Di),new QS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class sc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(m,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,T=.005;m.inputState.pinching&&g>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($S)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new sc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class p_ extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class tM extends On{constructor(t=null,i=1,r=1,l,u,h,d,p,m=Qn,_=Qn,x,g){super(null,h,d,p,m,_,l,u,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new tt,eM=new tt,nM=new ce;class ur{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=sh.subVectors(r,i).cross(eM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||nM.getNormalMatrix(t),l=this.coplanarPoint(sh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new bc,oc=new tt;class md{constructor(t=new ur,i=new ur,r=new ur,l=new ur,u=new ur,h=new ur){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],x=l[6],g=l[7],M=l[8],T=l[9],C=l[10],y=l[11],v=l[12],P=l[13],N=l[14],D=l[15];if(r[0].setComponents(p-u,g-m,y-M,D-v).normalize(),r[1].setComponents(p+u,g+m,y+M,D+v).normalize(),r[2].setComponents(p+h,g+_,y+T,D+P).normalize(),r[3].setComponents(p-h,g-_,y-T,D-P).normalize(),r[4].setComponents(p-d,g-x,y-C,D-N).normalize(),i===na)r[5].setComponents(p+d,g+x,y+C,D+N).normalize();else if(i===Sc)r[5].setComponents(d,x,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(oc.x=l.normal.x>0?t.max.x:t.min.x,oc.y=l.normal.y>0?t.max.y:t.min.y,oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class us extends Ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yc=new tt,Ec=new tt,m_=new Xe,Co=new l0,lc=new bc,oh=new tt,g_=new tt;class wo extends Mn{constructor(t=new en,i=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)yc.fromBufferAttribute(i,l-1),Ec.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=yc.distanceTo(Ec);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(l),lc.radius+=u,t.ray.intersectsSphere(lc)===!1)return;m_.copy(l).invert(),Co.copy(t.ray).applyMatrix4(m_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let C=M,y=T-1;C<y;C+=m){const v=_.getX(C),P=_.getX(C+1),N=cc(this,t,Co,p,v,P,C);N&&i.push(N)}if(this.isLineLoop){const C=_.getX(T-1),y=_.getX(M),v=cc(this,t,Co,p,C,y,T-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let C=M,y=T-1;C<y;C+=m){const v=cc(this,t,Co,p,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=cc(this,t,Co,p,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function cc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(yc.fromBufferAttribute(d,l),Ec.fromBufferAttribute(d,u),i.distanceSqToSegment(yc,Ec,oh,g_)>r)return;oh.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(oh);if(!(m<t.near||m>t.far))return{distance:m,point:g_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const __=new tt,v_=new tt;class iM extends wo{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)__.fromBufferAttribute(i,l),v_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+__.distanceTo(v_);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g0 extends On{constructor(t,i,r,l,u,h,d,p,m,_=ps){if(_!==ps&&_!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ps&&(r=gr),r===void 0&&_===Ss&&(r=xs),super(null,l,u,h,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Qn,this.minFilter=p!==void 0?p:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ac extends en{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,x=t/d,g=i/p,M=[],T=[],C=[],y=[];for(let v=0;v<_;v++){const P=v*g-h;for(let N=0;N<m;N++){const D=N*x-u;T.push(D,-P,0),C.push(0,0,1),y.push(N/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<d;P++){const N=P+m*v,D=P+m*(v+1),H=P+1+m*(v+1),I=P+1+m*v;M.push(N,D,I),M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new Vn(T,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.width,t.height,t.widthSegments,t.heightSegments)}}class fs extends en{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const _=[],x=new tt,g=new tt,M=[],T=[],C=[],y=[];for(let v=0;v<=r;v++){const P=[],N=v/r;let D=0;v===0&&h===0?D=.5/i:v===r&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const I=H/i;x.x=-t*Math.cos(l+I*u)*Math.sin(h+N*d),x.y=t*Math.cos(h+N*d),x.z=t*Math.sin(l+I*u)*Math.sin(h+N*d),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),y.push(I+D,1-N),P.push(m++)}_.push(P)}for(let v=0;v<r;v++)for(let P=0;P<i;P++){const N=_[v][P+1],D=_[v][P],H=_[v+1][P],I=_[v+1][P+1];(v!==0||h>0)&&M.push(N,D,I),(v!==r-1||p<Math.PI)&&M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new Vn(T,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _0 extends Ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lh extends _0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class aM extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rM extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class v0 extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new Xe,x_=new tt,S_=new tt;class sM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;x_.setFromMatrixPosition(t.matrixWorld),i.position.copy(x_),S_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(S_),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x0 extends p0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oM extends sM{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends v0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cM extends v0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class uh extends iM{constructor(t=10,i=10,r=4473924,l=8947848){r=new ue(r),l=new ue(l);const u=i/2,h=t/i,d=t/2,p=[],m=[];for(let g=0,M=0,T=-d;g<=i;g++,T+=h){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const C=g===u?r:l;C.toArray(m,M),M+=3,C.toArray(m,M),M+=3,C.toArray(m,M),M+=3,C.toArray(m,M),M+=3}const _=new en;_.setAttribute("position",new Vn(p,3)),_.setAttribute("color",new Vn(m,3));const x=new us({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function M_(o,t,i,r){const l=fM(r);switch(i){case Q_:return o*t;case $_:return o*t;case t0:return o*t*2;case e0:return o*t/l.components*l.byteLength;case ud:return o*t/l.components*l.byteLength;case n0:return o*t*2/l.components*l.byteLength;case fd:return o*t*2/l.components*l.byteLength;case J_:return o*t*3/l.components*l.byteLength;case fi:return o*t*4/l.components*l.byteLength;case hd:return o*t*4/l.components*l.byteLength;case dc:case pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(t,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(t,8)/2;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _c:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case i0:case $h:return Math.ceil(o/4)*Math.ceil(t/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case aa:case j_:return{byteLength:1,components:1};case Uo:case Z_:case Lo:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case gr:case od:case ea:return{byteLength:4,components:1};case K_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function S0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function hM(o){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,x=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(o.bindBuffer(m,d),x.length===0)o.bufferSubData(m,0,_);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];o.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:dM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:MM,batching_vertex:yM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:bM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:LM,color_pars_fragment:NM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:FM,displacementmap_pars_vertex:IM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:ry,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ey,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ay,lights_toon_fragment:sy,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:uy,lights_physical_pars_fragment:fy,lights_fragment_begin:hy,lights_fragment_maps:dy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:vy,map_fragment:xy,map_pars_fragment:Sy,map_particle_fragment:My,map_particle_pars_fragment:yy,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ty,morphinstance_vertex:by,morphcolor_vertex:Ay,morphnormal_vertex:Ry,morphtarget_pars_vertex:Cy,morphtarget_vertex:wy,normal_fragment_begin:Dy,normal_fragment_maps:Uy,normal_pars_fragment:Ly,normal_pars_vertex:Ny,normal_vertex:Oy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Iy,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Vy,project_vertex:ky,dithering_fragment:Xy,dithering_pars_fragment:Wy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Zy,shadowmap_vertex:Ky,shadowmask_pars_fragment:Qy,skinbase_vertex:Jy,skinning_pars_vertex:$y,skinning_vertex:tE,skinnormal_vertex:eE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:hE,background_frag:dE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:xE,distanceRGBA_vert:SE,distanceRGBA_frag:ME,equirect_vert:yE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:bE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:wE,meshmatcap_vert:DE,meshmatcap_frag:UE,meshnormal_vert:LE,meshnormal_frag:NE,meshphong_vert:OE,meshphong_frag:PE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:FE,meshtoon_frag:IE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:kE,sprite_vert:XE,sprite_frag:WE},Lt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const uc={r:0,b:0,g:0},or=new Ui,qE=new Xe;function YE(o,t,i,r,l,u,h){const d=new ue(0);let p=u===!0?0:1,m,_,x=null,g=0,M=null;function T(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function C(N){let D=!1;const H=T(N);H===null?v(d,p):H&&H.isColor&&(v(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,D){const H=T(D);H&&(H.isCubeTexture||H.mapping===Tc)?(_===void 0&&(_=new Hn(new zo(1,1,1),new za({name:"BackgroundCubeMaterial",uniforms:ys(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),or.copy(D.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qE.makeRotationFromEuler(or)),_.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,(x!==H||g!==H.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=H,g=H.version,M=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Hn(new Ac(2,2),new za({name:"BackgroundMaterial",uniforms:ys(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||g!==H.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=H,g=H.version,M=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,D){N.getRGB(uc,d0(o)),r.buffers.color.setClear(uc.r,uc.g,uc.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:C,addToRenderList:y,dispose:P}}function jE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,h=!1;function d(b,B,ut,at,mt){let dt=!1;const G=x(at,ut,B);u!==G&&(u=G,m(u.object)),dt=M(b,at,ut,mt),dt&&T(b,at,ut,mt),mt!==null&&t.update(mt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(b,B,ut,at),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function p(){return o.createVertexArray()}function m(b){return o.bindVertexArray(b)}function _(b){return o.deleteVertexArray(b)}function x(b,B,ut){const at=ut.wireframe===!0;let mt=r[b.id];mt===void 0&&(mt={},r[b.id]=mt);let dt=mt[B.id];dt===void 0&&(dt={},mt[B.id]=dt);let G=dt[at];return G===void 0&&(G=g(p()),dt[at]=G),G}function g(b){const B=[],ut=[],at=[];for(let mt=0;mt<i;mt++)B[mt]=0,ut[mt]=0,at[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ut,attributeDivisors:at,object:b,attributes:{},index:null}}function M(b,B,ut,at){const mt=u.attributes,dt=B.attributes;let G=0;const rt=ut.getAttributes();for(const j in rt)if(rt[j].location>=0){const L=mt[j];let nt=dt[j];if(nt===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),L===void 0||L.attribute!==nt||nt&&L.data!==nt.data)return!0;G++}return u.attributesNum!==G||u.index!==at}function T(b,B,ut,at){const mt={},dt=B.attributes;let G=0;const rt=ut.getAttributes();for(const j in rt)if(rt[j].location>=0){let L=dt[j];L===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const nt={};nt.attribute=L,L&&L.data&&(nt.data=L.data),mt[j]=nt,G++}u.attributes=mt,u.attributesNum=G,u.index=at}function C(){const b=u.newAttributes;for(let B=0,ut=b.length;B<ut;B++)b[B]=0}function y(b){v(b,0)}function v(b,B){const ut=u.newAttributes,at=u.enabledAttributes,mt=u.attributeDivisors;ut[b]=1,at[b]===0&&(o.enableVertexAttribArray(b),at[b]=1),mt[b]!==B&&(o.vertexAttribDivisor(b,B),mt[b]=B)}function P(){const b=u.newAttributes,B=u.enabledAttributes;for(let ut=0,at=B.length;ut<at;ut++)B[ut]!==b[ut]&&(o.disableVertexAttribArray(ut),B[ut]=0)}function N(b,B,ut,at,mt,dt,G){G===!0?o.vertexAttribIPointer(b,B,ut,mt,dt):o.vertexAttribPointer(b,B,ut,at,mt,dt)}function D(b,B,ut,at){C();const mt=at.attributes,dt=ut.getAttributes(),G=B.defaultAttributeValues;for(const rt in dt){const j=dt[rt];if(j.location>=0){let vt=mt[rt];if(vt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),vt!==void 0){const L=vt.normalized,nt=vt.itemSize,Mt=t.get(vt);if(Mt===void 0)continue;const At=Mt.buffer,Y=Mt.type,pt=Mt.bytesPerElement,xt=Y===o.INT||Y===o.UNSIGNED_INT||vt.gpuType===od;if(vt.isInterleavedBufferAttribute){const Et=vt.data,Ct=Et.stride,Zt=vt.offset;if(Et.isInstancedInterleavedBuffer){for(let Ot=0;Ot<j.locationSize;Ot++)v(j.location+Ot,Et.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ot=0;Ot<j.locationSize;Ot++)y(j.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Ot=0;Ot<j.locationSize;Ot++)N(j.location+Ot,nt/j.locationSize,Y,L,Ct*pt,(Zt+nt/j.locationSize*Ot)*pt,xt)}else{if(vt.isInstancedBufferAttribute){for(let Et=0;Et<j.locationSize;Et++)v(j.location+Et,vt.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Et=0;Et<j.locationSize;Et++)y(j.location+Et);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Et=0;Et<j.locationSize;Et++)N(j.location+Et,nt/j.locationSize,Y,L,nt*pt,nt/j.locationSize*Et*pt,xt)}}else if(G!==void 0){const L=G[rt];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(j.location,L);break;case 3:o.vertexAttrib3fv(j.location,L);break;case 4:o.vertexAttrib4fv(j.location,L);break;default:o.vertexAttrib1fv(j.location,L)}}}}P()}function H(){W();for(const b in r){const B=r[b];for(const ut in B){const at=B[ut];for(const mt in at)_(at[mt].object),delete at[mt];delete B[ut]}delete r[b]}}function I(b){if(r[b.id]===void 0)return;const B=r[b.id];for(const ut in B){const at=B[ut];for(const mt in at)_(at[mt].object),delete at[mt];delete B[ut]}delete r[b.id]}function F(b){for(const B in r){const ut=r[B];if(ut[b.id]===void 0)continue;const at=ut[b.id];for(const mt in at)_(at[mt].object),delete at[mt];delete ut[b.id]}}function W(){w(),h=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function ZE(o,t,i){let r;function l(m){r=m}function u(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,x){x!==0&&(o.drawArraysInstanced(r,m,_,x),i.update(_,r,x))}function d(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let M=0;for(let T=0;T<x;T++)M+=_[T];i.update(M,r,1)}function p(m,_,x,g){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)h(m[T],_[T],g[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,g,0,x);let T=0;for(let C=0;C<x;C++)T+=_[C]*g[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function KE(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==fi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==aa&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ea&&!W)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,g=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function QE(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new ur,d=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||l;return l=g,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||u&&!y)u?_(null):m();else{const P=u?0:r,N=P*4;let D=v.clippingState||null;p.value=D,D=_(T,g,N,M);for(let H=0;H!==N;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,g,M,T){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=p.value,T!==!0||y===null){const v=M+C*4,P=g.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,D=M;N!==C;++N,D+=4)h.copy(x[N]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function JE(o){let t=new WeakMap;function i(h,d){return d===Ah?h.mapping=_s:d===Rh&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ah||d===Rh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new JS(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const hs=4,y_=[.125,.215,.35,.446,.526,.582],dr=20,fh=new x0,E_=new ue;let hh=null,dh=0,ph=0,mh=!1;const fr=(1+Math.sqrt(5))/2,cs=1/fr,T_=[new tt(-fr,cs,0),new tt(fr,cs,0),new tt(-cs,0,fr),new tt(cs,0,fr),new tt(0,fr,-cs),new tt(0,fr,cs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],$E=new tt;class id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=$E}=u;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,fc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Lo,format:fi,colorSpace:Ms,depthBuffer:!1},l=b_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(u)),this._blurMaterial=eT(u,t,i)}return l}_compileMaterial(t){const i=new Hn(this._lodPlanes[0],t);this._renderer.compile(i,fh)}_sceneToCubeUV(t,i,r,l,u){const p=new ui(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(E_),x.toneMapping=Oa,x.autoClear=!1;const T=new pd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),C=new Hn(new zo,T);let y=!1;const v=t.background;v?v.isColor&&(T.color.copy(v),t.background=null,y=!0):(T.color.copy(E_),y=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[P],u.y,u.z)):N===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[P]));const D=this._cubeSize;fc(l,N*D,P>2?D:0,D,D),x.setRenderTarget(l),y&&x.render(C,p),x.render(t,p)}C.geometry.dispose(),C.material.dispose(),x.toneMapping=M,x.autoClear=g,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_s||t.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Hn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;fc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=T_[(l-u-1)%T_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Hn(this._lodPlanes[l],m),g=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*dr-1),C=u/T,y=isFinite(u)?1+Math.floor(_*C):dr;y>dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${dr}`);const v=[];let P=0;for(let F=0;F<dr;++F){const W=F/C,w=Math.exp(-W*W/2);v.push(w),F===0?P+=w:F<y&&(P+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-r;const D=this._sizeLods[l],H=3*D*(l>N-hs?l-N+hs:0),I=4*(this._cubeSize-D);fc(i,H,I,3*D,2*D),p.setRenderTarget(i),p.render(x,fh)}}function tT(o){const t=[],i=[],r=[];let l=o;const u=o-hs+1+y_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-hs?p=y_[h-o+hs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,T=6,C=3,y=2,v=1,P=new Float32Array(C*T*M),N=new Float32Array(y*T*M),D=new Float32Array(v*T*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,W=I>2?0:-1,w=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];P.set(w,C*T*I),N.set(g,y*T*I);const b=[I,I,I,I,I,I];D.set(b,v*T*I)}const H=new en;H.setAttribute("position",new yi(P,C)),H.setAttribute("uv",new yi(N,y)),H.setAttribute("faceIndex",new yi(D,v)),t.push(H),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function b_(o,t,i){const r=new _r(o,t,i);return r.texture.mapping=Tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function eT(o,t,i){const r=new Float32Array(dr),l=new tt(0,1,0);return new za({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function A_(){return new za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function R_(){return new za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ah||p===Rh,_=p===_s||p===vs;if(m||_){let x=t.get(d);const g=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new id(o)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new id(o)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function iT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aT(o,t,i,r){const l={},u=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const M=u.get(g);M&&(t.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(x){const g=x.attributes;for(const M in g)t.update(g[M],o.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,T=x.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let N=0,D=P.length;N<D;N+=3){const H=P[N+0],I=P[N+1],F=P[N+2];g.push(H,I,I,F,F,H)}}else if(T!==void 0){const P=T.array;C=T.version;for(let N=0,D=P.length/3-1;N<D;N+=3){const H=N+0,I=N+1,F=N+2;g.push(H,I,I,F,F,H)}}else return;const y=new(s0(g)?h0:f0)(g,1);y.version=C;const v=u.get(x);v&&t.remove(v),u.set(x,y)}function _(x){const g=u.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function rT(o,t,i){let r;function l(g){r=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function p(g,M){o.drawElements(r,M,u,g*h),i.update(M,r,1)}function m(g,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,g*h,T),i.update(M,r,T))}function _(g,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,g,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];i.update(y,r,1)}function x(g,M,T,C){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)m(g[v]/h,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,g,0,C,0,T);let v=0;for(let P=0;P<T;P++)v+=M[P]*C[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function sT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oT(o,t,i){const r=new WeakMap,l=new Ze;function u(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let b=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*I*4*x),W=new o0(F,H,I,x);W.type=ea,W.needsUpdate=!0;const w=D*4;for(let B=0;B<x;B++){const ut=v[B],at=P[B],mt=N[B],dt=H*I*4*B;for(let G=0;G<ut.count;G++){const rt=G*w;T===!0&&(l.fromBufferAttribute(ut,G),F[dt+rt+0]=l.x,F[dt+rt+1]=l.y,F[dt+rt+2]=l.z,F[dt+rt+3]=0),C===!0&&(l.fromBufferAttribute(at,G),F[dt+rt+4]=l.x,F[dt+rt+5]=l.y,F[dt+rt+6]=l.z,F[dt+rt+7]=0),y===!0&&(l.fromBufferAttribute(mt,G),F[dt+rt+8]=l.x,F[dt+rt+9]=l.y,F[dt+rt+10]=l.z,F[dt+rt+11]=mt.itemSize===4?l.w:1)}}g={count:x,texture:W,size:new De(H,I)},r.set(d,g),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function lT(o,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=t.get(p,_);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const g=p.skeleton;l.get(g)!==m&&(g.update(),l.set(g,m))}return x}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const M0=new On,C_=new g0(1,1),y0=new o0,E0=new PS,T0=new m0,w_=[],D_=[],U_=new Float32Array(16),L_=new Float32Array(9),N_=new Float32Array(4);function bs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=w_[l];if(u===void 0&&(u=new Float32Array(l),w_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Rc(o,t){let i=D_[t];i===void 0&&(i=new Int32Array(t),D_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function cT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function dT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;N_.set(r),o.uniformMatrix2fv(this.addr,!1,N_),un(i,r)}}function pT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;L_.set(r),o.uniformMatrix3fv(this.addr,!1,L_),un(i,r)}}function mT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;U_.set(r),o.uniformMatrix4fv(this.addr,!1,U_),un(i,r)}}function gT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function TT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(C_.compareFunction=r0,u=C_):u=M0,i.setTexture2D(t||u,l)}function bT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||E0,l)}function AT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||T0,l)}function RT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||y0,l)}function CT(o){switch(o){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return hT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return ST;case 36294:return MT;case 36295:return yT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function wT(o,t){o.uniform1fv(this.addr,t)}function DT(o,t){const i=bs(t,this.size,2);o.uniform2fv(this.addr,i)}function UT(o,t){const i=bs(t,this.size,3);o.uniform3fv(this.addr,i)}function LT(o,t){const i=bs(t,this.size,4);o.uniform4fv(this.addr,i)}function NT(o,t){const i=bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function OT(o,t){const i=bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function PT(o,t){const i=bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zT(o,t){o.uniform1iv(this.addr,t)}function BT(o,t){o.uniform2iv(this.addr,t)}function FT(o,t){o.uniform3iv(this.addr,t)}function IT(o,t){o.uniform4iv(this.addr,t)}function HT(o,t){o.uniform1uiv(this.addr,t)}function GT(o,t){o.uniform2uiv(this.addr,t)}function VT(o,t){o.uniform3uiv(this.addr,t)}function kT(o,t){o.uniform4uiv(this.addr,t)}function XT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||M0,u[h])}function WT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||E0,u[h])}function qT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||T0,u[h])}function YT(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||y0,u[h])}function jT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return IT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class ZT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CT(i.type)}}class KT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jT(i.type)}}class QT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function O_(o,t){o.seq.push(t),o.map[t.id]=t}function JT(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){O_(i,m===void 0?new ZT(d,o,t):new KT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new QT(d),O_(i,x)),i=x}}}class vc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);JT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function P_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const $T=37297;let tb=0;function eb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const z_=new ce;function nb(o){Ce._getMatrix(z_,Ce.workingColorSpace,o);const t=`mat3( ${z_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case xc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function B_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+eb(o.getShaderSource(t),h)}else return l}function ib(o,t){const i=nb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ab(o,t){let i;switch(t){case oS:i="Linear";break;case lS:i="Reinhard";break;case cS:i="Cineon";break;case uS:i="ACESFilmic";break;case hS:i="AgX";break;case dS:i="Neutral";break;case fS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hc=new tt;function rb(){Ce.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),t=hc.y.toFixed(4),i=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function ob(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Do(o){return o!==""}function F_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(cb,fb)}const ub=new Map;function fb(o,t){let i=fe[t];if(i===void 0){const r=ub.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ad(i)}const hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(o){return o.replace(hb,db)}function db(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function G_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function mb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case Tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function _b(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case q_:t="ENVMAP_BLENDING_MULTIPLY";break;case rS:t="ENVMAP_BLENDING_MIX";break;case sS:t="ENVMAP_BLENDING_ADD";break}return t}function vb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function xb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=pb(i),m=mb(i),_=gb(i),x=_b(i),g=vb(i),M=sb(i),T=ob(u),C=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(y=[G_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[G_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Oa?ab("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,ib("linearToOutputTexel",i.outputColorSpace),rb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=ad(h),h=F_(h,i),h=I_(h,i),d=ad(d),d=F_(d,i),d=I_(d,i),h=H_(h),d=H_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=P+y+h,D=P+v+d,H=P_(l,l.VERTEX_SHADER,N),I=P_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,H),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(B){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(H).trim(),mt=l.getShaderInfoLog(I).trim();let dt=!0,G=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,I);else{const rt=B_(l,H,"vertex"),j=B_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ut+`
`+rt+`
`+j)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(at===""||mt==="")&&(G=!1);G&&(B.diagnostics={runnable:dt,programLog:ut,vertexShader:{log:at,prefix:y},fragmentShader:{log:mt,prefix:v}})}l.deleteShader(H),l.deleteShader(I),W=new vc(l,C),w=lb(l,C)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(C,$T)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tb++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=I,this}let Sb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new yb(t),i.set(t,r)),r}}class yb{constructor(t){this.id=Sb++,this.code=t,this.usedTimes=0}}function Eb(o,t,i,r,l,u,h){const d=new c0,p=new Mb,m=new Set,_=[],x=l.logarithmicDepthBuffer,g=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,b,B,ut,at){const mt=ut.fog,dt=at.geometry,G=w.isMeshStandardMaterial?ut.environment:null,rt=(w.isMeshStandardMaterial?i:t).get(w.envMap||G),j=rt&&rt.mapping===Tc?rt.image.height:null,vt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const L=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,nt=L!==void 0?L.length:0;let Mt=0;dt.morphAttributes.position!==void 0&&(Mt=1),dt.morphAttributes.normal!==void 0&&(Mt=2),dt.morphAttributes.color!==void 0&&(Mt=3);let At,Y,pt,xt;if(vt){const Te=wi[vt];At=Te.vertexShader,Y=Te.fragmentShader}else At=w.vertexShader,Y=w.fragmentShader,p.update(w),pt=p.getVertexShaderID(w),xt=p.getFragmentShaderID(w);const Et=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Zt=at.isInstancedMesh===!0,Ot=at.isBatchedMesh===!0,Me=!!w.map,we=!!w.matcap,$t=!!rt,z=!!w.aoMap,Ge=!!w.lightMap,ae=!!w.bumpMap,oe=!!w.normalMap,Vt=!!w.displacementMap,Ee=!!w.emissiveMap,kt=!!w.metalnessMap,U=!!w.roughnessMap,E=w.anisotropy>0,$=w.clearcoat>0,ht=w.dispersion>0,st=w.iridescence>0,ot=w.sheen>0,bt=w.transmission>0,Rt=E&&!!w.anisotropyMap,Bt=$&&!!w.clearcoatMap,he=$&&!!w.clearcoatNormalMap,Tt=$&&!!w.clearcoatRoughnessMap,Ft=st&&!!w.iridescenceMap,qt=st&&!!w.iridescenceThicknessMap,Xt=ot&&!!w.sheenColorMap,Ht=ot&&!!w.sheenRoughnessMap,se=!!w.specularMap,Kt=!!w.specularColorMap,Ue=!!w.specularIntensityMap,X=bt&&!!w.transmissionMap,Nt=bt&&!!w.thicknessMap,lt=!!w.gradientMap,_t=!!w.alphaMap,Dt=w.alphaTest>0,Ut=!!w.alphaHash,te=!!w.extensions;let He=Oa;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(He=o.toneMapping);const nn={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:At,fragmentShader:Y,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Ot,batchingColor:Ot&&at._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&at.instanceColor!==null,instancingMorph:Zt&&at.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ms,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:we,envMap:$t,envMapMode:$t&&rt.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:Ge,bumpMap:ae,normalMap:oe,displacementMap:g&&Vt,emissiveMap:Ee,normalMapObjectSpace:oe&&w.normalMapType===_S,normalMapTangentSpace:oe&&w.normalMapType===a0,metalnessMap:kt,roughnessMap:U,anisotropy:E,anisotropyMap:Rt,clearcoat:$,clearcoatMap:Bt,clearcoatNormalMap:he,clearcoatRoughnessMap:Tt,dispersion:ht,iridescence:st,iridescenceMap:Ft,iridescenceThicknessMap:qt,sheen:ot,sheenColorMap:Xt,sheenRoughnessMap:Ht,specularMap:se,specularColorMap:Kt,specularIntensityMap:Ue,transmission:bt,transmissionMap:X,thicknessMap:Nt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Dt,alphaHash:Ut,combine:w.combine,mapUv:Me&&C(w.map.channel),aoMapUv:z&&C(w.aoMap.channel),lightMapUv:Ge&&C(w.lightMap.channel),bumpMapUv:ae&&C(w.bumpMap.channel),normalMapUv:oe&&C(w.normalMap.channel),displacementMapUv:Vt&&C(w.displacementMap.channel),emissiveMapUv:Ee&&C(w.emissiveMap.channel),metalnessMapUv:kt&&C(w.metalnessMap.channel),roughnessMapUv:U&&C(w.roughnessMap.channel),anisotropyMapUv:Rt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(w.sheenRoughnessMap.channel),specularMapUv:se&&C(w.specularMap.channel),specularColorMapUv:Kt&&C(w.specularColorMap.channel),specularIntensityMapUv:Ue&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Nt&&C(w.thicknessMap.channel),alphaMapUv:_t&&C(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(oe||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!dt.attributes.uv&&(Me||_t),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Mt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ee&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function v(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)b.push(B),b.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(P(b,w),N(b,w),b.push(o.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function P(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function N(w,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const b=T[w.type];let B;if(b){const ut=wi[b];B=jS.clone(ut.uniforms)}else B=w.uniforms;return B}function H(w,b){let B;for(let ut=0,at=_.length;ut<at;ut++){const mt=_[ut];if(mt.cacheKey===b){B=mt,++B.usedTimes;break}}return B===void 0&&(B=new xb(o,b,w,u),_.push(B)),B}function I(w){if(--w.usedTimes===0){const b=_.indexOf(w);_[b]=_[_.length-1],_.pop(),w.destroy()}}function F(w){p.remove(w)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:F,programs:_,dispose:W}}function Tb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function bb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function V_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function k_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,g,M,T,C,y){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:g,material:M,groupOrder:T,renderOrder:x.renderOrder,z:C,group:y},o[t]=v):(v.id=x.id,v.object=x,v.geometry=g,v.material=M,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=C,v.group=y),t++,v}function d(x,g,M,T,C,y){const v=h(x,g,M,T,C,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(x,g,M,T,C,y){const v=h(x,g,M,T,C,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(x,g){i.length>1&&i.sort(x||bb),r.length>1&&r.sort(g||V_),l.length>1&&l.sort(g||V_)}function _(){for(let x=t,g=o.length;x<g;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:_,sort:m}}function Ab(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new k_,o.set(r,[h])):l>=u.length?(h=new k_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Rb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new ue};break;case"SpotLight":i={position:new tt,direction:new tt,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function Cb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let wb=0;function Db(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ub(o){const t=new Rb,i=Cb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,u=new Xe,h=new Xe;function d(m){let _=0,x=0,g=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,C=0,y=0,v=0,P=0,N=0,D=0,H=0,I=0,F=0;m.sort(Db);for(let w=0,b=m.length;w<b;w++){const B=m[w],ut=B.color,at=B.intensity,mt=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ut.r*at,x+=ut.g*at,g+=ut.b*at;else if(B.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],at);F++}else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const rt=B.shadow,j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=B.shadow.matrix,P++}r.directional[M]=G,M++}else if(B.isSpotLight){const G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(ut).multiplyScalar(at),G.distance=mt,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,r.spot[C]=G;const rt=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,rt.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[C]=rt.matrix,B.castShadow){const j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=dt,D++}C++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(ut).multiplyScalar(at),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=G,y++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity),G.distance=B.distance,G.decay=B.decay,B.castShadow){const rt=B.shadow,j=i.get(B);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=dt,r.pointShadowMatrix[T]=B.shadow.matrix,N++}r.point[T]=G,T++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(at),G.groundColor.copy(B.groundColor).multiplyScalar(at),r.hemi[v]=G,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=g;const W=r.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==C||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==P||W.numPointShadows!==N||W.numSpotShadows!==D||W.numSpotMaps!==H||W.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,W.directionalLength=M,W.pointLength=T,W.spotLength=C,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=P,W.numPointShadows=N,W.numSpotShadows=D,W.numSpotMaps=H,W.numLightProbes=F,r.version=wb++)}function p(m,_){let x=0,g=0,M=0,T=0,C=0;const y=_.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const N=m[v];if(N.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(N.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:r}}function X_(o){const t=new Ub(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function Lb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new X_(o),t.set(l,[d])):u>=h.length?(d=new X_(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pb(o,t,i){let r=new md;const l=new De,u=new De,h=new Ze,d=new aM({depthPacking:gS}),p=new rM,m={},_=i.maxTextureSize,x={[Pa]:Gn,[Gn]:Pa,[Si]:Si},g=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Nb,fragmentShader:Ob}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new en;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hn(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let v=this.type;this.render=function(I,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),b=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Na),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const at=v!==ta&&this.type===ta,mt=v===ta&&this.type!==ta;for(let dt=0,G=I.length;dt<G;dt++){const rt=I[dt],j=rt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/vt.x),l.x=u.x*vt.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/vt.y),l.y=u.y*vt.y,j.mapSize.y=u.y)),j.map===null||at===!0||mt===!0){const nt=this.type!==ta?{minFilter:Qn,magFilter:Qn}:{};j.map!==null&&j.map.dispose(),j.map=new _r(l.x,l.y,nt),j.map.texture.name=rt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const L=j.getViewportCount();for(let nt=0;nt<L;nt++){const Mt=j.getViewport(nt);h.set(u.x*Mt.x,u.y*Mt.y,u.x*Mt.z,u.y*Mt.w),ut.viewport(h),j.updateMatrices(rt,nt),r=j.getFrustum(),D(F,W,j.camera,rt,this.type)}j.isPointLightShadow!==!0&&this.type===ta&&P(j,W),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,b,B)};function P(I,F){const W=t.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new _r(l.x,l.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(F,null,W,g,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(F,null,W,M,C,null)}function N(I,F,W,w){let b=null;const B=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)b=B;else if(b=W.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ut=b.uuid,at=F.uuid;let mt=m[ut];mt===void 0&&(mt={},m[ut]=mt);let dt=mt[at];dt===void 0&&(dt=b.clone(),mt[at]=dt,F.addEventListener("dispose",H)),b=dt}if(b.visible=F.visible,b.wireframe=F.wireframe,w===ta?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:x[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ut=o.properties.get(b);ut.light=W}return b}function D(I,F,W,w,b){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===ta)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const at=t.update(I),mt=I.material;if(Array.isArray(mt)){const dt=at.groups;for(let G=0,rt=dt.length;G<rt;G++){const j=dt[G],vt=mt[j.materialIndex];if(vt&&vt.visible){const L=N(I,vt,w,b);I.onBeforeShadow(o,I,F,W,at,L,j),o.renderBufferDirect(W,null,at,L,I,j),I.onAfterShadow(o,I,F,W,at,L,j)}}}else if(mt.visible){const dt=N(I,mt,w,b);I.onBeforeShadow(o,I,F,W,at,dt,null),o.renderBufferDirect(W,null,at,dt,I,null),I.onAfterShadow(o,I,F,W,at,dt,null)}}const ut=I.children;for(let at=0,mt=ut.length;at<mt;at++)D(ut[at],F,W,w,b)}function H(I){I.target.removeEventListener("dispose",H);for(const W in m){const w=m[W],b=I.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const zb={[xh]:Sh,[Mh]:Th,[yh]:bh,[gs]:Eh,[Sh]:xh,[Th]:Mh,[bh]:yh,[Eh]:gs};function Bb(o,t){function i(){let X=!1;const Nt=new Ze;let lt=null;const _t=new Ze(0,0,0,0);return{setMask:function(Dt){lt!==Dt&&!X&&(o.colorMask(Dt,Dt,Dt,Dt),lt=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,Ut,te,He,nn){nn===!0&&(Dt*=He,Ut*=He,te*=He),Nt.set(Dt,Ut,te,He),_t.equals(Nt)===!1&&(o.clearColor(Dt,Ut,te,He),_t.copy(Nt))},reset:function(){X=!1,lt=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,lt=null,_t=null,Dt=null;return{setReversed:function(Ut){if(Nt!==Ut){const te=t.get("EXT_clip_control");Nt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const He=Dt;Dt=null,this.setClear(He)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?Et(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){lt!==Ut&&!X&&(o.depthMask(Ut),lt=Ut)},setFunc:function(Ut){if(Nt&&(Ut=zb[Ut]),_t!==Ut){switch(Ut){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){Dt!==Ut&&(Nt&&(Ut=1-Ut),o.clearDepth(Ut),Dt=Ut)},reset:function(){X=!1,lt=null,_t=null,Dt=null,Nt=!1}}}function l(){let X=!1,Nt=null,lt=null,_t=null,Dt=null,Ut=null,te=null,He=null,nn=null;return{setTest:function(Te){X||(Te?Et(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!X&&(o.stencilMask(Te),Nt=Te)},setFunc:function(Te,Rn,Cn){(lt!==Te||_t!==Rn||Dt!==Cn)&&(o.stencilFunc(Te,Rn,Cn),lt=Te,_t=Rn,Dt=Cn)},setOp:function(Te,Rn,Cn){(Ut!==Te||te!==Rn||He!==Cn)&&(o.stencilOp(Te,Rn,Cn),Ut=Te,te=Rn,He=Cn)},setLocked:function(Te){X=Te},setClear:function(Te){nn!==Te&&(o.clearStencil(Te),nn=Te)},reset:function(){X=!1,Nt=null,lt=null,_t=null,Dt=null,Ut=null,te=null,He=null,nn=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},x={},g=new WeakMap,M=[],T=null,C=!1,y=null,v=null,P=null,N=null,D=null,H=null,I=null,F=new ue(0,0,0),W=0,w=!1,b=null,B=null,ut=null,at=null,mt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,rt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=rt>=1):j.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=rt>=2);let vt=null,L={};const nt=o.getParameter(o.SCISSOR_BOX),Mt=o.getParameter(o.VIEWPORT),At=new Ze().fromArray(nt),Y=new Ze().fromArray(Mt);function pt(X,Nt,lt,_t){const Dt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(X,Ut),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<lt;te++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(Nt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Ut}const xt={};xt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(gs),ae(!1),oe(Xg),Et(o.CULL_FACE),z(Na);function Et(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Ct(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Zt(X,Nt){return x[X]!==Nt?(o.bindFramebuffer(X,Nt),x[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ot(X,Nt){let lt=M,_t=!1;if(X){lt=g.get(Nt),lt===void 0&&(lt=[],g.set(Nt,lt));const Dt=X.textures;if(lt.length!==Dt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,te=Dt.length;Ut<te;Ut++)lt[Ut]=o.COLOR_ATTACHMENT0+Ut;lt.length=Dt.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Me(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const we={[hr]:o.FUNC_ADD,[Vx]:o.FUNC_SUBTRACT,[kx]:o.FUNC_REVERSE_SUBTRACT};we[Xx]=o.MIN,we[Wx]=o.MAX;const $t={[qx]:o.ZERO,[Yx]:o.ONE,[jx]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[tS]:o.SRC_ALPHA_SATURATE,[Jx]:o.DST_COLOR,[Kx]:o.DST_ALPHA,[Zx]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[$x]:o.ONE_MINUS_DST_COLOR,[Qx]:o.ONE_MINUS_DST_ALPHA,[eS]:o.CONSTANT_COLOR,[nS]:o.ONE_MINUS_CONSTANT_COLOR,[iS]:o.CONSTANT_ALPHA,[aS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(X,Nt,lt,_t,Dt,Ut,te,He,nn,Te){if(X===Na){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(Et(o.BLEND),C=!0),X!==Gx){if(X!==y||Te!==w){if((v!==hr||D!==hr)&&(o.blendEquation(o.FUNC_ADD),v=hr,D=hr),Te)switch(X){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wg:o.blendFunc(o.ONE,o.ONE);break;case qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,N=null,H=null,I=null,F.set(0,0,0),W=0,y=X,w=Te}return}Dt=Dt||Nt,Ut=Ut||lt,te=te||_t,(Nt!==v||Dt!==D)&&(o.blendEquationSeparate(we[Nt],we[Dt]),v=Nt,D=Dt),(lt!==P||_t!==N||Ut!==H||te!==I)&&(o.blendFuncSeparate($t[lt],$t[_t],$t[Ut],$t[te]),P=lt,N=_t,H=Ut,I=te),(He.equals(F)===!1||nn!==W)&&(o.blendColor(He.r,He.g,He.b,nn),F.copy(He),W=nn),y=X,w=!1}function Ge(X,Nt){X.side===Si?Ct(o.CULL_FACE):Et(o.CULL_FACE);let lt=X.side===Gn;Nt&&(lt=!lt),ae(lt),X.blending===ds&&X.transparent===!1?z(Na):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ee(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){b!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),b=X)}function oe(X){X!==Fx?(Et(o.CULL_FACE),X!==B&&(X===Xg?o.cullFace(o.BACK):X===Ix?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),B=X}function Vt(X){X!==ut&&(G&&o.lineWidth(X),ut=X)}function Ee(X,Nt,lt){X?(Et(o.POLYGON_OFFSET_FILL),(at!==Nt||mt!==lt)&&(o.polygonOffset(Nt,lt),at=Nt,mt=lt)):Ct(o.POLYGON_OFFSET_FILL)}function kt(X){X?Et(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+dt-1),vt!==X&&(o.activeTexture(X),vt=X)}function E(X,Nt,lt){lt===void 0&&(vt===null?lt=o.TEXTURE0+dt-1:lt=vt);let _t=L[lt];_t===void 0&&(_t={type:void 0,texture:void 0},L[lt]=_t),(_t.type!==X||_t.texture!==Nt)&&(vt!==lt&&(o.activeTexture(lt),vt=lt),o.bindTexture(X,Nt||xt[X]),_t.type=X,_t.texture=Nt)}function $(){const X=L[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(X){At.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),At.copy(X))}function Ht(X){Y.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function se(X,Nt){let lt=m.get(Nt);lt===void 0&&(lt=new WeakMap,m.set(Nt,lt));let _t=lt.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(Nt,X.name),lt.set(X,_t))}function Kt(X,Nt){const _t=m.get(Nt).get(X);p.get(Nt)!==_t&&(o.uniformBlockBinding(Nt,_t,X.__bindingPointIndex),p.set(Nt,_t))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},vt=null,L={},x={},g=new WeakMap,M=[],T=null,C=!1,y=null,v=null,P=null,N=null,D=null,H=null,I=null,F=new ue(0,0,0),W=0,w=!1,b=null,B=null,ut=null,at=null,mt=null,At.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:Ct,bindFramebuffer:Zt,drawBuffers:Ot,useProgram:Me,setBlending:z,setMaterial:Ge,setFlipSided:ae,setCullFace:oe,setLineWidth:Vt,setPolygonOffset:Ee,setScissorTest:kt,activeTexture:U,bindTexture:E,unbindTexture:$,compressedTexImage2D:ht,compressedTexImage3D:st,texImage2D:Ft,texImage3D:qt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:he,texStorage3D:Tt,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Bt,scissor:Xt,viewport:Ht,reset:Ue}}function Fb(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new De,_=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return M?new OffscreenCanvas(U,E):Mc("canvas")}function C(U,E,$){let ht=1;const st=kt(U);if((st.width>$||st.height>$)&&(ht=$/Math.max(st.width,st.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ot=Math.floor(ht*st.width),bt=Math.floor(ht*st.height);x===void 0&&(x=T(ot,bt));const Rt=E?T(ot,bt):x;return Rt.width=ot,Rt.height=bt,Rt.getContext("2d").drawImage(U,0,0,ot,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ot+"x"+bt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,E,$,ht,st=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ot=E;if(E===o.RED&&($===o.FLOAT&&(ot=o.R32F),$===o.HALF_FLOAT&&(ot=o.R16F),$===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.R8UI),$===o.UNSIGNED_SHORT&&(ot=o.R16UI),$===o.UNSIGNED_INT&&(ot=o.R32UI),$===o.BYTE&&(ot=o.R8I),$===o.SHORT&&(ot=o.R16I),$===o.INT&&(ot=o.R32I)),E===o.RG&&($===o.FLOAT&&(ot=o.RG32F),$===o.HALF_FLOAT&&(ot=o.RG16F),$===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RG8UI),$===o.UNSIGNED_SHORT&&(ot=o.RG16UI),$===o.UNSIGNED_INT&&(ot=o.RG32UI),$===o.BYTE&&(ot=o.RG8I),$===o.SHORT&&(ot=o.RG16I),$===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),$===o.UNSIGNED_INT&&(ot=o.RGB32UI),$===o.BYTE&&(ot=o.RGB8I),$===o.SHORT&&(ot=o.RGB16I),$===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),$===o.UNSIGNED_INT&&(ot=o.RGBA32UI),$===o.BYTE&&(ot=o.RGBA8I),$===o.SHORT&&(ot=o.RGBA16I),$===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),E===o.RGBA){const bt=st?xc:Ce.getTransfer(ht);$===o.FLOAT&&(ot=o.RGBA32F),$===o.HALF_FLOAT&&(ot=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ot=bt===Pe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(U,E){let $;return U?E===null||E===gr||E===xs?$=o.DEPTH24_STENCIL8:E===ea?$=o.DEPTH32F_STENCIL8:E===Uo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gr||E===xs?$=o.DEPTH_COMPONENT24:E===ea?$=o.DEPTH_COMPONENT32F:E===Uo&&($=o.DEPTH_COMPONENT16),$}function H(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Qn&&U.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),W(E),E.isVideoTexture&&_.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),b(E)}function W(U){const E=r.get(U);if(E.__webglInit===void 0)return;const $=U.source,ht=g.get($);if(ht){const st=ht[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(U),Object.keys(ht).length===0&&g.delete($)}r.remove(U)}function w(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const $=U.source,ht=g.get($);delete ht[E.__cacheKey],h.memory.textures--}function b(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let st=0;st<E.__webglFramebuffer[ht].length;st++)o.deleteFramebuffer(E.__webglFramebuffer[ht][st]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let ht=0,st=$.length;ht<st;ht++){const ot=r.get($[ht]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ht])}r.remove(U)}let B=0;function ut(){B=0}function at(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function mt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function dt(U,E){const $=r.get(U);if(U.isVideoTexture&&Vt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,U,E);return}}i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function G(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){Y($,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function rt(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){Y($,U,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function j(U,E){const $=r.get(U);if(U.version>0&&$.__version!==U.version){pt($,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const vt={[Ch]:o.REPEAT,[pr]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},L={[Qn]:o.NEAREST,[pS]:o.NEAREST_MIPMAP_NEAREST,[kl]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[mr]:o.LINEAR_MIPMAP_LINEAR},nt={[vS]:o.NEVER,[TS]:o.ALWAYS,[xS]:o.LESS,[r0]:o.LEQUAL,[SS]:o.EQUAL,[ES]:o.GEQUAL,[MS]:o.GREATER,[yS]:o.NOTEQUAL};function Mt(U,E){if(E.type===ea&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Di||E.magFilter===Bf||E.magFilter===kl||E.magFilter===mr||E.minFilter===Di||E.minFilter===Bf||E.minFilter===kl||E.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qn||E.minFilter!==kl&&E.minFilter!==mr||E.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let st=g.get(ht);st===void 0&&(st={},g.set(ht,st));const ot=mt(E);if(ot!==U.__cacheKey){st[ot]===void 0&&(st[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),st[ot].usedTimes++;const bt=st[U.__cacheKey];bt!==void 0&&(st[U.__cacheKey].usedTimes--,bt.usedTimes===0&&w(E)),U.__cacheKey=ot,U.__webglTexture=st[ot].texture}return $}function Y(U,E,$){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const st=At(U,E),ot=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+$);const bt=r.get(ot);if(ot.version!==bt.__version||st===!0){i.activeTexture(o.TEXTURE0+$);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Bt=E.colorSpace===La?null:Ce.getPrimaries(E.colorSpace),he=E.colorSpace===La||Rt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Tt=C(E.image,!1,l.maxTextureSize);Tt=Ee(E,Tt);const Ft=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Xt=N(E.internalFormat,Ft,qt,E.colorSpace,E.isVideoTexture);Mt(ht,E);let Ht;const se=E.mipmaps,Kt=E.isVideoTexture!==!0,Ue=bt.__version===void 0||st===!0,X=ot.dataReady,Nt=H(E,Tt);if(E.isDepthTexture)Xt=D(E.format===Ss,E.type),Ue&&(Kt?i.texStorage2D(o.TEXTURE_2D,1,Xt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Ft,qt,null));else if(E.isDataTexture)if(se.length>0){Kt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Nt,Xt,se[0].width,se[0].height);for(let lt=0,_t=se.length;lt<_t;lt++)Ht=se[lt],Kt?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Ft,qt,Ht.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Ht.width,Ht.height,0,Ft,qt,Ht.data);E.generateMipmaps=!1}else Kt?(Ue&&i.texStorage2D(o.TEXTURE_2D,Nt,Xt,Tt.width,Tt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,qt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Ft,qt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Xt,se[0].width,se[0].height,Tt.depth);for(let lt=0,_t=se.length;lt<_t;lt++)if(Ht=se[lt],E.format!==fi)if(Ft!==null)if(Kt){if(X)if(E.layerUpdates.size>0){const Dt=M_(Ht.width,Ht.height,E.format,E.type);for(const Ut of E.layerUpdates){const te=Ht.data.subarray(Ut*Dt/Ht.data.BYTES_PER_ELEMENT,(Ut+1)*Dt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Ut,Ht.width,Ht.height,1,Ft,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ht.width,Ht.height,Tt.depth,Ft,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Ht.width,Ht.height,Tt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ht.width,Ht.height,Tt.depth,Ft,qt,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Ht.width,Ht.height,Tt.depth,0,Ft,qt,Ht.data)}else{Kt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Nt,Xt,se[0].width,se[0].height);for(let lt=0,_t=se.length;lt<_t;lt++)Ht=se[lt],E.format!==fi?Ft!==null?Kt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Ft,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Xt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ht.width,Ht.height,Ft,qt,Ht.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Ht.width,Ht.height,0,Ft,qt,Ht.data)}else if(E.isDataArrayTexture)if(Kt){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Xt,Tt.width,Tt.height,Tt.depth),X)if(E.layerUpdates.size>0){const lt=M_(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Dt=Tt.data.subarray(_t*lt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*lt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Ft,qt,Dt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,qt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,Tt.width,Tt.height,Tt.depth,0,Ft,qt,Tt.data);else if(E.isData3DTexture)Kt?(Ue&&i.texStorage3D(o.TEXTURE_3D,Nt,Xt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,qt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,Tt.width,Tt.height,Tt.depth,0,Ft,qt,Tt.data);else if(E.isFramebufferTexture){if(Ue)if(Kt)i.texStorage2D(o.TEXTURE_2D,Nt,Xt,Tt.width,Tt.height);else{let lt=Tt.width,_t=Tt.height;for(let Dt=0;Dt<Nt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,Xt,lt,_t,0,Ft,qt,null),lt>>=1,_t>>=1}}else if(se.length>0){if(Kt&&Ue){const lt=kt(se[0]);i.texStorage2D(o.TEXTURE_2D,Nt,Xt,lt.width,lt.height)}for(let lt=0,_t=se.length;lt<_t;lt++)Ht=se[lt],Kt?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft,qt,Ht):i.texImage2D(o.TEXTURE_2D,lt,Xt,Ft,qt,Ht);E.generateMipmaps=!1}else if(Kt){if(Ue){const lt=kt(Tt);i.texStorage2D(o.TEXTURE_2D,Nt,Xt,lt.width,lt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,qt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Ft,qt,Tt);y(E)&&v(ht),bt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function pt(U,E,$){if(E.image.length!==6)return;const ht=At(U,E),st=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const ot=r.get(st);if(st.version!==ot.__version||ht===!0){i.activeTexture(o.TEXTURE0+$);const bt=Ce.getPrimaries(Ce.workingColorSpace),Rt=E.colorSpace===La?null:Ce.getPrimaries(E.colorSpace),Bt=E.colorSpace===La||bt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!he&&!Tt?Ft[_t]=C(E.image[_t],!0,l.maxCubemapSize):Ft[_t]=Tt?E.image[_t].image:E.image[_t],Ft[_t]=Ee(E,Ft[_t]);const qt=Ft[0],Xt=u.convert(E.format,E.colorSpace),Ht=u.convert(E.type),se=N(E.internalFormat,Xt,Ht,E.colorSpace),Kt=E.isVideoTexture!==!0,Ue=ot.__version===void 0||ht===!0,X=st.dataReady;let Nt=H(E,qt);Mt(o.TEXTURE_CUBE_MAP,E);let lt;if(he){Kt&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,se,qt.width,qt.height);for(let _t=0;_t<6;_t++){lt=Ft[_t].mipmaps;for(let Dt=0;Dt<lt.length;Dt++){const Ut=lt[Dt];E.format!==fi?Xt!==null?Kt?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Ut.width,Ut.height,Xt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Ut.width,Ut.height,Xt,Ht,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Ut.width,Ut.height,0,Xt,Ht,Ut.data)}}}else{if(lt=E.mipmaps,Kt&&Ue){lt.length>0&&Nt++;const _t=kt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){Kt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Xt,Ht,Ft[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ft[_t].width,Ft[_t].height,0,Xt,Ht,Ft[_t].data);for(let Dt=0;Dt<lt.length;Dt++){const te=lt[Dt].image[_t].image;Kt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,te.width,te.height,Xt,Ht,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,te.width,te.height,0,Xt,Ht,te.data)}}else{Kt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ht,Ft[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Xt,Ht,Ft[_t]);for(let Dt=0;Dt<lt.length;Dt++){const Ut=lt[Dt];Kt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Xt,Ht,Ut.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,Xt,Ht,Ut.image[_t])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),ot.__version=st.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function xt(U,E,$,ht,st,ot){const bt=u.convert($.format,$.colorSpace),Rt=u.convert($.type),Bt=N($.internalFormat,bt,Rt,$.colorSpace),he=r.get(E),Tt=r.get($);if(Tt.__renderTarget=E,!he.__hasExternalTextures){const Ft=Math.max(1,E.width>>ot),qt=Math.max(1,E.height>>ot);st===o.TEXTURE_3D||st===o.TEXTURE_2D_ARRAY?i.texImage3D(st,ot,Bt,Ft,qt,E.depth,0,bt,Rt,null):i.texImage2D(st,ot,Bt,Ft,qt,0,bt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),oe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,st,Tt.__webglTexture,0,ae(E)):(st===o.TEXTURE_2D||st>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,st,Tt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(U,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,st=ht&&ht.isDepthTexture?ht.type:null,ot=D(E.stencilBuffer,st),bt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ae(E);oe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ot,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let st=0;st<ht.length;st++){const ot=ht[st],bt=u.convert(ot.format,ot.colorSpace),Rt=u.convert(ot.type),Bt=N(ot.internalFormat,bt,Rt,ot.colorSpace),he=ae(E);$&&oe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Bt,E.width,E.height):oe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he,Bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const st=ht.__webglTexture,ot=ae(E);if(E.depthTexture.format===ps)oe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0);else if(E.depthTexture.format===Ss)oe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Zt(U){const E=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",st)};ht.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Et(E.__webglDepthbuffer[ht],U,!1);else{const st=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,ot)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Et(E.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,st)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(U,E,$){const ht=r.get(U);E!==void 0&&xt(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Zt(U)}function Me(U){const E=U.texture,$=r.get(U),ht=r.get(E);U.addEventListener("dispose",F);const st=U.textures,ot=U.isWebGLCubeRenderTarget===!0,bt=st.length>1;if(bt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)$.__webglFramebuffer[Rt][Bt]=o.createFramebuffer()}else $.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(bt)for(let Rt=0,Bt=st.length;Rt<Bt;Rt++){const he=r.get(st[Rt]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&oe(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<st.length;Rt++){const Bt=st[Rt];$.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);const he=u.convert(Bt.format,Bt.colorSpace),Tt=u.convert(Bt.type),Ft=N(Bt.internalFormat,he,Tt,Bt.colorSpace,U.isXRRenderTarget===!0),qt=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ft,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Et($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Mt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)xt($.__webglFramebuffer[Rt][Bt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Bt);else xt($.__webglFramebuffer[Rt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){for(let Rt=0,Bt=st.length;Rt<Bt;Rt++){const he=st[Rt],Tt=r.get(he);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),Mt(o.TEXTURE_2D,he),xt($.__webglFramebuffer,U,he,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),y(he)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),Mt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)xt($.__webglFramebuffer[Bt],U,E,o.COLOR_ATTACHMENT0,Rt,Bt);else xt($.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&v(Rt),i.unbindTexture()}U.depthBuffer&&Zt(U)}function we(U){const E=U.textures;for(let $=0,ht=E.length;$<ht;$++){const st=E[$];if(y(st)){const ot=P(U),bt=r.get(st).__webglTexture;i.bindTexture(ot,bt),v(ot),i.unbindTexture()}}}const $t=[],z=[];function Ge(U){if(U.samples>0){if(oe(U)===!1){const E=U.textures,$=U.width,ht=U.height;let st=o.COLOR_BUFFER_BIT;const ot=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=r.get(U),Rt=E.length>1;if(Rt)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(st|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(st|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const he=r.get(E[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0)}o.blitFramebuffer(0,0,$,ht,0,0,$,ht,st,o.NEAREST),p===!0&&($t.length=0,z.length=0,$t.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&($t.push(ot),z.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const he=r.get(E[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,he,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ae(U){return Math.min(l.maxSamples,U.samples)}function oe(U){const E=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ee(U,E){const $=U.colorSpace,ht=U.format,st=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Ms&&$!==La&&(Ce.getTransfer($)===Pe?(ht!==fi||st!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ut,this.setTexture2D=dt,this.setTexture2DArray=G,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=Ot,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=oe}function Ib(o,t){function i(r,l=La){let u;const h=Ce.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===K_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===j_)return o.BYTE;if(r===Z_)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===od)return o.INT;if(r===gr)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===Q_)return o.ALPHA;if(r===J_)return o.RGB;if(r===fi)return o.RGBA;if(r===$_)return o.LUMINANCE;if(r===t0)return o.LUMINANCE_ALPHA;if(r===ps)return o.DEPTH_COMPONENT;if(r===Ss)return o.DEPTH_STENCIL;if(r===e0)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===n0)return o.RG;if(r===fd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===dc||r===pc||r===mc||r===gc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===Ph||r===zh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Oh||r===Ph)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_c||r===Qh||r===Jh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===_c)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===i0||r===$h||r===td||r===ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===_c)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new On,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new za({vertexShader:Hb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hn(new Ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kb extends Es{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,_=null,x=null,g=null,M=null,T=null;const C=new Vb,y=i.getContextAttributes();let v=null,P=null;const N=[],D=[],H=new De;let I=null;const F=new ui;F.viewport=new Ze;const W=new ui;W.viewport=new Ze;const w=[F,W],b=new uM;let B=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=N[Y];return pt===void 0&&(pt=new rh,N[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=N[Y];return pt===void 0&&(pt=new rh,N[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=N[Y];return pt===void 0&&(pt=new rh,N[Y]=pt),pt.getHandSpace()};function at(Y){const pt=D.indexOf(Y.inputSource);if(pt===-1)return;const xt=N[pt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,m||h),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function mt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",dt);for(let Y=0;Y<N.length;Y++){const pt=D[Y];pt!==null&&(D[Y]=null,N[Y].disconnect(pt))}B=null,ut=null,C.reset(),t.setRenderTarget(v),M=null,g=null,x=null,l=null,P=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Et=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Ss:ps,Et=y.stencil?xs:gr);const Zt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};x=new XRWebGLBinding(l,i),g=x.createProjectionLayer(Zt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new _r(g.textureWidth,g.textureHeight,{format:fi,type:aa,depthTexture:new g0(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new _r(M.framebufferWidth,M.framebufferHeight,{format:fi,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function dt(Y){for(let pt=0;pt<Y.removed.length;pt++){const xt=Y.removed[pt],Et=D.indexOf(xt);Et>=0&&(D[Et]=null,N[Et].disconnect(xt))}for(let pt=0;pt<Y.added.length;pt++){const xt=Y.added[pt];let Et=D.indexOf(xt);if(Et===-1){for(let Zt=0;Zt<N.length;Zt++)if(Zt>=D.length){D.push(xt),Et=Zt;break}else if(D[Zt]===null){D[Zt]=xt,Et=Zt;break}if(Et===-1)break}const Ct=N[Et];Ct&&Ct.connect(xt)}}const G=new tt,rt=new tt;function j(Y,pt,xt){G.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const Et=G.distanceTo(rt),Ct=pt.projectionMatrix.elements,Zt=xt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),Me=Ct[14]/(Ct[10]+1),we=(Ct[9]+1)/Ct[5],$t=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],Ge=(Zt[8]+1)/Zt[0],ae=Ot*z,oe=Ot*Ge,Vt=Et/(-z+Ge),Ee=Vt*-z;if(pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ee),Y.translateZ(Vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const kt=Ot+Vt,U=Me+Vt,E=ae-Ee,$=oe+(Et-Ee),ht=we*Me/U*kt,st=$t*Me/U*kt;Y.projectionMatrix.makePerspective(E,$,ht,st,kt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function vt(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let pt=Y.near,xt=Y.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(xt=C.depthFar)),b.near=W.near=F.near=pt,b.far=W.far=F.far=xt,(B!==b.near||ut!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,ut=b.far),F.layers.mask=Y.layers.mask|2,W.layers.mask=Y.layers.mask|4,b.layers.mask=F.layers.mask|W.layers.mask;const Et=Y.parent,Ct=b.cameras;vt(b,Et);for(let Zt=0;Zt<Ct.length;Zt++)vt(Ct[Zt],Et);Ct.length===2?j(b,F,W):b.projectionMatrix.copy(F.projectionMatrix),L(Y,b,Et)};function L(Y,pt,xt){xt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(Y){p=Y,g!==null&&(g.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(b)};let nt=null;function Mt(Y,pt){if(_=pt.getViewerPose(m||h),T=pt,_!==null){const xt=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Et=!1;xt.length!==b.cameras.length&&(b.cameras.length=0,Et=!0);for(let Ot=0;Ot<xt.length;Ot++){const Me=xt[Ot];let we=null;if(M!==null)we=M.getViewport(Me);else{const z=x.getViewSubImage(g,Me);we=z.viewport,Ot===0&&(t.setRenderTargetTextures(P,z.colorTexture,g.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let $t=w[Ot];$t===void 0&&($t=new ui,$t.layers.enable(Ot),$t.viewport=new Ze,w[Ot]=$t),$t.matrix.fromArray(Me.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Me.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(we.x,we.y,we.width,we.height),Ot===0&&(b.matrix.copy($t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Et===!0&&b.cameras.push($t)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ot=x.getDepthInformation(xt[0]);Ot&&Ot.isValid&&Ot.texture&&C.init(t,Ot,l.renderState)}}for(let xt=0;xt<N.length;xt++){const Et=D[xt],Ct=N[xt];Et!==null&&Ct!==void 0&&Ct.update(Et,pt,m||h)}nt&&nt(Y,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),T=null}const At=new S0;At.setAnimationLoop(Mt),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}}const lr=new Ui,Xb=new Xe;function Wb(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,d0(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),g(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,P,N):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),N=P.envMap,D=P.envMapRotation;N&&(y.envMap.value=N,lr.copy(D),lr.x*=-1,lr.y*=-1,lr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),y.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(lr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,P,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qb(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const D=N.program;r.uniformBlockBinding(P,D)}function m(P,N){let D=l[P.id];D===void 0&&(T(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",y));const H=N.program;r.updateUBOMapping(P,H);const I=t.render.frame;u[P.id]!==I&&(g(P),u[P.id]=I)}function _(P){const N=x();P.__bindingPointIndex=N;const D=o.createBuffer(),H=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const N=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,F=D.length;I<F;I++){const W=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,b=W.length;w<b;w++){const B=W[w];if(M(B,I,w,H)===!0){const ut=B.__offset,at=Array.isArray(B.value)?B.value:[B.value];let mt=0;for(let dt=0;dt<at.length;dt++){const G=at[dt],rt=C(G);typeof G=="number"||typeof G=="boolean"?(B.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,ut+mt,B.__data)):G.isMatrix3?(B.__data[0]=G.elements[0],B.__data[1]=G.elements[1],B.__data[2]=G.elements[2],B.__data[3]=0,B.__data[4]=G.elements[3],B.__data[5]=G.elements[4],B.__data[6]=G.elements[5],B.__data[7]=0,B.__data[8]=G.elements[6],B.__data[9]=G.elements[7],B.__data[10]=G.elements[8],B.__data[11]=0):(G.toArray(B.__data,mt),mt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,N,D,H){const I=P.value,F=N+"_"+D;if(H[F]===void 0)return typeof I=="number"||typeof I=="boolean"?H[F]=I:H[F]=I.clone(),!0;{const W=H[F];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return H[F]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function T(P){const N=P.uniforms;let D=0;const H=16;for(let F=0,W=N.length;F<W;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let b=0,B=w.length;b<B;b++){const ut=w[b],at=Array.isArray(ut.value)?ut.value:[ut.value];for(let mt=0,dt=at.length;mt<dt;mt++){const G=at[mt],rt=C(G),j=D%H,vt=j%rt.boundary,L=j+vt;D+=vt,L!==0&&H-L<rt.storage&&(D+=H-L),ut.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=rt.storage}}}const I=D%H;return I>0&&(D+=H-I),P.__size=D,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function y(P){const N=P.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:v}}class Yb{constructor(t={}){const{canvas:i=AS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),C=new Int32Array(4);let y=null,v=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Oa,this.toneMappingExposure=1;const D=this;let H=!1,I=0,F=0,W=null,w=-1,b=null;const B=new Ze,ut=new Ze;let at=null;const mt=new ue(0);let dt=0,G=i.width,rt=i.height,j=1,vt=null,L=null;const nt=new Ze(0,0,G,rt),Mt=new Ze(0,0,G,rt);let At=!1;const Y=new md;let pt=!1,xt=!1;this.transmissionResolutionScale=1;const Et=new Xe,Ct=new Xe,Zt=new tt,Ot=new Ze,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function $t(){return W===null?j:1}let z=r;function Ge(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),z===null){const q="webgl2";if(z=Ge(q,R),z===null)throw Ge(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,oe,Vt,Ee,kt,U,E,$,ht,st,ot,bt,Rt,Bt,he,Tt,Ft,qt,Xt,Ht,se,Kt,Ue,X;function Nt(){ae=new iT(z),ae.init(),Kt=new Ib(z,ae),oe=new KE(z,ae,t,Kt),Vt=new Bb(z,ae),oe.reverseDepthBuffer&&g&&Vt.buffers.depth.setReversed(!0),Ee=new sT(z),kt=new Tb,U=new Fb(z,ae,Vt,kt,oe,Kt,Ee),E=new JE(D),$=new nT(D),ht=new hM(z),Ue=new jE(z,ht),st=new aT(z,ht,Ee,Ue),ot=new lT(z,st,ht,Ee),Xt=new oT(z,oe,U),Tt=new QE(kt),bt=new Eb(D,E,$,ae,oe,Ue,Tt),Rt=new Wb(D,kt),Bt=new Ab,he=new Lb(ae),qt=new YE(D,E,$,Vt,ot,M,p),Ft=new Pb(D,ot,oe),X=new qb(z,Ee,oe,Vt),Ht=new ZE(z,ae,Ee),se=new rT(z,ae,Ee),Ee.programs=bt.programs,D.capabilities=oe,D.extensions=ae,D.properties=kt,D.renderLists=Bt,D.shadowMap=Ft,D.state=Vt,D.info=Ee}Nt();const lt=new kb(D,z);this.xr=lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(G,rt,!1))},this.getSize=function(R){return R.set(G,rt)},this.setSize=function(R,q,et=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,rt=q,i.width=Math.floor(R*j),i.height=Math.floor(q*j),et===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(G*j,rt*j).floor()},this.setDrawingBufferSize=function(R,q,et){G=R,rt=q,j=et,i.width=Math.floor(R*et),i.height=Math.floor(q*et),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,q,et,Q){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,q,et,Q),Vt.viewport(B.copy(nt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,q,et,Q){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,q,et,Q),Vt.scissor(ut.copy(Mt).multiplyScalar(j).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(R){Vt.setScissorTest(At=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,et=!0){let Q=0;if(R){let Z=!1;if(W!==null){const yt=W.texture.format;Z=yt===hd||yt===fd||yt===ud}if(Z){const yt=W.texture.type,wt=yt===aa||yt===gr||yt===Uo||yt===xs||yt===ld||yt===cd,zt=qt.getClearColor(),Pt=qt.getClearAlpha(),ee=zt.r,ne=zt.g,jt=zt.b;wt?(T[0]=ee,T[1]=ne,T[2]=jt,T[3]=Pt,z.clearBufferuiv(z.COLOR,0,T)):(C[0]=ee,C[1]=ne,C[2]=jt,C[3]=Pt,z.clearBufferiv(z.COLOR,0,C))}else Q|=z.COLOR_BUFFER_BIT}q&&(Q|=z.DEPTH_BUFFER_BIT),et&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),qt.dispose(),Bt.dispose(),he.dispose(),kt.dispose(),E.dispose(),$.dispose(),ot.dispose(),Ue.dispose(),X.dispose(),bt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Bo),lt.removeEventListener("sessionend",As),Ei.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ee.autoReset,q=Ft.enabled,et=Ft.autoUpdate,Q=Ft.needsUpdate,Z=Ft.type;Nt(),Ee.autoReset=R,Ft.enabled=q,Ft.autoUpdate=et,Ft.needsUpdate=Q,Ft.type=Z}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const q=R.target;q.removeEventListener("dispose",te),He(q)}function He(R){nn(R),kt.remove(R)}function nn(R){const q=kt.get(R).programs;q!==void 0&&(q.forEach(function(et){bt.releaseProgram(et)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,et,Q,Z,yt){q===null&&(q=Me);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=Cc(R,q,et,Q,Z);Vt.setMaterial(Q,wt);let Pt=et.index,ee=1;if(Q.wireframe===!0){if(Pt=st.getWireframeAttribute(et),Pt===void 0)return;ee=2}const ne=et.drawRange,jt=et.attributes.position;let _e=ne.start*ee,ve=(ne.start+ne.count)*ee;yt!==null&&(_e=Math.max(_e,yt.start*ee),ve=Math.min(ve,(yt.start+yt.count)*ee)),Pt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,Pt.count)):jt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,jt.count));const Ie=ve-_e;if(Ie<0||Ie===1/0)return;Ue.setup(Z,Q,zt,et,Pt);let be,ie=Ht;if(Pt!==null&&(be=ht.get(Pt),ie=se,ie.setIndex(be)),Z.isMesh)Q.wireframe===!0?(Vt.setLineWidth(Q.wireframeLinewidth*$t()),ie.setMode(z.LINES)):ie.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=Q.linewidth;Qt===void 0&&(Qt=1),Vt.setLineWidth(Qt*$t()),Z.isLineSegments?ie.setMode(z.LINES):Z.isLineLoop?ie.setMode(z.LINE_LOOP):ie.setMode(z.LINE_STRIP)}else Z.isPoints?ie.setMode(z.POINTS):Z.isSprite&&ie.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ie.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,sn=Z._multiDrawCounts,xe=Z._multiDrawCount,Pn=Pt?ht.get(Pt).bytesPerElement:1,hi=kt.get(Q).currentProgram.getUniforms();for(let wn=0;wn<xe;wn++)hi.setValue(z,"_gl_DrawID",wn),ie.render(Qt[wn]/Pn,sn[wn])}else if(Z.isInstancedMesh)ie.renderInstances(_e,Ie,Z.count);else if(et.isInstancedBufferGeometry){const Qt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,sn=Math.min(et.instanceCount,Qt);ie.renderInstances(_e,Ie,sn)}else ie.render(_e,Ie)};function Te(R,q,et){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,rn(R,q,et),R.side=Pa,R.needsUpdate=!0,rn(R,q,et),R.side=Si):rn(R,q,et)}this.compile=function(R,q,et=null){et===null&&(et=R),v=he.get(et),v.init(q),N.push(v),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==et&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const Q=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const zt=yt[wt];Te(zt,et,Z),Q.add(zt)}else Te(yt,et,Z),Q.add(yt)}),v=N.pop(),Q},this.compileAsync=function(R,q,et=null){const Q=this.compile(R,q,et);return new Promise(Z=>{function yt(){if(Q.forEach(function(wt){kt.get(wt).currentProgram.isReady()&&Q.delete(wt)}),Q.size===0){Z(R);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Rn=null;function Cn(R){Rn&&Rn(R)}function Bo(){Ei.stop()}function As(){Ei.start()}const Ei=new S0;Ei.setAnimationLoop(Cn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){Rn=R,lt.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},lt.addEventListener("sessionstart",Bo),lt.addEventListener("sessionend",As),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(q),q=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,W),v=he.get(R,N.length),v.init(q),N.push(v),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,xt),y=Bt.get(R,P.length),y.init(),P.push(y),lt.enabled===!0&&lt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&vr(yt,q,-1/0,D.sortObjects)}vr(R,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,L),we=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,we&&qt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&Tt.beginShadows();const et=v.state.shadowsArray;Ft.render(et,R,q),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Z=y.transmissive;if(v.setupLights(),q.isArrayCamera){const yt=q.cameras;if(Z.length>0)for(let wt=0,zt=yt.length;wt<zt;wt++){const Pt=yt[wt];Fo(Q,Z,R,Pt)}we&&qt.render(R);for(let wt=0,zt=yt.length;wt<zt;wt++){const Pt=yt[wt];Rs(y,R,Pt,Pt.viewport)}}else Z.length>0&&Fo(Q,Z,R,q),we&&qt.render(R),Rs(y,R,q);W!==null&&F===0&&(U.updateMultisampleRenderTarget(W),U.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(D,R,q),Ue.resetDefaultState(),w=-1,b=null,N.pop(),N.length>0?(v=N[N.length-1],pt===!0&&Tt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function vr(R,q,et,Q){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){Q&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const wt=ot.update(R),zt=R.material;zt.visible&&y.push(R,wt,zt,et,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const wt=ot.update(R),zt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ot.copy(wt.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Pt=wt.groups;for(let ee=0,ne=Pt.length;ee<ne;ee++){const jt=Pt[ee],_e=zt[jt.materialIndex];_e&&_e.visible&&y.push(R,wt,_e,et,Ot.z,jt)}}else zt.visible&&y.push(R,wt,zt,et,Ot.z,null)}}const yt=R.children;for(let wt=0,zt=yt.length;wt<zt;wt++)vr(yt[wt],q,et,Q)}function Rs(R,q,et,Q){const Z=R.opaque,yt=R.transmissive,wt=R.transparent;v.setupLightsView(et),pt===!0&&Tt.setGlobalState(D.clippingPlanes,et),Q&&Vt.viewport(B.copy(Q)),Z.length>0&&kn(Z,q,et),yt.length>0&&kn(yt,q,et),wt.length>0&&kn(wt,q,et),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Fo(R,q,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new _r(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Lo:aa,minFilter:mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const yt=v.state.transmissionRenderTarget[Q.id],wt=Q.viewport||B;yt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(mt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),we&&qt.render(et);const Pt=D.toneMapping;D.toneMapping=Oa;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),pt===!0&&Tt.setGlobalState(D.clippingPlanes,Q),kn(R,et,Q),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let jt=0,_e=q.length;jt<_e;jt++){const ve=q[jt],Ie=ve.object,be=ve.geometry,ie=ve.material,Qt=ve.group;if(ie.side===Si&&Ie.layers.test(Q.layers)){const sn=ie.side;ie.side=Gn,ie.needsUpdate=!0,an(Ie,et,Q,be,ie,Qt),ie.side=sn,ie.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(zt),D.setClearColor(mt,dt),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Pt}function kn(R,q,et){const Q=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,yt=R.length;Z<yt;Z++){const wt=R[Z],zt=wt.object,Pt=wt.geometry,ee=Q===null?wt.material:Q,ne=wt.group;zt.layers.test(et.layers)&&an(zt,q,et,Pt,ee,ne)}}function an(R,q,et,Q,Z,yt){R.onBeforeRender(D,q,et,Q,Z,yt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,q,et,Q,R,yt),Z.transparent===!0&&Z.side===Si&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,D.renderBufferDirect(et,q,Q,Z,R,yt),Z.side=Pa,Z.needsUpdate=!0,D.renderBufferDirect(et,q,Q,Z,R,yt),Z.side=Si):D.renderBufferDirect(et,q,Q,Z,R,yt),R.onAfterRender(D,q,et,Q,Z,yt)}function rn(R,q,et){q.isScene!==!0&&(q=Me);const Q=kt.get(R),Z=v.state.lights,yt=v.state.shadowsArray,wt=Z.state.version,zt=bt.getParameters(R,Z.state,yt,q,et),Pt=bt.getProgramCacheKey(zt);let ee=Q.programs;Q.environment=R.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(R.isMeshStandardMaterial?$:E).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let ne=ee.get(Pt);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===wt)return xr(R,zt),ne}else zt.uniforms=bt.getUniforms(R),R.onBeforeCompile(zt,D),ne=bt.acquireProgram(zt,Pt),ee.set(Pt,ne),Q.uniforms=zt.uniforms;const jt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),xr(R,zt),Q.needsLights=Io(R),Q.lightsStateVersion=wt,Q.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function Li(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=vc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function xr(R,q){const et=kt.get(R);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function Cc(R,q,et,Q,Z){q.isScene!==!0&&(q=Me),U.resetTextureUnits();const yt=q.fog,wt=Q.isMeshStandardMaterial?q.environment:null,zt=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ms,Pt=(Q.isMeshStandardMaterial?$:E).get(Q.envMap||wt),ee=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ne=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!et.morphAttributes.position,_e=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let Ie=Oa;Q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const be=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ie=be!==void 0?be.length:0,Qt=kt.get(Q),sn=v.state.lights;if(pt===!0&&(xt===!0||R!==b)){const We=R===b&&Q.id===w;Tt.setState(Q,R,We)}let xe=!1;Q.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==sn.state.version||Qt.outputColorSpace!==zt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Pt||Q.fog===!0&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Tt.numPlanes||Qt.numIntersection!==Tt.numIntersection)||Qt.vertexAlphas!==ee||Qt.vertexTangents!==ne||Qt.morphTargets!==jt||Qt.morphNormals!==_e||Qt.morphColors!==ve||Qt.toneMapping!==Ie||Qt.morphTargetsCount!==ie)&&(xe=!0):(xe=!0,Qt.__version=Q.version);let Pn=Qt.currentProgram;xe===!0&&(Pn=rn(Q,q,Z));let hi=!1,wn=!1,fn=!1;const Le=Pn.getUniforms(),Dn=Qt.uniforms;if(Vt.useProgram(Pn.program)&&(hi=!0,wn=!0,fn=!0),Q.id!==w&&(w=Q.id,wn=!0),hi||b!==R){Vt.buffers.depth.getReversed()?(Et.copy(R.projectionMatrix),CS(Et),wS(Et),Le.setValue(z,"projectionMatrix",Et)):Le.setValue(z,"projectionMatrix",R.projectionMatrix),Le.setValue(z,"viewMatrix",R.matrixWorldInverse);const gn=Le.map.cameraPosition;gn!==void 0&&gn.setValue(z,Zt.setFromMatrixPosition(R.matrixWorld)),oe.logarithmicDepthBuffer&&Le.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Le.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,wn=!0,fn=!0)}if(Z.isSkinnedMesh){Le.setOptional(z,Z,"bindMatrix"),Le.setOptional(z,Z,"bindMatrixInverse");const We=Z.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Le.setValue(z,"boneTexture",We.boneTexture,U))}Z.isBatchedMesh&&(Le.setOptional(z,Z,"batchingTexture"),Le.setValue(z,"batchingTexture",Z._matricesTexture,U),Le.setOptional(z,Z,"batchingIdTexture"),Le.setValue(z,"batchingIdTexture",Z._indirectTexture,U),Le.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Le.setValue(z,"batchingColorTexture",Z._colorsTexture,U));const yn=et.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Xt.update(Z,et,Pn),(wn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Le.setValue(z,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Pt,Dn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),wn&&(Le.setValue(z,"toneMappingExposure",D.toneMappingExposure),Qt.needsLights&&wc(Dn,fn),yt&&Q.fog===!0&&Rt.refreshFogUniforms(Dn,yt),Rt.refreshMaterialUniforms(Dn,Q,j,rt,v.state.transmissionRenderTarget[R.id]),vc.upload(z,Li(Qt),Dn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vc.upload(z,Li(Qt),Dn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Le.setValue(z,"center",Z.center),Le.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Le.setValue(z,"normalMatrix",Z.normalMatrix),Le.setValue(z,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const We=Q.uniformsGroups;for(let gn=0,Sr=We.length;gn<Sr;gn++){const zn=We[gn];X.update(zn,Pn),X.bind(zn,Pn)}}return Pn}function wc(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Io(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,et){kt.get(R.texture).__webglTexture=q,kt.get(R.depthTexture).__webglTexture=et;const Q=kt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=et===void 0,Q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const et=kt.get(R);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0};const Ba=z.createFramebuffer();this.setRenderTarget=function(R,q=0,et=0){W=R,I=q,F=et;let Q=!0,Z=null,yt=!1,wt=!1;if(R){const Pt=kt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Pt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Pt.__hasExternalTextures)U.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&kt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(wt=!0);const ne=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?Z=ne[q][et]:Z=ne[q],yt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Z=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[et]:Z=ne,B.copy(R.viewport),ut.copy(R.scissor),at=R.scissorTest}else B.copy(nt).multiplyScalar(j).floor(),ut.copy(Mt).multiplyScalar(j).floor(),at=At;if(et!==0&&(Z=Ba),Vt.bindFramebuffer(z.FRAMEBUFFER,Z)&&Q&&Vt.drawBuffers(R,Z),Vt.viewport(B),Vt.scissor(ut),Vt.setScissorTest(at),yt){const Pt=kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,et)}else if(wt){const Pt=kt.get(R.texture),ee=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,et,ee)}else if(R!==null&&et!==0){const Pt=kt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pt.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(R,q,et,Q,Z,yt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){Vt.bindFramebuffer(z.FRAMEBUFFER,zt);try{const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!oe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Q&&et>=0&&et<=R.height-Z&&z.readPixels(q,et,Q,Z,Kt.convert(ee),Kt.convert(ne),yt)}finally{const Pt=W!==null?kt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,q,et,Q,Z,yt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){const Pt=R.texture,ee=Pt.format,ne=Pt.type;if(!oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-Q&&et>=0&&et<=R.height-Z){Vt.bindFramebuffer(z.FRAMEBUFFER,zt);const jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(q,et,Q,Z,Kt.convert(ee),Kt.convert(ne),0);const _e=W!==null?kt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,_e);const ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await RS(z,ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(jt),z.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,et=0){R.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-et),Z=Math.floor(R.image.width*Q),yt=Math.floor(R.image.height*Q),wt=q!==null?q.x:0,zt=q!==null?q.y:0;U.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,wt,zt,Z,yt),Vt.unbindTexture()};const Cs=z.createFramebuffer(),Ni=z.createFramebuffer();this.copyTextureToTexture=function(R,q,et=null,Q=null,Z=0,yt=null){R.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],q=arguments[2],yt=arguments[3]||0,et=null),yt===null&&(Z!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Z,Z=0):yt=0);let wt,zt,Pt,ee,ne,jt,_e,ve,Ie;const be=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(et!==null)wt=et.max.x-et.min.x,zt=et.max.y-et.min.y,Pt=et.isBox3?et.max.z-et.min.z:1,ee=et.min.x,ne=et.min.y,jt=et.isBox3?et.min.z:0;else{const yn=Math.pow(2,-Z);wt=Math.floor(be.width*yn),zt=Math.floor(be.height*yn),R.isDataArrayTexture?Pt=be.depth:R.isData3DTexture?Pt=Math.floor(be.depth*yn):Pt=1,ee=0,ne=0,jt=0}Q!==null?(_e=Q.x,ve=Q.y,Ie=Q.z):(_e=0,ve=0,Ie=0);const ie=Kt.convert(q.format),Qt=Kt.convert(q.type);let sn;q.isData3DTexture?(U.setTexture3D(q,0),sn=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),sn=z.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),sn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const xe=z.getParameter(z.UNPACK_ROW_LENGTH),Pn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=z.getParameter(z.UNPACK_SKIP_PIXELS),wn=z.getParameter(z.UNPACK_SKIP_ROWS),fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jt);const Le=R.isDataArrayTexture||R.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const yn=kt.get(R),We=kt.get(q),gn=kt.get(yn.__renderTarget),Sr=kt.get(We.__renderTarget);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let zn=0;zn<Pt;zn++)Le&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,Z,jt+zn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,kt.get(q).__webglTexture,yt,Ie+zn)),z.blitFramebuffer(ee,ne,wt,zt,_e,ve,wt,zt,z.DEPTH_BUFFER_BIT,z.NEAREST);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||kt.has(R)){const yn=kt.get(R),We=kt.get(q);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,Cs),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni);for(let gn=0;gn<Pt;gn++)Le?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Z,jt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Z),Dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,yt,Ie+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,We.__webglTexture,yt),Z!==0?z.blitFramebuffer(ee,ne,wt,zt,_e,ve,wt,zt,z.COLOR_BUFFER_BIT,z.NEAREST):Dn?z.copyTexSubImage3D(sn,yt,_e,ve,Ie+gn,ee,ne,wt,zt):z.copyTexSubImage2D(sn,yt,_e,ve,ee,ne,wt,zt);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(sn,yt,_e,ve,Ie,wt,zt,Pt,ie,Qt,be.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(sn,yt,_e,ve,Ie,wt,zt,Pt,ie,be.data):z.texSubImage3D(sn,yt,_e,ve,Ie,wt,zt,Pt,ie,Qt,be):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,_e,ve,wt,zt,ie,Qt,be.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,_e,ve,be.width,be.height,ie,be.data):z.texSubImage2D(z.TEXTURE_2D,yt,_e,ve,wt,zt,ie,Qt,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,wn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fn),yt===0&&q.generateMipmaps&&z.generateMipmap(sn),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,et=null,Q=null,Z=0){return R.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],q=arguments[3],Z=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,et,Q,Z)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){I=0,F=0,W=null,Vt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const jb=({data:o})=>{if(!o||o.length<2)return It.jsx("div",{className:"w-32 h-8 ml-2 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400",children:"Collecting data..."});const l=Math.min(...o),u=Math.max(...o),h=u-l||1,d=o.map((p,m)=>{const _=2+m/(o.length-1)*1596,x=126-(p-l)/h*(128-2*2);return`${_},${x}`}).join(" ");return It.jsx("div",{className:"ml-2 relative",title:`Min: ${l.toFixed(2)}, Max: ${u.toFixed(2)}`,children:It.jsx("svg",{width:1600,height:128,className:"border border-gray-200 rounded bg-gray-100",children:It.jsx("polyline",{points:d,fill:"none",stroke:"#3b82f6",strokeWidth:"1.5"})})})},Zb=()=>{const[o,t]=Sn.useState(-1),[i,r]=Sn.useState(.25),[l,u]=Sn.useState(4),[h,d]=Sn.useState(200),[p,m]=Sn.useState(800),[_,x]=Sn.useState(50),[g,M]=Sn.useState(.005),[T,C]=Sn.useState(64),[y,v]=Sn.useState(!0),[P,N]=Sn.useState(0),[D,H]=Sn.useState([]),I=2048;Sn.useEffect(()=>{H(W=>{const w=[...W,P];return w.length>I?w.slice(w.length-I):w})},[P]);const F={redSpeed:o,greenSpeed:i,blueSpeed:l,redTrailLength:h,greenTrailLength:p,blueTrailLength:_,mainSphereRotation:g,checkerSize:T,onTriangleAreaUpdate:N};return It.jsxs("div",{className:"flex flex-col p-4 w-screen h-screen bg-gray-200 mx-auto",children:[It.jsx("div",{className:"flex justify-between items-center mb-4",children:It.jsxs("div",{className:"flex items-center gap-4",children:[It.jsx("div",{className:"text-sm font-medium flex items-center",children:It.jsx(jb,{data:D})}),It.jsxs("span",{children:["Triangle Area: ",It.jsx("span",{className:"text-blue-600",children:P.toFixed(3)})]})]})}),It.jsx("div",{className:"h-screen relative",children:It.jsx(Kb,{params:F})}),y&&It.jsx("div",{className:"mb-4 p-2 bg-gray-100 rounded-lg",children:It.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[It.jsxs("div",{className:"flex items-center gap-1 p-1 bg-red-50 border border-red-200 rounded",children:[It.jsx("span",{className:"text-xs font-medium text-red-700 mr-1",children:"Red:"}),It.jsxs("div",{className:"flex items-center",children:[It.jsx("span",{className:"text-xs",children:"Speed"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>t(o-.1),children:"-"}),It.jsx("input",{type:"number",min:"-10",max:"10",step:"0.1",value:o,onChange:W=>t(parseFloat(W.target.value)),className:"w-10 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>t(o+.1),children:"+"})]})]}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("span",{className:"text-xs",children:"Trail"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>d(Math.max(10,h-10)),children:"-"}),It.jsx("input",{type:"number",min:"10",max:"500",step:"10",value:h,onChange:W=>d(parseInt(W.target.value)),className:"w-12 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>d(Math.min(500,h+10)),children:"+"})]})]})]}),It.jsxs("div",{className:"flex items-center gap-1 p-1 bg-green-50 border border-green-200 rounded",children:[It.jsx("span",{className:"text-xs font-medium text-green-700 mr-1",children:"Green:"}),It.jsxs("div",{className:"flex items-center",children:[It.jsx("span",{className:"text-xs",children:"Speed"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>r(i-.1),children:"-"}),It.jsx("input",{type:"number",min:"-10",max:"10",step:"0.1",value:i,onChange:W=>r(parseFloat(W.target.value)),className:"w-10 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>r(i+.1),children:"+"})]})]}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("span",{className:"text-xs",children:"Trail"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>m(Math.max(10,p-10)),children:"-"}),It.jsx("input",{type:"number",min:"10",max:"500",step:"10",value:p,onChange:W=>m(parseInt(W.target.value)),className:"w-12 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>m(Math.min(500,p+10)),children:"+"})]})]})]}),It.jsxs("div",{className:"flex items-center gap-1 p-1 bg-blue-50 border border-blue-200 rounded",children:[It.jsx("span",{className:"text-xs font-medium text-blue-700 mr-1",children:"Blue:"}),It.jsxs("div",{className:"flex items-center",children:[It.jsx("span",{className:"text-xs",children:"Speed"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>u(l-.1),children:"-"}),It.jsx("input",{type:"number",min:"-10",max:"10",step:"0.1",value:l,onChange:W=>u(parseFloat(W.target.value)),className:"w-10 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>u(l+.1),children:"+"})]})]}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("span",{className:"text-xs",children:"Trail"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>x(Math.max(10,_-10)),children:"-"}),It.jsx("input",{type:"number",min:"10",max:"500",step:"10",value:_,onChange:W=>x(parseInt(W.target.value)),className:"w-12 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>x(Math.min(500,_+10)),children:"+"})]})]})]}),It.jsxs("div",{className:"flex items-center gap-1 p-1 bg-gray-50 border border-gray-200 rounded",children:[It.jsx("span",{className:"text-xs font-medium mr-1",children:"Main:"}),It.jsxs("div",{className:"flex items-center",children:[It.jsx("span",{className:"text-xs",children:"Rot"}),It.jsxs("div",{className:"flex items-center ml-1",children:[It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-l flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>M(g-.001),children:"-"}),It.jsx("input",{type:"number",min:"-0.05",max:"0.05",step:"0.001",value:g,onChange:W=>M(parseFloat(W.target.value)),className:"w-14 h-5 text-xs text-center border-y outline-none"}),It.jsx("button",{className:"w-5 h-5 bg-gray-200 rounded-r flex items-center justify-center hover:bg-gray-300 text-xs",onClick:()=>M(g+.001),children:"+"})]})]})]})]})})]})},Kb=({params:o})=>{const t=Sn.useRef(null),{redSpeed:i=1.2,greenSpeed:r=.3,blueSpeed:l=4.8,redTrailLength:u=100,greenTrailLength:h=100,blueTrailLength:d=100,mainSphereRotation:p=.005,onTriangleAreaUpdate:m=()=>{}}=o||{},_=Sn.useRef({isDragging:!1,isRightDragging:!1,previousMousePosition:{x:0,y:0},cameraDistance:15,cameraTheta:Math.PI/4,cameraPhi:Math.PI/4,panX:0,panY:0,camera:null,renderer:null,scene:null,redTrailPositions:[],greenTrailPositions:[],blueTrailPositions:[],redTrail:null,greenTrail:null,blueTrail:null,maxRedTrailLength:u,maxGreenTrailLength:h,maxBlueTrailLength:d,mainSphere:null,redOrbitSpeed:i,greenOrbitSpeed:r,blueOrbitSpeed:l,mainSphereRotationSpeed:p});return Sn.useEffect(()=>{const x=t.current,g=_.current,M=new p_;M.background=new ue(12369084),g.scene=M;const T=new ui(75,x.clientWidth/x.clientHeight,.1,1e3);T.position.z=g.cameraDistance,g.camera=T;const C=new Yb({antialias:!0});C.setSize(x.clientWidth,x.clientHeight),x.appendChild(C.domElement),g.renderer=C;const y=new id(C);y.compileEquirectangularShader();const v=y.fromScene(new p_);M.environment=v.texture;const P=512,N=new Uint8Array(P*P*4),D=32;for(let st=0;st<P;st++)for(let ot=0;ot<P;ot++){const bt=(st*P+ot)*4;Math.floor(ot/D)%2!==Math.floor(st/D)%2?(N[bt]=255,N[bt+1]=255,N[bt+2]=255,N[bt+3]=128):(N[bt]=0,N[bt+1]=0,N[bt+2]=0,N[bt+3]=255)}const H=new tM(N,P,P,fi);H.needsUpdate=!0;const I=new fs(2,64,64),F=new _0({map:H,roughness:.2,metalness:.3,transparent:!0,side:Si}),W=new Hn(I,F);M.add(W),g.mainSphere=W;const w=new uh(100,100,255,255);w.rotation.x=Math.PI/2,w.material.opacity=.3,w.material.transparent=!0,M.add(w);const b=new uh(100,100,16711680,16711680);b.material.opacity=.3,b.material.transparent=!0,M.add(b);const B=new uh(100,100,65280,65280);B.rotation.z=Math.PI/2,B.material.opacity=.3,B.material.transparent=!0,M.add(B);const ut=new cM(4210752,1.5);M.add(ut);const at=new lM(16777215,1.5);at.position.set(1,1,1),M.add(at);const mt=new fs(.25,32,32),dt=new lh({color:16733440,transparent:!0,opacity:.95,roughness:.1,transmission:.8,clearcoat:1,clearcoatRoughness:.1,metalness:.2,ior:2.5,thickness:1,envMapIntensity:1,specularIntensity:1.5,specularColor:new ue(16777215)}),G=new Hn(mt,dt);M.add(G);const rt=new fs(.25,32,32),j=new lh({color:5635840,transparent:!0,opacity:.95,roughness:.1,transmission:.8,clearcoat:1,clearcoatRoughness:.1,metalness:.2,ior:2.5,thickness:1,envMapIntensity:1,specularIntensity:1.5,specularColor:new ue(16777215)}),vt=new Hn(rt,j);M.add(vt);const L=new fs(.25,32,32),nt=new lh({color:22015,transparent:!0,opacity:.95,roughness:.1,transmission:.8,clearcoat:1,clearcoatRoughness:.1,metalness:.2,ior:2.5,thickness:1,envMapIntensity:1,specularIntensity:1.5,specularColor:new ue(16777215)}),Mt=new Hn(L,nt);M.add(Mt);const At=new us({color:16733440,opacity:.7,transparent:!0,linewidth:2}),Y=new us({color:5635840,opacity:.7,transparent:!0,linewidth:2}),pt=new us({color:22015,opacity:.7,transparent:!0,linewidth:2}),xt=new us({color:16777215,opacity:.35,transparent:!0,linewidth:1}),Et=new pd({color:16777215,opacity:.15,transparent:!0,side:Si}),Ct=new en,Zt=new en,Ot=new en,Me=new en,we=new en,$t=new wo(Ct,At),z=new wo(Zt,Y),Ge=new wo(Ot,pt),ae=new wo(Me,xt),oe=new Hn(we,Et);M.add($t),M.add(z),M.add(Ge),M.add(ae),M.add(oe),g.redTrail=$t,g.greenTrail=z,g.blueTrail=Ge,g.connectionLine=ae,g.triangleFace=oe;const Vt=()=>{T.position.x=g.panX+g.cameraDistance*Math.sin(g.cameraPhi)*Math.cos(g.cameraTheta),T.position.y=g.panY+g.cameraDistance*Math.cos(g.cameraPhi),T.position.z=g.cameraDistance*Math.sin(g.cameraPhi)*Math.sin(g.cameraTheta),T.lookAt(new tt(g.panX,g.panY,0))},Ee=st=>{st.button===0?g.isDragging=!0:st.button===2&&(g.isRightDragging=!0,st.preventDefault()),g.previousMousePosition={x:st.clientX,y:st.clientY}},kt=st=>{if(g.isDragging){const ot={x:st.clientX-g.previousMousePosition.x,y:st.clientY-g.previousMousePosition.y};g.cameraTheta+=ot.x*.01,g.cameraPhi=Math.max(.1,Math.min(Math.PI-.1,g.cameraPhi-ot.y*.01)),Vt()}else if(g.isRightDragging){const ot={x:st.clientX-g.previousMousePosition.x,y:st.clientY-g.previousMousePosition.y},bt=new tt(1,0,0).applyQuaternion(T.quaternion),Rt=new tt(0,1,0).applyQuaternion(T.quaternion),Bt=.01;g.panX-=ot.x*Bt*bt.x,g.panY+=ot.y*Bt*Rt.y,Vt()}g.previousMousePosition={x:st.clientX,y:st.clientY}},U=()=>{g.isDragging=!1,g.isRightDragging=!1},E=st=>{g.cameraDistance+=st.deltaY*.01,g.cameraDistance=Math.max(1,Math.min(100,g.cameraDistance)),Vt(),st.preventDefault()};C.domElement.addEventListener("mousedown",Ee),C.domElement.addEventListener("mousemove",kt),C.domElement.addEventListener("mouseup",U),C.domElement.addEventListener("wheel",E),C.domElement.addEventListener("contextmenu",st=>st.preventDefault()),Vt();const $=()=>{if(!t.current)return;requestAnimationFrame($),g.mainSphere&&(g.mainSphere.rotation.y+=g.mainSphereRotationSpeed);const st=Date.now()*.001;G.position.y=6*Math.cos(st*g.redOrbitSpeed),G.position.z=6*Math.sin(st*g.redOrbitSpeed),G.position.x=0,vt.position.x=12*Math.cos(st*g.greenOrbitSpeed),vt.position.z=12*Math.sin(st*g.greenOrbitSpeed),vt.position.y=0,Mt.position.x=3*Math.cos(st*g.blueOrbitSpeed),Mt.position.y=3*Math.sin(st*g.blueOrbitSpeed),Mt.position.z=0,g.redTrailPositions.push(new tt(G.position.x,G.position.y,G.position.z)),g.greenTrailPositions.push(new tt(vt.position.x,vt.position.y,vt.position.z)),g.blueTrailPositions.push(new tt(Mt.position.x,Mt.position.y,Mt.position.z)),g.redTrailPositions.length>g.maxRedTrailLength&&g.redTrailPositions.shift(),g.greenTrailPositions.length>g.maxGreenTrailLength&&g.greenTrailPositions.shift(),g.blueTrailPositions.length>g.maxBlueTrailLength&&g.blueTrailPositions.shift(),g.redTrailPositions.length>1&&(g.redTrail.geometry.dispose(),g.redTrail.geometry=new en().setFromPoints(g.redTrailPositions)),g.greenTrailPositions.length>1&&(g.greenTrail.geometry.dispose(),g.greenTrail.geometry=new en().setFromPoints(g.greenTrailPositions)),g.blueTrailPositions.length>1&&(g.blueTrail.geometry.dispose(),g.blueTrail.geometry=new en().setFromPoints(g.blueTrailPositions));const ot=[G.position.clone(),vt.position.clone(),Mt.position.clone(),G.position.clone()];if(g.connectionLine&&(g.connectionLine.geometry.dispose(),g.connectionLine.geometry=new en().setFromPoints(ot)),g.triangleFace){g.triangleFace.geometry.dispose();const bt=[G.position.clone(),vt.position.clone(),Mt.position.clone()],Rt=new en,Bt=new Float32Array([bt[0].x,bt[0].y,bt[0].z,bt[1].x,bt[1].y,bt[1].z,bt[2].x,bt[2].y,bt[2].z]);Rt.setAttribute("position",new yi(Bt,3)),Rt.computeVertexNormals(),g.triangleFace.geometry=Rt;const he=bt[0].distanceTo(bt[1]),Tt=bt[1].distanceTo(bt[2]),Ft=bt[2].distanceTo(bt[0]),qt=(he+Tt+Ft)/2,Xt=Math.sqrt(qt*(qt-he)*(qt-Tt)*(qt-Ft));m(Xt)}C.render(M,T)};$();const ht=()=>{if(!t.current)return;const st=x.clientWidth,ot=x.clientHeight;T.aspect=st/ot,T.updateProjectionMatrix(),C.setSize(st,ot)};return window.addEventListener("resize",ht),()=>{window.removeEventListener("resize",ht),C&&C.domElement&&(C.domElement.removeEventListener("mousedown",Ee),C.domElement.removeEventListener("mousemove",kt),C.domElement.removeEventListener("mouseup",U),C.domElement.removeEventListener("wheel",E),C.domElement.removeEventListener("contextmenu",st=>st.preventDefault())),x&&C&&x.removeChild(C.domElement),I&&I.dispose(),F&&F.dispose(),H&&H.dispose(),w&&w.material&&w.material.dispose(),b&&b.material&&b.material.dispose(),B&&B.material&&B.material.dispose(),mt&&mt.dispose(),dt&&dt.dispose(),rt&&rt.dispose(),j&&j.dispose(),L&&L.dispose(),nt&&nt.dispose(),At&&At.dispose(),Y&&Y.dispose(),pt&&pt.dispose(),xt&&xt.dispose(),Et&&Et.dispose(),$t&&$t.geometry&&$t.geometry.dispose(),z&&z.geometry&&z.geometry.dispose(),Ge&&Ge.geometry&&Ge.geometry.dispose(),g.connectionLine&&g.connectionLine.geometry&&g.connectionLine.geometry.dispose(),g.triangleFace&&g.triangleFace.geometry&&g.triangleFace.geometry.dispose()}},[]),Sn.useEffect(()=>{_.current&&(_.current.redOrbitSpeed=i,_.current.greenOrbitSpeed=r,_.current.blueOrbitSpeed=l,_.current.maxRedTrailLength=u,_.current.maxGreenTrailLength=h,_.current.maxBlueTrailLength=d,_.current.mainSphereRotationSpeed=p,_.current.redTrailPositions.length>u&&(_.current.redTrailPositions=_.current.redTrailPositions.slice(-u)),_.current.greenTrailPositions.length>h&&(_.current.greenTrailPositions=_.current.greenTrailPositions.slice(-h)),_.current.blueTrailPositions.length>d&&(_.current.blueTrailPositions=_.current.blueTrailPositions.slice(-d)))},[i,r,l,u,h,d,p]),It.jsx("div",{ref:t,className:"h-3/4 bg-gray-900 rounded-lg"})};Bx.createRoot(document.getElementById("root")).render(It.jsx(Sn.StrictMode,{children:It.jsx(Zb,{})}));
