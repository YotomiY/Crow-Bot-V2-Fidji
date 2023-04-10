module.exports = {
    name: 'mplay',
    run: async (client, message, args) => {

        if (!message.member.voice.channel) return message.channel.send(`Veuillez rejoindre un salon vocal.`)

        const music = args.join(" ")

        if (!music) return message.channel.send(`Veuillez spécifiez la musique.`)

        client.distube.play(message, music)
    }
}