const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ticket-remove',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `MANAGE_CHANNELS`.")
        const membre = message.mentions.members.first()

        if (!membre) return message.channel.send(`Veuillez mentionnez le membre`)

        if(message.channel.name.includes(`📜・ticket・`)) {
            message.channel.updateOverwrite(membre.user, {
                    VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
        }).then(() => {
            message.channel.send(`J'ai enlevé ${membre} du ticket !`)
        })
        }
    }
}