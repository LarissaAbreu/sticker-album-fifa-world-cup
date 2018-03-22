const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    path: path.resolve(__dirname, './public/assets/scripts'),
    filename: 'bundle.js'
  }
};
