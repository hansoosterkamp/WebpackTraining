The webpack configuration file is usually called "webpack.config.js"
this is the default name webpack is looking for when nothing has been specified.

the syntax used in this file is node.js (so use require', and single quotes)
sample config starts with:

module.exports = {
	mode: 'development'
}

The npm 'path' module is basically always in a config to deal with paths.
This path module is built-in in node so does not require extra installation.

The entry object is one or more "entry" files (in our sample index.js). 
specifying the output name "bundle" and the source entry (ies):

 entry: {
         bundle: path.resolve(__dirname, 'src/index.js'),
         bundletwo: path.resolve(__dirname, 'src/indextewo.js'),
    },


The output is an object with a path and  the bracket [name] means
it takes over the name specified in the entry object

output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

