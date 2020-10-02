const Discord = require("discord.js");
const ref = require("./reference");

const anime = require ("./anime.json");
const color = require("./color.json");
const hentai = require("./hentai.json");
const neko = require("./neko.json");
const wallpaper = require("./wallpaper.json");

const bot = {
	anime : (message, args) => {
		let anm = ref.randArr(anime);
		let a = anm.type + "  " + anm.movie;
		if(anm.seasons == "1"){
			let b = anm.total + "  Season: " + anm.seasons;
		}else{
			let b = anm.total + "  Seasons: " + anm.seasons;
		}
		if(anm.episodes == "1"){
			let e = "Episode: " + anm.episodes;
		}else{
			let e = "Episodes: " + anm.episodes;
		}
		let emb = new Discord.MessageEmbed()
			.setColor(ref.randArr(color))
			.setTitle(anm.name)
			.setImage(anm.image)
			.addFields(
				{ name: "a", value: b}
			)
			.addDescription(e)
			.setFooter("[Support us on Patreon](https://www.patreon.com/plubin)")
		message.channel.send(emb);
	},
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
