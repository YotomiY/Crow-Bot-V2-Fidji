const prefixSchema = require('../../Modèles/prefix')
const { Message } = require('discord.js')
module.exports = {
    name : 'setprefix',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Tu as besoin de la permission \`ADMINISTRATOR\`.`)
        const res = await args.join(" ")
        if(!res) return message.channel.send('Veuillez spécifiez le nouveau préfix.')
        prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send(`Le prefix a été changé à : **${res}**`)
            } else {
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send(`Le prefix a été changé à : **${res}**`)
            }
        })
    }
}