const Discord = require("discord.js");
const KitsuAPI = require('kitsu-node-js');
const kitsu = new KitsuAPI(debug = false);

const ref = require("./../reference");
const an = require("./anime.json");

const all = {
	anime: async(message, args) => {
		try{
			let te;
	    	if (!args.length) {
	        	te = ref.randArr(an.sfw);
	    	} else {
	    		te = args.join(" ");
	    	}
        	kitsu.getAnime(te, filter = "text")
        		.then(anime => {
        			let a = anime[0];
        			let ns = a.attributes.nsfw;
        			let l = a.attributes.totalLength;
        			let le = "";
        			le += Math.floor(l/60);
        			le += " Hours and ";
        			l -= Math.floor(l/60)*60;
        			le += l;
        			le += " Minutes";
        			if(ns){
        				ns = "Yes";
        			}else{
        				ns = "No";
        			}
        			let emb = new Discord.MessageEmbed()
        				.setColor("#ff6f61")
        				.setTitle(a.attributes.titles.en +" - "+ a.attributes.titles.ja_jp)
        				.setDescription(a.attributes.description)
        				.addFields(
        					{name: '\u200B', value: '\u200B'},
        					{name: "__Type__ :", value: a.attributes.showType},
        					{name: "__Episodes__ :", value: a.attributes.episodeCount},
        					{name: "__Total Length__ :", value: le},
        					{name: "__Status__ :", value: a.attributes.status},
        					{name: "__Rank__ :", value: a.attributes.ratingRank},
        					{name: "__Rating__ :", value: a.attributes.averageRating},
        					{name: "__Minimum age__ :", value: a.attributes.ageRatingGuide},
        					{name: "__Trailer__ :", value: `[https://youtu.be/${a.attributes.youtubeVideoId}](https://youtu.be/${a.attributes.youtubeVideoId})`},
        					{name: "__NSFW__ :",value: ns},
        					{name: '\u200B', value: '\u200B'}
        				)
        				.setImage(a.attributes.posterImage.large)
        				.setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
        			message.channel.send(emb);
        		}, err => {
        			console.log(err);
        		});
    	}catch(err){
    		console.log(err);
    	}
	},
	manga: async(message, args) => {
		try{
			let te;
			te = args.join(" ");
			kitsu.getManga(te, filter = "text")
				.then(manga => {
					let a = manga[0];
					let ns = a.attributes.nsfw;
					if(ns){
						ns = "Yes";
					}else{
						ns = "No";
					}
					let emb = new Discord.MessageEmbed()
						.setColor("#ff6f61")
						.setTitle(a.attributes.titles.en_us)
						.setDescription(a.attributes.description)
						.addFields(
							{name: '\u200B', value: '\u200B'},
							{name: "__Status__ :", value: a.attributes.status},
							{name: "__Rank__ :", value: a.attributes.ratingRank},
							{name: "__Rating__ :", value: a.attributes.averageRating},
							{name: "__Minimum age__ :", value: a.attributes.ageRatingGuide},
							{name: "__NSFW__ :",value: ns},
							{name: '\u200B', value: '\u200B'}
						)
						.setImage(a.attributes.posterImage.large)
						.setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
						message.channel.send(emb);
					}, err => {
						console.log(err);
					}
				);
		} catch(err){
			console.log(err);
		}
	}
}

module.exports = all