const { Client, Message, MessageEmbed, ReactionCollector } = require('discord.js');

module.exports = {
    name: 'embed',
    run: async(client, message, args) => {
		if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission `MANAGE_CHANNELS`.")
        const member = message.member
		let embedBeforeEdit = new MessageEmbed()
		.setDescription("** **")

		let msgEmbedforEditing = await message.channel.send(embedBeforeEdit)
		const msgawait = await message.channel.send("En train de charger...")
		await Promise.all(['✏️', '💬', '🕵️', '🔺', '🔳', '🕙', '🖼️', '🌐', '🔵', '↩️', '↪️', '📥', '✅', '📑'].map(r => msgawait.react(r)))
		await msgawait.edit(
			new MessageEmbed()
			.setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
            .setThumbnail()
            .setColor('#4c5df5')
			.setFooter("Pando Bots", client.user.avatarURL())
			.addField("`✏️`", "*Modifier le titre*", true)
			.addField("`💬`", "*Modifier la description*", true)
			.addField("`🕵️`", "*Modifier l'author*", true)
			.addField("`🔺`", "*Modifier le footer*", true)
			.addField("`🔳`", "*Ajouter un thumbnail*", true)
			.addField("`🕙`", "*Ajouter un timestamp*", true)
			.addField("`🖼️`", "*Ajouter une image image*", true)
			.addField("`🌐`", "*Ajouter une URL*", true)
			.addField("`🔵`", "*Modifier la couleur*", true)
			.addField("`↩️`", "*Ajouter un field*", true)
			.addField("`↪️`", "*Enlever un field*", true)
			.addField("`📥`", "*Copier un embed existant*", true)
			.addField("`✅`", "*Envoie l'embed*", true)
			.addField("`📑`", "*Modifier un message du bot avec cet embed*", true)
		)
		const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot;
		const filterMessage = (m) => m.author.id===message.author.id&&!m.author.bot
		const collectorReaction = await new ReactionCollector(msgawait, filterReaction)
		collectorReaction.on('collect', async reaction => {
			switch(reaction._emoji.name){
				case '✏️':
					reaction.users.remove(message.author)
					const msgQuestionTitle = await message.channel.send("Quel est votre titre ?")
					const title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionTitle.delete()
					title.delete()
					embedBeforeEdit.setTitle(title.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '💬':
					reaction.users.remove(message.author)
					const msgQuestionDescription = await message.channel.send("Quel est votre description ?")
					const description = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionDescription.delete()
					description.delete()
					embedBeforeEdit.setDescription(description.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🕵️':
					reaction.users.remove(message.author)
					const msgQuestionAuthor = await message.channel.send("Quel est votre auteur ?")
					const author = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionAuthor.delete()
					author.delete()
					embedBeforeEdit.setAuthor(author.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🔺':
					reaction.users.remove(message.author)
					const msgQuestionFooter = await message.channel.send("Quel est votre footer ?")
					const footer = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionFooter.delete()
					footer.delete()
					embedBeforeEdit.setFooter(footer.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🔳':
				  reaction.users.remove(message.author)
					const msgQuestionThumbnail = await message.channel.send("Quel est votre thumbnail ? (** Sous format https/http**)")
					const thumbnail = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content
					if(!thumbnail.includes('http') || !thumbnail.includes('https')) return message.channel.send("Lien invalide.")
					msgQuestionThumbnail.delete()
					message.delete()
					embedBeforeEdit.setThumbnail(thumbnail)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🕙':
					reaction.users.remove(message.author)
					embedBeforeEdit.setTimestamp()
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🖼️':
					reaction.users.remove(message.author)
					const msgQuestionImage = await message.channel.send("Quel est votre image ? (**Sous format https/http**)")
					const image = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first().content
					if(!image.includes('http') || !image.includes('https')) return message.channel.send("Lien invalide.")
					msgQuestionImage.delete()
					message.delete()
					embedBeforeEdit.setImage(image)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🌐':
					reaction.users.remove(message.author)
					const msgQuestionURL = await message.channel.send("Quel est votre URL ?")
					const url = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionURL.delete()
					url.delete
					embedBeforeEdit.setURL(url.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '🔵':
					reaction.users.remove(message.author)
					const msgQuestionColor = await message.channel.send("Quel est votre couleur ?")
					const color = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionColor.delete()
					color.delete()
					embedBeforeEdit.setColor(color.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '↩️':
					reaction.users.remove(message.author)
					const msgQuestionField = await message.channel.send("Quel est le titre du field")
					const titlefield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionField.delete()
					titlefield.delete()
					const msgQuestionDescField = await message.channel.send("Quel est la description du field")
					const descfield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionDescField.delete()
					descfield.delete()
					embedBeforeEdit.addField(titlefield.content, descfield.content)
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '✅':
					reaction.users.remove(message.author)
					const msgQuestionChannel = await message.channel.send("Veuillez spécifiez l'ID du salon.")
					const channel = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionChannel.delete()
					channel.delete()
					if(!message.guild.channels.cache.get(channel.content)) return message.channel.send("Identifiant invalide.")
					else (message.guild.channels.cache.get(channel.content)).send(embedBeforeEdit)
				break;
				case '↪️':
					reaction.users.remove(message.author)
					const msgQuestionFieldTitle = await message.channel.send("Quel est le titre du field ?")
					const field_title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionFieldTitle.delete()
					field_title.delete()
					let indexField ='';
					embedBeforeEdit.fields.map(field => {
						if (indexField !== '') return;
						if (field.name === field.title) indexField+=embedBeforeEdit.fields.indexOf(field)
					})
					if (indexField === '') return message.channel.send("Aucun field trouvé.").then(msg => msg.delete({timeout: 5000}))
					delete embedBeforeEdit.field[indexField];
					msgEmbedforEditing.edit(embedBeforeEdit)
				break;
				case '📥':
					reaction.users.remove(message.author)
					const msgChannelQuestionID = await message.channel.send("Quel est l'ID du salon ?")
					const channel_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgChannelQuestionID.delete()
					channel_id.delete()
					if(!Number(channel_id.content)||!message.guild.channels.cache.get(channel_id.content)) return message.channel.send("Salon invalide.").then(msg => msg.delete({timeout: 5000}))
					const msgQuestionMessageID = await message.channel.send("Quel est l'ID du message ?")
					const message_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionMessageID.delete()
					message_id.delete()
					if(!Number(channel_id.content)||!message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content)) return message.then("Message invalide.").then(msg => msg.delete({timeout: 5000}))
					const msg = message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content)
					if (msg.embeds.length === 0) return message.channel.send("Ce message n'est pas un embed.").then(msg => msg.delete({timeout: 5000}))
					msgEmbedforEditing.edit(msg.embeds)
				break;
				case '📑':
					reaction.users.remove(message.author)
					const msgQuestionChannel_ID = await message.channel.send("Veuillez spécifiez l'ID du salon.")
					const channel_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionChannel_ID.delete()
					channel_ID.delete()
					if(!Number(channel_ID.content)||!message.guild.channels.cache.get(channel_ID.content)) return message.channel.send("Salon invalide.").then(msg => msg.delete({timeout: 5000}))
					const msgQuestionMessage_ID = await message.channel.send(" Veuillez spécifiez l'ID du message.")
					const message_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first()
					msgQuestionMessage_ID.delete()
					message_ID.delete()
					if(!Number(message_ID.content)||!message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID)) return message.channel.send("Message invalide.").then(msg => msg.delete({timeout: 5000}))
					const msg1 = await message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID.content)
					msg1.edit(msgEmbedforEditing.embeds)
				break;
			}
		})
	}
}