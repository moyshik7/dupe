const Discord = require("discord.js");
const fetch = require('node-fetch');
const ref = require("./reference");

const anime = require ("./anime.json");
const color = require("./color.json");
const wallpaper = require("./wallpaper.json");

const bot = {
	anime : async (message, args) => {
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
	catgirl :async (message, args) => {
		if (message.channel.nsfw) {
			//For nsfw channels
			let h = await ref.api("neko", "nsfw");
			h = JSON.parse(h);
			ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
		} else {
			//For sfw channels
			let h = await ref.api("neko", "sfw");
			h = JSON.parse(h);
			ref.embed(message, "Neko - Catgirl", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
		}
	},
	h : (message, args) => {
		bot.help(message, args);
	},
	help : (message, args) => {
		ref.embed(message, "You summoned me, mortal", "All commands : ```.anime\n.catgirl\n.h\n.help\n.hentai\n.lewd\n.neko\n.ping\n.wallpaper\n.wp```[The usage can be found here](https://moyshik7.github.io/dis/commands.html)");
	},
    hentai : async (message, args) => {
        if (message.channel.nsfw) {
			let h = await ref.api("hentai", "nsfw");
			h = JSON.parse(h);
			ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
        }
    },
    lewd : async (message, args) => {
    	//same as H E N T A I
    	if (message.channel.nsfw) {
    		let h = await ref.api("hentai", "nsfw");
    		h = JSON.parse(h);
    		ref.embed(message, "L E W D", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
    	}
    },
    neko : async (message, args) => {
    	bot.catgirl(message, args);
    },
    ping : (message, args) => {
    	let timeTaken = Date.now() - message.createdTimestamp;
    	ref.embed(message, "P O N G", `Pong ${timeTaken}ms`);
    },
    wallpaper: async (message, args) => {
        //Both for NSFW and SFW
        ref.embed(message, "Wallpaper", "[Support us on Patreon](https://www.patreon.com/plubin)", wallpaper.sfw);
    },
    wp: async (message, args) => {
    	bot.wallpaper(message, args);
    }
}
module.exports = bot;