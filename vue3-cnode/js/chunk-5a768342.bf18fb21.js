(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a768342"],{"0845":function(e,t,a){"use strict";a("7199")},7199:function(e,t,a){},dc30:function(e,t,a){"use strict";a.r(t);a("83b2"),a("809a"),a("7a64"),a("0997");var c=a("4c02"),r=a("9caa"),n=a("bfd2"),s=a("7a23"),o={class:"user-info"},i={class:"lift-content"},l=Object(s["createElementVNode"])("span",{class:"card-title"},"基本信息",-1),u={class:"user-skeleton"},d={class:"user"},b={class:"user-img"},j={class:"user-name"},O={key:0,class:"user-score"},m=Object(s["createElementVNode"])("span",{class:"card-title"},"我的话题",-1),p=Object(s["createElementVNode"])("span",{class:"card-title"},"我的参与",-1),D={class:"right-content"};function f(e,t,a,f,N,h){var v=r["b"],V=n["a"],g=r["a"],C=c["a"],k=Object(s["resolveComponent"])("list-comp"),L=Object(s["resolveComponent"])("user-info-comp"),w=Object(s["resolveComponent"])("client-qr-code-comp");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",o,[Object(s["createElementVNode"])("div",i,[Object(s["createVNode"])(C,{class:"box-card user-base-info"},{header:Object(s["withCtx"])((function(){return[l]})),default:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("div",null,[Object(s["createVNode"])(g,{loading:e.isLoading,animated:""},{template:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("div",u,[Object(s["createVNode"])(v,{class:"skeleton-user-img"}),Object(s["createVNode"])(v,{class:"skeleton-user-name"}),Object(s["createVNode"])(v,{class:"skeleton-user-score"})])]})),default:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("div",d,[Object(s["createElementVNode"])("div",b,[(Object(s["openBlock"])(),Object(s["createBlock"])(V,{shape:"square",size:40,src:e.userData&&e.userData.avatar_url||"",key:e.userData&&e.userData.avatar_url||"",alt:e.userData&&e.userData.loginname||""},null,8,["src","alt"]))]),Object(s["createElementVNode"])("div",j,Object(s["toDisplayString"])(e.userData&&e.userData.loginname||""),1),e.userData&&e.userData.score?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",O,"积分："+Object(s["toDisplayString"])(e.userData&&e.userData.score||""),1)):Object(s["createCommentVNode"])("",!0)])]})),_:1},8,["loading"])])]})),_:1}),Object(s["createVNode"])(C,{class:"box-card"},{header:Object(s["withCtx"])((function(){return[m]})),default:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("div",null,[Object(s["createVNode"])(k,{isLoading:e.isLoading,isSimpleItem:"",listData:e.userData&&e.userData.recent_topics||[],onSeeDetail:e.seeDetail},null,8,["isLoading","listData","onSeeDetail"])])]})),_:1}),Object(s["createVNode"])(C,{class:"box-card"},{header:Object(s["withCtx"])((function(){return[p]})),default:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("div",null,[Object(s["createVNode"])(k,{isLoading:e.isLoading,isSimpleItem:"",listData:e.userData&&e.userData.recent_replies||[],isTopicsRepliesList:!1,onSeeDetail:e.seeDetail},null,8,["isLoading","listData","onSeeDetail"])])]})),_:1})]),Object(s["createElementVNode"])("div",D,[Object(s["createVNode"])(L,{authorData:e.userData,authorLoading:e.isLoading,isTopicsRepliesList:!1},null,8,["authorData","authorLoading"]),Object(s["createVNode"])(w)])])}var N=a("11ef"),h=a("7780"),v=a("1420"),V=a("b32d"),g=a("3ef4"),C=a("6c02"),k=Object(s["defineComponent"])({components:{ListComp:N["a"],ClientQrCodeComp:h["a"],UserInfoComp:v["a"]},setup:function(){var e=Object(C["c"])(),t=Object(C["d"])(),a=Object(V["a"])(),c=a.isLoading,r=a.adornUrl,n=a.httpRequest,o=Object(s["ref"])(),i=function(){n({url:r("/api/v1/user/"+e.params.userName),method:"get"}).then((function(e){var t=e.data;o.value=t.data})).catch((function(e){g["a"].error("请求失败"),console.error(e)}))};i();var l=function(a){t.push({path:"/detail",query:{id:a,userName:e.params.userName}})};return{isLoading:c,userData:o,seeDetail:l}}}),L=(a("0845"),a("6b0d")),w=a.n(L);const E=w()(k,[["render",f]]);t["default"]=E}}]);
//# sourceMappingURL=chunk-5a768342.bf18fb21.js.map