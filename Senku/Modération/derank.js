const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'derank',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu as besoin de la permission `MANAGE_ROLES`.")

        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!membre) return message.channel.send("Veuillez spécifiez le mebre.")




        await membre.roles.remove(membre.roles.cache).then(() => {
        message.channel.send(`🧪 **J'ai dérank ${membre}.**`)
        })
    }
}