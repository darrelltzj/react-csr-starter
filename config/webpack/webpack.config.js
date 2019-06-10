const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodEnv = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          emitWarning: prodEnv,
          failOnError: prodEnv,
          failOnWarning: prodEnv,
        },
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         outputPath: path.join(process.cwd(), '/dist/assets/images'),
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(woff2|ttf|woff|eot)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         outputPath: path.join(process.cwd(), '/dist/assets/fonts'),
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    publicPath: '/',
    filename: 'index.js',
    pathinfo: false,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), '/src/index.html'),
    }),
  ],
};
