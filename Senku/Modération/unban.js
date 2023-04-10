const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const COLO = require('../../config.json').logsColor
const userReg = RegExp(/<@!?(\d+)>/)

module.exports = {
    name: 'unban',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu as besoin de la permission `BAN_MEMBERS`.")
        const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : [0]
        const mentionedUser = await message.client.users.fetch(userID).catch(() => null)

        if (!mentionedUser) return message.channel.send(`Veuillez mentionnez le membre avec son ID \`[prefix]unban <@ID>\`.`)

        const reason = args.slice(1).join(" ")



        message.guild.members.unban(mentionedUser.id, [reason]).catch(err => console.log(err)).then(() => {
            message.channel.send(`J'ai unban ${mentionedUser} avec succès.`)
        })
    }
}