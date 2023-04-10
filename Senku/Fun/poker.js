const Discord = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: "poker",
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Merci de rejoindre un salon vocal.`)
        const channel = message.member.voice.channel

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send(`Une erreur est survenue`)

            return message.channel.send("Cliquez sur le lien afin de commencer.\nhttps://discord.com/invite/" + invite.code)
        })
    }
}