(function(t){function a(a){for(var r,s,o=a[0],c=a[1],l=a[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,s=1;s<e.length;s++){var o=e[s];0!==n[o]&&(r=!1)}r&&(i.splice(a--,1),t=c(c.s=e[0]))}return t}var r={},s={app:0},n={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-085a2b80":"c53dd18a","chunk-28eb9ac6":"a04dd093","chunk-9cc1d202":"6e206c9a","chunk-191f8fa1":"4ab2e258"}[t]+".js"}function c(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={"chunk-085a2b80":1,"chunk-28eb9ac6":1,"chunk-9cc1d202":1,"chunk-191f8fa1":1};s[t]?a.push(s[t]):0!==s[t]&&e[t]&&a.push(s[t]=new Promise((function(a,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-085a2b80":"122552f3","chunk-28eb9ac6":"b61a17ac","chunk-9cc1d202":"1e65601b","chunk-191f8fa1":"b20519bf"}[t]+".css",n=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return a()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===n)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var r=a&&a.target&&a.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[t],f.parentNode.removeChild(f),e(i)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var r=n[t];if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(a,e){r=n[t]=[a,e]}));a.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(f);var e=n[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,e[1](d)}n[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},c.m=t,c.c=r,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)c.d(e,r,function(a){return t[a]}.bind(null,r));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var f=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},"034f":function(t,a,e){"use strict";e("85ec")},"85ec":function(t,a,e){},"94e9":function(t,a,e){t.exports=e.p+"img/logo_light.21f8788c.png"},cd49:function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-app",[r("v-navigation-drawer",{staticClass:"pa-3",staticStyle:{"background-color":"#565254","z-index":"20 !important"},attrs:{fixed:"",right:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[r("div",{staticClass:"d-flex flex-column pa-3",staticStyle:{height:"100%"}},[r("span",{staticClass:"text-h5 font-weight-bold"},[t._v("MENU")]),r("div",{staticClass:"my-3",staticStyle:{"border-bottom":"solid 1px var(--primary-color)"}}),r("div",{staticClass:"d-flex mt-5"},[r("i",{staticClass:"fas fa-lg fa-user",staticStyle:{color:"var(--primary-color)","padding-top":"2px"}}),r("router-link",{staticClass:"text-body-1 font-weight-bold ml-5",attrs:{to:"/"}},[t._v("Sobre")])],1),r("div",{staticClass:"d-flex mt-8"},[r("i",{staticClass:"fas fa-lg fa-building",staticStyle:{color:"var(--primary-color)","padding-top":"2px"}}),r("router-link",{staticClass:"text-body-1 font-weight-bold ml-5",attrs:{to:"/job"}},[t._v("Trabalho")])],1),r("div",{staticClass:"d-flex mt-8"},[r("i",{staticClass:"fas fa-lg fa-tasks",staticStyle:{color:"var(--primary-color)","padding-top":"2px"}}),r("router-link",{staticClass:"text-body-1 font-weight-bold ml-5",attrs:{to:"/projects"}},[t._v("Projetos")])],1),r("div",{staticClass:"d-flex flex-column align-center pa-6 mt-auto",staticStyle:{"border-top":"solid 1px var(--primary-color)"}},[r("h3",{staticClass:"text-button mb-3"},[r("strong",[t._v("Mídias Sociais")])]),r("div",{staticClass:"d-flex justify-space-between"},[r("a",{attrs:{href:"https://www.linkedin.com/in/pedronogs/"}},[r("div",{staticClass:"social-icons pl-2 pr-2",staticStyle:{background:"rgb(10, 102, 194)"}},[r("i",{staticClass:"fab fa-linkedin-in",staticStyle:{transform:"translateY(10%)"}})])]),r("a",{attrs:{href:"https://github.com/pedronogs"}},[r("div",{staticClass:"social-icons ml-3 pl-2 pr-2",staticStyle:{background:"#10851a"}},[r("i",{staticClass:"fab fa-github",staticStyle:{transform:"translateY(4%) translateX(0%)"}})])]),r("a",{attrs:{href:"https://instagram.com/pedronogs"}},[r("div",{staticClass:"social-icons ml-3 pl-2 pr-2",staticStyle:{background:"#d3117c"}},[r("i",{staticClass:"fab fa-instagram",staticStyle:{transform:"translateX(2%) translateY(5%)"}})])])])])])]),r("div",{staticClass:"d-flex align-center justify-space-between pt-5 px-md-16 px-5",attrs:{id:"navbar"}},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticStyle:{width:"60px",height:"60px",border:"2px solid var(--primary-color)","border-radius":"30px"},attrs:{src:e("94e9")}}),r("span",{staticClass:"text-h6 ml-5",staticStyle:{"text-transform":"uppercase"}},[t._v(" Pedro "),r("strong",{staticClass:"text-primary"},[t._v('"Nogs"')])])]),r("div",{staticClass:"d-sm-flex d-none"},[r("div",{staticClass:"route-item text-button"},[r("router-link",{staticClass:"pa-3",attrs:{to:"/"}},[t._v("Sobre Mim")])],1),r("div",{staticClass:"route-item text-button"},[r("router-link",{staticClass:"pa-3",attrs:{to:"/job"}},[t._v("Trabalho")])],1),r("div",{staticClass:"route-item text-button"},[r("router-link",{staticClass:"pa-3",attrs:{to:"/projects"}},[t._v("Projetos")])],1)]),r("div",{staticClass:"d-sm-flex d-none"},[r("a",{attrs:{href:"https://www.linkedin.com/in/pedronogs/"}},[r("div",{staticClass:"social-icons pl-2 pr-2",staticStyle:{background:"rgb(10, 102, 194)"}},[r("i",{staticClass:"fab fa-linkedin-in",staticStyle:{transform:"translateY(10%)"}})])]),r("a",{attrs:{href:"https://github.com/pedronogs"}},[r("div",{staticClass:"social-icons ml-3 pl-2 pr-2",staticStyle:{background:"#10851a"}},[r("i",{staticClass:"fab fa-github",staticStyle:{transform:"translateY(3%) translateX(1%)"}})])]),r("a",{attrs:{href:"https://instagram.com/pedronogs"}},[r("div",{staticClass:"social-icons ml-3 pl-2 pr-2",staticStyle:{background:"#d3117c"}},[r("i",{staticClass:"fab fa-instagram",staticStyle:{transform:"translateX(-2%) translateY(2%)"}})])])]),r("div",{staticClass:"d-sm-none"},[r("i",{staticClass:"fas fa-bars",on:{click:function(a){t.drawer=!t.drawer}}})])]),r("v-main",{staticClass:"d-flex align-center"},[r("transition",{attrs:{name:"fade"}},[r("keep-alive",[r("router-view")],1)],1)],1)],1)},n=[],i=r["a"].extend({name:"App",data:function(){return{drawer:!1}}}),o=i,c=(e("034f"),e("2877")),l=e("6544"),u=e.n(l),d=e("7496"),f=e("f6c4"),p=e("f774"),m=Object(c["a"])(o,s,n,!1,null,null,null),h=m.exports;u()(m,{VApp:d["a"],VMain:f["a"],VNavigationDrawer:p["a"]});e("d3b7");var b=e("8c4f");r["a"].use(b["a"]);var v=[{path:"/",name:"About",component:function(){return Promise.all([e.e("chunk-085a2b80"),e.e("chunk-9cc1d202")]).then(e.bind(null,"f820"))}},{path:"/job",name:"Job",component:function(){return e.e("chunk-191f8fa1").then(e.bind(null,"e658"))}},{path:"/projects",name:"Projects",component:function(){return Promise.all([e.e("chunk-085a2b80"),e.e("chunk-28eb9ac6")]).then(e.bind(null,"acca"))}}],g=new b["a"]({routes:v}),y=g,C=e("2f62");r["a"].use(C["a"]);var x=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=e("f309");r["a"].use(k["a"]);var w=new k["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:y,store:x,vuetify:w,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.5ff6ad10.js.map