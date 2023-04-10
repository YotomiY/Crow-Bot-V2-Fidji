const Discord = require('discord.js')

module.exports = {
    name: 'mstoploop',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        await client.distube.setRepeatMode(message, false)
        await message.channel.send("J'ai arrêté le loop de la musique actuelle.")
    }
}