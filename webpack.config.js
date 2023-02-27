const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')},
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }]},
    plugins: [new HtmlWebpackPlugin({
        title: 'Ipone Calculator',
        template: './src/index.html',
        minify: true
    })]
};