const Discord = require("discord.js");
const rf = require("reddit-image-fetcher");
const ref = require("./reference.js");
const nLife = require("nekos.life");

const anime = require("./commands/anime.js");
const lyric = require("./commands/lyrics.js");
const dic = require("./commands/define.js");
const qrc = require("./commands/qr.js");
const fun = require("./commands/fun.js");
const server = require("./commands/server");

const n = new nLife();

const color = require("./color.json");

const bot = {
    bd: {
        message: {},
        args: [],
        client: ""
    },
    anal: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.anal();
                ref.embed(bot.bd.message, "A N A L", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    anime: async() => {
        anime.anime(bot.bd.message, bot.bd.args);
    },
    avatar: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.avatar();
                ref.embed(bot.bd.message, "Avatar", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    baka: async() => {
        try {
            let s = await n.sfw.poke();
            ref.embed(bot.bd.message, "Baka", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    bj: async() => {
        bot.blowjob(bot.bd.message, bot.bd.args);
    },
    blowjob: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.bJ();
                ref.embed(bot.bd.message, `Plubin gave blowjob to ${bot.bd.message.author.username}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
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
        bot.boob(bot.bd.message, bot.bd.args);
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
        bot.butt(bot.bd.message, bot.bd.args);
    },
    cat: async() => {
        try {
            let s = await n.sfw.meow();
            ref.embed(bot.bd.message, "meow", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
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
                ref.embed(bot.bd.message, "nya", "", h[0].image);
            } else {
                let s = await n.sfw.neko();
                ref.embed(bot.bd.message, "n y a", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    classic: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.classic();
                ref.embed(bot.bd.message, "Classic", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    comic: () => {
        bot.manga(bot.bd.message, bot.bd.args);
    },
    comics: () => {
        bot.manga(bot.bd.message, bot.bd.args);
    },
    cs: async() => {
        bot.cumsluts(bot.bd.message, bot.bd.args);
    },
    cuddle: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.cuddle();
                ref.embed(bot.bd.message, "I will cuddle you", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.cuddle();
                let pe = bot.bd.message.mentions.members.first().user.username || bot.bd.args.join(" ");
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} cuddled ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    cumslut: async() => {
        bot.cumsluts(bot.bd.message, bot.bd.args);
    },
    cumsluts: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.cumsluts();
                ref.embed(bot.bd.message, "Cum Sluts", "", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
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
    emoji: () => {
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
                let s = await n.nsfw.ero();
                ref.embed(bot.bd.message, "Erotic", "", s.url);
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
    feet: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.feet();
                ref.embed(bot.bd.message, "F E E T", "", s.url);
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
                let s = await n.nsfw.femdom();
                ref.embed(bot.bd.message, "F E M D O M", "", s.url);
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
                let s = await n.nsfw.gasm();
                ref.embed(bot.bd.message, "Orgasm", "", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
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
    goose: async() => {
        try {
            let s = await n.sfw.goose();
            ref.embed(bot.bd.message, "Goose", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    h: () => {
        bot.help(bot.bd.message, bot.bd.args);
    },
    help: () => {
        try {
            ref.embedDes(bot.bd.message, "Welcome mortals", helpMessage.normal);
        } catch (err) {
            console.log(err);
        }
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
                let s = await n.nsfw.holo();
                ref.embed(bot.bd.message, "H O L O", "", s.url);
            } else {
                let s = await n.sfw.holo();
                ref.embed(bot.bd.message, "H O L O", "", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hug: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.hug();
                ref.embed(bot.bd.message, "H U G", "", s.url);
            } else {
                let s = await n.sfw.hug();
                let pe = bot.bd.message.mentions.members.first().user.username;
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} hugged ${pe} tightly ♥️`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    invite: () => {
        try {
            ref.embedDes(bot.bd.message, "Invite me to your server", "https://discord.com/oauth2/authorize?client_id=748160981766635540&scope=bot", "Use .help to get started");
        } catch (err) {
            console.log(err);
        }
    },
    kitty: async() => {
        try {
            let s = await n.sfw.meow();
            ref.embed(bot.bd.message, "meaw", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    kuni: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.kuni();
                ref.embed(bot.bd.message, "K U N I", "", s.url);
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
                let h = await ref.api("hentai", "nsfw");
                h = JSON.parse(h);
                ref.embed(bot.bd.message, "L E W D", "", h.url);
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
    lyric: () => {
        bot.lyrics(bot.bd.message, bot.bd.args);
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
            ref.embed(bot.bd.message, "Here's your meme", "", h[0].image);
        } catch (err) {
            console.log(err);
        }
    },
    memes: async() => {
        bot.meme(bot.bd.message, bot.bd.args);
    },
    meow: async() => {
        bot.cat(bot.bd.message, bot.bd.args);
    },
    neko: async() => {
        bot.catgirl(bot.bd.message, bot.bd.args);
    },
    orgasm: async() => {
        try {
            bot.gasm(bot.bd.message, bot.bd.args);
        } catch (err) {
            console.log(err);
        }
    },
    pat: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.pat();
                ref.embed(bot.bd.message, "P A T", "", s.url);
            } else {
                let s = await n.sfw.pat();
                let pe = bot.bd.message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = bot.bd.args.join(" ");
                }
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} is patting ${pe}'s head litely`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    ping: () => {
        let timeTaken = Date.now() - bot.bd.message.createdTimestamp;
        ref.embedDes(bot.bd.message, "P O N G", `🏓 ${timeTaken}ms`);
    },
    peanus: () => {
        bot.pp(bot.bd.message, bot.bd.args);
    },
    penis: () => {
        bot.pp(bot.bd.message, bot.bd.args);
    },
    poke: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.poke();
                ref.embed(bot.bd.message, "Poke", "", s.url);
            } else {
                let s = await n.sfw.poke();
                let pe = bot.bd.message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = bot.bd.args.join(" ");
                }
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} keeps poking ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    pp: () => {
        fun.pp(bot.bd.message, bot.bd.args);
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
                if (bot.bd.args.length) {
                    let s = await n.nsfw.pussyArt();
                    ref.embed(bot.bd.message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
                let s = await n.nsfw.pussy();
                ref.embed(bot.bd.message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
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
    server: async() => {
        server.server(bot.bd.message, bot.bd.args);
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
    solo: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                if (bot.bd.args[0] == "gif" || bot.bd.args[0] == "g") {
                    let s = await n.nsfw.girlSoloGif();;
                    ref.embed(bot.bd.message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                } else {
                    let s = await n.nsfw.girlSolo();;
                    ref.embed(bot.bd.message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
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
                let s = await n.nsfw.spank();
                ref.embed(bot.bd.message, "Spank me harder... daddy....", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tickle: async() => {
        try {
            if (!bot.bd.args.length) {
                let s = await n.sfw.tickle();
                ref.embed(bot.bd.message, "Tickle", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.tickle();
                let pe = bot.bd.message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = bot.bd.args.join(" ");
                }
                ref.embed(bot.bd.message, `${bot.bd.message.author.username} keeps tickling ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tits: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.tits();
                ref.embed(bot.bd.message, "T I T T I E S", "", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    trap: async() => {
        try {
            if (bot.bd.message.channel.nsfw) {
                let s = await n.nsfw.trap();
                ref.embed(bot.bd.message, "Did you fell for it ?", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(bot.bd.message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    vote: () => {
        let VoteList = "[Discordbotlist.com](https://discordbotlist.com/bots/plubin)\n[Top.gg](https://top.gg/bot/748160981766635540/vote)";
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
        bot.wallpaper(bot.bd.message, bot.bd.args);
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
    normal: "Take a look\n\nMy prefix for this server is  `.` \n\nHere are my commands:\n\n**Image and Gif:**\n**SFW**\n`baka `  `cat ` `catgirl `  `cuddle `  `dog `  `fox `  `foxgirl `  `goose `  `hug `  `kitty `  `lizard `  `meme `  `memes `  `meow `  `neko `  `pat `  `puppy `  `slap `  `tickle `  `waifu `  `wallpaper `  `woof `  `wp `\n\n**NSFW**\n`anal ` `avatar ` `bj ` `blowjob `  `boob `  `boobs `  `butt `  `butts `  `catgirl `  `classic `  `cs `  `cumslut `  `cumsluts `  `dickgirl `  `dickgirls `  `ero `  `erotic `  `feet `  `femdom `  `gasm `  `glass `  `glasses `  `hentai `  `holo `  `kuni  ` `lewd `  `neko `  `orgasm `  `pussy `  `spank `  `tits `  `trap `  `yaoi `  `yuri `\n\n\n**Search:**\n`anime `  `comic `  `define `  `lyrics `  `manga `\n\n\n**Maintenance:**\n`emoji `  `h `  `help `  `invite `  `ping `  `server `\n\n\n**Fun:**\n`peanus `  `penis `  `pp `\n\n\n**Others:**\n `qr `  \n\n\nNote: NSFW commands are for NSFW channels only"
}