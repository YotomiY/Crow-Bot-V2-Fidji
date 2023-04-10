const Discord = module.require("discord.js")
const prefixModel = require("../../Modèles/antilink");

module.exports = {
  name: "antilink",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Tu as besoin de la permission `ADMINISTRATOR`.")
    }

    if (!args[0]) {
        return message.channel.send(`Veuillez spécifiez une action entre on/off.`)
    }
    if (args[0]==="On" || args[0]=== "on"){
      const data = await prefixModel.findOne({
        GuildID: message.guild.id
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id
        });

        message.channel.send(`L'antilink est désormais activé.`);

        let newData = new prefixModel({
          GuildID: message.guild.id
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`L'antilink est désormais activé.`);

        let newData = new prefixModel({
          GuildID: message.guild.id
        });
        newData.save();
      }
    } else if (args[0] === "off" || args[0] === "Off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id
        });

        return message.channel.send(`L'antilink est désormais désactivé.`);

      } else if (!data2) {
        return message.channel.send(`L'antilink a été désactivé.`)
      }
    }
  }
}
