const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hackban',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu as besoin de la permission `BAN_MEMBERS`.")
        const target = args[0]
        if (isNaN(target)) return message.channel.send(`Cet identifiant n'est pas un identifiant valide.`)

        const reason = args.splice(1, args.length).join(' ')

        try {
            message.guild.members.ban(target, {reason: reason.length < 1 ? "Aucune raison donnée." : reason }).then(() => {
                message.channel.send(`J'ai banni (<@${target}>) du serveur.`)
            })
        } catch (error) { console.log(error)}
    }
}