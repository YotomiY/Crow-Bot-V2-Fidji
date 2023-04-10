const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor

module.exports = {
    name: 'clear',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_MESSAGES\`.`)

        const amount = parseInt(args[0])
        const salon = message.channel

        if (isNaN(amount)) return message.channel.send(`Veuillez spécifiez un montant entre 1 et 99.`)

        if (amount <= 1 || amount >= 100) return message.channel.send(`Veuillez spécifiez un montant entre 1 et 99.`)



        salon.bulkDelete(amount, true)
        salon.bulkDelete(amount)

        .then(() => {
            message.channel.send(`J'ai supprimé ${amount} messages.`)
        })
    }
}