const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  mode: 'production',
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
    alias: {
      graphql$: path.resolve(__dirname, './node_modules/graphql/index.js'),
    }
  },
  externals: [{
    'aws-sdk': 'aws-sdk',
  }],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
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
