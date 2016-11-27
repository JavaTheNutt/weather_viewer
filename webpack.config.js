var path = require('path');
module.exports = {
    entry: "./src/app/js/index.js",
    output: {
        path: __dirname + 'dist/app',
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
                    path.resolve(__dirname, 'src/app')
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
        ]
    }
};
