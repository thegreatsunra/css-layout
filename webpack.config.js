const path = require('path')

module.exports = {
  entry: [
    './src/index.js',
    './src/index.html'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    ]
  }
}
