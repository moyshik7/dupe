const captureWebsite = require('capture-website');
const Discord = require("discord.js");

let app = {
    Google: async (message, args) => {
        try {
            if (!args.length) {
                message.channel.send("Usage `.google`  `<Search Term>`");
            } else {
		let a = args.join("+");
		let link = `https://www.google.com/search?q=${a}`"
                let b = await captureWebsite.buffer(link,{
		    args: [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		    ]
		}
		message.channel.send(new Discord.MessageAttachment(b, "here_is_your_qr.png"));
                });
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = app;
