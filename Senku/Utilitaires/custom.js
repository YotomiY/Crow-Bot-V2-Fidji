const schema = require('../../Modèles/custom')
const { ReactionCollector } = require('discord.js')
module.exports = { 
    name: 'custom',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_CHANNELS\`.`)

        const name = args[0]; const response = args.slice(1).join(" ")

        if (!name) return message.channel.send(`Merci de spécifiez le nom de la commandde custom`)

        if (!response) return message.channel.send(`Merci d'entrer une réponse à la commande custom.`)

        const data = await schema.findOne({ Guild: message.guild.id, Command: name })
        if(data) return message.channel.send(`Cette commande custom existe déjà.`)

        
        const newData = new schema({
            Guild: message.guild.id,
            Command: name,
            Response: response,
        })
        await newData.save()
        message.channel.send(`J'ai crée la commande custom : ${name}`)
    }
}