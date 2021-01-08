
const puppeteer = require("puppeteer");

let pp = async () => {
        let buff = await getBuff("https://www.google.com");
        console.log(buff);
}

getBuff = async (uri) => {
    try{
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        await page.goto(uri);
        await page.screenshot().then((buff) => {
            return(buff);
    });
        await browser.close();
    } catch(err){
        console.log(err);
        return(false);
    }
}


pp();
