
let firstForm = document.forms[0];
firstForm.addEventListener("submit", sendData);

function sendData(e) {
    e.preventDefault();
    let item = document.getElementById('item').value;
    let amount = document.getElementById('amount').value;

    let shoppingList = {
        item,
        amount
    }
    console.log(shoppingList);

    fetch('http://localhost:5000/formData',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoppingList)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let stringResult = '';
            for(let i = 0; i < data.length; i++){
                stringResult += `${data[i].item} ${data[i].amount} <br> \n`
            }
            document.getElementById('content').innerHTML = stringResult;
        })
        .catch(e => console.log(e))
}