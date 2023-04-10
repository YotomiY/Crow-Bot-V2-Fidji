const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'channelinfo',
    run: async(client, message, args) => {

        const salon = message.mentions.channels.first() || message.channel
        message.channel.send(
            new MessageEmbed()
            .addField(`> 🎉 Nom :`, `${salon.name} (<#${salon.id}>)`, true)
            .addField(`> ✉️ ID :`, `${salon.id}`, true)
            .addField(`> 📜 Topic :`, `${salon.topic ? salon.topic : "Aucun topic."}`, true)
            .addField(`> 📂 Type :`, `${salon.type === "text" ? "Salon textuel" : "Salon vocal"}`, true)
            .addField(`> ❓ Crée le :`, `${moment(salon.createdAt).format("DD/MM/YYYY")}`, true)
            .setColor(COLOR)
            .setFooter(`Senku.`, client.user.avatarURL())
        )
    }
}