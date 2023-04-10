const Discord = require('discord.js')

module.exports = {
    name: 'mloop',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        await client.distube.setRepeatMode(message, parseInt(args[0]))
        await message.channel.send("J'ai commencé à loop la musique actuelle.")
    }
}