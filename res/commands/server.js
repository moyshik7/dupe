const Discord = require("discord.js");

const ref = require("./../reference");

const all = {
    server: async(message, args) => {
        try {
            let timeTaken = Date.now() - message.createdTimestamp;
            let a = message.guild.createdAt;
            let cat = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear() + "  " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            let embb = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name}`)
                .setThumbnail(`${message.guild.iconURL()}`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: "<a:open:779937488188735531> Created on:",
                    value: `\t${cat}`
                }, {
                    name: "<a:headbump:760437043938852885> Members:",
                    value: `\t${message.guild.memberCount || "N/A"}`
                }, {
                    name: "<a:earth:779933308468461599> Server region:",
                    value: `\t${message.guild.region || "N/A"}`
                }, {
                    name: "<a:blob:779938621687201812> Description:",
                    value: `\t${message.guild.description || "Not Provided"}`
                }, {
                    name: "👑 Owner:",
                    value: `\t${message.guild.owner.user.username || "N/A"}`
                }, {
                    name: "💬 Total channels:",
                    value: `\t${message.guild.channels.cache.size || "N/A"}`
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
module.exports = all;