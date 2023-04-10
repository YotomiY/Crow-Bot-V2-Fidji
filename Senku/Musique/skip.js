const Discord = require('discord.js')

module.exports = {
    name: 'mskip',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        await client.distube.skip(message)
        await message.channel.send("J'ai skip la musique à la prochaine.")
    }
}