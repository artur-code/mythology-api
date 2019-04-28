module.exports = {
    entry: "./src/Client",
    output: {
        path: __dirname + "/assets",
        filename: "app.js"
    },
    devtool: "source-map",
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    resolve: {
        extensions: [".mjs", ".js", "jsx", ".ts", ".tsx"]

    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: {
                loader: "ts-loader"
            },
            exclude: /node_modules/,
        }]
    },
    mode: "development"
};