const { _compileStylesheets, _compileStylesheetsSync } = require('./closure-stylesheets')

/**
 * @methodType {_artdeco.compileStylesheets}
 */
function compileStylesheets(css, rootSelector, config, log) {
  return _compileStylesheets(css, rootSelector, config, log)
}

/**
 * @methodType {_artdeco.compileStylesheetsSync}
 */
function compileStylesheetsSync(css, rootSelector, config, log) {
  return _compileStylesheetsSync(css, rootSelector, config, log)
}

module.exports = compileStylesheets
module.exports.compileStylesheetsSync = compileStylesheetsSync

/* typal types/index.xml namespace */
