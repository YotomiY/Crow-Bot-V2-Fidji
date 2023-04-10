const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'clone',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `MANAGE_CHANNELS`.")
        const salon = message.mentions.channels.first() || message.channel        



        salon.clone().then(async channel => {
            channel.send(`${message.author}, salon clone.`)
        })

    }
}