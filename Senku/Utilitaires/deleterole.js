const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'deleterole',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu as besoin de la permission \`MANAGE_ROLES\`.")
        const salon = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])

        if (!salon) return message.channel.send(`Veuillez mentionner le rôle.`)

        salon.delete().then(() => {
            message.channel.send(`Le rôle mentionné a été supprimé.`)
        })
    }
}