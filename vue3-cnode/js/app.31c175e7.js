(function(e){function t(t){for(var c,a,l=t[0],s=t[1],i=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},o={app:0},r=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-14f253b0":"fcf1cb92","chunk-afa7e342":"fba67633","chunk-a883c6c2":"19af0fc5","chunk-ccd091b8":"f8059624","chunk-bd86e02a":"77e60ea4","chunk-bfebedfc":"d9a06d75"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-14f253b0":1,"chunk-afa7e342":1,"chunk-a883c6c2":1,"chunk-ccd091b8":1,"chunk-bd86e02a":1,"chunk-bfebedfc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-14f253b0":"06c90cb2","chunk-afa7e342":"aabf391c","chunk-a883c6c2":"293305c7","chunk-ccd091b8":"42529567","chunk-bd86e02a":"8a2fbca6","chunk-bfebedfc":"6daac2b8"}[e]+".css",o=s.p+c,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var i=r[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===c||u===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],u=i.getAttribute("data-href");if(u===c||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],b.parentNode.removeChild(b),n(r)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var c=n("5502"),a={namespaced:!0,state:{token:"",simpleUserData:{},userData:{},isLoading:!1},mutations:{updateToken:function(e,t){e.token=t},updateSimpleUserData:function(e,t){e.simpleUserData=t},updateUserData:function(e,t){e.userData=t},updateLoading:function(e,t){e.isLoading=t}}};t["a"]=Object(c["a"])({modules:{user:a}})},1420:function(e,t,n){"use strict";n("809a"),n("7a64"),n("0997"),n("83b2"),n("26f5");var c=n("9caa"),a=n("bfd2"),o=n("4c02"),r=n("def7"),l=n("7a23"),s={class:"not-login"},i=Object(l["createElementVNode"])("div",{class:"title"}," CNode：Node.js专业中文社区 ",-1),u={class:"describe"},d=Object(l["createElementVNode"])("span",{class:"not-bottom"},"当前为游客状态，您可以",-1),b=Object(l["createTextVNode"])("登录"),f={class:"card-title"},m={class:"user-skeleton"},p={class:"user"},j={class:"user-img"},O={class:"user-name"},g={key:0,class:"user-score"},h=Object(l["createElementVNode"])("span",{class:"card-title"},"我的主题",-1),k=["title"],v={key:0,class:"recent_topics"},C=Object(l["createElementVNode"])("div",null,"暂无数据",-1),N=[C],y=Object(l["createElementVNode"])("span",{class:"card-title"},"我的回复",-1),V=["title"],E={key:0,class:"recent_topics"},x=Object(l["createElementVNode"])("div",null,"暂无数据",-1),B=[x];function _(e,t,n,C,x,_){var w=r["a"],D=o["a"],S=c["b"],L=a["a"],T=c["a"];return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.token||e.authorData?Object(l["createCommentVNode"])("",!0):(Object(l["openBlock"])(),Object(l["createBlock"])(D,{key:0,class:"box-card"},{default:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("span",s,[i,Object(l["createElementVNode"])("div",u,[d,Object(l["createVNode"])(w,{underline:!1,onClick:e.gotoLogin},{default:Object(l["withCtx"])((function(){return[b]})),_:1},8,["onClick"])])])]})),_:1})),e.token||e.authorData?(Object(l["openBlock"])(),Object(l["createBlock"])(D,{key:1,class:"box-card"},{header:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("span",f,Object(l["toDisplayString"])(e.title),1)]})),default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(T,{loading:e.loading,animated:""},{template:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("div",m,[Object(l["createVNode"])(S,{class:"skeleton-user-img"}),Object(l["createVNode"])(S,{class:"skeleton-user-name"}),Object(l["createVNode"])(S,{class:"skeleton-user-score"})])]})),default:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("div",p,[Object(l["createElementVNode"])("div",j,[(Object(l["openBlock"])(),Object(l["createBlock"])(L,{shape:"square",size:40,src:e.userData.avatar_url||"",key:e.userData.avatar_url||"",alt:e.userData.loginname||""},null,8,["src","alt"]))]),Object(l["createElementVNode"])("div",O,Object(l["toDisplayString"])(e.userData.loginname||""),1),e.userData.score?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",g,"积分："+Object(l["toDisplayString"])(e.userData.score||""),1)):Object(l["createCommentVNode"])("",!0)])]})),_:1},8,["loading"])]})),_:1})):Object(l["createCommentVNode"])("",!0),e.token&&e.userData.recent_topics?(Object(l["openBlock"])(),Object(l["createBlock"])(D,{key:2,class:"box-card list-card"},{header:Object(l["withCtx"])((function(){return[h]})),default:Object(l["withCtx"])((function(){return[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.userData.recent_topics,(function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:t,class:"recent_topics"},[Object(l["createElementVNode"])("div",{title:e.title},Object(l["toDisplayString"])(e.title),9,k)])})),128)),e.userData.recent_topics&&e.userData.recent_topics.length<1?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",v,N)):Object(l["createCommentVNode"])("",!0)]})),_:1})):Object(l["createCommentVNode"])("",!0),e.token&&e.userData.recent_replies?(Object(l["openBlock"])(),Object(l["createBlock"])(D,{key:3,class:"box-card list-card"},{header:Object(l["withCtx"])((function(){return[y]})),default:Object(l["withCtx"])((function(){return[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.userData.recent_replies,(function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:t,class:"recent_topics"},[Object(l["createElementVNode"])("div",{title:e.title},Object(l["toDisplayString"])(e.title),9,V)])})),128)),e.userData.recent_replies&&e.userData.recent_replies.length<1?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",E,B)):Object(l["createCommentVNode"])("",!0)]})),_:1})):Object(l["createCommentVNode"])("",!0)],64)}var w=n("6c02"),D=n("5502"),S=Object(l["defineComponent"])({name:"UserInfoComp",components:{ElSkeleton:c["a"],ElSkeletonItem:c["b"]},props:{title:{type:String,default:"个人信息"},authorData:{type:Object,default:void 0},authorLoading:Boolean},setup:function(e){var t=Object(D["b"])().state,n=Object(w["c"])(),c=Object(w["d"])(),a=Object(l["computed"])((function(){return t.user.token})),o=Object(l["computed"])((function(){var n;return null!==(n=e.authorLoading)&&void 0!==n?n:t.user.isLoading})),r=Object(l["computed"])((function(){var n;return null!==(n=e.authorData)&&void 0!==n?n:t.user.userData})),s=function(){"/login"!==n.path&&c.push({path:"/login"})};return{token:a,loading:o,userData:r,gotoLogin:s}}}),L=(n("7d2e"),n("6b0d")),T=n.n(L);const M=T()(S,[["render",_]]);t["a"]=M},"1d11":function(e,t,n){"use strict";n.r(t),n.d(t,"emitter",(function(){return q}));n("83b2"),n("809a"),n("0a78"),n("7a64"),n("797a");var c=n("4c02"),a=n("9caa"),o=n("d09f"),r=n("bfd2"),l=n("cf2e"),s=n("7a23"),i={class:"my-message"},u={class:"lift-content"},d=Object(s["createElementVNode"])("span",{class:"card-title"},"未读信息",-1),b=Object(s["createTextVNode"])("全部已读"),f={class:"user-img"},m={class:"read-messages-title"},p={class:"title"},j={class:"desc"},O={class:"read-btn"},g=Object(s["createTextVNode"])("已读"),h=["innerHTML"],k={class:"topic-title"},v=Object(s["createElementVNode"])("span",{class:"card-title"},"已读信息",-1),C={class:"user-img"},N={class:"read-messages-title"},y={class:"title"},V={class:"desc"},E=["innerHTML"],x={class:"topic-title"},B={class:"right-content"};function _(e,t,n,_,w,D){var S=l["a"],L=r["a"],T=o["a"],M=a["a"],U=c["a"],q=Object(s["resolveComponent"])("user-info-comp"),I=Object(s["resolveComponent"])("client-qr-code-comp");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",i,[Object(s["createElementVNode"])("div",u,[Object(s["createVNode"])(U,{class:"box-card"},{header:Object(s["withCtx"])((function(){return[d,e.message&&e.message.hasnot_read_messages&&e.message.hasnot_read_messages.length>0?(Object(s["openBlock"])(),Object(s["createBlock"])(S,{key:0,class:"all-read",onClick:e.readAll},{default:Object(s["withCtx"])((function(){return[b]})),_:1},8,["onClick"])):Object(s["createCommentVNode"])("",!0)]})),default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(M,{class:"message-skeleton",loading:e.isLoading,animated:"",rows:6},{default:Object(s["withCtx"])((function(){return[e.message&&e.message.hasnot_read_messages&&e.message.hasnot_read_messages.length>0?(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],{key:0},Object(s["renderList"])(e.message.hasnot_read_messages,(function(t,n){return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",{key:n,class:"notread-item"},[Object(s["createElementVNode"])("div",f,[(Object(s["openBlock"])(),Object(s["createBlock"])(L,{shape:"square",size:40,src:t.author.avatar_url,key:t.author.avatar_url,alt:t.author.loginname},null,8,["src","alt"]))]),Object(s["createElementVNode"])("div",m,[Object(s["createElementVNode"])("div",p,Object(s["toDisplayString"])(t.author.loginname+"回复了您的话题"),1),Object(s["createElementVNode"])("div",j,Object(s["toDisplayString"])(e.formatDate(t.create_at,"yyyy-MM-dd")),1)]),Object(s["createElementVNode"])("div",O,[Object(s["createVNode"])(S,{onClick:function(n){return e.readOne(t.id)}},{default:Object(s["withCtx"])((function(){return[g]})),_:2},1032,["onClick"])]),Object(s["createElementVNode"])("div",{class:"reply-content",innerHTML:t.reply.content},null,8,h),Object(s["createElementVNode"])("div",k,"话题："+Object(s["toDisplayString"])(t.topic.title),1)])})),128)):(Object(s["openBlock"])(),Object(s["createBlock"])(T,{key:1,description:"暂无数据"}))]})),_:1},8,["loading"])]})),_:1}),Object(s["createVNode"])(U,{class:"box-card"},{header:Object(s["withCtx"])((function(){return[v]})),default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(M,{class:"message-skeleton",loading:e.isLoading,animated:"",rows:6},{default:Object(s["withCtx"])((function(){return[e.message&&e.message.has_read_messages&&e.message.has_read_messages.length>0?(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],{key:0},Object(s["renderList"])(e.message.has_read_messages,(function(t,n){return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",{key:n,class:"read-item"},[Object(s["createElementVNode"])("div",C,[(Object(s["openBlock"])(),Object(s["createBlock"])(L,{shape:"square",size:40,src:t.author.avatar_url,key:t.author.avatar_url,alt:t.author.loginname},null,8,["src","alt"]))]),Object(s["createElementVNode"])("div",N,[Object(s["createElementVNode"])("div",y,Object(s["toDisplayString"])(t.author.loginname+"回复了您的话题"),1),Object(s["createElementVNode"])("div",V,Object(s["toDisplayString"])(e.formatDate(t.create_at,"yyyy-MM-dd")),1)]),Object(s["createElementVNode"])("div",{class:"reply-content",innerHTML:t.reply.content},null,8,E),Object(s["createElementVNode"])("div",x,"话题："+Object(s["toDisplayString"])(t.topic.title),1)])})),128)):(Object(s["openBlock"])(),Object(s["createBlock"])(T,{key:1,description:"暂无数据"}))]})),_:1},8,["loading"])]})),_:1})]),Object(s["createElementVNode"])("div",B,[Object(s["createVNode"])(q),Object(s["createVNode"])(I)])])}var w=n("7780"),D=n("1420"),S=n("b32d"),L=n("5502"),T=n("3ef4"),M=n("d257"),U=n("1344"),q=Object(U["a"])(),I=Object(s["defineComponent"])({components:{ElSkeleton:a["a"],ElEmpty:o["a"],ClientQrCodeComp:w["a"],UserInfoComp:D["a"]},setup:function(){var e=Object(L["b"])().state,t=Object(s["computed"])((function(){return e.user.token})),n=Object(S["a"])(),c=n.isLoading,a=n.adornUrl,o=n.httpRequest,r=Object(s["ref"])(),l=function(){t.value&&o({url:a("/api/v1/messages"),method:"get",params:{accesstoken:t.value,mdrender:!0}}).then((function(e){var t=e.data;r.value=t.data})).catch((function(e){T["a"].error("请求失败"),console.error(e)}))};l();var i=Object(S["a"])().httpRequest,u=function(){i({url:a("/api/v1/message/mark_all"),method:"post",params:{accesstoken:t.value}}).then((function(){q.emit("read-msg"),l()})).catch((function(e){T["a"].error("请求失败"),console.error(e)}))},d=function(e){i({url:a("/api/v1/message/mark_one/"+e),method:"post",params:{accesstoken:t.value}}).then((function(){q.emit("read-msg"),l()})).catch((function(e){T["a"].error("请求失败"),console.error(e)}))};return{message:r,isLoading:c,readAll:u,readOne:d,formatDate:M["b"]}}}),P=(n("408d"),n("6b0d")),R=n.n(P);const F=R()(I,[["render",_]]);t["default"]=F},"20b3":function(e,t,n){},"3c5a":function(e,t,n){},"408d":function(e,t,n){"use strict";n("a3cb")},"491b":function(e,t,n){"use strict";n("c463")},7780:function(e,t,n){"use strict";n("83b2"),n("26f5"),n("effa");var c=n("4c02"),a=n("def7"),o=n("03ae"),r=n("7a23"),l=Object(r["createElementVNode"])("span",{class:"card-title"},"客户端二维码",-1),s={class:"client-box"},i=Object(r["createTextVNode"])("客户端源码地址");function u(e,t,n,u,d,b){var f=o["a"],m=a["a"],p=c["a"];return Object(r["openBlock"])(),Object(r["createBlock"])(p,{class:"box-card"},{header:Object(r["withCtx"])((function(){return[l]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{class:"qr-image",src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",fit:"fill"}),Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(m,{underline:!1,href:"https://github.com/soliury/noder-react-native",target:"_blank"},{default:Object(r["withCtx"])((function(){return[i]})),_:1})])]})),_:1})}var d=Object(r["defineComponent"])({name:"ClientQrCodeComp",components:{ElCard:c["a"],ElImage:o["a"],ElLink:a["a"]}}),b=(n("fe05"),n("6b0d")),f=n.n(b);const m=f()(d,[["render",u]]);t["a"]=m},"7d2e":function(e,t,n){"use strict";n("d593")},"8ead":function(e,t,n){"use strict";n("3c5a")},"93f3":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=[{key:"all",name:"全部"},{key:"good",name:"精华"},{key:"share",name:"分享"},{key:"ask",name:"问答"},{key:"job",name:"招聘"},{key:"dev",name:"客户端测试"}]},a3cb:function(e,t,n){},afbc:function(e,t,n){"use strict";var c=n("0613"),a=n("6c02"),o=[{path:"/",name:"index",component:function(){return Promise.all([n.e("chunk-14f253b0"),n.e("chunk-afa7e342"),n.e("chunk-a883c6c2")]).then(n.bind(null,"37f9"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-afa7e342"),n.e("chunk-bd86e02a")]).then(n.bind(null,"9ed6"))}},{path:"/detail",name:"detail",component:function(){return n.e("chunk-bfebedfc").then(n.bind(null,"8248"))}},{path:"/message",name:"message",meta:{requiredLogin:!0},component:function(){return Promise.resolve().then(n.bind(null,"1d11"))}},{path:"/collect",name:"collect",meta:{requiredLogin:!0},component:function(){return Promise.all([n.e("chunk-14f253b0"),n.e("chunk-ccd091b8")]).then(n.bind(null,"3ae0"))}}],r=Object(a["a"])({history:Object(a["b"])("/vue3-cnode"),routes:o});r.beforeEach((function(e,t,n){"login"===e.name&&c["a"].state.user.token?n("/"):e.meta.requiredLogin&&!c["a"].state.user.token?n({name:"login"}):n()})),t["a"]=r},b32d:function(e,t,n){"use strict";var c=n("bc3a"),a=n.n(c),o=n("7a23"),r=function(){var e=Object(o["ref"])(!1),t=function(e){return"https://cnodejs.org"+e},n=a.a.create({timeout:6e4,withCredentials:!1,headers:{"Content-Type":"application/json; charset=utf-8"}});return n.interceptors.request.use((function(t){return e.value=!0,t})),n.interceptors.response.use((function(t){return t&&403===t.status?console.error("登录失败"):t&&200!==t.status&&console.error("请求失败"),e.value=!1,t}),(function(t){return e.value=!1,Promise.reject(t)})),{isLoading:e,adornUrl:t,httpRequest:n}};t["a"]=r},b54e:function(e,t,n){"use strict";n("20b3")},c463:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=(n("330d"),n("9d28"),n("797a"),n("b6c4")),o=n("c5ff"),r=n("cf2e");function l(e,t,n,l,s,i){var u=Object(c["resolveComponent"])("header-comp"),d=Object(c["resolveComponent"])("router-view"),b=Object(c["resolveComponent"])("footer-comp"),f=r["a"],m=o["a"],p=a["a"];return Object(c["openBlock"])(),Object(c["createBlock"])(p,{locale:e.locale},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(m,{ref:"scrollbarRef",height:"100vh",onScroll:e.scroll},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u),Object(c["createVNode"])(d),Object(c["createVNode"])(b),e.top>200?(Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:0,class:"back-top",size:"large",icon:e.CaretTop,circle:"",onClick:e.backTop},null,8,["icon","onClick"])):Object(c["createCommentVNode"])("",!0)]})),_:1},8,["onScroll"])]})),_:1},8,["locale"])}var s=n("3ef4"),i=n("bf4f"),u=n("3ef0"),d=n.n(u),b=(n("2c92"),n("26f5"),n("0388")),f=n("def7"),m={class:"navbar"},p={class:"navbar-content"},j=["src"],O={class:"navbar-link navbar-noright-link"},g=Object(c["createTextVNode"])("首页"),h={key:0},k=Object(c["createTextVNode"])("消息"),v=Object(c["createTextVNode"])("消息"),C={key:1},N=Object(c["createTextVNode"])("收藏"),y=Object(c["createTextVNode"])("GitHub仓库"),V={key:2},E=Object(c["createTextVNode"])("登录"),x={key:3},B=Object(c["createTextVNode"])("退出");function _(e,t,n,a,o,r){var l=f["a"],s=b["a"];return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",m,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("span",{class:"navbar-logo",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.gotoIndex&&e.gotoIndex.apply(e,t)})},[Object(c["createElementVNode"])("img",{src:e.logoImage},null,8,j)]),Object(c["createElementVNode"])("span",O,[Object(c["createElementVNode"])("span",null,[Object(c["createVNode"])(l,{underline:!1,onClick:e.gotoIndex},{default:Object(c["withCtx"])((function(){return[g]})),_:1},8,["onClick"])]),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",h,[e.count>0?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,value:e.count,class:"badge-item"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{underline:!1,onClick:e.gotoMessage},{default:Object(c["withCtx"])((function(){return[k]})),_:1},8,["onClick"])]})),_:1},8,["value"])):(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:1,underline:!1,onClick:e.gotoMessage},{default:Object(c["withCtx"])((function(){return[v]})),_:1},8,["onClick"]))])):Object(c["createCommentVNode"])("",!0),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",C,[Object(c["createVNode"])(l,{underline:!1,onClick:e.gotoCollect},{default:Object(c["withCtx"])((function(){return[N]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,[Object(c["createVNode"])(l,{underline:!1,href:"https://github.com/guoqirong/vue3-cnode",target:"_blank"},{default:Object(c["withCtx"])((function(){return[y]})),_:1})]),""===e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",V,[Object(c["createVNode"])(l,{underline:!1,onClick:e.gotoLogin},{default:Object(c["withCtx"])((function(){return[E]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0),""!==e.token?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",x,[Object(c["createVNode"])(l,{underline:!1,onClick:e.logout},{default:Object(c["withCtx"])((function(){return[B]})),_:1},8,["onClick"])])):Object(c["createCommentVNode"])("",!0)])])])}var w=n("5502"),D=n("6c02"),S=n("b32d"),L=n("1d11"),T=Object(c["defineComponent"])({name:"HeaderComp",components:{ElLink:f["a"],ElBadge:b["a"]},setup:function(){var e=Object(w["b"])(),t=e.state,a=e.commit,o=Object(D["c"])(),r=Object(D["d"])(),l=Object(S["a"])(),s=l.adornUrl,i=l.httpRequest,u=Object(c["computed"])((function(){return n("e347")})),d=Object(c["computed"])((function(){return t.user.token})),b=function(){"/index"!==o.path&&r.push({path:"/"})};L["emitter"].on("read-msg",(function(){m()}));var f=Object(c["ref"])(0);Object(c["watch"])(d,(function(e){e?m():a("user/updateUserData",{})}));var m=function(){i({url:s("/api/v1/message/count"),method:"get",params:{accesstoken:d.value||""}}).then((function(e){var t=e.data;f.value=t.data})).catch((function(e){console.error(e)}))},p=function(){"/message"!==o.path&&r.push({path:"/message"})},j=function(){"/collect"!==o.path&&r.push({path:"/collect"})},O=function(){"/login"!==o.path&&r.push({path:"/login"})},g=function(){localStorage.removeItem("loginname"),localStorage.removeItem("token"),a("user/updateToken",""),a("user/updateSimpleUserData",{}),b()};return{logoImage:u,token:d,gotoIndex:b,count:f,gotoMessage:p,gotoCollect:j,gotoLogin:O,logout:g}}}),M=(n("491b"),n("6b0d")),U=n.n(M);const q=U()(T,[["render",_]]);var I=q,P={class:"body-footer"},R=Object(c["createElementVNode"])("div",{class:"footer-content"},[Object(c["createElementVNode"])("div",null,"CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。"),Object(c["createElementVNode"])("div",null,"CNode 社区版权归xxxxxx所有")],-1),F=[R];function A(e,t,n,a,o,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",P,F)}var H=Object(c["defineComponent"])({name:"FooterComp"});n("b54e");const z=U()(H,[["render",A]]);var $=z,Q=Object(c["defineComponent"])({components:{HeaderComp:I,FooterComp:$,ElConfigProvider:a["a"],ElScrollbar:o["a"],ElButton:r["a"]},setup:function(){var e=Object(S["a"])(),t=e.isLoading,n=e.adornUrl,a=e.httpRequest,o=Object(w["b"])(),r=o.state,l=o.commit,u=Object(c["computed"])((function(){return r.user.token}));Object(c["watch"])(u,(function(e){e?b(r.user.simpleUserData.loginname):l("user/updateUserData",{})})),Object(c["watch"])(t,(function(e){l("user/updateLoading",e)}));var b=function(e){a({url:n("/api/v1/user/"+e),method:"get"}).then((function(e){var t=e.data;l("user/updateUserData",t.data)})).catch((function(e){s["a"].error("请求失败"),console.error(e)}))};Object(c["onMounted"])((function(){l("user/updateSimpleUserData",{loginname:localStorage.getItem("loginname")||""}),l("user/updateToken",localStorage.getItem("token")||"")}));var f=Object(c["ref"])(0),m=Object(c["ref"])(),p=function(e){f.value=e.scrollTop},j=function(){var e;null===(e=m.value)||void 0===e||e.setScrollTop(0)};return{locale:d.a,top:f,scrollbarRef:m,scroll:p,CaretTop:i["a"],backTop:j}}});n("8ead");const Y=U()(Q,[["render",l]]);var G=Y,J=n("afbc"),K=n("0613");Object(c["createApp"])(G).use(K["a"]).use(J["a"]).mount("#app")},d257:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s}));var c=n("93f3"),a=function(e,t){var n=new Date(e);if(""!==e&&!n.getFullYear())return console.error("时间格式错误！"),"";/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var c={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var a in c)if(new RegExp("("+a+")").test(t)){var r=c[a]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?r:o(r))}return t},o=function(e){return("00"+e).substr(e.length)},r=function(e,t){var n,a;return e?"置顶":null!==(a=null===(n=c["a"].find((function(e){return e.key===t})))||void 0===n?void 0:n.name)&&void 0!==a?a:"未知"},l=function(e,t){return void 0!==e&&void 0!==t?parseInt(String(Math.random()*(t-e+1)+e),10):void 0!==e?parseInt(String(Math.random()*e+1),10):0},s=function(e){var t=e.replace(/&lt;/g,"<");return t.replace(/&gt;/g,">")}},d593:function(e,t,n){},e347:function(e,t,n){e.exports=n.p+"img/logo.e2b40b75.svg"},e75a:function(e,t,n){},fe05:function(e,t,n){"use strict";n("e75a")}});
//# sourceMappingURL=app.31c175e7.js.map