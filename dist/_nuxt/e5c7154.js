(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(e,t,n){"use strict";n.r(t);var r=n(7),c=(n(36),n(37),{name:"AppCasesFlex",data:function(){return{dataReady:!1,projects:null,highlightedProjects:null,projectsArr:[],casesAPI:"https://wp.scottlind.dk/wp-json/wp/v2/cases/",errors:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get(e.casesAPI);case 3:n=t.sent,e.projects=n.data,e.highlightedProjects=e.projects.filter((function(e){return 1==e.acf.highlighted})),console.log(e.highlightedProjects),e.dataReady=!0,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.errors.push(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}),o=n(20),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.dataReady?n("section",{attrs:{id:"cases"}},[n("div",{staticClass:"flex md:flex-row flex-col justify-center items-center"},[n("div",{staticClass:"mt-4 relative relative-20 mt-0 col-start-1"},[n("div",{staticClass:"relative space-y-2 md:space-y-6"},[n("div",{staticClass:"flex items-end justify-start space-x-2 md:space-x-6"},[n("NuxtLink",{attrs:{to:"/cases/"+e.highlightedProjects[0].slug}},[n("img",{staticClass:"\n              rounded-lg\n              shadow-lg\n              w-46\n              sm:w-56\n              md:w-96\n              transition\n              duration-700\n              ease-in-out\n              transform\n              hover:scale-105 hover:shadow-xl\n            ",attrs:{width:"200",src:e.highlightedProjects[0].acf.caseimage.sizes.medium,alt:"Billede for case: "+e.highlightedProjects[0].acf.heading}})]),e._v(" "),n("NuxtLink",{attrs:{to:"/cases/"+e.highlightedProjects[1].slug}},[n("img",{staticClass:"\n              rounded-lg\n              shadow-lg\n              w-46\n              sm:w-56\n              md:w-96\n              transition\n              duration-700\n              ease-in-out\n              transform\n              hover:scale-105 hover:shadow-xl\n            ",attrs:{width:"200",src:e.highlightedProjects[1].acf.caseimage.sizes.medium,alt:"Billede for case: "+e.highlightedProjects[1].acf.heading}})])],1),e._v(" "),n("div",{staticClass:"\n            flex\n            items-start\n            justify-center\n            lg:justify-start\n            space-x-2\n            md:space-x-6\n            md:ml-12\n          "},[n("NuxtLink",{attrs:{to:"/cases/"+e.highlightedProjects[2].slug}},[n("img",{staticClass:"\n              rounded-lg\n              shadow-lg\n              w-46\n              sm:w-56\n              md:w-96\n              transition\n              duration-700\n              ease-in-out\n              transform\n              hover:scale-105 hover:shadow-xl\n            ",attrs:{width:"200",src:e.highlightedProjects[2].acf.caseimage.sizes.medium,alt:"Billede for case: "+e.highlightedProjects[2].acf.heading}})]),e._v(" "),n("NuxtLink",{attrs:{to:"/cases/"+e.highlightedProjects[3].slug}},[n("img",{staticClass:"\n              rounded-lg\n              shadow-lg\n              w-46\n              sm:w-56\n              md:w-96\n              transition\n              duration-700\n              ease-in-out\n              transform\n              hover:scale-105 hover:shadow-xl\n            ",attrs:{width:"200",src:e.highlightedProjects[3].acf.caseimage.sizes.medium,alt:"Billede for case: "+e.highlightedProjects[3].acf.heading}})])],1)])])])]):e._e()}),[],!1,null,"42514527",null);t.default=component.exports}}]);