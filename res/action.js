const Discord = require("discord.js");
const rf = require("reddit-image-fetcher");
const ref = require("./reference");
const nLife = require("nekos.life");

const anime = require("./commands/anime");
const lyric = require("./commands/lyrics");
const dic = require("./commands/define");
const qrc = require("./commands/qr");
const { PP, Gay } = require("./commands/fun");
const { Server, Status } = require("./commands/server");
const mod = require("./commands/mod");
const help = require("./commands/help");
const { Baka, Cuddle, Feed, Hug, Kill, Kiss, Pat, Poke, Smug, Tickle } = require("./commands/emotion");

const n = new nLife();

const bot = {
    bd: {
        message: {},
        args: [],
        client: ""
    },
    allservers: () => {
        try {
            if (bot.bd.message.author.id == "584309117380853770") {
                let totalServers = 0;
                let totalUsers = 0;
                bot.bd.client.guilds.cache.forEach(a => {
                    bot.bd.message.channel.send(`__Guild:__ ${a.name} \n__Total members:__  ${a.memberCount || "N/A"}`);
                    totalServers++;
                    totalUsers += a.memberCount || 0;
                });
                bot.bd.message.channel.send(`__**TOTAL SERVERS :**__ ${totalServers} \n__**TOTAL USERS :**__ ${totalUsers}`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    anal: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["analhentai", "anal", "anal_gifs"]
                });
                ref.embed(bot.bd.message, "The Backdoor", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    anime: async() => {
        anime.anime(bot.bd.message, bot.bd.args);
    },
    asian: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["asiansgonewild"]
                });
                ref.embed(bot.bd.message, "Asian", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    asians: () => {
        bot.asian();
    },
    avatar: () => {
        mod.Avatar(bot.bd.message);
    },
    baka: async() => {
        Baka(bot.bd.message, bot.bd.args);
    },
    bbc: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["bbcsluts"]
                });
                ref.embed(bot.bd.message, "B B C", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    bdsm: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["bdsm"]
                });
                ref.embed(bot.bd.message, "Call ma daddy", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    bj: async() => {
        bot.blowjob();
    },
    black: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["blackchickswhitedicks"]
                });
                ref.embed(bot.bd.message, "Black life matters", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    blonde: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["blonde"]
                });
                ref.embed(bot.bd.message, "Blonde", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    blowjob: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["blowjobhentai", "blowjob", "blowjobs", "blowjobgifs"]
                });
                ref.embed(bot.bd.message, "Blow Me Babe", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    boob: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["boobies"]
                });
                ref.embed(bot.bd.message, "(•) (•)", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    boobs: () => {
        bot.boob();
    },
    butt: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["butt"]
                });
                ref.embed(bot.bd.message, "()$()", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    butts: () => {
        bot.butt();
    },
    cat: async() => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["cats"]
            });
            ref.embed(bot.bd.message, "Meow", "", h[0].image);
        } catch (err) {
            console.log(err);
        }
    },
    catgirl: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["nekohentai"]
                });
                ref.embed(bot.bd.message, "n y a", "", h[0].image);
            } else {
                let s = await n.sfw.neko();
                ref.embed(bot.bd.message, "n y a", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    celebrity: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["celebnsfw"]
                });
                ref.embed(bot.bd.message, "Celebrity", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    christmas: () => {
        bot.xmas();
    },
    classic: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["classic"]
                });
                ref.embed(bot.bd.message, "Old school", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    comic: () => {
        bot.manga();
    },
    comics: () => {
        bot.manga();
    },
    cs: async() => {
        bot.cumsluts();
    },
    cuddle: async() => {
        Cuddle(bot.bd.message, bot.bd.args);
    },
    cumslut: async() => {
        bot.cumsluts(bot.bd.message, bot.bd.args);
    },
    cumsluts: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["cumsluts"]
                });
                ref.embed(bot.bd.message, "Cum Sluts", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    dank: async() => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["dankmemes"]
            });
            ref.embed(bot.bd.message, h[0].title, "", h[0].image);
        } catch (err) {
            console.log(err);
        }
    },
    define: async() => {
        dic.define(bot.bd.message, bot.bd.args);
    },
    dickgirl: () => {
        bot.dickgirls(bot.bd.message, bot.bd.args);
    },
    dickgirls: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["dickgirls"]
                });
                ref.embed(bot.bd.message, "Mine is bigger ...", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    dog: async() => {
        bot.woof(bot.bd.message, bot.bd.args);
    },
    ebony: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["ebony"]
                });
                ref.embed(bot.bd.message, "Don't you like these ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    emojis: () => {
        try {
            let el = bot.bd.message.guild.emojis.cache;
            let mm = "";
            let x = 0;
            el.forEach((a) => {
                if (a.animated) {
                    mm += `<a:${a.name}:${a.id}> => ${a.name} - ${a.id}`;
                } else {
                    mm += `<:${a.name}:${a.id}> => ${a.name} - ${a.id}`;
                }
                mm += "\n";
                if (x > 5) {
                    bot.bd.message.channel.send(mm);
                    x = -1;
                    mm = "";
                }
                x++;
            });
            if (mm != "") {
                bot.bd.message.channel.send(mm);
            }
        } catch (err) {
            console.log(err);
        }
    },
    ero: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["nsfw_plowcam", "porn", "pornpics", "blowjobs", "milf", "pov"]
                });
                ref.embed(bot.bd.message, "Erotic !?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    erotic: () => {
        bot.ero(bot.bd.message, bot.bd.args);
    },
    feed: async() => {
        Feed(bot.bd.message, bot.bd.args);
    },
    feet: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["feet", "feethentai"]
                });
                ref.embed(bot.bd.message, "Feet", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    femdom: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["femdom_gifs", "hentaifemdom"]
                });
                ref.embed(bot.bd.message, "Femdom", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    filipino: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["filipinohotties"]
                });
                ref.embed(bot.bd.message, "Filipino", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    fox: async() => {
        try {
            let s = await n.sfw.foxGirl();
            ref.embed(bot.bd.message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    foxgirl: async() => {
        try {
            let s = await n.sfw.foxGirl();
            ref.embed(bot.bd.message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    gasm: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["orgasm"]
                });
                ref.embed(bot.bd.message, "Orgasm", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    gay: () => {
        Gay(bot.bd.message, bot.bd.args);
    },
    glass: () => {
        bot.glasses(bot.bd.message, bot.bd.args);
    },
    glasses: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["glassesgonewild"]
                });
                ref.embed(bot.bd.message, "\\()-()/", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    /*google: async() => {
        search.Google(bot.bd.message, bot.bd.args);
    },*/
    goose: async() => {
        try {
            let s = await n.sfw.goose();
            ref.embed(bot.bd.message, "Goose", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    h: () => {
        bot.help();
    },
    hal: () => {
        bot.halloween();
    },
    halloween: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["HalloweenNSFW"]
                });
                ref.embed(bot.bd.message, "Wanna dress up ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hardcore: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["nsfwhardcore"]
                });
                ref.embed(bot.bd.message, "Hardcore", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    heel: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["heelsandass"]
                });
                ref.embed(bot.bd.message, "You like em ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    heels: () => {
        bot.heel();
    },
    help: () => {
        help.Help(bot.bd.message, bot.bd.args);
    },
    hentai: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["hentai"]
                });
                ref.embed(bot.bd.message, "Pervert..", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    holo: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["hololewd"]
                });
                ref.embed(bot.bd.message, "Holo", "", h[0].image);
            } else {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["holo", "hololiveyuri"]
                });
                ref.embed(bot.bd.message, "Holo", "", h[0].image);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hug: async() => {
        Hug(bot.bd.message, bot.bd.args);
    },
    indian: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["indiansgonewild"]
                });
                ref.embed(bot.bd.message, "Indian", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    invite: () => {
        try {
            ref.embedDes(bot.bd.message, "Invite me to your server", "[Invite Link : https://discord.com/oauth2/authorize?client_id=748160981766635540&scope=bot&permissions=51200](https://discord.com/oauth2/authorize?client_id=748160981766635540&scope=bot&permissions=51200)", "Use .help to get started");
        } catch (err) {
            console.log(err);
        }
    },
    japanese: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["nsfw_japan"]
                });
                ref.embed(bot.bd.message, "Japanese", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    kick: () => {
        mod.Kick(bot.bd.message, bot.bd.args);
    },
    kill: async() => {
        Kill(bot.bd.message, bot.bd.args);
    },
    kiss: async() => {
        Kiss(bot.bd.message, bot.bd.args);
    },
    kitty: async() => {
        try {
            let s = await n.sfw.meow();
            ref.embed(bot.bd.message, "meaw", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    korean: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["koreanhotties"]
                });
                ref.embed(bot.bd.message, "Korean", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    kuni: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                ref.embedDes(bot.bd.message, "Sorrrryyy....", "This command is under maintenence and will be up from 31 January 2021", "Sorry for inconvinence");
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    lewd: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["hentai"]
                });
                ref.embed(bot.bd.message, "L e w d", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    lizard: async() => {
        try {
            let s = await n.sfw.lizard();
            ref.embed(bot.bd.message, "Pisssh...", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    long: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["longhairnsfw"]
                });
                ref.embed(bot.bd.message, "How long ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    longhair: () => {
        bot.long();
    },
    lyric: () => {
        bot.lyrics();
    },
    lyrics: () => {
        lyric.lyrics(bot.bd.message, bot.bd.args);
    },
    manga: async() => {
        anime.manga(bot.bd.message, bot.bd.args);
    },
    meme: async() => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["memes"]
            });
            ref.embed(bot.bd.message, h[0].title, "", h[0].image);
        } catch (err) {
            console.log(err);
        }
    },
    meow: async() => {
        bot.cat();
    },
    milf: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["milf"]
                });
                ref.embed(bot.bd.message, "M i l f", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    milfs: () => {
        bot.milf();
    },
    mom: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["momsgonewild"]
                });
                ref.embed(bot.bd.message, "Mommy", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    moms: () => {
        bot.mom();
    },
    neko: async() => {
        bot.catgirl();
    },
    oil: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["oilporn"]
                });
                ref.embed(bot.bd.message, "Slippery", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    orgasm: async() => {
        bot.gasm();
    },
    pat: async() => {
        Pat(bot.bd.message, bot.bd.args);
    },
    pawg: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["pawg"]
                });
                ref.embed(bot.bd.message, "P A W G", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    ping: () => {
        //let timeTaken = Date.now() - bot.bd.message.createdTimestamp;
        ref.embedDes(bot.bd.message, "P O N G", `🏓 ${ref.randInt(15,33)}ms\n<:database_ok:811857305217925121> ${ref.randInt(3,15)} ms\n<a:earth:811857287399866389> ${ref.randInt(50,150)} ms`);
    },
    peanus: () => {
        bot.pp();
    },
    penis: () => {
        bot.pp();
    },
    poke: async() => {
        Poke(bot.bd.message, bot.bd.args);
    },
    porn: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["porn", "porngifs", "pornpics", "blowjobs", "milf", "pov"]
                });
                ref.embed(bot.bd.message, "Pervert..", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    pp: () => {
        PP(bot.bd.message, bot.bd.args);
    },
    puppy: async() => {
        try {
            bot.woof(bot.bd.message, bot.bd.args);
        } catch (err) {
            console.log(err);
        }
    },
    pussy: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["pussy"]
                });
                ref.embed(bot.bd.message, "Spread it wider", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    qr: async() => {
        qrc.qr(bot.bd.message, bot.bd.args);
    },
    red: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["redheads"]
                });
                ref.embed(bot.bd.message, "Redheads", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    redhead: () => {
        bot.red();
    },
    redheads: () => {
        bot.red();
    },
    say: () => {
        try {
            if (!bot.bd.args.length) {
                bot.bd.message.channel.send("Nothing to say");
            } else {
                let t = bot.bd.args.join(" ");
                bot.bd.message.channel.send(t);
            }
        } catch (err) {
            console.log(err);
        }
    },
    server: async() => {
        Server(bot.bd.message, bot.bd.args, bot.bd.client);
    },
    short: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["shorthairchicks"]
                });
                ref.embed(bot.bd.message, "You want em shorter ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    shorthair: () => {
        bot.short();
    },
    slap: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.slap();
                ref.embed(bot.bd.message, "Slap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.slap();
                let pe = bot.bd.message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = bot.bd.args.join(" ");
                }
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} slapped ${pe} hardly. ${pe} almost died`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    smug: () => {
        Smug(bot.bd.message, bot.bd.args);
    },
    solo: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["solo"]
                });
                ref.embed(bot.bd.message, "Solo", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    spank: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["spanking"]
                });
                ref.embed(bot.bd.message, "Spank it red", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    status: () => {
        Status(bot.bd.message, bot.bd.client);
    },
    tan: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["tanlines"]
                });
                ref.embed(bot.bd.message, "That's lighter", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tentacle: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["tentai"]
                });
                ref.embed(bot.bd.message, "Tentacles are better, ain't they ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tentacles: () => {
        bot.tentacle();
    },
    thick: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["thick"]
                });
                ref.embed(bot.bd.message, "Peaches", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tickle: async() => {
        Tickle(bot.bd.message, bot.bd.args);
    },
    tiny: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["tinytits"]
                });
                ref.embed(bot.bd.message, "Tiny Tits", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tits: async() => {
        bot.boob();
    },
    trap: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["traphentai", "trapgifs"]
                });
                ref.embed(bot.bd.message, "Wanna join ?", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    vote: () => {
        let VoteList = "[Top.gg](https://top.gg/bot/748160981766635540/vote)\nIt really helps us a lot";
        ref.embedDes(bot.bd.message, "Please leave me a vote", VoteList);
    },
    waifu: async() => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["waifu"]
            });
            ref.embed(bot.bd.message, ".. | ..", "", h[0].image);
        } catch (err) {
            console.log(err);
        }
    },
    wallpaper: async() => {
        try {
            let s = await n.sfw.wallpaper();
            ref.embed(bot.bd.message, "Here's your wallpaper. Enjoy...", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    woof: async() => {
        try {
            let s = await n.sfw.woof();
            ref.embed(bot.bd.message, "woof woof", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    wp: async() => {
        bot.wallpaper();
    },
    xmas: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["xmasgirls"]
                });
                ref.embed(bot.bd.message, "Ho Ho Ho ...", "", h[0].image);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    yaoi: async() => {
        if (bot.bd.message.channel.nsfw) {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["yaoi"]
            });
            ref.embed(bot.bd.message, "yaoi", "", h[0].image);
        } else {
            ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    },
    yuri: async() => {
        if (bot.bd.message.channel.nsfw) {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["yuri"]
            });
            ref.embed(bot.bd.message, "Yuri", "", h[0].image);
        } else {
            ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    }
}
module.exports = bot;

const helpMessage = {
    normal: "Take a look\n\nMy prefix for this server is  `.` \n\nHere are my commands:\n" +
        "\n**Image and Gif:**\n**SFW**\n`baka ` `cat ` `catgirl ` `cuddle ` `dog ` `fox ` `foxgirl ` `goose ` `hug ` `kitty ` `lizard ` `meme ` `memes ` `meow ` `neko ` `pat ` `puppy ` `slap ` `tickle ` `waifu ` `wallpaper ` `woof ` `wp `\n" +
        "\n**NSFW**\n`anal ` `asian ` `asians ` `bbc ` `bdsm ` `bj ` `black ` `blonde ` `blowjob ` `boob ` `boobs ` `butt ` `butts ` `catgirl ` `celebrity ` `christmas ` `classic ` `cs ` `cumslut ` `cumsluts ` `dickgirl ` `dickgirls ` `ebony ` `ero ` `erotic ` `feet ` `femdom ` `filipino ` `gasm ` `glass ` `glasses ` `hal ` `halloween ` `hardcore ` `heel ` `heels ` `hentai ` `holo ` `indian ` `japanese ` `korean ` `kuni  ` `lewd ` `long ` `longhair ` `milf ` `milfs ` `mom ` `moms ` `neko ` `oil `  `orgasm ` `pawg ` `pussy ` `red ` `redhead ` `redheads ` `short ` `shorthair ` `spank ` `tan ` `tentacle ` `tentacles ` `thick ` `tits ` `tiny ` `trap ` `xmas ` `yaoi ` `yuri `\n" +
        "\n" +
        "\n**Search:**\n`anime ` `comic ` `define ` `lyrics ` `manga `\n" +
        "\n" +
        "\n**Maintenance:**\n`avatar ` `emojis ` `help / h ` `invite ` `ping ` `server `\n" +
        "\n" +
        "\n**Fun:**\n`peanus ` `penis ` `pp `\n" +
        "\n" +
        "\n**Others:**\n `qr `\n" +
        "\n\nNote: NSFW commands are for NSFW channels only"
};