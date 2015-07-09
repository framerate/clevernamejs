var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
// var CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'clever.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: [nodeModulesPath]
            },
            {
                test: /\.js$/,
                exclude: [nodeModulesPath],
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
        // new CompressionPlugin()
    ]
};
