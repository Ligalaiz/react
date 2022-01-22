const { join } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let root = join(__dirname, '../');
let src = join(root, 'src');

module.exports = {
  entry: ['@babel/polyfill', join(src, 'client.tsx')],

  module: {
    rules: [
      {
        test: /\.html$/,
        include: join(root, 'src'),
        use: 'html-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name].[contenthash:10].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash:10].[ext]',
        },
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': join(root, 'src'),
      '@components': join(src, 'components'),
      '@shared': join(src, 'components/shared'),
      '@search': join(src, 'components/search/components'),
      '@utils': join(src, 'utils'),
      '@assets': join(src, 'assets'),
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: join('src', 'index.html'),
      filename: './index.html',
    }),

    new Dotenv({
      systemvars: true,
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:10].css',
      chunkFilename: 'styles/[name].[contenthash:10].css',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: join(src, 'assets', 'img', 'favicon.ico'),
          to: join(root, 'dist/client'),
        },
      ],
    }),
  ],
};
