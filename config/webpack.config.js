const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
	
module.exports = function(webpackEnv) {
  return {
    mode: webpackEnv,
    entry: paths.appIndexJs,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            'style-loader', 
            'css-loader',
            'less-loader' 
          ]
        }
      ]
    },
    resolve: {
      // 别名 
      alias: {
        '@': paths.appSrc
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        titel: 'react app',
        filename: 'index.html',
        template: './public/index.html'
      })
    ]
  }
}
