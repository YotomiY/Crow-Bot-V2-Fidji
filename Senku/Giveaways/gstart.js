const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'gstart',
    run: async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission `MANAGE_CHANNELS`.")
        const config = require('../../config.json')
        client.config = config;
        const salon = message.mentions.channels.first() 

        if (!salon) return message.channel.send("Veuillez spécifiez le salon.")

        const duration = args[1]

        if (!duration) return message.channel.send("Veuillez spécifiez le temps.")

        const winners = args[2]

        if (!winners) return message.channel.send("Veuillez spécifiez le nombre de gagnants.")

        const prix = args.slice(3).join(" ")

        if (!prix) return message.channel.send("Veuillez spécifiez le prix.")

        let hostedBy = message.author;

        client.giveaways.start(salon, {
            time : ms(duration),
            prize : prix,
            winnerCount : parseInt(winners),
            hostedBy : client.config.hostedBy ? message.author: null,
            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : ''),
                giveawayEnd: (client.config.everyoneMention ? "@everyone\n\n" : ''),
            },
            timeRemaining: "Temps Restant **{duration}**",
            inviteToParticipate : "Réagissez avec <:giveaway:862823125448523806> afin de participer.",
            winMessage : "Félicitations {winner}, vous avez gagné {prize}",
            embedFooter : "Nouveau Giveaway.",
            noWinner : "Je n'ai pas pu déterminé un gagnant.",
            hostedBy: `${message.author}`,
            winners: "winners",
            endedAt : "Fini dans",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                plurals: false
            }
        }).then(() => {
            message.channel.send(`Le giveaway a commencé dans le salon ${salon}`)
        })
    }
}