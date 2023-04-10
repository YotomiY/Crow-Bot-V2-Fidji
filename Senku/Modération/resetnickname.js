const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'resetnickname',
    run: async(client, message, args) => {
        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_NICKNAMES\`.`)

        if (!membre) return message.channel.send(`Veuillez mentionnez le membre.`)


        membre.setNickname(membre.user.username).then(() => {
            message.channel.send(`J'ai reset le nickname de ${membre}.`)
        })
    }
}