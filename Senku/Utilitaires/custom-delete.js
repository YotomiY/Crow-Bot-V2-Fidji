const schema = require('../../Modèles/custom')

module.exports = { 
    name: 'custom-delete',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Tu as besoin de la permission \`MANAGE_CHANNELS\`.`)

        const name = args[0];

        if (!name) return message.channel.send(`Veuillez indiquez le nom.`)

        const data = await schema.findOne({ Guild: message.guild.id, Command: name })
        if(!data) return message.channel.send(`Cette commande custom n'existe pas.`)

        await schema.findOneAndDelete({ Guild: message.guild.id, Command: name})
        message.channel.send(`J'ai supprimé la commande custom : ${name}`)
    }
}