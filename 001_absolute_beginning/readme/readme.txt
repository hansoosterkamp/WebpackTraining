From Crash Course: https://www.youtube.com/watch?v=IZGNcSuwBZs

First installation:
on the solution folder run

> npm init -y

Then install webpack and webpack-cli as dev dependencies:

> npm i -D webpack webpack-cli

To run webpack you need to create a script in the package.json. It is usually 
called "build". We want to run the webpack (cli) with at least a mode specified
(being either "production" or "development"

"scripts" : {
    "build" : "webpack --mode production"
},

When you run
> npm run build

Note that a default named "main.js" is created in the dist folder, the main js has 
the two src files (index.js ad generateJoke.js) combined into one main.js file.
this file can now be referenced from the index html page.

note that the bundled "main.js" is not restricted to only the src js files.
Any node module referenced will be bundled as well.



