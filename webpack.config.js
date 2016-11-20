var path = require('path')
var webpack = require('webpack')

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "1010";

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  devtool: 'eval',
  watch: true,
  resolve: {
    alias:{
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url'
      }
    ]
  },
  devServer: {
    contentBase: './src',
    hot: true,
    port: PORT,
    host: HOST
  }
}