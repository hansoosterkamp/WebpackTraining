Using the image and assets loader
To be able to use the assets loader you don't have to 
install anything! Webpack comes with the assets resource loader.
just add a new {test, type} rule object:

{
	test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
	type: 'asset/resource'
}

note the regex: between parnethesis () you can give different options to match
the $ means "ending with" and the /i  means "ignore case".

now, we need a 'assetModuleFilename' output directive to copy the file to the ouput dir:
to keep the same name and extension as the src asset add this: 

output:{
		...
		assetModuleFilename: '[name][ext]'
		..
}

to keep the output resources in a similar folder structure
if we want to we can assign as special output folder and a filename for
source assets by adding a generator instruction to the rule:

{
   test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
   exclude: /node_modules/,
   type: 'asset/resource',
   generator: {
       filename: 'images/[name][contenthash][ext]'
   },
},

this will make the matched files endup in a folder "images" and 
also add contenthash and extension

...

To make use of the resource in javascript:
(see index.js)
import the resource from original srclocation, and use 
it to fill the src attribute of an img tag for instance
In javascript:

import laughingIcon from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg');
laughImg.src = laughingIcon 

Be sure to have a img tag in de template html that
has an id of "laughImg"
