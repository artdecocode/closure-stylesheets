import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import closureStylesheets from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await closureStylesheets({
      text: this.input,
    })
    return res
  },
  context: Context,
})