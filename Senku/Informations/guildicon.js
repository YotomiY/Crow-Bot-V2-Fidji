const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'guildicon',
    run: async(client, message, args) => {

        message.channel.send(
            new MessageEmbed()
            .setAuthor(`Voici l'icône de ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setImage(message.guild.iconURL({size: 2048, dynamic: true, format: "png"}))
            .setColor(COLOR)
        )
    }
}