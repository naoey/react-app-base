const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // eslint-disable-line

module.exports = {
  entry: './app/App.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: process.env.NODE_ENV === 'development',
            },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React',
      template: './app/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name].css' : '[name].[hash].css',
      chunkFilename: process.env.NODE_ENV === 'production' ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
