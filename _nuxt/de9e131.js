(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,5],{302:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("62710b45",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({data:function(){return{showMenu:!1,windowWidth:1280}},computed:{isMobile:function(){return this.windowWidth<=768}},mounted:function(){var t=this;this.windowWidth=window.innerWidth,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))},methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}}),o=(n(305),n(36)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-end",class:{"w-full":t.isMobile}},[n("transition",{attrs:{name:"menu"}},[t.showMenu||!t.isMobile?n("nav",{staticClass:"p-6 bg-primary-transparent w-screen md:w-full"},[t.isMobile?n("button",{staticClass:"text-3xl p-4 absolute top-0 right-0",on:{click:t.toggleMenu}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1):t._e(),t._v(" "),n("ul",{staticClass:"flex flex-row justify-between text-lg uppercase text-white",class:{"flex-col":t.isMobile,"space-x-2":!t.isMobile}},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#skills"}}},[t._v("Skills")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"#projects"}}},[t._v("Projekte")])],1)])]):t._e()]),t._v(" "),t.showMenu&&t.isMobile?t._e():n("button",{staticClass:"text-3xl p-4 absolute top-0 right-0",on:{click:t.toggleMenu}},[t.isMobile?n("font-awesome-icon",{attrs:{icon:["fas","bars"]}}):t._e()],1)],1)}),[],!1,null,"3ab0448e",null);e.default=component.exports},305:function(t,e,n){"use strict";n(302)},306:function(t,e,n){var r=n(58)((function(i){return i[1]}));r.push([t.i,".menu-enter-active[data-v-3ab0448e],.menu-leave-active[data-v-3ab0448e]{transition:all 1s;transition-timing-function:ease-out;opacity:1;transform:translateY(0)}.menu-enter[data-v-3ab0448e],.menu-leave-to[data-v-3ab0448e]{opacity:0;transform:translateY(-200px)}",""]),r.locals={},t.exports=r},307:function(t,e,n){"use strict";var r=n(6),o=n(2),l=n(3),c=n(60),f=n(219),d=n(218),v=n(4),w=o.RangeError,h=o.String,m=Math.floor,x=l(d),_=l("".slice),C=l(1..toFixed),M=function(t,e,n){return 0===e?n:e%2==1?M(t,e-1,n*t):M(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},j=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,n,r,o,l=f(this),d=c(t),data=[0,0,0,0,0,0],v="",m="0";if(d<0||d>20)throw w("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(v="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*M(2,69,1))-69)<0?l*M(2,-e,1):l/M(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),r=d;r>=7;)k(data,1e7,0),r-=7;for(k(data,M(10,r,1),0),r=e-1;r>=23;)j(data,1<<23),r-=23;j(data,1<<r),k(data,1,1),j(data,2),m=y(data)}else k(data,0,n),k(data,1<<-e,0),m=y(data)+x("0",d);return m=d>0?v+((o=m.length)<=d?"0."+x("0",d-o)+m:_(m,0,o-d)+"."+_(m,o-d)):v+m}})},310:function(t,e,n){"use strict";n.r(e);n(307);var r=n(0).a.extend({computed:{age:function(){return(Math.round((new Date).valueOf()-new Date(2006,4,24).valueOf())/31536e6).toFixed(2)}}}),o=n(36),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen w-full bg-none"},[n("nuxt-img",{staticClass:"absolute w-full h-[120%] md:h-[110]vh object-cover",attrs:{src:"/background.jpg"}}),t._v(" "),n("div",{staticClass:"h-full w-full bg-transparent flex justify-center items-center p-8 text-gray-900 z-50"},[n("div",{staticClass:"flex flex-col md:flex-row gap-8 max-w-sm md:max-w-2xl md:items-center bg-teal-100 p-8 w-full md:mb-0 rounded-xl transform hover:scale-95 transition duration-1000 ease-in-out"},[n("nuxt-img",{staticClass:"flex-1 rounded-full tranform transition duration-1000 ease-in-out hover:rotate-2 w-full md:w-1/2",attrs:{src:"/alwin.jpeg",alt:"alwin"}}),t._v(" "),n("div",{staticClass:"flex-1"},[n("h1",{staticClass:"text-4xl font-semibold tracking-tight"},[t._v("Alwin Lohrie")]),t._v(" "),n("p",[t._v(t._s(t.age)+" Jahre alt")]),t._v(" "),n("p",[t._v("Maker")])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(37),n(0)),l=n(303),c=o.a.extend({components:{Navbar:l.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("posts",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),f=n(36),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full flex flex-row place-content-end"},[n("navbar",{staticClass:"fixed top-0 z-50"})],1),t._v(" "),n("section",{staticClass:"w-full flex flex-row justify-center"},[n("main",{staticClass:"w-10/12 sm:w-8/12 mt-16"},[n("header",{staticClass:"relative overflow-hidden mb-4"},[n("h1",{staticClass:"absolute bottom-0 m-8 font-bold text-3xl text-white z-50"},[t._v("\n          "+t._s(t.article.title)+"\n        ")]),t._v(" "),n("nuxt-img",{staticClass:"object-cover h-96 w-full article-image rounded-md transform hover:scale-105 transition transi-duration-500",attrs:{width:"1280",height:"584",src:t.article.image}})],1),t._v(" "),n("nuxt-content",{staticClass:"prose prose-green max-w-full prose-pre:p-0",attrs:{document:t.article}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(303).default,Header:n(310).default})}}]);