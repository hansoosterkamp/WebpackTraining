const path = require('path')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
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
        ]
    },
	resolve: {
		extensions: [".js", ".css", ".scss", ".jsx", ".tsx", ".ts"],
    },
}