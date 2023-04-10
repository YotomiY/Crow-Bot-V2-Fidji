const db = require('../../Modèles/warn')

const Discord = require('discord.js')

module.exports = {
    name: "remove-warn",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

      const reason = args.slice(1).join(" ")
      db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
          if(err) throw err;
          if(data) {
              let number = parseInt(args[1]) - 1
              data.content.splice(number, 1)
              message.channel.send(`J'ai remove 1 warn au membre.`)
              data.save()
        } else {
            message.channel.send(`Ce membre ne possède aucun warn.`)
        }
    })
    }
}