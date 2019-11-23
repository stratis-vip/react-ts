module.exports = {
    entry: './src/app.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    resolve: {
    
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: ["ts-loader"]},
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"]}
        ]
    }
}
