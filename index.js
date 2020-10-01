const Discord = require("discord.js");
const token = ".";
const client = new Discord.Client();
const cList = require("./commands.json");
const commands = require("./res/action");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})
client.on("message", (message) => {
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
})
client.login(process.env.BOT_TOKEN);

const ref = {
	embed : (message, Title, Description, ImageArray) => {
		let a = new Discord.MessageEmbed()
			.setColor(ref.randArr(color))
			.setTitle(Title)
			.setDescription(Description)
			.setImage(ref.randArr(ImageArray))
		message.channel.send(a);
	},
    formatArr: (givenArray) => {
        let finale = [];
        for (let x = 0; x < givenArray.length; x++) {
            let p = givenArray[x];
            if (p != "" && p != null && p != undefined) {
                p = ref.formatStr(p);
                if (p.length >= 1) {
                    finale.push(p);
                }
            }
        }
        return (finale);
    },
    formatStr: (givenString) => {
        let a = givenString.toLowerCase();
        a = a.trim();
        return (a);
    },
    randArr: (givenArray) => {
        return (givenArray[Math.floor(Math.random() * givenArray.length)]);
    }
}