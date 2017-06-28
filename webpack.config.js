var path = require('path');
var DIST_PATH = path.resolve(__dirname, 'dist');
var SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: SOURCE_PATH + '/app/main.js', // entry file where bundle start the bundling process
  output: {
    path: DIST_PATH,
    filename: 'app.dist.js',
    publicPath: '/src/app/'
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
      }
    ]
  }
}