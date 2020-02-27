const { _compileStylesheets, _compileStylesheetsSync } = require('./closure-stylesheets')

/**
 * @methodType {_artdeco.compileStylesheets}
 */
function compileStylesheets(css, config, log) {
  return _compileStylesheets(css, config, log)
}

/**
 * @methodType {_artdeco.compileStylesheetsSync}
 */
function compileStylesheetsSync(css, config, log) {
  return _compileStylesheetsSync(css, config, log)
}

module.exports = compileStylesheets
module.exports.compileStylesheetsSync = compileStylesheetsSync

/* typal types/index.xml namespace */
