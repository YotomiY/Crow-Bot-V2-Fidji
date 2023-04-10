const Discord = require('discord.js')
const COLOR = require('../../config.json').embedcolor
module.exports = {
    name: 'set-ticket',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu as besoin de la permission `MANAGE_CHANNELS`.")

        const yellowTeamEmoji = "🎫"
        
        
        let embed = new Discord.MessageEmbed()
        .setFooter(client.user.username, client.user.avatarURL())
        .setTitle("<:ticket:878450889285849129> Tickets")
        .setColor(COLOR)
        .addField("`🎫`", "*Crée un nouveau ticket*", true)

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(yellowTeamEmoji)
        

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.emoji.name === "🎫") {
            reaction.users.remove(message.author)
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return;
            if (!reaction.message.guild) return;
            message.guild.channels.create(`📜・ticket・${message.author.id}`, {
                permissionOverwrites: [
                    {
                    id: message.author.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                }
            ],
            type: "text"
            }).then(async channel => {
                channel.send(`${message.author}, bienvenue dans votre ticket.`);
            })

        }
        })
    }
}
