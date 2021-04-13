const { MessageEmbed } = require("discord.js");
const AllWallpapers = require("./resource/wallpapers.json");
const ref = require("./../reference");
const app = {
    Wallpaper: (message) => {
        let wallpaper = ref.randArr(AllWallpapers);
        let emb = new MessageEmbed()
            .setTitle("Here's your Wallpaper")
            .setImage(wallpaper)
        message.channel.send(emb);
    }
}


module.exports = app;