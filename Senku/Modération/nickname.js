const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'nickname',
    run: async(client, message, args) => {
        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_NICKNAMES\`.`)

        if (!membre) return message.channel.send(`Veuillez spécifiez le membre.`)

        const nick = args.slice(1).join(" ")

        if (!nick) return message.channel.send(`Veuillez spécifiez le nickname.`)

        membre.setNickname(nick).then(() => {
            message.channel.send(`Je l'ai attribué le nickname : ${nick}.`)
        })
    }
}