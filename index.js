const Discord = require("discord.js");

const auth = require("./auth.json");

const token = ".";                                         

const client = new Discord.Client();

client.on("ready", () => {

  console.log(`Logged in as ${client.user.tag}!`);

})

client.on("message", (message) => {

    let msg = message.content;

    if(msg[0] === token){

    	let command = msg.slice(1);    	command = command.split(" ");

    	args = command.slice(1);

    	command = command[0];

    	if(command === "neko" && message.channel.nsfw){

    		let emb = new Discord.MessageEmbed()

    			.setColor(randArr(colors))

    			.setTitle("Plubin")

    			.setDescription("Description Text")

    			.setImage(randArr(nekos))

    		message.reply(emb);

    	}

    }

})

client.login(auth.BOT_TOKEN);

randArr = (givenArray) => {

	return(givenArray[Math.floor(Math.random()*givenArray.length)]);

}

const colors = [

	"efc050",

	"009b77",

	"dd4124",

	"a65b59",

	"92a8d1",

	"88b04b",

	"b9d194",

	"6b5b95",

	"aba0c5",

	"ff6f61",

	"ffb9b3",

	"d9ffb3",

	"ffb366",

	"ff66ff"

]

const nekos = [

	"https://nekos.moe/image/rkUzrBK0G",

	"https://nekos.moe/image/78qL2Rosw",

	"https://nekos.moe/image/slh-eSUyD",

	"https://nekos.moe/image/QBOtRa36Z",

	"https://nekos.moe/image/zRfnBEDu3",

	"https://nekos.moe/image/aQoWSjZxt",

	"https://nekos.moe/image/q59Lv_pUQ",

	"https://nekos.moe/image/rkis1c5Cz",

	"https://nekos.moe/image/rJKAzGfAG",

	"https://nekos.moe/image/Sk07gj3Eb",

	"https://nekos.moe/image/39j5eOTqZ",

	"https://nekos.moe/image/xG_APQwXB",

	"https://nekos.moe/image/dACJ82xV-",

	"https://nekos.moe/image/H18kIgp5b",

	"https://nekos.moe/image/HyjjIdkJG",

	"https://nekos.moe/image/H1QGylkOM",

	"https://nekos.moe/image/S1tiCCVdG",

	"https://nekos.moe/image/r1ptllXhG"

];
