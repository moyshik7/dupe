const Discord = require("discord.js");
const ref = require("./reference");

const anime = require ("./anime.json");
const color = require("./color.json");
const hentai = require("./hentai.json");
const neko = require("./neko.json");
const wallpaper = require("./wallpaper.json");

const bot = {
	catgirl : (message, args) => {
		if (message.channel.nsfw) {
			//For nsfw channels
			ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", neko.nsfw);
		} else {
			//For sfw channels
			ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", neko.sfw);
		}
	},
    hentai : (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", hentai.nsfw);
        }
    },
    neko: (message, args) => {
        bot.catgirl(message, args);
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