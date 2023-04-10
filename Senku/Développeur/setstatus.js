const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner

module.exports = {
    name: 'setstatus',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        const contenu = args.slice(1).join(" ").replace("-users-", client.users.cache.size).replace("-guilds-", client.guilds.cache.size)

        if (args[0] != 'STREAMING' || "WATCHING" || "PLAYING" || "LISTENING")

        return await message.client.user.setPresence({
            activity: {
                name: contenu,
                type: args[0],
                url: "https://www.twitch.tv/pandowner667"
            }
        }).then(() => {
            message.channel.send("Statut changé avec succès.")
        })
    }   
}