goog.provide('time_literals.read_write');
goog.require('cljs.core');
goog.require('java.time');
goog.require('cljs.reader');
time_literals.read_write.print_to_string = (function time_literals$read_write$print_to_string(t,o){
return ["#time/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"\""].join('');
});
time_literals.read_write.print_period = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"period");
time_literals.read_write.print_date = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date");
time_literals.read_write.print_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date-time");
time_literals.read_write.print_zoned_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zoned-date-time");
time_literals.read_write.print_offset_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-time");
time_literals.read_write.print_instant = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"instant");
time_literals.read_write.print_offset_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-date-time");
time_literals.read_write.print_zone = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zone");
time_literals.read_write.print_day_of_week = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"day-of-week");
time_literals.read_write.print_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"time");
time_literals.read_write.print_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month");
time_literals.read_write.print_month_day = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month-day");
time_literals.read_write.print_duration = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"duration");
time_literals.read_write.print_year = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year");
time_literals.read_write.print_year_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year-month");
time_literals.read_write.print_time_literals_cljs_BANG_ = (function time_literals$read_write$print_time_literals_cljs_BANG_(){
(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_month_day.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_month_day.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_month_day.call(null,d__$1)));
}));

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_year_month.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_year_month.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_year_month.call(null,d__$1)));
}));

(java.time.Year.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_year.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_year.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_year.call(null,d__$1)));
}));

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_zoned_date_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_zoned_date_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_zoned_date_time.call(null,d__$1)));
}));

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_offset_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_offset_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_offset_time.call(null,d__$1)));
}));

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_instant.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_instant.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_instant.call(null,d__$1)));
}));

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_zone.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_zone.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_zone.call(null,d__$1)));
}));

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_date.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_date.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_date.call(null,d__$1)));
}));

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_time.call(null,d__$1)));
}));

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_date_time.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_date_time.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_date_time.call(null,d__$1)));
}));

(java.time.Month.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Month.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_month.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_month.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_month.call(null,d__$1)));
}));

(java.time.Period.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_period.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_period.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_period.call(null,d__$1)));
}));

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_day_of_week.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_day_of_week.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_day_of_week.call(null,d__$1)));
}));

(java.time.Duration.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

return (java.time.Duration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,(time_literals.read_write.print_duration.cljs$core$IFn$_invoke$arity$1 ? time_literals.read_write.print_duration.cljs$core$IFn$_invoke$arity$1(d__$1) : time_literals.read_write.print_duration.call(null,d__$1)));
}));
});
time_literals.read_write.print_time_literals_clj_BANG_ = (function time_literals$read_write$print_time_literals_clj_BANG_(){
return null;
});
time_literals.read_write.tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","month-day","time/month-day",61138729,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (t){
return java.time.Instant.parse(t);
}),(function (t){
return java.time.Duration.parse(t);
}),(function (t){
return java.time.OffsetDateTime.parse(t);
}),(function (t){
return java.time.DayOfWeek.valueOf(t);
}),(function (t){
return java.time.LocalTime.parse(t);
}),(function (t){
return java.time.YearMonth.parse(t);
}),(function (t){
return java.time.OffsetTime.parse(t);
}),(function (t){
return java.time.Period.parse(t);
}),(function (t){
return java.time.ZonedDateTime.parse(t);
}),(function (t){
return java.time.Month.valueOf(t);
}),(function (t){
return java.time.LocalDate.parse(t);
}),(function (t){
return java.time.Year.parse(t);
}),(function (t){
return java.time.MonthDay.parse(t);
}),(function (t){
return java.time.LocalDateTime.parse(t);
}),(function (t){
return java.time.ZoneId.of(t);
})]);
var seq__50442_50470 = cljs.core.seq(time_literals.read_write.tags);
var chunk__50443_50471 = null;
var count__50444_50472 = (0);
var i__50445_50473 = (0);
while(true){
if((i__50445_50473 < count__50444_50472)){
var vec__50452_50474 = chunk__50443_50471.cljs$core$IIndexed$_nth$arity$2(null,i__50445_50473);
var tag_50475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50452_50474,(0),null);
var read_fn_50476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50452_50474,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_50475,read_fn_50476);


var G__50480 = seq__50442_50470;
var G__50481 = chunk__50443_50471;
var G__50482 = count__50444_50472;
var G__50483 = (i__50445_50473 + (1));
seq__50442_50470 = G__50480;
chunk__50443_50471 = G__50481;
count__50444_50472 = G__50482;
i__50445_50473 = G__50483;
continue;
} else {
var temp__5735__auto___50485 = cljs.core.seq(seq__50442_50470);
if(temp__5735__auto___50485){
var seq__50442_50486__$1 = temp__5735__auto___50485;
if(cljs.core.chunked_seq_QMARK_(seq__50442_50486__$1)){
var c__4609__auto___50487 = cljs.core.chunk_first(seq__50442_50486__$1);
var G__50488 = cljs.core.chunk_rest(seq__50442_50486__$1);
var G__50489 = c__4609__auto___50487;
var G__50490 = cljs.core.count(c__4609__auto___50487);
var G__50491 = (0);
seq__50442_50470 = G__50488;
chunk__50443_50471 = G__50489;
count__50444_50472 = G__50490;
i__50445_50473 = G__50491;
continue;
} else {
var vec__50455_50494 = cljs.core.first(seq__50442_50486__$1);
var tag_50495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50455_50494,(0),null);
var read_fn_50496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50455_50494,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_50495,read_fn_50496);


var G__50499 = cljs.core.next(seq__50442_50486__$1);
var G__50500 = null;
var G__50501 = (0);
var G__50502 = (0);
seq__50442_50470 = G__50499;
chunk__50443_50471 = G__50500;
count__50444_50472 = G__50501;
i__50445_50473 = G__50502;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=time_literals.read_write.js.map
