const Discord = module.require("discord.js");

module.exports = {
  name: "vapor",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Veuillez spécifiez le texte.");
    }
    let msg = "";
    for (let i = 0; i < args.length; i++) {
      msg += args[i].toUpperCase().split("").join(" ") + " ";
    }
    message.channel.send(msg);
  },
};