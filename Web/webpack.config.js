const path = require('path')

module.exports = {
  entry: {
    components: './wwwroot/js/expose-components.js'
  },
  output: {
    filename: '[name].js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'wwwroot/dist'),
    publicPath: 'dist/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  optimization: {
    runtimeChunk: {
      name: 'runtime' // necessary when using multiple entrypoints on the same page
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}