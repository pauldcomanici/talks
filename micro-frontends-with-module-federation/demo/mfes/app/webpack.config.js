const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const mfConfig = require('../../tools/mf');
const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true,
  },
  devServer: {
    liveReload: false,
    hot: true,
    port: 3000,
    watchFiles: [path.resolve(__dirname)],
  },
  devtool: 'source-map',
  plugins: [
    mfConfig(packageJson, {
      exposes: {
        './index': './src/exposes/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['./src', 'node_modules'],
  },
};
