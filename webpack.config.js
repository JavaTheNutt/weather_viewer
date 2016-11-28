var path = require('path');
//FIXME: uncomment and test webpack package
var webpack = require('webpack');
module.exports = {
    entry: "./src/app/js/index.js",
    output: {
        path: __dirname + '/dist/app',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader",
                include: [
                    path.resolve(__dirname, 'src/app/styles')
                ]
            },
            {
                test: /\.js$/,
                //exclude: /(node_modules)/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src/app/js')
                ],
                query: {
                    presets:['es2015']
                }
            }
        ]
    },
    resolve: {
        root:[
            path.resolve('./src/app')
        ]/*,
        extensions:['', '.webpack.js', '.web.js', '.ts', '.js', '.scss']*/
        //FIXME: uncomment and test extensions array
    },
    devtool: 'source-map',
    /*,plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]*/
    //FIXME: uncomment and test sourcemaps and minification
};
