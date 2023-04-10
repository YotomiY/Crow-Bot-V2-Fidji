const Discord = require('discord.js')

module.exports = {
    name: 'pp',
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member;
        var réponse = [
            "**==:3**",
            "**===:3**",
            "**====:3**",
            "**=====:3**",
            "**======:3**",
            "**=======:3**",
            "**========:3**",
            "**=========:3**",
            "**==========:3**",
            "**===========:3**",
            "**============:3**",
            
            
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor("#2f3136")
        .setThumbnail(member.user.avatarURL({dynamic: true}))
        .setFooter("`=` signifie 1 centimètre ...")

        message.channel.send(embed)
    } 
}