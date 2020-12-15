const Discord = require("discord.js");
const rf = require("reddit-image-fetcher");
const ref = require("./reference.js");
const nLife = require("nekos.life");
const anime = require("./commands/anime.js");
const lyric = require("./commands/lyrics.js");
const dic = require("./commands/define.js");
const qrc = require("./commands/qr.js");
const fun = require("./commands/fun.js");

const n = new nLife();

const color = require("./color.json");

const bot = {
    anal: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.anal();
                ref.embed(message, "A N A L", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    anime: async(message, args) => {
        anime.anime(message, args);
    },
    avatar: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.avatar();
                ref.embed(message, "Avatar", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    baka: async(message, args) => {
        try {
            let s = await n.sfw.poke();
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
                ref.embed(message, `Plubin gave blowjob to ${message.author.username}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    boob: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["boobies"]
                });
                ref.embed(message, "(•) (•)", "", h[0].image);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch(err) {
            console.log(err);
        }
    },
    boobs: (message, args) => {
        bot.boob(message, args);
    },
    butt: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["butt"]
                });
                ref.embed(message, "()$()", "", h[0].image);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch(err) {
            console.log(err);
        }
    },
    butts: (message, args) => {
        bot.butt(message, args);
    },
    cat: async(message, args) => {
        try {
            let s = await n.sfw.meow();
            ref.embed(message, "meow", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    catgirl: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["nekohentai"]
                });
                ref.embed(message, "nya", "", h[0].image);
            } else {
                let s = await n.sfw.neko();
                ref.embed(message, "n y a", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    classic: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.classic();
                ref.embed(message, "Classic", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    comic: (message, args) => {
        bot.manga(message, args);
    },
    comics: (message, args) => {
        bot.manga(message, args);
    },
    cs: async(message, args) => {
        bot.cumsluts(message, args);
    },
    cuddle: async(message, args) => {
        try {
            if (!args.length) {
                let s = await n.sfw.cuddle();
                ref.embed(message, "I will cuddle you", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.cuddle();
                let pe = message.mentions.members.first().user.username || args.join(" ");
                ref.embed(message, `${message.author.username} cuddled ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
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
                ref.embed(message, "Cum Sluts", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    define: async(message, args) => {
        dic.define(message, args);
    },
    dickgirl: (message, args) => {
        bot.dickgirls(message, args);
    },
    dickgirls: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["dickgirls"]
                });
                ref.embed(message, "Mine is bigger ...", "", h[0].image);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch(err) {
            console.log(err);
        }
    },
    dog: async(message, args) => {
        bot.woof(message, args);
    },
    emoji: (message, args) => {
        try {
            let el = message.guild.emojis.cache;
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
                    message.channel.send(mm);
                    x = -1;
                    mm = "";
                }
                x++;
            });
            if (mm != "") {
                message.channel.send(mm);
            }
        } catch(err) {
            console.log(err);
        }
    },
    ero: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.ero();
                ref.embed(message, "Erotic", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    erotic: (message, args) => {
        bot.ero(message, args);
    },
    feet: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.feet();
                ref.embed(message, "F E E T", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    femdom: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.femdom();
                ref.embed(message, "F E M D O M", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    fox: async(message, args) => {
        try {
            let s = await n.sfw.foxGirl();
            ref.embed(message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    foxgirl: async(message, args) => {
        try {
            let s = await n.sfw.foxGirl();
            ref.embed(message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    gasm: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.gasm();
                ref.embed(message, "Orgasm", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    glass: (message, args) => {
        bot.glasses(message, args);
    },
    glasses: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["glassesgonewild"]
                });
                ref.embed(message, "\\()-()/", "", h[0].image);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch(err) {
            console.log(err);
        }
    },
    goose: async(message, args) => {
        try {
            let s = await n.sfw.goose();
            ref.embed(message, "Goose", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    h: (message, args) => {
        bot.help(message, args);
    },
    help: (message, args) => {
        try {
            ref.embedDes(message, "Welcome mortals", helpMessage.normal);
        } catch(err) {
            console.log(err);
        }
    },
    hentai: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let h = await rf.fetch({
                    type: 'custom',
                    total: 1,
                    subreddit: ["hentai"]
                });
                ref.embed(message, "Pervert..", "", h[0].image);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch(err) {
            console.log(err);
        }
    },
    holo: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.holo();
                ref.embed(message, "H O L O", "", s.url);
            } else {
                let s = await n.sfw.holo();
                ref.embed(message, "H O L O", "", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hug: async(message, args) => {
        try {
            if (!args.length) {
                let s = await n.sfw.hug();
                ref.embed(message, "H U G", "", s.url);
            } else {
                let s = await n.sfw.hug();
                let pe = message.mentions.members.first().user.username;
                ref.embed(message, `${message.author.username} hugged ${pe} tightly ♥️`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    invite: (message, args) => {
        try {
            ref.embedDes(message, "Invite me to your server", "https://discord.com/oauth2/authorize?client_id=748160981766635540&scope=bot", "Use .help to get started");
        } catch(err) {
            console.log(err);
        }
    },
    kitty: async(message, args) => {
        try {
            let s = await n.sfw.meow();
            ref.embed(message, "meaw", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    kuni: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.kuni();
                ref.embed(message, "K U N I", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
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
                ref.embed(message, "L E W D", "", h.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    lizard: async(message, args) => {
        try {
            let s = await n.sfw.lizard();
            ref.embed(message, "Pisssh...", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    lyric: (message, args) => {
        bot.lyrics(message, args);
    },
    lyrics: (message, args) => {
        lyric.lyrics(message, args);
    },
    manga: async(message, args) => {
        anime.manga(message, args);
    },
    meme: async(message, args) => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["memes"]
            });
            ref.embed(message, "Here's your meme", "", h[0].image);
        } catch(err) {
            console.log(err);
        }
    },
    memes: async(message, args) => {
        bot.meme(message, args);
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
            if (!args.length) {
                let s = await n.sfw.pat();
                ref.embed(message, "P A T", "", s.url);
            } else {
                let s = await n.sfw.pat();
                let pe = message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = args.join(" ");
                }
                ref.embed(message, `${message.author.username} is patting ${pe}'s head litely`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    ping: (message, args) => {
        let timeTaken = Date.now() - message.createdTimestamp;
        ref.embedDes(message, "P O N G", `🏓 ${timeTaken}ms`);
    },
    peanus: (message, args) => {
        bot.pp(message, args);
    },
    penis: (message, args) => {
        bot.pp(message, args);
    },
    poke: async(message, args) => {
        try {
            if (!args.length) {
                let s = await n.sfw.poke();
                ref.embed(message, "Poke", "", s.url);
            } else {
                let s = await n.sfw.poke();
                let pe = message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = args.join(" ");
                }
                ref.embed(message, `${message.author.username} keeps poking ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    pp: (message, args) => {
        fun.pp(message, args);
    },
    puppy: async(message, args) => {
        try {
            bot.woof(message, args);
        }catch(err) {
            console.log(err);
        }
    },
    pussy: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                if (args.length) {
                    let s = await n.nsfw.pussyArt();
                    ref.embed(message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
                let s = await n.nsfw.pussy();
                ref.embed(message, "P U S S Y", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    qr: async (message, args) => {
        qrc.qr(message, args);
    },
    server: async(message, args) => {
        let timeTaken = Date.now() - message.createdTimestamp;
        let a = message.guild.createdAt;
        let cat = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear() + "  " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        //let owner = client.users.fetch(message.guild.ownerID);
        let embb = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .addFields(
            {
                name: '\u200B', value: '\u200B'
            },
            {
                name: "<a:open:779937488188735531> Created on:", value: `\t${cat}`
            },
            {
                name: "<a:headbump:760437043938852885> Members:", value: `\t${message.guild.memberCount}`
            },
            {
                name: "<a:earth:779933308468461599> Server region:", value: `\t${message.guild.region}`
            },
            {
                name: "<a:blob:779938621687201812> Description:", value: `\t${message.guild.description}`
            },
            //{name: "👑 Owner:", value: `\t${owner.username}`},
            {
                name: "💬 Total channels:", value: `\t${message.guild.channels.cache.size}`
            },
            {
                name: "🏓 Ping :", value: `\t${timeTaken} ms`
            },
            {
                name: '\u200B', value: '\u200B'
            }
        )
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
        message.channel.send(embb);
    },
    slap: async(message, args) => {
        try {
            if (!args.length) {
                let s = await n.sfw.slap();
                ref.embed(message, "Slap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.slap();
                let pe = message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = args.join(" ");
                }
                ref.embed(message, `${message.author.username} slapped ${pe} hardly. ${pe} almost died`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    solo: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                if (args[0] == "gif" || args[0] == "g") {
                    let s = await n.nsfw.girlSoloGif();;
                    ref.embed(message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                } else {
                    let s = await n.nsfw.girlSolo();;
                    ref.embed(message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                }
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    spank: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.spank();
                ref.embed(message, "Spank me harder... daddy....", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tickle: async(message, args) => {
        try {
            if (!args.length) {
                let s = await n.sfw.tickle();
                ref.embed(message, "Tickle", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                let s = await n.sfw.tickle();
                let pe = message.mentions.members.first();
                if (pe != undefined) {
                    pe = pe.user.username;
                } else {
                    pe = args.join(" ");
                }
                ref.embed(message, `${message.author.username} keeps tickling ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    tits: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.tits();
                ref.embed(message, "T I T T I E S", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    trap: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.trap();
                ref.embed(message, "Did you fell for it ?", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    vote: (message, args) => {
        let VoteList = "[Discordbotlist.com](https://discordbotlist.com/bots/plubin)\n[Top.gg](https://top.gg/bot/748160981766635540/vote)";
        ref.embedDes(message, "Please leave me a vote", VoteList);
    },
    waifu: async(message, args) => {
        try {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["waifu"]
            });
            ref.embed(message, ".. | ..", "", h[0].image);
        } catch(err) {
            console.log(err);
        }
    },
    wallpaper: async(message, args) => {
        try {
            let s = await n.sfw.wallpaper();
            ref.embed(message, "Here's your wallpaper. Enjoy...", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    woof: async(message, args) => {
        try {
            let s = await n.sfw.woof();
            ref.embed(message, "woof woof", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    wp: async(message, args) => {
        bot.wallpaper(message, args);
    },
    yaoi: async(message, args) => {
        if (message.channel.nsfw) {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["yaoi"]
            });
            ref.embed(message, "yaoi", "", h[0].image);
        } else {
            ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    },
    yuri: async(message, args) => {
        if (message.channel.nsfw) {
            let h = await rf.fetch({
                type: 'custom',
                total: 1,
                subreddit: ["yuri"]
            });
            ref.embed(message, "Yuri", "", h[0].image);
        } else {
            ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    }
}
module.exports = bot;

const helpMessage = {
    normal: "Take a look\n\nMy prefix for this server is  `.` \n\nHere are my commands:\n\n**Image and Gif:**\n**SFW**\n`baka `  `cat ` `catgirl `  `cuddle `  `dog `  `fox `  `foxgirl `  `goose `  `hug `  `kitty `  `lizard `  `meme `  `memes `  `meow `  `neko `  `pat `  `puppy `  `slap `  `tickle `  `waifu `  `wallpaper `  `woof `  `wp `\n\n**NSFW**\n`anal ` `avatar ` `bj ` `blowjob `  `boob `  `boobs `  `butt `  `butts `  `catgirl `  `classic `  `cs `  `cumslut `  `cumsluts `  `dickgirl `  `dickgirls `  `ero `  `erotic `  `feet `  `femdom `  `gasm `  `glass `  `glasses `  `hentai `  `holo `  `kuni  ` `lewd `  `neko `  `orgasm `  `pussy `  `spank `  `tits `  `trap `  `yaoi `  `yuri `\n\n\n**Search:**\n`anime `  `comic `  `define `  `lyrics `  `manga `\n\n\n**Maintenance:**\n`emoji `  `h `  `help `  `invite `  `ping `  `server `\n\n\n**Fun:**\n`peanus `  `penis `  `pp `\n\n\n**Others:**\n `qr `  \n\n\nNote: NSFW commands are for NSFW channels only"
}