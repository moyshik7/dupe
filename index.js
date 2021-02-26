const Discord = require("discord.js");
const express = require("express");
const server = new express();
const token = ".";
const client = new Discord.Client();
const PORT = process.env.PORT || 3000;

const Topgg = require('@top-gg/sdk');
const api = new Topgg.Api(process.env.TOP_GG_TOKEN);

const cList = require("./res/commands.json");
const bot = require("./res/action");
const ref = require("./res/reference");

client.on("message", (message) => {
    try {
        if (message.author.bot || (!message.guild && message.author.id != 584309117380853770)) {
            if (!message.guild && !message.author.bot) {
                message.channel.send("The message has been delivered to the owner");
                if (message.content.length <= 1800) {
                    let c = client.channels.cache.get('807175797340504114');
                    c.send(`DM by : ${message.author} / ${message.author.username}\n>>> ${message.content}`);
                }
            }
            return (false);
        } else {
            if (message.content.includes("@here") || message.content.includes("@everyone")) {
                return (false);
            }
            if (message.mentions.has(client.user.id)) {
                message.channel.send("Sup, human?\nMy prefix for this server is `.`\nUse `.help` to continue");
            };
            let msg = message.content;
            if (msg[0] === token) {
                let command = msg.slice(1);
                command = ref.formatArr(command.split(" "));
                args = command.slice(1);
                command = command[0];
                if (cList.indexOf(command) != -1) {
                    console.log(`${command} requested by ${message.author.tag} at server ${message.guild || "DM"}`);
                    bot.bd.message = message;
                    bot.bd.args = args;
                    bot.bd.client = client;
                    let myf = bot[command];
                    myf();
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
});
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        activity: {
            name: "Ping me for help",
            type: "STREAMING"
        },
        status: "online",
        afk: false
    });
    setInterval(() => {
        try {
            api.postStats({
                serverCount: client.guilds.cache.size //,
                    //shardId: client.shard.ids[0],
                    //shardCount: client.options.shardCount
            })
        } catch (err) {
            console.log(err);
        }
    }, 300000);
});

client.on("guildCreate", guild => {
    try {
        let c = client.channels.cache.get('806905770393993246');
        c.send(`Joined guild : ${guild.name}\nID : ${guild.id}\nMembers : ${guild.memberCount}`);
    } catch (err) {
        console.log(err);
    }
});

client.on("guildDelete", guild => {
    try {
        let c = client.channels.cache.get('806905770393993246');
        c.send(`Left guild : ${guild.name}\nID : ${guild.id}\nMembers : ${guild.memberCount}`);
    } catch (err) {
        console.log(err);
    }
});

server.all('/', (req, res) => {
    res.send('Plubin is up');
});
server.listen(PORT, (a) => {
    console.log(`Server is up on port : ${PORT}`);
});