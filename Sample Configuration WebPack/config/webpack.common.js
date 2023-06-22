const path = require("path");
const MergeIntoSingleFilePlugin = require("webpack-merge-and-include-globally");
const ReplaceIndexFileInSwaggerPlugin = require("./swagger.plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PATHS, RootSrc, Scripts, Styles, SirCss } = require("./paths.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const scriptsEntries = Scripts.reduce((current, item) => {
  var basename = path.basename(item, ".ts");
  current[basename] = item;
  return current;
}, {});

const entry = {
  index: PATHS.typeScriptLibs + "ovd-components/src/index.tsx",
  style: Styles,
  bowtie: PATHS.bowtie + "bowtie.ts",
  bowtie_charts: PATHS.bowtie + "bowtie_charts.ts",
  bowtie_maps: PATHS.bowtie + "location/index.ts",
  ...scriptsEntries,
  select: PATHS.typeScriptLibs + "select/src/select.ts"
};

module.exports = {
  entry: entry,
  output: {
    path: PATHS.dist,
     library: {
      name: '[name]',
      type: 'var',
    },
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]"
  },
  resolve: {
    extensions: [".ts", ".js", ".css", ".tsx"],
    alias: {
      "@bts": path.resolve(process.cwd(), PATHS.bowtie),
      "@cge": path.resolve(process.cwd(), PATHS.typeScriptLibs),
    }
  },
  externals: {
    mithril: "m",
    "@cge/select": "select",
    jquery: "$"
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset"
      }
    ]
  },
  plugins: [
    new ReplaceIndexFileInSwaggerPlugin(),
    new MergeIntoSingleFilePlugin({
      files: {
        "css/sir.css": SirCss
      }
    })
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
};
