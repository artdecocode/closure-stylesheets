/* alanode example/ */
import closureStylesheets from '../src'

(async () => {
  const res = await closureStylesheets({
    text: 'example',
  })
  console.log(res)
})()