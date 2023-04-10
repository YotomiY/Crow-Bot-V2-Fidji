const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'slowmode',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission \`MANAGE_CHANNELS\`.")

        if (!args[0]) return message.channel.send("Veuillez spécifiez un temps.")

        const time = ms(args[0]) / 1000

        if(time > 21600000 || time < 0) return message.channel.send("Le temps doit être entre 0 et 21600000 secondes")

        if (isNaN(time)) {
            return message.channel.send("Temps incorrecte")
        }

        const salon = message.channel


        salon.setRateLimitPerUser(time).then(() => {
            message.channel.send(`🧪 **Le slowmode a été ajusté à ${time} secondes !**`)
        })
    }
}