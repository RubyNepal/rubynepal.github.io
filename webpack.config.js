const path = require('path');

module.exports = {
  entry: {
    meetup: './js/meetup.js',
    talkSuggestions: './js/talkSuggestions.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    fallback: {
      fs: false,
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      http: require.resolve('stream-http/'),
      url: require.resolve('url/'),
      https: require.resolve('https-browserify/'),
      os: require.resolve('os-browserify/')
    }
  }
};
