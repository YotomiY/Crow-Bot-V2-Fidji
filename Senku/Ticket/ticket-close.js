const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ticket-close',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `MANAGE_CHANNELS`.")
        if(message.channel.name.includes(`📜・ticket・`)) {
            message.channel.delete()
        }
    }
}