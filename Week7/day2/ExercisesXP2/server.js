const express = require('express')
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/',express.static(__dirname+'/public'));


app.route('/user')
    .get( (req,res)=> {

        const user = {
            firstname: 'John',
            lastname: 'Doe'
        }
        console.log(user);
        res.send(user)
    })


app.listen(3000);
// app.listen(app.get('port'), ()=>{
// console.log('listen on port 9000');
// })





