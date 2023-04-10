const { Client, Message, MessageEmbed } = require('discord.js');
const premium = require('../../Modèles/owner')

module.exports = {
    name: 'unowner',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu n'as pas la permission \`ADMINISTRATOR\``)

        const member = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0])

        if(!member) return message.channel.send(`Merci de spécifiez le membre.`)

        premium.findOne({Guild: message.guild.id, User: member.id}, async (err, data) => {
            if (!data) return message.prely(`Cet utilisateur n'est pas dans la liste des owners`)
            data.delete()
            message.channel.send(`J'ai enlevé ${member} de la liste des owners`)
        })
    }
}