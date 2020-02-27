import compileStylesheets from '../'
import path from 'closure-stylesheets-java'

(async () => {
  const res = await compileStylesheets('example/style.css', {
    path,
    rootSelector: '.Example',
  }, console.error)
  console.log(res)
})()