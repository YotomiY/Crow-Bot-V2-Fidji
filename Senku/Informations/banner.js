const { Client, MessageEmbed } = require("discord.js");
const axios = require("axios")

module.exports = {
  name: "banner",
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.member || message.guild.members.cache.get(args[0])

    axios.get(`https://discord.com/api/users/${user.id}`, {
      headers: {
        Authorization: `Bot ${client.token}`
      },
    })
    .then((res) => {
      const { banner } = res.data;

      if (banner) {
        const extension = banner.startsWith("a_") ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;

        const embed = new MessageEmbed()
        .setTitle(`Voici la bannière de ${user.user.tag}`)
        .setImage(url)
        .setColor("GREEN");
        
        message.channel.send(embed)
        } else {
          message.channel.send({ content: `**${user.tag}** has no banner.`})
        }
    })
}
}
