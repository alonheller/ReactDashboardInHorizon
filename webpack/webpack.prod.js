const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/plugin.js`,
    path: commonPaths.outputPath,
    chunkFilename: 'plugin.js',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
      root: commonPaths.root,
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/plugin.css`,
      chunkFilename: 'plugin.css',
    }),
  ],
  devtool: 'source-map',
};
