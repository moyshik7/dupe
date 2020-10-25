const Discord = require("discord.js");
const fetch = require('node-fetch');
const ref = require("./reference");
const nLife = require("nekos.life");

const n = new nLife();
const anime = require("./anime.json");
const color = require("./color.json");

const bot = {
    anal: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.anal();
                s = eval(s);
                ref.embed(message, "A N A L", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    anime: async(message, args) => {
        if (!args.length) {
            let anm = ref.randArr(anime.sfw);
            let a = anm.jp + " | " + anm.type;
            let b = anm.total + "  Seasons: " + anm.seasons;
            let e = "Episodes: " + anm.episodes;
            if (anm.seasons == "1") {
                b = anm.total + "  Season: " + anm.seasons;
            }
            if (anm.episodes == "1") {
                e = "Episode: " + anm.episodes;
            }
            let emb = new Discord.MessageEmbed()
                .setColor(ref.randArr(color))
                .setTitle(anm.name)
                .setImage(anm.image)
                .addFields({ name: a, value: b })
                .setDescription(e)
                .setFooter("Support us on Patreon", "https://i.imgur.com/RKVSeIv.png")
            message.channel.send(emb);
        } else {
            //https://api.jikan.moe/v3/search/anime?q=Kimi%20no%20na%20wa
        }
    },
    avatar: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.avatar();
                s = eval(s);
                ref.embed(message, "Cum Sluts", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    baka: async(message, args) => {
        try {
            let s = await n.sfw.poke();
            s = eval(s);
            ref.embed(message, "Baka", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    bj: async(message, args) => {
        bot.blowjob(message, args);
    },
    blowjob: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.bJ();
                s = eval(s);
                ref.embed(message, "BlowJob", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    cat: async(message, args) => {
        try {
            let s = await n.sfw.meow();
            s = eval(s);
            ref.embed(message, "meow", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    catgirl: async(message, args) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    },
    classic: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.classic();
                s = eval(s);
                ref.embed(message, "Classic", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    cs: async(message, args) => {
        bot.cumsluts(message, args);
    },
    cuddle: async(message, args) => {
        try {
            let s = await n.sfw.cuddle();
            s = eval(s);
            ref.embed(message, "meow", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    cumslut: async(message, args) => {
        bot.cumsluts(message, args);
    },
    cumsluts: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.cumsluts();
                s = eval(s);
                ref.embed(message, "Cum Sluts", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    define: async(message, args) => {
        let res = await ref.urbanAPI(message, args);
        let term;
        if (!args.length) {
            term = "^(°×°)^";
        } else {
            for (let a = 1; a < args.length; a++) {
                if (args[a] != null || args[a] != false) {
                    term += args[a];
                    term += " ";
                }
            }
            if (term.length) {
                term = term[0].toUpperCase() + term.substring(1);
                term = term.trim();
            } else {
                term = "";
            }
        }
        ref.embed(message, term, res);
    },
    dog: async(message, args) => {
        bot.woof(message, args);
    },
    ero: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.ero();
                s = eval(s);
                ref.embed(message, "Erotic", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    erotic(message, args) => {
        bot.ero(message, args);
    },
    feet: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.feet();
                s = eval(s);
                ref.embed(message, "F E E T", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    femdom: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.femdom();
                s = eval(s);
                ref.embed(message, "F E M D O M", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    fox: async(message, args) => {
        try {
            let s = await n.sfw.foxGirl();
            s = eval(s);
            ref.embed(message, "Foxy", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    foxgirl: async(message, args) => {
        try {
            let s = await n.sfw.foxGirl();
            s = eval(s);
            ref.embed(message, "Foxy", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    gasm: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.gasm();
                s = eval(s);
                ref.embed(message, "Orgasm", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    goose: async(message, args) => {
        try {
            let s = await n.sfw.goose();
            s = eval(s);
            ref.embed(message, "Goose", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    h: (message, args) => {
        bot.help(message, args);
    },
    help: (message, args) => {
        if (args.length && args[0] == "nsfw") {
            ref.embed(message, "N S F W", helpMessage.nsfw);
        } else if (args.length && args[0] == "sfw") {
            ref.embed(message, "S F W", helpMessage.sfw);
        } else {
            ref.embed(message, "You summoned me Mortal", helpMessage.normal);
        }
    },
    hentai: async(message, args) => {
        if (message.channel.nsfw) {
            let h = await ref.api("hentai", "nsfw");
            h = JSON.parse(h);
            ref.embed(message, "H E N T A I", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
        } else {
            ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    },
    holo: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.holo();
                s = eval(s);
                ref.embed(message, "H O L O", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.holo();
                s = eval(s);
                ref.embed(message, "H O L O", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hug: async(message, args) => {
        try {
            let s = await n.sfw.hug();
            s = eval(s);
            ref.embed(message, "H U G", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    kitty: async(message, args) => {
        try {
            let s = await n.sfw.meow();
            s = eval(s);
            ref.embed(message, "meaw", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    kuni: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.kuni();
                s = eval(s);
                ref.embed(message, "K U N I", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    lewd: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await ref.api("hentai", "nsfw");
                h = JSON.parse(h);
                ref.embed(message, "L E W D", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    lizard: async(message, args) => {
        try {
            let s = await n.sfw.lizard();
            s = eval(s);
            ref.embed(message, "Pisssh...", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    meow: async(message, args) => {
        bot.cat(message, args);
    },
    neko: async(message, args) => {
        bot.catgirl(message, args);
    },
    orgasm: async(message, args) => {
        try {
            bot.gasm(message, args);
        } catch (err) {
            console.log(err);
        }
    },
    pat: async(message, args) => {
        try {
            let s = await n.sfw.poke();
            s = eval(s);
            ref.embed(message, "P A T", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    ping: (message, args) => {
        let timeTaken = Date.now() - message.createdTimestamp;
        ref.embed(message, "P O N G", `Pong ${timeTaken}ms`);
    },
    poke: async(message, args) => {
        try {
            let s = await n.sfw.poke();
            s = eval(s);
            ref.embed(message, "Poke", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    pussy: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                if (args.length) {
                    let s = await n.nsfw.pussyArt();
                    s = eval(s);
                    ref.embed(message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
                let s = await n.nsfw.pussy();
                s = eval(s);
                ref.embed(message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    server: async(message, args) => {
        let iuri = message.guild.iconURL();
        let a = message.guild.createdAt;
        let cat = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear() + "  " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        if (message.guild.available) {
            ref.embed(message, `${message.guild.name}`, `Members: ${message.guild.memberCount}\nCreated at: ${cat}\nRegion: ${message.guild.region}\nAbout: ${message.guild.description}`, `${iuri}`, `${message.guild.id}`);
        }
    },
    slap: async(message, args) => {
        try {
            let s = await n.sfw.slap();
            s = eval(s);
            ref.embed(message, "Slap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    solo: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                if (args[0] == "gif" || args[0] == "g") {
                    let s = await n.nsfw.girlSoloGif();
                    s = eval(s);
                    ref.embed(message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                } else {
                    let s = await n.nsfw.girlSolo();
                    s = eval(s);
                    ref.embed(message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    spank: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.spank();
                s = eval(s);
                ref.embed(message, "S P A N K", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tickle: async(message, args) => {
        try {
            let s = await n.sfw.poke();
            s = eval(s);
            ref.embed(message, "Tickle", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    tits: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.tits();
                s = eval(s);
                ref.embed(message, "T I T S", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    trap: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.trap();
                s = eval(s);
                ref.embed(message, "Trap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    waifu: async(message, args) => {
        try {
            let s = await n.nsfw.waifu();
            s = eval(s);
            ref.embed(message, "Waifu", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    wallpaper: async(message, args) => {
        //Both for NSFW and SFW
        try {
            let h = await ref.api("wallpaper", "sfw");
            h = JSON.parse(h);
            ref.embed(message, "WALLPAPER", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
        } catch (err) {
            console.log(err);
        }
    },
    woof: async(message, args) => {
        try {
            let s = await n.sfw.woof();
            s = eval(s);
            ref.embed(message, "woof woof", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    wp: async(message, args) => {
        bot.wallpaper(message, args);
    },
    yuri: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.yuri();
                s = eval(s);
                ref.embed(message, "Y U R I", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embed(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = bot;
const helpMessage = {
    normal: "Couldn't find your way around ?\n\n\n**For NSFW commands use**\n`.help`  `nsfw`\n\n\n**For SFW commands use**\n`.help`  `sfw`\n\n\n\n[The usage can be found here](https://moyshik7.github.io/dis/commands.html)",
    nsfw: "**perverted soul** \n\n\n ``` .anal\n.avatar\n.bj\n.blowjob\n.catgirl\n.classic\n.cs\n.cumslut\n.cumsluts\n.feet\n.femdom\n.hentai\n.kuni\n.lewd\n.neko\n.pussy\n.solo\n.spank\n.tits\n.trap\n.yuri ```\n\n\n**NSFW content will be given only to NSFW channels**[The usage can be found here](https://moyshik7.github.io/dis/commands.html)",
    sfw: "**heaven smiles**\n\n\n```\n.anime\n.baka\n.cat\n.catgirl\n.cuddle\n.define\n.dog\n.fox\n.foxgirl\n.goose\n.h\n.help\n.holo\n.lizard\n.neko\n.pat\n.ping\n.poke\n.slap\n.spank\n.tickle\n.waifu\n.wallpaper\n.woof\n.wp```\n[The usage can be found here](https://moyshik7.github.io/dis/commands.html)"
}