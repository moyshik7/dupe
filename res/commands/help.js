const Discord = require('discord.js');
const helpList = require("./resource/helplist.json");
const helpMessage = require("./resource/helpmessage.json");

const app = {
    help: (message, args) => {
        let ho;
        if (!args.length) {
            args[0] = "help";
        }

        if (helpList.indexOf(args[0]) != -1) {
            ho = helpMessage[args[0]];
        } else {
            ho = helpMessage["help"];
        }

        let emb = new Discord.MessageEmbed()
            .setColor("fd0061")
            .setTitle(ho.name)
            .setDescription(ho.content)
            .addFields({ name: "\u200B", value: "\u200B" }, { name: "__**Usage**__", value: `${ho.usage || "N/A" }` }, { name: "__**Example**__", value: `${ho.example || "N/A"}` })
        message.channel.send(emb);
    }
}
module.exports = app;