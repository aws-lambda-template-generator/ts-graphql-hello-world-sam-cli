const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  performance: {
    // Disable entrypoint size limit warnings
    // We know we are deploying as a single file
    hints: false,
  },
};
