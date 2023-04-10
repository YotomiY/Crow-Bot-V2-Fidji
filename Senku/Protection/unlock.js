const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'unlock',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

        const salon = message.channel

        salon.overwritePermissions([{
            id: message.guild.id,
            null: ["SEND_MESSAGES"]
        }]).then(() => {
            message.channel.send("Le salon a été unlock")
        })
    }
}