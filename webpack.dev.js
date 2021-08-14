const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    filename: '[name].[hash:10].js',
    chunkFilename: '[name].[hash:10].js',
    assetModuleFilename: 'assets/[name].[hash:10].[ext]',
    publicPath: '/',
  },

  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
  },

  // plugins: [new BundleAnalyzerPlugin()],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css',
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  stats: {
    errorDetails: true,
  },
});
