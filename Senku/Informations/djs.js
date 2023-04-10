const axios = require('axios')
module.exports = {
    name: 'djs',
    run: async (client, message, args) => {

        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args)}`

        if (!args.length) return message.channel.send(`Veuillez spécifiez la recherche. \`s!djs [Fonction]\``)

        axios.get(uri).then((embed) => {
            const { data } = embed

            if (data && !data.error) {
                message.channel.send({ embed: data })
            } else {
                message.reply(`Aucune recherche trouvé.`)
            }
        })
        .catch ((err) => {
            console.log(err)
        })
    }
}