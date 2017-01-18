var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        "./src/index.tsx"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "babel",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src")
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};