const { join } = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const root = join(__dirname, '../');
const src = join(root, 'src');

module.exports = {
  entry: ['@babel/polyfill', join(src, 'server/main.tsx')],
  mode: 'production',
  target: 'node',
  name: 'server',
  externals: [webpackNodeExternals()],

  output: {
    path: join(root, 'dist', 'server'),
    filename: '[name].js',
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

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: 'null-loader',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        use: 'null-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        use: 'null-loader',
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: join(src, 'assets', 'img', 'favicon.ico'),
          to: join(root, 'dist/server'),
        },
      ],
    }),
  ],
};
