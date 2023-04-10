const config = require("../../config.json");
const canvacord = require("canvacord");
const Discord = require("discord.js");
const prefix = config.prefix;
const embedcolor = config.embedcolor;
const maximum_leaderboard = config.maximum_leaderboard; //maximum 50 users for the leaderboard!

module.exports = function (client) {
    const description = {
        name: "RANKING",
        filename: "ranking.js",
        version: "2.0"
    }
    //log that the module is loaded
    //voice state update event to check joining/leaving channels
    client.on("message", async (message) => {

        if (message.author.bot || !message.guild) return;
        //get the key of the user for this guild
        const key = `${message.guild.id}-${message.author.id}`;
        /**
         * databasing
         * @info General databasing, which sets the userinto the database if he types something
         */
        function databasing(rankuser) {
            //if(rankuser && rankuser.bot) return console.log("GOTTA IGNORE BOT")
            client.points.ensure(rankuser ? `${message.guild.id}-${rankuser.id}` : `${message.guild.id}-${message.author.id}`, {
                user: rankuser ? rankuser.id : message.author.id,
                usertag: rankuser ? rankuser.tag : message.author.tag,
                xpcounter: 1,
                guild: message.guild.id,
                points: 0,
                neededpoints: 400,
                level: 1,
                oldmessage: "",
            });
            client.points.set(rankuser ? `${message.guild.id}-${rankuser.id}` : `${message.guild.id}-${message.author.id}`, rankuser ? rankuser.tag : message.author.tag, `usertag`); //set the usertag with EVERY message, if he has nitro his tag might change ;)
            client.points.set(message.guild.id, 1, `setglobalxpcounter`); //set points to 0
        }
        databasing();

        /**
         * ARGUMENTS
         * @info General arguments for the Whole message Event
         */
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();


        /**
         * COMMANDS
         * @info if a message starts with the prefix, then run it
         */
        if (message.content.startsWith(prefix)) {

            switch (command) {
                case `rank`:
                    rank(message.mentions.users.first()||message.author);
                    break;
                    /////////////////////////////////
                case `leaderboard`:
                case `lb`:
                    leaderboard();
                    break;
                    /////////////////////////////////
                case `addxp`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Il te manque la permission `MANAGE_GUILD` et `ADMINISTRATOR`.")
                    addxp();
                    break;
                    /////////////////////////////////
                    /////////////////////////////////
                case `removexp`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Il te manque la permission `MANAGE_GUILD` et `ADMINISTRATOR`.")

                    removexp();
                    break;
                    /////////////////////////////////
                case `addlevel`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Il te manque la permission `MANAGE_GUILD` et `ADMINISTRATOR`.")

                    addlevel();
                    break;
                    /////////////////////////////////
                case `removelevel`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Il te manque la permission `MANAGE_GUILD` et `ADMINISTRATOR`.")

                    removelevel();
                    break;
                    /////////////////////////////////
                case `reset`:
                    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Il te manque la permission `MANAGE_GUILD` et `ADMINISTRATOR`.")

                    reset();
                    break;
                    /////////////////////////////////
            }
            return;
        }


        /**
         * Anti double messages
         * @info if the old message is the same as the message before: SKIP
         */
        function anti_double_messages() {
            const oldmessage = client.points.get(key, `oldmessage`);
            if (oldmessage.toLowerCase() === message.content.toLowerCase().replace(/\s+/g, '')) {
                return console.log(".");
            }
            client.points.set(key, message.content.toLowerCase().replace(/\s+/g, ''), `oldmessage`); //setting the new old message
        }
        anti_double_messages();



        /**
         * Giving Ranking Points
         * @info adding a random number rounded, between 1 and 5
         */
        function Giving_Ranking_Points(thekey, maxnumber) {
            let setglobalxpcounter = client.points.get(message.guild.id, "setglobalxpcounter")
            if (!maxnumber) maxnumber = 5;
            var randomnum = ( Math.floor(Math.random() * Number(maxnumber)) + 1 ) * setglobalxpcounter;
            randomnum *= Number(client.points.get(key, `xpcounter`));
            randomnum = Number(Math.floor(randomnum));

            const curPoints = client.points.get(thekey ? thekey : key, `points`);
            const neededPoints = client.points.get(thekey ? thekey : key, `neededpoints`);
            let leftpoints = neededPoints - curPoints;

            let toaddpoints = randomnum;
            addingpoints(toaddpoints, leftpoints);

            function addingpoints(toaddpoints, leftpoints) {
                if (toaddpoints >= leftpoints) {
                    client.points.set(thekey ? thekey : key, 0, `points`); //set points to 0
                    client.points.inc(thekey ? thekey : key, `level`); //add 1 to level
                     //get current NEW level
                    const newLevel = client.points.get(thekey ? thekey : key, `level`);
                    /**
                     * HARDEN UP THE NEXT LEVEL UP
                     * @info The neededpoints shall raise always, when the newLevel is divideable by 4, at levels: 4,8,12,16,20,24,28,32,36,40,44,...
                     */
                    if (newLevel % 4 === 0) client.points.math(thekey ? thekey : key, `+`, 100, `neededpoints`)

                    const newneededPoints = client.points.get(thekey ? thekey : key, `neededpoints`); //get NEW needed Points
                    const newPoints = client.points.get(thekey ? thekey : key, `points`); //get current NEW points

                    addingpoints(toaddpoints - leftpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    LEVELUP() //SEND LEVEL UP EMBED MESSAGE
                } else {
                    client.points.math(thekey ? thekey : key, `+`, Number(toaddpoints), `points`)
                }
            }
        }
        Giving_Ranking_Points();

        /**
         * CURRENT DATA
         * @info getting the current data for LEVEL, POINTS and NEEDEDPOINTS
         */
        const curLevel = client.points.get(key, `level`);
        const curPoints = client.points.get(key, `points`);
        const neededPoints = client.points.get(key, `neededpoints`);


        /**
         * LEVELUP
         * @info curPoints >= neededPoints | =>
         * @info if the current points are equal or more then the neededpoints the points shall reset and the level shall raise!
         */
        function LEVELUP() {
                const newLevel = client.points.get(key, `level`); //get current NEW level
                const newPoints = client.points.get(key, `points`); //get current NEW points
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
        }


        /**
         * @param { FUNCTIONS AREA }
         * @info FUNCTIONS
         * @info Every command leads into a single function, which may or may not be able to work together!
         */

        /**
         * @info this function "BLOCK" is for the USER RANK and for LEADERBOARD
         */
        function rank(the_rankuser) {
            /**
             * GET the Rank User
             * @info you can tag him
             */
            try {
                let rankuser = the_rankuser ? the_rankuser : message.mentions.users.first() ? message.mentions.users.first() : args[0] ? args[0].length == 18 ? message.guild.members.cache.get(args[0]).user : message.guild.members.cache.find(u => u.user.username.toLowerCase().includes(String(args[0]).toLowerCase())).user : message.author
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                //do some databasing
                const filtered = client.points.filter(p => p.guild === message.guild.id).array();
                const sorted = filtered.sort((a, b) => b.level - a.level || b.points - a.points);
                const top10 = sorted.splice(0, message.guild.memberCount);
                let i = 0;
                //count server rank sometimes an error comes
                for (const data of top10) {
                    try {
                        i++;
                        if (data.user === rankuser.id) break; //if its the right one then break it ;)
                    } catch {
                        i = `Error counting Rank`;
                        break;
                    }
                }
                //math
                let curpoints = Number(client.points.get(key, `points`).toFixed(2));
                //math
                let curnextlevel = Number(client.points.get(key, `neededpoints`).toFixed(2));
                //if not level == no rank
                if (client.points.get(key, `level`) === undefined) i = `Aucun rank`;
                //define the ranking card
                const rank = new canvacord.Rank()
                    .setAvatar(rankuser.displayAvatarURL({
                        dynamic: false,
                        format: 'png'
                    }))
                    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/886553273681731604/886561214916878346/6AD72B4F-93CD-42E5-945A-99BBEDA7BA62.gif")
                    .setCurrentXP(Number(curpoints.toFixed(2)), "WHITE")
                    .setRequiredXP(Number(curnextlevel.toFixed(2)), "WHITE")
                    .setStatus("online", true, 5)
                    .renderEmojis(true)
                    .setProgressBar("WHITE")
                    .setProgressBarTrack("BLACK")
                    .setRankColor("WHITE")
                    .setLevelColor("WHITE")
                    .setOverlay("#000000")
                    .setUsername(rankuser.username, "WHITE")
                    .setRank(Number(i), "Rank", true, "RED")
                    .setLevel(Number(client.points.get(key, `level`)), "Level", true, "RED")
                    .setDiscriminator(rankuser.discriminator, "BLACK");
                rank.build()
                    .then(data => {
                        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                        return message.channel.send(attachment);
                    });
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }

                function leaderboardembed() {
            const filtered = client.points.filter(p => p.guild === message.guild.id).array();
            let orilent;
            const sorted = filtered.sort((a, b) => b.level - a.level || b.points - a.points);
            let embeds = [];
            let j = 0;
            let maxnum = 50;
            orilent = sorted.length;
            if(isNaN(maxnum)) {
                console.log("maximum_leaderboard n'est pas un nombre")
                maxnum = 50;}
            if (maxnum > sorted.length)
                maxnum = sorted.length + (10 - Number(String(sorted.length/10).slice(2)));
            if(maxnum < 10) maxnum = 10;
            for (let i = 10; i <= maxnum; i += 10) {
                const top = sorted.splice(0, 10);
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Voici le classement \`${message.guild.name}\``)
                    .setTimestamp()
                    .setDescription(`Classement ${i<orilent?i:orilent}/${orilent}`)
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL());
                for (const data of top) {
                    j++;
                    try {
                        embed.addField(`**${j}**. \`${data.usertag}\``, `**XP:** \`${data.points.toFixed(2)}\` / \`${data.neededpoints}\` | **Level:** \`${data.level}\``);
                    } catch {
                        embed.addField(`**${j}**. \`${data.usertag}\``, `**XP:** \`${data.points.toFixed(2)}\` / \`${data.neededpoints}\` | **Level:** \`${data.level}\``);
                    }
                }
                embeds.push(embed);
            }
            return embeds;
        }
        async function leaderboard() {
            let currentPage = 0;
            const embeds = leaderboardembed();
            if(embeds.length == 1){
                return message.channel.send(embeds[0])
            }
            const lbembed = await message.channel.send(
                `**Page actuelle - ${currentPage + 1}/${embeds.length}**`,
                embeds[currentPage]
            );

            try {
                await lbembed.react("⏪");
                await lbembed.react("⏹");
                await lbembed.react("⏩");
            } catch (error) {
                console.error(error);
            }

            const filter = (reaction, user) => ["⏪", "⏹", "⏩"].includes(reaction.emoji.name) && message.author.id === user.id;
            const collector = lbembed.createReactionCollector(filter, {
                time: 60000
            });

            collector.on("collect", async (reaction, user) => {
                try {
                    if (reaction.emoji.name === "⏩") {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            lbembed.edit(`**Page actuelle - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else if (reaction.emoji.name === "⏪") {
                        if (currentPage !== 0) {
                            --currentPage;
                            lbembed.edit(`**Page actuelle - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else {
                        collector.stop();
                        reaction.message.reactions.removeAll();
                    }
                    await reaction.users.remove(message.author.id);
                } catch (error) {
                    console.error(error);
                }
            });
        }
        /**
         * @info this function "BLOCK" is for managing the POINTS, adding, setting and removing! PER USER
         */
        function addxp(amount) {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Veuillez spécifiez le membre.");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                const curPoints = client.points.get(key, `points`);
                const neededPoints = client.points.get(key, `neededpoints`);
                let leftpoints = neededPoints - curPoints;
                if (!args[1] && !amount) return message.reply("Veuillez spécifiez le nombre d'xp`");
                if (!amount) amount = Number(args[1]);
                if (amount < 0) removepoints(amount);
                let toaddpoints = amount;
                addingpoints(toaddpoints, leftpoints);

                function addingpoints(toaddpoints, leftpoints) {
                    if (toaddpoints >= leftpoints) {
                        client.points.set(key, 0, `points`); //set points to 0
                        client.points.inc(key, `level`); //add 1 to level
                        //HARDING UP!
                        const newLevel = client.points.get(key, `level`); //get current NEW level
                        if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededpoints`)

                        const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                        const newPoints = client.points.get(key, `points`); //get current NEW points

                        //THE INFORMATION EMBED
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`Rank de :  ${rankuser.tag}`, rankuser.displayAvatarURL({
                                dynamic: true
                            }))
                            .setDescription(`Tu viens d'augement au niveau : **\`${newLevel}\`**!`)
                            .setColor(embedcolor)
                            .setFooter("Pando Bots", client.user.avatarURL());
                        //send ping and embed message only IF the adding will be completed!
                        if (toaddpoints - leftpoints < newneededPoints)
                            message.channel.send(rankuser, embed);

                        addingpoints(toaddpoints - leftpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    } else {
                        client.points.math(key, `+`, Number(toaddpoints), `points`)
                    }
                }


                const embed = new Discord.MessageEmbed()
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL())
                    .setDescription(`J'ai ajouté \`${toaddpoints} xp\` à : \`${rankuser.tag}\``)
                message.reply(embed);
                rank(rankuser); //also sending the rankcard
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }


        function removexp(amount) {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Veuillez spécifiez le membre.");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");
                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                const curPoints = client.points.get(key, `points`);
                const neededPoints = client.points.get(key, `neededpoints`);

                if (!args[1] && !amount) return message.reply("Veuillez spécifiez le montant.");
                if (!amount) amount = Number(args[1]);
                if (amount < 0) addpoints(amount);

                removingpoints(amount, curPoints);

                function removingpoints(amount, curPoints) {
                    if (amount > curPoints) {
                        let removedpoints = amount - curPoints - 1;
                        client.points.set(key, neededPoints - 1, `points`); //set points to 0
                        if (client.points.get(key, `level`) == 1) return message.reply("TCe membre possède 0 points.");
                        client.points.dec(key, `level`); //remove 1 from level
                        //HARDING UP!
                        const newLevel = client.points.get(key, `level`); //get current NEW level
                        if ((newLevel + 1) % 4 === 0) { //if old level was divideable by 4 set neededpoints && points -100
                            client.points.math(key, `-`, 100, `points`)
                            client.points.math(key, `-`, 100, `neededpoints`)
                        }

                        const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                        const newPoints = client.points.get(key, `points`); //get current NEW points

                        //THE INFORMATION EMBED
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`Rank de :  ${rankuser.tag}`, rankuser.displayAvatarURL({
                                dynamic: true
                            }))
                            .setDescription(`Tu viens de level up au niveau : **\`${newLevel}\`**!`)
                            .setColor(embedcolor)
                            .setFooter("Pando Bots", client.user.avatarURL());
                        //send ping and embed message only IF the removing will be completed!
                        if (amount - removedpoints < neededPoints)
                            message.channel.send(rankuser, embed);

                        removingpoints(amount - removedpoints, newneededPoints); //Ofc there is still points left to add so... lets do it!
                    } else {
                        client.points.math(key, `-`, Number(amount), `points`)
                    }
                }

                const embed = new Discord.MessageEmbed()
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL())
                    .setDescription(`J'ai enlevé \`${amount} xp\` à : \`${rankuser.tag}\``)
                message.reply(embed);
                rank(rankuser); //also sending the rankcard
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }

        /**
         * @info this function "BLOCK" is for managing the LEVELS, adding, setting and removing! PER USER
         */
        function addlevel() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Veuillez spécifiez le membre.");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                let newLevel = client.points.get(key, `level`);
                if (!args[1]) return message.reply("Veuillez spécifiez le montant de niveaux");
                if (Number(args[1]) < 0) args[1] = 0;
                for (let i = 0; i < Number(args[1]); i++) {
                    client.points.set(key, 0, `points`); //set points to 0
                    client.points.inc(key, `level`); //add 1 to level
                    //HARDING UP!
                    newLevel = client.points.get(key, `level`); //get current NEW level
                    if (newLevel % 4 === 0) client.points.math(key, `+`, 100, `neededpoints`)
                }
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                const newPoints = client.points.get(key, `points`); //get current NEW points

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Rank de :  ${rankuser.tag}`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`Tu viens d'augmenter au niveau : **\`${newLevel}\`**!`)
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL());
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setFooter("Pando Bots", client.user.avatarURL())
                .setDescription(`J'ai ajouté ${args[1]} niveaux à : \`${rankuser.tag}\``)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }


        function removelevel() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Veuillez spécifiez le membre.");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);
                let newLevel = client.points.get(key, `level`);
                if (!args[1]) return message.reply("Veuillez spécifiez le montant of levels.");
                if (Number(args[1]) < 0) args[1] = 0;
                for (let i = 0; i < Number(args[1]); i++) {
                    client.points.set(key, 0, `points`); //set points to 0
                    client.points.dec(key, `level`); //add 1 to level
                    //HARDING UP!
                    newLevel = client.points.get(key, `level`); //get current NEW level
                    if(newLevel < 1) client.points.set(key, 1 ,`level`); //if smaller then 1 set to 1
                }
                snewLevel = client.points.get(key, `level`); //get current NEW level
                let counter = Number(snewLevel) / 4;

                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                //add 100 for each divideable 4
                for (let i = 0; i < Math.floor(counter); i++) {
                    client.points.math(key, `+`, 100, `neededpoints`)
                }
                const newneededPoints = client.points.get(key, `neededpoints`); //get NEW needed Points
                const newPoints = client.points.get(key, `points`); //get current NEW points

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Rank of :  ${rankuser.tag}`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`Tu viens d'augmenter au niveau : **\`${newLevel}\`**!`)
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL());
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setFooter("Pando Bots", client.user.avatarURL())
                .setDescription(`J'ai enlevé \`${args[1]}\` niveaux à :  \`${rankuser.tag}\``)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }

        /**
         * @info This function is for ressetting a single USER
         */
        function reset() {
            try {
                /**
                 * GET the Rank User
                 * @info you can tag him
                 */
                if (!args[0]) return message.reply("Veuillez spécifiez le membre.");
                let rankuser = message.mentions.users.first();
                if (!rankuser) return message.reply("Veuillez spécifiez le membre.");
                // if(rankuser.bot) return message.reply("NO BOTS!");

                //Call the databasing function!
                const key = `${message.guild.id}-${rankuser.id}`;
                databasing(rankuser);

                client.points.set(key, 1, `level`); //set level to 0
                client.points.set(key, 0, `points`); //set the points to 0
                client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                client.points.set(key, "", `oldmessage`); //set old message to 0

                //THE INFORMATION EMBED
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Rank fr :  ${rankuser.tag}`, rankuser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(`Vous avez été reset au niveau : **\`1\`**!`)
                    .setColor(embedcolor)
                    .setFooter("Pando Bots", client.user.avatarURL());
                message.channel.send(rankuser, embed);
                rank(rankuser); //also sending the rankcard
                const sssembed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setFooter("Senku.", client.user.avatarURL())
                .setDescription(`Je viens de reset l'xp de \`${rankuser.tag}\``)
                message.reply(sssembed);
            } catch (error) {
                console.log(error.stack)
                message.reply("Veuillez spécifiez le membre.");
            }
        }
    })
}