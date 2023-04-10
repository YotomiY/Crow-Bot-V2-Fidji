const Discord = require("discord.js");
const request = require("request");

module.exports = {
    name:'meme',
    run: async(client, message, args) => {
	try {
		// This is a command purely for memes
		request("https://some-random-api.ml/meme", (error, _response, body) => {
			if (error) {
				return message.channel
					.send("Une erreur est survenue")
					.then(() => console.error(error.message));
			}

			const json = JSON.parse(body);
			const { id, image, caption, category } = json;

			const emb = new Discord.MessageEmbed();
			emb.setDescription(`${caption} - ${category} #${id}`);
			emb.setColor("GREEN");
			emb.setImage(image);

			message.channel.send(emb);
		});
	} catch (e) {
		console.error(e.message);
	}
}
};