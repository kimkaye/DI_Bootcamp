let main = require('./main');

const b = 5;

console.log(main.largeNumber + b);

// Part II:
let http = require("http");

// const server = http.createServer({}, function (req, res) {
//     console.log("Listening...")
//     // res.writeHead(200);
//     res.writeHeader(200, {"Content-Type": "text/html"});
//     res.write("<html> <body>My Module is: <br> "+(main.largeNumber + b)+"<h1>Hi there at the frontend</h1></body></html>");
//     res.end();
//     // res.end("My Module is:\n"+(main.largeNumber + b));
// }).listen(3000);

// part 3

// console.log(main.myDate());
const server = http.createServer({}, function (req, res) {
    console.log("Listening...")
    res.writeHead(200);
    res.end("The date and time are currently: "+(main.myDate()));
}).listen(8080);
