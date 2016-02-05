// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9705_9719 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9706_9720 = null;
var count__9707_9721 = (0);
var i__9708_9722 = (0);
while(true){
if((i__9708_9722 < count__9707_9721)){
var f_9723 = cljs.core._nth.call(null,chunk__9706_9720,i__9708_9722);
cljs.core.println.call(null,"  ",f_9723);

var G__9724 = seq__9705_9719;
var G__9725 = chunk__9706_9720;
var G__9726 = count__9707_9721;
var G__9727 = (i__9708_9722 + (1));
seq__9705_9719 = G__9724;
chunk__9706_9720 = G__9725;
count__9707_9721 = G__9726;
i__9708_9722 = G__9727;
continue;
} else {
var temp__4425__auto___9728 = cljs.core.seq.call(null,seq__9705_9719);
if(temp__4425__auto___9728){
var seq__9705_9729__$1 = temp__4425__auto___9728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9705_9729__$1)){
var c__7495__auto___9730 = cljs.core.chunk_first.call(null,seq__9705_9729__$1);
var G__9731 = cljs.core.chunk_rest.call(null,seq__9705_9729__$1);
var G__9732 = c__7495__auto___9730;
var G__9733 = cljs.core.count.call(null,c__7495__auto___9730);
var G__9734 = (0);
seq__9705_9719 = G__9731;
chunk__9706_9720 = G__9732;
count__9707_9721 = G__9733;
i__9708_9722 = G__9734;
continue;
} else {
var f_9735 = cljs.core.first.call(null,seq__9705_9729__$1);
cljs.core.println.call(null,"  ",f_9735);

var G__9736 = cljs.core.next.call(null,seq__9705_9729__$1);
var G__9737 = null;
var G__9738 = (0);
var G__9739 = (0);
seq__9705_9719 = G__9736;
chunk__9706_9720 = G__9737;
count__9707_9721 = G__9738;
i__9708_9722 = G__9739;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9740 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6692__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6692__auto__)){
return or__6692__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9740);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9740)))?cljs.core.second.call(null,arglists_9740):arglists_9740));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9709 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9710 = null;
var count__9711 = (0);
var i__9712 = (0);
while(true){
if((i__9712 < count__9711)){
var vec__9713 = cljs.core._nth.call(null,chunk__9710,i__9712);
var name = cljs.core.nth.call(null,vec__9713,(0),null);
var map__9714 = cljs.core.nth.call(null,vec__9713,(1),null);
var map__9714__$1 = ((((!((map__9714 == null)))?((((map__9714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9714):map__9714);
var doc = cljs.core.get.call(null,map__9714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9741 = seq__9709;
var G__9742 = chunk__9710;
var G__9743 = count__9711;
var G__9744 = (i__9712 + (1));
seq__9709 = G__9741;
chunk__9710 = G__9742;
count__9711 = G__9743;
i__9712 = G__9744;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9709);
if(temp__4425__auto__){
var seq__9709__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9709__$1)){
var c__7495__auto__ = cljs.core.chunk_first.call(null,seq__9709__$1);
var G__9745 = cljs.core.chunk_rest.call(null,seq__9709__$1);
var G__9746 = c__7495__auto__;
var G__9747 = cljs.core.count.call(null,c__7495__auto__);
var G__9748 = (0);
seq__9709 = G__9745;
chunk__9710 = G__9746;
count__9711 = G__9747;
i__9712 = G__9748;
continue;
} else {
var vec__9716 = cljs.core.first.call(null,seq__9709__$1);
var name = cljs.core.nth.call(null,vec__9716,(0),null);
var map__9717 = cljs.core.nth.call(null,vec__9716,(1),null);
var map__9717__$1 = ((((!((map__9717 == null)))?((((map__9717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9717):map__9717);
var doc = cljs.core.get.call(null,map__9717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9749 = cljs.core.next.call(null,seq__9709__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9709 = G__9749;
chunk__9710 = G__9750;
count__9711 = G__9751;
i__9712 = G__9752;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map