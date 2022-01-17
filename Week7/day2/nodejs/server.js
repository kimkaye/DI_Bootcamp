// const http = require('http');
//
// const server = http.createServer((req, res) =>{
//     console.log('i am listening to a request');
//     console.log(req.url);
//     console.log(req.headers);
//     console.log(req.method);
//     res.end('hello this is my first web server')
//     if(req.url === '/') {
//     res.end('<h1> Home page </h1>')
//     }else {
//
//     }
//
//
// })
//
// server.listen(5000, ()=> {
//     console.log('Server is listening to port 5000');
// })

//express

const exp = require('express');
const data = require('./data');
const app = exp();


app.listen(5000, () => {
    console.log('listen to 5000');
})

app.get('/api/products', (req,res) => {
    res.json([
        {name: 'iphone', price: 800},
        {name: 'ipad', price: 200},
        {name: 'mac', price: 300}
    ])
})

app.get('/api/products/:productID', (req,res) => {

})