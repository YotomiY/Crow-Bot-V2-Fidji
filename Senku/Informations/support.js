const {MessageEmbed} = require('discord.js')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'support',
    run: async (client, message, args) => {
        message.channel.send(
            new MessageEmbed()
            .addField(`Voici le serveur support`,`[\`Clique ici\`](https://discord.gg/vekJKSzfaB)`)
            .setColor(COLOR)
        )
    }
}