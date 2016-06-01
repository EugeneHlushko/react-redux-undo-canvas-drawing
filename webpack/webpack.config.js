import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const JS_REGEX = /\.js$/;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVTOOLS__: !!process.env.DEBUG
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [ 'node_modules', 'app' ]
  },
  module: {
    preLoaders: [
      { test: JS_REGEX, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      {
        test: JS_REGEX,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'url-loader?name=[sha512:hash:base64:7].[ext]'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
