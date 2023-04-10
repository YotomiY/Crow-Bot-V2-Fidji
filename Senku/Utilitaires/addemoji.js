const Discord = require('discord.js')


module.exports = {
    name: "addemoji",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_CHANNELS\`.`)
        if (!args.length) return message.channel.send("Veuillez indiquez l'emoji")

        for (const rawEmoji of args) {
            const parseEmoji = Discord.Util.parseEmoji(rawEmoji)

            if (parseEmoji.id) {

                const extension = parseEmoji.animated ? ".gif" : '.png'
                const url = `https://cdn.discordapp.com/emojis/${parseEmoji.id + extension}`
                message.guild.emojis.create(url, parseEmoji.name)
                .then((emoji) => message.channel.send(`J'ai ajouté l'emoji : ${emoji.url}\nNom : \`${rawEmoji}\``))
            }
        }
    }
}