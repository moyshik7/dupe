const better = require("better.db");
const db = new better("./commands/resource/prefix.db")

const prefix = {
    SetPrefix: async (GuildID, Prefix) => {
        if(!GuildID){ return(false) }
        await db.set(GuildID, Prefix)
			.then(() => { return(true) })
			.catch(console.log)
	},
    GetPrefix: async (GuildID) => {
        if(!GuildID){ return(false) }
        await db.get(GuildID).then(val => {
            return(val);
        }).catch(console.log)
	}
}

module.exports = prefix;
