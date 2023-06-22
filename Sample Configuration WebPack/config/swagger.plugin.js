const fs = require("fs");
const path = require("path");

const swaggerPath = path.resolve(__dirname, "../src/Web/wwwroot")

class ReplaceIndexFileInSwaggerPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Replace index file in swagger", assets => {
      const swaggerFileName = "swagger.js";
      const js = fs.readFileSync(
        path.join(swaggerPath, swaggerFileName),
        "utf8"
      );
      const stats = assets.toJson();
      const outputFullName = stats.assetsByChunkName.index[0];
      const jsOutput = js.replace(
        "../dist/js/index.js",
        `../dist/${outputFullName}`
      );
      fs.writeFileSync(
        path.join(swaggerPath, "./", swaggerFileName),
        jsOutput
      );
    });
  }
}

module.exports = ReplaceIndexFileInSwaggerPlugin
