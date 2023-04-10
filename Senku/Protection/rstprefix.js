const prefixSchema = require('../../Modèles/prefix')
const prefix = require('../../config.json').prefix
const { confirmation } = require('@reconlx/discord.js')

module.exports = {
    name : 'rstprefix',
    run : async(client, message) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu as besoin de la permission \`ADMINISTRATOR\`.`)
        message.channel.send("Voulez-vous reset mon préfix à s! ?").then(async (msg) => {
            const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000)
            if(emoji === '✅') {
                msg.delete()
                await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                message.channel.send(`Le préfix a été reset à : **${prefix}**`)
            }
            if(emoji === '❌') {
                msg.delete()
                message.channel.send('Action annulé.')
            }
        })

    }
}