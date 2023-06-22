Webpack has a build in development webserver that can be configered in the
webpack.config and package.json files.

Packagejson
First usually we add a separate script for this in the package.json file.
let's call the script "dev"

....
"scripts": {
    "build": "webpack",
    "dev": "webpack serve"
  },
...

We can now run "npm run dev" that would run start the server, but we first
should add a configuration for the webserver as well in the webpack.config.js

devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

The options for the devServer explained:
static: 
specify an object with the paths to resolve for the roort of the website. (wich is "dist")

port: [port]
the port to run on, by default it is port 8080

hot: [true|false]
hot reload of changes, webpack rebuilds when ever something changes, (but you still have to refresh the browser)

compress: [true|false]
enable gzip compression. Files are sent GZIP encoded to the browser when browser requests
with header  "Accept-Encoding: gzip, deflate", the content is then zipped and sent to the 
browser with the "Content-Encoding: gzip" content header.

historyApiFallback: [true|false]
For single page applications. To allow the javascript to
display another url in the browsers adress bar in a backward compatible
way if needed (for older browsers)
The javascript History API makes it possible to change the URL in the browser, 
using JavaScript. It’s mostly used for “Single Page Applications”, where all the logic
is in JavaScript, loaded into the browser on the first request. 
When the user then “changes the page”, it’s reflected in the URL. If he then presses 
the “back” button (going back in his browser history), the API is then notified, 
giving the JavaScript a chance to display the previous content or otherwise react to it.
Some browsers doesn’t support this, namely older browsers. Therefore the fallback 
(a way to achieve the same or almost the same in an often inferior or outdated way) 
is to use the page anchor (#) tag. You have most likely seen URL’s 
like /page#!/some/path/here, especially some years ago. If the browser doesn’t support 
changing the entire path, it changes the anchor, originally meant to support jumping 
directly to a specific section on a long page. So it will do a test, to see if the 
History API is supported, and if not then it mimics the functionality by using 
the fallback.
