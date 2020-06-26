goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__36573 = arguments.length;
switch (G__36573) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__36575 = arguments.length;
switch (G__36575) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__36578 = arguments.length;
switch (G__36578) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36576_SHARP_){
return (!((p1__36576_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37006 = arguments.length;
var i__4790__auto___37011 = (0);
while(true){
if((i__4790__auto___37011 < len__4789__auto___37006)){
args__4795__auto__.push((arguments[i__4790__auto___37011]));

var G__37012 = (i__4790__auto___37011 + (1));
i__4790__auto___37011 = G__37012;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36581_37018 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36582_37019 = null;
var count__36583_37020 = (0);
var i__36584_37021 = (0);
while(true){
if((i__36584_37021 < count__36583_37020)){
var vec__36591_37022 = chunk__36582_37019.cljs$core$IIndexed$_nth$arity$2(null,i__36584_37021);
var k_37023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_37022,(0),null);
var v_37024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_37022,(1),null);
style.setProperty(dommy.utils.as_str(k_37023),v_37024);


var G__37025 = seq__36581_37018;
var G__37026 = chunk__36582_37019;
var G__37027 = count__36583_37020;
var G__37028 = (i__36584_37021 + (1));
seq__36581_37018 = G__37025;
chunk__36582_37019 = G__37026;
count__36583_37020 = G__37027;
i__36584_37021 = G__37028;
continue;
} else {
var temp__5735__auto___37029 = cljs.core.seq(seq__36581_37018);
if(temp__5735__auto___37029){
var seq__36581_37030__$1 = temp__5735__auto___37029;
if(cljs.core.chunked_seq_QMARK_(seq__36581_37030__$1)){
var c__4609__auto___37031 = cljs.core.chunk_first(seq__36581_37030__$1);
var G__37032 = cljs.core.chunk_rest(seq__36581_37030__$1);
var G__37033 = c__4609__auto___37031;
var G__37034 = cljs.core.count(c__4609__auto___37031);
var G__37035 = (0);
seq__36581_37018 = G__37032;
chunk__36582_37019 = G__37033;
count__36583_37020 = G__37034;
i__36584_37021 = G__37035;
continue;
} else {
var vec__36594_37036 = cljs.core.first(seq__36581_37030__$1);
var k_37037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_37036,(0),null);
var v_37038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_37036,(1),null);
style.setProperty(dommy.utils.as_str(k_37037),v_37038);


var G__37039 = cljs.core.next(seq__36581_37030__$1);
var G__37040 = null;
var G__37041 = (0);
var G__37042 = (0);
seq__36581_37018 = G__37039;
chunk__36582_37019 = G__37040;
count__36583_37020 = G__37041;
i__36584_37021 = G__37042;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36579){
var G__36580 = cljs.core.first(seq36579);
var seq36579__$1 = cljs.core.next(seq36579);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36580,seq36579__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37046 = arguments.length;
var i__4790__auto___37047 = (0);
while(true){
if((i__4790__auto___37047 < len__4789__auto___37046)){
args__4795__auto__.push((arguments[i__4790__auto___37047]));

var G__37048 = (i__4790__auto___37047 + (1));
i__4790__auto___37047 = G__37048;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__36601_37049 = cljs.core.seq(keywords);
var chunk__36602_37050 = null;
var count__36603_37051 = (0);
var i__36604_37052 = (0);
while(true){
if((i__36604_37052 < count__36603_37051)){
var kw_37053 = chunk__36602_37050.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37052);
style.removeProperty(dommy.utils.as_str(kw_37053));


var G__37054 = seq__36601_37049;
var G__37055 = chunk__36602_37050;
var G__37056 = count__36603_37051;
var G__37057 = (i__36604_37052 + (1));
seq__36601_37049 = G__37054;
chunk__36602_37050 = G__37055;
count__36603_37051 = G__37056;
i__36604_37052 = G__37057;
continue;
} else {
var temp__5735__auto___37058 = cljs.core.seq(seq__36601_37049);
if(temp__5735__auto___37058){
var seq__36601_37059__$1 = temp__5735__auto___37058;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37059__$1)){
var c__4609__auto___37060 = cljs.core.chunk_first(seq__36601_37059__$1);
var G__37061 = cljs.core.chunk_rest(seq__36601_37059__$1);
var G__37062 = c__4609__auto___37060;
var G__37063 = cljs.core.count(c__4609__auto___37060);
var G__37064 = (0);
seq__36601_37049 = G__37061;
chunk__36602_37050 = G__37062;
count__36603_37051 = G__37063;
i__36604_37052 = G__37064;
continue;
} else {
var kw_37065 = cljs.core.first(seq__36601_37059__$1);
style.removeProperty(dommy.utils.as_str(kw_37065));


var G__37066 = cljs.core.next(seq__36601_37059__$1);
var G__37067 = null;
var G__37068 = (0);
var G__37069 = (0);
seq__36601_37049 = G__37066;
chunk__36602_37050 = G__37067;
count__36603_37051 = G__37068;
i__36604_37052 = G__37069;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36597){
var G__36598 = cljs.core.first(seq36597);
var seq36597__$1 = cljs.core.next(seq36597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36598,seq36597__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37071 = arguments.length;
var i__4790__auto___37072 = (0);
while(true){
if((i__4790__auto___37072 < len__4789__auto___37071)){
args__4795__auto__.push((arguments[i__4790__auto___37072]));

var G__37073 = (i__4790__auto___37072 + (1));
i__4790__auto___37072 = G__37073;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36607_37075 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36608_37076 = null;
var count__36609_37077 = (0);
var i__36610_37078 = (0);
while(true){
if((i__36610_37078 < count__36609_37077)){
var vec__36617_37079 = chunk__36608_37076.cljs$core$IIndexed$_nth$arity$2(null,i__36610_37078);
var k_37080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37079,(0),null);
var v_37081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37079,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37080,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37081),"px"].join('')], 0));


var G__37082 = seq__36607_37075;
var G__37083 = chunk__36608_37076;
var G__37084 = count__36609_37077;
var G__37085 = (i__36610_37078 + (1));
seq__36607_37075 = G__37082;
chunk__36608_37076 = G__37083;
count__36609_37077 = G__37084;
i__36610_37078 = G__37085;
continue;
} else {
var temp__5735__auto___37086 = cljs.core.seq(seq__36607_37075);
if(temp__5735__auto___37086){
var seq__36607_37087__$1 = temp__5735__auto___37086;
if(cljs.core.chunked_seq_QMARK_(seq__36607_37087__$1)){
var c__4609__auto___37088 = cljs.core.chunk_first(seq__36607_37087__$1);
var G__37089 = cljs.core.chunk_rest(seq__36607_37087__$1);
var G__37090 = c__4609__auto___37088;
var G__37091 = cljs.core.count(c__4609__auto___37088);
var G__37092 = (0);
seq__36607_37075 = G__37089;
chunk__36608_37076 = G__37090;
count__36609_37077 = G__37091;
i__36610_37078 = G__37092;
continue;
} else {
var vec__36620_37093 = cljs.core.first(seq__36607_37087__$1);
var k_37094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37093,(0),null);
var v_37095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37093,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37094,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37095),"px"].join('')], 0));


var G__37096 = cljs.core.next(seq__36607_37087__$1);
var G__37097 = null;
var G__37098 = (0);
var G__37099 = (0);
seq__36607_37075 = G__37096;
chunk__36608_37076 = G__37097;
count__36609_37077 = G__37098;
i__36610_37078 = G__37099;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36605){
var G__36606 = cljs.core.first(seq36605);
var seq36605__$1 = cljs.core.next(seq36605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36606,seq36605__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__36628 = arguments.length;
switch (G__36628) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37101 = arguments.length;
var i__4790__auto___37102 = (0);
while(true){
if((i__4790__auto___37102 < len__4789__auto___37101)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37102]));

var G__37103 = (i__4790__auto___37102 + (1));
i__4790__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__36629 = elem;
(G__36629[k__$1] = v);

return G__36629;
} else {
var G__36630 = elem;
G__36630.setAttribute(k__$1,v);

return G__36630;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36631_37104 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36632_37105 = null;
var count__36633_37106 = (0);
var i__36634_37107 = (0);
while(true){
if((i__36634_37107 < count__36633_37106)){
var vec__36642_37108 = chunk__36632_37105.cljs$core$IIndexed$_nth$arity$2(null,i__36634_37107);
var k_37109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37108,(0),null);
var v_37110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37108,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37109__$1,v_37110__$1);


var G__37111 = seq__36631_37104;
var G__37112 = chunk__36632_37105;
var G__37113 = count__36633_37106;
var G__37114 = (i__36634_37107 + (1));
seq__36631_37104 = G__37111;
chunk__36632_37105 = G__37112;
count__36633_37106 = G__37113;
i__36634_37107 = G__37114;
continue;
} else {
var temp__5735__auto___37115 = cljs.core.seq(seq__36631_37104);
if(temp__5735__auto___37115){
var seq__36631_37116__$1 = temp__5735__auto___37115;
if(cljs.core.chunked_seq_QMARK_(seq__36631_37116__$1)){
var c__4609__auto___37117 = cljs.core.chunk_first(seq__36631_37116__$1);
var G__37118 = cljs.core.chunk_rest(seq__36631_37116__$1);
var G__37119 = c__4609__auto___37117;
var G__37120 = cljs.core.count(c__4609__auto___37117);
var G__37121 = (0);
seq__36631_37104 = G__37118;
chunk__36632_37105 = G__37119;
count__36633_37106 = G__37120;
i__36634_37107 = G__37121;
continue;
} else {
var vec__36645_37122 = cljs.core.first(seq__36631_37116__$1);
var k_37123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37122,(0),null);
var v_37124__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37122,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37123__$1,v_37124__$1);


var G__37125 = cljs.core.next(seq__36631_37116__$1);
var G__37126 = null;
var G__37127 = (0);
var G__37128 = (0);
seq__36631_37104 = G__37125;
chunk__36632_37105 = G__37126;
count__36633_37106 = G__37127;
i__36634_37107 = G__37128;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36624){
var G__36625 = cljs.core.first(seq36624);
var seq36624__$1 = cljs.core.next(seq36624);
var G__36626 = cljs.core.first(seq36624__$1);
var seq36624__$2 = cljs.core.next(seq36624__$1);
var G__36627 = cljs.core.first(seq36624__$2);
var seq36624__$3 = cljs.core.next(seq36624__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36625,G__36626,G__36627,seq36624__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36652 = arguments.length;
switch (G__36652) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37130 = arguments.length;
var i__4790__auto___37131 = (0);
while(true){
if((i__4790__auto___37131 < len__4789__auto___37130)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37131]));

var G__37132 = (i__4790__auto___37131 + (1));
i__4790__auto___37131 = G__37132;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_37133__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36653.cljs$core$IFn$_invoke$arity$1 ? fexpr__36653.cljs$core$IFn$_invoke$arity$1(k_37133__$1) : fexpr__36653.call(null,k_37133__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37133__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36654_37134 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36655_37135 = null;
var count__36656_37136 = (0);
var i__36657_37137 = (0);
while(true){
if((i__36657_37137 < count__36656_37136)){
var k_37138__$1 = chunk__36655_37135.cljs$core$IIndexed$_nth$arity$2(null,i__36657_37137);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37138__$1);


var G__37139 = seq__36654_37134;
var G__37140 = chunk__36655_37135;
var G__37141 = count__36656_37136;
var G__37142 = (i__36657_37137 + (1));
seq__36654_37134 = G__37139;
chunk__36655_37135 = G__37140;
count__36656_37136 = G__37141;
i__36657_37137 = G__37142;
continue;
} else {
var temp__5735__auto___37143 = cljs.core.seq(seq__36654_37134);
if(temp__5735__auto___37143){
var seq__36654_37144__$1 = temp__5735__auto___37143;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37144__$1)){
var c__4609__auto___37145 = cljs.core.chunk_first(seq__36654_37144__$1);
var G__37146 = cljs.core.chunk_rest(seq__36654_37144__$1);
var G__37147 = c__4609__auto___37145;
var G__37148 = cljs.core.count(c__4609__auto___37145);
var G__37149 = (0);
seq__36654_37134 = G__37146;
chunk__36655_37135 = G__37147;
count__36656_37136 = G__37148;
i__36657_37137 = G__37149;
continue;
} else {
var k_37150__$1 = cljs.core.first(seq__36654_37144__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37150__$1);


var G__37151 = cljs.core.next(seq__36654_37144__$1);
var G__37152 = null;
var G__37153 = (0);
var G__37154 = (0);
seq__36654_37134 = G__37151;
chunk__36655_37135 = G__37152;
count__36656_37136 = G__37153;
i__36657_37137 = G__37154;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36649){
var G__36650 = cljs.core.first(seq36649);
var seq36649__$1 = cljs.core.next(seq36649);
var G__36651 = cljs.core.first(seq36649__$1);
var seq36649__$2 = cljs.core.next(seq36649__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36650,G__36651,seq36649__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36659 = arguments.length;
switch (G__36659) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36664 = arguments.length;
switch (G__36664) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37157 = arguments.length;
var i__4790__auto___37158 = (0);
while(true){
if((i__4790__auto___37158 < len__4789__auto___37157)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37158]));

var G__37159 = (i__4790__auto___37158 + (1));
i__4790__auto___37158 = G__37159;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___37160 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37160)){
var class_list_37161 = temp__5733__auto___37160;
var seq__36665_37162 = cljs.core.seq(classes__$1);
var chunk__36666_37163 = null;
var count__36667_37164 = (0);
var i__36668_37165 = (0);
while(true){
if((i__36668_37165 < count__36667_37164)){
var c_37166 = chunk__36666_37163.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37165);
class_list_37161.add(c_37166);


var G__37167 = seq__36665_37162;
var G__37168 = chunk__36666_37163;
var G__37169 = count__36667_37164;
var G__37170 = (i__36668_37165 + (1));
seq__36665_37162 = G__37167;
chunk__36666_37163 = G__37168;
count__36667_37164 = G__37169;
i__36668_37165 = G__37170;
continue;
} else {
var temp__5735__auto___37171 = cljs.core.seq(seq__36665_37162);
if(temp__5735__auto___37171){
var seq__36665_37172__$1 = temp__5735__auto___37171;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37172__$1)){
var c__4609__auto___37173 = cljs.core.chunk_first(seq__36665_37172__$1);
var G__37174 = cljs.core.chunk_rest(seq__36665_37172__$1);
var G__37175 = c__4609__auto___37173;
var G__37176 = cljs.core.count(c__4609__auto___37173);
var G__37177 = (0);
seq__36665_37162 = G__37174;
chunk__36666_37163 = G__37175;
count__36667_37164 = G__37176;
i__36668_37165 = G__37177;
continue;
} else {
var c_37178 = cljs.core.first(seq__36665_37172__$1);
class_list_37161.add(c_37178);


var G__37179 = cljs.core.next(seq__36665_37172__$1);
var G__37180 = null;
var G__37181 = (0);
var G__37182 = (0);
seq__36665_37162 = G__37179;
chunk__36666_37163 = G__37180;
count__36667_37164 = G__37181;
i__36668_37165 = G__37182;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37183 = cljs.core.seq(classes__$1);
var chunk__36670_37184 = null;
var count__36671_37185 = (0);
var i__36672_37186 = (0);
while(true){
if((i__36672_37186 < count__36671_37185)){
var c_37188 = chunk__36670_37184.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37186);
var class_name_37189 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37189,c_37188))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37189 === ""))?c_37188:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37189)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37188)].join('')));
}


var G__37191 = seq__36669_37183;
var G__37192 = chunk__36670_37184;
var G__37193 = count__36671_37185;
var G__37194 = (i__36672_37186 + (1));
seq__36669_37183 = G__37191;
chunk__36670_37184 = G__37192;
count__36671_37185 = G__37193;
i__36672_37186 = G__37194;
continue;
} else {
var temp__5735__auto___37195 = cljs.core.seq(seq__36669_37183);
if(temp__5735__auto___37195){
var seq__36669_37196__$1 = temp__5735__auto___37195;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37196__$1)){
var c__4609__auto___37197 = cljs.core.chunk_first(seq__36669_37196__$1);
var G__37198 = cljs.core.chunk_rest(seq__36669_37196__$1);
var G__37199 = c__4609__auto___37197;
var G__37200 = cljs.core.count(c__4609__auto___37197);
var G__37201 = (0);
seq__36669_37183 = G__37198;
chunk__36670_37184 = G__37199;
count__36671_37185 = G__37200;
i__36672_37186 = G__37201;
continue;
} else {
var c_37202 = cljs.core.first(seq__36669_37196__$1);
var class_name_37203 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37203,c_37202))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37203 === ""))?c_37202:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37203)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37202)].join('')));
}


var G__37204 = cljs.core.next(seq__36669_37196__$1);
var G__37205 = null;
var G__37206 = (0);
var G__37207 = (0);
seq__36669_37183 = G__37204;
chunk__36670_37184 = G__37205;
count__36671_37185 = G__37206;
i__36672_37186 = G__37207;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36673_37208 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37209 = null;
var count__36675_37210 = (0);
var i__36676_37211 = (0);
while(true){
if((i__36676_37211 < count__36675_37210)){
var c_37212 = chunk__36674_37209.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37211);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37212);


var G__37213 = seq__36673_37208;
var G__37214 = chunk__36674_37209;
var G__37215 = count__36675_37210;
var G__37216 = (i__36676_37211 + (1));
seq__36673_37208 = G__37213;
chunk__36674_37209 = G__37214;
count__36675_37210 = G__37215;
i__36676_37211 = G__37216;
continue;
} else {
var temp__5735__auto___37217 = cljs.core.seq(seq__36673_37208);
if(temp__5735__auto___37217){
var seq__36673_37218__$1 = temp__5735__auto___37217;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37218__$1)){
var c__4609__auto___37219 = cljs.core.chunk_first(seq__36673_37218__$1);
var G__37220 = cljs.core.chunk_rest(seq__36673_37218__$1);
var G__37221 = c__4609__auto___37219;
var G__37222 = cljs.core.count(c__4609__auto___37219);
var G__37223 = (0);
seq__36673_37208 = G__37220;
chunk__36674_37209 = G__37221;
count__36675_37210 = G__37222;
i__36676_37211 = G__37223;
continue;
} else {
var c_37224 = cljs.core.first(seq__36673_37218__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37224);


var G__37225 = cljs.core.next(seq__36673_37218__$1);
var G__37226 = null;
var G__37227 = (0);
var G__37228 = (0);
seq__36673_37208 = G__37225;
chunk__36674_37209 = G__37226;
count__36675_37210 = G__37227;
i__36676_37211 = G__37228;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36661){
var G__36662 = cljs.core.first(seq36661);
var seq36661__$1 = cljs.core.next(seq36661);
var G__36663 = cljs.core.first(seq36661__$1);
var seq36661__$2 = cljs.core.next(seq36661__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36662,G__36663,seq36661__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36681 = arguments.length;
switch (G__36681) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37232 = arguments.length;
var i__4790__auto___37233 = (0);
while(true){
if((i__4790__auto___37233 < len__4789__auto___37232)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37233]));

var G__37236 = (i__4790__auto___37233 + (1));
i__4790__auto___37233 = G__37236;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37237 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37237)){
var class_list_37238 = temp__5733__auto___37237;
class_list_37238.remove(c__$1);
} else {
var class_name_37239 = dommy.core.class$(elem);
var new_class_name_37240 = dommy.utils.remove_class_str(class_name_37239,c__$1);
if((class_name_37239 === new_class_name_37240)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37240);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36683 = null;
var count__36684 = (0);
var i__36685 = (0);
while(true){
if((i__36685 < count__36684)){
var c = chunk__36683.cljs$core$IIndexed$_nth$arity$2(null,i__36685);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37241 = seq__36682;
var G__37242 = chunk__36683;
var G__37243 = count__36684;
var G__37244 = (i__36685 + (1));
seq__36682 = G__37241;
chunk__36683 = G__37242;
count__36684 = G__37243;
i__36685 = G__37244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37245 = cljs.core.chunk_rest(seq__36682__$1);
var G__37246 = c__4609__auto__;
var G__37247 = cljs.core.count(c__4609__auto__);
var G__37248 = (0);
seq__36682 = G__37245;
chunk__36683 = G__37246;
count__36684 = G__37247;
i__36685 = G__37248;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37249 = cljs.core.next(seq__36682__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__36682 = G__37249;
chunk__36683 = G__37250;
count__36684 = G__37251;
i__36685 = G__37252;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first(seq36678);
var seq36678__$1 = cljs.core.next(seq36678);
var G__36680 = cljs.core.first(seq36678__$1);
var seq36678__$2 = cljs.core.next(seq36678__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36679,G__36680,seq36678__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36687 = arguments.length;
switch (G__36687) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37254 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37254)){
var class_list_37255 = temp__5733__auto___37254;
class_list_37255.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36689 = arguments.length;
switch (G__36689) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36691 = arguments.length;
switch (G__36691) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36696 = arguments.length;
switch (G__36696) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37259 = arguments.length;
var i__4790__auto___37260 = (0);
while(true){
if((i__4790__auto___37260 < len__4789__auto___37259)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37260]));

var G__37261 = (i__4790__auto___37260 + (1));
i__4790__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36698 = parent;
G__36698.appendChild(child);

return G__36698;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36699_37262 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36700_37263 = null;
var count__36701_37264 = (0);
var i__36702_37265 = (0);
while(true){
if((i__36702_37265 < count__36701_37264)){
var c_37266 = chunk__36700_37263.cljs$core$IIndexed$_nth$arity$2(null,i__36702_37265);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37266);


var G__37267 = seq__36699_37262;
var G__37268 = chunk__36700_37263;
var G__37269 = count__36701_37264;
var G__37270 = (i__36702_37265 + (1));
seq__36699_37262 = G__37267;
chunk__36700_37263 = G__37268;
count__36701_37264 = G__37269;
i__36702_37265 = G__37270;
continue;
} else {
var temp__5735__auto___37271 = cljs.core.seq(seq__36699_37262);
if(temp__5735__auto___37271){
var seq__36699_37272__$1 = temp__5735__auto___37271;
if(cljs.core.chunked_seq_QMARK_(seq__36699_37272__$1)){
var c__4609__auto___37273 = cljs.core.chunk_first(seq__36699_37272__$1);
var G__37274 = cljs.core.chunk_rest(seq__36699_37272__$1);
var G__37275 = c__4609__auto___37273;
var G__37276 = cljs.core.count(c__4609__auto___37273);
var G__37277 = (0);
seq__36699_37262 = G__37274;
chunk__36700_37263 = G__37275;
count__36701_37264 = G__37276;
i__36702_37265 = G__37277;
continue;
} else {
var c_37278 = cljs.core.first(seq__36699_37272__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37278);


var G__37279 = cljs.core.next(seq__36699_37272__$1);
var G__37280 = null;
var G__37281 = (0);
var G__37282 = (0);
seq__36699_37262 = G__37279;
chunk__36700_37263 = G__37280;
count__36701_37264 = G__37281;
i__36702_37265 = G__37282;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36693){
var G__36694 = cljs.core.first(seq36693);
var seq36693__$1 = cljs.core.next(seq36693);
var G__36695 = cljs.core.first(seq36693__$1);
var seq36693__$2 = cljs.core.next(seq36693__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36694,G__36695,seq36693__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36709 = arguments.length;
switch (G__36709) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37284 = arguments.length;
var i__4790__auto___37286 = (0);
while(true){
if((i__4790__auto___37286 < len__4789__auto___37284)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37286]));

var G__37287 = (i__4790__auto___37286 + (1));
i__4790__auto___37286 = G__37287;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36710 = parent;
G__36710.insertBefore(child,parent.firstChild);

return G__36710;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36711_37289 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36712_37290 = null;
var count__36713_37291 = (0);
var i__36714_37292 = (0);
while(true){
if((i__36714_37292 < count__36713_37291)){
var c_37293 = chunk__36712_37290.cljs$core$IIndexed$_nth$arity$2(null,i__36714_37292);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37293);


var G__37294 = seq__36711_37289;
var G__37295 = chunk__36712_37290;
var G__37296 = count__36713_37291;
var G__37297 = (i__36714_37292 + (1));
seq__36711_37289 = G__37294;
chunk__36712_37290 = G__37295;
count__36713_37291 = G__37296;
i__36714_37292 = G__37297;
continue;
} else {
var temp__5735__auto___37298 = cljs.core.seq(seq__36711_37289);
if(temp__5735__auto___37298){
var seq__36711_37299__$1 = temp__5735__auto___37298;
if(cljs.core.chunked_seq_QMARK_(seq__36711_37299__$1)){
var c__4609__auto___37300 = cljs.core.chunk_first(seq__36711_37299__$1);
var G__37301 = cljs.core.chunk_rest(seq__36711_37299__$1);
var G__37302 = c__4609__auto___37300;
var G__37303 = cljs.core.count(c__4609__auto___37300);
var G__37304 = (0);
seq__36711_37289 = G__37301;
chunk__36712_37290 = G__37302;
count__36713_37291 = G__37303;
i__36714_37292 = G__37304;
continue;
} else {
var c_37306 = cljs.core.first(seq__36711_37299__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37306);


var G__37307 = cljs.core.next(seq__36711_37299__$1);
var G__37308 = null;
var G__37309 = (0);
var G__37310 = (0);
seq__36711_37289 = G__37307;
chunk__36712_37290 = G__37308;
count__36713_37291 = G__37309;
i__36714_37292 = G__37310;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36706){
var G__36707 = cljs.core.first(seq36706);
var seq36706__$1 = cljs.core.next(seq36706);
var G__36708 = cljs.core.first(seq36706__$1);
var seq36706__$2 = cljs.core.next(seq36706__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36707,G__36708,seq36706__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___37314 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37314)){
var next_37315 = temp__5733__auto___37314;
dommy.core.insert_before_BANG_(elem,next_37315);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__36716 = arguments.length;
switch (G__36716) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36717 = p;
G__36717.removeChild(elem);

return G__36717;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36718){
var vec__36719 = p__36718;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37327 = arguments.length;
var i__4790__auto___37329 = (0);
while(true){
if((i__4790__auto___37329 < len__4789__auto___37327)){
args__4795__auto__.push((arguments[i__4790__auto___37329]));

var G__37330 = (i__4790__auto___37329 + (1));
i__4790__auto___37329 = G__37330;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first(seq36722);
var seq36722__$1 = cljs.core.next(seq36722);
var G__36724 = cljs.core.first(seq36722__$1);
var seq36722__$2 = cljs.core.next(seq36722__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__36725 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__36725.cljs$core$IFn$_invoke$arity$1 ? fexpr__36725.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__36725.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37339 = arguments.length;
var i__4790__auto___37340 = (0);
while(true){
if((i__4790__auto___37340 < len__4789__auto___37339)){
args__4795__auto__.push((arguments[i__4790__auto___37340]));

var G__37343 = (i__4790__auto___37340 + (1));
i__4790__auto___37340 = G__37343;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36728_37344 = dommy.core.elem_and_selector(elem_sel);
var elem_37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728_37344,(0),null);
var selector_37346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728_37344,(1),null);
var seq__36731_37347 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36738_37348 = null;
var count__36739_37349 = (0);
var i__36740_37350 = (0);
while(true){
if((i__36740_37350 < count__36739_37349)){
var vec__36796_37351 = chunk__36738_37348.cljs$core$IIndexed$_nth$arity$2(null,i__36740_37350);
var orig_type_37352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36796_37351,(0),null);
var f_37353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36796_37351,(1),null);
var seq__36741_37354 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37352,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37352,cljs.core.identity])));
var chunk__36743_37355 = null;
var count__36744_37356 = (0);
var i__36745_37357 = (0);
while(true){
if((i__36745_37357 < count__36744_37356)){
var vec__36809_37358 = chunk__36743_37355.cljs$core$IIndexed$_nth$arity$2(null,i__36745_37357);
var actual_type_37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36809_37358,(0),null);
var factory_37360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36809_37358,(1),null);
var canonical_f_37361 = (function (){var G__36813 = (factory_37360.cljs$core$IFn$_invoke$arity$1 ? factory_37360.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37360.call(null,f_37353));
var fexpr__36812 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36812.cljs$core$IFn$_invoke$arity$1 ? fexpr__36812.cljs$core$IFn$_invoke$arity$1(G__36813) : fexpr__36812.call(null,G__36813));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37359,f_37353], null),canonical_f_37361], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37359),canonical_f_37361);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37359),canonical_f_37361);
}


var G__37362 = seq__36741_37354;
var G__37363 = chunk__36743_37355;
var G__37364 = count__36744_37356;
var G__37365 = (i__36745_37357 + (1));
seq__36741_37354 = G__37362;
chunk__36743_37355 = G__37363;
count__36744_37356 = G__37364;
i__36745_37357 = G__37365;
continue;
} else {
var temp__5735__auto___37366 = cljs.core.seq(seq__36741_37354);
if(temp__5735__auto___37366){
var seq__36741_37367__$1 = temp__5735__auto___37366;
if(cljs.core.chunked_seq_QMARK_(seq__36741_37367__$1)){
var c__4609__auto___37368 = cljs.core.chunk_first(seq__36741_37367__$1);
var G__37369 = cljs.core.chunk_rest(seq__36741_37367__$1);
var G__37370 = c__4609__auto___37368;
var G__37371 = cljs.core.count(c__4609__auto___37368);
var G__37372 = (0);
seq__36741_37354 = G__37369;
chunk__36743_37355 = G__37370;
count__36744_37356 = G__37371;
i__36745_37357 = G__37372;
continue;
} else {
var vec__36814_37373 = cljs.core.first(seq__36741_37367__$1);
var actual_type_37374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814_37373,(0),null);
var factory_37375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814_37373,(1),null);
var canonical_f_37376 = (function (){var G__36818 = (factory_37375.cljs$core$IFn$_invoke$arity$1 ? factory_37375.cljs$core$IFn$_invoke$arity$1(f_37353) : factory_37375.call(null,f_37353));
var fexpr__36817 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36817.cljs$core$IFn$_invoke$arity$1 ? fexpr__36817.cljs$core$IFn$_invoke$arity$1(G__36818) : fexpr__36817.call(null,G__36818));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37374,f_37353], null),canonical_f_37376], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37374),canonical_f_37376);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37374),canonical_f_37376);
}


var G__37377 = cljs.core.next(seq__36741_37367__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__36741_37354 = G__37377;
chunk__36743_37355 = G__37378;
count__36744_37356 = G__37379;
i__36745_37357 = G__37380;
continue;
}
} else {
}
}
break;
}

var G__37381 = seq__36731_37347;
var G__37382 = chunk__36738_37348;
var G__37383 = count__36739_37349;
var G__37384 = (i__36740_37350 + (1));
seq__36731_37347 = G__37381;
chunk__36738_37348 = G__37382;
count__36739_37349 = G__37383;
i__36740_37350 = G__37384;
continue;
} else {
var temp__5735__auto___37385 = cljs.core.seq(seq__36731_37347);
if(temp__5735__auto___37385){
var seq__36731_37386__$1 = temp__5735__auto___37385;
if(cljs.core.chunked_seq_QMARK_(seq__36731_37386__$1)){
var c__4609__auto___37387 = cljs.core.chunk_first(seq__36731_37386__$1);
var G__37388 = cljs.core.chunk_rest(seq__36731_37386__$1);
var G__37389 = c__4609__auto___37387;
var G__37390 = cljs.core.count(c__4609__auto___37387);
var G__37391 = (0);
seq__36731_37347 = G__37388;
chunk__36738_37348 = G__37389;
count__36739_37349 = G__37390;
i__36740_37350 = G__37391;
continue;
} else {
var vec__36819_37392 = cljs.core.first(seq__36731_37386__$1);
var orig_type_37393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37392,(0),null);
var f_37394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36819_37392,(1),null);
var seq__36732_37395 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37393,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37393,cljs.core.identity])));
var chunk__36734_37396 = null;
var count__36735_37397 = (0);
var i__36736_37398 = (0);
while(true){
if((i__36736_37398 < count__36735_37397)){
var vec__36835_37399 = chunk__36734_37396.cljs$core$IIndexed$_nth$arity$2(null,i__36736_37398);
var actual_type_37400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835_37399,(0),null);
var factory_37401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835_37399,(1),null);
var canonical_f_37402 = (function (){var G__36839 = (factory_37401.cljs$core$IFn$_invoke$arity$1 ? factory_37401.cljs$core$IFn$_invoke$arity$1(f_37394) : factory_37401.call(null,f_37394));
var fexpr__36838 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36838.cljs$core$IFn$_invoke$arity$1 ? fexpr__36838.cljs$core$IFn$_invoke$arity$1(G__36839) : fexpr__36838.call(null,G__36839));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37400,f_37394], null),canonical_f_37402], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37400),canonical_f_37402);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37400),canonical_f_37402);
}


var G__37403 = seq__36732_37395;
var G__37404 = chunk__36734_37396;
var G__37405 = count__36735_37397;
var G__37406 = (i__36736_37398 + (1));
seq__36732_37395 = G__37403;
chunk__36734_37396 = G__37404;
count__36735_37397 = G__37405;
i__36736_37398 = G__37406;
continue;
} else {
var temp__5735__auto___37407__$1 = cljs.core.seq(seq__36732_37395);
if(temp__5735__auto___37407__$1){
var seq__36732_37408__$1 = temp__5735__auto___37407__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36732_37408__$1)){
var c__4609__auto___37409 = cljs.core.chunk_first(seq__36732_37408__$1);
var G__37410 = cljs.core.chunk_rest(seq__36732_37408__$1);
var G__37411 = c__4609__auto___37409;
var G__37412 = cljs.core.count(c__4609__auto___37409);
var G__37413 = (0);
seq__36732_37395 = G__37410;
chunk__36734_37396 = G__37411;
count__36735_37397 = G__37412;
i__36736_37398 = G__37413;
continue;
} else {
var vec__36840_37414 = cljs.core.first(seq__36732_37408__$1);
var actual_type_37415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840_37414,(0),null);
var factory_37416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840_37414,(1),null);
var canonical_f_37417 = (function (){var G__36844 = (factory_37416.cljs$core$IFn$_invoke$arity$1 ? factory_37416.cljs$core$IFn$_invoke$arity$1(f_37394) : factory_37416.call(null,f_37394));
var fexpr__36843 = (cljs.core.truth_(selector_37346)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37345,selector_37346):cljs.core.identity);
return (fexpr__36843.cljs$core$IFn$_invoke$arity$1 ? fexpr__36843.cljs$core$IFn$_invoke$arity$1(G__36844) : fexpr__36843.call(null,G__36844));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37345,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37346,actual_type_37415,f_37394], null),canonical_f_37417], 0));

if(cljs.core.truth_(elem_37345.addEventListener)){
elem_37345.addEventListener(cljs.core.name(actual_type_37415),canonical_f_37417);
} else {
elem_37345.attachEvent(cljs.core.name(actual_type_37415),canonical_f_37417);
}


var G__37418 = cljs.core.next(seq__36732_37408__$1);
var G__37419 = null;
var G__37420 = (0);
var G__37421 = (0);
seq__36732_37395 = G__37418;
chunk__36734_37396 = G__37419;
count__36735_37397 = G__37420;
i__36736_37398 = G__37421;
continue;
}
} else {
}
}
break;
}

var G__37422 = cljs.core.next(seq__36731_37386__$1);
var G__37423 = null;
var G__37424 = (0);
var G__37425 = (0);
seq__36731_37347 = G__37422;
chunk__36738_37348 = G__37423;
count__36739_37349 = G__37424;
i__36740_37350 = G__37425;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36726){
var G__36727 = cljs.core.first(seq36726);
var seq36726__$1 = cljs.core.next(seq36726);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36727,seq36726__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37426 = arguments.length;
var i__4790__auto___37427 = (0);
while(true){
if((i__4790__auto___37427 < len__4789__auto___37426)){
args__4795__auto__.push((arguments[i__4790__auto___37427]));

var G__37428 = (i__4790__auto___37427 + (1));
i__4790__auto___37427 = G__37428;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36847_37429 = dommy.core.elem_and_selector(elem_sel);
var elem_37430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847_37429,(0),null);
var selector_37431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847_37429,(1),null);
var seq__36850_37432 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36857_37433 = null;
var count__36858_37434 = (0);
var i__36859_37435 = (0);
while(true){
if((i__36859_37435 < count__36858_37434)){
var vec__36907_37436 = chunk__36857_37433.cljs$core$IIndexed$_nth$arity$2(null,i__36859_37435);
var orig_type_37437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907_37436,(0),null);
var f_37438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907_37436,(1),null);
var seq__36860_37439 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37437,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37437,cljs.core.identity])));
var chunk__36862_37440 = null;
var count__36863_37441 = (0);
var i__36864_37442 = (0);
while(true){
if((i__36864_37442 < count__36863_37441)){
var vec__36916_37443 = chunk__36862_37440.cljs$core$IIndexed$_nth$arity$2(null,i__36864_37442);
var actual_type_37444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916_37443,(0),null);
var __37445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36916_37443,(1),null);
var keys_37446 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37444,f_37438], null);
var canonical_f_37447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37446);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37446], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37444),canonical_f_37447);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37444),canonical_f_37447);
}


var G__37448 = seq__36860_37439;
var G__37449 = chunk__36862_37440;
var G__37450 = count__36863_37441;
var G__37451 = (i__36864_37442 + (1));
seq__36860_37439 = G__37448;
chunk__36862_37440 = G__37449;
count__36863_37441 = G__37450;
i__36864_37442 = G__37451;
continue;
} else {
var temp__5735__auto___37452 = cljs.core.seq(seq__36860_37439);
if(temp__5735__auto___37452){
var seq__36860_37453__$1 = temp__5735__auto___37452;
if(cljs.core.chunked_seq_QMARK_(seq__36860_37453__$1)){
var c__4609__auto___37454 = cljs.core.chunk_first(seq__36860_37453__$1);
var G__37455 = cljs.core.chunk_rest(seq__36860_37453__$1);
var G__37456 = c__4609__auto___37454;
var G__37457 = cljs.core.count(c__4609__auto___37454);
var G__37458 = (0);
seq__36860_37439 = G__37455;
chunk__36862_37440 = G__37456;
count__36863_37441 = G__37457;
i__36864_37442 = G__37458;
continue;
} else {
var vec__36919_37459 = cljs.core.first(seq__36860_37453__$1);
var actual_type_37460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36919_37459,(0),null);
var __37461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36919_37459,(1),null);
var keys_37462 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37460,f_37438], null);
var canonical_f_37463 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37462);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37462], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37460),canonical_f_37463);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37460),canonical_f_37463);
}


var G__37464 = cljs.core.next(seq__36860_37453__$1);
var G__37465 = null;
var G__37466 = (0);
var G__37467 = (0);
seq__36860_37439 = G__37464;
chunk__36862_37440 = G__37465;
count__36863_37441 = G__37466;
i__36864_37442 = G__37467;
continue;
}
} else {
}
}
break;
}

var G__37468 = seq__36850_37432;
var G__37469 = chunk__36857_37433;
var G__37470 = count__36858_37434;
var G__37471 = (i__36859_37435 + (1));
seq__36850_37432 = G__37468;
chunk__36857_37433 = G__37469;
count__36858_37434 = G__37470;
i__36859_37435 = G__37471;
continue;
} else {
var temp__5735__auto___37472 = cljs.core.seq(seq__36850_37432);
if(temp__5735__auto___37472){
var seq__36850_37473__$1 = temp__5735__auto___37472;
if(cljs.core.chunked_seq_QMARK_(seq__36850_37473__$1)){
var c__4609__auto___37474 = cljs.core.chunk_first(seq__36850_37473__$1);
var G__37475 = cljs.core.chunk_rest(seq__36850_37473__$1);
var G__37476 = c__4609__auto___37474;
var G__37477 = cljs.core.count(c__4609__auto___37474);
var G__37478 = (0);
seq__36850_37432 = G__37475;
chunk__36857_37433 = G__37476;
count__36858_37434 = G__37477;
i__36859_37435 = G__37478;
continue;
} else {
var vec__36922_37479 = cljs.core.first(seq__36850_37473__$1);
var orig_type_37480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36922_37479,(0),null);
var f_37481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36922_37479,(1),null);
var seq__36851_37482 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37480,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37480,cljs.core.identity])));
var chunk__36853_37483 = null;
var count__36854_37484 = (0);
var i__36855_37485 = (0);
while(true){
if((i__36855_37485 < count__36854_37484)){
var vec__36931_37486 = chunk__36853_37483.cljs$core$IIndexed$_nth$arity$2(null,i__36855_37485);
var actual_type_37487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931_37486,(0),null);
var __37488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36931_37486,(1),null);
var keys_37491 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37487,f_37481], null);
var canonical_f_37492 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37491);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37491], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37487),canonical_f_37492);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37487),canonical_f_37492);
}


var G__37495 = seq__36851_37482;
var G__37496 = chunk__36853_37483;
var G__37497 = count__36854_37484;
var G__37498 = (i__36855_37485 + (1));
seq__36851_37482 = G__37495;
chunk__36853_37483 = G__37496;
count__36854_37484 = G__37497;
i__36855_37485 = G__37498;
continue;
} else {
var temp__5735__auto___37500__$1 = cljs.core.seq(seq__36851_37482);
if(temp__5735__auto___37500__$1){
var seq__36851_37502__$1 = temp__5735__auto___37500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36851_37502__$1)){
var c__4609__auto___37503 = cljs.core.chunk_first(seq__36851_37502__$1);
var G__37504 = cljs.core.chunk_rest(seq__36851_37502__$1);
var G__37505 = c__4609__auto___37503;
var G__37506 = cljs.core.count(c__4609__auto___37503);
var G__37507 = (0);
seq__36851_37482 = G__37504;
chunk__36853_37483 = G__37505;
count__36854_37484 = G__37506;
i__36855_37485 = G__37507;
continue;
} else {
var vec__36936_37508 = cljs.core.first(seq__36851_37502__$1);
var actual_type_37509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936_37508,(0),null);
var __37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936_37508,(1),null);
var keys_37511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37431,actual_type_37509,f_37481], null);
var canonical_f_37512 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37430),keys_37511);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37430,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37511], 0));

if(cljs.core.truth_(elem_37430.removeEventListener)){
elem_37430.removeEventListener(cljs.core.name(actual_type_37509),canonical_f_37512);
} else {
elem_37430.detachEvent(cljs.core.name(actual_type_37509),canonical_f_37512);
}


var G__37513 = cljs.core.next(seq__36851_37502__$1);
var G__37514 = null;
var G__37515 = (0);
var G__37516 = (0);
seq__36851_37482 = G__37513;
chunk__36853_37483 = G__37514;
count__36854_37484 = G__37515;
i__36855_37485 = G__37516;
continue;
}
} else {
}
}
break;
}

var G__37517 = cljs.core.next(seq__36850_37473__$1);
var G__37518 = null;
var G__37519 = (0);
var G__37520 = (0);
seq__36850_37432 = G__37517;
chunk__36857_37433 = G__37518;
count__36858_37434 = G__37519;
i__36859_37435 = G__37520;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36845){
var G__36846 = cljs.core.first(seq36845);
var seq36845__$1 = cljs.core.next(seq36845);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36846,seq36845__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37521 = arguments.length;
var i__4790__auto___37522 = (0);
while(true){
if((i__4790__auto___37522 < len__4789__auto___37521)){
args__4795__auto__.push((arguments[i__4790__auto___37522]));

var G__37523 = (i__4790__auto___37522 + (1));
i__4790__auto___37522 = G__37523;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36944_37528 = dommy.core.elem_and_selector(elem_sel);
var elem_37529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36944_37528,(0),null);
var selector_37530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36944_37528,(1),null);
var seq__36947_37531 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36948_37532 = null;
var count__36949_37533 = (0);
var i__36950_37534 = (0);
while(true){
if((i__36950_37534 < count__36949_37533)){
var vec__36957_37537 = chunk__36948_37532.cljs$core$IIndexed$_nth$arity$2(null,i__36950_37534);
var type_37538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957_37537,(0),null);
var f_37539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36957_37537,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37538,((function (seq__36947_37531,chunk__36948_37532,count__36949_37533,i__36950_37534,vec__36957_37537,type_37538,f_37539,vec__36944_37528,elem_37529,selector_37530){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37538,dommy$core$this_fn], 0));

return (f_37539.cljs$core$IFn$_invoke$arity$1 ? f_37539.cljs$core$IFn$_invoke$arity$1(e) : f_37539.call(null,e));
});})(seq__36947_37531,chunk__36948_37532,count__36949_37533,i__36950_37534,vec__36957_37537,type_37538,f_37539,vec__36944_37528,elem_37529,selector_37530))
], 0));


var G__37541 = seq__36947_37531;
var G__37542 = chunk__36948_37532;
var G__37543 = count__36949_37533;
var G__37544 = (i__36950_37534 + (1));
seq__36947_37531 = G__37541;
chunk__36948_37532 = G__37542;
count__36949_37533 = G__37543;
i__36950_37534 = G__37544;
continue;
} else {
var temp__5735__auto___37545 = cljs.core.seq(seq__36947_37531);
if(temp__5735__auto___37545){
var seq__36947_37546__$1 = temp__5735__auto___37545;
if(cljs.core.chunked_seq_QMARK_(seq__36947_37546__$1)){
var c__4609__auto___37549 = cljs.core.chunk_first(seq__36947_37546__$1);
var G__37553 = cljs.core.chunk_rest(seq__36947_37546__$1);
var G__37554 = c__4609__auto___37549;
var G__37555 = cljs.core.count(c__4609__auto___37549);
var G__37556 = (0);
seq__36947_37531 = G__37553;
chunk__36948_37532 = G__37554;
count__36949_37533 = G__37555;
i__36950_37534 = G__37556;
continue;
} else {
var vec__36960_37559 = cljs.core.first(seq__36947_37546__$1);
var type_37560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960_37559,(0),null);
var f_37561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960_37559,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37560,((function (seq__36947_37531,chunk__36948_37532,count__36949_37533,i__36950_37534,vec__36960_37559,type_37560,f_37561,seq__36947_37546__$1,temp__5735__auto___37545,vec__36944_37528,elem_37529,selector_37530){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37560,dommy$core$this_fn], 0));

return (f_37561.cljs$core$IFn$_invoke$arity$1 ? f_37561.cljs$core$IFn$_invoke$arity$1(e) : f_37561.call(null,e));
});})(seq__36947_37531,chunk__36948_37532,count__36949_37533,i__36950_37534,vec__36960_37559,type_37560,f_37561,seq__36947_37546__$1,temp__5735__auto___37545,vec__36944_37528,elem_37529,selector_37530))
], 0));


var G__37566 = cljs.core.next(seq__36947_37546__$1);
var G__37567 = null;
var G__37568 = (0);
var G__37569 = (0);
seq__36947_37531 = G__37566;
chunk__36948_37532 = G__37567;
count__36949_37533 = G__37568;
i__36950_37534 = G__37569;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36940){
var G__36941 = cljs.core.first(seq36940);
var seq36940__$1 = cljs.core.next(seq36940);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36941,seq36940__$1);
}));


//# sourceMappingURL=dommy.core.js.map
