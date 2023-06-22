const { JQueryValMin, BootstrapMin, JQueryMin, MithrilMin } = require("./paths.js");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MergeIntoSingleFilePlugin = require("webpack-merge-and-include-globally");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].min.js"
  },
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/style.min.css" }),
    new MergeIntoSingleFilePlugin({
      files: {
        "js/mithril.min.js": [MithrilMin],
        "js/jqueryval.min.js": JQueryValMin,
        "js/jquery.min.js": [JQueryMin],
        "js/bootstrap.min.js": BootstrapMin
      }
    })
  ],
  optimization: {
    minimize: true
  }
});
