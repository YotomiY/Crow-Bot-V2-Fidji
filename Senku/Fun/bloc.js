const Discord = require('discord.js')

module.exports = {
    name: "bloc",
    run: async (client, message, args) => {
        const text = args.join(" ")
        if (!text) return message.channel.send("Veuillez spécifiez le texte.")

        message.channel.send(`\`\`\`fix\n${text}\n\`\`\``)
    }
}