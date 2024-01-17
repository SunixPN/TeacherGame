const config = {
    mode: "production",
    entry: {
        index: "./src/js/screens/index.js",
        settings: "./src/js/screens/settings.js",
        game: "./src/js/screens/game.js",
        team: "./src/js/screens/team.js",
        gameTeam: "./src/js/screens/gameTeam.js"
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