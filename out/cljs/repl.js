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
var seq__8096_8110 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8097_8111 = null;
var count__8098_8112 = (0);
var i__8099_8113 = (0);
while(true){
if((i__8099_8113 < count__8098_8112)){
var f_8114 = cljs.core._nth.call(null,chunk__8097_8111,i__8099_8113);
cljs.core.println.call(null,"  ",f_8114);

var G__8115 = seq__8096_8110;
var G__8116 = chunk__8097_8111;
var G__8117 = count__8098_8112;
var G__8118 = (i__8099_8113 + (1));
seq__8096_8110 = G__8115;
chunk__8097_8111 = G__8116;
count__8098_8112 = G__8117;
i__8099_8113 = G__8118;
continue;
} else {
var temp__4425__auto___8119 = cljs.core.seq.call(null,seq__8096_8110);
if(temp__4425__auto___8119){
var seq__8096_8120__$1 = temp__4425__auto___8119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8096_8120__$1)){
var c__7592__auto___8121 = cljs.core.chunk_first.call(null,seq__8096_8120__$1);
var G__8122 = cljs.core.chunk_rest.call(null,seq__8096_8120__$1);
var G__8123 = c__7592__auto___8121;
var G__8124 = cljs.core.count.call(null,c__7592__auto___8121);
var G__8125 = (0);
seq__8096_8110 = G__8122;
chunk__8097_8111 = G__8123;
count__8098_8112 = G__8124;
i__8099_8113 = G__8125;
continue;
} else {
var f_8126 = cljs.core.first.call(null,seq__8096_8120__$1);
cljs.core.println.call(null,"  ",f_8126);

var G__8127 = cljs.core.next.call(null,seq__8096_8120__$1);
var G__8128 = null;
var G__8129 = (0);
var G__8130 = (0);
seq__8096_8110 = G__8127;
chunk__8097_8111 = G__8128;
count__8098_8112 = G__8129;
i__8099_8113 = G__8130;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8131 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6789__auto__)){
return or__6789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8131);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8131)))?cljs.core.second.call(null,arglists_8131):arglists_8131));
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
var seq__8100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8101 = null;
var count__8102 = (0);
var i__8103 = (0);
while(true){
if((i__8103 < count__8102)){
var vec__8104 = cljs.core._nth.call(null,chunk__8101,i__8103);
var name = cljs.core.nth.call(null,vec__8104,(0),null);
var map__8105 = cljs.core.nth.call(null,vec__8104,(1),null);
var map__8105__$1 = ((((!((map__8105 == null)))?((((map__8105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8105):map__8105);
var doc = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8132 = seq__8100;
var G__8133 = chunk__8101;
var G__8134 = count__8102;
var G__8135 = (i__8103 + (1));
seq__8100 = G__8132;
chunk__8101 = G__8133;
count__8102 = G__8134;
i__8103 = G__8135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8100);
if(temp__4425__auto__){
var seq__8100__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__8100__$1);
var G__8136 = cljs.core.chunk_rest.call(null,seq__8100__$1);
var G__8137 = c__7592__auto__;
var G__8138 = cljs.core.count.call(null,c__7592__auto__);
var G__8139 = (0);
seq__8100 = G__8136;
chunk__8101 = G__8137;
count__8102 = G__8138;
i__8103 = G__8139;
continue;
} else {
var vec__8107 = cljs.core.first.call(null,seq__8100__$1);
var name = cljs.core.nth.call(null,vec__8107,(0),null);
var map__8108 = cljs.core.nth.call(null,vec__8107,(1),null);
var map__8108__$1 = ((((!((map__8108 == null)))?((((map__8108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8108):map__8108);
var doc = cljs.core.get.call(null,map__8108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8140 = cljs.core.next.call(null,seq__8100__$1);
var G__8141 = null;
var G__8142 = (0);
var G__8143 = (0);
seq__8100 = G__8140;
chunk__8101 = G__8141;
count__8102 = G__8142;
i__8103 = G__8143;
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