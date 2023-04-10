const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const rps = ['ciseaux','roche', 'papier'];
const res = ['<a:flowers:879190455110221864> Ciseaux','<a:eclaire:879190419311853588>  Roche :', '<a:etoile:879190887144505354> Papier'];

module.exports = {
    name: 'rpc',
    run: async (client, message, args) => {
        const bg = message.member
        let userChoice;
    if (args.length) userChoice = args[0].toLowerCase();
    if (!rps.includes(userChoice)) 
      return message.channel.send('Merci de spécifiez votre choix entre roche, papier, ciseaux');
    userChoice = rps.indexOf(userChoice);
    const botChoice = Math.floor(Math.random()*3);
    let result;
    if (userChoice === botChoice) result = '<a:livre:879190978429329510> C\'est une égalité.';
    else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = '<a:coupemj:879190485091115018> J\'ai gagné.';
    else result = `<a:coupemj:879190485091115018> **${message.member.displayName}** a gagné.`;
    const embed = new MessageEmbed()
      .setTitle(`${message.member.displayName} VS Senku`)
      .addField('Votre choix : ', res[userChoice], true)
      .addField('Mon choix : ', res[botChoice], true)
      .addField('Résultat : ', result, true)
      .setThumbnail(bg.user.avatarURL({dynamic: true}))
      .setColor("GREEN");
    message.channel.send(embed);
  }
};
