# closure-stylesheets

[![npm version](https://badge.fury.io/js/closure-stylesheets.svg)](https://npmjs.org/package/closure-stylesheets)

`closure-stylesheets` is A Fork Of Google Closure Stylesheets With Improvements.

```sh
yarn add closure-stylesheets
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`closureStylesheets(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_closure-stylesheets.Config`](#type-_closure-stylesheetsconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import closureStylesheets from 'closure-stylesheets'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>closureStylesheets</ins>(</code><sub><br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/></sub><code>): <i>void</i></code>

Call this function to get the result you want.

<strong><a name="type-_closure-stylesheetsconfig">`_closure-stylesheets.Config`</a></strong>: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import closureStylesheets from 'closure-stylesheets'

(async () => {
  const res = await closureStylesheets({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>