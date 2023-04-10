const discord = require('discord.js')
const { MessageActionRow, MessageMenu, MessageMenuOption } = require("discord-buttons")
let owner = require("../../config.json").owner
module.exports = {
    name: 'verif',
run: async (Client, message, args) => {
    if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

    const opt1 = new MessageMenuOption().setValue('bg1').setLabel("Vérification").setEmoji("🌸").setDescription("Click to pass the verification")
    

    const menu = new MessageMenu().setPlaceholder('Click to pass the verification').setID('bg').addOptions([opt1])
    const Row = new MessageActionRow().addComponent(menu)
    message.channel.send("Please pass the verification", Row)

}
}