(window["webpackJsonp_vue3-cnode"]=window["webpackJsonp_vue3-cnode"]||[]).push([["chunk-288249eb"],{"01b1":function(e,t,n){"use strict";n("f05d")},"06dd":function(e,t,n){"use strict";n("771d"),n("4ba3")},"3e9e":function(e,t,n){"use strict";n("771d"),n("e20d")},"4ba3":function(e,t,n){},"6d00":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("7a23"),c=n("54bb"),a=n("7bc7");const i={icon:{type:[String,Object],default:a["Back"]},title:String,content:{type:String,default:""}},r={back:()=>!0};var l=n("2711"),s=n("4cb3"),u=n("304f");const d=Object(o["defineComponent"])({name:"ElPageHeader",components:{ElIcon:c["a"]},props:i,emits:r,setup(e,{emit:t}){const{t:n}=Object(s["a"])(),o=Object(u["a"])("page-header");function c(){t("back")}return{handleClick:c,t:n,ns:o}}});function b(e,t,n,c,a,i){const r=Object(o["resolveComponent"])("el-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(e.ns.b())},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("left")),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[e.icon||e.$slots.icon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(e.ns.e("icon"))},[Object(o["renderSlot"])(e.$slots,"icon",{},()=>[e.icon?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.icon)))]),_:1})):Object(o["createCommentVNode"])("v-if",!0)])],2)):Object(o["createCommentVNode"])("v-if",!0),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("title"))},[Object(o["renderSlot"])(e.$slots,"title",{},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||e.t("el.pageHeader.title")),1)])],2)],2),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"content",{},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.content),1)])],2)],2)}var f=Object(l["a"])(d,[["render",b]]),p=n("0c24");const m=Object(p["a"])(f)},"885a":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n("cb8d");const c=Object(o["b"])({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:["large","default","small"]},effect:{type:String,values:["dark","light","plain"],default:"light"}}),a={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent}},ae7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("7a23"),c=n("54bb"),a=n("7bc7"),i=n("885a"),r=n("2711"),l=n("c23a"),s=n("304f");const u=Object(o["defineComponent"])({name:"ElTag",components:{ElIcon:c["a"],Close:a["Close"]},props:i["b"],emits:i["a"],setup(e,{emit:t}){const n=Object(l["b"])(),c=Object(s["a"])("tag"),a=Object(o["computed"])(()=>{const{type:t,hit:o,effect:a,closable:i}=e;return[c.b(),c.is("closable",i),c.m(t),c.m(n.value),c.m(a),c.is("hit",o)]}),i=e=>{e.stopPropagation(),t("close",e)},r=e=>{t("click",e)};return{ns:c,classes:a,handleClose:i,handleClick:r}}});function d(e,t,n,c,a,i){const r=Object(o["resolveComponent"])("close"),l=Object(o["resolveComponent"])("el-icon");return e.disableTransitions?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Transition"],{key:1,name:e.ns.namespace.value+"-zoom-in-center"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.classes),style:Object(o["normalizeStyle"])({backgroundColor:e.color}),onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:Object(o["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r)]),_:1},8,["class","onClick"])):Object(o["createCommentVNode"])("v-if",!0)],6)]),_:3},8,["name"])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:0,class:Object(o["normalizeClass"])(e.classes),style:Object(o["normalizeStyle"])({backgroundColor:e.color}),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(e.ns.e("content"))},[Object(o["renderSlot"])(e.$slots,"default")],2),e.closable?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:Object(o["normalizeClass"])(e.ns.e("close")),onClick:e.handleClose},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r)]),_:1},8,["class","onClick"])):Object(o["createCommentVNode"])("v-if",!0)],6))}var b=Object(r["a"])(u,[["render",d]]),f=n("0c24");const p=Object(f["a"])(b)},b55f:function(e,t,n){"use strict";n.r(t);n("83b2"),n("809a"),n("7aa1"),n("797a"),n("c4aa"),n("c49e"),n("cc66"),n("10c7"),n("06dd");var o=n("8c98"),c=n("4c02"),a=n("9caa"),i=n("d8e8"),r=n("cf2e"),l=n("c349"),s=n("91c0"),u=n("6d00"),d=n("7a23"),b={class:"edit-topic-body"},f={class:"edit-topic"},p=Object(d["createTextVNode"])("提交");function m(e,t,n,m,j,O){var v=u["a"],g=s["a"],C=s["b"],h=i["b"],y=l["a"],k=Object(d["resolveComponent"])("editor"),S=r["a"],w=i["a"],V=a["a"],x=c["a"],N=Object(d["resolveComponent"])("user-info-comp"),B=Object(d["resolveComponent"])("client-qr-code-comp"),E=o["a"];return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",b,[Object(d["createVNode"])(E,null,{right:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(N,{isTopicsRepliesList:!1}),Object(d["createVNode"])(B)]})),default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(x,{class:"box-card"},{header:Object(d["withCtx"])((function(){var t;return[Object(d["createVNode"])(v,{class:"card-title",onBack:e.goBack,content:"addTopic"===(null===(t=e.route)||void 0===t?void 0:t.name)?"发布话题":"编辑话题"},null,8,["onBack","content"])]})),default:Object(d["withCtx"])((function(){return[Object(d["createElementVNode"])("span",f,[Object(d["createVNode"])(V,{class:"edit-skeleton",loading:e.isLoading,animated:"",rows:20},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(w,{ref:"form",class:"edit-form",model:e.topicForm,rules:e.rules,"label-width":"auto","label-position":"top"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(h,{label:"版块",prop:"tab"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(C,{modelValue:e.topicForm.tab,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.topicForm.tab=t}),placeholder:""},{default:Object(d["withCtx"])((function(){return[(Object(d["openBlock"])(!0),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(e.topicTypeList,(function(e){return Object(d["openBlock"])(),Object(d["createBlock"])(g,{key:e.key,label:e.name,value:e.key},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(d["createVNode"])(h,{label:"标题",prop:"title"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(y,{modelValue:e.topicForm.title,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.topicForm.title=t})},null,8,["modelValue"])]})),_:1}),Object(d["createVNode"])(h,{label:"内容",prop:"content"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(k,{"api-key":"mh2f2ffdlr2zzaky3yk52tx8rtxrxnbt1a6p7p7jx96hy70r",init:e.init,modelValue:e.topicForm.content,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.topicForm.content=t})},null,8,["init","modelValue"])]})),_:1}),Object(d["createVNode"])(h,{class:"is-last"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(S,{type:"primary",loading:e.IsSubmitLoading,onClick:t[3]||(t[3]=function(t){return e.onSubmit(e.form)})},{default:Object(d["withCtx"])((function(){return[p]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["loading"])])]})),_:1})]})),_:1})])}var j=n("9ab4"),O=n("3ef4"),v=n("1420"),g=n("7780"),C=n("ca72"),h=n("93f3"),y=n("6c02"),k=n("b32d"),S=n("5502"),w=n("d257"),V=Object(d["defineComponent"])({components:{ElCard:c["a"],ElPageHeader:u["a"],ElSkeleton:a["a"],ElForm:i["a"],ElFormItem:i["b"],ElSelect:s["b"],ElButton:r["a"],Editor:C["a"],PageWrapper:o["a"],UserInfoComp:v["a"],ClientQrCodeComp:g["a"]},setup:function(){var e,t=this,n=Object(S["b"])().state,o=Object(d["computed"])((function(){return n.user.token})),c=Object(y["c"])(),a=Object(d["reactive"])({id:void 0,title:"",tab:"",content:""}),i=function(){"addTopic"===c.name?Object(w["e"])({name:"index",params:{listParm:String(c.query.listParm)}}):c.query.userName?Object(w["e"])({path:"/detail",query:{id:c.params.id,userName:c.query.userName}}):Object(w["e"])({path:"/detail",query:{id:c.params.id,listParm:c.query.listParm}})},r=Object(k["a"])(),l=r.isLoading,s=r.adornUrl,u=r.httpRequest,b=function(){u({url:s("/api/v1/topic/"+c.params.id),method:"get",params:{mdrender:!0,accesstoken:n.user.token||""}}).then((function(e){var t=e.data;t.data.content=Object(w["a"])(t.data.content),Object.assign(a,t.data)})).catch((function(e){O["a"].error("请求失败"),console.error(e)}))};c.params.id&&b();var f=Object(d["ref"])(),p=Object(d["reactive"])({title:[{required:!0,message:"请输入标题",trigger:"blur"}],tab:[{required:!0,message:"请选择版块",trigger:"change"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}),m={height:500,width:"100%",language_url:(null!==(e=n.grobal.entryUrl)&&void 0!==e?e:".")+"/tinymce-langs/zh_CN.js",language:"zh_CN",browser_spellcheck:!0,branding:!1,elementpath:!0,statusbar:!0,paste_data_images:!0,menubar:!1,fontsize_formats:"14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times",file_picker_types:"image",images_upload_credentials:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen"},v=function(e){return Object(j["b"])(t,void 0,void 0,(function(){return Object(j["c"])(this,(function(t){switch(t.label){case 0:return e?[4,e.validate((function(e,t){e?x():console.log("error submit!",t)}))]:[2];case 1:return t.sent(),[2]}}))}))},g=Object(k["a"])(),C=g.isLoading,V=g.httpRequest,x=function(){V({url:s("/api/v1/topics"+("addTopic"===c.name?"":"/update")),method:"post",data:{topic_id:a.id,title:a.title,content:a.content,tab:"dev",accesstoken:o.value}}).then((function(e){var t=e.data;(null===t||void 0===t?void 0:t.success)&&(O["a"].success("addTopic"===c.name?"发布成功":"修改成功"),i())})).catch((function(e){O["a"].error("addTopic"===c.name?"发布失败":"修改失败"),console.error(e)}))};return{goBack:i,route:c,isLoading:l,form:f,topicForm:a,rules:p,init:m,topicTypeList:h["a"].filter((function(e){return!["all","good"].includes(e.key)})),onSubmit:v,IsSubmitLoading:C}}}),x=(n("01b1"),n("6b0d")),N=n.n(x);const B=N()(V,[["render",m]]);t["default"]=B},c4a9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var o=function(){return"undefined"!==typeof window?window:e},c=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n("c8ba"))},ca72:function(e,t,n){"use strict";var o=n("7a23"),c=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(e){return-1!==c.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},i=function(e,t,n){Object.keys(t).filter(a).forEach((function(o){var c=t[o];"function"===typeof c&&("onInit"===o?c(e,n):n.on(o.substring(2),(function(e){return c(e,n)})))}))},r=function(e,t,n,c){var a=e.modelEvents?e.modelEvents:null,i=Array.isArray(a)?a.join(" "):a;Object(o["watch"])(c,(function(t,o){n&&"string"===typeof t&&t!==o&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(i||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))},l=function(e,t,n,o,c,a){o.setContent(a()),n.attrs["onUpdate:modelValue"]&&r(t,n,o,c),i(e,n.attrs,o)},s=0,u=function(e){var t=Date.now(),n=Math.floor(1e9*Math.random());return s++,e+"_"+n+s+String(t)},d=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},b=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},f=function(e,t){return b(e).concat(b(t))},p=function(e){return null===e||void 0===e},m=function(){return{listeners:[],scriptId:u("tiny-script"),scriptLoaded:!1}},j=function(){var e=m(),t=function(e,t,n,o){var c=t.createElement("script");c.referrerPolicy="origin",c.type="application/javascript",c.id=e,c.src=n;var a=function(){c.removeEventListener("load",a),o()};c.addEventListener("load",a),t.head&&t.head.appendChild(c)},n=function(n,o,c){e.scriptLoaded?c():(e.listeners.push(c),n.getElementById(e.scriptId)||t(e.scriptId,n,o,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},o=function(){e=m()};return{load:n,reinitialize:o}},O=j(),v=n("c4a9"),g={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},C=function(){return C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var c in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},C.apply(this,arguments)},h=function(e,t,n,o){return e(o||"div",{id:t,ref:n})},y=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},k=Object(o["defineComponent"])({props:g,setup:function(e,t){var n=e.init?C({},e.init):{},c=Object(o["toRefs"])(e),a=c.disabled,i=c.modelValue,r=c.tagName,s=Object(o["ref"])(null),b=null,m=e.id||u("tiny-vue"),j=e.init&&e.init.inline||e.inline,g=!!t.attrs["onUpdate:modelValue"],k=!0,S=e.initialValue?e.initialValue:"",w="",V=function(e){return g?function(){return(null===i||void 0===i?void 0:i.value)?i.value:""}:function(){return e?S:w}},x=function(){var o=V(k),c=C(C({},n),{readonly:e.disabled,selector:"#"+m,plugins:f(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:j,setup:function(c){b=c,c.on("init",(function(n){return l(n,e,t,c,i,o)})),"function"===typeof n.setup&&n.setup(c)}});d(s.value)&&(s.value.style.visibility=""),Object(v["a"])().init(c),k=!1};Object(o["watch"])(a,(function(e){var t;null!==b&&("function"===typeof(null===(t=b.mode)||void 0===t?void 0:t.set)?b.mode.set(e?"readonly":"design"):b.setMode(e?"readonly":"design"))})),Object(o["watch"])(r,(function(e){var t;g||(w=b.getContent()),null===(t=Object(v["a"])())||void 0===t||t.remove(b),Object(o["nextTick"])((function(){return x()}))})),Object(o["onMounted"])((function(){if(null!==Object(v["a"])())x();else if(s.value&&s.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"5",n=e.apiKey?e.apiKey:"no-api-key",o=p(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;O.load(s.value.ownerDocument,o,x)}})),Object(o["onBeforeUnmount"])((function(){null!==Object(v["a"])()&&Object(v["a"])().remove(b)})),j||(Object(o["onActivated"])((function(){k||x()})),Object(o["onDeactivated"])((function(){var e;g||(w=b.getContent()),null===(e=Object(v["a"])())||void 0===e||e.remove(b)})));var N=function(e){var t;w=b.getContent(),null===(t=Object(v["a"])())||void 0===t||t.remove(b),n=C(C({},n),e),Object(o["nextTick"])((function(){return x()}))};return t.expose({rerender:N}),function(){return j?h(o["h"],m,s,e.tagName):y(o["h"],m,s)}}});t["a"]=k},e20d:function(e,t,n){},f05d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-288249eb.5b68fbc0.js.map