webpackJsonp([1],{"8u/S":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("span",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[this._v("catmash")])],1)])},staticRenderFns:[]};var s={name:"App",components:{"catmash-header":n("VU/8")({name:"Header"},a,!1,function(t){n("pLpM")},"data-v-1b34f0ef",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("catmash-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(s,c,!1,function(t){n("cgIs")},null,null).exports,i=n("/ocq"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("p",[t._v("404")]),t._v(" "),n("p",[t._v(t._s(this.$route.path)+" doesn't exist")])])},staticRenderFns:[]};var d,h=n("VU/8")({name:"NotFound"},u,!1,function(t){n("kd20")},"data-v-d8ccf07a",null).exports,l=n("Xxa5"),f=n.n(l),p=n("exGp"),m=n.n(p),v=n("Dd8w"),g=n.n(v),C=n("NYxO"),I=n("bOdI"),_=n.n(I),F=(n("rplX"),n("vNPR")),b=function(t){if(t.ok)return t.json();throw new Error(t.statusText)},y=new F.schema.Entity("cats",{cats:{}},{processStrategy:function(t){return g()({},t,{voteCount:0,mashupCount:0})}}),x="FETCH_CATS_REQUEST",w="FETCH_CATS_FAILURE",S="FETCH_CATS_SUCCESS",E="ADD_VOTE",k={namespaced:!0,state:{isFetching:!0,error:null,ids:[],byId:{}},getters:{getCatById:function(t){return function(e){return t.byId[e]}},getScore:function(t){return function(t,e){return Number((t/e).toFixed(4))}},getScoreById:function(t,e){return function(t){var n=e.getCatById(t);return e.getScore(n.voteCount,n.mashupCount)}}},mutations:(d={},_()(d,x,function(t){t.isFetching=!0}),_()(d,w,function(t,e){var n=e.error;t.isFetching=!1,t.error=n}),_()(d,S,function(t,e){var n=e.ids,r=e.byId;t.isFetching=!1,t.ids=n,t.byId=r}),_()(d,E,function(t,e){var n=e.winnerId,r=e.loserId;t.byId[n].voteCount++,t.byId[n].mashupCount++,t.byId[r].mashupCount++}),d),actions:{fetchCats:function(t){var e=this,n=t.commit;t.state;return m()(f.a.mark(function t(){var r,a,s,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:x}),r="/cats.json",t.prev=2,t.next=5,fetch(r);case 5:return a=t.sent,t.next=8,b(a);case 8:s=t.sent,c=Object(F.normalize)(s.images,[y]),n({type:S,ids:c.result,byId:c.entities.cats}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n({type:w,error:t.t0});case 16:case"end":return t.stop()}},t,e,[[2,13]])}))()}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isFetching?n("div",{staticClass:"loader"}):t.error?n("div",[t._v("\n    "+t._s(t.error.message)+"\n  ")]):n("img",{attrs:{src:t.cat.url,alt:t.cat.url},on:{click:function(e){t.$emit("vote")}}})])},staticRenderFns:[]};var O=n("VU/8")({name:"HomeCat",props:["isFetching","error","cat"]},T,!1,function(t){n("Xwth")},"data-v-11844d04",null).exports,M={name:"Home",data:function(){return{leftFloat:Math.random(),rightFloat:Math.random()}},computed:g()({},Object(C.e)("cats",["isFetching","error","ids"]),Object(C.c)("cats",["getCatById"]),{leftId:function(){var t=Math.floor(this.leftFloat*this.ids.length);return this.ids[t]},rightId:function(){var t=Math.floor(this.rightFloat*this.ids.length);return this.ids[t]}}),methods:g()({},Object(C.b)("cats",["fetchCats"]),Object(C.d)("cats",[E]),{addVote:function(t,e){this.ADD_VOTE({winnerId:t,loserId:e}),this.leftFloat=Math.random(),this.rightFloat=Math.random()}}),components:{"catmash-homecat":O},created:function(){var t=this;return m()(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ids.length){e.next=3;break}return e.next=3,t.fetchCats();case 3:t.rightId===t.leftId&&(t.rightFloat=Math.random());case 4:case"end":return e.stop()}},e,t)}))()},beforeUpdate:function(){this.rightId===this.leftId&&(this.rightFloat=Math.random())}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"half left"},[n("catmash-homecat",{attrs:{isFetching:t.isFetching,error:t.error,cat:t.getCatById(t.leftId)},on:{vote:function(e){t.addVote(t.leftId,t.rightId)}}})],1),t._v(" "),n("div",{staticClass:"half"},[n("catmash-homecat",{attrs:{isFetching:t.isFetching,error:t.error,cat:t.getCatById(t.rightId)},on:{vote:function(e){t.addVote(t.rightId,t.leftId)}}})],1),t._v(" "),n("div",{staticClass:"link-wrapper"},[n("router-link",{staticClass:"link",attrs:{to:"/topcats"}},[t._v("Top Cats")])],1)])},staticRenderFns:[]};var B=n("VU/8")(M,j,!1,function(t){n("eZMP")},"data-v-1dd4e4c4",null).exports,V={name:"TopCat",props:["index","cat"],computed:g()({},Object(C.c)("cats",["getScore"]))},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.cat.url,alt:t.cat.url}}),t._v(" "),n("div",{staticClass:"score"},[t._v("\n    #"+t._s(t.index+1)+" ("+t._s(100*t.getScore(t.cat.voteCount,t.cat.mashupCount))+"%)\n  ")])])},staticRenderFns:[]};var R=n("VU/8")(V,U,!1,function(t){n("8u/S")},"data-v-4c171d68",null).exports,A={name:"TopCats",computed:g()({},Object(C.e)("cats",["isFetching","error","ids"]),Object(C.c)("cats",["getCatById","getScoreById"]),{topIds:function(){var t=this;return this.ids.filter(function(e){return t.getCatById(e).mashupCount>0}).sort(function(e,n){return t.getScoreById(n)-t.getScoreById(e)})}}),methods:g()({},Object(C.b)("cats",["fetchCats"])),components:{"catmash-topcat":R},created:function(){var t=this;return m()(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ids.length){e.next=3;break}return e.next=3,t.fetchCats();case 3:case"end":return e.stop()}},e,t)}))()}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.isFetching?n("div",{staticClass:"loader"}):t.error?n("div",[t._v("\n    "+t._s(t.error.message)+"\n  ")]):t.topIds.length?n("ul",{staticClass:"list list-topcats"},t._l(t.topIds,function(e,r){return n("li",{key:e},[n("catmash-topcat",{attrs:{index:r,cat:t.getCatById(e)}})],1)})):n("div",[t._v("No votes yet.")])])},staticRenderFns:[]};var $=n("VU/8")(A,H,!1,function(t){n("WDcc")},"data-v-35356c94",null).exports;r.a.use(i.a);var D=new i.a({mode:"history",base:"/catmash/",routes:[{path:"*",component:h},{path:"/",name:"Home",component:B},{path:"/topcats",name:"TopCats",component:$}]});n("sax8");r.a.use(C.a);var N=new C.a.Store({modules:{cats:k},strict:!1,plugins:[]});r.a.config.productionTip=!1,new r.a({el:"#app",router:D,components:{App:o},store:N,template:"<App/>"})},WDcc:function(t,e){},Xwth:function(t,e){},cgIs:function(t,e){},eZMP:function(t,e){},kd20:function(t,e){},pLpM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d8a3ff3a0d817cb7ea3b.js.map