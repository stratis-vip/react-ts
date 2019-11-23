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
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {test: /\.css$/Μ, use: ["style-loader", "css-loader"]}
        ]
    }
}
