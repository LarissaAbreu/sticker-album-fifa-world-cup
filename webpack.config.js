const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    path: path.resolve(__dirname, './public/assets/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
