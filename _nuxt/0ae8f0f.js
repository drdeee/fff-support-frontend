(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5,7],{274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){"use strict";n(274)},277:function(e,t,n){"use strict";n(275)},279:function(e,t,n){"use strict";n.r(t);var r=n(31),c=n(30),o=n(40),l=n(41),d=n(22),f=n(13),v=(n(36),n(11),n(86),n(23));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n)}(v.Vue);h([Object(v.Prop)({required:!0})],y.prototype,"group",void 0),h([Object(v.Prop)({required:!1,default:!1})],y.prototype,"active",void 0),h([Object(v.Prop)({required:!1,default:!0})],y.prototype,"mouse",void 0),h([Object(v.Prop)({required:!1,default:!0})],y.prototype,"groupName",void 0);var _=y=h([v.Component],y),C=(n(276),n(19)),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{class:{panel:!0,"is-primary":e.active}},[e.groupName?n("div",{staticClass:"panel-heading is-flex is-justify-content-space-between",class:{mouse:e.mouse},on:{click:function(t){return e.$emit("click")}}},[n("div",[e._v(e._s(e.group.name))]),e._v(" "),n("div",[e.group.isRoot?n("b-tooltip",{attrs:{multilined:"",position:"is-right",type:"is-info"},scopedSlots:e._u([{key:"content",fn:function(){return[n("b",[e._v("Root-Gruppe")]),n("br"),e._v("Dies ist die Admin-Gruppe von MessageDesk.\n          Hierher werden alle anstößigen Tickets gemeldet und deren Ersteller\n          blockiert.")]},proxy:!0}],null,!1,397476497)},[e._v(" "),n("b-icon",{attrs:{icon:"crown"}})],1):e._e()],1)]):e._e(),e._v(" "),n("a",{staticClass:"panel-block no-hover"},[n("span",{staticClass:"panel-icon"},[e._v(e._s(e.group.tickets.open))]),e._v("\n    Offen\n    "),0!=e.group.notifications.open?n("b-tag",{staticClass:"ml-2",attrs:{type:"is-success",size:"is-small"}},[e._v(e._s(e.group.notifications.open)+" Neu!")]):e._e()],1),e._v(" "),n("a",{staticClass:"panel-block no-hover"},[n("span",{staticClass:"panel-icon"},[e._v(e._s(e.group.tickets.progress))]),e._v("\n    In Bearbeitung\n    "),0!=e.group.notifications.progress?n("b-tag",{staticClass:"ml-2",attrs:{type:"is-success",size:"is-small"}},[e._v(e._s(e.group.notifications.progress)+" Neu!")]):e._e()],1),e._v(" "),n("a",{staticClass:"panel-block no-hover"},[n("span",{staticClass:"panel-icon"},[e._v(e._s(e.group.tickets.closed))]),e._v("\n    Abgeschlossen\n    "),0!=e.group.notifications.closed?n("b-tag",{staticClass:"ml-2",attrs:{type:"is-success",size:"is-small"}},[e._v(e._s(e.group.notifications.closed)+" Neu!")]):e._e()],1)])}),[],!1,null,"709a72b9",null);t.default=component.exports},280:function(e,t,n){"use strict";n.r(t);var r={props:{ticket:{type:Object,required:!0},type:{type:String,required:!1,default:"dark"}},methods:{test:function(){this.$emit("claim")}}},c=(n(277),n(19)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-message",{staticClass:"normal mb-2",attrs:{type:"is-"+e.type}},[n("div",{staticClass:"is-flex is-justify-content-space-between"},[n("p",{staticClass:"title is-4"},[e._v(e._s(e.ticket.title))]),e._v(" "),n("p",{on:{click:function(t){return e.test()}}},[n("b-icon",{staticClass:"mouse normal",attrs:{pack:e.ticket.claimed?"fas":"far",icon:"bookmark"}})],1)]),e._v(" "),n("div",{staticClass:"is-flex is-justify-content-space-between "},[n("b-icon",{staticClass:"normal",attrs:{pack:"fab",icon:e.ticket.source,size:"is-medium"}}),e._v(" "),n("p",{staticClass:"subtitle is-6 mb-1"},[e._v(e._s(e.ticket.creator))])],1),e._v(" "),n("hr",{staticClass:"my-1"}),e._v(" "),n("div",{staticClass:"normal"},[e._v("\n    "+e._s(e.ticket.description)+"\n  ")]),e._v(" "),n("hr",{staticClass:"my-1 mb-2"}),e._v(" "),n("div",{staticClass:"is-flex is-justify-content-end mb-2"},[e._l(e.ticket.users,(function(t){return n("div",{key:e.ticket.users.indexOf(t),staticClass:"mr-1"},[n("b-tooltip",{attrs:{position:"is-top"},scopedSlots:e._u([{key:"content",fn:function(){return[e._v("\n          "+e._s(t)+"\n        ")]},proxy:!0}],null,!0)},[n("figure",{staticClass:"p-1 has-background-grey-lighter rounded rect"},[n("b-icon",{staticClass:"normal",attrs:{icon:"user"}})],1)])],1)})),e._v(" "),n("div",{staticClass:"mr-1"},[n("b-tooltip",{attrs:{position:"is-top",type:"is-info"},scopedSlots:e._u([{key:"content",fn:function(){return[e._v(" Beitreten ")]},proxy:!0}])},[n("figure",{staticClass:"p-1 rect"},[n("b-icon",{staticClass:"normal",attrs:{icon:"plus-circle"}})],1)])],1)],2),e._v(" "),n("b-button",{attrs:{size:"is-small",type:"is-"+e.type,expanded:""}},[e._v("Zum Ticket")])],1)}),[],!1,null,"7a1ba874",null);t.default=component.exports},287:function(e,t,n){"use strict";n.r(t);var r=n(30),c=n(31),o=n(40),l=n(41),d=n(22),f=n(13),v=(n(36),n(11),n(86),n(23));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).clicked=!1,e}return Object(c.a)(n,[{key:"confirm",value:function(){this.clicked=!1,this.$emit("confirm")}}]),n}(v.Vue),_=y=h([v.Component],y),C=n(19),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.clicked?n("div",{staticClass:"is-flex"},[n("div",{on:{click:function(t){return e.confirm()}}},[n("b-icon",{staticClass:"mouse",attrs:{icon:"check",type:"is-success"}})],1),e._v(" "),n("div",{on:{click:function(t){e.clicked=!1}}},[n("b-icon",{staticClass:"mouse",attrs:{icon:"ban",type:"is-danger"}})],1)]):e._e(),e._v(" "),e.clicked?e._e():n("div",{on:{click:function(t){e.clicked=!0}}},[n("b-icon",{staticClass:"mouse",attrs:{icon:"trash",type:"is-danger"}})],1)])}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,n){"use strict";n.r(t);n(86);var r=n(30),c=n(31),o=n(40),l=n(41),d=n(22),f=n(13),v=(n(36),n(11),n(200),n(23));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},y=n(286),_=y.Draggable,C=y.Container,k=function(e){Object(o.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).moveData={added:null,addedColumn:null,removed:null,removedColumn:null},e.open=[{id:1,type:"danger",title:"Cloud-Account benötigt",description:"Hi, wir wollen für unsere OG gerne einen Cloud-Account bekommen ;)",source:"telegram",creator:"DrDeeee",claimed:!0,users:["AadAD","asfasfasasdasdasdas","asfsafasf"]}],e.progress=[{id:2,title:"E-Mail für OG Pirna",description:"Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",source:"telegram",creator:"DrDeeee",claimed:!0,users:["AadAD","asfasfas","asfsafasf"]},{id:3,title:"E-Mail für OG Pirna 2",description:"Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",source:"telegram",creator:"DrDeeee",claimed:!0,users:["AadasdasdD","asfasfasas","asfsaasdasfasf"]}],e.finished=[{id:4,title:"E-Mail für OG Pirna 3",description:"Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",source:"discord",creator:"DrDeeee",claimed:!0,users:["AadAD","asfasfas","asfsafasf"]},{id:5,title:"E-Mail für OG Pirna 4",description:"Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",source:"whatsapp",creator:"DrDeeee",claimed:!0,users:["AadaasdasdsdasdD"]}],e}return Object(c.a)(n,[{key:"drop",value:function(e,t){var n=this;if(null!=t.removedIndex&&(this.moveData.removed=t.removedIndex,this.moveData.removedColumn=e),null!=t.addedIndex&&(this.moveData.added=t.addedIndex,this.moveData.addedColumn=e),null!=this.moveData.added&&null!=this.moveData.removed){if(this.moveData.addedColumn===this.moveData.removedColumn){var r=n[this.moveData.removedColumn][this.moveData.removed];n[this.moveData.removedColumn].splice(this.moveData.removed,1),n[this.moveData.addedColumn].splice(this.moveData.added,0,r)}else n[this.moveData.addedColumn].splice(this.moveData.added,0,n[this.moveData.removedColumn].splice(this.moveData.removedIndex,1)[0]);this.moveData={added:null,addedColumn:null,removed:null,removedColumn:null}}}}]),n}(v.Vue),O=k=h([Object(v.Component)({components:{Draggable:_,Container:C}})],k),j=n(19),component=Object(j.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[e._v("Offen")]),e._v(" "),n("div",{staticClass:"card-header-icon"},[n("b-tag",{attrs:{type:"is-info"}},[e._v(e._s(e.open.length))])],1)]),e._v(" "),n("div",{staticClass:"card-content"},[n("Container",{attrs:{"group-name":"dnd"},on:{drop:function(t){return e.drop("open",t)}}},e._l(e.open,(function(e){return n("Draggable",{key:e.id},[n("ticket",{attrs:{ticket:e,type:e.type||"dark"}})],1)})),1)],1)])]),e._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[e._v("In Bearbeitung")]),e._v(" "),n("div",{staticClass:"card-header-icon"},[n("b-tag",{attrs:{type:"is-info"}},[e._v(e._s(e.progress.length))])],1)]),e._v(" "),n("div",{staticClass:"card-content"},[n("Container",{attrs:{"group-name":"dnd"},on:{drop:function(t){return e.drop("progress",t)}}},e._l(e.progress,(function(e){return n("Draggable",{key:e.id},[n("ticket",{attrs:{ticket:e,type:e.type||"dark"}})],1)})),1)],1)])]),e._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[e._v("Abgeschlossen")]),e._v(" "),n("div",{staticClass:"card-header-icon"},[n("b-tag",{attrs:{type:"is-info"}},[e._v(e._s(e.finished.length))])],1)]),e._v(" "),n("div",{staticClass:"card-content"},[n("Container",{attrs:{"group-name":"dnd"},on:{drop:function(t){return e.drop("finished",t)}}},e._l(e.finished,(function(e){return n("Draggable",{key:e.id},[n("ticket",{attrs:{ticket:e,type:e.type||"dark"}})],1)})),1)],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Ticket:n(280).default})},291:function(e,t,n){"use strict";n.r(t);n(86);var r=n(30),c=n(31),o=n(40),l=n(41),d=n(22),f=n(13),v=(n(36),n(11),n(44),n(59),n(23));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},y=function(e){Object(o.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).description="",e.editDescription=!1,e}return Object(c.a)(n,[{key:"group",get:function(){return this.$store.state.selectedGroup}}]),n}(v.Vue),_=y=h([Object(v.Component)({layout:"group"})],y),C=n(19),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.group?n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-quarter"},[n("div",{staticClass:"px-3"},[n("GroupSummary",{attrs:{group:e.group,groupName:!1}})],1),e._v(" "),n("div",{staticClass:"card mx-3 mt-3"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[e._v("Gruppen-Beschreibung")]),e._v(" "),n("div",{staticClass:"card-header-icon",on:{click:function(t){e.editDescription=!e.editDescription}}},[e.editDescription?n("b-icon",{attrs:{icon:"check"}}):n("b-icon",{attrs:{icon:"edit"}})],1)]),e._v(" "),e.editDescription?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],ref:"textarea",staticClass:"textarea card-content",domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}):n("div",{staticClass:"card-content"},[e._v("\n        "+e._s(e.description)+"\n      ")])]),e._v(" "),n("div",{staticClass:"panel is-dark mx-3 mt-3"},[n("div",{staticClass:"panel-heading"},[e._v("Gruppen-Mitglieder")]),e._v(" "),n("div",{staticStyle:{"max-height":"30vh",overflow:"auto"}},[n("div",{staticClass:"panel-block"},[n("b-icon",{staticClass:"panel-icon",attrs:{icon:"user"}}),e._v(" "),n("div",{staticClass:"is-flex is-justify-content-space-between w-full"},[n("div",[e._v("Elias")]),e._v(" "),n("div",[n("UtilConfirm",{on:{confirm:function(t){e.test++}}})],1)])],1),e._v(" "),n("div",{staticClass:"panel-block p-0"},[n("b-button",{attrs:{tag:"a",size:"is-small",type:"is-text",expanded:""},on:{click:function(t){return e.$router.push("/group/add-members")}}},[e._v("Mitglied hinzufügen\n          ")])],1)])])]),e._v(" "),n("div",{staticClass:"column"},[n("TicketKanban")],1)]):n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-one-third"},[n("b-message",{attrs:{type:"is-warning"}},[n("div",{staticClass:"mb-1"},[e._v("Du musst zuerst eine Gruppe auswählen:")]),e._v(" "),n("GroupSelector")],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GroupSummary:n(279).default,UtilConfirm:n(287).default,TicketKanban:n(288).default,GroupSelector:n(201).default})}}]);