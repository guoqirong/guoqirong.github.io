(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c30bdc32"],{2580:function(e,t,c){},"3a90":function(e,t,c){"use strict";c("2580")},8248:function(e,t,c){"use strict";c.r(t);c("7aa1"),c("c49e"),c("7a64"),c("83b2"),c("809a"),c("3e9e"),c("797a"),c("06dd");var o=c("d8e8"),n=c("bfd2"),a=c("4c02"),i=c("9caa"),l=c("ae7b"),r=c("cf2e"),s=c("6d00"),d=c("7a23"),u={class:"detail-body"},p={class:"lift-content"},b=Object(d["createTextVNode"])("编辑话题"),m={class:"my-topic"},v={class:"topic-title"},j={class:"title-left"},O={class:"topic-title-desc"},f={class:"title-right"},h=["innerHTML"],g=Object(d["createElementVNode"])("span",{class:"card-replies-title"},"回复",-1),k={class:"replie-user-img"},C={class:"replie-title"},N={class:"replie-up"},y=["onClick"],V={key:0},x=["onClick"],w={class:"replie-desc"},E=["innerHTML"],_={key:0,class:"replie-edit-wapper"},B=Object(d["createTextVNode"])("回复"),S=Object(d["createTextVNode"])("取消"),L=Object(d["createElementVNode"])("span",{class:"card-replies-title"},"添加回复",-1),T=Object(d["createTextVNode"])("回复"),R={class:"right-content"};function q(e,t,c,q,z,D){var M,F,I,H=s["a"],P=r["a"],U=l["a"],A=i["a"],J=a["a"],Y=n["a"],Q=Object(d["resolveComponent"])("editor"),G=o["b"],K=o["a"],W=Object(d["resolveComponent"])("user-info-comp"),X=Object(d["resolveComponent"])("client-qr-code-comp");return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",u,[Object(d["createElementVNode"])("div",p,[Object(d["createVNode"])(J,{class:"box-card"},{header:Object(d["withCtx"])((function(){var t;return[Object(d["createVNode"])(H,{class:"card-title",onBack:e.goBack,content:"话题详情"},null,8,["onBack"]),e.userName===(null===(t=e.topic)||void 0===t?void 0:t.author.loginname)?(Object(d["openBlock"])(),Object(d["createBlock"])(P,{key:0,class:"edit-topic-btn",type:"primary",onClick:e.editTopic},{default:Object(d["withCtx"])((function(){return[b]})),_:1},8,["onClick"])):Object(d["createCommentVNode"])("",!0)]})),default:Object(d["withCtx"])((function(){var t;return[Object(d["createElementVNode"])("span",m,[Object(d["createVNode"])(A,{class:"detail-skeleton",loading:e.isLoading,animated:"",rows:20},{default:Object(d["withCtx"])((function(){var t,c,o,n,a,i,l,r,s,u,p;return[Object(d["createElementVNode"])("div",v,[Object(d["createElementVNode"])("div",j,[Object(d["createElementVNode"])("div",{class:"topic-title-tab",style:Object(d["normalizeStyle"])({width:(null===(t=e.topic)||void 0===t?void 0:t.top)||"dev"!==(null===(c=e.topic)||void 0===c?void 0:c.tab)?"50px":""})},[Object(d["createVNode"])(U,{effect:"dark",type:(null===(o=e.topic)||void 0===o?void 0:o.top)?"danger":"success"},{default:Object(d["withCtx"])((function(){var t,c;return[Object(d["createTextVNode"])(Object(d["toDisplayString"])(e.getTopicTab(null===(t=e.topic)||void 0===t?void 0:t.top,null===(c=e.topic)||void 0===c?void 0:c.tab)),1)]})),_:1},8,["type"])],4),Object(d["createElementVNode"])("div",{class:"title-name",style:Object(d["normalizeStyle"])({width:(null===(n=e.topic)||void 0===n?void 0:n.top)||"dev"!==(null===(a=e.topic)||void 0===a?void 0:a.tab)?"calc(100% - 50px)":""})},Object(d["toDisplayString"])(null===(i=e.topic)||void 0===i?void 0:i.title),5),Object(d["createElementVNode"])("div",O,[Object(d["createElementVNode"])("span",null,Object(d["toDisplayString"])("● "+e.formatDate((null===(l=e.topic)||void 0===l?void 0:l.create_at)||"","yyyy-MM-dd")),1),Object(d["createElementVNode"])("span",null,Object(d["toDisplayString"])("● "+((null===(r=e.topic)||void 0===r?void 0:r.author)&&(null===(s=e.topic)||void 0===s?void 0:s.author.loginname)?null===(u=e.topic)||void 0===u?void 0:u.author.loginname:"")),1)])]),Object(d["createElementVNode"])("div",f,[e.token?(Object(d["openBlock"])(),Object(d["createBlock"])(P,{key:0,circle:"",plain:"",size:"large",type:"warning",icon:(null===(p=e.topic)||void 0===p?void 0:p.is_collect)?e.StarFilled:e.Star,onClick:e.collectClick},null,8,["icon","onClick"])):Object(d["createCommentVNode"])("",!0)])])]})),_:1},8,["loading"]),Object(d["createElementVNode"])("div",{class:"topic-content",innerHTML:null===(t=e.topic)||void 0===t?void 0:t.content},null,8,h)])]})),_:1}),(null===(M=e.topic)||void 0===M?void 0:M.replies)&&(null===(F=e.topic.replies)||void 0===F?void 0:F.length)>0?(Object(d["openBlock"])(),Object(d["createBlock"])(J,{key:0,class:"box-card"},{header:Object(d["withCtx"])((function(){return[g]})),default:Object(d["withCtx"])((function(){var t;return[(Object(d["openBlock"])(!0),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(null===(t=e.topic)||void 0===t?void 0:t.replies,(function(t,c){return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",{key:c,class:"replie-item"},[Object(d["createElementVNode"])("div",k,[Object(d["createVNode"])(Y,{shape:"square",size:40,src:t.author.avatar_url},null,8,["src"])]),Object(d["createElementVNode"])("div",C,Object(d["toDisplayString"])(t.author.loginname+"回复了您的话题"),1),Object(d["createElementVNode"])("div",N,[Object(d["createElementVNode"])("div",{class:"icon up-icon",onClick:function(c){return e.likeAndUnlike(t.id)}},null,8,y),t.ups.length?(Object(d["openBlock"])(),Object(d["createElementBlock"])("span",V,Object(d["toDisplayString"])(t.ups.length),1)):Object(d["createCommentVNode"])("",!0)]),Object(d["createElementVNode"])("div",{class:"icon replie-icon",onClick:function(t){return e.changeRepliceItemState(c)}},null,8,x),Object(d["createElementVNode"])("div",w,Object(d["toDisplayString"])(e.formatDate(t.create_at,"yyyy-MM-dd")),1),Object(d["createElementVNode"])("div",{class:"replie-content",innerHTML:null===t||void 0===t?void 0:t.content},null,8,E),t.isReplie?(Object(d["openBlock"])(),Object(d["createElementBlock"])("div",_,[Object(d["createVNode"])(Q,{"api-key":"mh2f2ffdlr2zzaky3yk52tx8rtxrxnbt1a6p7p7jx96hy70r",init:e.init,modelValue:t.replieContent,"onUpdate:modelValue":function(e){return t.replieContent=e}},null,8,["init","modelValue","onUpdate:modelValue"]),Object(d["createVNode"])(P,{type:"primary",onClick:function(c){return e.replieTopicRequest(t.id,t.replieContent)}},{default:Object(d["withCtx"])((function(){return[B]})),_:2},1032,["onClick"]),Object(d["createVNode"])(P,{onClick:function(t){return e.changeRepliceItemState(c)}},{default:Object(d["withCtx"])((function(){return[S]})),_:2},1032,["onClick"])])):Object(d["createCommentVNode"])("",!0)])})),128))]})),_:1})):Object(d["createCommentVNode"])("",!0),Object(d["createVNode"])(J,{class:"box-card"},{header:Object(d["withCtx"])((function(){return[L]})),default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(K,{ref:"form",class:"replies-form",model:e.topicReplieForm,rules:e.rules,"label-width":"0"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(G,{label:"",prop:"content"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(Q,{"api-key":"mh2f2ffdlr2zzaky3yk52tx8rtxrxnbt1a6p7p7jx96hy70r",init:e.init,modelValue:e.topicReplieForm.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.topicReplieForm.content=t})},null,8,["init","modelValue"])]})),_:1}),Object(d["createVNode"])(G,{class:"is-last"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(P,{type:"primary",onClick:t[1]||(t[1]=function(t){return e.replieTopic(e.form)})},{default:Object(d["withCtx"])((function(){return[T]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})]),Object(d["createElementVNode"])("div",R,[Object(d["createVNode"])(W,{title:"作者",authorData:null===(I=e.topic)||void 0===I?void 0:I.author,authorLoading:e.isLoading},null,8,["authorData","authorLoading"]),Object(d["createVNode"])(X)])])}var z=c("9ab4"),D=c("1420"),M=c("7780"),F=c("b32d"),I=c("6c02"),H=c("5502"),P=c("3ef4"),U=c("9ee5");const A=Object(d["defineComponent"])({name:"Star"}),J={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Y=Object(d["createElementVNode"])("path",{fill:"currentColor",d:"M512 747.84l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 01-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 01128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 01126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0139.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 01-102.144 74.24L512 820.096l-198.4 104.32z"},null,-1),Q=[Y];function G(e,t,c,o,n,a){return Object(d["openBlock"])(),Object(d["createElementBlock"])("svg",J,Q)}var K=Object(U["a"])(A,[["render",G]]);const W=Object(d["defineComponent"])({name:"StarFilled"}),X={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Z=Object(d["createElementVNode"])("path",{fill:"currentColor",d:"M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"},null,-1),$=[Z];function ee(e,t,c,o,n,a){return Object(d["openBlock"])(),Object(d["createElementBlock"])("svg",X,$)}var te=Object(U["a"])(W,[["render",ee]]),ce=c("d257"),oe=c("ca72"),ne=Object(d["defineComponent"])({components:{ElCard:a["a"],ElPageHeader:s["a"],ElButton:r["a"],ElAvatar:n["a"],ElSkeleton:i["a"],ElForm:o["a"],ElFormItem:o["b"],Editor:oe["a"],UserInfoComp:D["a"],ClientQrCodeComp:M["a"]},setup:function(){var e=this,t=Object(I["c"])(),c=Object(I["d"])(),o=Object(H["b"])().state,n={height:200,width:"100%",language_url:"/tinymce-langs/zh_CN.js",language:"zh_CN",browser_spellcheck:!0,branding:!1,elementpath:!0,statusbar:!0,paste_data_images:!0,menubar:!1,fontsize_formats:"14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times",file_picker_types:"image",images_upload_credentials:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen"},a=Object(d["computed"])((function(){return o.user.simpleUserData.loginname})),i=Object(F["a"])(),l=i.isLoading,r=i.adornUrl,s=i.httpRequest,u=Object(d["ref"])(),p=function(){s({url:r("/api/v1/topic/"+t.query.id),method:"get",params:{mdrender:!0,accesstoken:o.user.token||""}}).then((function(e){var t=e.data;t.data.content=Object(ce["a"])(t.data.content),t.data.replies.forEach((function(e){e.content=Object(ce["a"])(e.content),e.isReplie=!1,e.replieContent=""})),u.value=t.data})).catch((function(e){P["a"].error("请求失败"),console.error(e)}))};p();var b=function(){t.query.listParm?c.push({name:"index",params:{listParm:String(t.query.listParm)}}):t.query.userName?c.push("/user/"+t.query.userName):c.push("/collect")},m=function(){var e;c.push({path:"/edit-topic/"+(null===(e=u.value)||void 0===e?void 0:e.id),query:{listParm:String(t.query.listParm)}})},v=Object(F["a"])().httpRequest,j=function(){u.value&&u.value.is_collect?f():O()},O=function(){v({url:r("/api/v1/topic_collect/collect"),method:"post",data:{topic_id:u.value&&u.value.id,accesstoken:localStorage.getItem("token")||""}}).then((function(){u.value&&(u.value.is_collect=!0),P["a"].success("收藏成功")})).catch((function(e){P["a"].error("请求失败"),console.error(e)}))},f=function(){v({url:r("/api/v1/topic_collect/de_collect"),method:"post",data:{topic_id:u.value&&u.value.id,accesstoken:localStorage.getItem("token")||""}}).then((function(){u.value&&(u.value.is_collect=!1),P["a"].success("取消收藏成功")})).catch((function(e){P["a"].error("请求失败"),console.error(e)}))},h=Object(F["a"])().httpRequest,g=function(e){h({url:r("/api/v1/reply/"+e+"/ups"),method:"post",data:{accesstoken:localStorage.getItem("token")||""}}).then((function(e){var t=e.data;"up"===t.action?P["a"].success("点赞成功"):P["a"].success("取消点赞成功"),p()})).catch((function(e){var t=e.response.data;t.error_msg?P["a"].error(t.error_msg):(P["a"].error("请求失败"),console.error(e))}))},k=Object(d["ref"])(),C=Object(d["reactive"])({id:void 0,content:""}),N=Object(d["reactive"])({content:[{required:!0,message:"请输入内容",trigger:"blur"}]}),y=Object(F["a"])().httpRequest,V=function(t){return Object(z["b"])(e,void 0,void 0,(function(){return Object(z["c"])(this,(function(e){switch(e.label){case 0:return t?[4,t.validate((function(e,t){e?x():console.log("error submit!",t)}))]:[2];case 1:return e.sent(),[2]}}))}))},x=function(e,t){var c;y({url:r("/api/v1/topic/"+(null===(c=u.value)||void 0===c?void 0:c.id)+"/replies"),method:"post",data:{accesstoken:localStorage.getItem("token")||"",content:null!==t&&void 0!==t?t:C.content,reply_id:e}}).then((function(){C.content="",p()})).catch((function(e){P["a"].error("请求失败"),console.error(e)}))},w=function(e){var t;if(u.value){var c=null===(t=u.value)||void 0===t?void 0:t.replies,o=c[e].author.loginname;c[e].isReplie=!c[e].isReplie,c[e].replieContent=c[e].isReplie?'<div class="markdown-text"><p><a href="/user/'+o+'">@'+o+"</a>&nbsp;</p></div>":"",u.value=Object(z["a"])(Object(z["a"])({},u.value),{replies:c})}};return{userName:a,editTopic:m,topic:u,isLoading:l,token:o.user.token,Star:K,StarFilled:te,formatDate:ce["b"],getTopicTab:ce["c"],goBack:b,collectClick:j,likeAndUnlike:g,init:n,form:k,topicReplieForm:C,rules:N,replieTopic:V,changeRepliceItemState:w,replieTopicRequest:x}}}),ae=(c("3a90"),c("6b0d")),ie=c.n(ae);const le=ie()(ne,[["render",q]]);t["default"]=le}}]);
//# sourceMappingURL=chunk-c30bdc32.233eab2b.js.map