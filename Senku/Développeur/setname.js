const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner

module.exports = {
    name: 'setname',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        const contenu = args.slice(0).join(" ")

        return await message.client.user.setUsername(contenu).then(() => {
            message.channel.send("Nom changé avec succès.")
        })
    }   
}