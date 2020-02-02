const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require('terser-webpack-plugin');

/* Configure clean */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.ts',
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: false,
                    },
                },
            }),
        ],
    },
    output: {
        filename: '[name]/[name].js',
        path: __dirname + '/dist'
    },
    plugins: [
        CleanWebpackPluginConfig
    ]
});