const disbut = require('discord-buttons');

const { Calculator } = require('weky');

module.exports = {
    name: 'calculator',
    run: async (client, message, args) => {
        await Calculator({
			message: message,
			embed: {
				title: 'Calculatrice | Pando Bots',
				color: 'GREEN',
				timestamp: true,
			},
			disabledQuery: 'La calculatrice est désactivé',
			invalidQuery: 'L\'équation est invalide',
			othersMessage: 'Seul <@{{author}}> peut user de la calculatrice',
		});
    }
}