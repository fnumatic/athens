goog.provide('athens.router');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reitit.coercion.spec');
goog.require('reitit.frontend');
goog.require('reitit.frontend.controllers');
goog.require('reitit.frontend.easy');
var G__58131_58156 = new cljs.core.Keyword(null,"current-route","current-route",2067529448);
var G__58132_58157 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__58131_58156,G__58132_58157) : re_frame.core.reg_sub.call(null,G__58131_58156,G__58132_58157));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_,p__58133){
var vec__58134 = p__58133;
var seq__58135 = cljs.core.seq(vec__58134);
var first__58136 = cljs.core.first(seq__58135);
var seq__58135__$1 = cljs.core.next(seq__58135);
var ___$1 = first__58136;
var route = seq__58135__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (p__58137,p__58138){
var map__58139 = p__58137;
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58140 = p__58138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58140,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58140,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
var node = (function (){var G__58144 = athens.db.dsdb;
var G__58145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new_match))], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__58144,G__58145,G__58146) : posh.reagent.pull.call(null,G__58144,G__58145,G__58146));
})();
var node_title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
var page_title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = node_title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "untitled";
}
})())," \u2013 Athens"].join('');
(document.title = page_title);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
}));
var G__58147_58159 = new cljs.core.Keyword(null,"navigate!","navigate!",79998348);
var G__58148_58160 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (route){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)));

var opts__54409__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54410__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var opts__54409__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54410__auto__ = reitit.frontend.easy.push_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54410__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54410__auto__;
})(),(function (){var opts__54409__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54410__auto__ = route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54410__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54410__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54410__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54410__auto__;
}catch (e58149){var e = e58149;
throw e;
}}):(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__58147_58159,G__58148_58160) : re_frame.core.reg_fx.call(null,G__58147_58159,G__58148_58160));
athens.router.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397)], null)], null)], null);
athens.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(athens.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
athens.router.on_navigate = (function athens$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__58150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58150) : re_frame.core.dispatch.call(null,G__58150));
} else {
return null;
}
});
athens.router.navigate = (function athens$router$navigate(page){
var G__58151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58151) : re_frame.core.dispatch.call(null,G__58151));
});
athens.router.navigate_uid = (function athens$router$navigate_uid(var_args){
var G__58153 = arguments.length;
switch (G__58153) {
case 1:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
var G__58154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58154) : re_frame.core.dispatch.call(null,G__58154));
}));

(athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2 = (function (uid,e){
var shift = e.shiftKey;
if(cljs.core.truth_(shift)){
var G__58155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58155) : re_frame.core.dispatch.call(null,G__58155));
} else {
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
}
}));

(athens.router.navigate_uid.cljs$lang$maxFixedArity = 2);

athens.router.init_routes_BANG_ = (function athens$router$init_routes_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing routes"], 0));

return reitit.frontend.easy.start_BANG_(athens.router.router,athens.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=athens.router.js.map
