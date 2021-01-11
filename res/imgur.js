const imgurUpload = require("imgur-uploader");

const app = {
    Upload : async (buffer,titleOpt) => {
	try{
	    let d;
	    await imgurUpload(buffer, { title : `${titleOpt || "Random Upload"}`, token : `${process.env.IMGUR}` })
	        .then( data => {
		    d = data
	        });
	    return(d);
	} catch (err){
	        console.log(err);
	        return({ link : "https://i.imgur.com/8CXTuLo.jpg"});
	}
    }
}
module.exports = app;
