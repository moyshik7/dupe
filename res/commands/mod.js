
const Discord = require("discord.js");
const ref = require("./../reference.js");
let app = {
    Kick: (message,args) => {
        try{
            if(!message.member.hasPermission("KICK_MEMBERS")){
		ref.embedDes(message, "Permission Error","You don\'t have the __KICK USER__ permission", "No one kicked");
	    }
	    if(!args.length){
		ref.embedDes(message, "No user to kick","__**USAGE**__\n `.kick` ` <mention_user> ` ` [Reason(optional)] `\nOr,\n `.kick` ` <User ID> ` ` [Reason(optional)] `", "No one kicked");
		return(false);
	    }
            let k = message.mentions.members.first();
	    if(!k){
		if(!parseInt(args[0])){
		    ref.embedDes(message, "Invalid User ID or mention","Invalid User ID provided", "No one kicked");
		    return(false);
	        }else{
		    k = message.guild.members.catche.get(args[0]);
		    if(args.length > 1){
			args = args.slice(1);
		    }else{
			args = [];
		    }
		    if(!k){
			ref.embedDes(message, "Invalid User ID or mention","Invalid User ID provided", "No one kicked");
			return(false);
		    }
		}
	    } 
	    if(message.guild.me.hasPermission("KICK_MEMBERS")){
		let reason = args.join(" ");
	        if(!reason.length || reason.length >= 1000){
		    reason = "No valid reason specified";
		}
		let kName = k.username;
		k.kick();
		ref.embedDes(message, `${kName} was kicked`,`__REASON :__  ${reason}`, "User removed from server");
	    }else{
		ref.embedDes(message, "Permission Error","I don\'t have the __KICK USER__ permission", "No one kicked");
	    }
        } catch(err){
	    console.log(err);
	}
    }
}

module.exports = app;
