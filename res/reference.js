const Discord = require("discord.js");

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
    randInt: (min, max) => { //No more python shit
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    },
    Sanitize: (str) => {
        if (!str.length) {
            return (" ");
        } else {
            let sanitized = "";
            let escaped = ["'", "$", "&", "@", "?", "*", ";", ":", "`", "•", "%"]; //Add the oposite of `
            for (let i = 0; i < str.length; i++) {
                if (escaped.indexOf(str[i]) == -1) {
                    sanitized += str[i];
                }
            }
            return (sanitized);
        }
    },
    SanitizeArray: (arr) => {
        if (!arr.length) {
            return ([]);
        } else {
            let sanitized = [];
            for (let i = 0; i < arr.length; i++) {
                let s = ref.Sanitize(arr[i]);
                if (s.length) {
                    sanitized.push(s);
                }
            }
            return (sanitized);
        }
    }
}
module.exports = ref;