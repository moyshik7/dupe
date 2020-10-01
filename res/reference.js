const ref = {
	embed : (message, Title, Description, ImageArray) => {
		let a = new Discord.MessageEmbed()
			.setColor(ref.randArr(color))
			.setTitle(Title)
			.setDescription(Description)
			.setImage(ref.randArr(ImageArray))
		message.channel.send(a);
	},
    formatArr: (givenArray) => {
        let finale = [];
        for (let x = 0; x < givenArray.length; x++) {
            let p = givenArray[x];
            if (p != "" && p != null && p != undefined) {
                p = ref.formatStr(p);
                if (p.length >= 1) {
                    finale.push(p);
                }
            }
        }
        return (finale);
    },
    formatStr: (givenString) => {
        let a = givenString.toLowerCase();
        a = a.trim();
        return (a);
    },
    randArr: (givenArray) => {
        return (givenArray[Math.floor(Math.random() * givenArray.length)]);
    }
}
module.exports = ref;