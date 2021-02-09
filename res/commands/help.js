const {MessageEmbed} = require('discord.js');
const helpList = require("./resource/helplist.json");
const helpMessage = require("./resource/helpmessage.json");

const app = {
    Help: (message, args) => {
        try {
            let ho; //help object
            if (!args.length) {
                args[0] = "help";
            }

            if (helpList.indexOf(args[0]) != -1) {
                ho = helpMessage[args[0]];
            } else {
                ho = helpMessage["help"];
            }
            if(ho.nsfw == "true" && !message.channel.nsfw){
	        let emb = new MessageEmbed()
		    .setColor("fd0061")
		    .setTitle("NSFW channel required")
		    .setDescription("This term contains NSFW content.\nPlease use the command in an NSFW channel.")
		message.channel.send(emb);
	    } else {
                let emb = new MessageEmbed()
                    .setColor("fd0061")
                    .setTitle(ho.name)
                    .setDescription(ho.content)
                    .addFields( /*{ name: "\u200B", value: "\u200B" },*/ { name: "__**Usage:**__", value: `${ho.usage || "N/A" }` }, { name: "__**Example:**__", value: `${ho.example || "N/A"}` })
                message.channel.send(emb);
	    }
	    return(true);
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = app;
