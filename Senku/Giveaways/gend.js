const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'gend',
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission `MANAGE_CHANNELS`.")
        

        if(!args[0]) return message.channel.send("Veuillez indiquez l'ID du giveaway")

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
        if (!giveaway) return message.channel.send("Ce giveaway n'existe pas.")

        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
        .then(() => {
            message.channel.send(`Le giveaway va se terminer dans ${client.giveaways.options.updateCountdownEvery / 1000} secondes.`)
        }).catch (err => {
            console.log(err)
        })
    }
}