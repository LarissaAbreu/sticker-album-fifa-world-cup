const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/assets/scripts/main.js',
    table:'./src/assets/scripts/table.js'
  },
  output: {
    path: path.resolve(__dirname, './public/assets/scripts'),
    filename: '[name]bundle.js'
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
