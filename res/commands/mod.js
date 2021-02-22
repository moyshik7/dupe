const Discord = require("discord.js");
const ref = require("./../reference.js");
let app = {
    Avatar: (message) => {
        let user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor("#ff9900")
            .setTitle(user.username)
            .setImage(user.avatarURL({ size: 512, format: "png", dynamic: true }))
        message.channel.send(avatarEmbed);
    },
    Kick: (message, args) => {
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) {
                ref.embedDes(message, "Permission Error", "You don\'t have the __KICK USER__ permission", "No one was kicked");
                return (false);
            }
            if (!args.length) {
                ref.embedDes(message, "No user to kick", "__**USAGE**__\n `.kick` ` <mention_user> ` ` [Reason(optional)] `\nOr,\n `.kick` ` <User ID> ` ` [Reason(optional)] `", "No one kicked");
                return (false);
            }
            if (!message.member.highestRole.comparePositionTo(message.mentions.members.first().highestRole) > 0) {
                //member dosen't have higher role then first mentioned member
                ref.embedDes(message, "Mentioned user has higher role than you", "You can't kick your senpai, baka!", "No one was kicked");
                return (false);
            }
            let k = message.mentions.members.first();
            if (!k) {
                if (!parseInt(args[0])) {
                    ref.embedDes(message, "Invalid User ID or mention", "Invalid User ID provided", "No one was kicked");
                    return (false);
                } else {
                    k = message.guild.members.cache.get(`${args[0]}`);
                    console.log(args[0]);
                }
                if (!k) {
                    ref.embedDes(message, "Invalid User ID or mention", "Invalid User ID provided", "No one was kicked");
                    return (false);
                }
            }
            if (message.guild.me.hasPermission("KICK_MEMBERS") && message.member.hasPermission("KICK_MEMBERS")) {
                if (args.length > 1) {
                    args = args.slice(1);
                } else {
                    args = [];
                }
                let reason = args.join(" ");
                if (!reason.length || reason.length >= 1000) {
                    reason = "No valid reason specified";
                }
                let kName = k.user.username;
                k.kick()
                    .then(() => {
                        ref.embedDes(message, `${kName} was kicked`, `__REASON :__  ${reason}`, "User removed from server");
                    })
            } else {
                ref.embedDes(message, "Permission Error", "I don\'t have the __KICK USER__ permission", "No one kicked");
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = app;