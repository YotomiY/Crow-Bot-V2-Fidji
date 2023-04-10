const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'identifiant',
    run: async(client, message, args) => {
        const membre = message.mentions.members.first() || message.member

        message.channel.send(`Voici l'ID de ${membre} : **${membre.id}**`)
    }
}