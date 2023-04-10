const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner

module.exports = {
    name: 'setpic',
    run: async(client, message, [url], args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        return await message.client.user.setAvatar(url).then(() => {
            message.channel.send("Avatar changé avec succès.")
        }
        )
    }   
}