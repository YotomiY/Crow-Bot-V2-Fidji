const Discord = require('discord.js')

module.exports = {
    name: 'slap',
    run: async (client, message, args) => {
        const membre = message.mentions.members.first()
        if(!membre) return message.channel.send("Merci d'indiquez le membre à gifler.")

        var lien = [
            "https://i.gifer.com/BzWJ.gif",
            "https://data.whicdn.com/images/230128566/original.gif",
            "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
            "https://i.imgur.com/fm49srQ.gif",
            "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
            "https://i.imgur.com/LGyZgnL.gif?noredirect",
            "https://i.gifer.com/JpUc.gif",
            "https://thumbs.gfycat.com/TerribleLightBagworm-max-1mb.gif",
            "https://static.fjcdn.com/gifs/Mm_966fc2_1916375.gif",
            "https://i.pinimg.com/originals/b6/e3/9e/b6e39e693be3968d212b0fe5754f85db.gif",
        ]
        const lienn = lien[Math.floor(Math.random() * lien.length)]

        const embed = new Discord.MessageEmbed()
        .setDescription(`**Oof, __${message.author}__ vient de gifler __${membre}__ !**`)
        .setImage(lienn)
        .setColor("GREEN")

        message.channel.send(embed)
    }
}