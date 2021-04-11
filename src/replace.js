const getOptions = require('./getOptions')

module.exports = function replaceLoader(source) {
  const { rules } = getOptions(this)
  // 替换
  rules.forEach((rule) => {
    const { search, replace } = rule
    source = source.replace(search, replace)
  })
  return source
}
