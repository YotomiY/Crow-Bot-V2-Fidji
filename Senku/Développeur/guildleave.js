const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner

module.exports = {
    name: 'guildleave',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        let guild = client.guilds.cache.get(args[0])

        if (!guild) return message.channel.send(`Veuillez indiquez l'indentifiant du serveur.`)

        guild.leave().then(() => {
            message.channel.send(`J'ai quitté le serveur : **${guild}** (__${args[0]}__) avec succès.`)
        })
    }   
}