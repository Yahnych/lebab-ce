!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)i=s[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(f&&f(e);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={1:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+""+{2:"227e5d5602076589d7b7",3:"e68d270e3daab54444aa",4:"20295070cb39931bec3f"}[t]+".js"}(t),a=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,s.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/_nuxt/",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=u;a.push([256,0,5]),n()}({151:function(t,e,n){var r={"./index.js":152};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=151},152:function(t,e,n){"use strict";n.r(e);var r=n(33);e.default=function(){return new r.a.Store({state:{codemirrorOpts:{tabSize:4,foldGutter:!0,lineNumbers:!0,theme:"panda-syntax",lineWrapping:!0,mode:"text/javascript",matchBrackets:!1,readOnly:!0,keyMap:"default"},defaultCode:'\'use strict\';\nvar _ = require(\'lodash\');\n\nfunction Person(cfg) {\n  this.names = [cfg.fname, cfg.lname];\n}\nPerson.prototype.greet = function(title) {\n  title = title || "Mr";\n  var fullName = this.names\n    .map(function(n) {\n      n = n || \'\'\n      return _.upperFirst(n);\n    })\n    .join(" ");\n\n  console.log("Hello " + title + " " + fullName + "!");\n};\nPerson.prototype.greetWithAllTitles = function() {\n  for (var i = 0; i < arguments.length; i++) {\n    var title = arguments[i];\n    this.greet(title);\n  }\n};\n\nmodule.exports = Person;',lebabDefaultOpts:["arrow","arrow-return","for-of","for-each","arg-rest","obj-method","obj-shorthand","no-strict","exponent","multi-var","let","class","commonjs","template","default-param","destruct-param","includes"]}})}},153:function(t,e,n){"use strict";var r=n(42);n.n(r).a},155:function(t,e,n){},248:function(t,e,n){"use strict";var r=n(43);n.n(r).a},256:function(t,e,n){"use strict";n.r(e);var r=n(27),o=n.n(r),a=n(2),i=n.n(a),s=n(3),u=n.n(s),c=n(22),f=n.n(c),l=n(8),p=n.n(l),d=n(23),h=n.n(d),v=n(11),m=n.n(v),x=n(0),b={},g=n(95),y=n.n(g),w=n(28),_=n.n(w),C=(n(246),n(99)),$=n.n(C),k=n(63),E=function(){return n.e(2).then(n.bind(null,261)).then(function(t){return t.default||t})},R=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,260)).then(function(t){return t.default||t})},j=function(){return n.e(4).then(n.bind(null,259)).then(function(t){return t.default||t})};x.a.use(k.a),window.history.scrollRestoration="manual";var T=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new i.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var S={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}},A={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,f={};q.forEach(function(t){void 0!==c[t]&&(f[t]=c[t])});var l={};O.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(a))});var p=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),p)return p.call(a,t)};var d=[t("router-view",r)];return void 0!==o.keepAlive&&(d=[t("keep-alive",d)]),t("transition",{props:f,on:l},d)}},q=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],O=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],N={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])};L._withStripped=!0;var M={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},D=(n(248),n(9)),P=Object(D.a)(M,L,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,U=function(){return{}};function I(t,e){var n=t.options.data||U;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function z(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function H(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function B(t){var e=this;return i.a.all(H(t,function(){var t=p()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=z(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var K=function(){var t=p()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:return t.abrupt("return",_()({},e,{meta:F(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=p()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{lebab:"3.0.2"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=nt(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,K(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,K(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function X(t,e){var n=void 0;return(n=2===t.length?new i.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof i.a||"function"==typeof n.then)||(n=i.a.resolve(n)),n}function J(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function V(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?Y:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=a[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+f()(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=s(p[d]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+f()(l)+"`");o+=(0===d?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?Z(p):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=G.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],p=n[2],d=n[3],h=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var b=null!=p&&null!=l&&l!==p,g="+"===m||"*"===m,y="?"===m||"*"===m,w=n[2]||s,_=h||v;r.push({name:d||o++,prefix:p||"",delimiter:w,optional:y,repeat:g,partial:b,asterisk:!!x,pattern:_?et(_):x?".*":"[^"+tt(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function W(t,e){var n={},r=_()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}var G=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Y(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Z(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function tt(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function et(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function nt(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),a=(n?n+"://":"//")+o.shift(),i=o.filter(Boolean).join("/"),s=void 0;return 2===(o=i.split("#")).length&&(i=o[0],s=o[1]),a+=i?"/"+i:"",e&&"{}"!==f()(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=s?"#"+s:""}var rt={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){x.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||V(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:A,NuxtError:P}},ot=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};ot._withStripped=!0;var at={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,x.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},it=(n(153),Object(D.a)(at,ot,[],!1,null,null,null).exports),st=(n(155),function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-navbar"),this._v(" "),this._m(0),this._v(" "),e("nuxt"),this._v(" "),e("app-footer")],1)});st._withStripped=!0;var ut=function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{staticClass:"navbar-default",attrs:{toggleable:"md",type:"light",fixed:"top"}},[e("b-container",[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),this._v(" "),e("b-navbar-brand",{staticClass:"logo",attrs:{to:"/"}}),this._v(" "),e("b-collapse",{attrs:{id:"nav_collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/editor"}},[this._v("Try It Live")]),this._v(" "),e("b-nav-item",{attrs:{target:"_blank",href:"//github.com/lebab/lebab"}},[this._v("Lebab")]),this._v(" "),e("b-nav-item",{attrs:{target:"_blank",href:"//github.com/lebab/lebab/issues"}},[this._v("Issues")])],1)],1)],1)],1)};ut._withStripped=!0;var ct=Object(D.a)({},ut,[],!1,null,null,null).exports,ft=function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"footer"},[this._v("Lebab - Distributed under MIT License")])};ft._withStripped=!0;var lt={components:{AppNavbar:ct,AppFooter:Object(D.a)({},ft,[],!1,null,null,null).exports}},pt={_default:Object(D.a)(lt,st,[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/uniibu/lebab-ce"}},[e("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0","z-index":"9999"},attrs:{src:"https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"}})])}],!1,null,null,null).exports},dt={head:{title:"Lebab Modernizing Javascript Code",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},{hid:"description",name:"description",content:"Lebab Modernizing Javascript Code"}],link:[{rel:"icon",type:"image/x-icon",href:"/lebab-ce/favicon.ico"},{href:"https://cdn.rawgit.com/umdfied/90094bc737a35d6256c0795a64ebced1/raw/27b402aa52aa8ab5eb5b5e3008d5109aa75f27bc/babel-standalone.min.js",rel:"preload",as:"script"},{href:"https://cdn.rawgit.com/umdfied/341a8607ebf4ea963b72a59066d74f95/raw/6971b6b124284d751f7b818fbf9be5d347e55731/lebab.min.js",rel:"preload",as:"script"}],script:[{src:"https://cdn.rawgit.com/umdfied/90094bc737a35d6256c0795a64ebced1/raw/27b402aa52aa8ab5eb5b5e3008d5109aa75f27bc/babel-standalone.min.js",body:!0},{src:"https://cdn.rawgit.com/umdfied/341a8607ebf4ea963b72a59066d74f95/raw/6971b6b124284d751f7b818fbf9be5d347e55731/lebab.min.js",type:"text/javascript",body:!0}],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){x.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){x.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&pt["_"+t]||(t="default"),this.layoutName=t,this.layout=pt["_"+t],this.layout},loadLayout:function(t){return t&&pt["_"+t]||(t="default"),i.a.resolve(pt["_"+t])}},components:{NuxtLoading:it}},ht=n(32),vt=n.n(ht),mt=n(33);x.a.use(mt.a);var xt=n(151),bt=xt.keys(),gt={},yt=void 0;if(bt.forEach(function(t){-1!==t.indexOf("./index.")&&(yt=t)}),yt&&(gt=At(yt)),"function"!=typeof gt){gt.modules||(gt.modules={});var wt=!0,_t=!1,Ct=void 0;try{for(var $t,kt=vt()(bt);!(wt=($t=kt.next()).done);wt=!0){var Et=$t.value,Rt=Et.replace(/^\.\//,"").replace(/\.(mjs|js)$/,"");if("index"!==Rt){var jt=Rt.split(/\//),Tt=qt(gt,jt);Tt[Rt=jt.pop()]=At(Et),Tt[Rt].namespaced=!0}}}catch(t){_t=!0,Ct=t}finally{try{!wt&&kt.return&&kt.return()}finally{if(_t)throw Ct}}}var St=gt instanceof Function?gt:function(){return new mt.a.Store(m()({strict:!1},gt,{state:gt.state instanceof Function?gt.state():{}}))};function At(t){var e=xt(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function qt(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},qt(t.modules[n],e)}for(var Ot=n(96),Nt=n.n(Ot),Lt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=vt()(Array.isArray(n)?n:[n]);!(r=(i=s.next()).done);r=!0){var u=i.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||i.a.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||i.a.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},Mt=function(t){Lt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},Dt=["request","delete","get","head","options","post","put","patch"],Pt=0;Pt<Dt.length;Pt++){Mt(Dt[Pt])}var Ut=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?m()({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=Nt.a.create(n);!function(t){for(var e in Lt)t[e]=Lt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)},It=n(97),zt=n.n(It),Ft=function(t,e){t.app;e("md",new zt.a)},Ht=n(100);x.a.use(Ht.a);var Bt=n(98),Kt=n.n(Bt);n(238),n(239),n(62),n(93),n(240),n(94),n(241),n(242),n(244);x.a.use(Kt.a);var Qt=function(){var t=p()(u.a.mark(function t(e){var n,r,o,a,i,s,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new k.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:T,routes:[{path:"/readme",component:E,name:"readme"},{path:"/editor",component:R,name:"editor"},{path:"/",component:j,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=St(e)).$router=n,o=_()({router:n,store:r,nuxt:{defaultTransition:Xt,transitions:[Xt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?m()({},Xt,{name:t}):m()({},Xt,t):Xt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},dt),r.app=o,a=e?e.next:function(t){return o.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(s=J(n.options.base),i=n.resolve(s).route),t.next=12,Q(o,{route:i,next:a,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 12:return c=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";x.a[n]||(x.a[n]=!0,x.a.use(function(){x.a.prototype.hasOwnProperty(t)||y()(x.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=17,Ut(o.context,c);case 17:return t.next=20,Ft(o.context,c);case 20:t.next=23;break;case 23:0,t.next=27;break;case 27:t.next=30;break;case 30:return t.abrupt("return",{app:o,router:n,store:r});case 31:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();x.a.component(S.name,S),x.a.component(A.name,A),x.a.component(N.name,N),x.a.component(rt.name,rt),x.a.use($.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Xt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"},Jt=function(){var t=p()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Yt.nuxt.err||n.path!==e.path,this._queryChanged=f()(e.query)!==f()(n.query),this._diffQuery=this._queryChanged?W(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,B(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Vt=function(){var t=p()(u.a.mark(function t(e,n,r){var o,a,s,c,f,l,p,d,h,v=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Gt=e===n?[]:F(n,o=[]).map(function(t,e){return V(n.matched[o[e]].path)(n.params)}),a=!1,s=function(t){n.path===t.path&&v.$loading.finish&&v.$loading.finish(),n.path!==t.path&&v.$loading.pause&&v.$loading.pause(),a||(a=!0,r(t))},t.next=7,Q(Yt,{route:e,from:n,next:s.bind(this)});case 7:if(this._dateLastError=Yt.nuxt.dateErr,this._hadError=!!Yt.nuxt.err,(f=F(e,c=[])).length){t.next=25;break}return t.next=14,ae.call(this,f,Yt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof P.layout?P.layout(Yt.context):P.layout);case 18:return l=t.sent,t.next=21,ae.call(this,f,Yt.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return Yt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return f.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(ne(f,e,n)),t.prev=27,t.next=30,ae.call(this,f,Yt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!Yt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=f[0].options.layout)&&(p=p(Yt.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,ae.call(this,f,Yt.context,p);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!Yt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:if(d=!0,f.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate(Yt.context))}),d){t.next=50;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 50:return t.next=52,i.a.all(f.map(function(t,n){if(t._path=V(e.matched[c[n]].path)(e.params),t._dataRefresh=!1,v._pathChanged&&t._path!==Gt[n])t._dataRefresh=!0;else if(!v._pathChanged&&v._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return v._diffQuery[t]}))}if(!v._hadError&&v._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var f=X(t.options.asyncData,Yt.context).then(function(e){I(t,e),v.$loading.increase&&v.$loading.increase(u)});o.push(f)}if(s){var l=t.options.fetch(Yt.context);l&&(l instanceof i.a||"function"==typeof l.then)||(l=i.a.resolve(l)),l.then(function(t){v.$loading.increase&&v.$loading.increase(u)}),o.push(l)}return i.a.all(o)}));case 52:a||(this.$loading.finish&&this.$loading.finish(),r()),t.next=67;break;case 55:return t.prev=55,t.t0=t.catch(27),t.t0||(t.t0={}),Gt=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(h=P.layout)&&(h=h(Yt.context)),t.next=64,this.loadLayout(h);case 64:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 67:case"end":return t.stop()}},t,this,[[27,55]])}));return function(e,n,r){return t.apply(this,arguments)}}(),Wt=function(){var t=p()(u.a.mark(function t(e){var n,r,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Yt=e.app,Zt=e.router,e.store,t.next=5,i.a.all(oe(Zt));case 5:if(n=t.sent,r=new x.a(Yt),o=function(){r.$mount("#__nuxt"),x.a.nextTick(function(){ce(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(ne(n,Zt.currentRoute)),Gt=Zt.currentRoute.matched.map(function(t){return V(t.path)(Zt.currentRoute.params)})),r.$loading={},te.error&&r.error(te.error),Zt.beforeEach(Jt.bind(r)),Zt.beforeEach(Vt.bind(r)),Zt.afterEach(ie),Zt.afterEach(ue.bind(r)),!te.serverRendered){t.next=19;break}return o(),t.abrupt("return");case 19:Vt.call(r,Zt.currentRoute,Zt.currentRoute,function(t){if(!t)return ie(Zt.currentRoute,Zt.currentRoute),se.call(r,Zt.currentRoute),void o();Zt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 20:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),Gt=[],Yt=void 0,Zt=void 0,te=window.__NUXT__||{},ee=x.a.config.errorHandler;function ne(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=m()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function re(t,e){return te.serverRendered&&e&&I(t,e),t._Ctor=t,t}function oe(t){var e=this,n=J(t.options.base,t.options.mode);return H(t.match(n),function(){var t=p()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=re(z(n),te.data?te.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function ae(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof b[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),b[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?i.a.resolve():X(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function ie(t,e){H(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=x.a.extend(t))._Ctor=t,n.components[r]=t),t})}function se(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?P.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Yt.context)),this.setLayout(e)}function ue(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||x.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=F(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.a.set(t.$data,r,n[r])}}),se.call(n,t)})}function ce(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Zt.afterEach(function(e,n){x.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}x.a.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()},o=null;return"function"==typeof ee&&(o=ee.apply(void 0,arguments)),!0===o?o:(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof ee?o:void console.error(t.message||r.message))},Qt().then(Wt).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},42:function(t,e,n){},43:function(t,e,n){}});