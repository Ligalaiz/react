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
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]',
  },

  devServer: {
    hot: true,
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, './dist'),
  },

  // plugins: [new BundleAnalyzerPlugin()],

  module: {
    rules: [
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
      filename: 'styles/[name].css',
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  stats: {
    errorDetails: true,
  },
});
