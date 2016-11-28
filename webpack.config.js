var path = require('path');
//FIXME: uncomment and test webpack package
//var webpack = require('webpack');
//fixme: no output from operation
module.exports = {
    entry: "./src/app/js/index.js",
    output: {
        path: __dirname + '/dist/app', //todo: check if preceding slash was causing the problem
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
            /*{
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src/app/ts')
                ]/!*,
                exclude: /(node_modules)/!*!/
            }*/
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
    }/*,
    devtool: 'source-map',
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]*/
    //FIXME: uncomment and test sourcemaps and minification
};
