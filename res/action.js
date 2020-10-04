const Discord = require("discord.js");
const ref = require("./reference");

const anime = require ("./anime.json");
const color = require("./color.json");
const hentai = require("./hentai.json");
const neko = require("./neko.json");
const wallpaper = require("./wallpaper.json");

const bot = {
	anime : (message, args) => {
		let anm = ref.randArr(anime.sfw);
		let a = anm.jp + " | " + anm.type;
		let b = anm.total + "  Seasons: " + anm.seasons;
		let e = "Episodes: " + anm.episodes;
		if(anm.seasons == "1"){
			b = anm.total + "  Season: " + anm.seasons;
		}
		if(anm.episodes == "1"){
			e = "Episode: " + anm.episodes;
		}
		let emb = new Discord.MessageEmbed()
			.setColor(ref.randArr(color))
			.setTitle(anm.name)
			.setImage(anm.image)
			.addFields(
				{ name: a, value: b}
			)
			.setDescription(e)
			.setFooter("Support us on Patreon","https://i.imgur.com/RKVSeIv.png")
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
	h : this.help,
	help : (message, args) => {
		ref.embed(message, "You summoned me, mortal", "All commands : ``` .anime \n .catgirl \n .hentai \n .neko \n .wallpaper \n .wp ``` [The usage can be found here](https://moyshik7.github.io/dis/commands.html)");
	},
    hentai : (message, args) => {
        if (message.channel.nsfw) {
            //For nsfw channels
            ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", hentai.nsfw);
        }
    },
    neko: this.catgirl,
    wallpaper: (message, args) => {
        //Both for NSFW and SFW
        ref.embed(message, "Wallpaper", "[Support us on Patreon](https://www.patreon.com/plubin)", wallpaper.sfw);
    },
    wp: this.wallpaper
}
module.exports = bot;