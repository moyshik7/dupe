const Discord = require('discord.js');
const ref = require('./../reference.js');

let app = {
    pp: (message, args) => {
        try {
            let m = [0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14];
            let ym = ref.randArr(m);
            let yp = "8";
            if (ym == 0) {
                yp = "{(•)}\n\nIt don\'t exist bish";
                ref.embedDes(message, "PP measurement :", yp, "Women are also part of our community");
            } else {
                let s;
                if (ym >= 1 && ym <= 3) {
                    s = "smol";
                } else if (ym >= 4 && ym <= 6) {
                    s = "average";
                } else if (ym >= 7 && ym <= 9) {
                    s = "huge";
                } else if (ym >= 10) {
                    s = "an alien";
                } else {
                    s = "like a chimney";
                }
                for (let x = 0; x < ym; x++) {
                    yp += "=";
                }
                yp += "D";
                yp = yp + `\n\nYour PP is ${ym} inch long\nThat\'s ${s}`;
                ref.embedDes(message, yp, s);
            }
        }catch(err) {
            console.log(err);
        }
    }
}
module.extends = app;