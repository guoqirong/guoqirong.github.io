(window["webpackJsonp_vue-cnode"]=window["webpackJsonp_vue-cnode"]||[]).push([[2],{LvNY:function(t,a,e){},NSPs:function(t,a,e){},Nocy:function(t,a,e){"use strict";var s={props:{itemData:Object},methods:{seeDetail:function(t){this.$emit("seeDetail",t)}}},i=e("JFUb"),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item-body",on:{click:function(a){return t.seeDetail(t.itemData.id)}}},[e("div",{staticClass:"user-img"},[e("el-avatar",{key:t.itemData.author.avatar_url,attrs:{shape:"square",size:30,src:t.itemData.author.avatar_url,alt:t.itemData.author.loginname}})],1),t._v(" "),e("div",{staticClass:"reply-count"},[e("span",{staticClass:"count-of-replies",attrs:{title:"回复数"}},[t._v(t._s(t.itemData.reply_count))]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("span",{staticClass:"count-of-visits",attrs:{title:"点击数"}},[t._v(t._s(t.itemData.visit_count))])]),t._v(" "),e("div",{staticClass:"topic-tab",style:{width:t.itemData.top||"dev"!==t.itemData.tab?"40px":""}},[e("el-tag",{attrs:{effect:"dark",type:t.itemData.top?"danger":"success"}},[t._v("\n      "+t._s(t.itemData.top?"置顶":"good"===t.itemData.tab?"精华":"share"===t.itemData.tab?"分享":"ask"===t.itemData.tab?"问答":"job"===t.itemData.tab?"招聘":"dev"===t.itemData.tab?"客户端测试":"全部")+"\n    ")])],1),t._v(" "),e("div",{staticClass:"topic-title",style:{width:t.itemData.top||"dev"!==t.itemData.tab?"calc(100% - 40px - 40px - 80px - 90px)":""},attrs:{title:t.itemData.title}},[t._v(t._s(t.itemData.title))]),t._v(" "),e("div",{staticClass:"created-time"},[t._v(t._s(t.$formatDate(t.itemData.create_at,"yyyy-MM-dd")))])])}),[],!1,(function(t){e("LvNY")}),"data-v-4cc3fd0c",null);a.a=n.exports},qh8I:function(t,a,e){},uOAF:function(t,a,e){"use strict";e.r(a);var s=e("Nocy"),i=e("7Qib"),n={data:function(){return{loadData:!1,page:1,tab:"",limit:20,mdrender:!0,topicList:[]}},components:{listItem:s.a},methods:{getData:function(t){var a=this;this.tab=t||"all",this.loadData=!0,this.$httpRequest({url:this.$httpRequest.adornUrl("/api/v1/topics"),method:"get",params:{page:this.page,tab:this.tab,limit:this.limit,mdrender:this.mdrender}}).then((function(t){var e=t.data;a.loadData=!1,a.topicList=e.data})).catch((function(t){a.$message.error("请求失败"),console.error(t)}))},handleSizeChange:function(t){this.limit=t,this.getData(this.tab)},handleCurrentChange:function(t){this.page=t,this.getData(this.tab)},seeDetail:function(t){Object(i.b)(this.$route,this.$router,{path:"/index-detail",query:{id:t,key:this.tab}})}}},r=e("JFUb"),l={data:function(){return{activeName:"all",tabList:[{key:"all",name:"全部"},{key:"good",name:"精华"},{key:"share",name:"分享"},{key:"ask",name:"问答"},{key:"job",name:"招聘"},{key:"dev",name:"客户端测试"}],token:""}},components:{topicList:Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"list-body"},[t._l(t.topicList,(function(a,s){return e("div",{key:s},[e("list-item",{attrs:{itemData:a},on:{seeDetail:t.seeDetail}})],1)})),t._v(" "),e("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.page,"pager-count":5,"page-sizes":[10,20,50,100],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2)}),[],!1,(function(t){e("NSPs")}),null,null).exports},computed:{loadData:function(){return this.$store.state.user.loadData},userData:function(){return this.$store.state.user.userData}},mounted:function(){var t=this;this.$bus.$on("selectTabKey",(function(a){a&&t.$store.commit("topic/updateTab",a)})),this.$nextTick((function(){t.activeName=t.$store.state.topic.tab||t.activeName,t.$refs.topicList.getData(t.activeName)}))},beforeDestroy:function(){this.$bus.$off("selectTabKey")},methods:{handleClick:function(t){this.$refs.topicList.getData(this.activeName)},gotoLogin:function(){Object(i.b)(this.$route,this.$router,{path:"/login"})}}},c=Object(r.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-body"},[e("div",{staticClass:"lift-content"},[e("el-card",{staticClass:"box-card"},[e("div",[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabList,(function(t,a){return e("el-tab-pane",{key:a,attrs:{label:t.name,name:t.key}})})),t._v(" "),e("topic-list",{ref:"topicList"})],2)],1)])],1),t._v(" "),e("div",{staticClass:"right-content"},[t.userData?t._e():e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"box-card"},[e("span",{staticClass:"not-login"},[e("div",{staticClass:"title"},[t._v("\n          CNode：Node.js专业中文社区 \n        ")]),t._v(" "),e("div",{staticClass:"describe"},[e("span",{staticClass:"not-bottom"},[t._v("当前为游客状态，您可以")]),t._v(" "),e("el-link",{attrs:{underline:!1},on:{click:t.gotoLogin}},[t._v("登录")])],1)])]),t._v(" "),t.userData?e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"box-card"},[e("div",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("个人信息")])]),t._v(" "),e("div",{staticClass:"user"},[e("div",{staticClass:"user-img"},[e("el-avatar",{key:t.userData.avatar_url||"",attrs:{shape:"square",size:40,src:t.userData.avatar_url||"",alt:t.userData.loginname||""}})],1),t._v(" "),e("div",{staticClass:"user-name"},[t._v(t._s(t.userData.loginname||""))]),t._v(" "),e("div",{staticClass:"user-score"},[t._v("积分："+t._s(t.userData.score||""))])])]):t._e(),t._v(" "),t.userData?e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"box-card list-card"},[e("div",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("我的主题")])]),t._v(" "),t._l(t.userData.recent_topics,(function(a,s){return e("div",{key:s,staticClass:"recent_topics"},[e("div",{attrs:{title:a.title}},[t._v(t._s(a.title))])])})),t._v(" "),t.userData.recent_topics&&t.userData.recent_topics.length<1?e("div",{key:t.i,staticClass:"recent_topics"},[e("div",[t._v("暂无数据")])]):t._e()],2):t._e(),t._v(" "),t.userData?e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loadData,expression:"loadData"}],staticClass:"box-card list-card"},[e("div",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("我的回复")])]),t._v(" "),t._l(t.userData.recent_replies,(function(a,s){return e("div",{key:s,staticClass:"recent_topics"},[e("div",{attrs:{title:a.title}},[t._v(t._s(a.title))])])})),t._v(" "),t.userData.recent_replies&&t.userData.recent_replies.length<1?e("div",{key:t.i,staticClass:"recent_topics"},[e("div",[t._v("暂无数据")])]):t._e()],2):t._e(),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("客户端二维码")])]),t._v(" "),e("el-image",{staticStyle:{width:"248px",height:"248px"},attrs:{src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",fit:"fit"}}),t._v(" "),e("div",{staticClass:"client-box"},[e("el-link",{attrs:{underline:!1,href:"https://github.com/soliury/noder-react-native",target:"_blank"}},[t._v("客户端源码地址")])],1)],1)],1)])}),[],!1,(function(t){e("qh8I")}),null,null);a.default=c.exports}}]);