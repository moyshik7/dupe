const {MessageEmbed} = require("discord.js");

const ref = require("./../reference");

const all = {
    Server: async(message, args, client) => {
        try {
            let timeTaken = Date.now() - message.createdTimestamp;
            let a = message.guild.createdAt;
            let cat = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear() + "  " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            let owner;
            let ooo = await client.users.fetch(message.guild.ownerID).then((gg) => {
                owner = gg;
            });
            let embb = new MessageEmbed()
                .setTitle(`${message.guild.name}`)
                .setColor("fd0061")
                .setThumbnail(`${message.guild.iconURL()}`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: "<a:open:779937488188735531> Created on:",
                    value: `\t${cat}`
                }, {
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: "<a:headbump:760437043938852885> Members:",
                    value: `\t${message.guild.memberCount || "N/A"}`,
                    inline: true
                }, {
                    name: "<a:earth:779933308468461599> Server region:",
                    value: `\t${message.guild.region || "N/A"}`,
                    inline: true
                }, {
                    name: "<a:blob:779938621687201812> Description:",
                    value: `\t${message.guild.description || "Not Provided"}`,
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: "👑 Owner:",
                    value: `\t${owner.username || "N/A"}`,
                    inline: true
                }, {
                    name: "💬 Total channels:",
                    value: `\t${message.guild.channels.cache.size || "N/A"}`,
                    inline: true
                }, {
                    name: "🏓 Ping :",
                    value: `\t${timeTaken} ms`,
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B'
                })
                .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
            message.channel.send(embb);
        } catch (err) {
            console.log(err);
        }
    },
    Status : (message,client) => {
        try{
            if(message.author.id == "584309117380853770"){
                let totalServers = 0;
                let totalUsers = 0;
                client.guilds.cache.forEach(a => {
                    totalServers++;
                    totalUsers += a.memberCount || 0;
                });
                let emb = new MessageEmbed()
                    .setTitle("Plubin's Status :")
                    .setColor("fd0061")
                    .addFields({
                        name: "Status :",
                        value: "Online (Idle)"
                    },{
                        name: "Servers :",
                        value: `${totalServers}`
                    },{
                        name: "Users :",
                        value: `${totalUsers}`
                    });
                message.channel.send(emb);
            }
        } catch (err){
            console.log(err);
        }
    }
};
module.exports = all;