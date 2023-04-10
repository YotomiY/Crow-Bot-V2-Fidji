const Discord = require('discord.js')

module.exports = {
    name: 'pprandom',
    run: async (client, message, args) => {
        const user = client.users.cache.random()

        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Voici l'avatar de " + "`" + user.username + '`')
            .setDescription(`[**Lien | Clique ici**](${user.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
             })})`)
            .setImage(user.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
            }))
            .setColor("GREEN")
        )

    }
}