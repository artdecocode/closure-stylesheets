import { resolve } from 'path'
import { unlinkSync } from 'fs'
import { c } from 'erte'
import { EOL } from 'os'

/**
 * Checks config and returns arguments.
 * @param {string|!Array<string>} css The resolved path to the CSS file to compile.
 * @param {!_artdeco.ClosureStylesheetsConfig} config Configuration.
 * @param {!Function} log
 */
export const prepareArgs = (css, config, log = console.log) => {
  if (typeof config != 'object') throw new Error('Config is expected as an object.')
  const { rootSelector, path } = config
  if (!path) throw new Error('Path to closure stylesheets JAR wasn\'t passed.')
  if (rootSelector && !/^[.#]/.test(rootSelector)) {
    throw new Error(`The root selector (${rootSelector}) must be either a class name or an ID.`)
  }
  if (!Array.isArray(css)) css = [css]
  css = css.map(s => `"${s}"`)

  // this is a temp file
  let outputRenamingMap
  const { whitelist, rename = 'SIMPLE' } = config

  if (rename) outputRenamingMap = 'temp-rename-map' + '.json'
  const closureArgs = getArgs({
    ...config,
    outputRenamingMap,
    excludedClassesFromRenaming: whitelist,
    rootSelector,
    rename,
  })

  const args = ['-jar', path,
    ...css,
    ...closureArgs,
  ]
  const s = 'java ' + args.join(' ')
  log(c(s, 'grey'))

  /**
   * Returns the rename map, or null after compilation.
   * @return {Object}
   */
  const getMap = () => {
    if (outputRenamingMap) {
      const mapPath = resolve(outputRenamingMap)
      delete require.cache[mapPath]
      const renameMap = require(mapPath)
      unlinkSync(mapPath)
      return renameMap
    }
    return null
  }

  return { args, getMap }
}

/**
 * Transforms config into options.
 * @param {!_artdeco.ClosureStylesheetsConfig} config
 */
const getArgs = (config) => {
  const args = []
  const { prettyPrint, sourceMap, allowUnrecognizedProperties,
    expandBrowserPrefix, skipHTMLEscaping, rootSelector, rename, outputRenamingMap,
    preserveImportantComments, cssRenamingPrefix, excludedClassesFromRenaming,
    inputRenamingMap, outputBrowserPrefix, prefixes,
  } = config
  if (skipHTMLEscaping) args.push('--skip-html-escaping')

  if (expandBrowserPrefix || outputBrowserPrefix) args.push('--expand-browser-prefix')
  if (outputBrowserPrefix) args.push('--output-browser-prefix', outputBrowserPrefix)

  if (prettyPrint) args.push('--pretty-print')
  if (sourceMap) args.push('--output-source-map', sourceMap)
  if (rootSelector) args.push('--root-selector', rootSelector)
  if (allowUnrecognizedProperties) args.push('--allow-unrecognized-properties')
  if (preserveImportantComments) args.push('--preserve-important-comments')
  if (cssRenamingPrefix) args.push('--css-renaming-prefix', cssRenamingPrefix)

  if (inputRenamingMap) {
    args.push('--input-renaming-map', inputRenamingMap)
    args.push('--input-renaming-map-format', 'JSON')
  }

  if (outputRenamingMap) {
    args.push('--output-renaming-map', outputRenamingMap)
    args.push('--output-renaming-map-format', 'JSON')
  }
  if (rename) args.push('--rename', rename)

  if (excludedClassesFromRenaming) excludedClassesFromRenaming.forEach((cl) => {
    args.push('--excluded-classes-from-renaming', cl)
  })
  if (prefixes) prefixes.forEach((cl) => {
    args.push('--prefixes', cl)
  })
  return args
}

const fixLineCol = (s) => {
  return s.replace(/ at line ([\d,]+) column ([\d,]+):/g, (m, line, col) => {
    const ln = line.replace(/[^\d]/, '')
    const cl = col.replace(/[^\d]/, '')
    return `:${ln}:${cl}`
  })
}

/**
 * If Closure Stylesheets exited with non-zero status, parses the error.
 * @param {string} stderr
 */
export const parseStatus = (stderr) => {
  const e = stderr.split(/\r?\n/)
  if (e[0].startsWith('Compiler parsing error: Parse error')) {
    const line = e[4]
    // const line = name
    const parsed = /at line ([\d,]+) column ([\d,]+)/.exec(line)
    // const file = / in (\S+) /.exec(line)
    if (parsed) {
      let [, l, col] = parsed
      // const [, path] = file
      l = parseInt(l.replace(/,/g, ''), 10)
      col = parseInt(col.replace(/,/g, ''), 10)
      const C = col - 1
      // const fileLines = readFileSync(path, 'utf8').split(/\r?\n/)
      const sourceLine = e[5]
      /** @type {string} */
      // const sourceLine = source.split('\n')[l - 1]
      const pre = sourceLine.slice(Math.max(0, col - 20), C)
      const act = sourceLine.slice(C, C + 20)
      const post = sourceLine.slice(C + 20, C +
        (process.stdout.columns ? process.stdout.columns - 42 : 100))
      const p = EOL + ' '.repeat(19) + '^'
      const block = [
        fixLineCol(e[0]),
        EOL, EOL,
        c(pre, 'grey'),
        c(act, 'red'),
        c(post, 'grey'),
        p,
        e.slice(7).filter(s => !/at com.google/.test(s)).join(EOL),
      ].join('')
      return block
    }
  }
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('..').ClosureStylesheetsConfig} _artdeco.ClosureStylesheetsConfig
 */