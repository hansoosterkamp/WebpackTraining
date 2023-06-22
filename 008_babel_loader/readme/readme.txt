Using the babel-loader:
babel loader, (allowing tags in javascript as well as some browser compatibility)

Babel:
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a 
backwards compatible version of JavaScript in current and older browsers or environments.

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to 
micromanage which syntax transforms (and optionally, browser polyfills) 
are needed by your target environment (s).

For react and jsx: (not in this crash course)
Babel can convert JSX syntax! Check out the @babel/preset-react to get started. 
Use it together with the babel-sublime package to bring syntax highlighting 
to a whole new level.


To install babel core, the babel-env preset and the babel webpack loader (Dev Dependencies)

> npm i -D babel-loader @babel/core @babel/preset-env

Now as with any loader, we need to add a new module file type rule (test, use) in the webpack.config.js
the rule should match all .js files, but excluding all files in node-modules. 
on the files matched it should apply the babel-loader, with the preset-env option.
So: 
in webpack.config.js add a new rules object (in the rules array under module)

.....
{
	test: /\.js$/,
	exclude /node_modules/,
	use:{
		loader: 'babel-loader',
		options: {
		    presets: ['@babel/preset-env']
		}
	},
}


