const { Client, Message, MessageEmbed } = require('discord.js');
const { rowTransformDependencies } = require('mathjs');
const moment = require('moment')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'userinfo',
    run: async(client, message, args) => {
        const member = message.mentions.members.first() ||  message.member

        const nick = member.nickname === null ? "Aucun nickname" : member.nickname

        const statut = member.user.presence.status.toUpperCase()

        const roles = member.roles.cache.filter((roles)=>roles.id!==message.guild.id).map((role)=>role.toString())

        let bot = {
            "true": "Oui, cet utilisateur est un bot",
            "false": "NOn, cet utilisateur est un humain.",
        }

        var flags = {
            "": "Cet utilisateur n'a aucun badge.",
            "DISCORD_EMPLOYEE": "<:staff:878480377503682591>",
            "DISCORD_PARTNER": "<:2_:878480401226682388>",
            "BUGHUNTER_LEVEL_1": "<:hunter2:878075767819497562>",
            "BUGHUNTER_LEVEL_2": "<:hunter_level_2:878480470940205128>",
            "HYPESQUAD_EVENTS": "<:chefhypesquad:878480509485842482>",
            "HOUSE_BRILLIANCE": "<:brilliance:878480533934460938>",
            "HOUSE_BRAVERY": "<:bravery:878480560048209980>",
            "HOUSE_BALANCE": "<:balance:878480589525757952>",
            "EARLY_SUPPORTER": "<:soutien:878480617891844106>",
            "VERIFIED_BOT": "<:bot2:878480656336822312>",
            "VERIFIED_DEVELOPER": "<a:dev:878336549748633601>",
        };

        message.channel.send(
            new MessageEmbed()
            .setAuthor(`À propos ...`, member.user.avatarURL({dynaimc: true}))
            .setColor(COLOR)
            .setFooter("Senku.", client.user.avatarURL())
            .addField(`> \`🛡️\` Pseudonyme`, `・${member.user.username}`, true)
            .addField(`> \`👥\` Tag`, `・#${member.user.discriminator}`, true)
            .addField(`> \`🧾\` ID`, `・${member.id}`, true)
            .addField(`> \`📚\` Avatar`, `・[Lien](${member.user.avatarURL({dynamic: true})})`, true)
            .addField(`> \`✏️\` Nickname`, `・${nick}`, true)
            .addField(`> <a:online:878479969091715072> Statut`, `・${statut}`, true)
            .addField(`> \`📜\` Rôles`, `・${roles}`, true)
            .addField(`> \`🔮\` Badges`, `・${flags[member.user.flags.toArray().join(" ")]}`, true)
            .addField(`> \`🤖\` Bot ?`, `・${bot[member.user.bot]}`)
            .addField(`> \`🎉\` Crée le : `, `・${moment(member.createdAt).format("DD/MM/YYYY")}`, true)
            .addField(`> \`❓\` À rejoint le serveur le : `, `・${moment(member.joinedAt).format("DD/MM/YYYY")}`, true)
        )
    }
}