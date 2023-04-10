const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'vkick',
    run: async(client, message, args) => {
        const membre = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_MESSAGES\`.`)

        if(!membre) return message.channel.send(`Veuillez spécifiez le membre.`)
        if (!membre.voice.channel) return message.channel.send(`Ce membre n'est pas dans un salon vocal.`)



        membre.voice.kick().then(() => {
            message.channel.send(`Je vient de le kick de son salon vocal.`)
        })
    }
}