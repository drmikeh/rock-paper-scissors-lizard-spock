"use strict";$(document).ready(function(s){function a(s){var a={rock:["scissors","lizard"],paper:["rock","spock"],scissors:["paper","lizard"],lizard:["spock","paper"],spock:["rock","scissors"]},l=o(d);return s===l?(r=l+" tied with "+s,c++,n++,t("tie",s,l),"tie"):a[l].indexOf(s)==-1?(r=s+" beat "+l,c++,i++,t("win",s,l),"win"):a[s].indexOf(l)==-1?(r=s+" lost against "+l,c++,e++,t("loss",s,l),"loss"):"none"}function o(s){return s[Math.floor(Math.random()*s.length)]}function t(s,a,o){var t="win"===s?">":"loss"===s?"<":"=";$(".history").prepend('<div class="history-item '+s+'"><i class="fa fa-hand-'+a+'-o"></i><span class="small">'+t+'</span><i class="fa fa-hand-'+o+'-o"></i></div>'),$(".scoreboard .win span").text(i),$(".scoreboard .tie span").text(n),$(".scoreboard .loss span").text(e),$(".scoreboard .move span").text(c)}var r,i=0,e=0,n=0,c=0,d=["rock","paper","scissors","lizard","spock"];$("button").click(function(s){var o=$(this),t=o.data("play"),i=a(t);$("button").removeClass(),o.addClass(i),$(".result").empty().html('<div class="animated fadeOutUp '+i+'">'+r+"</div>")})});