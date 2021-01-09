const puppeteer = require("puppeteer");
const Discord = require("discord.js");

let app = {
    Google: async (message, args) => {
        try {
            if (!args.length) {
                message.channel.send("Usage `.google`  `<Search Term>`");
            } else {
		let a = args.join("+");
		let link = `https://www.google.com/search?q=${a}`;
                let browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox']});
		const page = await browser.newPage();
		await page.goto(link);
		await page.screenshot().then((buff) => {
		    message.channel.send(new Discord.MessageAttachment(buff, "google.png"));
		});
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = app;
