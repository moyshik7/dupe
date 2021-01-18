
const Discord = require("discord.js");
const ytdl = require("ytdl-core");


const app = {
    Disconnect: (message,args) => {
        try{
	    let vc = message.guild.me.voice.channel;
	    let userVC =  message.member.voice.channel;
            if(!vc){
                //I am not connected to a channel lol;
            } else if(vc == userVC){
                vc.leave();
            }else {
                //You are not connected to the same channel Bitch;
            }
	} catch(err){
	    console.log(err);
	}
    },
    Play: (message,args) => {
	try{
            let vc = message.member.voice.channel;
	    let selfVC = message.guild.me.voice.channel;
	    if(vc && (!selfVC || selfVC == vc)){
	        vc.join().then(connection => {
	            const stream = ytdl('https://youtu.be/BVwAVbKYYeM', { filter: 'audioonly' });
	            const dispatcher = connection.play(stream);
                    dispatcher.on('finish', () => vc.leave());
	        }).catch(err => {console.log(err)});
	    } else if (selfVC != vc) {
	        message.channel.send("Sorry I am already connected to another channel");
	    } else{
		//error can't play
	    }
	}catch(err){
	    console.log(err);
	}
    },
    Join: (message,args) => {
	try{
	    let vc = message.member.voice.channel;
	    let selfVC = message.guild.me.voice.channel;
	    if(vc & !selfVC) {
	        vc.join();
	    } else {
	        //I am already connected
	    }
	} catch(err){
	    console.log(err);
	}
    }
}

module.exports = app;
