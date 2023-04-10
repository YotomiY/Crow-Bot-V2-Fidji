const { Client, Message, MessageEmbed } = require('discord.js');
let owner = require("../../config.json").owner
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'serverlist',
    run: async(client, message, args) => {

        if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat(`- ${guild.name} (${guild.id}) | ${guild.memberCount} membres\n`)
        })
            message.channel.send(
                new MessageEmbed()
                .setAuthor(`Total de mes serveurs : ${client.guilds.cache.size} serveurs`, client.user.avatarURL())
                .setDescription(serverlist)
                .setColor(COLOR)
            )
    }
}