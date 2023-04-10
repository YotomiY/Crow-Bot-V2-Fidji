const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'messages',
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const guild = db.fetch(`guildMessages_${member.guild.id}_${member.id}`)

        message.channel.send(
            new MessageEmbed()
            .setDescription(`Vous avez **${guild} messages.**`)
            .setColor("GREEN")
            .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
            .setThumbnail(member.user.avatarURL({dynamic: true}))
        )
    }
}
