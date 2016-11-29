<h1>Weather Viewer Application</h1>
This is the weather viewer that I built for my [Free Code Camp](https://www.freecodecamp.com) challenge.

<h2>Technical Description</h2>
This is an application that displays the weather based on a users current location. This application is built using TypeScript and uses Webpack as a module bundler.

<h2>Installation</h2>
This assumes that you have [NodeJS installed](https://nodejs.org/).

<h3>Downloading</h3>
To download this project, copy the following command into your terminal/cmd: `git clone https://github.com/JavaTheNutt/weather_viewer.git weather_viwer && cd weather_viewer` This will clone the repo to your local machine, save it in a folder called 'weather_viewer' and cd into that directory.

<h3>Install dependencies</h3>
To install dependencies, use `npm install`. This will install all of the dependencies listed in the _package.json_. __NOTE:__ Use of the _bower.json_ is deprecated and will be removed. The reason for this is that I will be working on a method to inject the contents of the _package.json_ into the Weback build in the future, and it makes more sense to use a single dependency management system. 

It will also be neccessary to install certain dependencies globally. Webpack should be installed globally with the following command `npm install webpack -g`. TypeScript should also be installed globally like so: `npm install typescript -g`. If you wish to use the webpack-dev-server, that should also be installed globally with the command `npm install webpack-dev-server -g`. Installing these globally will add them to your path and allow you to use their functionality from the command line.

<h3>Usage</h3>
This project is built using TypeScript, but Webpack does not use the TypeScript loader (the reason for this will become apparent below). In order to compile your TypeScript to JavaScript, you will need to use the following command `tsc`. This will run the TypeScript compiler, using the options specified in the _tsconfig.json_ file. This will generate all of the JavaScript, in ES2015 format, and store it in the `./src/app/js` directory. This is where Webpack will look for the JS files to bundle. 

Working this way means that you do not need to use TypeScript, instead, you can simply delete the contents of the `./src/app/ts`folder and write ES2105 JS into the `./src/app/js` folder.
