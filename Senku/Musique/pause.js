const Discord = require('discord.js')

module.exports = {
    name: 'mpause',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        await client.distube.pause(message)
        await message.channel.send("J'ai pause la musique actuelle.")
    }
}