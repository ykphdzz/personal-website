"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{5971:(t,e,n)=>{n.d(e,{X:()=>o});class o{constructor(t){this.isMounted=!1,this.node=t}update(){}}},537:(t,e,n)=>{n.d(e,{W:()=>l});var o=n(5385),r=n(6860),i=n(5971);class a extends i.X{constructor(t){super(t),t.animationState||(t.animationState=(0,r.L)(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();(0,o.N)(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),null===(t=this.unmountControls)||void 0===t||t.call(this)}}let s=0;class u extends i.X{constructor(){super(...arguments),this.id=s++}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;let o=this.node.animationState.setActive("exit",!t);e&&!t&&o.then(()=>e(this.id))}mount(){let{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}let l={animation:{Feature:a},exit:{Feature:u}}},6247:(t,e,n)=>{n.d(e,{B:()=>r});let o={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},r={};for(let t in o)r[t]={isEnabled:e=>o[t].some(t=>!!e[t])}},9963:(t,e,n)=>{n.d(e,{$:()=>s});var o=n(9872),r=n(2563),i=n(5764),a=n(1188);let s={pan:{Feature:r.f},drag:{Feature:o.w,ProjectionNode:a.P,MeasureLayout:i.$}}},8258:(t,e,n)=>{n.d(e,{n:()=>h});var o=n(8601),r=n(1071),i=n(9370),a=n(5971);let s=new WeakMap,u=new WeakMap,l=t=>{let e=s.get(t.target);e&&e(t)},d=t=>{t.forEach(l)},p={some:0,all:1};class c extends a.X{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:o="some",once:r}=t,i={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof o?o:p[o]};return function(t,e,n){let o=function({root:t,...e}){let n=t||document;u.has(n)||u.set(n,{});let o=u.get(n),r=JSON.stringify(e);return o[r]||(o[r]=new IntersectionObserver(d,{root:t,...e})),o[r]}(e);return s.set(t,n),o.observe(t),()=>{s.delete(t),o.unobserve(t)}}(this.node.current,i,t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,r&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:n,onViewportLeave:o}=this.node.getProps(),i=e?n:o;i&&i(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}(t,e))&&this.startObserver()}unmount(){}}let h={inView:{Feature:c},tap:{Feature:i.H},focus:{Feature:r.c},hover:{Feature:o.e}}},2683:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(1188),r=n(5764);let i={layout:{ProjectionNode:o.P,MeasureLayout:r.$}}},5764:(t,e,n)=>{n.d(e,{$:()=>v});var o=n(5155),r=n(2115),i=n(5087),a=n(4710),s=n(5750),u=n(1152),l=n(5097),d=n(6642),p=n(3154),c=n(5395),h=n(3307);class m extends r.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:o}=this.props,{projection:r}=t;(0,p.$)(f),r&&(e.group&&e.group.add(r),n&&n.register&&o&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),u.w.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:n,drag:o,isPresent:r}=this.props,i=n.projection;return i&&(i.isPresent=r,o||t.layoutDependency!==e||void 0===e?i.willUpdate():this.safeToRemove(),t.isPresent===r||(r?i.promote():i.relegate()||h.Gt.postRender(()=>{let t=i.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),c.k.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function v(t){let[e,n]=(0,i.xQ)(),u=(0,r.useContext)(a.L);return(0,o.jsx)(m,{...t,layoutGroup:u,switchLayoutGroup:(0,r.useContext)(s.N),isPresent:e,safeToRemove:n})}let f={borderRadius:{...l.P,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:l.P,borderTopRightRadius:l.P,borderBottomLeftRadius:l.P,borderBottomRightRadius:l.P,boxShadow:d._}},5396:(t,e,n)=>{n.d(e,{Z:()=>y});var o=n(5155),r=n(2115),i=n(4710),a=n(5815),s=n(7249),u=n(4358),l=n(3189),d=n(5687),p=n(6247);let c=Symbol.for("motionComponentSymbol");var h=n(8674),m=n(9656),v=n(5403),f=n(7539),w=n(5395),g=n(5750);function y(t){var e,n;let{preloadedFeatures:y,createVisualElement:b,useRender:C,useVisualState:x,Component:S}=t;function E(t,e){var n;let c;let y={...(0,r.useContext)(s.Q),...t,layoutId:function(t){let{layoutId:e}=t,n=(0,r.useContext)(i.L).id;return n&&void 0!==e?n+"-"+e:e}(t)},{isStatic:E}=y,P=(0,l.z)(t),R=x(t,E);if(!E&&d.B){(0,r.useContext)(a.Y).strict;let t=function(t){let{drag:e,layout:n}=p.B;if(!e&&!n)return{};let o={...e,...n};return{MeasureLayout:(null==e?void 0:e.isEnabled(t))||(null==n?void 0:n.isEnabled(t))?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}(y);c=t.MeasureLayout,P.visualElement=function(t,e,n,o,i){var l,d;let{visualElement:p}=(0,r.useContext)(u.A),c=(0,r.useContext)(a.Y),y=(0,r.useContext)(m.t),b=(0,r.useContext)(s.Q).reducedMotion,C=(0,r.useRef)(null);o=o||c.renderer,!C.current&&o&&(C.current=o(t,{visualState:e,parent:p,props:n,presenceContext:y,blockInitialAnimation:!!y&&!1===y.initial,reducedMotionConfig:b}));let x=C.current,S=(0,r.useContext)(g.N);x&&!x.projection&&i&&("html"===x.type||"svg"===x.type)&&function(t,e,n,o){let{layoutId:r,layout:i,drag:a,dragConstraints:s,layoutScroll:u,layoutRoot:l}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:r,layout:i,alwaysMeasureLayout:!!a||s&&(0,h.X)(s),visualElement:t,animationType:"string"==typeof i?i:"both",initialPromotionConfig:o,layoutScroll:u,layoutRoot:l})}(C.current,n,i,S);let E=(0,r.useRef)(!1);(0,r.useInsertionEffect)(()=>{x&&E.current&&x.update(n,y)});let P=n[f.n],R=(0,r.useRef)(!!P&&!(null===(l=window.MotionHandoffIsComplete)||void 0===l?void 0:l.call(window,P))&&(null===(d=window.MotionHasOptimisedAnimation)||void 0===d?void 0:d.call(window,P)));return(0,v.E)(()=>{x&&(E.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),w.k.render(x.render),R.current&&x.animationState&&x.animationState.animateChanges())}),(0,r.useEffect)(()=>{x&&(!R.current&&x.animationState&&x.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var t;null===(t=window.MotionHandoffMarkAsComplete)||void 0===t||t.call(window,P)}),R.current=!1))}),x}(S,R,y,b,t.ProjectionNode)}return(0,o.jsxs)(u.A.Provider,{value:P,children:[c&&P.visualElement?(0,o.jsx)(c,{visualElement:P.visualElement,...y}):null,C(S,t,(n=P.visualElement,(0,r.useCallback)(t=>{t&&R.onMount&&R.onMount(t),n&&(t?n.mount(t):n.unmount()),e&&("function"==typeof e?e(t):(0,h.X)(e)&&(e.current=t))},[n])),R,E,P.visualElement)]})}y&&function(t){for(let e in t)p.B[e]={...p.B[e],...t[e]}}(y),E.displayName="motion.".concat("string"==typeof S?S:"create(".concat(null!==(n=null!==(e=S.displayName)&&void 0!==e?e:S.name)&&void 0!==n?n:"",")"));let P=(0,r.forwardRef)(E);return P[c]=S,P}},9246:(t,e,n)=>{n.d(e,{z:()=>i});var o=n(3154),r=n(3480);function i(t,{layout:e,layoutId:n}){return r.f.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!o.H[t]||"opacity"===t)}},2501:(t,e,n)=>{n.d(e,{T:()=>p});var o=n(2115),r=n(5385),i=n(4358),a=n(9656),s=n(6657),u=n(8442),l=n(9234),d=n(7365);let p=t=>(e,n)=>{let p=(0,o.useContext)(i.A),c=(0,o.useContext)(a.t),h=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},o,i,a){let l={latestValues:function(t,e,n,o){let i={},a=o(t,{});for(let t in a)i[t]=(0,d.u)(a[t]);let{initial:l,animate:p}=t,c=(0,s.e)(t),h=(0,s.O)(t);e&&h&&!c&&!1!==t.inherit&&(void 0===l&&(l=e.initial),void 0===p&&(p=e.animate));let m=!!n&&!1===n.initial,v=(m=m||!1===l)?p:l;if(v&&"boolean"!=typeof v&&!(0,r.N)(v)){let e=Array.isArray(v)?v:[v];for(let n=0;n<e.length;n++){let o=(0,u.a)(t,e[n]);if(o){let{transitionEnd:t,transition:e,...n}=o;for(let t in n){let e=n[t];if(Array.isArray(e)){let t=m?e.length-1:0;e=e[t]}null!==e&&(i[t]=e)}for(let e in t)i[e]=t[e]}}}return i}(o,i,a,t),renderState:e()};return n&&(l.onMount=t=>n({props:o,current:t,...l}),l.onUpdate=t=>n(t)),l})(t,e,p,c);return n?h():(0,l.M)(h)}},5875:(t,e,n)=>{n.d(e,{S:()=>r});let o=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function r(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||o.has(t)}}}]);