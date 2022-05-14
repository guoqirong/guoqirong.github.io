import{_ as z,a as $}from"./@babel-13116c64.js";var Q=typeof navigator!="undefined"&&navigator.userAgent.indexOf("Trident")!==-1;function V(e,t){if(!e.hasOwnProperty(t)||!isNaN(t)&&t<e.length)return!0;if(Q)try{return e[t]&&typeof window!="undefined"&&e[t].parent===window}catch{return!0}else return!1}var T,S,I;function Z(e){var t=0,r,n=!1;for(var a in e)if(!V(e,a)){for(var i=0;i<window.frames.length&&!n;i++){var u=window.frames[i];if(u===e[a]){n=!0;break}}if(!n&&(t===0&&a!==T||t===1&&a!==S))return a;t++,r=a}if(r!==I)return r}function ee(e){T=S=void 0;for(var t in e)V(e,t)||(T?S||(S=t):T=t,I=t);return I}function M(e){var t=e.indexOf(">")+1,r=e.lastIndexOf("<");return e.substring(t,r)}function L(e){if(z(e)==="object")return"/";try{var t=new URL(e,location.href),r=t.origin,n=t.pathname,a=n.split("/");return a.pop(),"".concat(r).concat(a.join("/"),"/")}catch(i){return console.warn(i),""}}function te(){var e=document.createElement("script");return"noModule"in e}var re=window.requestIdleCallback||function(t){var r=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})},1)};function ne(e,t){if(!t||!e.headers)return e.text();var r=e.headers.get("Content-Type");if(!r)return e.text();var n="utf-8",a=r.split(";");if(a.length===2){var i=a[1].split("="),u=$(i,2),f=u[1],v=f&&f.trim();v&&(n=v)}return n.toUpperCase()==="UTF-8"?e.text():e.blob().then(function(o){return new Promise(function(d,h){var p=new window.FileReader;p.onload=function(){d(p.result)},p.onerror=h,p.readAsText(o,n)})})}var C={};function ae(e,t){var r=e;if(!C[r]){var n="window.__TEMP_EVAL_FUNC__ = function(){".concat(t,"}");(0,eval)(n),C[r]=window.__TEMP_EVAL_FUNC__,delete window.__TEMP_EVAL_FUNC__}var a=C[r];a.call(window)}var oe=/(<script[\s\S]*?>)[\s\S]*?<\/script>/gi,ie=/<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i,k=/.*\ssrc=('|")?([^>'"\s]+)/,ue=/.*\stype=('|")?([^>'"\s]+)/,se=/.*\sentry\s*.*/,ce=/.*\sasync\s*.*/,le=/.*\snomodule\s*.*/,fe=/.*\stype=('|")?module('|")?\s*.*/,ve=/<(link)\s+[\s\S]*?>/ig,de=/\srel=('|")?(preload|prefetch)\1/,F=/.*\shref=('|")?([^>'"\s]+)/,he=/.*\sas=('|")?font\1.*/,pe=/<style[^>]*>[\s\S]*?<\/style>/gi,ge=/\s+rel=('|")?stylesheet\1.*/,me=/.*\shref=('|")?([^>'"\s]+)/,Ee=/<!--([\s\S]*?)-->/g,ye=/<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i,we=/<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i,_e=/<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;function D(e){return e.startsWith("//")||e.startsWith("http://")||e.startsWith("https://")}function Y(e,t){return new URL(e,t).toString()}function xe(e){var t=["text/javascript","module","application/javascript","text/ecmascript","application/ecmascript"];return!e||t.indexOf(e)!==-1}var G=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return"<!-- ".concat(r?"prefetch/preload":""," link ").concat(t," replaced by import-html-entry -->")},q=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return"<!-- ".concat(r?"async":""," script ").concat(t," replaced by import-html-entry -->")},Pe="<!-- inline scripts replaced by import-html-entry -->",b=function(t){return"<!-- ignore asset ".concat(t||"file"," replaced by import-html-entry -->")},j=function(t,r){return"<!-- ".concat(r?"nomodule":"module"," script ").concat(t," ignored by import-html-entry -->")};function Re(e,t,r){var n=[],a=[],i=null,u=te(),f=e.replace(Ee,"").replace(ve,function(o){var d=!!o.match(ge);if(d){var h=o.match(me),p=o.match(ye);if(h){var m=h&&h[2],y=m;return m&&!D(m)&&(y=Y(m,t)),p?b(y):(a.push(y),G(y))}}var w=o.match(de)&&o.match(F)&&!o.match(he);if(w){var E=o.match(F),s=$(E,3),g=s[2];return G(g,!0)}return o}).replace(pe,function(o){return we.test(o)?b("style file"):o}).replace(oe,function(o,d){var h=d.match(_e),p=u&&!!d.match(le)||!u&&!!d.match(fe),m=d.match(ue),y=m&&m[2];if(!xe(y))return o;if(ie.test(o)&&d.match(k)){var w=d.match(se),E=d.match(k),s=E&&E[2];if(i&&w)throw new SyntaxError("You should not set multiply entry script!");if(s&&!D(s)&&(s=Y(s,t)),i=i||w&&s,h)return b(s||"js file");if(p)return j(s||"js file",u);if(s){var g=!!d.match(ce);return n.push(g?{async:!0,src:s}:s),q(s,g)}return o}else{if(h)return b("js file");if(p)return j("js file",u);var l=M(o),c=l.split(/[\r\n]+/).every(function(_){return!_.trim()||_.trim().startsWith("//")});return c||n.push(o),Pe}});n=n.filter(function(o){return!!o});var v={template:f,scripts:n,styles:a,entry:i||n[n.length-1]};return typeof r=="function"&&(v=r(v)),v}var H={},W={},U={};if(!window.fetch)throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');var P=window.fetch.bind(window);function A(e){return e}function B(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.fetch,a=n===void 0?P:n,i=e;return X(t,a).then(function(u){return i=t.reduce(function(f,v,o){return f=f.replace(G(v),"<style>/* ".concat(v," */").concat(u[o],"</style>")),f},i),i})}var N=function(t){return t.startsWith("<")};function be(e,t,r,n){var a=N(e)?"":"//# sourceURL=".concat(e,`
`),i=(0,eval)("window");return i.proxy=r,n?";(function(window, self, globalThis){with(window){;".concat(t,`
`).concat(a,"}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);"):";(function(window, self, globalThis){;".concat(t,`
`).concat(a,"}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);")}function X(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P;return Promise.all(e.map(function(r){return N(r)?M(r):H[r]||(H[r]=t(r).then(function(n){return n.text()}))}))}function O(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},n=function(i){return W[i]||(W[i]=t(i).then(function(u){if(u.status>=400)throw r(),new Error("".concat(i," load failed with status ").concat(u.status));return u.text()}).catch(function(u){throw r(),u}))};return Promise.all(e.map(function(a){if(typeof a=="string")return N(a)?M(a):n(a);var i=a.src,u=a.async;return u?{src:i,async:!0,content:new Promise(function(f,v){return re(function(){return n(i).then(f,v)})})}:n(i)}))}function K(e,t){setTimeout(function(){throw console.error(t),e})}function J(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=n.fetch,i=a===void 0?P:a,u=n.strictGlobal,f=u===void 0?!1:u,v=n.success,o=n.error,d=o===void 0?function(){}:o,h=n.beforeExec,p=h===void 0?function(){}:h,m=n.afterExec,y=m===void 0?function(){}:m;return O(t,i,d).then(function(w){var E=function(c,_){var R=p(_,c)||_,x=be(c,R,r,f);ae(c,x),y(_,c)};function s(l,c,_){if(l===e){ee(f?r:window);try{E(l,c);var R=r[Z(f?r:window)]||{};_(R)}catch(x){throw console.error("[import-html-entry]: error occurs while executing entry script ".concat(l)),x}}else if(typeof c=="string")try{E(l,c)}catch(x){K(x,"[import-html-entry]: error occurs while executing normal script ".concat(l))}else c.async&&(c==null||c.content.then(function(x){return E(c.src,x)}).catch(function(x){K(x,"[import-html-entry]: error occurs while executing async script ".concat(c.src))}))}function g(l,c){if(l<t.length){var _=t[l],R=w[l];s(_,R,c),!e&&l===t.length-1?c():g(l+1,c)}}return new Promise(function(l){return g(0,v||l)})})}function Te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=P,n=!1,a=L,i=A,u=t.postProcessTemplate;return typeof t=="function"?r=t:(t.fetch&&(typeof t.fetch=="function"?r=t.fetch:(r=t.fetch.fn||P,n=!!t.fetch.autoDecodeResponse)),a=t.getPublicPath||t.getDomain||L,i=t.getTemplate||A),U[e]||(U[e]=r(e).then(function(f){return ne(f,n)}).then(function(f){var v=a(e),o=Re(i(f),v,u),d=o.template,h=o.scripts,p=o.entry,m=o.styles;return B(d,m,{fetch:r}).then(function(y){return{template:y,assetPublicPath:v,getExternalScripts:function(){return O(h,r)},getExternalStyleSheets:function(){return X(m,r)},execScripts:function(E,s){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h.length?J(p,h,E,{fetch:r,strictGlobal:s,beforeExec:g.beforeExec,afterExec:g.afterExec}):Promise.resolve()}}})}))}function Ge(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.fetch,n=r===void 0?P:r,a=t.getTemplate,i=a===void 0?A:a,u=t.postProcessTemplate,f=t.getPublicPath||t.getDomain||L;if(!e)throw new SyntaxError("entry should not be empty!");if(typeof e=="string")return Te(e,{fetch:n,getPublicPath:f,getTemplate:i,postProcessTemplate:u});if(Array.isArray(e.scripts)||Array.isArray(e.styles)){var v=e.scripts,o=v===void 0?[]:v,d=e.styles,h=d===void 0?[]:d,p=e.html,m=p===void 0?"":p,y=function(s){return h.reduceRight(function(g,l){return"".concat(G(l)).concat(g)},s)},w=function(s){return o.reduce(function(g,l){return"".concat(g).concat(q(l))},s)};return B(i(w(y(m))),h,{fetch:n}).then(function(E){return{template:E,assetPublicPath:f(e),getExternalScripts:function(){return O(o,n)},getExternalStyleSheets:function(){return X(h,n)},execScripts:function(g,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return o.length?J(o[o.length-1],o,g,{fetch:n,strictGlobal:l,beforeExec:c.beforeExec,afterExec:c.afterExec}):Promise.resolve()}}})}else throw new SyntaxError("entry scripts or styles should be array!")}export{J as _,Ge as i};