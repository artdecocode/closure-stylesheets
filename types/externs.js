/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml */
/** @const */
var _artdeco = {}
/**
 * Configuration options.
 * @record
 */
_artdeco.ClosureStylesheetsConfig
/**
 * The path to the closure JAR. You can use `closure-stylesheets-java` package
 * to install it via Node.
 * @type {string}
 */
_artdeco.ClosureStylesheetsConfig.prototype.path
/**
 * By default, the compiler will escape `[<>\"&']` from output
 * to make it suitable for safe embedding in HTML tags and attributes.
 * When standalone CSS is generated, this is not necessary and can be skipped. Default `false`.
 * @type {boolean|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.skipHTMLEscaping
/**
 * Expand CSS rules to include vendor-prefixed declarations. Default `false`.
 * @type {boolean|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.expandBrowserPrefix
/**
 * The location of the file where to output the prefixed version of the CSS.
 * Works only when `expandBrowserPrefix` is set.
 * The filename should end with `.css` and the compiler will also create a `.json` file
 * at the same location with the map to check for support.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.outputBrowserPrefix
/**
 * CSS rule prefixes (`position:sticky`, `-ms-hyphens`.) to include in the main output CSS rather than browser prefix file.
 * @type {(!Array<string>)|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.prefixes
/**
 * Whether to format the output with newlines and indents so that it is more readable. Default `false`.
 * @type {boolean|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.prettyPrint
/**
 * Provides a mapping from the generated output to their original source code location.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.sourceMap
/**
 * The string to prepend to selectors of each ruleset.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.rootSelector
/**
 * Allow unrecognized properties. Default `false`.
 * @type {boolean|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.allowUnrecognizedProperties
/**
 * Preserve important comments from sources into minified output css. Important comments are marked with `/＊! ＊/`, `＠license`, or `＠preserve`. Default `false`.
 * @type {boolean|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.preserveImportantComments
/**
 * Add a prefix to all renamed css class names.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.cssRenamingPrefix
/**
 * Excluded classes from renaming.
 * @type {(!Array<string>)|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.whitelist
/**
 * How to format the output from the CSS class renaming.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.outputRenamingMap
/**
 * The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.
 * `--input-renaming-map`
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.inputRenamingMap
/**
 * How CSS classes should be renamed. Defaults to NONE.
 * Can be `CLOSURE`, `SIMPLE`, `DEBUG`.
 * @type {string|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.rename
/**
 * Pass the compiler a list of CSS class names that shouldn't be renamed.
 * @type {(!Array<string>)|undefined}
 */
_artdeco.ClosureStylesheetsConfig.prototype.excludedClassesFromRenaming
/**
 * Returns stylesheet and rename map if successful, or parsed info, stderr and status otherwise.
 * @record
 */
_artdeco.ClosureReturn
/**
 * Parsed error information with CLI colour.
 * @type {string|undefined}
 */
_artdeco.ClosureReturn.prototype.block
/**
 * Full stderr output in case of error.
 * @type {string|undefined}
 */
_artdeco.ClosureReturn.prototype.stderr
/**
 * Exit error code.
 * @type {number|undefined}
 */
_artdeco.ClosureReturn.prototype.status
/**
 * If renaming was on, this is the generated map parsed into an object.
 * @type {Object|undefined}
 */
_artdeco.ClosureReturn.prototype.renameMap
/**
 * The actual compiled stylesheet in case of success.
 * @type {string|undefined}
 */
_artdeco.ClosureReturn.prototype.stylesheet

/* typal types/api.xml */
/**
 * Compiles stylesheets in a sync manner.
 * @typedef {function((string|!Array<string>),!_artdeco.ClosureStylesheetsConfig,!Function=): _artdeco.ClosureReturn}
 */
_artdeco.compileStylesheetsSync
/**
 * Compiles stylesheets asynchronously.
 * @typedef {function((string|!Array<string>),!_artdeco.ClosureStylesheetsConfig,!Function=): !Promise<_artdeco.ClosureReturn>}
 */
_artdeco.compileStylesheets
