const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'avatar',
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member

        message.channel.send(
            new MessageEmbed()
            .setAuthor(`Voici l'avatar de ${member.user.tag}`, member.user.displayAvatarURL({dynamic: true}))
            .setImage(member.user.displayAvatarURL({size: 2048, dynamic: true, format: "png"}))
            .setColor(COLOR)
        )
    }
}