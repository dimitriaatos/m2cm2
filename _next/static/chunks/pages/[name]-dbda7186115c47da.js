(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},4167:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[name]",function(){return n(4771)}])},5925:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),o=n(9634);let i=e=>new Promise(t=>{if(4===e.readyState)t();else{let n=()=>{t(),removeEventListener("loadeddata",n,!0)};e.addEventListener("loadeddata",n,!0)}});var s=n(1482),c=n(5738),u=n.n(c),a=n(7294);let l=e=>{let{name:t,play:c,onFinish:l}=e,[f,d]=(0,a.useState)({}),[v,h]=(0,a.useState)(!1),p=(0,a.useRef)(),m=(0,a.useRef)(),w=(0,a.useRef)(),y=(0,s.i)();(0,a.useEffect)(()=>{var e;null==f||null===(e=f.onResize)||void 0===e||e.call(f,y)},[y,f]);let _=(0,a.useCallback)(()=>{var e;null==f||null===(e=f.start)||void 0===e||e.call(f,p)},[f]),E=(0,a.useCallback)(()=>{var e;null==f||null===(e=f.stop)||void 0===e||e.call(f,p)},[f]);return(0,a.useEffect)(()=>E,[E]),(0,a.useEffect)(()=>{(c?_:E)()},[c,_]),(0,a.useEffect)(()=>{(async()=>{var e;let r=await n(4578)("./".concat(t,".js"));await i(p.current,w.current),null==r||null===(e=r.init)||void 0===e||e.call(r,{video:p,video2:m,onFinish:l}),h(!0),d(r)})()},[t]),(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsx)("video",{muted:!0,className:u().video,ref:p,children:(0,r.jsx)("source",{src:"".concat(o.O,"/videos/").concat(t,".mp4"),type:"video/mp4"})}),"concert"==t&&(0,r.jsx)("video",{muted:!0,className:u().video,style:{visibility:"hidden"},ref:m,children:(0,r.jsx)("source",{src:"".concat(o.O,"/videos/concert2.mp4"),type:"video/mp4"})})]})};var f=l},9634:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(3454);let o=r.env.NEXT_PUBLIC_BASE_PATH||""},1482:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(7294);function o(){let[e,t]=(0,r.useState)({width:void 0,height:void 0});return(0,r.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}},4771:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var r=n(5893),o=n(5925),i=n(7294);let s=e=>{let{name:t}=e,[n,s]=(0,i.useState)(!1);return(0,i.useEffect)(()=>(s(!0),()=>s(!1)),[]),(0,r.jsx)(o.Z,{name:t,play:n})};var c=!0;t.default=s},5738:function(e){e.exports={video:"Room_video__YcupO",container:"Room_container__0WUmo"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(r){n=s}}();var u=[],a=!1,l=-1;function f(){a&&r&&(a=!1,r.length?u=r.concat(u):l=-1,u.length&&d())}function d(){if(!a){var e=c(f);a=!0;for(var t=u.length;t;){for(r=u,u=[];++l<t;)r&&r[l].run();l=-1,t=u.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||a||c(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},4578:function(e,t,n){var r={"./apartment.js":[4260,123,260],"./common.js":[7038,38],"./concert.js":[5811,123,811],"./connecting.js":[782,123,782],"./index.js":[611,123,611],"./lobby.js":[8715,123,715],"./nowhere.js":[7362,123,362],"./sleep.js":[1302,123,302],"./sonyEricsson.js":[5219,123,219],"./stochastic.js":[6124,124],"./travel.js":[1828,123,828],"./vacation.js":[8082,123,82],"./workspace.js":[146,123,146],"./workspace2.js":[7504,123,504]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(o)})}o.keys=function(){return Object.keys(r)},o.id=4578,e.exports=o}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4167)}),_N_E=e.O()}]);