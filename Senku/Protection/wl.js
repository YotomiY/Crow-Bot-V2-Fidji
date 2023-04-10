
const { Client, Message, MessageEmbed } = require('discord.js');
const premium = require('../../Modèles/whitelist')


module.exports = {
    name: 'wl',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu n'as pas la permission \`ADMINISTRATOR\``)
        const member = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0])
        if(!member) return message.channel.send(`Merci de spécifiez le membre.`)

        premium.findOne({Guild: message.guild.id, User: member.id}, async (err, data) => {
            if (data) return message.reply("Cet membre est déjà dans la whitelist.")
            const newData = new premium({ Guild: message.guild.id, User: member.id })
            await newData.save()
            return message.reply(`${member} est désormais dans la whitelist.`)
        })
    }
}