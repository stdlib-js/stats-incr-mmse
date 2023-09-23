// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,_=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,l,p,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=T.exec(e);t;)(r=e.slice(n,T.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),n=T.lastIndex,t=T.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $(e){return"string"==typeof e}function j(e){var r,i,t;if(!$(e))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return F.apply(null,i)}var N=Object.prototype,O=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,P=N.__lookupGetter__,Z=N.__lookupSetter__,W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=N,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,i.get),o&&R&&R.call(e,r,i.set),e};function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"",H=M()?function(e){var r,i,t,n,a;if(null==e)return X.call(e);i=e[B],a=B,r=null!=(n=e)&&z.call(n,a);try{e[B]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[B]=i:delete e[B],t}:function(e){return X.call(e)},q=Number,D=q.prototype.toString,J=M();function K(e){return"object"==typeof e&&(e instanceof q||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Q(e){return L(e)||K(e)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=q.NEGATIVE_INFINITY,ie=Math.floor;function te(e){return e<ee&&e>re&&ie(r=e)===r;var r}function ne(e){return L(e)&&te(e)}function ae(e){return K(e)&&te(e.valueOf())}function oe(e){return ne(e)||ae(e)}function ce(e){return ne(e)&&e>0}function se(e){return ae(e)&&e.valueOf()>0}function le(e){return ce(e)||se(e)}function pe(e){return e!=e}G(oe,"isPrimitive",ne),G(oe,"isObject",ae),G(le,"isPrimitive",ce),G(le,"isObject",se);var ue="function"==typeof Float64Array,fe="function"==typeof Float64Array?Float64Array:null,ge="function"==typeof Float64Array?Float64Array:void 0,de=function(){var e,r,i;if("function"!=typeof fe)return!1;try{r=new fe([1,3.14,-3.14,NaN]),i=r,e=(ue&&i instanceof Float64Array||"[object Float64Array]"===H(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")};function he(e){return"number"==typeof e}function we(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function be(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+we(n):we(n)+e,t&&(e="-"+e)),e}var ve=String.prototype.toLowerCase,ye=String.prototype.toUpperCase;function me(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!he(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=be(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=be(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ye.call(e.specifier)?ye.call(i):ve.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ee(e){return"string"==typeof e}var ke=Math.abs,xe=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,_e=String.prototype.replace,Ie=/e\+(\d)$/,Fe=/e-(\d)$/,Te=/^(\d+)$/,Ve=/^(\d+)e/,Ae=/\.0$/,$e=/\.0*e/,je=/(\..*[^0])0*e/;function Ne(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!he(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ke(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=_e.call(i,je,"$1e"),i=_e.call(i,$e,"e"),i=_e.call(i,Ae,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=_e.call(i,Ie,"e+0$1"),i=_e.call(i,Fe,"e-0$1"),e.alternate&&(i=_e.call(i,Te,"$1."),i=_e.call(i,Ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Se.call(e.specifier)?Se.call(i):xe.call(i)}function Oe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ce(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Oe(t):Oe(t)+e}var Re=String.fromCharCode,Pe=isNaN,Ze=Array.isArray;function We(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ge(e){var r,i,t,n,a,o,c,s,l;if(!Ze(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ee(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=We(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Pe(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Pe(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=me(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Pe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Pe(a)?String(t.arg):Re(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ne(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=be(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ce(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Le=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ue(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Me(e){var r,i,t,n;for(i=[],n=0,t=Le.exec(e);t;)(r=e.slice(n,Le.lastIndex-t[0].length)).length&&i.push(r),i.push(Ue(t)),n=Le.lastIndex,t=Le.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Xe(e){return"string"==typeof e}function ze(e){var r,i,t;if(!Xe(e))throw new TypeError(ze("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Me(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ge.apply(null,i)}function Ye(e){var r,i,t,n,a;if(!ce(e))throw new TypeError(ze("invalid argument. Must provide a positive integer. Value: `%s`.",e));return i=new de(e),t=0,a=-1,n=0,function(o){var c;if(0===arguments.length)return 0===n?null:t;if(a=(a+1)%e,pe(o))n=e,t=NaN;else if(n<e)t+=(r=o-t)/(n+=1);else if(pe(i[a])){for(n=1,t=o,c=0;c<e;c++)if(c!==a){if(pe(i[c])){n=e,t=NaN;break}n+=1,r=i[c]-t,t+=r/n}}else!1===pe(t)&&(r=o-i[a],t+=r/e);return i[a]=o,t}}return function(e){var r;if(!ce(e))throw new TypeError(function(){var e,r=arguments,i="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}("1In8B,Hs",e));return r=Ye(e),function(e,i){var t;return 0===arguments.length?r():r((t=i-e)*t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmmse=r();
//# sourceMappingURL=browser.js.map
