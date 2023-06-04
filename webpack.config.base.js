// 开发环境和生产环境的公共配置
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      "@": path.resolve(__dirname, "./src/css"),
    },
    extensions: [".js", ".json"],
  },

  plugins: [new CleanWebpackPlugin()],
};