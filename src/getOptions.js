const { getOptions } = require('loader-utils')

module.exports = (ctx) => {
  const options = getOptions(ctx)
  return options
}
