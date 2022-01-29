const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors');


app.use(cors({
    origin: '*'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',express.static(__dirname+'/public'))

app.get('/api/hello', (req, res) => {
    res.end('Hello From Express')
})
// app.post('/api/world', (req, res) => {
//     res.end('Hello From Express')
//     // console.log()
//     // res.send( req.body.item + ' : ' + req.body.amount)
// })
app.post('/api/world', (req, res) => {
    console.log(req.body)
    res.send('I received your POST request. This is what you sent me: ' + req.body.firstName)
})


app.listen(5000)
