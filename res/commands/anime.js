const Discord = require("discord.js");
const KitsuAPI = require('kitsu-node-js');
const kitsu = new KitsuAPI(debug = false);

const ref = require("./../reference");
const an = require("./anime.json");

const all = {
    anime: async(message, args) => {
        try {
	    if(!message.channel.nsfw){
		message.channel.send("Please use this command in any NSFW marked channel for safety");
		return(false);
	    }
            let te;
            if (!args.length) {
                te = ref.randArr(an.sfw);
            } else {
                te = args.join(" ");
            }
            kitsu.getAnime(te, filter = "text")
                .then(anime => {
                        let a = anime[0];
                        let l = a.attributes.totalLength;
                        let le = "";
                        le += Math.floor(l / 60);
                        le += " Hours and ";
                        l -= Math.floor(l / 60) * 60;
                        le += l;
                        le += " Minutes";
                        //let ns = (a.attributes.nsfw) ? 'Yes' : 'No';
                        let emb = new Discord.MessageEmbed()
                            .setColor("#ff6f61")
                            .setTitle(`${a.attributes.titles.en || "N/A"} - ${a.attributes.titles.ja_jp || "N/A"}`)
                            .setDescription(a.attributes.description)
                            .addFields({
                                name: '\u200B',
                                value: '\u200B'
                            }, {
                                name: "__Type__ :",
                                value: a.attributes.showType || "N/A",
                                inline: true
                            }, {
                                name: "__Episodes__ :",
                                value: a.attributes.episodeCount || "N/A",
                                inline: true
                            }, {
                                name: "__Total Length__ :",
                                value: le || "N/A"
                            }, {
                                name: "__Status__ :",
                                value: a.attributes.status || "N/A",
                                inline: true
                            }, {
                                name: "__Rank__ :",
                                value: a.attributes.ratingRank || "N/A",
                                inline: true
                            }, {
                                name: "__Rating__ :",
                                value: a.attributes.averageRating || "N/A"
                            }, {
                                name: "__Age Rating__ :",
                                value: a.attributes.ageRatingGuide || "N/A",
                                inline: true
                            }, {
                                name: "__Trailer__ :",
                                value: `[https://youtu.be/${a.attributes.youtubeVideoId || "N/A"}](https://youtu.be/${a.attributes.youtubeVideoId || "N/A"})`,
                                inline: true
                            }, {
                                name: '\u200B',
                                value: '\u200B'
                            })
                            .setImage(a.attributes.posterImage.large)
                            .setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
                        message.channel.send(emb);
                    },
                    err => {
                        console.log(err);
                    });
        } catch (err) {
            console.log(err);
        }
    },
    manga: async(message,
        args) => {
        try {
	    if(!message.channel.nsfw){
		message.channel.send("Please use this command in any NSFW marked channel for security");
		return(false);
	    }
            let te;
            te = args.join(" ");
            kitsu.getManga(te,
                    filter = "text")
                .then(manga => {
                        let a = manga[0];
                        let ns = a.attributes.nsfw;
                        if (ns) {
                            ns = "Yes";
                        } else {
                            ns = "No";
                        }
                        let emb = new Discord.MessageEmbed()
                            .setColor("#ff6f61")
                            .setTitle(a.attributes.titles.en || a.attributes.titles.en_us || "N/A")
                            .setDescription(a.attributes.description)
                            .addFields({
                                name: '\u200B',
                                value: '\u200B'
                            }, {
                                name: "__Status__ :",
                                value: a.attributes.status || "N/A"
                            }, {
                                name: "__Rank__ :",
                                value: a.attributes.ratingRank || "N/A"
                            }, {
                                name: "__Rating__ :",
                                value: a.attributes.averageRating || "N/A"
                            }, {
                                name: "__NSFW__ :",
                                value: ns
                            }, {
                                name: '\u200B',
                                value: '\u200B'
                            })
                            .setImage(a.attributes.posterImage.medium)
                            .setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
                        message.channel.send(emb);
                    },
                    err => {
                        console.log(err);
                    }
                );
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = all
