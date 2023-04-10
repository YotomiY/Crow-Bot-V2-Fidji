const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    run: async (client, message, args) => {
        const member = message.member
        const contenu = args.slice(1).join(" ")

        if (!contenu) return message.channel.send("Merci d'indiquer la question auquel je dois répondre.")
        var réponse = [
            "🎱 Oui.",
            "🎱 Non.",
            "🎱 Jamais.",
            "🎱 Je ne pense pas.",
            "🎱 Certainement.",
            "🎱 Absolument.",
            "🎱 Il n'y a aucun doute.",
            "🎱 Ne rêve pas trop.",
            "🎱 Je sais pas.",
            "🎱 Haha, bien sûr.",
            "🎱 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, jsp.",
            "🎱 Je préfère ne pas réponre.",
            "🎱 C'est logique que oui.",
            "🎱 Alors, **NON**.",
            "🎱 Je m'en fou complètement.",
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor("GREEN")
        .setThumbnail(member.user.avatarURL({dynamic: true}))

        message.channel.send(embed)
    } 
}