const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'addbot',
    run: async(client, message, args) => {
        message.channel.send(
            new MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/885982928662847528/886614048941150225/97CFC606-6728-44B4-9005-B234B659C0A7.gif")
            .setColor(COLOR)
            .setFooter("Pando Bots", client.user.avatarURL())
            .setDescription(`**Invite moi :**\n[**\`Clique ici\`**](https://discord.com/api/oauth2/authorize?client_id=885895096845877258&permissions=8&scope=bot)`)
        )
    }
}