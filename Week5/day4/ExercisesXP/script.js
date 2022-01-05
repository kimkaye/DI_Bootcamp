// Exercise 1: Conversion

// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

async function fetchSwapi(){
    const resp = await fetch('https://swapi.dev/api/starships/9/');
    const data = await resp.json();
    console.log(data);
}

fetchSwapi();


//Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//prediction: calling and after 2 second resolved