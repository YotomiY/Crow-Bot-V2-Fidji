const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'emojilist',
    run: async(client, message, args) => {
        const characterPerMessage = 2000;
        const emojis = message.guild.emojis.cache.map((e) => `${e}`).join("**,** ")
        const numberOfMessage = Math.ceil(emojis.length / characterPerMessage)
        const embed = new MessageEmbed()
        .setAuthor(`Voici les emojis de ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
        .setFooter("Pando Bots", client.user.avatarURL())
        .setColor(COLOR)
        for (i = 0; i < numberOfMessage; i++) {
            message.channel.send(
                embed.setDescription(emojis.slice(i * characterPerMessage, (i + 1) * characterPerMessage))
            )
        }
    }
}