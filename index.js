const Discord = require("discord.js");
const express = require("express");
const server = new express();
const token = ".";
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOP_GG_TOKEN, client);

const cList = require("./res/commands.json");
const bot = require("./res/action");
const ref = require("./res/reference");

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('.h or .help', {
        type: "LISTENING"
    });
    client.user.setStatus('idle');
});
client.on("message", (message) => {
    try {
        if (message.author.bot || (!message.guild && message.author.id != 584309117380853770)) {
            return (false);
        } else {
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
//Just adding a comment

client.on('ready', () => {
    setInterval(() => {
        try {
            dbl.postStats(client.guilds.size /*, client.shards.Id, client.shards.total*/ );
        } catch (err) {
            console.log(err);
        }
    }, 300000);
});
dbl.on('error', e => {
    console.log(`Oops! ${e}`);
})

server.all('/', (req, res) => {
    res.send('Plubin is up');
});
server.listen(process.env.PORT, () => {
    console.log(`Server is up on port : ${process.env.PORT}`);
});
