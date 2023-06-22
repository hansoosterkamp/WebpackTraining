"Plugins"  perform specialized additional functionality

Example the html plugin, that will create the html file from a html template.
To install the html plugin (as a dev dependency):

> npm i -D html-webpack-plugin

Then register the plugin in the webpack.config.js, on top
add:

const HtmlWebpackPlugin = require('html-webpack-plugin')

in addition to the entry, output, and module props we need to add a 
"plugins" (array) property. Add the HtmlWebpackPlugin with its options 
object

...
plugins: [
	new HtmlWebpackPlugin({
		title: 'Webpack demo App',
		filename: 'index.html'
	})
]

This will re-create an index html from scratch. This is not very usefull, so
what you need to do is to create a "template' in the src folder and use that
template to create the index.html file:

...
plugins: [
	new HtmlWebpackPlugin({
		title: 'Webpack demo App',
		filename: 'index.html',
		template: './src/template.html'
	})
]


Within the template html you can add <%= htmlWebpackPlugin.options..... %> tags to inject property values of yje 
example:

<title>
	<%= htmlWebpackPlugin.options.title %>
</title>





