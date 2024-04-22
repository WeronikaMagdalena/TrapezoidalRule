const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/home-work/trapezoidal-rule/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './src/home-work/trapezoidal-rule'),
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
