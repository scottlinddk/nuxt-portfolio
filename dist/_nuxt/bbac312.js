(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,9,10,11,13,14,15],{244:function(t,e,n){"use strict";n.r(e);var l={name:"AppBtn",props:{text:String,link:String}},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("NuxtLink",{staticClass:"\n      mx-auto\n      inline-flex\n      items-center\n      justify-center\n      h-12\n      my-6\n      px-6\n      font-medium\n      tracking-wide\n      text-white\n      transition\n      duration-200\n      rounded\n      shadow-md\n      bg-green-500\n      hover:bg-green-400 hover:shadow-xl\n      focus:shadow-outline focus:outline-none\n    ",attrs:{to:"/"+t.link}},[t._v(t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("a56e4128",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";(function(t){var l=n(7);n(36);e.a={name:"Hero",props:{wpObj:{type:Object}},data:function(){return{api:t.env.HOME,heroObj:{},errors:[]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("https://wp.scottlind.dk/wp-json/wp/v2/pages?slug=hjem");case 3:n=e.sent,t.heroObj=n.data[0].acf,console.log(t.heroObj),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.errors.push(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}).call(this,n(96))},248:function(t,e,n){"use strict";n(246)},249:function(t,e,n){var l=n(97)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n@-webkit-keyframes scroll{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-1750px)\n}\n}\n@keyframes scroll{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-1750px)\n}\n}\n.slider{\n  height:100px;\n  margin:auto;\n  overflow:hidden;\n  position:relative;\n  width:100%\n}\n.slider:after{\n  right:0;\n  top:0;\n  transform:rotate(180deg)\n}\n.slider:before{\n  left:0;\n  top:0\n}\n.slider .slide-track{\n  -webkit-animation:scroll 60s linear infinite;\n  animation:scroll 60s linear infinite;\n  display:flex;\n  width:3500px\n}\n.slider .slide{\n  height:100px;\n  width:250px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},250:function(t,e,n){"use strict";n.r(e);var l=[{index:1,logo:"html5.svg",title:"HTML5"},{index:2,logo:"css3.svg",title:"CSS3"},{index:3,logo:"javascript.svg",title:"Javascript"},{index:4,logo:"vuedotjs.svg",title:"VueJS"},{index:5,logo:"nuxtdotjs.svg",title:"NuxtJS"},{index:6,logo:"sass.svg",title:"Sass"},{index:7,logo:"nodedotjs.svg",title:"Node.js"},{index:8,logo:"express.svg",title:"Express"},{index:9,logo:"microsoftsqlserver.svg",title:"MSSQL"},{index:10,logo:"github.svg",title:"Github"},{index:11,logo:"netlify.svg",title:"Netlify"},{index:12,logo:"vercel.svg",title:"Vercel"},{index:13,logo:"wordpress.svg",title:"WordPress"},{index:14,logo:"tailwindcss.svg",title:"Tailwind CSS"},{index:15,logo:"php.svg",title:"PHP"},{index:16,logo:"npm.svg",title:"NPM"},{index:17,logo:"postman.svg",title:"Postman"}],r={name:"SliderComponent",data:function(){return{icons:l}}},o=(n(248),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative w-full mt-6"},[n("div",{staticClass:"\n      relative\n      w-full\n      d-container-content\n      flex flex-col\n      items-center\n      xl:py-6\n    "},[n("div",{staticClass:"flex flex-col w-full items-center col-span-12"},[t._m(0),t._v(" "),n("p",{staticClass:"\n          font-normal\n          text-center text-body-base\n          md:text-body-lg\n          2xl:text-body-xl\n          mb-6\n          max-w-prose\n        "},[t._v("\n        Gennem forskellige cases har jeg arbejdet med forskellige teknologier, sprog og værktøjer.\n      ")]),t._v(" "),n("div",{staticClass:"slider mb-2"},[n("ul",{staticClass:"slide-track"},t._l(t.icons,(function(e){return n("li",{key:e.index,staticClass:"flex flex-col md:mx-12 items-center slide"},[n("img",{staticClass:"h-12",attrs:{src:"/icons/"+e.logo,alt:e.title,title:e.title}}),t._v(" "),n("p",{staticClass:"text-sm mt-2"},[t._v(t._s(e.title))])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2 mt-6"},[n("h2",{staticClass:"text-gray-900 text-center\n        mb-6\n        text-2xl\n        font-bold\n        tracking-tight\n        sm:text-4xl"},[t._v("Hvad har jeg erfaring med?")])])}],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var l={name:"GlowBtn",props:{wpObj:{type:Object}}},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative group"},[n("div",{staticClass:"absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg opacity-75 filter blur \n  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"}),t._v(" "),n("NuxtLink",{staticClass:"relative px-7 py-4 bg-green-500 rounded-lg leading-none flex items-center divide-x divide-gray-600",attrs:{to:"#profil"}},[n("span",{staticClass:"flex items-center space-x-5 pr-6"},[n("svg",{staticClass:"h-6 w-6 text-green-100",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}})])]),t._v(" "),n("span",{staticClass:"text-green-200 pl-6 group-hover:text-green-50 transition duration-200"},[t._v(t._s(t.wpObj.cta)+" →")])])],1)}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var l={name:"ProfileCard",props:{link:String,profileImage:String}},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8 relative py-26 lg:mt-20",attrs:{id:"profil"}},[n("h2",{staticClass:"\n    text-gray-900\n      text-center\n      mb-6\n      text-2xl\n      font-bold\n      tracking-tight\n      sm:text-4xl\n    "},[t._v("\n    Min profil\n  ")]),t._v(" "),n("article",[n("NuxtLink",{staticClass:"\n        relative\n        mx-auto\n        w-full\n        md:w-2/3\n        block\n        px-8\n        py-6\n        overflow-hidden\n        bg-gray-50\n        border border-gray-100\n        rounded-lg\n        hover:shadow-lg\n        transition\n        hover:shadow-xl hover:boder-none\n        focus:shadow-outline focus:outline-none\n      ",attrs:{to:"/"+t.link}},[n("span",{staticClass:"\n          absolute\n          text-white text-center\n          mt-4\n          px-5\n          inset-x-0\n          bottom-0\n          h-6\n          bg-gradient-to-r\n          from-green-300\n          via-blue-500\n          to-purple-600\n        "},[t._v("Jeg søger praktik til januar 2022")]),t._v(" "),n("div",{staticClass:"justify-between mb-6 sm:flex"},[n("div",[n("h3",{staticClass:"text-xl font-bold text-gray-900"},[t._v("\n            Multimediedesignstuderende med UX/UI baggrund\n          ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xs font-medium text-gray-600"},[t._v("Scott Lind")])]),t._v(" "),n("div",{staticClass:"flex-shrink-0 hidden ml-3 sm:block"},[n("img",{staticClass:"object-cover w-32 h-full rounded-lg shadow-sm",attrs:{src:t.profileImage,alt:""}})])])])],1)])}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var l=n(7),r=(n(36),n(43),{name:"RecentCases",data:function(){return{dataReady:!1,recentCases:null,casesArr:null,api:"https://wp.scottlind.dk/wp-json/wp/v2/cases/"}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.api);case 3:return n=e.sent,e.next=6,n.data;case 6:t.casesArr=e.sent,t.recentCases=t.casesArr.slice(0,2),t.dataReady=!0,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.errors.push(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dataReady?n("section",{staticClass:"max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 relative py-26 mt-20"},[n("div",{staticClass:"relative"},[n("div",{staticClass:"grid grid-cols-1 lg:items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"mt-10 justify-center"},[n("div",{staticClass:"relative flex flex-row space-y-4"},t._l(t.recentCases,(function(t){return n("div",{key:t.id,staticClass:"flex justify-center items-center space-x-4"},[n("NuxtLink",{attrs:{to:"/cases/"+t.slug}},[n("img",{staticClass:"\n              mx-auto\n                rounded-lg\n                shadow-lg\n                transition\n                duration-200\n                hover:shadow-2xl\n                cursor-pointer\n                h-full\n                w-3/5\n                md:w-3/5\n              ",attrs:{width:"360",src:t.acf.caseimage.sizes.medium_large,alt:t.title.rendered}})])],1)})),0)])])]),t._v(" "),n("AppBtn",{attrs:{link:"cases",text:"Se cases"}})],1):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center lg:max-w-2xl mx-auto"},[n("h2",{staticClass:"mb-6 text-2xl font-bold tracking-tight sm:text-4xl"},[t._v("\n          Se hvad jeg for nyligt har haft gang\n        ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300"},[t._v("\n          Helt vanvittigt tekst yo\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBtn:n(244).default})},263:function(t,e,n){"use strict";n.r(e);var l={name:"Contact"},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-24",attrs:{role:"banner"}},[n("div",{staticClass:"mx-auto max-w-screen-xl"},[n("div",{staticClass:"mx-auto text-center"},[n("h2",{staticClass:"\n          text-gray-900 text-center\n          mb-6\n          text-2xl\n          font-bold\n          tracking-tight\n          sm:text-4xl\n        "},[t._v("\n        Contact\n      ")]),t._v(" "),n("p",{staticClass:"max-w-xl mx-auto mt-6 text-lg"},[t._v("\n        Text\n      ")]),t._v(" "),n("div",{staticClass:"mt-8 sm:justify-center sm:flex"},[n("AppBtn",{attrs:{link:"kontakt",text:"Kontakt mig for faen"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBtn:n(244).default})},264:function(t,e,n){"use strict";n.r(e);var l=n(247).a,r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative flex flex-col pt-8 md:pt-16 pb-4 lg:pt-0 md:flex-row lg:pb-0"},[n("div",{staticClass:"\n      flex flex-col\n      items-start\n      w-full\n      max-w-xl\n      px-8\n      mx-auto\n      lg:px-8 lg:max-w-screen-xl\n    "},[n("div",{staticClass:"mb-16 lg:my-40 lg:max-w-lg lg:pr-5"},[n("div",{staticClass:"max-w-xl mb-6"},[n("h1",{staticClass:"\n            max-w-lg\n            mb-6\n            text-3xl\n            font-bold\n            leading-8\n            tracking-tight\n            sm:text-4xl\n            text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-800\n          "},[t._v("\n          "+t._s(t.heroObj.tagline)+" "),n("span",{staticClass:"text-white"},[t._v("👨🏼‍💻")])]),t._v(" "),n("p",{staticClass:"text-base text-gray-700 md:text-lg"},[t._v("\n          "+t._s(t.heroObj.description)+"\n        ")])]),t._v(" "),n("div",{staticClass:"flex flex-col items-center md:flex-row"},[n("GlowBtn",{attrs:{"wp-obj":t.heroObj}})],1)])]),t._v(" "),n("div",{staticClass:"\n      inset-y-0\n      right-0\n      w-full\n      max-w-xl\n      px-4\n      mx-auto\n      lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute\n      xl:px-0\n    "},[n("img",{staticClass:"\n        object-contain\n        w-full\n        h-56\n        hidden\n        md:block\n        lg:rounded-none lg:shadow-none\n        sm:h-96\n        lg:h-full\n      ",attrs:{src:t.heroObj.image,alt:"Billede af Scott"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlowBtn:n(251).default})},272:function(t,e,n){"use strict";n.r(e);var l=n(7),r=(n(36),{name:"Hjem",data:function(){return{dataReady:!1,wpObj:null,profileImage:null,api:"https://wp.scottlind.dk/wp-json/wp/v2/pages?slug=hjem",casesAPI:"https://wp.scottlind.dk/wp-json/wp/v2/pages?slug=hjem",errors:[]}},created:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get(t.api);case 3:return n=e.sent,e.next=6,n.data[0];case 6:return t.wpObj=e.sent,e.next=9,t.wpObj.acf.profile_image.url;case 9:t.profileImage=e.sent,console.log(t.wpObj),t.dataReady=!0,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t.errors.push(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}),o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dataReady?n("main",[n("Hero",{attrs:{"wp-obj":t.wpObj.acf}}),t._v(" "),n("ProfileCard",{attrs:{link:"mig","profile-image":t.profileImage}}),t._v(" "),n("RecentCases"),t._v(" "),n("SliderComponent"),t._v(" "),n("Contact")],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(264).default,ProfileCard:n(261).default,RecentCases:n(262).default,SliderComponent:n(250).default,Contact:n(263).default})}}]);