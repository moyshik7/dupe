const puppeteer = require("puppeteer");
const Discord = require("discord.js");
const imgur = require("./../imgur");
const ref = require("./../reference");

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
		await page.setViewport({ width: 1920, height: 1080});
		await page.goto(link);
		await page.waitForTimeout(1000);
		await page.screenshot().then((buff) => {
		    //message.channel.send(new Discord.MessageAttachment(buff, "google_search.png"));
		    let upload = await imgur.Upload(buff, "Google ScreenShot");
		   ref.embed(message, a, "", upload.link); 
		});
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = app;
