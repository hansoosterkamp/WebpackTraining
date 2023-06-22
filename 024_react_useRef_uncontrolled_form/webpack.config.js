const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/js/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: [".ts", ".js", ".css", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.ts$/i,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo App',
            filename: 'index.html',
            template: 'src/web/template.html'
        })
    ],
}