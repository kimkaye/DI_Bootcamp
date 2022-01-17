function getUser() {

    fetch('http://localhost:3000/user',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('root').innerHTML = `${data.firstname} ${data.lastname}`
        })
        .catch(e => console.log(e))
}
getUser();