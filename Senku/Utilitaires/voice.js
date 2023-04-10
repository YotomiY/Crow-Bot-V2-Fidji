const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'voice',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission \`MANAGE_CHANNELS\`")
        const nom = args.join(" ")

        if (!nom) return message.channel.send(`Veuillez spécifiez le nom du salon vocal.`)


        message.guild.channels.create(nom, {type: 'voice'}).then(() => {
            message.channel.send(`Le salon vocal \`${nom}\` a été crée.`)
        })
    }
}