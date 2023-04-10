const Discord = require('discord.js')

module.exports = {
    name: 'gay',
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member;
            var réponse = [
            `${member} est gay à **3%** 🏳️‍🌈`,
            `${member} est gay à **6%** 🏳️‍🌈`,
            `${member} est gay à **9%** 🏳️‍🌈`,
            `${member} est gay à **12%** 🏳️‍🌈`,
            `${member} est gay à **15%** 🏳️‍🌈`,
            `${member} est gay à **18%** 🏳️‍🌈`,
            `${member} est gay à **21%** 🏳️‍🌈`,
            `${member} est gay à **24%** 🏳️‍🌈`,
            `${member} est gay à **27%** 🏳️‍🌈`,
            `${member} est gay à **30%** 🏳️‍🌈`,
            `${member} est gay à **33%** 🏳️‍🌈`,
            `${member} est gay à **36%** 🏳️‍🌈`,
            `${member} est gay à **39%** 🏳️‍🌈`,
            `${member} est gay à **42%** 🏳️‍🌈`,
            `${member} est gay à **45%** 🏳️‍🌈`,
            `${member} est gay à **48%** 🏳️‍🌈`,
            `${member} est gay à **51%** 🏳️‍🌈`,
            `${member} est gay à **54%** 🏳️‍🌈`,
            `${member} est gay à **57%** 🏳️‍🌈`,
            `${member} est gay à **60%** 🏳️‍🌈`,
            `${member} est gay à **63%** 🏳️‍🌈`,
            `${member} est gay à **66%** 🏳️‍🌈`,
            `${member} est gay à **69%** 🏳️‍🌈`,
            `${member} est gay à **72%** 🏳️‍🌈`,
            `${member} est gay à **75%** 🏳️‍🌈`,
            `${member} est gay à **78%** 🏳️‍🌈`,
            `${member} est gay à **81%** 🏳️‍🌈`,
            `${member} est gay à **84%** 🏳️‍🌈`,
            `${member} est gay à **87%** 🏳️‍🌈`,
            `${member} est gay à **90%** 🏳️‍🌈`,
            `${member} est gay à **93%** 🏳️‍🌈`,
            `${member} est gay à **96%** 🏳️‍🌈`,
            `${member} est gay à **99%** 🏳️‍🌈`,
            `${member} est gay à **100%** 🏳️‍🌈`,
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor(`GREEN`)
        .setThumbnail(member.user.avatarURL({dynamic: true}))

        message.channel.send(embed)
    } 
}