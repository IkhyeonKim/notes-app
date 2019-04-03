const path = require('path') // Using "path" library

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/index.js'],
        edit: ['babel-polyfill','./src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}

// __dirname <- it's going to provide absolute path from the root to our folder

// /d/Alain/major/udemy/adv-js/j-09-02-arrow-function/boilerplate