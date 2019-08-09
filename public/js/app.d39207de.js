(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],p=0,f=[];p<i.length;p++)s=i[p],n[s]&&f.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"044d":function(e,t,a){},2641:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"search"},[a("h1",[e._v("Player Stats")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[e._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.platform=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"origin"}},[e._v("PC")]),a("option",{attrs:{value:"psn"}},[e._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[e._v("XBox")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[e._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gamertag,expression:"gamertag"}],attrs:{type:"text",id:"gamertag",name:"text",placeholder:"Origin ID, PSN ID, XBox Live ID"},domProps:{value:e.gamertag},on:{input:function(t){t.target.composing||(e.gamertag=t.target.value)}}})]),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])}],i={name:"Search",data:function(){return{platform:"origin",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag)):this.$toasted.show("Enter Gamertag",{duration:3e3,icon:"exclamation-triangle"})}}},l=i,c=a("2877"),u=Object(c["a"])(l,o,s,!1,null,null,null),p=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e.loading?a("div",[a("h3",[e._v("Loading")])]):e._e(),e.error?a("div",[a("h1",[e._v(e._s(e.error))]),a("router-link",{attrs:{to:"/"}},[e._v("Back")])],1):e._e(),e.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"gamertag"},[a("img",{staticClass:"platform-avatar",attrs:{src:e.profileData.platformInfo.avatarUrl,alt:""}}),e._v("\n      "+e._s(e.profileData.platformInfo.platformUserId)+"\n    ")]),a("div",{staticClass:"grid"},[a("div",[a("img",{attrs:{src:e.profileData.segments[1].metadata.imageUrl,alt:""}})]),a("div",[a("ul",[a("li",[a("h4",[e._v("Selected Legend")]),a("p",[e._v(e._s(e.profileData.metadata.activeLegendName))])]),e.profileData.segments[0].stats.season2Wins?a("li",[a("h4",[e._v("Season 2 Wins")]),a("p",[e._v("\n              "+e._s(e.profileData.segments[0].stats.season2Wins.displayValue)+"\n              "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.season2Wins.percentile)+")")])])]):e._e(),e.profileData.segments[0].stats.level?a("li",[a("h4",[e._v("Apex Level")]),a("p",[e._v("\n              "+e._s(e.profileData.segments[0].stats.level.displayValue)+"\n              "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.level.percentile)+"%)")])])]):e._e(),e.profileData.segments[0].stats.kills?a("li",[a("h4",[e._v("Lifetime Kills")]),a("p",[e._v("\n              "+e._s(e.profileData.segments[0].stats.kills.displayValue)+"\n              "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.kills.percentile)+"%)")])])]):e._e(),e.profileData.segments[0].stats.damage?a("li",[a("h4",[e._v("Damage Done")]),a("p",[e._v("\n              "+e._s(e.profileData.segments[0].stats.damage.displayValue)+"\n              "),a("span",[e._v("("+e._s(e.profileData.segments[0].stats.damage.percentile)+"%)")])])]):e._e()])])]),a("router-link",{attrs:{to:"/"}},[e._v("Back")])],1):e._e()])},m=[],d=(a("96cf"),a("3b8d")),g=a("bc3a"),v=a.n(g),_={name:"Profile",data:function(){return{loading:!1,error:null,profileData:null}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,v.a.get("/api/v1/profile/".concat(this.$route.params.platform,"/").concat(this.$route.params.gamertag));case 4:t=e.sent,this.profileData=t.data.data,console.log(this.profileData),this.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),this.loading=!1,this.error=e.t0.response.data.message;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));function t(){return e.apply(this,arguments)}return t}()},h=_,b=(a("8b3a"),Object(c["a"])(h,f,m,!1,null,"b90d6a1c",null)),y=b.exports;r["a"].use(n["a"]);var D=new n["a"]({mode:"history",routes:[{path:"/",name:"search",component:p},{path:"/profile/:platform/:gamertag",name:"profile",component:y}]}),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("Header"),a("router-view")],1)},w=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("img",{attrs:{src:e.image}})])},P=[],j={name:"Header",data:function(){return{image:a("cf05")}}},k=j,C=(a("e8f9"),Object(c["a"])(k,O,P,!1,null,"2a0fd51f",null)),S=C.exports,$={name:"app",components:{Header:S}},E=$,I=(a("034f"),Object(c["a"])(E,x,w,!1,null,null,null)),L=I.exports,N=a("a65d"),B=a.n(N);r["a"].config.productionTip=!1,r["a"].use(B.a,{iconPack:"fontawesome"}),new r["a"]({router:D,render:function(e){return e(L)}}).$mount("#app")},"64a9":function(e,t,a){},"8b3a":function(e,t,a){"use strict";var r=a("2641"),n=a.n(r);n.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.badc059d.png"},e8f9:function(e,t,a){"use strict";var r=a("044d"),n=a.n(r);n.a}});
//# sourceMappingURL=app.d39207de.js.map