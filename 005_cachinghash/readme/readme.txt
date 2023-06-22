We can prevent browser caching confusion by adding a contenthash code to the
js files created by webpack (notable the bundled.js code). This will make sure
a changed file gets a unique name.

we can do this by adding the [contenthash] variable placeholder in the webpack
config.js:

output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },

To prevent adding new ad new files without leaving with "older" versions of the file 
in the dist destination folder we must  tell webpack to delete that filename first
before adding a new one. This is done with the "clean: true"

