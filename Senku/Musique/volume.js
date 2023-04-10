const Discord = require('discord.js')

module.exports = {
    name: 'mvolume',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        if (!args[0]) return message.channel.send("Veuillez spécifez le volume.")

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send("Veuillez spécifiez un volume entre 1 et 100")

        await client.distube.setVolume(message, parseInt(args[0]))

    }
}