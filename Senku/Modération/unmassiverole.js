const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'unmassiverole',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu as besoin de la permission `MANAGE_ROLES`.")
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])

        if (!role) return message.channel.send("Veuillez spécifiez le rôle")

        message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(role))

        message.channel.send(`🧪 **J'ai enlevé le rôle ${role} à tous les membres du serveur.**`)
    }
}