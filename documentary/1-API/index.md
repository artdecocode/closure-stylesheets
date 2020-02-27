## API

The package is available by importing its default function:

```js
import closureStylesheets, { closureStylesheetsSync } from 'closure-stylesheets'
```

%~%

<typedef noArgTypesInToc name="compileStylesheets">types/api.xml</typedef>

<typedef narrow>types/index.xml</typedef>

_For example, we can compile this simple stylesheet:_

%EXAMPLE: example/style.css%

%EXAMPLE: example, ../ => closure-stylesheets%
%FORK-js example%

Logging of the executed command will be done into `console.error` since it was passed as the third argument.

%FORKERR example%

The sync version with the same API is also available.

%~%

<typedef noArgTypesInToc name="compileStylesheetsSync">types/api.xml</typedef>

%EXAMPLE: example/sync, ../ => closure-stylesheets%
%FORK-js example/sync%

%~%