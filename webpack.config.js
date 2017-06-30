var path = require('path');
var DIST_PATH = path.resolve(__dirname, 'dist');
var SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: SOURCE_PATH + '/app/main.js', // entry file where bundle start the bundling process
  output: {
    path: SOURCE_PATH + '/server/public/',
    filename: 'js/main.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
          {
            presets:['react']
          }
      },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
    ]
  }
}