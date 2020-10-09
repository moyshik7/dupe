const Discord = require("discord.js");
const fetch = require('node-fetch');
const qs = require('querystring');

const anime = require ("./anime.json");
const color = require("./color.json");
const neko = require("./neko.json");
const wallpaper = require("./wallpaper.json");

const ref = {
	api : async (cat, typ) => {
		let data = {
				"catagory" : cat,
				"key" : process.env.PLUPI_KEY,
				"type" : typ
		}
		const query = qs.stringify(data);
		const list = await fetch(`http://plupi.myartsonline.com?${query}`)
			.then(response => response.text());
		if(list.length) {
			return list;
		}
	},
	embed : (message, Title, Description, ImageArray) => {
		let a;
		if(ImageArray == null || ImageArray == undefined){
			a = new Discord.MessageEmbed()
				.setColor(ref.randArr(color))
				.setTitle(Title)
				.setDescription(Description)
		}else{
			if(typeof(ImageArray) === "string"){
				a = new Discord.MessageEmbed()
					.setColor(ref.randArr(color))
					.setTitle(Title)
					.setDescription(Description)
					.setImage(ImageArray)
			}else{
				a = new Discord.MessageEmbed()
					.setColor(ref.randArr(color))
					.setTitle(Title)
					.setDescription(Description)
					.setImage(ref.randArr(ImageArray))
			}
		}
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
        return(finale);
    },
    formatStr: (givenString) => {
        let a = givenString.toLowerCase();
        a = a.trim();
        return(a);
    },
    randArr: (givenArray) => {
        return(givenArray[Math.floor(Math.random() * givenArray.length)]);
    }
}
module.exports = ref;