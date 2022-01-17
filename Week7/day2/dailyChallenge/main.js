const express = require('express')
const app = express()
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',express.static(__dirname+'/public'))

app.get('/aboutMe/:hobby', (req, res) => {
    if(typeof req.params.hobby === 'string'){
        res.send(`The hobby is: ${req.params.hobby}!`)
    }else {
        res.status(404).send('Bad request!') //error handler
    }
})

app.get('/pic', (req, res) => {
    res.end('<html><body><img src="https://www.line-stickers.com/wp-content/uploads/2021/01/NICI-Jolly-Mah-.png"></body></html>')
})

app.post('/formData', (req, res) => {
    console.log(req.body)
    res.send( req.body.email + ' sent you a message: ' + req.body.msg )
})

app.listen(5000)
