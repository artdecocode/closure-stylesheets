import { spawnSync } from 'child_process'
import spawn from 'spawncommand'
import { prepareArgs, parseStatus } from './lib'

/**
 * @type {_artdeco.compileStylesheetsSync}
 */
export function compileStylesheetsSync(css, config, log = console.log) {
  const { args, getMap } = prepareArgs(css, config, log)
  let { stderr, stdout: stylesheet, status } = spawnSync('java', args,
    /** @type {!child_process.SpawnSyncOptions} */ ({
      shell: true,
    }))
  stderr = stderr.toString()
  stylesheet = stylesheet.toString()

  if (status) {
    const block = parseStatus(stderr)
    return { status, stderr, block }
  }
  const renameMap = getMap()

  return { renameMap, stylesheet }
}

/**
 * @type {_artdeco.compileStylesheets}
 */
async function compileStylesheets(css, config, log = console.log) {
  const { args, getMap } = prepareArgs(css, config, log)
  const { promise } = spawn('java', args,
    /** @type {!child_process.SpawnOptions} */ ({
      shell: true,
    }))
  const { stderr, stdout: stylesheet, code } = await promise

  if (code) {
    const block = parseStatus(stderr)
    return { status: code, stderr, block }
  }
  const renameMap = getMap()

  return { renameMap, stylesheet }
}

export default compileStylesheets

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').compileStylesheets} _artdeco.compileStylesheets
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').compileStylesheetsSync} _artdeco.compileStylesheetsSync
 */