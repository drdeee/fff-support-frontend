(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{191:function(e,t,n){"use strict";n.r(t);n(86);var r=n(12),o=n(30),c=n(31),f=n(40),l=n(41),d=n(22),v=n(13),h=(n(69),n(36),n(11),n(43),n(23));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},j=function(e){Object(f.a)(l,e);var t,n=y(l);function l(){return Object(o.a)(this,l),n.apply(this,arguments)}return Object(c.a)(l,[{key:"IS_LOGGED_IN",get:function(){return this.$route.params,this.$config.DEV_NO_AUTH?"login"!==this.$route.name&&this.$config.DEV_NO_AUTH:this.$auth.loggedIn}},{key:"groups",get:function(){return this.$store.state.groups}},{key:"selectedGroup",get:function(){return this.$store.state.selectedGroup}},{key:"selectGroup",value:function(e){this.$store.commit("selectGroup",e.id)}},{key:"logout",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.logout();case 2:this.$router.push("/login");case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),l}(h.Vue),O=j=m([h.Component],j),_=n(19),component=Object(_.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{fixedTop:"",transparent:!0,type:"is-primary"},scopedSlots:e._u([{key:"brand",fn:function(){return[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:n(250),alt:"MessageDesk Logo"}})])]},proxy:!0},{key:"start",fn:function(){return["login"!==e.$route.name?r("b-navbar-dropdown",{attrs:{hoverable:""},scopedSlots:e._u([{key:"label",fn:function(){return[r("div",{staticStyle:{"min-width":"10vw","text-align":"center"}},[e.selectedGroup?r("div",[e._v(e._s(e.selectedGroup.name))]):r("em",[e._v("Gruppe auswählen")])])]},proxy:!0}],null,!1,4211882321)},[e._v(" "),e._l(e.groups,(function(t){return r("b-navbar-item",{key:t.id,attrs:{active:e.selectedGroup&&e.selectedGroup.id===t.id},on:{click:function(n){return e.selectGroup(t)}}},[e._v(e._s(t.name))])}))],2):r("div",{staticClass:"navbar-item"},[r("em",[e._v("Unangemeldet")])])]},proxy:!0},{key:"end",fn:function(){return["login"!==e.$route.name?r("b-navbar-item",{on:{click:function(t){return e.$router.push("/profil")}}},[e._v("Profil")]):e._e(),e._v(" "),"login"!==e.$route.name?r("b-navbar-item",{attrs:{target:"_blank"},on:{click:function(t){return e.logout()}}},[e._v("Abmelden")]):e._e()]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},192:function(e,t,n){"use strict";n.r(t);var r=n(19),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"mt-3",attrs:{shadow:"",fixedBottom:""},scopedSlots:e._u([{key:"start",fn:function(){return[n("b-navbar-item",{attrs:{tag:"router-link",to:"/admin"}},[n("b-icon",{attrs:{icon:"crown"}})],1)]},proxy:!0},{key:"end",fn:function(){return[n("b-navbar-item",{attrs:{tag:"a",href:e.$config.SUPPORT,target:"_blank"}},[e._v("Kontakt")]),e._v(" "),n("b-navbar-item",{attrs:{tag:"a",href:e.$config.IMPRESSUM,target:"_blank"}},[e._v("Impressum")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},197:function(e,t,n){"use strict";var r=n(31),o=n(30),c=n(40),f=n(41),l=n(22),d=n(13),v=(n(36),n(11),n(86),n(23));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n)}(v.Vue),j=m=y([v.Component],m),O=n(19),component=Object(O.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("div",{staticClass:"p-3 bg-light"},[n("Nuxt")],1),e._v(" "),n("Footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(191).default,Footer:n(192).default})},198:function(e,t,n){"use strict";var r=n(30),o=n(31),c=n(40),f=n(41),l=n(22),d=n(13),v=(n(36),n(11),n(86),n(23));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"selectedGroup",get:function(){return this.$store.state.selectedGroup}}]),n}(v.Vue),j=m=y([v.Component],m),O=n(19),component=Object(O.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("div",{staticClass:"p-3 bg-light"},[e.selectedGroup?n("div",[n("Nuxt")],1):n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-one-third"},[n("b-message",{attrs:{type:"is-dark"}},[n("div",{staticClass:"mb-1"},[e._v("Du musst zuerst eine Gruppe auswählen:")]),e._v(" "),n("GroupSelector"),e._v(" "),n("b-button",{staticClass:"mt-1",attrs:{size:"is-small",expanded:"",type:"is-dark",inverted:""},on:{click:function(t){return e.$router.push("/")}}},[e._v("Zurück zum Start ")])],1)],1)])]),e._v(" "),n("Footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(191).default,GroupSelector:n(201).default,Footer:n(192).default})},201:function(e,t,n){"use strict";n.r(t);var r=n(30),o=n(31),c=n(40),f=n(41),l=n(22),d=n(13),v=(n(36),n(11),n(86),n(23));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"groups",get:function(){return this.$store.state.groups}},{key:"selectedGroup",get:function(){return this.$store.state.selectedGroup||!1}}]),n}(v.Vue),j=m=y([v.Component],m),O=n(19),component=Object(O.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-select",{attrs:{value:"not_selected",expanded:""},on:{input:function(t){return e.$store.commit("selectGroup",t)}}},[n("option",{staticClass:"has-text-centered",attrs:{disabled:"",value:"not_selected"}},[e._v("Gruppe wählen")]),e._v(" "),e._l(e.groups,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],2)],1)}),[],!1,null,null,null);t.default=component.exports},202:function(e,t,n){n(203),e.exports=n(204)},247:function(e,t,n){},250:function(e,t,n){e.exports=n.p+"img/logo.e79eaf5.png"},251:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o}));n(252),n(11);function r(){return{groups:[{id:"root",name:"MessageDesk Admin",canManage:!0,isRoot:!0,tickets:{open:5,progress:3,closed:9},notifications:{open:2,progress:0,closed:0}},{id:"asfasassdffasf",name:"Messenger-AG",canManage:!0,tickets:{open:0,progress:1,closed:3},notifications:{open:0,progress:0,closed:0}},{id:"asfasfjfgjgffasf",name:"Regio-AG",canManage:!1,tickets:{open:2,progress:5,closed:11},notifications:{open:0,progress:5,closed:0}},{id:"asfasasaqwewsfasf",name:"Website-AG",canManage:!0,tickets:{open:5,progress:3,closed:9},notifications:{open:2,progress:0,closed:0}},{id:"asfasasswwwffasf",name:"Messenger-AG",canManage:!0,tickets:{open:0,progress:1,closed:3},notifications:{open:0,progress:0,closed:0}},{id:"asfasfjfglllgffasf",name:"Regio-AG",canManage:!1,tickets:{open:2,progress:5,closed:11},notifications:{open:0,progress:5,closed:0}},{id:"asfashjkhjksasfasf",name:"Website-AG",canManage:!0,tickets:{open:5,progress:3,closed:9},notifications:{open:2,progress:0,closed:0}},{id:"asfasassdghjghjffasf",name:"Messenger-AG",canManage:!0,tickets:{open:0,progress:1,closed:3},notifications:{open:0,progress:0,closed:0}},{id:"asfasfjfgjgffasdasf",name:"Regio-AG",canManage:!1,tickets:{open:2,progress:5,closed:11},notifications:{open:0,progress:5,closed:0}}],selectedGroup:null}}var o={selectGroup:function(e,t){e.selectedGroup=e.groups.find((function(g){return g.id===t}))||null}}}},[[202,15,2,16]]]);