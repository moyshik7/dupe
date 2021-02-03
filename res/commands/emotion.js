
const Discord = require("discord.js");
const ref = require("./../reference.js");
const nLife = require("nekos.life");
const neko = new nLife();

const app = {
    Pat : async (message,args) => {
	try{
	    let user1;
	    let user2;
	    if(!args.length){
		user1 = "Plubin"
		user2 = message.author.username;
	    }else if(!message.mentions.members.first() && args.length){
		user1 = message.author.username;
		user2 = args.join(" ");
	    }else if(message.mentions.members.first()){
		user1 = message.author.username;
		user2 = message.mentions.members.first().user.username;
	    }else{
		user1 = "Plubin";
		user2 = message.author.username;
	    }
	    let text = `${user1} pats ${user2}'s head lightly`;
	    let uri = await neko.sfw.hug();
	    uri = uri.url;
	    ref.embed(message,text, "Please vote us. (Use .vote)", uri);
	} catch (err){
	    console.log(err);
	}
    }
}

module.exports = app;
