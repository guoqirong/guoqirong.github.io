(window["webpackJsonp_vue3-cnode"]=window["webpackJsonp_vue3-cnode"]||[]).push([["chunk-a35f6824"],{"06dd":function(e,t,n){"use strict";n("771d"),n("4ba3")},2580:function(e,t,n){},"3a90":function(e,t,n){"use strict";n("2580")},"3e9e":function(e,t,n){"use strict";n("771d"),n("e20d")},"4ba3":function(e,t,n){},"6d00":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("7a23"),c=n("54bb"),a=n("7bc7");const i={icon:{type:[String,Object],default:a["Back"]},title:String,content:{type:String,default:""}},r={back:()=>!0};var l=n("2711"),s=n("4cb3"),u=n("304f");const d=Object(o["defineComponent"])({name:"ElPageHeader",components:{ElIcon:c["a"]},props:i,emits:r,setup(e,{emit:t}){const{t:n}=Object(s["a"])(),o=Object(u["a"])("page-header");function c(){t("back")}return{handleClick:c,t:n,ns:o}}});function p(e,t,n,c,a,i){const r=Object(o["resolveComponent"])("el-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(e.ns.b())},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("left")),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[e.icon||e.$slots.icon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(e.ns.e("icon"))},[Object(o["renderSlot"])(e.$slots,"icon",{},()=>[e.icon?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.icon)))]),_:1})):Object(o["createCommentVNode"])("v-if",!0)])],2)):Object(o["createCommentVNode"])("v-if",!0),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("title"))},[Object(o["renderSlot"])(e.$slots,"title",{},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||e.t("el.pageHeader.title")),1)])],2)],2),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"content",{},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.content),1)])],2)],2)}var b=Object(l["a"])(d,[["render",p]]),f=n("0c24");const m=Object(f["a"])(b)},8248:function(e,t,n){"use strict";n.r(t);n("7aa1"),n("c49e"),n("7a64"),n("83b2"),n("809a"),n("3e9e"),n("797a"),n("06dd");var o=n("8c98"),c=n("d8e8"),a=n("bfd2"),i=n("4c02"),r=n("9caa"),l=n("ae7b"),s=n("cf2e"),u=n("6d00"),d=n("7a23"),p={class:"detail-body"},b=Object(d["createTextVNode"])("编辑话题"),f={class:"my-topic"},m={class:"topic-title"},j={class:"title-left"},O={class:"topic-title-desc"},v={class:"title-right"},g=["innerHTML"],h=Object(d["createElementVNode"])("span",{class:"card-replies-title"},"回复",-1),C={class:"replie-user-img"},k={class:"replie-title"},y={class:"replie-up"},N=["onClick"],V={key:0},w=["onClick"],S={class:"replie-desc"},x=["innerHTML"],E=Object(d["createTextVNode"])("回复"),B=Object(d["createTextVNode"])("取消"),_=Object(d["createElementVNode"])("span",{class:"card-replies-title"},"添加回复",-1),z=Object(d["createTextVNode"])("回复");function D(e,t,n,D,L,R){var T=u["a"],M=s["a"],P=l["a"],q=r["a"],I=i["a"],U=a["a"],F=Object(d["resolveComponent"])("editor"),A=c["b"],H=c["a"],K=Object(d["resolveComponent"])("user-info-comp"),$=Object(d["resolveComponent"])("client-qr-code-comp"),G=o["a"];return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",p,[Object(d["createVNode"])(G,null,{right:Object(d["withCtx"])((function(){var t;return[Object(d["createVNode"])(K,{title:"作者",authorData:null===(t=e.topic)||void 0===t?void 0:t.author,authorLoading:e.isLoading},null,8,["authorData","authorLoading"]),Object(d["createVNode"])($)]})),default:Object(d["withCtx"])((function(){var n,o;return[Object(d["createVNode"])(I,{class:"box-card"},{header:Object(d["withCtx"])((function(){var t;return[Object(d["createVNode"])(T,{class:"card-title",onBack:e.goBack,content:"话题详情"},null,8,["onBack"]),e.userName===(null===(t=e.topic)||void 0===t?void 0:t.author.loginname)?(Object(d["openBlock"])(),Object(d["createBlock"])(M,{key:0,class:"edit-topic-btn",type:"primary",onClick:e.editTopic},{default:Object(d["withCtx"])((function(){return[b]})),_:1},8,["onClick"])):Object(d["createCommentVNode"])("",!0)]})),default:Object(d["withCtx"])((function(){var t;return[Object(d["createElementVNode"])("span",f,[Object(d["createVNode"])(q,{class:"detail-skeleton",loading:e.isLoading,animated:"",rows:20},{default:Object(d["withCtx"])((function(){var t,n,o,c,a,i,r,l,s,u,p;return[Object(d["createElementVNode"])("div",m,[Object(d["createElementVNode"])("div",j,[Object(d["createElementVNode"])("div",{class:"topic-title-tab",style:Object(d["normalizeStyle"])({width:(null===(t=e.topic)||void 0===t?void 0:t.top)||"dev"!==(null===(n=e.topic)||void 0===n?void 0:n.tab)?"50px":""})},[Object(d["createVNode"])(P,{effect:"dark",type:(null===(o=e.topic)||void 0===o?void 0:o.top)?"danger":"success"},{default:Object(d["withCtx"])((function(){var t,n;return[Object(d["createTextVNode"])(Object(d["toDisplayString"])(e.getTopicTab(null===(t=e.topic)||void 0===t?void 0:t.top,null===(n=e.topic)||void 0===n?void 0:n.tab)),1)]})),_:1},8,["type"])],4),Object(d["createElementVNode"])("div",{class:"title-name",style:Object(d["normalizeStyle"])({width:(null===(c=e.topic)||void 0===c?void 0:c.top)||"dev"!==(null===(a=e.topic)||void 0===a?void 0:a.tab)?"calc(100% - 50px)":""})},Object(d["toDisplayString"])(null===(i=e.topic)||void 0===i?void 0:i.title),5),Object(d["createElementVNode"])("div",O,[Object(d["createElementVNode"])("span",null,Object(d["toDisplayString"])("● "+e.formatDate((null===(r=e.topic)||void 0===r?void 0:r.create_at)||"","yyyy-MM-dd")),1),Object(d["createElementVNode"])("span",null,Object(d["toDisplayString"])("● "+((null===(l=e.topic)||void 0===l?void 0:l.author)&&(null===(s=e.topic)||void 0===s?void 0:s.author.loginname)?null===(u=e.topic)||void 0===u?void 0:u.author.loginname:"")),1)])]),Object(d["createElementVNode"])("div",v,[e.token?(Object(d["openBlock"])(),Object(d["createBlock"])(M,{key:0,circle:"",plain:"",size:"large",type:"warning",icon:(null===(p=e.topic)||void 0===p?void 0:p.is_collect)?e.StarFilled:e.Star,onClick:e.collectClick},null,8,["icon","onClick"])):Object(d["createCommentVNode"])("",!0)])])]})),_:1},8,["loading"]),Object(d["createElementVNode"])("div",{class:"topic-content",innerHTML:null===(t=e.topic)||void 0===t?void 0:t.content},null,8,g)])]})),_:1}),(null===(n=e.topic)||void 0===n?void 0:n.replies)&&(null===(o=e.topic.replies)||void 0===o?void 0:o.length)>0?(Object(d["openBlock"])(),Object(d["createBlock"])(I,{key:0,class:"box-card"},{header:Object(d["withCtx"])((function(){return[h]})),default:Object(d["withCtx"])((function(){var t;return[(Object(d["openBlock"])(!0),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(null===(t=e.topic)||void 0===t?void 0:t.replies,(function(t,n){return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",{key:n,class:"replie-item"},[Object(d["createElementVNode"])("div",C,[Object(d["createVNode"])(U,{shape:"square",size:40,src:t.author.avatar_url},null,8,["src"])]),Object(d["createElementVNode"])("div",k,Object(d["toDisplayString"])(t.author.loginname+"回复了您的话题"),1),Object(d["createElementVNode"])("div",y,[Object(d["createElementVNode"])("div",{class:"icon up-icon",onClick:function(n){return e.likeAndUnlike(t.id)}},null,8,N),t.ups.length?(Object(d["openBlock"])(),Object(d["createElementBlock"])("span",V,Object(d["toDisplayString"])(t.ups.length),1)):Object(d["createCommentVNode"])("",!0)]),Object(d["createElementVNode"])("div",{class:"icon replie-icon",onClick:function(t){return e.changeRepliceItemState(n)}},null,8,w),Object(d["createElementVNode"])("div",S,Object(d["toDisplayString"])(e.formatDate(t.create_at,"yyyy-MM-dd")),1),Object(d["createElementVNode"])("div",{class:"replie-content",innerHTML:null===t||void 0===t?void 0:t.content},null,8,x),t.isReplie?(Object(d["openBlock"])(),Object(d["createBlock"])(H,{key:0,ref_for:!0,ref:function(e){return t.formRef=e},class:"replies-form replie-edit-wrapper",model:t,rules:e.rules,"label-width":"0"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(A,{label:"",prop:"replieContent"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(F,{"api-key":"mh2f2ffdlr2zzaky3yk52tx8rtxrxnbt1a6p7p7jx96hy70r",init:e.init,modelValue:t.replieContent,"onUpdate:modelValue":function(e){return t.replieContent=e}},null,8,["init","modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(d["createVNode"])(A,{class:"is-last"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(M,{type:"primary",onClick:function(n){return e.replieTopic(t.formRef,t.id,t.replieContent)}},{default:Object(d["withCtx"])((function(){return[E]})),_:2},1032,["onClick"]),Object(d["createVNode"])(M,{onClick:function(t){return e.changeRepliceItemState(n)}},{default:Object(d["withCtx"])((function(){return[B]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1032,["model","rules"])):Object(d["createCommentVNode"])("",!0)])})),128))]})),_:1})):Object(d["createCommentVNode"])("",!0),Object(d["createVNode"])(I,{class:"box-card"},{header:Object(d["withCtx"])((function(){return[_]})),default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(H,{ref:"form",class:"replies-form",model:e.topicReplieForm,rules:e.rules,"label-width":"0"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(A,{label:"",prop:"content"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(F,{"api-key":"mh2f2ffdlr2zzaky3yk52tx8rtxrxnbt1a6p7p7jx96hy70r",init:e.init,modelValue:e.topicReplieForm.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.topicReplieForm.content=t})},null,8,["init","modelValue"])]})),_:1}),Object(d["createVNode"])(A,{class:"is-last"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(M,{type:"primary",onClick:t[1]||(t[1]=function(t){return e.replieTopic(e.form)})},{default:Object(d["withCtx"])((function(){return[z]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]})),_:1})])}var L=n("9ab4"),R=n("1420"),T=n("7780"),M=n("b32d"),P=n("6c02"),q=n("5502"),I=n("3ef4"),U=n("9ee5");const F=Object(d["defineComponent"])({name:"Star"}),A={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},H=Object(d["createElementVNode"])("path",{fill:"currentColor",d:"M512 747.84l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 01-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 01128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 01126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0139.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 01-102.144 74.24L512 820.096l-198.4 104.32z"},null,-1),K=[H];function $(e,t,n,o,c,a){return Object(d["openBlock"])(),Object(d["createElementBlock"])("svg",A,K)}var G=Object(U["a"])(F,[["render",$]]);const J=Object(d["defineComponent"])({name:"StarFilled"}),Y={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Q=Object(d["createElementVNode"])("path",{fill:"currentColor",d:"M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"},null,-1),W=[Q];function X(e,t,n,o,c,a){return Object(d["openBlock"])(),Object(d["createElementBlock"])("svg",Y,W)}var Z=Object(U["a"])(J,[["render",X]]),ee=n("d257"),te=n("ca72"),ne=Object(d["defineComponent"])({components:{ElCard:i["a"],ElPageHeader:u["a"],ElButton:s["a"],ElAvatar:a["a"],ElSkeleton:r["a"],ElForm:c["a"],ElFormItem:c["b"],Editor:te["a"],PageWrapper:o["a"],UserInfoComp:R["a"],ClientQrCodeComp:T["a"]},setup:function(){var e,t=this,n=Object(P["c"])(),o=Object(q["b"])().state,c={height:200,width:"100%",language_url:(null!==(e=o.grobal.entryUrl)&&void 0!==e?e:".")+"/tinymce-langs/zh_CN.js",language:"zh_CN",browser_spellcheck:!0,branding:!1,elementpath:!0,statusbar:!0,paste_data_images:!0,menubar:!1,fontsize_formats:"14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times",file_picker_types:"image",images_upload_credentials:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen"},a=Object(d["computed"])((function(){return o.user.simpleUserData.loginname})),i=Object(M["a"])(),r=i.isLoading,l=i.adornUrl,s=i.httpRequest,u=Object(d["ref"])(),p=function(){s({url:l("/api/v1/topic/"+n.query.id),method:"get",params:{mdrender:!0,accesstoken:o.user.token||""}}).then((function(e){var t=e.data;t.data.content=Object(ee["a"])(t.data.content),t.data.replies.forEach((function(e){e.content=Object(ee["a"])(e.content),e.isReplie=!1,e.formRef=Object(d["ref"])(),e.replieContent=""})),u.value=t.data})).catch((function(e){I["a"].error("请求失败"),console.error(e)}))};p();var b=function(){n.query.listParm?Object(ee["e"])({name:"index",params:{listParm:String(n.query.listParm)}}):n.query.userName?Object(ee["e"])("/user/"+n.query.userName):Object(ee["e"])("/collect")},f=function(){var e,t;n.query.userName?Object(ee["e"])({path:"/edit-topic/"+(null===(e=u.value)||void 0===e?void 0:e.id),query:{userName:n.query.userName}}):Object(ee["e"])({path:"/edit-topic/"+(null===(t=u.value)||void 0===t?void 0:t.id),query:{listParm:String(n.query.listParm)}})},m=Object(M["a"])().httpRequest,j=function(){u.value&&u.value.is_collect?v():O()},O=function(){m({url:l("/api/v1/topic_collect/collect"),method:"post",data:{topic_id:u.value&&u.value.id,accesstoken:localStorage.getItem("token")||""}}).then((function(){u.value&&(u.value.is_collect=!0),I["a"].success("收藏成功")})).catch((function(e){I["a"].error("请求失败"),console.error(e)}))},v=function(){m({url:l("/api/v1/topic_collect/de_collect"),method:"post",data:{topic_id:u.value&&u.value.id,accesstoken:localStorage.getItem("token")||""}}).then((function(){u.value&&(u.value.is_collect=!1),I["a"].success("取消收藏成功")})).catch((function(e){I["a"].error("请求失败"),console.error(e)}))},g=Object(M["a"])().httpRequest,h=function(e){g({url:l("/api/v1/reply/"+e+"/ups"),method:"post",data:{accesstoken:localStorage.getItem("token")||""}}).then((function(e){var t=e.data;"up"===t.action?I["a"].success("点赞成功"):I["a"].success("取消点赞成功"),p()})).catch((function(e){var t=e.response.data;t.error_msg?I["a"].error(t.error_msg):(I["a"].error("请求失败"),console.error(e))}))},C=Object(d["ref"])(),k=Object(d["reactive"])({id:void 0,content:""}),y=Object(d["reactive"])({content:[{required:!0,message:"请输入内容",trigger:"blur"}],replieContent:[{required:!0,message:"请输入内容",trigger:"blur"}]}),N=Object(M["a"])().httpRequest,V=function(e,n,o){return Object(L["b"])(t,void 0,void 0,(function(){return Object(L["c"])(this,(function(t){switch(t.label){case 0:return e?[4,e.validate((function(e,t){e?w(n,o):console.log("error submit!",t)}))]:[2];case 1:return t.sent(),[2]}}))}))},w=function(e,t){var n;N({url:l("/api/v1/topic/"+(null===(n=u.value)||void 0===n?void 0:n.id)+"/replies"),method:"post",data:{accesstoken:localStorage.getItem("token")||"",content:null!==t&&void 0!==t?t:k.content,reply_id:e}}).then((function(){k.content="",p()})).catch((function(e){I["a"].error("请求失败"),console.error(e)}))},S=function(e){var t;if(u.value){var n=null===(t=u.value)||void 0===t?void 0:t.replies,o=n[e].author.loginname;n[e].isReplie=!n[e].isReplie,n[e].replieContent=n[e].isReplie?'<div class="markdown-text"><p><a href="/user/'+o+'">@'+o+"</a>&nbsp;</p></div>":"",u.value=Object(L["a"])(Object(L["a"])({},u.value),{replies:n})}};return{userName:a,editTopic:f,topic:u,isLoading:r,token:o.user.token,Star:G,StarFilled:Z,formatDate:ee["b"],getTopicTab:ee["c"],goBack:b,collectClick:j,likeAndUnlike:h,init:c,form:C,topicReplieForm:k,rules:y,replieTopic:V,changeRepliceItemState:S,replieTopicRequest:w}}}),oe=(n("3a90"),n("6b0d")),ce=n.n(oe);const ae=ce()(ne,[["render",D]]);t["default"]=ae},"885a":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n("cb8d");const c=Object(o["b"])({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:["large","default","small"]},effect:{type:String,values:["dark","light","plain"],default:"light"}}),a={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent}},ae7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("7a23"),c=n("54bb"),a=n("7bc7"),i=n("885a"),r=n("2711"),l=n("c23a"),s=n("304f");const u=Object(o["defineComponent"])({name:"ElTag",components:{ElIcon:c["a"],Close:a["Close"]},props:i["b"],emits:i["a"],setup(e,{emit:t}){const n=Object(l["b"])(),c=Object(s["a"])("tag"),a=Object(o["computed"])(()=>{const{type:t,hit:o,effect:a,closable:i}=e;return[c.b(),c.is("closable",i),c.m(t),c.m(n.value),c.m(a),c.is("hit",o)]}),i=e=>{e.stopPropagation(),t("close",e)},r=e=>{t("click",e)};return{ns:c,classes:a,handleClose:i,handleClick:r}}});function d(e,t,n,c,a,i){const r=Object(o["resolveComponent"])("close"),l=Object(o["resolveComponent"])("el-icon");return e.disableTransitions?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Transition"],{key:1,name:e.ns.namespace.value+"-zoom-in-center"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.classes),style:Object(o["normalizeStyle"])({backgroundColor:e.color}),onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:Object(o["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r)]),_:1},8,["class","onClick"])):Object(o["createCommentVNode"])("v-if",!0)],6)]),_:3},8,["name"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:0,class:Object(o["normalizeClass"])(e.classes),style:Object(o["normalizeStyle"])({backgroundColor:e.color}),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:Object(o["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r)]),_:1},8,["class","onClick"])):Object(o["createCommentVNode"])("v-if",!0)],6))}var p=Object(r["a"])(u,[["render",d]]),b=n("0c24");const f=Object(b["a"])(p)},c4a9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var o=function(){return"undefined"!==typeof window?window:e},c=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n("c8ba"))},ca72:function(e,t,n){"use strict";var o=n("7a23"),c=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(e){return-1!==c.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},i=function(e,t,n){Object.keys(t).filter(a).forEach((function(o){var c=t[o];"function"===typeof c&&("onInit"===o?c(e,n):n.on(o.substring(2),(function(e){return c(e,n)})))}))},r=function(e,t,n,c){var a=e.modelEvents?e.modelEvents:null,i=Array.isArray(a)?a.join(" "):a;Object(o["watch"])(c,(function(t,o){n&&"string"===typeof t&&t!==o&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(i||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))},l=function(e,t,n,o,c,a){o.setContent(a()),n.attrs["onUpdate:modelValue"]&&r(t,n,o,c),i(e,n.attrs,o)},s=0,u=function(e){var t=Date.now(),n=Math.floor(1e9*Math.random());return s++,e+"_"+n+s+String(t)},d=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},p=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},b=function(e,t){return p(e).concat(p(t))},f=function(e){return null===e||void 0===e},m=function(){return{listeners:[],scriptId:u("tiny-script"),scriptLoaded:!1}},j=function(){var e=m(),t=function(e,t,n,o){var c=t.createElement("script");c.referrerPolicy="origin",c.type="application/javascript",c.id=e,c.src=n;var a=function(){c.removeEventListener("load",a),o()};c.addEventListener("load",a),t.head&&t.head.appendChild(c)},n=function(n,o,c){e.scriptLoaded?c():(e.listeners.push(c),n.getElementById(e.scriptId)||t(e.scriptId,n,o,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},o=function(){e=m()};return{load:n,reinitialize:o}},O=j(),v=n("c4a9"),g={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},h=function(){return h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var c in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},h.apply(this,arguments)},C=function(e,t,n,o){return e(o||"div",{id:t,ref:n})},k=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},y=Object(o["defineComponent"])({props:g,setup:function(e,t){var n=e.init?h({},e.init):{},c=Object(o["toRefs"])(e),a=c.disabled,i=c.modelValue,r=c.tagName,s=Object(o["ref"])(null),p=null,m=e.id||u("tiny-vue"),j=e.init&&e.init.inline||e.inline,g=!!t.attrs["onUpdate:modelValue"],y=!0,N=e.initialValue?e.initialValue:"",V="",w=function(e){return g?function(){return(null===i||void 0===i?void 0:i.value)?i.value:""}:function(){return e?N:V}},S=function(){var o=w(y),c=h(h({},n),{readonly:e.disabled,selector:"#"+m,plugins:b(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:j,setup:function(c){p=c,c.on("init",(function(n){return l(n,e,t,c,i,o)})),"function"===typeof n.setup&&n.setup(c)}});d(s.value)&&(s.value.style.visibility=""),Object(v["a"])().init(c),y=!1};Object(o["watch"])(a,(function(e){var t;null!==p&&("function"===typeof(null===(t=p.mode)||void 0===t?void 0:t.set)?p.mode.set(e?"readonly":"design"):p.setMode(e?"readonly":"design"))})),Object(o["watch"])(r,(function(e){var t;g||(V=p.getContent()),null===(t=Object(v["a"])())||void 0===t||t.remove(p),Object(o["nextTick"])((function(){return S()}))})),Object(o["onMounted"])((function(){if(null!==Object(v["a"])())S();else if(s.value&&s.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"5",n=e.apiKey?e.apiKey:"no-api-key",o=f(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;O.load(s.value.ownerDocument,o,S)}})),Object(o["onBeforeUnmount"])((function(){null!==Object(v["a"])()&&Object(v["a"])().remove(p)})),j||(Object(o["onActivated"])((function(){y||S()})),Object(o["onDeactivated"])((function(){var e;g||(V=p.getContent()),null===(e=Object(v["a"])())||void 0===e||e.remove(p)})));var x=function(e){var t;V=p.getContent(),null===(t=Object(v["a"])())||void 0===t||t.remove(p),n=h(h({},n),e),Object(o["nextTick"])((function(){return S()}))};return t.expose({rerender:x}),function(){return j?C(o["h"],m,s,e.tagName):k(o["h"],m,s)}}});t["a"]=y},e20d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-a35f6824.c38740b9.js.map