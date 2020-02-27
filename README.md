# closure-stylesheets

[![npm version](https://badge.fury.io/js/closure-stylesheets.svg)](https://www.npmjs.com/package/closure-stylesheets)

`closure-stylesheets` is A Node API to Closure Stylesheets.

```sh
yarn add closure-stylesheets
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async compileStylesheets(css, config, log=): ClosureReturn`](#async-compilestylesheetscss-stringarraystringconfig-closurestylesheetsconfiglog-function-closurereturn)
  * [`ClosureStylesheetsConfig`](#type-closurestylesheetsconfig)
  * [`ClosureReturn`](#type-closurereturn)
- [`compileStylesheetsSync(css, config, log=): ClosureReturn`](#compilestylesheetssynccss-stringarraystringconfig-closurestylesheetsconfiglog-function-closurereturn)
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

## <code>async <ins>compileStylesheets</ins>(</code><sub><br/>&nbsp;&nbsp;`css: (string|!Array<string>),`<br/>&nbsp;&nbsp;`config: !ClosureStylesheetsConfig,`<br/>&nbsp;&nbsp;`log=: !Function,`<br/></sub><code>): <i>ClosureReturn</i></code>
Compiles stylesheets asynchronously.

 - <kbd><strong>css*</strong></kbd> <em><code>(string \| !Array&lt;string&gt;)</code></em>: The resolved path to the CSS file to compile.
 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-closurestylesheetsconfig" title="Configuration options.">!ClosureStylesheetsConfig</a></code></em>: Additional configuration to transform into arguments to Java.
Requires at list path to the JAR file.
 - <kbd>log</kbd> <em>`!Function`</em> (optional): The logging function.

__<a name="type-closurestylesheetsconfig">`ClosureStylesheetsConfig`</a>__: Configuration options.
<table>
 <thead><tr>
  <th>Name</th>
  <th>Type &amp; Description</th>
  <th>Default</th>
 </tr></thead>
 <tr>
  <td rowSpan="3" align="center"><strong>path*</strong></td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   The path to the closure JAR. You can use <code>closure-stylesheets-java</code> package
   to install it via Node.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">skipHTMLEscaping</td>
  <td><em>boolean</em></td>
  <td rowSpan="3"><code>false</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   By default, the compiler will escape <code>[&lt;&gt;\"&']</code> from output
   to make it suitable for safe embedding in HTML tags and attributes.
   When standalone CSS is generated, this is not necessary and can be skipped.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">expandBrowserPrefix</td>
  <td><em>boolean</em></td>
  <td rowSpan="3"><code>false</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Expand CSS rules to include vendor-prefixed declarations.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">outputBrowserPrefix</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   The location of the file where to output the prefixed version of the CSS.
   Works only when <code>expandBrowserPrefix</code> is set.
   The filename should end with <code>.css</code> and the compiler will also create a <code>.json</code> file
   at the same location with the map to check for support.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">prefixes</td>
  <td><em>!Array&lt;string&gt;</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   CSS rule prefixes (<code>position:sticky</code>, <code>-ms-hyphens</code>.) to include in the main output CSS rather than browser prefix file.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">prettyPrint</td>
  <td><em>boolean</em></td>
  <td rowSpan="3"><code>false</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Whether to format the output with newlines and indents so that it is more readable.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">sourceMap</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Provides a mapping from the generated output to their original source code location.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">rootSelector</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   The string to prepend to selectors of each ruleset.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">allowUnrecognizedProperties</td>
  <td><em>boolean</em></td>
  <td rowSpan="3"><code>false</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Allow unrecognized properties.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">preserveImportantComments</td>
  <td><em>boolean</em></td>
  <td rowSpan="3"><code>false</code></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Preserve important comments from sources into minified output css. Important comments are marked with <code>/＊! ＊/</code>, <code>＠license</code>, or <code>＠preserve</code>.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">cssRenamingPrefix</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Add a prefix to all renamed css class names.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">whitelist</td>
  <td><em>!Array&lt;string&gt;</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Excluded classes from renaming.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">outputRenamingMap</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   How to format the output from the CSS class renaming.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">inputRenamingMap</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.
   <code>--input-renaming-map</code>
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">rename</td>
  <td><em>string</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   How CSS classes should be renamed. Defaults to NONE.
   Can be <code>CLOSURE</code>, <code>SIMPLE</code>, <code>DEBUG</code>.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">excludedClassesFromRenaming</td>
  <td><em>!Array&lt;string&gt;</em></td>
  <td rowSpan="3">-</td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Pass the compiler a list of CSS class names that shouldn't be renamed.
  </td>
 </tr>
</table>


__<a name="type-closurereturn">`ClosureReturn`</a>__: Returns stylesheet and rename map if successful, or parsed info, stderr and status otherwise.
<table>
 <thead><tr>
  <th>Name</th>
  <th>Type &amp; Description</th>
 </tr></thead>
 <tr>
  <td rowSpan="3" align="center">block</td>
  <td><em>string</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Parsed error information with CLI colour.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">stderr</td>
  <td><em>string</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Full stderr output in case of error.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">status</td>
  <td><em>number</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   Exit error code.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">renameMap</td>
  <td><em>Object</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   If renaming was on, this is the generated map parsed into an object.
  </td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">stylesheet</td>
  <td><em>string</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>
   The actual compiled stylesheet in case of success.
  </td>
 </tr>
</table>

_For example, we can compile this simple stylesheet:_

```css
.MyElement {
  color: green;
}
```

```js
import compileStylesheets from 'closure-stylesheets'
import path from 'closure-stylesheets-java'

(async () => {
  const res = await compileStylesheets('example/style.css', {
    path,
    rootSelector: '.Example',
  }, console.error)
  console.log(res)
})()
```
```js
{
  renameMap: { MyElement: 'a' },
  stylesheet: '.Example .a{color:green}'
}
```

Logging of the executed command will be done into `console.error` since it was passed as the third argument.

```
java -jar /Users/zavr/node_modules/closure-stylesheets-java/target/closure-stylesheets-1.12.1-SNAPSHOT-jar-with-dependencies.jar "example/style.css" --root-selector .Example --output-renaming-map temp-rename-map.json --output-renaming-map-format JSON --rename SIMPLE
```

The sync version with the same API is also available.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## <code><ins>compileStylesheetsSync</ins>(</code><sub><br/>&nbsp;&nbsp;`css: (string|!Array<string>),`<br/>&nbsp;&nbsp;`config: !ClosureStylesheetsConfig,`<br/>&nbsp;&nbsp;`log=: !Function,`<br/></sub><code>): <i>ClosureReturn</i></code>
Compiles stylesheets in a sync manner.

 - <kbd><strong>css*</strong></kbd> <em><code>(string \| !Array&lt;string&gt;)</code></em>: The resolved path to the CSS file to compile.
 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-closurestylesheetsconfig" title="Configuration options.">!ClosureStylesheetsConfig</a></code></em>: Additional configuration to transform into arguments to Java.
Requires at list path to the JAR file.
 - <kbd>log</kbd> <em>`!Function`</em> (optional): The logging function.

```js
import { compileStylesheetsSync } from 'closure-stylesheets'
import path from 'closure-stylesheets-java'

const resSync = compileStylesheetsSync('example/style.css', {
  path,
  rootSelector: '.HelloWorld',
  whitelist: ['MyElement'],
}, console.error)
console.log(resSync)
```
```js
{ renameMap: {}, stylesheet: '.HelloWorld .MyElement{color:green}' }
```

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