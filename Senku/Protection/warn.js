const db = require('../../Modèles/warn')

const Discord = require('discord.js')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: "warn",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if(!user) return message.channel.send("Utilisateur invalide.")
      const reason = args.slice(1).join(" ")
      db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
          if(err) throw err;
          if(!data) {
              data = new db({
                  guildid: message.guild.id,
                  user: user.user.id,
                  content : [
                      {
                          moderator: message.author.id,
                          reason: reason
                      }
                  ]
              })
          } else {
              const obj = {
                    moderator: message.author.id,
                    reason: reason
              }
              data.content.push(obj)
          }
          data.save()
      });
      user.send(
          new Discord.MessageEmbed()
          .setDescription(`Vous avez été warn dans : ${message.guild.name}\nRaison : ${reason}`)
          .setColor(COLOR)
          .setFooter(`Senku.`, client.user.avatarURL())
      )
      message.channel.send(
          new Discord.MessageEmbed()
          .setDescription(`J'ai warn ${user} pour la raison : ${reason}`)
          .setColor(COLOR)
          .setFooter(`Senku.`, client.user.avatarURL())
      )
    },
  };