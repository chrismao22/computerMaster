(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-146ca005":"08594fc2","chunk-35c4254b":"bbbeeb9c","chunk-62247da5":"10632d0e","chunk-71fedb1e":"8cc313db","chunk-9bc49260":"1f8f7c5b"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-146ca005":1,"chunk-35c4254b":1,"chunk-62247da5":1,"chunk-71fedb1e":1,"chunk-9bc49260":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-146ca005":"4f0bc53f","chunk-35c4254b":"b34a8923","chunk-62247da5":"44f05075","chunk-71fedb1e":"77eeaf75","chunk-9bc49260":"b6c4b94e"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4a56":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("96cf"),n("1da1")),c=n("bc3a"),i=n.n(c);function u(){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/homelist.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}var h={mounted:function(){var t=this;u().then((function(e){t.$store.commit("pushList",e)}))}},d=h,v=n("2877"),m=Object(v["a"])(d,a,o,!1,null,null,null),b=m.exports,g=(n("d3b7"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-wrapper"},[n("el-container",[n("el-header",[n("nav-bar")],1),n("el-main",[n("router-view")],1),n("el-footer",[n("footer-box")],1)],1)],1)},w=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"left-wrapper"},[n("div",{staticClass:"word"},[n("div",{staticClass:"chinese"},[t._v("装机大师")]),n("div",{staticClass:"english"},[t._v("Computer Master")])])])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"right-wrapper"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-s-home"}),n("router-link",{attrs:{to:{path:"/Home"}}},[t._v("首页")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-cpu"}),n("router-link",{attrs:{to:{path:"/Shop"}}},[t._v("商城")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-s-order"}),n("router-link",{attrs:{to:{path:"/List"}}},[t._v("整机推荐")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-star-off"}),n("router-link",{attrs:{to:{path:"/About"}}},[t._v("关于作者")])],1)],1)],1)])],1)],1)},_=[],C={},x=C,j=(n("bad6"),Object(v["a"])(x,y,_,!1,null,"bf394290",null)),O=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-box"},[n("div",{staticClass:"footer-nav"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-s-home"}),n("router-link",{attrs:{to:{path:"/Home"}}},[t._v("首页")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-cpu"}),n("router-link",{attrs:{to:{path:"/Shop"}}},[t._v("商城")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-s-order"}),n("router-link",{attrs:{to:{path:"/List"}}},[t._v("整机推荐")])],1),n("el-col",{attrs:{span:6}},[n("i",{staticClass:"el-icon-star-off"}),n("router-link",{attrs:{to:{path:"/About"}}},[t._v("关于作者")])],1)],1)],1),t._m(0)])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"author"},[n("i",{staticClass:"el-icon-user-solid"}),t._v("Design By: Chris Mao ")]),n("div",{staticClass:"conect"},[n("i",{staticClass:"el-icon-chat-line-square"}),t._v("E-mail: chrismao22@163.com "),n("i",{staticClass:"el-icon-mobile-phone"}),t._v("Tel: 17832379772 ")])])}],L={},A=L,P=(n("9376"),Object(v["a"])(A,E,S,!1,null,"1476b588",null)),T=P.exports,$={components:{navBar:O,footerBox:T}},B=$,M=(n("de16"),Object(v["a"])(B,k,w,!1,null,null,null)),H=M.exports;r["default"].use(g["a"]);var N=[{path:"/",name:"Home",component:H,redirect:"index",children:[{path:"/Shop",name:"Shop",component:function(){return n.e("chunk-9bc49260").then(n.bind(null,"a4b9"))}},{path:"/List",name:"List",component:function(){return n.e("chunk-35c4254b").then(n.bind(null,"4387"))}},{path:"/index",name:"index",component:function(){return n.e("chunk-71fedb1e").then(n.bind(null,"6821"))}}]},{path:"/Home",redirect:function(){return"/"}},{path:"/About",name:"About",component:function(){return n.e("chunk-146ca005").then(n.bind(null,"f820"))}},{path:"*",name:"Error",component:function(){return n.e("chunk-62247da5").then(n.bind(null,"dda8"))}}],R=new g["a"]({mode:"hash",base:"",routes:N}),q=R,D=n("2f62");r["default"].use(D["a"]);var J=new D["a"].Store({strict:!0,state:{shopList:[]},mutations:{pushList:function(t,e){t.shopList.push(e)}},actions:{},modules:{}}),F=n("5c96"),I=n.n(F);n("0fae");r["default"].config.productionTip=!1,r["default"].use(I.a),new r["default"]({router:q,store:J,render:function(t){return t(b)}}).$mount("#app")},"8d91":function(t,e,n){},9376:function(t,e,n){"use strict";var r=n("4a56"),a=n.n(r);a.a},"9c99":function(t,e,n){},bad6:function(t,e,n){"use strict";var r=n("9c99"),a=n.n(r);a.a},de16:function(t,e,n){"use strict";var r=n("8d91"),a=n.n(r);a.a}});
//# sourceMappingURL=app.a0bbdebb.js.map