const Discord = require("discord.js");
const express = require("express");
const server = new express();
const token = ".";
const client = new Discord.Client();
const cList = require("./res/commands.json");
const commands = require("./res/action");
const ref = require("./res/reference");

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`); //Show this message when logged in
    client.user.setActivity('Apex Legends');
});
client.on("message", (message) => {
    let msg = message.content;
    if (msg[0] === token) {
        let command = msg.slice(1); //remove the token
        command = ref.formatArr(command.split(" "));
        args = command.slice(1); //only takes the arguments
        command = command[0];
        if (cList.indexOf(command) != -1) {
            let myf = commands[command]; //Init the function
            myf(message, args); //Call the function
        }
    }
});
client.login(process.env.BOT_TOKEN); //Login using the environment variable


server.all('/', (req, res) => {
    res.send('Plubin is up');
});
server.listen(3000, () => {
    console.log('Server is up');
});