import { compileStylesheetsSync } from '../'
import path from 'closure-stylesheets-java'

const resSync = compileStylesheetsSync('example/style.css', {
  path,
  rootSelector: '.HelloWorld',
  whitelist: ['MyElement'],
}, console.error)
console.log(resSync)