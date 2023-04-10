module.exports = {
    name: 'say',
    run (client, message, args) {
        const messageàdire = args.slice(0).join(" ")

        if (!messageàdire) return message.channel.send(`Merci de spécifiez le message.`)

        message.delete()

        message.channel.send(messageàdire)
    }
}