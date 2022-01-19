// const express = require('express');
// const app = express();
// const bodyParser = require("body-parser");
//
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use('/',express.static(__dirname+'/public'));
//
// app.post('/formData', (req, res) => {
//     console.log(req.body)
//     res.send( req.body.item + ' : ' + req.body.amount)
// })
//
// app.listen(5000)


const exp = require('express');
const bp = require('body-parser');
const app = exp();


let inventory = []

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())


app.use('/',exp.static(__dirname+'/public'));

app.route('/formData')
    .get( (req,res)=> {
        console.log(inventory);
        res.send(inventory);
    })
    .post( (req,res) => {
        console.log(req.body);
        // res.json(req.body);
        let item = req.body.item;
        let amount = req.body.amount;
        const shoppingList = {
            item: item,
            amount: amount
        }
        inventory.push(shoppingList);
        console.log('POST',shoppingList);
        res.send(inventory)
    })

app.get('/shoppingList/:item',(req,res)=>{
    console.log(req.params);
    res.send('bla bla')
})

app.listen(5000);
// app.listen(app.get('port'), ()=>{
// console.log('listen on port 9000');
// })

