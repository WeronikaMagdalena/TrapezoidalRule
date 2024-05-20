const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/evaluation-session/mainBingo',
  output: {
    filename: 'mainBingo.js',
    path: path.resolve(__dirname, './src/evaluation-session'),
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
