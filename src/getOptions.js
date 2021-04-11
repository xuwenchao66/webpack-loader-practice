const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const schema = require('./schema.json')

module.exports = (ctx) => {
  const options = getOptions(ctx)
  validate(schema, options, {
    name: 'webpack replace loader'
  })
  return options
}
