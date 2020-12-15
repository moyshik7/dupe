const ud = require('urban-dictionary');
const ref = require('./../reference.js');
const app = {
    define: async (message, args) => {
        if (!args.length) {
            ref.embedDes(message, "^(°×°)^", "Enter a term to define");
        } else {
            try {
                let terms = args.join(" ");
                ud.term(terms, (error, entries, tags, sounds) => {
                    if (error) {
                        console.error(error.message);
                    } else {
                        let a = entries[0];
                        ref.embedDes(message, a.word, a.definition);
                    }
                });
            }catch(err) {
                console.log(err);
            }
        }
    }
}
module.exports = app;