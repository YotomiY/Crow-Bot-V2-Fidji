const schema = require('../../Modèles/custom')
const { MessageEmbed } = require('discord.js')
module.exports = { 
    name: 'custom-list',
    run: async (client, message, args) => {
        const data = await schema.find({ Guild: message.guild.id})
        if(!!data === false) return message.channel.send(`Il n'y a aucune commande custom.`)

        message.channel.send(
            new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`Voici les commandes customs de ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setDescription(
                data.map((cmd, i) => 
                `__${i + 1}__・**${cmd.Command}**\nRéponse : **${cmd.Response}**`
                ).join('\n')
            )
            .setThumbnail(message.member.user.avatarURL({dynamic: true}))
            .setFooter(`Senku.`, client.user.avatarURL())
        )
    }
}