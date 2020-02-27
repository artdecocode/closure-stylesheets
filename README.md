# closure-stylesheets

[![npm version](https://badge.fury.io/js/closure-stylesheets.svg)](https://www.npmjs.com/package/closure-stylesheets)

`closure-stylesheets` is A Node API to Closure Stylesheets.

```sh
yarn add closure-stylesheets
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`ClosureStylesheetsConfig`](#type-closurestylesheetsconfig)
  * [`ClosureReturn`](#type-closurereturn)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import closureStylesheets, { closureStylesheetsSync } from 'closure-stylesheets'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>



__<a name="type-closurestylesheetsconfig">`ClosureStylesheetsConfig`</a>__

|            Name             |             Type              |                                                                                                                                   Description                                                                                                                                    | Default |
| --------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| __path*__                   | <em>string</em>               | The path to the closure JAR. You can use `closure-stylesheets-java` package<br/>to install it via Node.                                                                                                                                                                          | -       |
| skipHTMLEscaping            | <em>boolean</em>              | By default, the compiler will escape `[<>\"&']` from output<br/>to make it suitable for safe embedding in HTML tags and attributes.<br/>When standalone CSS is generated, this is not necessary and can be skipped.                                                              | `false` |
| expandBrowserPrefix         | <em>boolean</em>              | Expand CSS rules to include vendor-prefixed declarations.                                                                                                                                                                                                                        | `false` |
| outputBrowserPrefix         | <em>string</em>               | The location of the file where to output the prefixed version of the CSS.<br/>Works only when `expandBrowserPrefix` is set.<br/>The filename should end with `.css` and the compiler will also create a `.json` file<br/>at the same location with the map to check for support. | -       |
| prefixes                    | <em>!Array&lt;string&gt;</em> | CSS rule prefixes (`position:sticky`, `-ms-hyphens`.) to include in the main output CSS rather than browser prefix file.                                                                                                                                                         | -       |
| prettyPrint                 | <em>boolean</em>              | Whether to format the output with newlines and indents so that it is more readable.                                                                                                                                                                                              | `false` |
| sourceMap                   | <em>string</em>               | Provides a mapping from the generated output to their original source code location.                                                                                                                                                                                             | -       |
| rootSelector                | <em>string</em>               | The string to prepend to selectors of each ruleset.                                                                                                                                                                                                                              | -       |
| allowUnrecognizedProperties | <em>boolean</em>              | Allow unrecognized properties.                                                                                                                                                                                                                                                   | `false` |
| preserveImportantComments   | <em>boolean</em>              | Preserve important comments from sources into minified output css. Important comments are marked with `/＊! ＊/`, `＠license`, or `＠preserve`.                                                                                                                                      | `false` |
| cssRenamingPrefix           | <em>string</em>               | Add a prefix to all renamed css class names.                                                                                                                                                                                                                                     | -       |
| whitelist                   | <em>!Array&lt;string&gt;</em> | Excluded classes from renaming.                                                                                                                                                                                                                                                  | -       |
| outputRenamingMap           | <em>string</em>               | How to format the output from the CSS class renaming.                                                                                                                                                                                                                            | -       |
| inputRenamingMap            | <em>string</em>               | The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.<br/>`--input-renaming-map`                                                         | -       |
| rename                      | <em>string</em>               | How CSS classes should be renamed. Defaults to NONE.<br/>Can be `CLOSURE`, `SIMPLE`, `DEBUG`.                                                                                                                                                                                    | -       |
| excludedClassesFromRenaming | <em>!Array&lt;string&gt;</em> | Pass the compiler a list of CSS class names that shouldn't be renamed.                                                                                                                                                                                                           | -       |

__<a name="type-closurereturn">`ClosureReturn`</a>__: Returns stylesheet and rename map if successful, or parsed info, stderr and status otherwise.

|    Name    |      Type       |                             Description                              |
| ---------- | --------------- | -------------------------------------------------------------------- |
| block      | <em>string</em> | Parsed error information with CLI colour.                            |
| stderr     | <em>string</em> | Full stderr output in case of error.                                 |
| status     | <em>number</em> | Exit error code.                                                     |
| renameMap  | <em>Object</em> | If renaming was on, this is the generated map parsed into an object. |
| stylesheet | <em>string</em> | The actual compiled stylesheet in case of success.                   |

The sync version with the same API is also available.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>



<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://www.artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://www.artd.eco">Art Deco™</a>   2020</th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>