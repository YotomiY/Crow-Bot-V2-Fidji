const Discord = require('discord.js')

module.exports = {
    name: 'wide',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first() || message.member;
    
        const avatar = mention.user.displayAvatarURL({ dynamic: true, size: 512, format: "png" });

        await message.channel.send({
            files: [
            {
                attachment: `https://vacefron.nl/api/wide?image=${avatar}`,
                name: "file.jpg",
            }
            ]
        })

    }
}