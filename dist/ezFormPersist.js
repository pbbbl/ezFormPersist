var ezFormPersist=function(){"use strict";
/*!
	 * JavaScript Cookie v2.2.1
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
var e,t=(function(e,t){var n;n=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},a.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var c in o)o[c]&&(u+="; "+c,!0!==o[c]&&(u+="="+o[c].split(";")[0]));return document.cookie=t+"="+n+u}}function i(e,n){if("undefined"!=typeof document){for(var a={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var u=o[i].split("="),c=u.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(u[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(a[l]=c,e===l)break}catch(e){}}return e?a[e]:a}}return a.set=o,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(t,n){o(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))},e.exports=n()}(e={exports:{}},e.exports),e.exports),n=function(e){var t=null!=e&&"undefined"!=e;return"false"==e&&(e="false"),{valid:t,value:e}};return function(){document.querySelectorAll("[data-save-field]").forEach((function(e,r){var a="field_"+r,o=e.tagName.toLowerCase();e&&e.name&&(a=e.name);var i,u=function(e){e=(e=(e=(e=e||window.location.pathname).replace("/","")).replace(/[\W_]+/g," ").toLowerCase()).split(" ");for(var t=1;t<e.length&&e[t];t++)e[t]=e[t][0].toUpperCase()+e[t].substr(1);return e.join("")}()+"__"+a,c="user__"+a,l=n(t.get(u)),f=n(t.get(c));if(l.valid?i=l:f.valid&&(i=f),i){var s="";null!=i.value&&null!=i.value&&(s="false"!=i.value&&i.value,e.value=s)}var p={input:"input",textarea:"keyup",select:"change"}[o];e.addEventListener(p,(function(e){var r=n(e.target.value);r.valid&&(t.set(c,r.value),t.set(u,r.value))}))})),formSaver()}}();