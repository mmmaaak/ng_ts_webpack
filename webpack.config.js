var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.min.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};