const Discord = require('discord.js')

module.exports = {
    name: 'wasted',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first() || message.member

        const avatar = mention.user.displayAvatarURL({ size: 512, format: "png" });

        await message.channel.send({
            files: [
            {
                attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`,
                name: "file.jpg",
            }
            ]
        })

    }
}