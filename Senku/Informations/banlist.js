const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'banlist',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas la permission `BAN_MEMBERS`.")

        const fetchBans = message.guild.fetchBans()

        const list = (await fetchBans).map((member) => "`" + member.user.tag + "`").join("\n")


        message.channel.send(
            new MessageEmbed()
            .setColor(COLOR)
            .setDescription(list)
            .setFooter(`Senku.`, client.user.avatarURL())
            .setAuthor(`Voici tous les membres bannis de ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
        )
    }
}