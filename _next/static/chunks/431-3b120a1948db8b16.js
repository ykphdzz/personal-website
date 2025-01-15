"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{2633:(e,t)=>{function n(e,t){let n=new URL(e);return n.search="",{href:n.href,nextUrl:t}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createCacheKey",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3099:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{EntryStatus:function(){return c},readExactRouteCacheEntry:function(){return y},readRouteCacheEntry:function(){return _},readSegmentCacheEntry:function(){return b},requestRouteCacheEntryFromCache:function(){return v},requestSegmentEntryFromCache:function(){return P},waitForSegmentCacheEntry:function(){return g}});let l=n(2836),u=n(4091),r=n(8592),a=n(8127),o=n(1055),f=n(7864),i=n(1096);var c=function(e){return e[e.Pending=0]="Pending",e[e.Rejected=1]="Rejected",e[e.Fulfilled=2]="Fulfilled",e}({});let d=(0,f.createTupleMap)(),s=(0,i.createLRU)(0xa00000,function(e){let t=e.keypath;null!==t&&(e.keypath=null,m(e),d.delete(t))}),p=new Map,h=(0,i.createLRU)(0x3200000,function(e){let t=e.key;null!==t&&(e.key=null,j(e),p.delete(t))});function y(e,t,n){let l=null===n?[t]:[t,n],u=d.get(l);if(null!==u){if(u.staleAt>e)return s.put(u),u;m(u),d.delete(l),s.delete(u)}return null}function _(e,t){let n=y(e,t.href,null);return null===n||n.couldBeIntercepted?y(e,t.href,t.nextUrl):n}function b(e,t){let n=p.get(t);if(void 0!==n){if(n.staleAt>e)return h.put(n),n;j(n),p.delete(t),h.delete(n)}return null}function g(e){let t=e.promise;return null===t&&(t=e.promise=function(){let e,t;let n=new Promise((n,l)=>{e=n,t=l});return{resolve:e,reject:t,promise:n}}()),t.promise}function v(e,t){let n=t.key,l=y(e,n.href,null);if(null!==l&&!l.couldBeIntercepted)return l;let u=y(e,n.href,n.nextUrl);if(null!==u)return u;let a={canonicalUrl:null,status:0,blockedTasks:null,tree:null,head:null,isHeadPartial:!0,staleAt:e+6e4,couldBeIntercepted:!0,keypath:null,next:null,prev:null,size:0};(0,r.spawnPrefetchSubtask)(E(a,t));let o=null===n.nextUrl?[n.href]:[n.href,n.nextUrl];return d.set(o,a),a.keypath=o,s.put(a),a}function P(e,t,n,l,u){let a=b(e,l);if(null!==a)return a;let o={status:0,rsc:null,loading:null,staleAt:n.staleAt,isPartial:!0,promise:null,key:null,next:null,prev:null,size:0};return(0,r.spawnPrefetchSubtask)(x(n,o,t.key,l,u)),p.set(l,o),o.key=l,h.put(o),o}function j(e){0===e.status&&null!==e.promise&&(e.promise.resolve(null),e.promise=null)}function m(e){let t=e.blockedTasks;if(null!==t){for(let e of t)(0,r.pingPrefetchTask)(e);e.blockedTasks=null}}function O(e,t){e.status=1,e.staleAt=t,m(e)}function R(e,t){e.status=1,e.staleAt=t,null!==e.promise&&(e.promise.resolve(null),e.promise=null)}async function E(e,t){let n=t.key,r=n.href,f=n.nextUrl;try{var i,c,p,h;let t=await k(r,"/_tree",f);if(!t||!t.ok||204===t.status||!t.body){O(e,Date.now()+1e4);return}let n=M(t.body,s,e),y=await (0,u.createFromNextReadableStream)(n);if(y.buildId!==(0,a.getAppBuildId)()){O(e,Date.now()+1e4);return}let _=t.redirected?(0,o.createHrefFromUrl)((0,u.urlToUrlWithoutFlightMarker)(t.url)):r,b=t.headers.get("vary"),g=null!==b&&b.includes(l.NEXT_URL);if(i=y.tree,c=y.head,p=y.isHeadPartial,h=Date.now()+y.staleTime,e.status=2,e.tree=i,e.head=c,e.isHeadPartial=p,e.staleAt=h,e.couldBeIntercepted=g,e.canonicalUrl=_,m(e),!g&&null!==f){let t=[r,f];if(d.get(t)===e){d.delete(t);let n=[r];d.set(n,e),e.keypath=n}}}catch(t){O(e,Date.now()+1e4)}}async function x(e,t,n,l,r){let o=n.href;try{var f,i,c,d;let s=await k(o,""===r?l:l+"."+r,n.nextUrl);if(!s||!s.ok||204===s.status||!s.body){R(t,Date.now()+1e4);return}let p=M(s.body,h,t),y=await (0,u.createFromNextReadableStream)(p);if(y.buildId!==(0,a.getAppBuildId)()){R(t,Date.now()+1e4);return}f=y.rsc,i=y.loading,c=e.staleAt,d=y.isPartial,t.status=2,t.rsc=f,t.loading=i,t.staleAt=c,t.isPartial=d,null!==t.promise&&(t.promise.resolve(t),t.promise=null)}catch(e){R(t,Date.now()+1e4)}}async function k(e,t,n){let a={[l.RSC_HEADER]:"1",[l.NEXT_ROUTER_PREFETCH_HEADER]:"1",[l.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]:t};null!==n&&(a[l.NEXT_URL]=n);let o=(0,u.createFetch)(new URL(e),a,"low");(0,r.trackPrefetchRequestBandwidth)(o);let f=await o,i=f.headers.get("content-type"),c=i&&i.startsWith(l.RSC_CONTENT_TYPE_HEADER);return f.ok&&c?f:null}function M(e,t,n){let l=0,u=e.getReader();return new ReadableStream({async pull(e){for(;;){let{done:r,value:a}=await u.read();if(!r){e.enqueue(a),l+=a.byteLength,t.updateSize(n,l);continue}return}}})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1096:(e,t)=>{function n(e,t){let n=null,u=!1,r=0;function a(e){let t=e.next,l=e.prev;null!==t&&null!==l&&(r-=e.size,e.next=null,e.prev=null,n===e?n=t===n?null:t:(l.next=t,t.prev=l))}function o(){u||r<=e||(u=!0,l(f))}function f(){u=!1;let l=.9*e;for(;r>l&&null!==n;){let e=n.prev;a(e),t(e)}}return{put:function(e){if(n===e)return;let t=e.prev,l=e.next;if(null===l||null===t?(r+=e.size,o()):(t.next=l,l.prev=t),null===n)e.prev=e,e.next=e;else{let t=n.prev;e.prev=t,t.next=e,e.next=n,n.prev=e}n=e},delete:a,updateSize:function(e,t){if(null===e.next)return;let n=e.size;e.size=t,r=r-n+t,o()}}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createLRU",{enumerable:!0,get:function(){return n}});let l="function"==typeof requestIdleCallback?requestIdleCallback:e=>setTimeout(e,0);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5245:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{NavigationResultTag:function(){return f},navigate:function(){return c}});let l=n(4091),u=n(3223),r=n(1055),a=n(3099),o=n(2633);var f=function(e){return e[e.MPA=0]="MPA",e[e.Success=1]="Success",e[e.NoOp=2]="NoOp",e[e.Async=3]="Async",e}({});let i={tag:2,data:null};function c(e,t,n,r){let f=Date.now(),c=(0,o.createCacheKey)(e.href,r),p=(0,a.readRouteCacheEntry)(f,c);if(null!==p&&p.status===a.EntryStatus.Fulfilled){let o=function e(t,n){let l={},u={},r=n.slots;if(null!==r)for(let n in r){let a=e(t,r[n]);l[n]=a.flightRouterState,u[n]=a.seedData}let o=null,f=null,i=!0,c=(0,a.readSegmentCacheEntry)(t,n.path);if(null!==c)switch(c.status){case a.EntryStatus.Fulfilled:o=c.rsc,f=c.loading,i=c.isPartial;break;case a.EntryStatus.Pending:{let e=(0,a.waitForSegmentCacheEntry)(c);o=e.then(e=>null!==e?e.rsc:null),f=e.then(e=>null!==e?e.loading:null),i=!0}case a.EntryStatus.Rejected:}let d=n.extra,s=d[0];return{flightRouterState:[s,l,null,null,d[1]],seedData:[s,o,u,f,i]}}(f,p.tree),c=o.flightRouterState,s=o.seedData;return function(e,t,n,r,a,o,f,c,s){let p=(0,u.updateCacheNodeOnNavigation)(n,r,a,o,f,c);if(null!==p){if(p.needsDynamicRequest){let n=(0,l.fetchServerResponse)(e,{flightRouterState:r,nextUrl:t});(0,u.listenForDynamicRequest)(p,n)}return d(p,n,s)}return i}(e,r,t,n,c,s,p.head,p.isHeadPartial,p.canonicalUrl)}return{tag:3,data:s(e,r,t,n)}}function d(e,t,n){let l=e.node;return{tag:1,data:{flightRouterState:e.route,cacheNode:null!==l?l:t,canonicalUrl:n}}}async function s(e,t,n,a){let o=(0,l.fetchServerResponse)(e,{flightRouterState:a,nextUrl:t}),{flightData:f,canonicalUrl:c}=await o;if("string"==typeof f)return{tag:0,data:f};let s=function(e,t){let n=e;for(let{segmentPath:l,tree:u}of t){let t=n!==e;n=function e(t,n,l,u,r){if(r===l.length)return n;let a=l[r],o=t[1],f={};for(let t in o)if(t===a){let a=o[t];f[t]=e(a,n,l,u,r+2)}else f[t]=o[t];if(u)return t[1]=f,t;let i=[t[0],f];return 2 in t&&(i[2]=t[2]),3 in t&&(i[3]=t[3]),4 in t&&(i[4]=t[4]),i}(n,u,l,t,0)}return n}(a,f),p=(0,r.createHrefFromUrl)(c||e),h=(0,u.updateCacheNodeOnNavigation)(n,a,s,null,null,!0);return null!==h?(h.needsDynamicRequest&&(0,u.listenForDynamicRequest)(h,o),d(h,n,p)):i}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9824:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"prefetch",{enumerable:!0,get:function(){return a}});let l=n(3423),u=n(2633),r=n(8592);function a(e,t){let n=(0,l.createPrefetchURL)(e);if(null===n)return;let a=(0,u.createCacheKey)(n.href,t);(0,r.schedulePrefetchTask)(a)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8592:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{pingPrefetchTask:function(){return y},schedulePrefetchTask:function(){return i},spawnPrefetchSubtask:function(){return p},trackPrefetchRequestBandwidth:function(){return d}});let l=n(3099),u="function"==typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e})),r=[],a=0,o=0,f=!1;function i(e){g(r,{key:e,sortId:o++,isBlocked:!1,_heapIndex:-1}),c()}function c(){!f&&a<3&&(f=!0,u(_))}function d(e){a++,e.then(h,h)}let s=()=>{};function p(e){e.then(s,s)}function h(){a--,c()}function y(e){e.isBlocked&&(e.isBlocked=!1,g(r,e),c())}function _(){f=!1;let e=Date.now(),t=v(r);for(;null!==t&&a<3;){let n=(0,l.requestRouteCacheEntryFromCache)(e,t);switch(function(e,t,n){switch(n.status){case l.EntryStatus.Pending:{let e=n.blockedTasks;return null===e?n.blockedTasks=new Set([t]):e.add(t),1}case l.EntryStatus.Rejected:return 2;case l.EntryStatus.Fulfilled:{if(!(a<3))return 0;let u=n.tree;return(0,l.requestSegmentEntryFromCache)(e,t,n,u.path,""),function e(t,n,u,r){if(null!==r.slots)for(let o in r.slots){let f=r.slots[o];if(!(a<3))return 0;{let e=f.path,r=f.token;(0,l.requestSegmentEntryFromCache)(t,n,u,e,r)}if(0===e(t,n,u,f))return 0}return 2}(e,t,n,u)}default:return 2}}(e,t,n)){case 0:default:return;case 1:t.isBlocked=!0,P(r),t=v(r);continue;case 2:P(r),t=v(r);continue}}}function b(e,t){return t.sortId-e.sortId}function g(e,t){let n=e.length;e.push(t),t._heapIndex=n,function(e,t,n){let l=n;for(;l>0;){let n=l-1>>>1,u=e[n];if(!(b(u,t)>0))return;e[n]=t,t._heapIndex=n,e[l]=u,u._heapIndex=l,l=n}}(e,t,n)}function v(e){return 0===e.length?null:e[0]}function P(e){if(0===e.length)return null;let t=e[0];t._heapIndex=-1;let n=e.pop();return n!==t&&(e[0]=n,n._heapIndex=0,function(e,t,n){let l=0,u=e.length,r=u>>>1;for(;l<r;){let n=(l+1)*2-1,r=e[n],a=n+1,o=e[a];if(0>b(r,t))a<u&&0>b(o,r)?(e[l]=o,o._heapIndex=l,e[a]=t,t._heapIndex=a,l=a):(e[l]=r,r._heapIndex=l,e[n]=t,t._heapIndex=n,l=n);else{if(!(a<u&&0>b(o,t)))return;e[l]=o,o._heapIndex=l,e[a]=t,t._heapIndex=a,l=a}}}(e,n,0)),t}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7864:(e,t)=>{function n(){let e={parent:null,key:null,hasValue:!1,value:null,map:null},t=null,n=null;function l(l){if(n===l)return t;let u=e;for(let e=0;e<l.length;e++){let t=l[e],n=u.map;if(null!==n){let e=n.get(t);if(void 0!==e){u=e;continue}}return null}return n=l,t=u,u}return{set:function(l,u){let r=function(l){if(n===l)return t;let u=e;for(let e=0;e<l.length;e++){let t=l[e],n=u.map;if(null!==n){let e=n.get(t);if(void 0!==e){u=e;continue}}else n=new Map,u.map=n;let r={parent:u,key:t,value:null,hasValue:!1,map:null};n.set(t,r),u=r}return n=l,t=u,u}(l);r.hasValue=!0,r.value=u},get:function(e){let t=l(e);return null!==t&&t.hasValue?t.value:null},delete:function(e){let u=l(e);if(null!==u&&u.hasValue&&(u.hasValue=!1,u.value=null,null===u.map)){t=null,n=null;let e=u.parent,l=u.key;for(;null!==e;){let t=e.map;if(null!==t&&(t.delete(l),0===t.size&&(e.map=null,null===e.value))){l=e.key,e=e.parent;continue}break}}}}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createTupleMap",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6830:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{StaticGenBailoutError:function(){return l},isStaticGenBailoutError:function(){return u}});let n="NEXT_STATIC_GEN_BAILOUT";class l extends Error{constructor(...e){super(...e),this.code=n}}function u(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},882:(e,t,n)=>{function l(){throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return l}}),n(2469).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9321:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unresolvedThenable",{enumerable:!0,get:function(){return n}});let n={then:()=>{}};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,a.isNextRouterError)(t)||(0,r.isBailoutToCSRError)(t)||(0,l.isDynamicUsageError)(t)||(0,u.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let l=n(7515),u=n(4819),r=n(3719),a=n(179);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6494:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{useReducer:function(){return a},useUnwrapState:function(){return r}});let l=n(9955)._(n(2115)),u=n(2707);function r(e){return(0,u.isThenable)(e)?(0,l.use)(e):e}function a(e){let[t,n]=l.default.useState(e.state);return[t,(0,l.useCallback)(t=>{e.dispatch(t,n)},[e])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1648:(e,t)=>{function n(e){var t;let[n,l,u,r]=e.slice(-4),a=e.slice(0,-4);return{pathToSegment:a.slice(0,-1),segmentPath:a,segment:null!=(t=a[a.length-1])?t:"",tree:n,seedData:l,head:u,isHeadPartial:r,isRootRender:4===e.length}}function l(e){return e.slice(2)}function u(e){return"string"==typeof e?e:e.map(n)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getFlightDataPartsFromPath:function(){return n},getNextFlightSegmentPath:function(){return l},normalizeFlightData:function(){return u}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6003:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return u}});let l=n(8912);function u(e){return(0,l.pathHasPrefix)(e,"/personal-website")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);