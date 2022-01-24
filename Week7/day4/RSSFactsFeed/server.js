const exp = require('express');
const cors = require('cors')
const bp = require('body-parser');
const app = exp();
let Parser = require('rss-parser');
let parser = new Parser();


(async () => {

    let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });

})();

