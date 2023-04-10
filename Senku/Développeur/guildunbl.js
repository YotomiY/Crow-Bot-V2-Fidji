const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner
const blacklist = require('../../Modèles/blacklist-servers')
module.exports = {
    name: "guildunbl",
    run: async(client, message, args) => {
        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        const id = args[0]
        if(!id) return message.channel.send(`Veuillez indiquez l'indentifiant du serveur.`)
        

        blacklist.findOne({ Server: id }, async (err, data) => {
            if(!data) {
                return message.channel.send(`Ce serveur n'a pas été blacklist.`)
            } 
            
            data.delete()
            message.reply(`Je viens de unblacklist ce serveur.`)
        })
    }
}