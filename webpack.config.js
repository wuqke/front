/**
 * Created by wuqiongke703 on 16/9/1.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
//    devtool:'source-map',
    entry: {
        index: './jsx/index.jsx'
    },
    output: {
        filename: './build/[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                //production ,development
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ['transform-decorators-legacy']

                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

};
