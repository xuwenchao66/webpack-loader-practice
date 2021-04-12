const webpack = require('webpack')

test('Replace correctly', async (done) => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    const error = err || stats.hasErrors()
    const json = stats.toJson({ source: true })
    const output = json.modules[0].source
    expect(output).toEqual(
      expect.stringContaining('Hello replace with string replace with regex.')
    )
    done(error)
  })
})

test('Invalid options', async (done) => {
  const options = require('./webpack.config.js')
  options.module.rules[0].use[0].options.rules = 1
  webpack(options, (err, stats) => {
    const error = err || stats.hasErrors()
    expect(error).toBeTruthy()
    done()
  })
})
