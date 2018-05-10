const merge = require('webpack-merge'); // eslint-disable-line
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line

const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
});
