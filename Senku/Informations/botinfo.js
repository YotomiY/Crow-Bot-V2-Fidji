const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'botinfo',
    run: async(client, message, args) => {
        message.channel.send(
            new MessageEmbed()
            .addField(`> \`🌟\` Pseudonyme`, `*${client.user.username}*`, true)
            .addField(`> \`🤖\` Tag`, `*#${client.user.discriminator}*`, true)
            .addField(`> \`🔮\` Ping`, `*${Math.round(client.ws.ping)} ms*`, true)
            .addField(`> \`👥\` Utilisateurs`, `*${client.users.cache.size}*`, true)
            .addField(`> \`🎊\` Salon`, `*${client.channels.cache.size}*`, true)
            .addField(`> \`💡\` Serveurs`, `*${client.guilds.cache.size}*`, true)
            .addField(`> \`🧪\` Crée le`, `*${moment(client.user.createdAt).format("DD/MM/YYYY")}*`, true)
            .addField(`> \`👑\` Owner`, `*JL Monarque'*`, true)
            .addField(`> \`✏️\` Librairie`, `[\`Discord.JS v12.5.3\`](https://discord.js.org/#/)`, true)
            .setColor(YELLOW)
            .setFooter("Pando Bots", client.user.avatarURL())
        )
    }
}