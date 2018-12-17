const path = require('path');
const webpack = require('webpack');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
// const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  entry: {
    main: [
      '@babel/polyfill/noConflict',
      './src/client/index.js',
    ],
  },
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../public'),
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    }],
  },
  plugins: [
    // new MinifyPlugin(),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new BrotliPlugin(),
    // new LoadablePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
      },
    }),
  ],
};
