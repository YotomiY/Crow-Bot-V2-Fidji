const db = require('../../Modèles/warn')

const Discord = require('discord.js')

module.exports = {
    name: "clear-warns",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

      const reason = args.slice(1).join(" ")
      db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
          if(err) throw err;
          if(data) {
              await db.findOneAndDelete({ user: user.user.id, guildid: message.guild.id})
              message.channel.send(`J'ai clear les warns de **${user.user.tag}**.`)
        } else {
            message.channel.send(`Ce membre n'a aucun warn.`)
        }
    })
    }
}