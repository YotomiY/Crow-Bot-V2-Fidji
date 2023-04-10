const { Client, Message, MessageEmbed } = require('discord.js');
const SnakeGame = require('snakecord')

module.exports = {
    name: 'snake',
    run: async(client, message, args) => {

        const snakegame = new SnakeGame({
            title: "🧪 Snake !",
            color: "GREEN",
            timestamp: false,
            gameOverTitle: "🧪 Game Over !"
        })

        return snakegame.newGame(message)

    }
}