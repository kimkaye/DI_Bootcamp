

let form = document.getElementById("form");
let xhr = new XMLHttpRequest();
form.addEventListener("submit", fetchPerson);
let yellow = document.getElementById("yellowSquare");


function fetchPerson(event){
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 82) + 1;
    let url = 'https://www.swapi.tech/api/people/'+randomNumber ;
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    yellow.innerText = "loading...";
}

console.log(xhr);

//5. when the request is complete and the response is fully downloaded.
xhr.onload = function() {
    document.body.style.backgroundColor = "white";
    if (xhr.status !== 200) {
        console.log("error status")
        displayError(xhr)
    } else {
        console.log("Finished Loading")
        console.log(xhr.response)
        let result = xhr.response.result;
        let properties = result.properties;
        console.log(properties)
        yellow.innerText = "";
        addPerson(properties);
    }
};

function addPerson(properties){
    let name = document.createElement("div");
    let height = document.createElement("div");
    let gender = document.createElement("div");
    let birthYear = document.createElement("div");
    let homeWorld = document.createElement("div");
    name.innerText = properties.name;
    height.innerText = "height: " + properties.height;
    gender.innerText = "gender: " + properties.gender;
    birthYear.innerText = "birth Year: " +properties.name;
    homeWorld.innerText = "home World: " + properties.birth_year;
    yellowSquare.appendChild(name);
    yellowSquare.appendChild(height);
    yellowSquare.appendChild(gender);
    yellowSquare.appendChild(birthYear);
    yellowSquare.appendChild(homeWorld);


}


