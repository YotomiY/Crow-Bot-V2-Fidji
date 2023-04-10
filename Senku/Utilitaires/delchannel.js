const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'delchannel',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission \`MANAGE_CHANNELS\`.")

        const salon = message.mentions.channels.first()

        if (!salon) return message.channel.send(`Merci de spécifiez le salon.`)


        salon.delete().then(() => {
            message.channel.send(`Le salon mentionné a été supprimé`)
        })
    }
}