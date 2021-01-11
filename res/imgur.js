/*
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
*/

const imgur = require("imgur");

const app = {
    Upload : async (buffer,titleOpt) => {
        try{
	    let pp;
	    await imgur.setClientId(process.env.IMGUR);
	    let ds = await buffer.toString("base64"); //ds means DataString
	    await imgur.uploadBase64(ds)
		.then( res => {
		    pp = res.data;
		})
		.catch( err => {
		    console.log(err);
		    pp = {link : "https://i.imgur.com/8CXTuLo.jpg"}
		})
	    return(pp);
	}catch(err){
	    console.log(err);
	    return({link : "https://i.imgur.com/8CXTuLo.jpg"});
	}
    }
}

module.exports = app;
