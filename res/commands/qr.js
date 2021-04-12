/*const qr = require("qrcode");
const Discord = require("discord.js");

let app = {
    qr: async (message, args) => {
        try {
            if (!args.length) {
                //error
            } else {
                let ar = args.join(" ");
                let c = qr.toDataURL(ar, (err, url) => {
                    let buf = Buffer.from(url.slice(22), "base64");
                    message.channel.send(new Discord.MessageAttachment(buf, "here_is_your_qr.png"));
                });
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = app;*/