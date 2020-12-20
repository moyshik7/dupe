const Discord = require("discord.js");
const express = require("express");
const server = new express();
const token = ".";
const client = new Discord.Client();
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
        if (message.author.bot) {
            return (false);
        } else {
            let msg = message.content;
            if (msg[0] === token) {
                let command = msg.slice(1);
                command = ref.formatArr(command.split(" "));
                args = command.slice(1);
                command = command[0];
                if (cList.indexOf(command) != -1) {
                    console.log(`${command} requested by ${message.author.username}`);
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

server.all('/', (req, res) => {
    res.send('Plubin is up');
});
server.listen(3000, () => {
    console.log('Server is up');
});