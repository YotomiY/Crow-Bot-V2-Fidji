const schema = require('../../Modèles/owner')
const { MessageEmbed } = require('discord.js')
module.exports = { 
    name: 'owner-list',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu n'as pas la permission \`ADMINISTRATOR\``)
        const data = await schema.find({ Guild: message.guild.id})
        if(!!data === false) return message.channel.send(`Il n'ya a aucun owner.`)

        message.channel.send(
            new MessageEmbed()
            .setColor("GREEN")
            .setFooter("Senku.", client.user.avatarURL())
            .setAuthor(`Voici la list des owner de ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setDescription(
                data.map((cmd, i) => 
                `${i + 1}・<@${cmd.User}>`
                ).join('\n')
            )
            .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        )
    }
}