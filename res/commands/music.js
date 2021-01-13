
const Discord = require("discord.js");
const ytdl = require("ytdl-core");


const app = {
    Play: (message,args) => {
        let vc = message.member.voice.channel;
	if(vc){
	    vc.join().then(connection => {
	        const stream = ytdl('https://youtu.be/BVwAVbKYYeM', { filter: 'audioonly' });
	        const dispatcher = connection.play(stream);
                dispatcher.on('finish', () => vc.leave());
	    }).catch(err => {console.log(err)});
	} else {
	    //Join a voice channel first
	}
    },
    Join: (message,args) => {
	let vc = message.member.voice.channel;
	if(vc) {
	    vc.join();
	} else {
	    //Connect to a voice channel first
	}
    }
}

module.exports = app;
