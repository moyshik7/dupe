const Discord = require("discord.js");
const fetch = require('node-fetch');
const ref = require("./reference.js");
const nLife = require("nekos.life");

const anime = require("./commands/anime.js");
const lyric = require("./commands/lyrics.js");

const n = new nLife();

const color = require("./color.json");

const bot = {
    anal: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.anal();
                s = eval(s);
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
                s = eval(s);
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
            s = eval(s);
            ref.embed(message, "Baka", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    bj: async(message, args) => {
    	try{
        	bot.blowjob(message, args);
        }catch(err){
        	console.log(err);
        }
    },
    blowjob: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.bJ();
                s = eval(s);
                ref.embed(message, `<@748160981766635540> gave blowjob to ${message.author.username}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
            	ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
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
                let h = await ref.api("neko", "nsfw");
                h = JSON.parse(h);
                ref.embed(message, "nya.", "[Support us on Patreon](https://www.patreon.com/plubin)", h.url);
            } else {
                let s = await n.sfw.neko();
                s = eval(s);
                ref.embed(message, "nya.", "", s.url);
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
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    comic: (message,args) => {
    	bot.manga(message,args);
    },
    comics: (message,args) => {
    	bot.manga(message,args);
    },
    cs: async(message, args) => {
        bot.cumsluts(message, args);
    },
    cuddle: async(message, args) => {
        try {
        	if(!args.length){
            	let s = await n.sfw.cuddle();
            	s = eval(s);
            	ref.embed(message, "I will cuddle you", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else{
            	let s = await n.sfw.cuddle();
            	s = eval(s);
            	let pe = message.mentions.members.first();
            	if(pe != undefined){
            		pe = pe.user.username;
            	}else{
            		pe = args.join(" ");
            	}
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
                s = eval(s);
                ref.embed(message, "Cum Sluts", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
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
        	term = args.join(" ");
        	term = term.charAt(0).toUpperCase() + term.slice(1);
        }
        ref.embedDes(message, term, res);
    },
    dog: async(message, args) => {
        bot.woof(message, args);
    },
    emoji: (message,args) => {
    	try{
    		let el = message.guild.emojis.cache;
    		let mm = "";
    		let x = 0;
    		el.forEach( (a) => {
    			if(a.animated){
    				mm += `<a:${a.name}:${a.id}> => ${a.name} - ${a.id}`;
    			}else{
    				mm += `<:${a.name}:${a.id}> => ${a.name} - ${a.id}`;
    			}
    			mm += "\n";
    			if(x > 5){
    				message.channel.send(mm);
    				x = -1;
    				mm = "";
    			}
    			x++;
    		});
    		if(mm != ""){
    			message.channel.send(mm);
    		}
    	} catch(err){
    		console.log(err);
    	}
    },
    ero: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.ero();
                s = eval(s);
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
                s = eval(s);
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
                s = eval(s);
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
            s = eval(s);
            ref.embed(message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    foxgirl: async(message, args) => {
        try {
            let s = await n.sfw.foxGirl();
            s = eval(s);
            ref.embed(message, "Foxy", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    gasm: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.gasm();
                s = eval(s);
                ref.embed(message, "Orgasm", "", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    goose: async(message, args) => {
        try {
            let s = await n.sfw.goose();
            s = eval(s);
            ref.embed(message, "Goose", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    h: (message, args) => {
        bot.help(message, args);
    },
    help: (message, args) => {
    	try{
    		ref.embedDes(message, "Welcome mortals", helpMessage.normal);
    	} catch(err){
    		console.log(err);
    	}
    },
    hentai: async(message, args) => {
        if (message.channel.nsfw) {
            let h = await ref.api("hentai", "nsfw");
            h = JSON.parse(h);
            ref.embed(message, "H E N T A I", "", h.url);
        } else {
            ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
        }
    },
    holo: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.holo();
                s = eval(s);
                ref.embed(message, "H O L O", "", s.url);
            } else {
                let s = await n.sfw.holo();
                s = eval(s);
                ref.embed(message, "H O L O", "", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    hug: async(message, args) => {
        try {
        	if(!args.length){
            	let s = await n.sfw.hug();
            	s = eval(s);
            	ref.embed(message, "H U G", "", s.url);
            }else{
            	let s = await n.sfw.hug();
            	s = eval(s);
            	let pe = message.mentions.members.first().user.username;
            	ref.embed(message, `${message.author.username} hugged ${pe} tightly ♥️`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    invite : (message,args) => {
    	if(args.length && args[0] == "bot"){
    		message.channel.send("\`https://discord.com/oauth2/authorize?client_id=748160981766635540&scope=bot\`");
    	}
    },
    kitty: async(message, args) => {
        try {
            let s = await n.sfw.meow();
            s = eval(s);
            ref.embed(message, "meaw", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    kuni: async(message, args) => {
        try {
            if (message.channel.nsfw) {
                let s = await n.nsfw.kuni();
                s = eval(s);
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
            s = eval(s);
            ref.embed(message, "Pisssh...", "", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    lyric: (message,args) => {
    	bot.lyrics(message,args);
    },
    lyrics: (message,args) => {
    	lyric.lyrics(message,args);
    },
    manga: async(message, args) => {
    	anime.manga(message, args);
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
        	if(!args.length){
            	let s = await n.sfw.pat();
            	s = eval(s);
            	ref.embed(message, "P A T", "", s.url);
            }else{
            	let s = await n.sfw.pat();
            	s = eval(s);
            	let pe = message.mentions.members.first();
            	if(pe != undefined){
            		pe = pe.user.username;
            	}else{
            		pe = args.join(" ");
            	}
            	ref.embed(message, `${message.author.username} is patting ${pe}'s head litely`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);		//'
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
    	try{
    		bot.pp(message,args);
    	}catch(err){
    		console.log(err);
    	}
    },
    penis: (message, args) => {
    	try{
    		bot.pp(message,args);
    	}catch(err){
    		console.log(err);
    	}
    },
    poke: async(message, args) => {
        try {
        	if(!args.length){
            	let s = await n.sfw.poke();
            	s = eval(s);
            	ref.embed(message, "Poke", "", s.url);
            }else{
            	let s = await n.sfw.poke();
            	s = eval(s);
            	let pe = message.mentions.members.first();
            	if(pe != undefined){
            		 pe = pe.user.username;
            	}else{
            		pe = args.join(" ");
            	}
            	ref.embed(message, `${message.author.username} keeps poking ${pe}`, "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }
        } catch (err) {
            console.log(err);
        }
    },
    pp: (message, args) => {
    	try{
    		let m = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    		let ym = ref.randArr(m);
    		let yp = "8"
    		if(ym == 0){
    			yp = "{(•)}\n\nIt don\'t exist bish"
    			ref.embedDes(message,"PP measurement :",t,"Women are also part of our community");
    		}else{
    			let s;
    			if(ym >=1 && ym <= 3){
    				s = "smol";
    			} else if(ym >=4 && ym <= 6){
    				s = "average";
    			} else if(ym >= 7 && ym <=9){
    			    s = "huge";
    			} else if(ym >= 10){
    				s = "an alien";
    			} else{
    				s = "like a chimney";
    			}
    			for(let x = 0;x< ym; x++){
    				yp += "=";
    			}
    			yp += "D";
    			yp = yp + `\n\nYour PP is ${ym} inch long\nThat\'s ${s}`;			//'
    		}
    	}catch(err){
    		console.log(err);
    	}
    },
    puppy: async(message, args) => {
    	try{
    		bot.woof(message, args);
    	}catch(err){
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
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
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
        		{name: '\u200B', value: '\u200B'},
        		{name: "<a:open:779937488188735531> Created on:", value: `\t${cat}`},
        		{name: "<a:headbump:760437043938852885> Members:", value: `\t${message.guild.memberCount}`},
        		{name: "<a:earth:779933308468461599> Server region:", value: `\t${message.guild.region}`},
        		{name: "<a:blob:779938621687201812> Description:", value: `\t${message.guild.description}`},
        		//{name: "👑 Owner:", value: `\t${owner.username}`},
        		{name: "💬 Total channels:", value: `\t${message.guild.channels.cache.size}`},
        		{name: "🏓 Ping :", value: `\t${timeTaken} ms`},
        		{name: '\u200B', value: '\u200B'}
        	)
        	.setFooter(`Requested by ${message.author.username}`,`${message.author.avatarURL()}`)
        message.channel.send(embb);
    },
    slap: async(message, args) => {
        try {
        	if(!args.length){
            	let s = await n.sfw.slap();
            	s = eval(s);
            	ref.embed(message, "Slap", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }else{
            	let s = await n.sfw.slap();
            	s = eval(s);
            	let pe = message.mentions.members.first();
            	if(pe != undefined){
            		pe = pe.user.username;
            	}else{
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
                    let s = await n.nsfw.girlSoloGif();
                    s = eval(s);
                    ref.embed(message, "Solo Girl", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
                } else {
                    let s = await n.nsfw.girlSolo();
                    s = eval(s);
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
                s = eval(s);
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
        	if(!args.length){
            	let s = await n.sfw.tickle();
            	s = eval(s);
            	ref.embed(message, "Tickle", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            }else{
            	let s = await n.sfw.tickle();
            	s = eval(s);
            	let pe = message.mentions.members.first();
            	if(pe != undefined){
            		pe = pe.user.username;
            	}else{
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
                s = eval(s);
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
                s = eval(s);
                ref.embed(message, "Did you fell for it ?", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
            } else {
                ref.embedDes(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    },
    waifu: async(message, args) => {
        try {
            let s = await n.sfw.waifu();
            s = eval(s);
            ref.embed(message, "Here's your waifu", "[Support us on Patreon](https://www.patreon.com/plubin)", s.url);
        } catch (err) {
            console.log(err);
        }
    },
    wallpaper: async(message, args) => {
    	try {
    		let s = await n.sfw.wallpaper();
    		s = eval(s);
    		ref.embed(message, "Here's your wallpaper. Enjoy...", "", s.url);
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
                ref.embedDes,(message, "Naughty .... (~ [] ~)", `This command is NSFW only\nUse it in a NSFW channel, pervert`);
            }
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = bot;

const helpMessage = {
    normal: "Take a look\n\nMy prefix for this server is  `.` \n\nHere are my commands:\n\n**Image and Gif:**\n**SFW**\n`baka` `cat` `catgirl` `cuddle` `dog` `fox` `foxgirl` `goose` `hug` `kitty` `lizard` `meow` `neko` `pat` `puppy` `slap` `tickle` `waifu` `wallpaper` `woof` `wp`  \n**NSFW**\n`anal` `avatar` `bj` `blowjob` `catgirl` `classic` `cs` `cumslut` `cumsluts` `ero` `erotic` `feet` `femdom` `gasm` `hentai` `holo` `kuni` `lewd` `neko` `orgasm` `pussy` `spank` `tits` `trap` `yuri`\n\n\n**Search:**\n`anime` `define`\n\n\n**Maintenance:**\n`emoji` `h` `help` `invite` `ping` `server`\n\n\n**Fun:**\n`peanus` `penis` `pp`\n\n\nNote: NSFW commands are for NSFW channels only"
}