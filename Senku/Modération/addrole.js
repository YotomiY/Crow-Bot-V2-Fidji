const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'addrole',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu as besoin de la permission `MANAGE_ROLES`.")

        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!membre) return message.channel.send("Veuillez spécifiez le membre.")

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])

        if (!role) return message.channel.send("Veuillez spécifiez le rôle.")


        await membre.roles.add(role).then(() => {
        message.channel.send(`🧪 **J'ai ajouté le rôle emandé au membre mentionné.**`)
        })
    }
}