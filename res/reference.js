const Discord = require("discord.js");
const qs = require('querystring');

const color = require("./color.json");

const ref = {
    embed: (message, Title, Description, ImageArray) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    },
    embedDes: (message, Title, Description, Footer) => {
        try {
            let emb;
            if (Footer == false || Footer == undefined) {
                emb = new Discord.MessageEmbed()
                    .setColor(ref.randArr(color))
                    .setTitle(Title)
                    .setDescription(Description)
            } else {
                emb = new Discord.MessageEmbed()
                    .setColor(ref.randArr(color))
                    .setTitle(Title)
                    .setDescription(Description)
                    .setFooter(Footer)
            }
            message.channel.send(emb);
        } catch (err) {
            console.log(err);
        }
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
    },
    randBool: () => {
        return (Math.random() < 0.5);
    },
    randInt: (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}
module.exports = ref;