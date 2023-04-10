const { Client, Message, MessageEmbed } = require('discord.js');
const toHex = require('colornames')
const COLO = require('../../config.json').logsColor
module.exports = {
    name: 'newrole',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu as besoin de la permission \`MANAGE_ROLES\`.")

        if (!args[0]) return message.channel.send(`Merci de spécifiez la couleur du rôle.`)

        const nom = args.slice(1).join(' ')
        if(!nom) return message.channel.send(`Veuillez indiquez le nom du rôle.`)



        message.guild.roles.create({
            data: {
                name: nom,
                color: toHex(args[0])
            }
        }).then(() => {
            message.channel.send(`J'ai crée le rôle \`${nom}\` avec comme couleur \`${args[0]}\`.`)
        })
    }
}