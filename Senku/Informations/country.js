const { Client, Message, MessageEmbed } = require('discord.js');
const COLOR = require('../../config.json').embedcolor


const pop = require("popcat-wrapper");
module.exports = {
    name: 'country',
    run: async(client, message, args) => {
        const text = args.slice(0).join(" ")
        if (!text) return message.channel.send(`Veuillez indiquez un pays.`)
        const c = await pop.country(text)
    const embed = new MessageEmbed()
    .setTitle(c.name)
    .setColor(COLOR)
    .setThumbnail(c.flag)
    .addField("Nom", c.name, true)
    .addField("Capitale", c.capital, true)
    .addField("Superficie", c.area, true)
    .addField("Population", c.population, true)
    .addField("Région", c.region, true)
    .addField("Domaine", c.domain, true)
    .addField("Argent", `${c.currency.name} (${c.currency.short})\nSymbole: ${c.currency.symbol}`)

    message.channel.send(embed)
    }
}