const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('i am listening to a request');
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    res.end('hello this is my first web server <h1> Home page </h1>')
    res.write("<html> <body>My Module is: <br> <h1>Hi there at the frontend</h1></body></html>");

})

server.listen(3000, ()=> {
    console.log('Server is listening to port 5000');
})
