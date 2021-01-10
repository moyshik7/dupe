const imgurUpload = require("imgur-uploader");

const app = {
    Upload : async (buffer,titleOpt) => {
	try{
	    imgurUpload(buffer, { title : `${titleOpt || "Random Upload"}`, token : `${process.env.IMGUR}` })
	        .then( data => {
		    return(data);
	        })
		.error( err => {
		    console.log(err);
		    return(false);
		})
	} catch (err){
	        console.log(err);
	        return(false);
	}
    }
}
