const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'lock-all',
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

        const role = message.guild.roles.everyone

        if(!args.length) return message.reply("Veuillez indiquez une action entre on/off")

        const query = args[0].toLowerCase()

        if(!["on", "off"].includes(query))
            return message.reply("Veuillez indiquez une action entre on/off")

        const perms = role.permissions.toArray()

        if(query === "off") {
            perms.push("SEND_MESSAGES")
            console.log(perms)
            await role.edit({ permissions: perms })
            message.reply("Le serveur a été unlock.")
        } else {
            const newPerms = perms.filter((perm) => perm !== "SEND_MESSAGES")
            console.log(newPerms)

            await role.edit({ permissions: newPerms})
            message.reply("Le serveur a été lock.")
        }

    }
}