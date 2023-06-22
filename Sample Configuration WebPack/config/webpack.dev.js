const { JQueryVal, Bootstrap, JQuery, Mithril } = require("./paths.js");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MergeIntoSingleFilePlugin = require("webpack-merge-and-include-globally");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].js"
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new MergeIntoSingleFilePlugin({
      files: {
        "js/mithril.js": [Mithril],
        "js/jqueryval.js": JQueryVal,
        "js/jquery.js": [JQuery],
        "js/bootstrap.js": Bootstrap
      }
    })
  ]
});
