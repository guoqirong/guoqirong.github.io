import{C as b,U as R,_ as T}from"./index-de5dcdad.js";import{k as M,o as q,m as w,f as N,e as k,d as O}from"./element-plus-087faedc.js";import{_ as S,u as B,f as U,c as F,b as V}from"./index-6ed5d7bd.js";import{u as z}from"./vuex-a79d8c7c.js";import{d as G,y as I,r as P,c as m,U as l,S as o,Z as C,o as n,R as p,O as Q,P as A,a7 as L,a,a2 as H,W as u}from"./@vue-a3b8ecb2.js";import"./vue-router-9467f4ca.js";import"./@vueuse-972b0b46.js";import"./@element-plus-2403d92f.js";import"./@ctrl-eb0b847c.js";import"./lodash-es-8dd21e31.js";import"./async-validator-1193b133.js";import"./@popperjs-892fd7f5.js";import"./axios-eec2155c.js";import"./vite-plugin-qiankun-075a3e44.js";import"./mitt-dab1f1cb.js";const W=G({components:{ElSkeleton:M,ElEmpty:q,ClientQrCodeComp:b,UserInfoComp:R},setup(){const{state:e}=z(),d=I(()=>e.user.token),{isLoading:D,adornUrl:h,httpRequest:E}=B(),g=P(),c=()=>{d.value&&E({url:h("/api/v1/messages"),method:"get",params:{accesstoken:d.value,mdrender:!0}}).then(({data:t})=>{t.data.has_read_messages.forEach(r=>{r.reply.content=F(r.reply.content)}),t.data.hasnot_read_messages.forEach(r=>{r.reply.content=F(r.reply.content)}),g.value=t.data}).catch(t=>{k.error("\u8BF7\u6C42\u5931\u8D25"),console.error(t)})};c();const[i]=V(),{httpRequest:_}=B();return{message:g,isLoading:D,readAll:()=>{_({url:h("/api/v1/message/mark_all"),method:"post",params:{accesstoken:d.value}}).then(()=>{i.emit("read-msg"),c()}).catch(t=>{k.error("\u8BF7\u6C42\u5931\u8D25"),console.error(t)})},readOne:t=>{_({url:h(`/api/v1/message/mark_one/${t}`),method:"post",params:{accesstoken:d.value}}).then(()=>{i.emit("read-msg"),c()}).catch(r=>{k.error("\u8BF7\u6C42\u5931\u8D25"),console.error(r)})},formatDate:U}}}),Z={class:"my-message"},j=a("span",{class:"card-title"},"\u672A\u8BFB\u4FE1\u606F",-1),J=H("\u5168\u90E8\u5DF2\u8BFB"),K={class:"user-img"},X={class:"read-messages-title"},Y={class:"title"},x={class:"desc"},ee={class:"read-btn"},se=H("\u5DF2\u8BFB"),ae=["innerHTML"],te={class:"topic-title"},oe=a("span",{class:"card-title"},"\u5DF2\u8BFB\u4FE1\u606F",-1),ne={class:"user-img"},re={class:"read-messages-title"},le={class:"title"},ce={class:"desc"},ue=["innerHTML"],de={class:"topic-title"};function ie(e,d,D,h,E,g){const c=O,i=w,_=q,v=M,y=N,t=C("user-info-comp"),r=C("client-qr-code-comp"),$=T;return n(),m("div",Z,[l($,null,{right:o(()=>[l(t),l(r)]),default:o(()=>[l(y,{class:"box-card"},{header:o(()=>[j,e.message&&e.message.hasnot_read_messages&&e.message.hasnot_read_messages.length>0?(n(),p(c,{key:0,class:"all-read",onClick:e.readAll},{default:o(()=>[J]),_:1},8,["onClick"])):Q("",!0)]),default:o(()=>[l(v,{class:"message-skeleton",loading:e.isLoading,animated:"",rows:6},{default:o(()=>[e.message&&e.message.hasnot_read_messages&&e.message.hasnot_read_messages.length>0?(n(!0),m(A,{key:0},L(e.message.hasnot_read_messages,(s,f)=>(n(),m("div",{key:f,class:"notread-item"},[a("div",K,[(n(),p(i,{shape:"square",size:40,src:s.author.avatar_url,key:s.author.avatar_url,alt:s.author.loginname},null,8,["src","alt"]))]),a("div",X,[a("div",Y,u(s.author.loginname+"\u56DE\u590D\u4E86\u60A8\u7684\u8BDD\u9898"),1),a("div",x,u(e.formatDate(s.create_at,"yyyy-MM-dd")),1)]),a("div",ee,[l(c,{onClick:_e=>e.readOne(s.id)},{default:o(()=>[se]),_:2},1032,["onClick"])]),a("div",{class:"reply-content",innerHTML:s.reply.content},null,8,ae),a("div",te,"\u8BDD\u9898\uFF1A"+u(s.topic.title),1)]))),128)):(n(),p(_,{key:1,description:"\u6682\u65E0\u6570\u636E"}))]),_:1},8,["loading"])]),_:1}),l(y,{class:"box-card"},{header:o(()=>[oe]),default:o(()=>[l(v,{class:"message-skeleton",loading:e.isLoading,animated:"",rows:6},{default:o(()=>[e.message&&e.message.has_read_messages&&e.message.has_read_messages.length>0?(n(!0),m(A,{key:0},L(e.message.has_read_messages,(s,f)=>(n(),m("div",{key:f,class:"read-item"},[a("div",ne,[(n(),p(i,{shape:"square",size:40,src:s.author.avatar_url,key:s.author.avatar_url,alt:s.author.loginname},null,8,["src","alt"]))]),a("div",re,[a("div",le,u(s.author.loginname+"\u56DE\u590D\u4E86\u60A8\u7684\u8BDD\u9898"),1),a("div",ce,u(e.formatDate(s.create_at,"yyyy-MM-dd")),1)]),a("div",{class:"reply-content",innerHTML:s.reply.content},null,8,ue),a("div",de,"\u8BDD\u9898\uFF1A"+u(s.topic.title),1)]))),128)):(n(),p(_,{key:1,description:"\u6682\u65E0\u6570\u636E"}))]),_:1},8,["loading"])]),_:1})]),_:1})])}var Me=S(W,[["render",ie]]);export{Me as default};
