const { _compileStylesheets, _compileStylesheetsSync } = require('./closure-stylesheets')

/**
 * Compiles stylesheets asynchronously.
 * @param {(string|!Array<string>)} css The resolved path to the CSS file to compile.
 * @param {!_artdeco.ClosureStylesheetsConfig} config Configuration options.
 * @param {string} config.path The path to the closure JAR. You can use `closure-stylesheets-java` package
 * to install it via Node.
 * @param {boolean} [config.skipHTMLEscaping=false] By default, the compiler will escape `[<>\"&']` from output
 * to make it suitable for safe embedding in HTML tags and attributes.
 * When standalone CSS is generated, this is not necessary and can be skipped. Default `false`.
 * @param {boolean} [config.expandBrowserPrefix=false] Expand CSS rules to include vendor-prefixed declarations. Default `false`.
 * @param {string} [config.outputBrowserPrefix] The location of the file where to output the prefixed version of the CSS.
 * Works only when `expandBrowserPrefix` is set.
 * The filename should end with `.css` and the compiler will also create a `.json` file
 * at the same location with the map to check for support.
 * @param {!Array<string>} [config.prefixes] CSS rule prefixes (`position:sticky`, `-ms-hyphens`.) to include in the main output CSS rather than browser prefix file.
 * @param {boolean} [config.prettyPrint=false] Whether to format the output with newlines and indents so that it is more readable. Default `false`.
 * @param {string} [config.sourceMap] Provides a mapping from the generated output to their original source code location.
 * @param {string} [config.rootSelector] The string to prepend to selectors of each ruleset.
 * @param {boolean} [config.allowUnrecognizedProperties=false] Allow unrecognized properties. Default `false`.
 * @param {boolean} [config.preserveImportantComments=false] Preserve important comments from sources into minified output css. Important comments are marked with `/＊! ＊/`, `＠license`, or `＠preserve`. Default `false`.
 * @param {string} [config.cssRenamingPrefix] Add a prefix to all renamed css class names.
 * @param {!Array<string>} [config.whitelist] Excluded classes from renaming.
 * @param {string} [config.outputRenamingMap] How to format the output from the CSS class renaming.
 * @param {string} [config.inputRenamingMap] The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.
 * `--input-renaming-map`
 * @param {string} [config.rename] How CSS classes should be renamed. Defaults to NONE.
 * Can be `CLOSURE`, `SIMPLE`, `DEBUG`.
 * @param {!Array<string>} [config.excludedClassesFromRenaming] Pass the compiler a list of CSS class names that shouldn't be renamed.
Requires at list path to the JAR file.
 * @param {!Function=} [log] The logging function.
 * @return {Promise<_artdeco.ClosureReturn>}
 */
function compileStylesheets(css, config, log) {
  return _compileStylesheets(css, config, log)
}

/**
 * Compiles stylesheets in a sync manner.
 * @param {(string|!Array<string>)} css The resolved path to the CSS file to compile.
 * @param {!_artdeco.ClosureStylesheetsConfig} config Configuration options.
 * @param {string} config.path The path to the closure JAR. You can use `closure-stylesheets-java` package
 * to install it via Node.
 * @param {boolean} [config.skipHTMLEscaping=false] By default, the compiler will escape `[<>\"&']` from output
 * to make it suitable for safe embedding in HTML tags and attributes.
 * When standalone CSS is generated, this is not necessary and can be skipped. Default `false`.
 * @param {boolean} [config.expandBrowserPrefix=false] Expand CSS rules to include vendor-prefixed declarations. Default `false`.
 * @param {string} [config.outputBrowserPrefix] The location of the file where to output the prefixed version of the CSS.
 * Works only when `expandBrowserPrefix` is set.
 * The filename should end with `.css` and the compiler will also create a `.json` file
 * at the same location with the map to check for support.
 * @param {!Array<string>} [config.prefixes] CSS rule prefixes (`position:sticky`, `-ms-hyphens`.) to include in the main output CSS rather than browser prefix file.
 * @param {boolean} [config.prettyPrint=false] Whether to format the output with newlines and indents so that it is more readable. Default `false`.
 * @param {string} [config.sourceMap] Provides a mapping from the generated output to their original source code location.
 * @param {string} [config.rootSelector] The string to prepend to selectors of each ruleset.
 * @param {boolean} [config.allowUnrecognizedProperties=false] Allow unrecognized properties. Default `false`.
 * @param {boolean} [config.preserveImportantComments=false] Preserve important comments from sources into minified output css. Important comments are marked with `/＊! ＊/`, `＠license`, or `＠preserve`. Default `false`.
 * @param {string} [config.cssRenamingPrefix] Add a prefix to all renamed css class names.
 * @param {!Array<string>} [config.whitelist] Excluded classes from renaming.
 * @param {string} [config.outputRenamingMap] How to format the output from the CSS class renaming.
 * @param {string} [config.inputRenamingMap] The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.
 * `--input-renaming-map`
 * @param {string} [config.rename] How CSS classes should be renamed. Defaults to NONE.
 * Can be `CLOSURE`, `SIMPLE`, `DEBUG`.
 * @param {!Array<string>} [config.excludedClassesFromRenaming] Pass the compiler a list of CSS class names that shouldn't be renamed.
Requires at list path to the JAR file.
 * @param {!Function=} [log] The logging function.
 * @return {_artdeco.ClosureReturn}
 */
function compileStylesheetsSync(css, config, log) {
  return _compileStylesheetsSync(css, config, log)
}

module.exports = compileStylesheets
module.exports.compileStylesheetsSync = compileStylesheetsSync

/* typal types/index.xml namespace */
/**
 * @typedef {_artdeco.ClosureStylesheetsConfig} ClosureStylesheetsConfig `＠record` Configuration options.
 * @typedef {Object} _artdeco.ClosureStylesheetsConfig `＠record` Configuration options.
 * @prop {string} path The path to the closure JAR. You can use `closure-stylesheets-java` package
 * to install it via Node.
 * @prop {boolean} [skipHTMLEscaping=false] By default, the compiler will escape `[<>\"&']` from output
 * to make it suitable for safe embedding in HTML tags and attributes.
 * When standalone CSS is generated, this is not necessary and can be skipped. Default `false`.
 * @prop {boolean} [expandBrowserPrefix=false] Expand CSS rules to include vendor-prefixed declarations. Default `false`.
 * @prop {string} [outputBrowserPrefix] The location of the file where to output the prefixed version of the CSS.
 * Works only when `expandBrowserPrefix` is set.
 * The filename should end with `.css` and the compiler will also create a `.json` file
 * at the same location with the map to check for support.
 * @prop {!Array<string>} [prefixes] CSS rule prefixes (`position:sticky`, `-ms-hyphens`.) to include in the main output CSS rather than browser prefix file.
 * @prop {boolean} [prettyPrint=false] Whether to format the output with newlines and indents so that it is more readable. Default `false`.
 * @prop {string} [sourceMap] Provides a mapping from the generated output to their original source code location.
 * @prop {string} [rootSelector] The string to prepend to selectors of each ruleset.
 * @prop {boolean} [allowUnrecognizedProperties=false] Allow unrecognized properties. Default `false`.
 * @prop {boolean} [preserveImportantComments=false] Preserve important comments from sources into minified output css. Important comments are marked with `/＊! ＊/`, `＠license`, or `＠preserve`. Default `false`.
 * @prop {string} [cssRenamingPrefix] Add a prefix to all renamed css class names.
 * @prop {!Array<string>} [whitelist] Excluded classes from renaming.
 * @prop {string} [outputRenamingMap] How to format the output from the CSS class renaming.
 * @prop {string} [inputRenamingMap] The input filename for the CSS class renaming. The file must provide a map of class names that will be used for renaming. If a class name is not found in file, a new name will be generated.
 * `--input-renaming-map`
 * @prop {string} [rename] How CSS classes should be renamed. Defaults to NONE.
 * Can be `CLOSURE`, `SIMPLE`, `DEBUG`.
 * @prop {!Array<string>} [excludedClassesFromRenaming] Pass the compiler a list of CSS class names that shouldn't be renamed.
 * @typedef {_artdeco.ClosureReturn} ClosureReturn `＠record` Returns stylesheet and rename map if successful, or parsed info, stderr and status otherwise.
 * @typedef {Object} _artdeco.ClosureReturn `＠record` Returns stylesheet and rename map if successful, or parsed info, stderr and status otherwise.
 * @prop {string} [block] Parsed error information with CLI colour.
 * @prop {string} [stderr] Full stderr output in case of error.
 * @prop {number} [status] Exit error code.
 * @prop {Object} [renameMap] If renaming was on, this is the generated map parsed into an object.
 * @prop {string} [stylesheet] The actual compiled stylesheet in case of success.
 */
