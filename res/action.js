const Discord = require("discord.js");
const fetch = require('node-fetch');
const ref = require("./reference");
const nLife = require ("nekos.life");

const n = new nLife();
const anime = require ("./anime.json");
const color = require("./color.json");

const bot = {
	anime : async (message, args) => {
		if(!args.length){
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
		}else{
			//https://api.jikan.moe/v3/search/anime?q=Kimi no na wa
		}
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
	define :async (message, args) => {
		let res = await ref.urbanAPI(message, args);
		let term;
		if(!args.length){
			term = "^(°×°)^";
		}else{
			for(let a = 0; a<args.length ; a++){
				if(args[a] != null || args[a] != false){
					term += args[a];
					term += " ";
				}
			}
			term = term[0].toUpperCase() + term.substring(1);
			term = term.trim();
		}
		ref.embed(message, term, res);
	},
	feet : async (message, args) => {
		try{
			if(message.channel.nsfw){
				let s = await n.nsfw.feet();
				s = eval(s);
				ref.embed(message,"F E E T", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
			}
		}catch(err){
			console.log(err);
		}
	},
	femdom : async (message, args) => {
		try{
			if(message.channel.nsfw){
				let s = await n.nsfw.femdom();
				s = eval(s);
				ref.embed(message,"F E M D O M", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
			}
		}catch(err){
			console.log(err);
		}
	},
	h : (message, args) => {
		bot.help(message, args);
	},
	help : (message, args) => {
		if(args.length && args[0] == "nsfw"){
			ref.embed(message,"N S F W", helpMessage.nsfw);
		}else if(args.length && args[0] == "sfw"){
			ref.embed(message,"S F W", helpMessage.sfw);
		}else{
			ref.embed(message, helpMessage.normal);
		}
	},
    hentai : async (message, args) => {
        if (message.channel.nsfw) {
			let h = await ref.api("hentai", "nsfw");
			h = JSON.parse(h);
			ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
        }
    },
    kuni : async (message, args) => {
    	try{
    		if(message.channel.nsfw){
    			let s = await n.nsfw.kuni();
    			s = eval(s);
    			ref.embed(message,"K U N I", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    	}
    	}catch(err){
    		console.log(err);
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
    poke : async (message,args) => {
    	try{
    		let s = await n.sfw.poke();
    		s = eval(s);
   			ref.embed(message,"Poke", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    	}catch(err){
    		console.log(err);
    	}
    },
    slap : async (message,args) => {
    	try{
    		let s = await n.sfw.slap();
    		s = eval(s);
    		ref.embed(message,"Slap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    	}catch(err){
    		console.log(err);
    	}
    },
    spank : async (message, args) => {
    	try{
    		if(message.channel.nsfw){
    			let s = await n.nsfw.spank();
    			s = eval(s);
    			ref.embed(message,"S P A N K", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    		}
    	}catch(err){
    		console.log(err);
    	}
    },
    tits : async (message, args) => {
    	try{
    		if(message.channel.nsfw){
    			let s = await n.nsfw.tits();
    			s = eval(s);
    			ref.embed(message,"T I T S", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    		}
    	}catch(err){
    		console.log(err);
    	}
    },
    waifu : async (message, args) => {
    	try{
    		let s = await n.nsfw.waifu();
    		s = eval(s);
    		ref.embed(message,"Waifu", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    	}
    	}catch(err){
    		console.log(err);
    	}
    },
    wallpaper: async (message, args) => {
        //Both for NSFW and SFW
        try{
        	let h = await ref.api("wallpaper", "sfw");
        	h = JSON.parse(h);
        	ref.embed(message, "WALLPAPER", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
        }catch(err){
        	console.log(err);
        }
    },
    wp: async (message, args) => {
    	bot.wallpaper(message, args);
    },
    yuri : async (message, args) => {
    	try{
    		if(message.channel.nsfw){
    			let s = await n.nsfw.yuri();
    			s = eval(s);
    			ref.embed(message,"Y U R I", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
    		}
    	}catch(err){
    		console.log(err);
    	}
    }
}
module.exports = bot;
const helpMessage = {
	normal : "Couldn't find your way back ?\nWell Take a look\n**For NSFW commands use**\n`.help`  `nsfw`\n**For SFW commands use**\n`.help`  `sfw`\n\n\n[The usage can be found here](Https://moyshik7.github.io/dis/commands.html)",
	nsfw : "**pervert**\n```\n.catgirl\n.feet\n.femdom\n.hentai\n.kuni\n.lewd\n.neko\n.spank\n.tits\n.yuri```\n[The usage can be found here](Https://moyshik7.github.io/dis/commands.html)",
	sfw : "**heaven smiles**\n```\n.anime\n.catgirl\n.define\n.h\n.help\n.neko\n.ping\n.poke\n.slap\n.waifu\n.wallpaper\n.wp```\n[The usage can be found here](Https://moyshik7.github.io/dis/commands.html)"
}