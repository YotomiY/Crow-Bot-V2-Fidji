const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require("../../Collection")
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'afk',
    run: async(client, message, args) => {

        const reason = args.join(" ") || "Aucune raison donnée"

        afk.set(message.author.id, [ Date.now(), reason])

        return message.channel.send(`Vous êtes désormais AFK.\nRaison : \`${reason}\``)
    }
}