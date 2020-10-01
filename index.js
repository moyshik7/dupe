const Discord = require("discord.js");
const res = require("./res.json");
const token = ".";
const client = new Discord.Client();

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
        if (res.cList.indexOf(command) != -1) {
            let myf = commands[command];
            myf(message, args);
        }
    }
})
client.login(process.env.BOT_TOKEN);
const commands = {
    hentai: (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            let emb = new Discord.MessageEmbed()
                .setColor(ref.randArr(res.colors))
                .setTitle("H E N T A I")
                .setDescription("Don't forget to support us ;)")
                .setImage(ref.randArr(res.hentai))
            message.reply(emb);
        }
    },
    neko: (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            let emb = new Discord.MessageEmbed()
                .setColor(ref.randArr(res.colors))
                .setTitle("Neko")
                .setDescription("Don't forget to support us ;)")
                .setImage(ref.randArr(res.nekosNSFW))
            message.reply(emb);
        } else {
            //For sfw channels
            ref.embed(message, "Neko", "[Support us on Patreon](https://www.patreon.com/plubin)", res.nekos);
        }
    },
    wallpaper: (message, args) => {
        //Both for NSFW and SFW
        ref.embed(message, "Wallpaper", "[Support us on Patreon](https://www.patreon.com/plubin)", res.wallpapers);
    },
    wp: (message, args) => {
        commands.wallpaper(message, args);
    }
}
const ref = {
	embed : (message, Title, Description, ImageArray) => {
		let a = new Discord.MessageEmbed()
			.setColor(ref.randArr(res.colors))
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