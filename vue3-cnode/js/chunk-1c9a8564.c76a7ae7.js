(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c9a8564"],{"0b3c":function(e,t,c){"use strict";c("a025")},"3ae0":function(e,t,c){"use strict";c.r(t);c("83b2");var n=c("4c02"),o=c("7a23"),a={class:"collect"},i={class:"lift-content"},r=Object(o["createElementVNode"])("span",{class:"card-title"},"我的收藏",-1),l={class:"right-content"};function s(e,t,c,s,d,u){var b=Object(o["resolveComponent"])("list-comp"),p=n["a"],f=Object(o["resolveComponent"])("user-info-comp"),m=Object(o["resolveComponent"])("client-qr-code-comp");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(p,{class:"box-card"},{header:Object(o["withCtx"])((function(){return[r]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(b,{isLoading:e.isLoading,listData:e.collect,onSeeDetail:e.seeDetail},null,8,["isLoading","listData","onSeeDetail"])])]})),_:1})]),Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(f),Object(o["createVNode"])(m)])])}var d=c("11ef"),u=c("7780"),b=c("1420"),p=c("b32d"),f=c("3ef4"),m=c("5502"),j=c("afbc"),O=Object(o["defineComponent"])({components:{ListComp:d["a"],ClientQrCodeComp:u["a"],UserInfoComp:b["a"]},setup:function(){var e=Object(m["b"])().state,t=Object(o["computed"])((function(){return e.user.simpleUserData})),c=Object(p["a"])(),n=c.isLoading,a=c.adornUrl,i=c.httpRequest,r=Object(o["ref"])([]),l=function(){t.value&&t.value.loginname?i({url:a("/api/v1/topic_collect/"+t.value.loginname),method:"get"}).then((function(e){var t=e.data;r.value=t.data})).catch((function(e){f["a"].error("请求失败"),console.error(e)})):j["a"].push("/index")};l();var s=function(e){j["a"].push({path:"/detail",query:{id:e}})};return{isLoading:n,collect:r,seeDetail:s}}}),v=(c("0b3c"),c("6b0d")),h=c.n(v);const C=h()(O,[["render",s]]);t["default"]=C},a025:function(e,t,c){}}]);
//# sourceMappingURL=chunk-1c9a8564.c76a7ae7.js.map