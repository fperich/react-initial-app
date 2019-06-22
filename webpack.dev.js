// const webpack = require('webpack')
const path = require('path');
// const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader?cacheDirectory',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    compress: {
                        ecma: 6,
                    },
                    output: {
                        comments: false,
                    },
                    warnings: false,
                },
            })
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000,
        compress: true,
        clientLogLevel: 'none',
        //noInfo: true,
        stats: 'errors-only',
        overlay: true,
    },

    plugins: [
        new HardSourceWebpackPlugin(),

        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
