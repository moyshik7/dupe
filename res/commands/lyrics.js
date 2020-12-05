const Lyrics = require('slyrics');
const lyrics = new Lyrics();
const ref = require("./../reference");

const app = {
	lyrics: async (message,args) => {
		try{
			if(!args.length){
				ref.embedDes(message, "asdfghjklqwertyuiop", "Provide a valid song name");
			}else{
				let title = args.join(" ");
				let result = await lyrics.get('melon', title); //melon or atoz
				let lr = result.result;
				if(lr.length >= 2000){
					let lra = [];
					lra[0] = lr.slice(0,1999);
					lra[1] = lr.slice(2000,3999);
					lra[2] = lr.slice(4000,5999);
					lra = ref.formatArr(lra);
					let v;
					for(let x = 0; x<lra.length; x++){
						lr = lra[x];
						v = x+1
						ref.embedDes(message,`${result.title} - ${v}`, lr);
					}
				}else{
					ref.embedDes(message, result.title, lr);
				}
			}
		} catch(err){
			console.log(err);
		}
	}
}

module.exports = app;