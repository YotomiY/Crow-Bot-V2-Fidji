const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'serverinfo',
    run: async(client, message, args) => {
        let vérification = {
            "NONE":"Aucun",
            "LOW": "Faible",
            "MEDIUM": "Moyen",
            "HIGH": "(╯°□°）╯︵  ┻━┻ (Haut)",
            "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Très haut)"
        }

        message.channel.send(
            new MessageEmbed()
            .setColor(COLOR)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setFooter(`Senku.`, client.user.avatarURL())
            .addField(`\`👑\`Owner :`, `${message.guild.owner}`, true)
            .addField(`> \`📜\` Tous les salons :`, `${message.guild.channels.cache.size}`, true)
            .addField(`> \`🔊\` Salon vocaux :`, `${message.guild.channels.cache.filter((c) => c.type === "voice").size}`, true)
            .addField(`> \`✏️\` Salon textuels :`, `${message.guild.channels.cache.filter((c) => c.type === "text").size}`, true)
            .addField(`> \`👥\` Tous les membres :`, `${message.guild.memberCount}`, true)
            .addField(`> \`🔮\` Humains :`, `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
            .addField(`> \`🤖\` Robots :`, `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField(`> \`🎉\` Crée le : `, `${moment(message.guild.createdAt).format("DD/MM/YYYY")}`, true)
            .addField(`> \`❓\` Vous l'avez rejoint le : `, `${moment(message.member.joinedAt).format("DD/MM/YYYY")}`, true)
            .addField(`> \`🛡️\` Niveaux de vérification :`, `${vérification[message.guild.verificationLevel]}`, true)
            .addField(`> <a:boost_nitro:881309806739202088> Boosts :`, `${message.guild.premiumSubscriptionCount}`, true)
            .addField(`> <a:boost:881309908178436146> Niveaux de boosts :`, `${message.guild.premiumTier}`, true)
            .addField(`> \`🗂️\` Emojis`, `${message.guild.emojis.cache.size > 10 ? `${message.guild.emojis.cache.map(x => `${x}`).slice(0,20 )} et **${message.guild.emojis.cache.size - 20}** autres emojis ` : message.guild.emojis.cache.map(x => `${x}`)}`, true)
        )
    }
}