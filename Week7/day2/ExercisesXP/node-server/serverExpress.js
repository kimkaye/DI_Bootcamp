const express = require('express')
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.end('<html><body><h1>hi!</h1></body></html>')
})


app.listen(3000)
