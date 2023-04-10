const { Client, Message, MessageEmbed } = require('discord.js');
const blacklist = require('../../Modèles/blacklist')
let owner = require("../../config.json").owner

module.exports = {
    name: 'bl',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu n'as pas la permission \`ADMINISTRATOR\``)

        const User = message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send(`Utilisateur invalide, vérifiez si cela est bien un ID.`)

        blacklist.findOne({ Guild: message.guild.id, id: User.user.id }, async (err, data) => {
            if(err) throw err;
            if(data) {
                return message.channel.send(`**${User.displayName}** est déjà dans la blacklist.`)
            } else {
                data = new blacklist({ Guild: message.guild.id, id: User.user.id })
                data.save()
                User.ban()
                .catch(err => console.log(err))
                message.channel.send(`${User.user.tag} a été ajouté dans la blacklist.`)
            }
        })

    }
}