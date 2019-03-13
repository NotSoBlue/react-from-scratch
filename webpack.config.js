const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".json", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    open: true,
    publicPath: "http://localhost:3000/dist/",
    hot: true,
  },
}
