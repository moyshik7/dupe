const Discord = require("discord.js");
const ref = require("./../reference.js");
const nLife = require("nekos.life");
const neko = new nLife();

const app = {
    Baka: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user2} wa bakadesu (${user2} is an idiot)`;
            let uri = await neko.sfw.baka();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Cuddle: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} is cuddling ${user2}.Awwww how cute`;
            let uri = await neko.sfw.cuddle();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Feed: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} feeds* ${user2}`;
            let uri = await neko.sfw.feed();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Hug: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} hugged ${user2}`;
            let uri = await neko.sfw.hug();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Kiss: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} kissed ${user2}`;
            let uri = await neko.sfw.kiss();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Pat: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} pats ${user2}'s head lightly`;
            let uri = await neko.sfw.pat();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Poke: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} keeps poking ${user2}. It's annoying`;
            let uri = await neko.sfw.poke();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    },
    Tickle: async (message, args) => {
        try {
            let user1;
            let user2;
            if (!args.length) {
                user1 = "Plubin"
                user2 = message.author.username;
            } else if (!message.mentions.members.first() && args.length) {
                user1 = message.author.username;
                user2 = args.join(" ");
            } else {
                user1 = message.author.username;
                user2 = message.mentions.members.first().user.username;
            }
            let text = `${user1} tickles ${user2}. ${user2} dies of laughing`;
            let uri = await neko.sfw.tickle();
            uri = uri.url;
            ref.embed(message, text, "", uri);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = app;