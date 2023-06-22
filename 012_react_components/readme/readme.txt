Now we're spliiting our source files in separate tsx files
All ts, tsx loaders have been configured as described below
and in the source tsx we import properly with "./" like:

import {App} from "./app"

Typscript compiler is happy but still we receive an
npm build error:
Field 'browser' doesn't contain a valid alias configuration

This is because webpack needs to know which extensions and
optional paths to resolve

Add this in the webpack config:

resolve: {
    extensions: [".ts", ".js", ".css", ".tsx"],
    }

Path redirection and resolution can be configured as well:
resolve: {
    extensions: [".ts", ".js", ".css", ".tsx"],
    alias: {
      "@bts": path.resolve(process.cwd(), PATHS.bowtie),
      "@cge": path.resolve(process.cwd(), PATHS.typeScriptLibs),
    }
  },



Loaders:
===========================================================
To have webpack compile and pack .ts (Typescript) 
and .tsx (babel/typescript) files automatically
we need to install the following loaders and presets as 
dev dependencies:
for typescript files:

ts-loader

for .tsx files

babel-loader
@babel/preset-react
@babel/preset-typescript

in the webpack.config.js the following tests need to be added in
the module rules:

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

And we can set a ts or tsx now as webpack entry point:
entry: {
        bundle: path.resolve(__dirname, 'src/index.tsx'),
    },


ESLint:
We want our code pretty and also enabled eslint in visual studio options
Also installed eslint as dev dependency and
run

> eslint --init

on the terminal

Add webpack.config.js to the ignoerd pattermns in the .eslintrc file
"ignorePatterns": [ "webpack.config.js" ],

In the training we'll work with Typescript namespaces, that eslint does not like,
we'll add a rule to allow them:

"rules": {
    ...
    "@typescript-eslint/no-namespace": "off"
    ...
  }

