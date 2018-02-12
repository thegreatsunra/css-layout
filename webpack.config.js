const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /index\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
