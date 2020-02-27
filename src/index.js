import { spawnSync } from 'child_process'
import spawn from 'spawncommand'
import { prepareArgs, parseStatus } from './lib'

/**
 * @type {}
 */
export function compileStylesheetsSync(css, rootSelector, config = {}, log = console.log) {
  const { args, getMap } = prepareArgs(css, rootSelector, config, log)
  let { stderr, stdout: stylesheet, status } = spawnSync('java', args, {
    shell: true,
  })
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
 *
 */
async function compileStylesheets(css, rootSelector, config = {}, log = console.log) {
  const { args, getMap } = prepareArgs(css, rootSelector, config, log)
  const { promise } = spawn('java', args, {
    shell: true,
  })
  const { stderr, stdout: stylesheet, code } = await promise

  if (code) {
    const block = parseStatus(stderr)
    return { status: code, stderr, block }
  }
  const renameMap = getMap()

  return { renameMap, stylesheet }
}

export default compileStylesheets