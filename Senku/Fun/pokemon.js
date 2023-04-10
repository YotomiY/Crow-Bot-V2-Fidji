const Discord = require('discord.js')

module.exports = {
    name: 'pokemon',
    run: async (client, message, args) => {
        const member = message.member
        const nom = args.slice(0).join(" ")
        if(!nom) return message.channel.send("Merci de spécifiez le nom du pokémon.")

        const link = `https://i.some-random-api.ml/pokemon/${nom}.png`
        const lien = `https://www.pokemon.com/us/pokedex/${nom}`

        const embed = new Discord.MessageEmbed()
        .setTitle("Voici quelques informations sur ce pokemon")
        .setDescription(`**Ce lien sera probablement plus utile que moi :\n${lien}\n\n__Image :__**`)
        .setImage(link)
        .setColor("#2f3136")
        .setThumbnail(member.user.avatarURL({dynamic: true}))

        message.channel.send(embed)
    }
}