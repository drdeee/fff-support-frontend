(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,e,n){},277:function(t,e,n){"use strict";n(275)},280:function(t,e,n){"use strict";n.r(e);var c={props:{ticket:{type:Object,required:!0},type:{type:String,required:!1,default:"dark"}},methods:{test:function(){this.$emit("claim")}}},r=(n(277),n(19)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-message",{staticClass:"normal mb-2",attrs:{type:"is-"+t.type}},[n("div",{staticClass:"is-flex is-justify-content-space-between"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.ticket.title))]),t._v(" "),n("p",{on:{click:function(e){return t.test()}}},[n("b-icon",{staticClass:"mouse normal",attrs:{pack:t.ticket.claimed?"fas":"far",icon:"bookmark"}})],1)]),t._v(" "),n("div",{staticClass:"is-flex is-justify-content-space-between "},[n("b-icon",{staticClass:"normal",attrs:{pack:"fab",icon:t.ticket.source,size:"is-medium"}}),t._v(" "),n("p",{staticClass:"subtitle is-6 mb-1"},[t._v(t._s(t.ticket.creator))])],1),t._v(" "),n("hr",{staticClass:"my-1"}),t._v(" "),n("div",{staticClass:"normal"},[t._v("\n    "+t._s(t.ticket.description)+"\n  ")]),t._v(" "),n("hr",{staticClass:"my-1 mb-2"}),t._v(" "),n("div",{staticClass:"is-flex is-justify-content-end mb-2"},[t._l(t.ticket.users,(function(e){return n("div",{key:t.ticket.users.indexOf(e),staticClass:"mr-1"},[n("b-tooltip",{attrs:{position:"is-top"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("\n          "+t._s(e)+"\n        ")]},proxy:!0}],null,!0)},[n("figure",{staticClass:"p-1 has-background-grey-lighter rounded rect"},[n("b-icon",{staticClass:"normal",attrs:{icon:"user"}})],1)])],1)})),t._v(" "),n("div",{staticClass:"mr-1"},[n("b-tooltip",{attrs:{position:"is-top",type:"is-info"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" Beitreten ")]},proxy:!0}])},[n("figure",{staticClass:"p-1 rect"},[n("b-icon",{staticClass:"normal",attrs:{icon:"plus-circle"}})],1)])],1)],2),t._v(" "),n("b-button",{attrs:{size:"is-small",type:"is-"+t.type,expanded:""}},[t._v("Zum Ticket")])],1)}),[],!1,null,"7a1ba874",null);e.default=component.exports}}]);