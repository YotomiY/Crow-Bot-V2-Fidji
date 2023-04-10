const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'dm',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_MESSAGES\`.`)

        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!membre) return message.channel.send(`Veuillez spécifiez le membre.`)

        const messagee = args.slice(1).join(" ")

        if (!messagee) return message.channel.send(`Veuillez spécifiez le texte`)




        message.delete()

        membre.send(messagee)
    }
}