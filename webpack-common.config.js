const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:4].js",
  },
  devServer: {
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/i,
        loader: "babel-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.sass$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        exclude: ["/src/assets/fonts", "/src/assets/images/testimonials"],
        type: "asset",
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        exclude: [
          "/src/assets/fonts",
          /src\/assets\/images\/(?!(testimonials)\/).*/,
        ],
        type: "asset",
        generator: {
          filename: "./testimonials/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
