const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'newtext',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission \`MANAGE_CHANNELS\`")
        const nom = args.join(" ")

        if (!nom) return message.channel.send(`Veuillez indiquez le nom du salon`)



        message.guild.channels.create(nom, {type: 'text'}).then(() => {
            message.channel.send(`Le salon \`${nom}\` a été crée avec succès.`)
        })
    }
}