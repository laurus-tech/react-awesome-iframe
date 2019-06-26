const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./test/app.js", // webpack4 之后,会有默认的entry，如果不配置，就默认为 ./src/index.js
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        inline: true,
        port: 11000 //配置端口
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
};
