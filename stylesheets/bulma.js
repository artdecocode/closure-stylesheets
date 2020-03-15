import { writeFileSync } from 'fs'
import { compileStylesheetsSync } from '../src'
import path from 'closure-stylesheets-java'

// updated version to include /* alernate */
const { stylesheet, renameMap, status, block, stderr } = compileStylesheetsSync('node_modules/bulma/css/bulma.css', {
  path,
})

if (status) {
  if (block) console.log(block)
  else {
    const s = stderr.replace(/ at line ([\d,]+) column ([\d,]+):/g, (m, l, c) => {
      const ln = l.replace(/[^\d]/, '')
      const cl = c.replace(/[^\d]/, '')
      return `:${ln}:${cl} :`
    })
    console.log(s)
  }
} else {
  const map = Object.keys(renameMap).reduce((acc, key) => {
    acc[key] = true
    return acc
  }, {})
  // writeFileSync('stylesheets/bulma.json', JSON.stringify(map, null, 2))
}
// console.log(renameMap)