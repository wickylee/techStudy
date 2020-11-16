const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
 // mode: "development", // "production" | "development" | "none"
  // watch: isDevelopment ? true : false,
  // watchOptions: {
  //   ignored: ['files/**/*.js', 'node_modules']
  // },
  entry: './techStudy/frontend/src/index.js',
  //entry: './isApp/frontend/demo/index.js',
  output: {
    path: path.resolve(__dirname, 'techStudy/frontend/static'), 
    filename: 'main.js', 
    //globalObject: 'this'         
    //publicPath: './techStudy/frontend/static'
  },
  plugins: [
      new MiniCssExtractPlugin({filename: "./css/main.css"}) ,
      // new CopyWebpackPlugin([
      //   {
      //     from: 'node_modules/pdfjs-dist/cmaps/',
      //     to: 'cmaps/'
      //   },
      // ]),
    ],
  // optimization: {
  //  minimize: true,
  //   splitChunks: {
  //   chunks: 'all'
  //   }
  // },
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
        test: /\.module\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: './css/fonts/',
            publicPath: 'fonts/'
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
            publicPath: 'fonts/',
            limit: 5000,
            mimetype: "application/font-woff"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", '.scss']
  }
};
