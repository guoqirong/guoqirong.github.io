(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vue3-cnode-app"]=t():e["vue3-cnode-app"]=t()})(window,(function(){return function(e){function t(t){for(var o,c,u=t[0],i=t[1],l=t[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-25db5ae2":"de650fa4","chunk-09912cf4":"86e44ffe","chunk-4f1d36c4":"ad173389","chunk-588ce536":"53841d9b","chunk-c77f8bb8":"b1f77fb8","chunk-288249eb":"5b68fbc0","chunk-a35f6824":"c38740b9","chunk-fbefc694":"93118935","chunk-1c9a8564":"fb3d7bd2","chunk-265dfc74":"b075b590","chunk-5a768342":"1be9d3d5","chunk-bd011d9e":"59222e17"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-25db5ae2":1,"chunk-09912cf4":1,"chunk-4f1d36c4":1,"chunk-588ce536":1,"chunk-c77f8bb8":1,"chunk-288249eb":1,"chunk-a35f6824":1,"chunk-fbefc694":1,"chunk-1c9a8564":1,"chunk-265dfc74":1,"chunk-5a768342":1,"chunk-bd011d9e":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-25db5ae2":"9f0adbda","chunk-09912cf4":"c7581607","chunk-4f1d36c4":"4581cc28","chunk-588ce536":"aabf391c","chunk-c77f8bb8":"616e5c51","chunk-288249eb":"d7db344c","chunk-a35f6824":"2b0bdc1c","chunk-fbefc694":"98c5473c","chunk-1c9a8564":"5418439f","chunk-265dfc74":"1bab269b","chunk-5a768342":"a0a0d70d","chunk-bd011d9e":"c8578b7b"}[e]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===o||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-cnode/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp_vue3-cnode"]=window["webpackJsonp_vue3-cnode"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;return a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var o=n("5502"),c={namespaced:!0,state:{entryUrl:""},mutations:{updateEntryUrl:function(e,t){e.entryUrl=t}}},r={namespaced:!0,state:{token:"",simpleUserData:{},userData:{},isLoading:!1},mutations:{updateToken:function(e,t){e.token=t},updateSimpleUserData:function(e,t){e.simpleUserData=t},updateUserData:function(e,t){e.userData=t},updateLoading:function(e,t){e.isLoading=t}}};t["a"]=Object(o["a"])({modules:{grobal:c,user:r}})},"1f2a":function(e,t,n){"use strict";var o=n("1344"),c=Object(o["a"])(),r=function(){return[c]};t["a"]=r},"20b3":function(e,t,n){},"491b":function(e,t,n){"use strict";n("c463")},"753e":function(e,t,n){"use strict";n("bdbd")},"93f3":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=[{key:"all",name:"全部"},{key:"good",name:"精华"},{key:"share",name:"分享"},{key:"ask",name:"问答"},{key:"job",name:"招聘"},{key:"dev",name:"客户端测试"}]},afbc:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var o=n("0613"),c=n("6c02"),r="";window.__POWERED_BY_QIANKUN__&&(r="/vue3-cnode");var a=[{path:r+"/",name:"index",component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-fbefc694"),n.e("chunk-588ce536"),n.e("chunk-c77f8bb8"),n.e("chunk-265dfc74")]).then(n.bind(null,"37f9"))}},{path:r+"/login",name:"login",component:function(){return Promise.all([n.e("chunk-4f1d36c4"),n.e("chunk-588ce536"),n.e("chunk-bd011d9e")]).then(n.bind(null,"9ed6"))}},{path:r+"/detail",name:"detail",component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-4f1d36c4"),n.e("chunk-a35f6824")]).then(n.bind(null,"8248"))}},{path:r+"/add-topic",name:"addTopic",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-4f1d36c4"),n.e("chunk-588ce536"),n.e("chunk-c77f8bb8"),n.e("chunk-288249eb")]).then(n.bind(null,"b55f"))}},{path:r+"/edit-topic/:id",name:"editTopic",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-4f1d36c4"),n.e("chunk-588ce536"),n.e("chunk-c77f8bb8"),n.e("chunk-288249eb")]).then(n.bind(null,"b55f"))}},{path:r+"/message",name:"message",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-09912cf4")]).then(n.bind(null,"1d11"))}},{path:r+"/collect",name:"collect",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-fbefc694"),n.e("chunk-1c9a8564")]).then(n.bind(null,"3ae0"))}},{path:r+"/user/:userName",name:"userDetail",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-25db5ae2"),n.e("chunk-fbefc694"),n.e("chunk-5a768342")]).then(n.bind(null,"dc30"))}}],u=Object(c["a"])({history:Object(c["b"])("/vue3-cnode"),routes:a});u.beforeEach((function(e,t,n){"login"===e.name&&o["a"].state.user.token?n("/"):e.meta.requiredLogin&&!o["a"].state.user.token?n({name:"login"}):n()})),t["a"]=u},b32d:function(e,t,n){"use strict";var o=n("bc3a"),c=n.n(o),r=n("7a23"),a=function(){var e=Object(r["ref"])(!1),t=function(e){return"https://cnodejs.org"+e},n=c.a.create({timeout:6e4,withCredentials:!1,headers:{"Content-Type":"application/json; charset=utf-8"}});return n.interceptors.request.use((function(t){return e.value=!0,t})),n.interceptors.response.use((function(t){return t&&403===t.status?console.error("登录失败"):t&&200!==t.status&&console.error("请求失败"),e.value=!1,t}),(function(t){return e.value=!1,Promise.reject(t)})),{isLoading:e,adornUrl:t,httpRequest:n}};t["a"]=a},b54e:function(e,t,n){"use strict";n("20b3")},bd99:function(e,t,n){"use strict";window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},bdbd:function(e,t,n){},c463:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return te})),n.d(t,"mount",(function(){return ne})),n.d(t,"unmount",(function(){return oe}));var o=n("9ab4"),c=(n("bd99"),n("7a23")),r=(n("5e0e"),n("d47a"),n("330d"),n("9d28"),n("797a"),n("b6c4")),a=n("c5ff"),u=n("cf2e");function i(e,t,n,o,i,l){var d=Object(c["resolveComponent"])("header-comp"),s=Object(c["resolveComponent"])("router-view"),f=Object(c["resolveComponent"])("footer-comp"),b=u["a"],p=a["a"],h=r["a"];return Object(c["openBlock"])(),Object(c["createBlock"])(h,{locale:e.locale},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{ref:"scrollbarRef",height:"100vh",onScroll:e.scroll},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d),Object(c["createVNode"])(s),Object(c["createVNode"])(f),e.top>200?(Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:0,class:"back-top",size:"large",icon:e.CaretTop,circle:"",onClick:e.backTop},null,8,["icon","onClick"])):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["onScroll"])]})),_:1},8,["locale"])}var l=n("3ef4"),d=n("bf4f"),s=n("3ef0"),f=n.n(s),b=(n("2c92"),n("26f5"),n("0388")),p=n("def7"),h={class:"navbar"},m={class:"navbar-content"},k=["src"],g={class:"navbar-link navbar-noright-link"},v=Object(c["createTextVNode"])("首页"),j={key:0},O=Object(c["createTextVNode"])("消息"),y=Object(c["createTextVNode"])("消息"),C={key:1},N=Object(c["createTextVNode"])("收藏"),_=Object(c["createTextVNode"])("GitHub仓库"),x={key:2},E=Object(c["createTextVNode"])("登录"),w={key:3},V=Object(c["createTextVNode"])("退出");function B(e,t,n,o,r,a){var u=p["a"],i=b["a"];return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",h,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("span",{class:"navbar-logo",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.gotoIndex&&e.gotoIndex.apply(e,t)})},[Object(c["createElementVNode"])("img",{src:e.logoImage},null,8,k)]),Object(c["createElementVNode"])("span",g,[Object(c["createElementVNode"])("span",null,[Object(c["createVNode"])(u,{underline:!1,onClick:e.gotoIndex},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["onClick"])]),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",j,[e.count>0?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,value:e.count,class:"badge-item"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{underline:!1,onClick:e.gotoMessage},{default:Object(c["withCtx"])((function(){return[O]})),_:1},8,["onClick"])]})),_:1},8,["value"])):(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:1,underline:!1,onClick:e.gotoMessage},{default:Object(c["withCtx"])((function(){return[y]})),_:1},8,["onClick"]))])):Object(c["createCommentVNode"])("",!0),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",C,[Object(c["createVNode"])(u,{underline:!1,onClick:e.gotoCollect},{default:Object(c["withCtx"])((function(){return[N]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,[Object(c["createVNode"])(u,{underline:!1,href:"https://github.com/guoqirong/vue3-cnode",target:"_blank"},{default:Object(c["withCtx"])((function(){return[_]})),_:1})]),""===e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",x,[Object(c["createVNode"])(u,{underline:!1,onClick:e.gotoLogin},{default:Object(c["withCtx"])((function(){return[E]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",w,[Object(c["createVNode"])(u,{underline:!1,onClick:e.logout},{default:Object(c["withCtx"])((function(){return[V]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0)])])])}var T=n("5502"),P=n("6c02"),S=n("b32d"),U=n("d257"),D=n("1f2a"),L=Object(c["defineComponent"])({name:"HeaderComp",components:{ElLink:p["a"],ElBadge:b["a"]},setup:function(){var e=Object(T["b"])(),t=e.state,o=e.commit,r=Object(P["c"])(),a=Object(S["a"])(),u=a.adornUrl,i=a.httpRequest,l=Object(c["computed"])((function(){return n("e347")})),d=Object(c["computed"])((function(){return t.user.token})),s=function(){"/index"!==r.path&&Object(U["e"])({path:"/"})},f=Object(D["a"])()[0];f.on("read-msg",(function(){p()}));var b=Object(c["ref"])(0);Object(c["watch"])(d,(function(e){e?p():o("user/updateUserData",{})}));var p=function(){i({url:u("/api/v1/message/count"),method:"get",params:{accesstoken:d.value||""}}).then((function(e){var t=e.data;b.value=t.data})).catch((function(e){console.error(e)}))};d.value&&p();var h=function(){"/message"!==r.path&&Object(U["e"])({path:"/message"})},m=function(){"/collect"!==r.path&&Object(U["e"])({path:"/collect"})},k=function(){"/login"!==r.path&&Object(U["e"])({path:"/login"})},g=function(){localStorage.removeItem("loginname"),localStorage.removeItem("token"),o("user/updateToken",""),o("user/updateSimpleUserData",{}),s()};return{logoImage:l,token:d,gotoIndex:s,count:b,gotoMessage:h,gotoCollect:m,gotoLogin:k,logout:g}}}),I=(n("491b"),n("6b0d")),q=n.n(I);const M=q()(L,[["render",B]]);var R=M,A={class:"body-footer"},H=Object(c["createElementVNode"])("div",{class:"footer-content"},[Object(c["createElementVNode"])("div",null,"CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。"),Object(c["createElementVNode"])("div",null,"CNode 社区版权归xxxxxx所有")],-1),Y=[H];function F(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",A,Y)}var K=Object(c["defineComponent"])({name:"FooterComp"});n("b54e");const Q=q()(K,[["render",F]]);var $=Q,J=Object(c["defineComponent"])({components:{HeaderComp:R,FooterComp:$,ElConfigProvider:r["a"],ElScrollbar:a["a"],ElButton:u["a"]},setup:function(){var e=Object(S["a"])(),t=e.isLoading,n=e.adornUrl,o=e.httpRequest,r=Object(T["b"])(),a=r.state,u=r.commit,i=Object(c["computed"])((function(){return a.user.token}));Object(c["watch"])(i,(function(e){e&&s(a.user.simpleUserData.loginname)})),Object(c["watch"])(t,(function(e){u("user/updateLoading",e)}));var s=function(e){o({url:n("/api/v1/user/"+e),method:"get"}).then((function(e){var t=e.data;u("user/updateUserData",t.data)})).catch((function(e){l["a"].error("请求失败"),console.error(e)}))};i.value&&s(a.user.simpleUserData.loginname),Object(c["onMounted"])((function(){u("user/updateSimpleUserData",{loginname:localStorage.getItem("loginname")||""}),u("user/updateToken",localStorage.getItem("token")||"")}));var b=Object(c["ref"])(0),p=Object(c["ref"])(),h=function(e){b.value=e.scrollTop},m=function(){var e;null===(e=p.value)||void 0===e||e.setScrollTop(0)};return{locale:f.a,top:b,scrollbarRef:p,scroll:h,CaretTop:d["a"],backTop:m}}});n("753e");const W=q()(J,[["render",i]]);var z,G=W,X=n("afbc"),Z=n("0613");function ee(e){return Object(o["b"])(this,void 0,void 0,(function(){var t,n,r;return Object(o["c"])(this,(function(o){return t=null!==e&&void 0!==e?e:{},n=t.container,r=t.entry,z=Object(c["createApp"])(G),z.use(Z["a"]).use(X["a"]).mount(n?n.querySelector("#app"):"#app"),Z["a"].commit("grobal/updateEntryUrl",r),[2]}))}))}function te(){return Object(o["b"])(this,void 0,Promise,(function(){return Object(o["c"])(this,(function(e){switch(e.label){case 0:return console.log("[vue] vue app bootstraped"),[4,new Promise((function(e){e(!0)}))];case 1:return[2,e.sent()]}}))}))}function ne(e){console.log("[vue] props from main framework",e),ee(e)}function oe(){z&&(console.log("[vue] vue app unmount"),Z["a"].commit("grobal/updateEntryUrl",""),z.unmount(),z._instance=null,z=void 0)}window.__POWERED_BY_QIANKUN__||ee()},d257:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return s}));var o=n("9ab4"),c=n("93f3"),r=n("afbc"),a=function(e,t){var n=new Date(e);if(""!==e&&!n.getFullYear())return console.error("时间格式错误！"),"";/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var c in o)if(new RegExp("("+c+")").test(t)){var r=o[c]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?r:u(r))}return t},u=function(e){return("00"+e).substr(e.length)},i=function(e,t){var n,o;return e?"置顶":null!==(o=null===(n=c["a"].find((function(e){return e.key===t})))||void 0===n?void 0:n.name)&&void 0!==o?o:"未知"},l=function(e,t){return void 0!==e&&void 0!==t?parseInt(String(Math.random()*(t-e+1)+e),10):void 0!==e?parseInt(String(Math.random()*e+1),10):0},d=function(e){var t=e.replace(/“|”/g,'"');return t=t.replace(/href="+(\/.?user.?\/|user.?\/)/g,'href="./#/user/'),t=t.replace(/&lt;/g,"<"),t.replace(/&gt;/g,">")},s=function(e){var t=("string"===typeof e?{path:void 0}:Object(o["a"])({path:void 0},e)).path,n="string"===typeof e?r["b"]+e:Object(o["a"])(Object(o["a"])({},e),t?{path:r["b"]+t}:{});r["a"].push(n)}},e347:function(e,t,n){e.exports=n.p+"img/logo.e2b40b75.svg"}})}));
//# sourceMappingURL=app.c2f37cff.js.map