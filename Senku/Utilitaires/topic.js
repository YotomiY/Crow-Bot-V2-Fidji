const { Client, Message, MessageEmbed } = require('discord.js');
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'topic',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission \`MANAGE_CHANNELS\`")
        const nom = args.join(" ")

        if (!nom) return message.channel.send("Veuillez spécifiez le topic.")

        const salon = message.channel


        salon.setTopic(nom).then(() => {
            message.channel.send(`J'ai changé le topic de ${salon} à **\`${nom}\`**`)
        })
    }
}