module.exports = {
    name: 'clap',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Veuillez insérez du texte.")

        message.channel.send(args.join(" ").replace(/ /g, " 👏 "))
    }
}