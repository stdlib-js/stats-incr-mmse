// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e){var n;if(!t(e))throw new TypeError(s("1In8B",e));return n=r(e),function(t,r){var s;if(0===arguments.length)return n();return n((s=r-t)*s)}}export{e as default};
//# sourceMappingURL=index.mjs.map
