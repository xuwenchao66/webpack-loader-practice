const path = require('path')
const resolve = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: resolve('test', 'file-for-test.js'),
  output: {
    filename: 'test.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('src/replace.js'),
            options: {
              rules: [
                {
                  search: 'webpack',
                  replace: 'replace with string'
                },
                {
                  search: /(.+)(loader)(.+)/,
                  replace: (match, $1, $2, $3) => `${$1}replace with regex${$3}`
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
