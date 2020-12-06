const Discord = require("discord.js");
const express = require("express");
const server = new express();
const token = ".";
const client = new Discord.Client();
const cList = require("./res/commands.json");
const commands = require("./res/action");
const ref = require("./res/reference");

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Apex Legends');
});
client.on("message", (message) => {
    if (message.author.bot) return;
    let msg = message.content;
    if (msg[0] === token) {
        let command = msg.slice(1);
        command = ref.formatArr(command.split(" "));
        args = command.slice(1);
        command = command[0];
        if (cList.indexOf(command) != -1) {
            let myf = commands[command];
            myf(message, args);
        }
    }
});
client.login(process.env.BOT_TOKEN);
server.all('/', (req, res) => {
    res.send('Plubin is up');
});
server.listen(3000, () => {
    console.log('Server is up');
});