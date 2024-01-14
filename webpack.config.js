const config = {
    mode: "production",
    entry: {
        index: "./src/js/screens/index.js",
        settings: "./src/js/screens/settings.js",
        game: "./src/js/screens/game.js"
    },

    output: {
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ],
    },
}

module.exports = config