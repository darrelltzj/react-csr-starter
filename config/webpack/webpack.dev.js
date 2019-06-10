const webpack = require('webpack');
const common = require('./webpack.config');

module.exports = {
  ...common,
  plugins: [...common.plugins, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
