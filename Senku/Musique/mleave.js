const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mleave', // Optional
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`Veuillez rejoindre un salon vocal.`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
              
          }
}