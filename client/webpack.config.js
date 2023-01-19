const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '/',
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               },
            ],
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
               },
            ],
         },
         {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(svg|png|jpg|gif)$/,
            type: 'asset',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         template: './public/index.html',
         filename: './index.html',
      }),
      new MiniCssExtractPlugin({
         filename: '[name].css',
      }),
   ],
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      historyApiFallback: true,
      open: true,
      port: 3006,
   },
};
