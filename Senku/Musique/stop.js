const Discord = require('discord.js')

module.exports = {
    name: 'mstop',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        await client.distube.stop(message)
        await message.channel.send("J'ai stop la musique actuelle.")
    }
}