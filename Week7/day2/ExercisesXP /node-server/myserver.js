const http = require('http');

const server = http.createServer((req, res) => {
    console.log('i am listening to a request');
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>Welcome new user</p>');
    res.write('<p>Welcome kim</p>');
    res.write('<p>Welcome ariel</p></body></html>');
    res.end();

})

server.listen(3000, ()=> {
    console.log('Server is listening to port 5000');
})
