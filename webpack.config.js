const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/home-work/main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './src/home-work'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
