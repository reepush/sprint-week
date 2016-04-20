var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var fs = require('fs');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
    ]
  },

  postcss: [
    require('autoprefixer-core'),
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ]
};
