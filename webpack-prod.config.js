const { merge } = require("webpack-merge");
const common = require("./webpack-common.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css",
    }),
    ...common.plugins,
  ],
});
