const Discord = require('discord.js')

module.exports = {
    name: "mqueue",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        const queue = client.distube.getQueue(message);

        await message.channel.send(
            new Discord.MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(member.user.avatarURL({dynamic: true}))
            .setDescription(`Queue actuelle :\n${queue.songs.map((song, id) => `${id + 1} - \`${song.name}\` - \`${song.formattedDuration}\``).slice(0, 10).join(" \n")}`))
    }
}