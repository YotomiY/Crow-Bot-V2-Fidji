const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const COLO = require('../../config.json').logsColor

module.exports = {
    name: 'ban',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu as besoin de la permission `BAN_MEMBERS`.")
        const mentionedUser = message.mentions.members.first()

        if (!mentionedUser) return message.channel.send(`Veuillez spécifiez le membre`)

        let reason = args.slice(1).join(" ")
        
        if (!reason) reason = "Aucune raison fournie"
        


        mentionedUser.ban().catch(err => console.log(err)).then(() => {
            message.channel.send(`${mentionedUser} a été ban pour : ${reason}`)
        })
    }
}