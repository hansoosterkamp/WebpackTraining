"Loaders" are modules that are able to compile/handle other types of files than just .js files.
So to be able to load typescript you need a typscript loader.
In this example we add a loader for sass (.scss files) to be compiled into css by installing
sass, a style loader, a css loader and the sass loader as dev dependencies:

npm i -D sass style-loader css-loader sass-loader

In addistion we added a src/styles folder and added a "main.scss" sass file

now in the src/index.js we import the style by adding:

import './styles/main/scss'

Next:
loaders need to be configured in the webpack config!
you do that by adding a 

"module: {
	rules: [
			{
			   test: /\.scss$/, 
			   use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
]}" 

object in the exports object. Each loader (filetype) is a {test, use} object in the rules array
each filetype is retrieved by a "test" which is a javascript regular expression.
javascript regular expressions start and end with a "/". instead of quotes!
the "$" means "ending with".
when the test matches, specific loaders are assigned to be used in the "use:" array.

In this example:
The style loader in this example, creates a static css from the .scss and make the bundle.js 
inject that css as inline <style> tags into the <head> tag of the document, as the document loads.


Just bundling css
===========================================================================================
If you do not want to work with an injected style, but bundle existing css stylesheets into
one file you should not use the style-loader, but instead use the 
mini-css-extract-plugin:
npm install --save-dev mini-css-extract-plugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ....
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...
  ],
  ...
};


Last thing to do : register all extensions
to be resolved in src files: e.g.

resolve: {
    extensions: [".ts", ".js", ".css", ".tsx"],
}


Alias path redirection and resolution can be configured as well:
e.g.:

resolve: 
{
    extensions: [".ts", ".js", ".css", ".tsx"],
    alias: {
      "@xxx": path.resolve(process.cwd(), PATHS.xxx),
      "@bbb": path.resolve(process.cwd(), PATHS.bbb),
    }
},





