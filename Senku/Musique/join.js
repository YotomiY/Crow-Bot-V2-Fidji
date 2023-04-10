const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mjoin', // Optional
        run: async (client, message, args) => {
            const member = message.member
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`Veuillez rejoindre un salon vocal.`)
            .setThumbnail(member.user.avatarURL({dynamic: true}))
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.join()
              
          }
}