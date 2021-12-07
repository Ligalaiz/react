const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  target: 'browserslist',

  output: {
    filename: '[name].[chunkhash:10].js',
    chunkFilename: '[name].[chunkhash:10].js',
    assetModuleFilename: 'assets/[name].[chunkhash:10].[ext]',
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', '.ts', '.tsx'],
      fix: false,
      failOnError: true,
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: extendDefaultPlugins([
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
  ],
});
