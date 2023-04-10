const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ticket-add',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `MANAGE_CHANNELS`.")
        const membre = message.mentions.members.first()

        if (!membre) return message.channel.send(`Veuillez spécifiez le membre.`)

        if(message.channel.name.includes(`📜・ticket・`)) {
            message.channel.updateOverwrite(membre.user, {
                    VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
        }).then(() => {
            message.channel.send(`J'ai ajouté ${membre} au ticket !`)
        })
        }
    }
}