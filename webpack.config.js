const path = require('path')

module.exports = {

  entry: './techstudy/frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'techstudy/frontend/static'), 
    filename: 'main.js',          
    //publicPath: './licensepivot/frontend/static/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: './css/fonts/',
            publicPath: 'static/css/fonts/'
          }
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: './css/fonts/',
            publicPath: 'static/css/fonts/',
            limit: 5000,
            mimetype: "application/font-woff"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  }
};