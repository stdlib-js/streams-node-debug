// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";function c(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}var f="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}var b=p,g=h;function w(e){if(b===setTimeout)return setTimeout(e,0);if((b===p||!b)&&setTimeout)return b=setTimeout,setTimeout(e,0);try{return b(e,0)}catch(t){try{return b.call(null,e,0)}catch(t){return b.call(this,e,0)}}}"function"==typeof f.setTimeout&&(b=setTimeout),"function"==typeof f.clearTimeout&&(g=clearTimeout);var j,v=[],y=!1,O=-1;function T(){y&&j&&(y=!1,j.length?v=j.concat(v):O=-1,v.length&&M())}function M(){if(!y){var e=w(T);y=!0;for(var t=v.length;t;){for(j=v,v=[];++O<t;)j&&j[O].run();O=-1,t=v.length}j=null,y=!1,function(e){if(g===clearTimeout)return clearTimeout(e);if((g===h||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{g(e)}catch(t){try{return g.call(null,e)}catch(t){return g.call(this,e)}}}(e)}}function x(e,t){this.fun=e,this.array=t}x.prototype.run=function(){this.fun.apply(null,this.array)};function k(){}var E=k,_=k,H=k,C=k,N=k,P=k,V=k;var W=f.performance||{},D=W.now||W.mozNow||W.msNow||W.oNow||W.webkitNow||function(){return(new Date).getTime()};var S=new Date;var I={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new x(e,t)),1!==v.length||y||w(M)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:E,addListener:_,once:H,off:C,removeListener:N,removeAllListeners:P,emit:V,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*D.call(W),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-S)/1e3}};module.exports=void 0!==I&&"renderer"===I.type?require("./browser.js"):require("./node.js");var L=c(Object.freeze({__proto__:null})),q=L("debug-stream"),z={objectMode:!1,allowHalfOpen:!1,readableObjectMode:!1,name:""},A=a,J=l,R=u.isPrimitive,B=d.isPrimitive,F=m.isPrimitive,G=o;var K=t,Q=n,U=r,X=o,Y=i,Z=q,$=z,ee=function(e,t){return A(t)?J(t,"name")&&(e.name=t.name,!F(e.name))?new TypeError(G("invalid option. `%s` option must be a string. Option: `%s`.","name",e.name)):J(t,"objectMode")&&(e.objectMode=t.objectMode,!R(e.objectMode))?new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):J(t,"readableObjectMode")&&(e.readableObjectMode=t.readableObjectMode,!R(e.readableObjectMode))?new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","readableObjectMode",e.readableObjectMode)):J(t,"allowHalfOpen")&&(e.allowHalfOpen=t.allowHalfOpen,!R(e.allowHalfOpen))?new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","allowHalfOpen",e.allowHalfOpen)):J(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!B(e.highWaterMark))?new TypeError(G("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):null:new TypeError(G("invalid argument. Options argument must be an object. Value: `%s`.",t))},te=L;function ne(e,t){var n,r,o,i,s;if(!(this instanceof ne))return arguments.length>1?new ne(e,t):1===arguments.length?new ne(e):new ne;if(n=Y($),arguments.length>1){if(!Q(t))throw new TypeError(X("invalid argument. Callback argument must be a function. Value: `%s`.",t));s=t,i=ee(n,e)}else arguments.length&&(Q(e)?s=e:i=ee(n,e));if(i)throw i;return r=n.name?"debug-stream:"+n.name:"debug-stream",o=te(r),Z("Creating a transform stream configured with the following options: %s.",JSON.stringify(n)),K.call(this,n,a),this;function a(e,t){if(s)return Z("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),t),s(o,e,t);U(e)&&(e=e.toString()),e=JSON.stringify(e),Z("Received a new chunk. Chunk: %s. Index: %d.",e,t),o("Chunk: %s. Index: %d.",e,t)}}s(ne,K);var re=n,oe=a,ie=o,se=i,ae=ne;var le=a,ue=o,de=i,me=ne;var ce=function(e){var t;if(arguments.length){if(!le(e))throw new TypeError(ue("invalid argument. Options argument must be an object. Value: `%s`.",e));t=de(e)}else t={};return n;function n(e,n){return t.name=e,arguments.length>1?new me(t,n):new me(t)}},fe=e,pe=ne,he=function(e,t){var n,r;if(arguments.length>1){if(!oe(e))throw new TypeError(ie("invalid argument. Options argument must be an object. Value: `%s`.",e));if(n=se(e),r=t,!re(t))throw new TypeError(ie("invalid argument. Callback argument must be a function. Value: `%s`.",t))}else if(arguments.length)if(re(e))n={},r=e;else{if(!oe(e))throw new TypeError(ie("invalid argument. Options argument must be an object. Value: `%s`.",e));n=se(e)}else n={};return n.objectMode=!0,void 0===r?new ae(n):new ae(n,r)},be=ce;fe(pe,"objectMode",he),fe(pe,"factory",be);var ge=pe;export{ge as default,be as factory,he as objectMode};
//# sourceMappingURL=index.mjs.map
