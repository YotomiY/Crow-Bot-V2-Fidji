const { Client, Message, MessageEmbed } = require('discord.js');
const premium = require('../../Modèles/premium')
let owner = require("../../config.json").owner

module.exports = {
    name: 'premium',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        const member = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0])

        if(!member) return message.channel.send(`Please specify a member.`)

        premium.findOne({User: member.id}, async (err, data) => {
            if (data) return message.reply("This user is already on premium mode.")
            new premium({ User: member.id }).save()
            return message.reply(`Alright, ${member} is now on premium mode.`)
        })
    }
}