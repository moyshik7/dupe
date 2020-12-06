const Discord = require("discord.js");
const fetch = require('node-fetch');
const qs = require('querystring');

//const anime = require("./anime.json");
const color = require("./color.json");

const ref = {
    api: async(cat, typ) => {
        try {
            let data = {
                "catagory": cat,
                "key": process.env.PLUPI_KEY,
                "type": typ
            }
            let query = qs.stringify(data);
            let list = await fetch(`http://plupi.myartsonline.com?${query}`)
                .then(response => response.text());
            if (list.length) {
                return list;
            }
        } catch (err) {
            console.log(err);
        }
    },
    embed: (message, Title, Description, ImageArray) => {
        let a;
        if (typeof(ImageArray) === "string") {
            a = new Discord.MessageEmbed()
                .setColor(ref.randArr(color))
                .setTitle(Title)
                .setImage(ImageArray)
                .setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
        } else if (typeof(ImageArray) === "object") {
            a = new Discord.MessageEmbed()
                .setColor(ref.randArr(color))
                .setTitle(Title)
                .setImage(ref.randArr(ImageArray))
                .setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
        } else {}
        message.channel.send(a);
    },
    embedDes : (message,Title,Description,Footer) => {
    	let emb;
    	if(Footer == false || Footer == undefined){
    		emb = new Discord.MessageEmbed()
    			.setColor(ref.randArr(color))
    			.setTitle(Title)
    			.setDescription(Description)
    	}else{
    		emb = new Discord.MessageEmbed()
    			.setColor(ref.randArr(color))
    			.setTitle(Title)
    			.setDescription(Description)
    			.setFooter(Footer)
    	}
    	message.channel.send(emb);
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
    randBool: () => {
    	return(Math.random() < 0.5);
    },
    randArr: (givenArray) => {
        return (givenArray[Math.floor(Math.random() * givenArray.length)]);
    },
    urbanAPI: async(message, args) => {
        if (!args.length) {
            return ("Provide a term to define");
        } else {
            let query = qs.stringify({ term: args.join(' ') });
            let { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
            if (!list.length) {
                return ("No results found");
            } else {
                return (list[0].definition);
            }
        }
    }
}
module.exports = ref;