<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmmse

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [mean squared error][mean-squared-error] (MSE) incrementally.

<section class="intro">

For a window of size `W`, the [mean squared error][mean-squared-error] is defined as

<!-- <equation class="equation" label="eq:mean_squared_error" align="center" raw="\operatorname{MSE} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2" alt="Equation for the mean squared error."> -->

```math
\mathop{\mathrm{MSE}} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MSE} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)^2" data-equation="eq:mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9cb3c4a2fcf92ca07ed60c34de1ceda40f75919c/lib/node_modules/@stdlib/stats/incr/mmse/docs/img/equation_mean_squared_error.svg" alt="Equation for the mean squared error.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mmse
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var incrmmse = require( '@stdlib/stats-incr-mmse' );
```

#### incrmmse( window )

Returns an accumulator `function` which incrementally computes a moving [mean squared error][mean-squared-error]. The `window` parameter defines the number of values over which to compute the moving [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmmse( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean squared error][mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmmse( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

m = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns 13.0

m = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns ~20.67

// Window begins sliding...
m = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns ~53.67

m = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns ~46.67

m = accumulator();
// returns ~46.67
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmmse = require( '@stdlib/stats-incr-mmse' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmmse( 5 );

// For each simulated datum, update the moving mean squared error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/mrmse`][@stdlib/stats/incr/mrmse]</span><span class="delimiter">: </span><span class="description">compute a moving root mean squared error (RMSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mrss`][@stdlib/stats/incr/mrss]</span><span class="delimiter">: </span><span class="description">compute a moving residual sum of squares (RSS) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mse`][@stdlib/stats/incr/mse]</span><span class="delimiter">: </span><span class="description">compute the mean squared error (MSE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mmse.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mmse

[test-image]: https://github.com/stdlib-js/stats-incr-mmse/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mmse/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mmse/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mmse?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mmse.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mmse/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mmse/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mmse/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mmse/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mmse/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mmse/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mmse/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mmse/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mmse/main/LICENSE

[mean-squared-error]: https://en.wikipedia.org/wiki/Mean_squared_error

<!-- <related-links> -->

[@stdlib/stats/incr/mrmse]: https://github.com/stdlib-js/stats-incr-mrmse

[@stdlib/stats/incr/mrss]: https://github.com/stdlib-js/stats-incr-mrss

[@stdlib/stats/incr/mse]: https://github.com/stdlib-js/stats-incr-mse

<!-- </related-links> -->

</section>

<!-- /.links -->
