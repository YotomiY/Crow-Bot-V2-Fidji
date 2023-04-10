const Discord = require('discord.js')

module.exports = {
    name: 'kill',
    run: async (client, message, args) => {
        const membre = message.mentions.members.first()
        if(!membre) return message.channel.send("Veuillez mentionnez le membre à kill.")

        var lien = [
            "https://i.pinimg.com/originals/cc/87/65/cc87656cf72979fb8ee01c3eebc5cdff.gif",
            "https://i.pinimg.com/originals/d1/1f/b2/d11fb22c0946aa51c6f09279111b9532.gif",
            "https://i.pinimg.com/originals/4b/2e/a6/4b2ea664edcbe0b32dfc71c2114c7f7b.gif",
            "https://i.pinimg.com/originals/c4/1e/30/c41e304c90f23e849be92efcfe096b9e.gif",
            "https://i.imgur.com/ib7ZuIY.gif",
            "https://i.pinimg.com/originals/9f/84/6a/9f846a92ea5c0f1d7ca3a96f11fdda96.gif",
            "https://img.wattpad.com/3ac990538f1b6b69104e7dc75a84e2f65ae9fa42/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f313571335779326c6548786552413d3d2d3835393631393237342e313630323432616661636263396631623736323138353433333133372e676966",
            "https://media2.giphy.com/media/mPkIKiRTa4Ni/giphy-downsized.gif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLGQJVABjn3CThlylQ_cCQndYQptLwwy5Xw&usqp=CAU",
            "https://media1.tenor.com/images/cfaf476b5b2c8d74c72cea8103d3b5ff/tenor.gif?itemid=5678108",
        ]
        const lienn = lien[Math.floor(Math.random() * lien.length)]

        const embed = new Discord.MessageEmbed()
        .setDescription(`**__${membre}__ est désormais, mort**`)
        .setImage(lienn)
        .setColor("GREEN")

        message.channel.send(embed)
    }
}