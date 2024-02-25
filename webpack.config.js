const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/goo.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'goo.bundle.js' // The bundled file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
