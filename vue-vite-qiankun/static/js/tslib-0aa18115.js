/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function y(n,f){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&f.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)f.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(e[t[o]]=n[t[o]]);return e}function O(n,f,e,t){function o(c){return c instanceof e?c:new e(function(a){a(c)})}return new(e||(e=Promise))(function(c,a){function u(r){try{i(t.next(r))}catch(p){a(p)}}function l(r){try{i(t.throw(r))}catch(p){a(p)}}function i(r){r.done?c(r.value):o(r.value).then(u,l)}i((t=t.apply(n,f||[])).next())})}export{O as _,y as a};
