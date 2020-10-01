const Discord = require("discord.js");
const color = require("./color.json");
const hentai = require("./hentai.json");
const neko = require("./neko.json");
const wallpaper = require("./wallpaper.json");

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
 
const bot = {
    hentai: (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", hentai.nsfw);
        }
    },
    neko: (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", neko.nsfw);
        } else {
            //For sfw channels
            ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", neko.sfw);
        }
    },
    wallpaper: (message, args) => {
        //Both for NSFW and SFW
        ref.embed(message, "Wallpaper", "[Support us on Patreon](https://www.patreon.com/plubin)", wallpaper.sfw);
    },
    wp: (message, args) => {
        bot.wallpaper(message, args);
    }
}
module.exports = bot;