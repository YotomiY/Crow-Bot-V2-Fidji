const { Client, Message, MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate')
const COLOR = require('../../config.json').embedcolor

module.exports = {
    name: 'translate',
    run: async(client, message, args) => {
        const lang = args[0]
        if (!lang) return message.channel.send("Veuillez spécifiez le language")

        const query = args.slice(1).join(" ")
        if (!query) return message.channel.send("Veuillez indiquez le texte.")

        translate(query, { to: lang}).then((res) => {
            message.channel.send(
                new MessageEmbed()
                .addField(`Texte initiale :`, `\`\`\`fix\n${query}\n\`\`\``)
                .addField(`Traduit en \`${lang}\` : `, `\`\`\`fix\n${res.text}\`\`\``)
                .setColor(COLOR)
                .setFooter(`Senku.`, client.user.avatarURL({dynamic: true}))
            )
        })
    }
}