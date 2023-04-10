const discord = require('discord.js')
const { MessageActionRow, MessageMenu, MessageMenuOption } = require("discord-buttons")
let owner = require("../../config.json").owner
module.exports = {
    name: 'rrtest',
run: async (Client, message, args) => {
    if (message.author.id !== owner) return message.channel.send(`You aren't the bot owner.`)

    const opt1 = new MessageMenuOption().setValue('DR1').setLabel("Updates").setEmoji("🚀").setDescription("Please click to get the Updates role")
    const opt2 = new MessageMenuOption().setValue('DR2').setLabel("Annonces").setEmoji("🔔").setDescription("Please click to get the Announcement role")
    const opt3 = new MessageMenuOption().setValue('DR3').setLabel("Giveaways").setEmoji("🔰").setDescription("Please click to get the Giveaways role")
    const opt4 = new MessageMenuOption().setValue('DR4').setLabel("Statut").setEmoji("🎉").setDescription("Please click to get the Status role")

    const menu = new MessageMenu().setPlaceholder('Click to select your role').setID('DR').addOptions([opt1, opt2, opt3, opt4])
    const Row = new MessageActionRow().addComponent(menu)
    message.channel.send("Please select your roles", Row)

}
}