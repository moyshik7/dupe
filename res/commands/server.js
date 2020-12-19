const Discord = require("discord.js");
const KitsuAPI = require('kitsu-node-js');
const kitsu = new KitsuAPI(debug = false);

const ref = require("./../reference");

const all = {
    server: async(message, args) => {
        try {
            let timeTaken = Date.now() - bot.bd.message.createdTimestamp;
            let a = message.guild.createdAt;
            let cat = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear() + "  " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            let embb = new Discord.messageEmbed()
                .setTitle(`${bot.bd.message.guild.name}`)
                .setThumbnail(`${bot.bd.message.guild.iconURL()}`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: "<a:open:779937488188735531> Created on:",
                    value: `\t${cat}`
                }, {
                    name: "<a:headbump:760437043938852885> Members:",
                    value: `\t${message.guild.memberCount}`
                }, {
                    name: "<a:earth:779933308468461599> Server region:",
                    value: `\t${message.guild.region}`
                }, {
                    name: "<a:blob:779938621687201812> Description:",
                    value: `\t${message.guild.description || "Not Provided"}`
                }, {
                    name: "👑 Owner:",
                    value: `\t${message.guild.owner.user.username || "Access Denied"}`
                }, {
                    name: "💬 Total channels:",
                    value: `\t${message.guild.channels.cache.size}`
                }, {
                    name: "🏓 Ping :",
                    value: `\t${timeTaken} ms`
                }, {
                    name: '\u200B',
                    value: '\u200B'
                })
                .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
            message.channel.send(embb);
        } catch (err) {
            console.log(err);
        }
    }
}