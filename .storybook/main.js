const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const custom = require('../webpack.dev');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash:10].css',
        chunkFilename: '[name].[contenthash:10].css',
      }),
    );

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   include: path.resolve(__dirname, '../src'),
    //   use: [
    //     require.resolve('babel-loader'),
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //       options: {
    //         tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
    //       },
    //     },
    //   ],
    // });

    // config.module.rules.push({
    //   test: /\.(stories|story)\.[tj]sx?$/,
    //   loader: require.resolve('@storybook/source-loader'),
    //   exclude: [/node_modules/],
    //   enforce: 'pre',
    // });

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...custom.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    };
  },
};
