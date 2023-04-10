const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const COLO = require('../../config.json').logsColor

module.exports = {
    name: 'kick',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu as besoin de la permission `KICK_MEMBERS`.")
        const mentionedUser = message.mentions.members.first()

        if (!mentionedUser) return message.channel.send(`Veuillez mentionnez le membre.`)

        let reason = args.slice(1).join(" ")
        
        if (!reason) reason = "Aucune raison fournie"


        
        mentionedUser.kick().catch(err => console.log(err)).then(() => {
            message.channel.send(`J'ai kick ${mentionedUSer} pour : ${reason}`)
        })
    }
}