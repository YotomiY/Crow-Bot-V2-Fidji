const Discord = require('discord.js')
const canvas = require('canvas')

module.exports = {
    name: 'ship',
    run: async (client, message, args) => {
        const member1 = message.member
        const member = message.mentions.members.first()
        if (!member) return message.channel.send("Merci de spécifiez le membre")
            var réponse = [
            `${member1} est amoureux de ${member} à **3%**. <a:Heart_pink:879453970471469076>`,
            `${member1} est amoureux de ${member} à **6%**. <a:Heart_pink:879453970471469076>`,
            `${member1} est amoureux de ${member} à **9%**. <a:Heart_pink:879453970471469076>`,
            `${member1} est amoureux de ${member} à **12%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **15%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **18%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **21%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **24%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **27%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **30%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **33%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **36%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **39%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **42%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **45%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **48%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **51%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **54%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **57%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **60%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **63%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **66%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **69%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **72%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **75%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **78%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **81%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **84%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **87%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **90%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **93%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **96%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **99%**. <a:Heart_pink:879453970471469076> `,
            `${member1} est amoureux de ${member} à **100%**. <a:Heart_pink:879453970471469076> `,
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor(`#2f3136`)
        .setThumbnail(member1.user.avatarURL({dynamic: true}))

        message.channel.send(embed)
    } 
}