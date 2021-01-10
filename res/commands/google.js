const puppeteer = require("puppeteer");
const Discord = require("discord.js");

const ref = require("./../reference.js");

let app = {
    Google: async (message, args) => {
        try {
            if (!args.length) {
                message.channel.send("Usage `.google`  `<Search Term>`");
            } else {
		args = ref.SanitizeArray(args);
		let a = args.join("+");
		let link = `https://www.google.com/search?q=${a}`;
                let browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox']});
		const page = await browser.newPage();
		await page.setViewport({ width: 1080, height: 720});
		await page.goto(link);
		await page.waitForTimeout(1000);
		await page.screenshot().then((buff) => {
		    message.channel.send(new Discord.MessageAttachment(buff, "google_search.png"));
		});
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = app;
