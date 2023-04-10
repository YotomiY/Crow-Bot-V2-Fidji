const { Client, Message, MessageEmbed } = require('discord.js');
const blacklist = require('../../Modèles/blacklist-servers')
let owner = require("../../config.json").owner

module.exports = {
    name: 'guildbl',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        const id = args[0]
        if(!id) return message.channel.send(`Veuillez indiquez l'indentifiant du serveur.`)
        if(!client.guilds.cache.has(id)) return message.reply(`Je ne suis pas sur ce serveur.`)
        

        blacklist.findOne({ Server: id }, async (err, data) => {
            if(data) 
                return message.channel.send(
                    `Ce serveur a déjà été blacklist auparavant.`
                )
                new blacklist({ 
                    Server: id
                }).save()
                    message.reply(`Je viens de blacklist ce serveur.`)
        
        })
    }
}