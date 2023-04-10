const { Client, Message, MessageEmbed } = require('discord.js');
const blacklist = require('../../Modèles/blacklist')
let owner = require("../../config.json").owner

module.exports = {
    name: 'unbl',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu n'as pas la permission \`ADMINISTRATOR\``)

        const User = message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send(`Utilisateur invalide, vérifiez si cela est bien une ID.`)

        blacklist.findOne({ Guild: message.guild.id, id: User.user.id }, async (err, data) => {
            if(err) throw err;
            if(data) {
                await blacklist.findOneAndDelete({ Guild: message.guild.id, id: User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** a été enlevé de la blacklist.`)
            } else {
                message.channel.send(`**${User.displayName}** n'est pas dans la blacklist.`)
            }
        })

    }
}