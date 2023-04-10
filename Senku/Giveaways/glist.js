const Discord = require('discord.js');
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'glist',
    run: async(client, message, args) => {
        let giveaways = client.giveaways.giveaways.filter(g => g.guildID === `${message.guild.id}` && !g.ended)
        if (!Array.isArray(giveaways)) return message.channel.send('Il n\'y a aucun giveaway actif.')
        let embed = new Discord.MessageEmbed()
            .setTitle("Giveaway présentement actifs.")
            .setColor(COLOR)
            .setFooter("Senku.", client.user.displayAvatarURL())
            .setTimestamp()
        await Promise.all(giveaways.map(async (x) => {
            if (x.extraData) {
                const guild = client.guilds.cache.get(x.extraData.server)
                const channel = guild.channels.cache
                    .filter((channel) => channel.type === 'text')
                    .first()
            } else {
                embed.addField(`<:giveaway:878366085970276372> Giveaways :`, `**・Prix :** **[${x.prize}](https://discord.com/channels/${x.guildID}/${x.channelID}/${x.messageID})\n・A commencé : \`${new Date(x.startAt)}\`**\n**・Fini dans :** \`${new Date(x.endAt)}\`\n**・Geré par :** ${x.hostedBy}`)
            }
        }));
        message.channel.send(embed)
    }
}