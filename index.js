// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).debugStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,p=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,s;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(l.call(r,e)||p.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,s="set"in t,o&&(i||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(r,e,t.get),s&&f&&f.call(r,e,t.set),r};var s=o;function y(r,e,t){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function d(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var b=/./;function h(r){return"boolean"==typeof r}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return g&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function j(r,e){return null!=r&&m.call(r,e)}var O="function"==typeof Symbol?Symbol.toStringTag:"";var A=v()?function(r){var e,t,n;if(null==r)return w.call(r);t=r[O],e=j(r,O);try{r[O]=void 0}catch(e){return w.call(r)}return n=w.call(r),e?r[O]=t:delete r[O],n}:function(r){return w.call(r)},E=Boolean.prototype.toString;var M=v();function _(r){return"object"==typeof r&&(r instanceof Boolean||(M?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function S(r){return h(r)||_(r)}function k(){return new Function("return this;")()}y(S,"isPrimitive",h),y(S,"isObject",_);var I="object"==typeof self?self:null,T="object"==typeof window?window:null,x="object"==typeof global?global:null;var F=function(r){if(arguments.length){if(!h(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return k()}if(I)return I;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),U=F.document&&F.document.childNodes,P=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;y(V,"REGEXP",C);var $=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};function N(r){return null!==r&&"object"==typeof r}function W(r){return N(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function H(r){var e,t,n;if(("Object"===(t=A(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return W(r)?"Buffer":t}y(N,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!$(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(N));var B="function"==typeof b||"object"==typeof P||"function"==typeof U?function(r){return H(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?H(r).toLowerCase():e};function R(r){return"function"===B(r)}function L(r){return"number"==typeof r}var z=Number,G=z.prototype.toString;var q=v();function X(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return G.call(r),!0}catch(r){return!1}}(r):"[object Number]"===A(r)))}function D(r){return L(r)||X(r)}y(D,"isPrimitive",L),y(D,"isObject",X);var Z=Number.POSITIVE_INFINITY,J=z.NEGATIVE_INFINITY,Y=Math.floor;function K(r){return Y(r)===r}function Q(r){return r<Z&&r>J&&K(r)}function rr(r){return L(r)&&Q(r)}function er(r){return X(r)&&Q(r.valueOf())}function tr(r){return rr(r)||er(r)}function nr(r){return rr(r)&&r>=0}function or(r){return er(r)&&r.valueOf()>=0}function ir(r){return nr(r)||or(r)}y(tr,"isPrimitive",rr),y(tr,"isObject",er),y(ir,"isPrimitive",nr),y(ir,"isObject",or);var ar,ur=Object.getPrototypeOf;ar=R(Object.getPrototypeOf)?ur:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===A(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var cr=ar;function fr(r){return null==r?null:(r=Object(r),cr(r))}function lr(r){return"string"==typeof r}var pr=String.prototype.valueOf;var sr=v();function yr(r){return"object"==typeof r&&(r instanceof String||(sr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===A(r)))}function dr(r){return lr(r)||yr(r)}function br(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function hr(r){return"number"==typeof r}function gr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function vr(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+gr(o):gr(o)+r,n&&(r="-"+r)),r}y(dr,"isPrimitive",lr),y(dr,"isObject",yr),y(br,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var wr=String.prototype.toLowerCase,mr=String.prototype.toUpperCase;function jr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!hr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=vr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=vr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):wr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Or(r){return"string"==typeof r}var Ar=Math.abs,Er=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,_r=String.prototype.replace,Sr=/e\+(\d)$/,kr=/e-(\d)$/,Ir=/^(\d+)$/,Tr=/^(\d+)e/,xr=/\.0$/,Fr=/\.0*e/,Ur=/(\..*[^0])0*e/;function Pr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!hr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_r.call(t,Ur,"$1e"),t=_r.call(t,Fr,"e"),t=_r.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_r.call(t,Sr,"e+0$1"),t=_r.call(t,kr,"e-0$1"),r.alternate&&(t=_r.call(t,Ir,"$1."),t=_r.call(t,Tr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Mr.call(r.specifier)?Mr.call(t):Er.call(t)}function Vr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Cr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Vr(n):Vr(n)+r}var $r=String.fromCharCode,Nr=isNaN,Wr=Array.isArray;function Hr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Br(r){var e,t,n,o,i,a,u,c,f;if(!Wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Or(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Hr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Nr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Nr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=jr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Nr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nr(i)?String(n.arg):$r(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Pr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=vr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function zr(r){var e,t,n,o;for(t=[],o=0,n=Rr.exec(r);n;)(e=r.slice(o,Rr.lastIndex-n[0].length)).length&&t.push(e),t.push(Lr(n)),o=Rr.lastIndex,n=Rr.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Gr(r){return"string"==typeof r}function qr(r){var e,t,n;if(!Gr(r))throw new TypeError(qr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=zr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Br.apply(null,t)}function Xr(r){return r!=r}function Dr(r){return L(r)&&Xr(r)}function Zr(r){return X(r)&&Xr(r.valueOf())}function Jr(r){return Dr(r)||Zr(r)}y(Jr,"isPrimitive",Dr),y(Jr,"isObject",Zr);function Yr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&K(r.length)&&r.length>=0&&r.length<=9007199254740991}function Kr(r,e,t){var n,o;if(!Yr(r)&&!lr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!rr(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Jr(e)){for(;o<n;o++)if(Jr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function Qr(r){return Object.keys(Object(r))}var re,ee=void 0!==Object.keys;function te(r){return"[object Arguments]"===A(r)}re=function(){return te(arguments)}();var ne=re,oe=Object.prototype.propertyIsEnumerable;var ie=!oe.call("beep","0");function ae(r,e){var t;return null!=r&&(!(t=oe.call(r,e))&&ie&&dr(r)?!Dr(e=+e)&&rr(e)&&e>=0&&e<r.length:t)}var ue=4294967295;var ce=ne?te:function(r){return null!==r&&"object"==typeof r&&!$(r)&&"number"==typeof r.length&&K(r.length)&&r.length>=0&&r.length<=ue&&j(r,"callee")&&!ae(r,"callee")},fe=Array.prototype.slice;var le=ae((function(){}),"prototype"),pe=!ae({toString:null},"toString");function se(r){return r.constructor&&r.constructor.prototype===r}var ye=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de="undefined"==typeof window?void 0:window;var be=function(){var r;if("undefined"===B(de))return!1;for(r in de)try{-1===Kr(ye,r)&&j(de,r)&&null!==de[r]&&"object"===B(de[r])&&se(de[r])}catch(r){return!0}return!1}(),he="undefined"!=typeof window;var ge,ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ge=ee?function(){return 2!==(Qr(arguments)||"").length}(1,2)?function(r){return ce(r)?Qr(fe.call(r)):Qr(r)}:Qr:function(r){var e,t,n,o,i,a,u;if(o=[],ce(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!j(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!N(r))return o;t=le&&n}for(i in r)t&&"prototype"===i||!j(r,i)||o.push(String(i));if(pe)for(e=function(r){if(!1===he&&!be)return se(r);try{return se(r)}catch(r){return!1}}(r),u=0;u<ve.length;u++)a=ve[u],e&&"constructor"===a||!j(r,a)||o.push(String(a));return o};var we=ge,me=void 0!==Object.getOwnPropertyNames,je=Object.getOwnPropertyNames;var Oe=me?function(r){return je(Object(r))}:function(r){return we(Object(r))},Ae=void 0!==Object.getOwnPropertyDescriptor,Ee=Object.getOwnPropertyDescriptor;var Me=Ae?function(r,e){var t;return null==r||void 0===(t=Ee(r,e))?null:t}:function(r,e){return j(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},_e="function"==typeof Buffer?Buffer:null;var Se,ke=e.Buffer;Se=function(){var r,e;if("function"!=typeof _e)return!1;try{r=W(e="function"==typeof _e.from?_e.from([1,2,3,4]):new _e([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?ke:function(){throw new Error("not implemented")};var Ie=Se;var Te=R(Ie.from)?function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Ie.from(r)}:function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Ie(r)},xe="function"==typeof Int8Array;var Fe="function"==typeof Int8Array?Int8Array:null;var Ue,Pe="function"==typeof Int8Array?Int8Array:void 0;Ue=function(){var r,e,t;if("function"!=typeof Fe)return!1;try{e=new Fe([1,3.14,-3.14,128]),t=e,r=(xe&&t instanceof Int8Array||"[object Int8Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Pe:function(){throw new Error("not implemented")};var Ve=Ue,Ce="function"==typeof Uint8Array;var $e="function"==typeof Uint8Array?Uint8Array:null;var Ne,We="function"==typeof Uint8Array?Uint8Array:void 0;Ne=function(){var r,e,t;if("function"!=typeof $e)return!1;try{e=new $e(e=[1,3.14,-3.14,256,257]),t=e,r=(Ce&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var He=Ne,Be="function"==typeof Uint8ClampedArray;var Re="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Le,ze="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Le=function(){var r,e,t;if("function"!=typeof Re)return!1;try{e=new Re([-1,0,1,3.14,4.99,255,256]),t=e,r=(Be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===A(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?ze:function(){throw new Error("not implemented")};var Ge=Le,qe="function"==typeof Int16Array;var Xe="function"==typeof Int16Array?Int16Array:null;var De,Ze="function"==typeof Int16Array?Int16Array:void 0;De=function(){var r,e,t;if("function"!=typeof Xe)return!1;try{e=new Xe([1,3.14,-3.14,32768]),t=e,r=(qe&&t instanceof Int16Array||"[object Int16Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ze:function(){throw new Error("not implemented")};var Je=De,Ye="function"==typeof Uint16Array;var Ke="function"==typeof Uint16Array?Uint16Array:null;var Qe,rt="function"==typeof Uint16Array?Uint16Array:void 0;Qe=function(){var r,e,t;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ye&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var et=Qe,tt="function"==typeof Int32Array;var nt="function"==typeof Int32Array?Int32Array:null;var ot,it="function"==typeof Int32Array?Int32Array:void 0;ot=function(){var r,e,t;if("function"!=typeof nt)return!1;try{e=new nt([1,3.14,-3.14,2147483648]),t=e,r=(tt&&t instanceof Int32Array||"[object Int32Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?it:function(){throw new Error("not implemented")};var at=ot,ut="function"==typeof Uint32Array;var ct="function"==typeof Uint32Array?Uint32Array:null;var ft,lt="function"==typeof Uint32Array?Uint32Array:void 0;ft=function(){var r,e,t;if("function"!=typeof ct)return!1;try{e=new ct(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ut&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lt:function(){throw new Error("not implemented")};var pt=ft,st="function"==typeof Float32Array;var yt="function"==typeof Float32Array?Float32Array:null;var dt,bt="function"==typeof Float32Array?Float32Array:void 0;dt=function(){var r,e,t;if("function"!=typeof yt)return!1;try{e=new yt([1,3.14,-3.14,5e40]),t=e,r=(st&&t instanceof Float32Array||"[object Float32Array]"===A(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Z}catch(e){r=!1}return r}()?bt:function(){throw new Error("not implemented")};var ht=dt,gt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var wt,mt="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var r,e,t;if("function"!=typeof vt)return!1;try{e=new vt([1,3.14,-3.14,NaN]),t=e,r=(gt&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?mt:function(){throw new Error("not implemented")};var jt=wt;function Ot(r){return new Ve(r)}function At(r){return new He(r)}function Et(r){return new Ge(r)}function Mt(r){return new Je(r)}function _t(r){return new et(r)}function St(r){return new at(r)}function kt(r){return new pt(r)}function It(r){return new ht(r)}function Tt(r){return new jt(r)}var xt={int8array:Ot,uint8array:At,uint8clampedarray:Et,int16array:Mt,uint16array:_t,int32array:St,uint32array:kt,float32array:It,float64array:Tt};function Ft(r,e,t,n,o){var i,a,u,c,f,l,p,y,d,b;if(o-=1,"object"!=typeof r||null===r)return r;if(W(r))return Te(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===A(r))return!0;r=fr(r)}return!1}(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=we(r),a=0;a<e.length;a++)o=e[a],j(t=Me(r,o),"value")&&(n=$(r[o])?[]:{},t.value=Ft(r[o],n,u,c,-1)),s(i,o,t);return i}(r);if("date"===(u=B(r)))return new Date(+r);if("regexp"===u)return function(r){if(!lr(r))throw new TypeError(qr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=xt[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(fr(r)),e.push(r),o.push(u),t=Oe(r),c=0;c<t.length;c++)n=t[c],j(i=Me(r,n),"value")&&(a=$(r[n])?[]:{},i.value=Ft(r[n],a,e,o,-1)),s(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=we(r),o>0)for(i=u,b=0;b<a.length;b++)y=r[l=a[b]],u=B(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||W(y)?"object"===i?(j(c=Me(r,l),"value")&&(c.value=Ft(y)),s(e,l,c)):e[l]=Ft(y):-1===(d=Kr(t,y))?(p=$(y)?new Array(y.length):{},t.push(y),n.push(p),"array"===i?e[l]=Ft(y,p,t,n,o):(j(c=Me(r,l),"value")&&(c.value=Ft(y,p,t,n,o)),s(e,l,c))):e[l]=n[d];else if("array"===u)for(b=0;b<a.length;b++)e[l=a[b]]=r[l];else for(b=0;b<a.length;b++)l=a[b],c=Me(r,l),s(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Ut(r,e){var t;if(arguments.length>1){if(!nr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=Z;return Ft(r,t=$(r)?new Array(r.length):{},[r],[t],e)}function Pt(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var Vt=Object.create;function Ct(){}var $t="function"==typeof Vt?Vt:function(r){return Ct.prototype=r,new Ct};function Nt(r,e){var t=Pt(r);if(t)throw t;if(t=Pt(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");return r.prototype=$t(e.prototype),s(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r}),r}function Wt(r,e,t){s(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ht=t;var Bt={objectMode:!1,allowHalfOpen:!1,readableObjectMode:!1};var Rt=Object.prototype;function Lt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!$(r)}(r)&&(!(e=fr(r))||!j(r,"constructor")&&j(e,"constructor")&&R(e.constructor)&&"[object Function]"===A(e.constructor)&&j(e,"isPrototypeOf")&&R(e.isPrototypeOf)&&(e===Rt||function(r){var e;for(e in r)if(!j(r,e))return!1;return!0}(r)))}function zt(r){return L(r)&&r>=0}function Gt(r){return X(r)&&r.valueOf()>=0}function qt(r){return zt(r)||Gt(r)}function Xt(r,e){return Lt(e)?j(e,"objectMode")&&(r.objectMode=e.objectMode,!h(r.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+r.objectMode+"`."):j(e,"readableObjectMode")&&(r.readableObjectMode=e.readableObjectMode,!h(r.readableObjectMode))?new TypeError("invalid option. `readableObjectMode` option must be a primitive boolean. Option: `"+r.readableObjectMode+"`."):j(e,"allowHalfOpen")&&(r.allowHalfOpen=e.allowHalfOpen,!h(r.allowHalfOpen))?new TypeError("invalid option. `allowHalfOpen` option must be a primitive boolean. Option: `"+r.allowHalfOpen+"`."):j(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!zt(r.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+r.highWaterMark+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}y(qt,"isPrimitive",zt),y(qt,"isObject",Gt);var Dt=d(Object.freeze({__proto__:null,default:()=>()=>{}})),Zt=Dt("inspect-stream"),Jt=r.Transform;function Yt(r,e){var t,n,o;if(!(this instanceof Yt))return arguments.length>1?new Yt(r,e):new Yt(r);if(n=Ut(Bt),arguments.length>1){if(t=e,o=Xt(n,r))throw o}else t=r;if(!R(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");return n.writableObjectMode=!0,Zt("Creating a transform stream configured with the following options: %s.",JSON.stringify(n)),Jt.call(this,n),Wt(this,"_destroyed",!1),Wt(this,"_idx",-1),y(this,"_inspect",t),this}function Kt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}Nt(Yt,Jt),y(Yt.prototype,"_transform",(function(r,e,t){this._idx+=1,Zt("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",r.toString(),e,this._idx),this._inspect.call(null,r,this._idx),this.push(r),t()})),y(Yt.prototype,"_flush",(function(r){Zt("Flushing the stream..."),r()})),y(Yt.prototype,"destroy",(function(r){var e;return this._destroyed?(Zt("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Ht.nextTick(n)}((function(){r&&(Zt("Stream was destroyed due to an error. Error: %s.",JSON.stringify(r)),e.emit("error",r));Zt("Closing the stream..."),e.emit("close")})),this)})),y(Yt,"objectMode",(function(r,e){var t,n;if(arguments.length>1){if(!Lt(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");t=Ut(r),n=e}else t={},n=r;return t.objectMode=!0,new Yt(t,n)})),y(Yt,"factory",(function(r){var e;if(arguments.length){if(!Lt(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");e=Ut(r)}else e={};return t;function t(r){return new Yt(e,r)}}));var Qt=R(Object.assign),rn=Object.assign,en=void 0!==Object.getOwnPropertySymbols,tn=Object.getOwnPropertySymbols;var nn=en?function(r){return tn(Object(r))}:function(){return[]};function on(r){var e,t,n;for(e=we(r),t=nn(r),n=0;n<t.length;n++)ae(r,t[n])&&e.push(t[n]);return e}var an,un=Object;an=Qt?rn:function(r){var e,t,n,o,i,a,u;if(null==r)throw new TypeError(qr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(i=un(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(o=(t=on(un(e))).length,u=0;u<o;u++)i[n=t[u]]=e[n];return i};var cn=an,fn="debug-stream",ln=Dt(fn),pn={objectMode:!1,allowHalfOpen:!1,readableObjectMode:!1,name:""};function sn(r,e){return Lt(e)?j(e,"name")&&(r.name=e.name,!lr(r.name))?new TypeError(Kt("0fw2i","name",r.name)):j(e,"objectMode")&&(r.objectMode=e.objectMode,!h(r.objectMode))?new TypeError(Kt("0fw30","objectMode",r.objectMode)):j(e,"readableObjectMode")&&(r.readableObjectMode=e.readableObjectMode,!h(r.readableObjectMode))?new TypeError(Kt("0fw30","readableObjectMode",r.readableObjectMode)):j(e,"allowHalfOpen")&&(r.allowHalfOpen=e.allowHalfOpen,!h(r.allowHalfOpen))?new TypeError(Kt("0fw30","allowHalfOpen",r.allowHalfOpen)):j(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!zt(r.highWaterMark))?new TypeError(Kt("0fw4x","highWaterMark",r.highWaterMark)):null:new TypeError(Kt("0fw2h",e))}var yn=Dt;function dn(r,e){var t,n,o,i,a;if(!(this instanceof dn))return arguments.length>1?new dn(r,e):1===arguments.length?new dn(r):new dn;if(t=cn({},pn),arguments.length>1){if(!R(e))throw new TypeError(Kt("0fw2n",e));a=e,i=sn(t,r)}else arguments.length&&(R(r)?a=r:i=sn(t,r));if(i)throw i;return n=t.name?fn+":"+t.name:fn,o=yn(n),ln("Creating a transform stream configured with the following options: %s.",JSON.stringify(t)),Yt.call(this,t,u),this;function u(r,e){if(a)return ln("Received a new chunk. Chunk: %s. Index: %d.",r.toString(),e),a(o,r,e);W(r)&&(r=r.toString()),r=JSON.stringify(r),ln("Received a new chunk. Chunk: %s. Index: %d.",r,e),o("Chunk: %s. Index: %d.",r,e)}}return Nt(dn,Yt),y(dn,"objectMode",(function(r,e){var t,n;if(arguments.length>1){if(!Lt(r))throw new TypeError(Kt("0fw2h",r));if(t=cn({},r),n=e,!R(e))throw new TypeError(Kt("0fw2n",e))}else if(arguments.length)if(R(r))t={},n=r;else{if(!Lt(r))throw new TypeError(Kt("0fw2h",r));t=cn({},r)}else t={};return t.objectMode=!0,void 0===n?new dn(t):new dn(t,n)})),y(dn,"factory",(function(r){var e;if(arguments.length){if(!Lt(r))throw new TypeError(Kt("0fw2h",r));e=cn({},r)}else e={};return t;function t(r,t){return e.name=r,arguments.length>1?new dn(e,t):new dn(e)}})),dn}));
//# sourceMappingURL=index.js.map
