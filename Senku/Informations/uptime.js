const { Client, Message, MessageEmbed } = require('discord.js');

const ms = require('ms')
module.exports = {
    name: 'uptime',
    run: async(client, message, args) => {
        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        message.channel.send(
            new MessageEmbed()
            .setColor("#4c5df5")
            .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
            .addField(`Jours`, days, true)
            .addField(`Heures`, hours, true)
            .addField(`Minutes`, minutes, true)
            .addField(`Secondes`, seconds, true)
        )
    }
}