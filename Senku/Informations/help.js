const Discord = require('discord.js');

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
module.exports = {
    name: 'help',
run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setDescription("Séléctionnez votre menu")
        .setColor("YELLOW")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())

        const embed1 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setTitle(`📚 Commandes généraux`)
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .addField(`\`+addemoji <emoji>\``, `*Permet d'ajouter l'emoji voulu*`)
        .addField(`\`+afk <raison>\``, `*Met le membre en mode afk*`)
        .addField(`\`+custom <nom> <réponse>\``, `*Crée une commande custom*`)
        .addField(`\`+custom-delete <no>\``, `*Efface une commande custom*`)
        .addField(`\`+custom-list\``, `*Affiche les commandes customs*`)
        .addField(`\`+delchannel <salon>\``, `*Supprime un salon*`)
        .addField(`\`+deleterole <role>\``, `*Supprime un rôle*`)
        .addField(`\`+embed\``, `*Crée un menu interactif d'embed*`)
        .addField(`\`(prefix)newrole <couleur> <nom>\``, `*Crée un nouveau rôle*`)
        .addField(`\`+rr-add <emoji> <role>\``, `*Crée un nouvea react-role*`)
        .addField(`\`+rr-set\``, `*Envoie le react-role*`)
        .addField(`\`+text <nom>\``, `*Crée un salon textuel*`)
        .addField(`\`+topic <description>\``, `*Change le topic du salon*`)
        .addField(`\`+translate <language> <texte>\``, `*Traduit le texte*`)
        .addField(`\`+voice <nom>\``, `*Crée un salon vocal*`)
        .addField(`\`+set-ticket <salon>\``, `*Crée un système de ticket avec réaction*`)
        .addField(`\`+ticket-add <membre>\``, `*Ajoute un membre au ticket*`)
        .addField(`\`+ticket-remove <membre>\``, `*Enlève un membre du ticket*`)
        .addField(`\`+ticket-close\``, `*Ferme un ticket*`)
        .addField(`\`+backup create (**Bientôt Disponible avec le premium**)\``, `*Crée un backup*`)
        .addField(`\`+backup load <ID> (**Bientôt Disponible avec le premium**)\``, `*Load le backup*`)
        .addField(`\`+backup info <ID> (**Bientôt Disponible avec le premium**)\``, `*Envoie des informations sur le backup voulu.*`)
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))

        const embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setTitle(`🎉 Commandes Giveaway`)
        .addField(`\`+gstart <salon> <temps> <nb. de gagnants> <prix>\``, `*Commence un giveaway.*`)
        .addField(`\`+greroll <ID>\``, `*Reroll un giveaway.*`)
        .addField(`\`+gend <ID>\``, `*Termine un giveaway.*`)
        .addField(`\`+greroll\``, `*Affiche tous les giveaway actifs.*`)

        const embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setTitle(`:test_tube: Commandes informations`)
        .addField(`\`+addbot\``, `*Envoie le lien d'invitation du bot*`)
        .addField(`\`+avatar [mention/ID]\``, `*Envoie l'avatar du bot*`)
        .addField(`\`+banlist\``, `*Affiche tous les membres bannis*`)
        .addField(`\`+banner [membre]\``, `*Affiche la bannière*`)
        .addField(`\`+calculator\``, `*Affiche un menu interactif d'une calculatrice*`)
        .addField(`\`+messages [membre]\``, `*Affiche le nombre de message envoyés*`)
        .addField(`\`+botinfo\``, `*Envoie les stats du bot*`)
        .addField(`\`+channelinfo [salon]\``, `*Envoie les informations sur un salon*`)
        .addField(`\`+country <pays>\``, `*Envoie des informations sur un pays*`)
        .addField(`\`+djs <recherche>\``, `*Envoie une recherche des documentations de discord.js*`)
        .addField(`\`+emojilist\``, `*Liste tous les emojis du serveur*`)
        .addField(`\`+guildicon\``, `*Envoie la photo du serveur*`)
        .addField(`\`+help\``, `*Affiche mes commandes*`)
        .addField(`\`+identifiant [membre]\``, `*Affiche l'identifiant.*`)
        .addField(`\`+ping\``, `*Affiche la vitesse du bot*`)
        .addField(`\`+serverinfo\``, `*Affiche des informations sur le serveur*`)
        .addField(`\`+support\``, `*Envoie le lien d'invitation du serveur support*`)
        .addField(`\`+uptime\``, `*Affiche l'uptime du bot*`)
        .addField(`\`+userinfo [membre]\``, `*Affiche des informations sur l'utilisateur*`)
        

        const embed4 = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setTitle(`➕ Commandes niveaux`)
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .addField(`\`+rank [membre]\``, `*Affiche le niveau*`)
        .addField(`\`+leaderboard\``, `*Affiche le classement de niveaux.*`)
        .addField(`\`+addxp <membre> <montant>\``, `*Ajoute un montant d'xp*`)
        .addField(`\`+removexp <membre> <montant>\``, `*Enlève un montant d'xp*`)
        .addField(`\`+addlevel <membre> <montant>\``, `*Ajoute un niveau*`)
        .addField(`\`+removelevel <membre> <montant>\``, `*Enlève un niveau*`)
        .addField(`\`+reset [membre]\``, `*Reset le membre*`)

        const embed5 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setTitle(`🎶 Commandes musique`)
        .addField(`\`+mplay <musique>\``, `*Joue une musique*`)
        .addField(`\`+mloop\``, `*Loop la musique actuelle*`)
        .addField(`\`+mleave\``, `*Quitte le salon vocal*`)
        .addField(`\`+mpause\``, `*Pause la musique actuelle.*`)
        .addField(`\`+mskip\``, `*Skip la musique actuelle à la prochaine*`)
        .addField(`\`+mqueue\``, `*Affiche la queue actuelle*`)
        .addField(`\`+mstop\``, `*Arrête la musique actuelle*`)
        .addField(`\`+mstoploop\``, `*Arrête le loop*`)
        .addField(`\`+mvolume <volume>\``, `*Gestionne le volume*`)
        .addField(`\`+mjoin\``, `*Rejoint le salon vocal*`)
        

        const embed6 = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setTitle(`📜 Commandes Protection`)
        .addField(`\`+antibot <on/off>\``, `*Active l'antibot*`)
        .addField(`\`+antiraid <on/off>\``, `*Active l'antiraid*`)
        .addField(`\`+antilink <on/off>\``, `*Active l'antilien*`)
        .addField(`\`+clearwarns <membre>\``, `*Supprime tous les warns.*`)
        .addField(`\`+idban <membre>\``, `*Ban un membre sans le prévenir*`)
        .addField(`\`+lock-all <on/off>\``, `*Lock tout le serveur*`)
        .addField(`\`+lock [salon]\``, `*Lock le salon demandé*`)
        .addField(`\`+owner-list\``, `*Affiche la liste des owners*`)
        .addField(`\`+owner\``, `*Ajoute un membre dans les owners*`)
        .addField(`\`+unowner\``, `*Enlève un membre des owners*`)
        .addField(`\`+remove-warn\``, `*Enlève un warn*`)
        .addField(`\`+setprefix\``, `*Modifie le prefix.*`)
        .addField(`\`+rstprefix\``, `*Reset mon prefix*`)
        .addField(`\`+unlock\``, `*Unlock le salon demandé*`)
        .addField(`\`+warn <membre> <raison>\``, `*Warn le membre désiré*`)
        .addField(`\`+warns <membre>\``, `*Affiche les warns*`)
        .addField(`\`+wl-list\``, `*Affiche la whitelist du serveur*`)
        .addField(`\`+wl\``, `*Ajoute un membre dans la whitelist*`)
        .addField(`\`+unwl\``, `*Enlève un membre de la whitelist*`)
        .addField(`\`(prefix)bl-list\``, `*Affiche la blacklist du serveur*`)
        .addField(`\`+bl\``, `*Ajoute un membre dans la blacklist (le prive de toutes mes commandes sur le serveur, et le ban directement du serveur.)*`)
        .addField(`\`+unbl\``, `*Enlève un membre de la blacklist*`)

        const embed7 = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setTitle(`🛡 Commandes Modération`)
        .addField(`\`+addrole <membre> <role>\``, `*Ajoute un rôle*`)
        .addField(`\`+ban <membre> [raison]\``, `*Bannis le membre*`)
        .addField(`\`+clear <1-99>\``, `*Supprime un nombre de messages*`)
        .addField(`\`+clone [salon\``, `*Clone le salon.*`)
        .addField(`\`+delrole <membre> <role>\``, `*Enlève un rôle*`)
        .addField(`\`+derank <membre>\``, `*Enlève tous les rôles*`)
        .addField(`\`+dm <membre> <message>\``, `*DM le membre*`)
        .addField(`\`+kick <membre> [raison\``, `*Expulse le membre*`)
        .addField(`\`+massiverole <role>\``, `*Ajoute un rôle  tous les membres*`)
        .addField(`\`+nickname <membre> <nom>\``, `*Donne un nickname*`)
        .addField(`\`+nuke [salon]\``, `*Recrée le salon*`)
        .addField(`\`+resetnickname <membre>\``, `*Reset le nickname.*`)
        .addField(`\`+slowmode <temps>\``, `*Ajuste le slowmode*`)
        .addField(`\`+unban <membre>\``, `*Débanni le membre*`)
        .addField(`\`+unmassiverole <role>\``, `*Enlève un rôle à tous les membres*`)
        .addField(`\`+vkick <membre>\``, `*Expule le membre du salon vocal*`)
        .addField(`\`+vmove <membre>\``, `*Move le membre vers le salon vocal de l'auteur.*`)

        const embed8 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setTitle(`🎊 Commandes Fun`)
        .addField(`\`+8ball <question>\``, `*Envoie une réponse aléatoire*`)
        .addField(`\`+anime <nom>\``, `*Envoie des informations sur un anime*`)
        .addField(`\`+betrayal\``, `*Démarre une partie de betrayal.io*`)
        .addField(`\`+bloc <texte>\``, `*Envoie un message orangée.*`)
        .addField(`\`+chess\``, `*Démarre une partie d'échec*`)
        .addField(`\`+clap <message>\``, `*Envoie un clap a chaque mot*`)
        .addField(`\`+clyde <message>\``, `*Envoie un message de clyde*`)
        .addField(`\`+emojify <texte>\``, `*Envoie le texte en emoji*`)
        .addField(`\`+fishing\``, `*Démarre une partie de fishing.io*`)
        .addField(`\`+flip <texte>\``, `*Renvoie le texte en inversé*`)
        .addField(`\`+gay [membre]\``, `*Affiche le pourcentage de gay d'un membre*`)
        .addField(`\`+kill <membre>\``, `*Tues le membres.*`)
        .addField(`\`+kiss <membre>\``, `*Embrasse le membre*`)
        .addField(`\`+meme\``, `*Envoie un meme*`)
        .addField(`\`+pokemon <pokemon>\``, `*Fais une recherche sur un pokemon*`)
        .addField(`\`+poker\``, `*Démarre une partie de poker*`)
        .addField(`\`+pp [membre]\``, `*Envoie la taille du penis*`)
        .addField(`\`+pprandom\``, `*Envoie une photo de profil aléatoire.*`)
        .addField(`\`+rpc <choix>\``, `*Joue  roche paper ciseaux*`)
        .addField(`\`+say <message>\``, `*Dis un message*`)
        .addField(`\`+ship <membre>\``, `*Envoie le taux d'amour*`)
        .addField(`\`+slap <membre>\``, `*Gifle un membre*`)
        .addField(`\`+snake\``, `*Démarre une partie de snake*`)
        .addField(`\`+trigger [membre]\``, `*Envoie l'avatar en mode triggered*`)
        .addField(`\`+vapor <texte>\``, `*Envoie un texte en espacée*`)
        .addField(`\`+wasted [membre]\``, `*Envoie l'avatar en mode wasted.*`)
        .addField(`\`+wide <texte>\``, `*Envoie un texte en wide*`)
        .addField(`\`+ytb-t\``, `*Démarre une partie de youtube-together*`)

        const embed9 = new Discord.MessageEmbed()
        .setColor("WHITE")
        .setDescription(`Les charactères **<>** sont obligatoires, et **[]** non obligatoires.`)
        .setFooter(`© 2021 - Pando Bots`, client.user.avatarURL())
        .setThumbnail(message.member.user.avatarURL({dynamic: true}))
        .setTitle(`🔔 Commandes Développeur`)
        .addField(`\`+guildbl <ID>\``, `*Blacklist un serveur*`)
        .addField(`\`+guildleave <ID>\``, `*Quitte le serveur*`)
        .addField(`\`+guildunbl <ID>\``, `*Unblacklist le serveur*`)
        .addField(`\`+premium <membre>\``, `*Ajoute un membre en mode premium*`)
        .addField(`\`+serverlist\``, `*Envoie la liste de mes serveurs*`)
        .addField(`\`+setname <nom>\``, `*Change mon pseudonyme*`)
        .addField(`\`+setpic <URL>\``, `*Change ma photo de profil.*`)
        .addField(`\`+setstatus <type> <contenu>\``, `*Change mon statut*`)


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Général')
        .setEmoji('878733697703104552')
        .setValue('option1')
        .setDescription('Affiche l\'ensemble de mes commandes généraux')

        let option2 = new MessageMenuOption()
        .setLabel('Giveaway')
        .setEmoji('878366085970276372')
        .setValue('option2')
        .setDescription('Affiche les commandes en rapport avec les giveaways')

        let option3 = new MessageMenuOption()
        .setLabel('Informations')
        .setEmoji('🧪')
        .setValue('option3')
        .setDescription('Affiche mes commandes informatives')

        let option4 = new MessageMenuOption()
        .setLabel('Niveaux')
        .setEmoji('878389496847159296')
        .setValue('option4')
        .setDescription('Affiche mes commandes avec le système de niveau')

        let option5 = new MessageMenuOption()
        .setLabel('Musique')
        .setEmoji('879455064585011270')
        .setValue('option5')
        .setDescription('Affiche mes commandes musique')

        let option6 = new MessageMenuOption()
        .setLabel('Protection')
        .setEmoji('879463781867077664')
        .setValue('option6')
        .setDescription('Affiche les commandes protection/antiraid')


        let option7 = new MessageMenuOption()
        .setLabel('Modération')
        .setEmoji('878407781047214130')
        .setValue('option7')
        .setDescription('Affiche mes commandes modération')

        let option8 = new MessageMenuOption()
        .setLabel('Fun')
        .setEmoji('879193423402373121')
        .setValue('option8')
        .setDescription('Affiche mes commandes fun')


        let option9 = new MessageMenuOption()
        .setLabel('Développeur')
        .setEmoji('878336549748633601')
        .setValue('option9')
        .setDescription('Affiche les commandes que le seul le développeur peut utiliser')

        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Veuillez sélectionnez votre menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5, option6, option7, option8, option9)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 900000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        if(b.values[0] == "option7") {
            Sendmenu.edit(embed7, select)
        }

        if(b.values[0] == "option8") {
            Sendmenu.edit(embed8, select)
        }

        if(b.values[0] == "option9") {
            Sendmenu.edit(embed9, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit(":loading:Votre temps est désormais écoulé.")
    })

}
}