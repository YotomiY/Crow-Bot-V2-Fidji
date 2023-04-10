const Discord = require('discord.js')
const Kitsu = require('kitsu.js')
const kitsu = new Kitsu()
const aq = require('animequote')
const fetch = require('node-fetch')

module.exports = {
    name: 'anime',
    run: async (client, message, args) => {

        if (!args[0]) return message.channel.send("Veuillez indiquez le nom de l'anime.")

        var search = message.content.split(/\s+/g).slice(1).join(" ")
        kitsu.searchAnime(search).then(async result => {
            if(result.length === 0) return message.channel.send("Aucun anime trouvé.")


        var anime = result[0]

        let embed = new Discord.MessageEmbed()
        .setTitle(anime.titles.french ? anime.titles.french : search)
        .setColor("GREEN")
        .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
        .setThumbnail(anime.posterImage.original, 100, 200)

        return message.channel.send(embed)
        })
    }
}