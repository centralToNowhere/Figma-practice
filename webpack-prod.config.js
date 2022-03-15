const { merge } = require("webpack-merge");
const common = require("./webpack-common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
