import{_ as D,r as F}from"./index-6ed5d7bd.js";import{d as $,o as t,c as a,a as s,F as A,P as k,R as c,S as o,U as u,a2 as B,y as E,O as l,W as p,a7 as b}from"./@vue-a3b8ecb2.js";import{f as y,j as L,E as C,k as U,l as S,m as R}from"./element-plus-087faedc.js";import{u as V}from"./vue-router-9467f4ca.js";import{u as I}from"./vuex-a79d8c7c.js";const T=$({name:"PageWrapper"}),P={class:"lift-content"},Q={class:"right-content"};function W(e,n,m,h,g,_){return t(),a(k,null,[s("div",P,[A(e.$slots,"default")]),s("div",Q,[A(e.$slots,"right")])],64)}var ve=D(T,[["render",W]]);const q=$({name:"ClientQrCodeComp",components:{ElCard:y,ElImage:L,ElLink:C}}),O=s("span",{class:"card-title"},"\u5BA2\u6237\u7AEF\u4E8C\u7EF4\u7801",-1),w={class:"client-box"},z=B("\u5BA2\u6237\u7AEF\u6E90\u7801\u5730\u5740");function G(e,n,m,h,g,_){const f=L,r=C,d=y;return t(),c(d,{class:"box-card"},{header:o(()=>[O]),default:o(()=>[u(f,{class:"qr-image",src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",fit:"fill"}),s("div",w,[u(r,{underline:!1,href:"https://github.com/soliury/noder-react-native",target:"_blank"},{default:o(()=>[z]),_:1})])]),_:1})}var Ee=D(q,[["render",G]]);const Y=$({name:"UserInfoComp",components:{ElSkeleton:U,ElSkeletonItem:S},props:{title:{type:String,default:"\u4E2A\u4EBA\u4FE1\u606F"},authorData:{type:Object,default:void 0},authorLoading:Boolean,isTopicsRepliesList:{type:Boolean,default:!0}},setup(e){const{state:n}=I(),m=V(),h=E(()=>n.user.token),g=E(()=>e.authorLoading??n.user.isLoading),_=E(()=>e.authorData??n.user.userData);return{token:h,loading:g,userData:_,gotoLogin:()=>{m.path!=="/login"&&F({path:"/login"})},gotoUserDetail:()=>{F({path:`/user/${_.value.loginname}`})}}}}),H={class:"not-login"},J=s("div",{class:"title"}," CNode\uFF1ANode.js\u4E13\u4E1A\u4E2D\u6587\u793E\u533A ",-1),K={class:"describe"},M=s("span",{class:"not-bottom"},"\u5F53\u524D\u4E3A\u6E38\u5BA2\u72B6\u6001\uFF0C\u60A8\u53EF\u4EE5",-1),X=B("\u767B\u5F55"),Z={class:"card-title"},x={class:"user-skeleton"},ee={class:"user-img"},se={class:"user-name"},te={key:0,class:"user-score"},oe=s("span",{class:"card-title"},"\u6211\u7684\u4E3B\u9898",-1),ae=["title"],ne={key:0,class:"recent_topics"},re=s("div",null,"\u6682\u65E0\u6570\u636E",-1),ie=[re],le=s("span",{class:"card-title"},"\u6211\u7684\u53C2\u4E0E",-1),ue=["title"],ce={key:0,class:"recent_topics"},_e=s("div",null,"\u6682\u65E0\u6570\u636E",-1),de=[_e];function pe(e,n,m,h,g,_){const f=C,r=y,d=S,N=R,j=U;return t(),a(k,null,[e.token||e.authorData?l("",!0):(t(),c(r,{key:0,class:"box-card"},{default:o(()=>[s("span",H,[J,s("div",K,[M,u(f,{underline:!1,onClick:e.gotoLogin},{default:o(()=>[X]),_:1},8,["onClick"])])])]),_:1})),e.token||e.authorData?(t(),c(r,{key:1,class:"box-card"},{header:o(()=>[s("span",Z,p(e.title),1)]),default:o(()=>[u(j,{loading:e.loading,animated:""},{template:o(()=>[s("div",x,[u(d,{class:"skeleton-user-img"}),u(d,{class:"skeleton-user-name"}),u(d,{class:"skeleton-user-score"})])]),default:o(()=>[s("div",{class:"user",onClick:n[0]||(n[0]=(...i)=>e.gotoUserDetail&&e.gotoUserDetail(...i))},[s("div",ee,[(t(),c(N,{shape:"square",size:40,src:e.userData.avatar_url||"",key:e.userData.avatar_url||"",alt:e.userData.loginname||""},null,8,["src","alt"]))]),s("div",se,p(e.userData.loginname||""),1),e.userData.score?(t(),a("div",te,"\u79EF\u5206\uFF1A"+p(e.userData.score||""),1)):l("",!0)])]),_:1},8,["loading"])]),_:1})):l("",!0),e.isTopicsRepliesList&&e.token&&e.userData.recent_topics?(t(),c(r,{key:2,class:"box-card list-card"},{header:o(()=>[oe]),default:o(()=>[(t(!0),a(k,null,b(e.userData.recent_topics,(i,v)=>(t(),a("div",{key:v,class:"recent_topics"},[s("div",{title:i.title},p(i.title),9,ae)]))),128)),e.userData.recent_topics&&e.userData.recent_topics.length<1?(t(),a("div",ne,ie)):l("",!0)]),_:1})):l("",!0),e.isTopicsRepliesList&&e.token&&e.userData.recent_replies?(t(),c(r,{key:3,class:"box-card list-card"},{header:o(()=>[le]),default:o(()=>[(t(!0),a(k,null,b(e.userData.recent_replies,(i,v)=>(t(),a("div",{key:v,class:"recent_topics"},[s("div",{title:i.title},p(i.title),9,ue)]))),128)),e.userData.recent_replies&&e.userData.recent_replies.length<1?(t(),a("div",ce,de)):l("",!0)]),_:1})):l("",!0)],64)}var De=D(Y,[["render",pe]]);export{Ee as C,De as U,ve as _};
