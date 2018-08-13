// const webpack = require('webpack')
const path = require('path');
// const fs = require('fs');

module.exports = {
    entry: [path.join(__dirname, 'index.js')],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    mode: 'none',

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 3000,
        // https: true,
        // cert: cert,
        // key: key,
        // quiet: true,
        compress: false,
        // disableHostCheck: true
        historyApiFallback: true,
        index: './public/index.html',
        progress: true,
        inline: true,
        // lazy: true,
        // clientLogLevel: false,
        // noInfo : true,
        watchContentBase: true,
        open: true
    }
}
