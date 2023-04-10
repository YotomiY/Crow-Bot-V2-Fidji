const db = require('../../Modèles/warn')
const COLOR = require('../../config.json').embedcolor
const Discord = require('discord.js')

module.exports = {
    name: "warns",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

      const reason = args.slice(1).join(" ")
      db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
          if(err) throw err;
          if(data) {
              message.channel.send(new Discord.MessageEmbed()
              .setTitle(`Voici les warns de ${user.user.tag}`)
              .setDescription(data.content.map(
                  (w, i) => 
                  `\`${i + 1}\` | Moderateur : ${message.guild.members.cache.get(w.moderator).user.tag}\n Raison : ${w.reason}`
                    )
                  )
                  .setColor(COLOR)
                  .setFooter(`Senku.`, client.user.avatarURL())
              )
          } else {
              message.channel.send("Ce membre n'a pas de warn.")
          }
        })
    }
}