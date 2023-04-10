module.exports = {
    name: "ping",
    run: async (client, message, args) => {
        message.channel.send(`🧪 **Mon ping est de : ${Math.round(client.ws.ping)} ms !**`)
    }
}