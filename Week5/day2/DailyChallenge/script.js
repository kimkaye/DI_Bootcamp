

let form = document.getElementById("form");
let xhr = new XMLHttpRequest();
form.addEventListener("submit", fetchGif);

function fetchGif(event){
    event.preventDefault();
    let inputValue = document.getElementById("searchGif").value;
    let url = 'https://api.giphy.com/v1/gifs/search?q='+inputValue+ '&rating=g&limit=1&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
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
        let data = xhr.response.data;
        if(data.length > 0){
            let gifUrl = data[0].embed_url;
            addGif(gifUrl);
        }
    }
};

function deleteAll(){
    let div = document.getElementById("gifArea");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
}


function addGif(gifUrl){
    let div = document.getElementById("gifArea");
    let gifDiv = document.createElement("div");
    let randomNumber = Math.floor(Math.random() * 101);
    gifDiv.setAttribute("id", randomNumber);

    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", gifUrl);
    iframe.setAttribute("width", "480");
    iframe.setAttribute("height", "270");
    gifDiv.appendChild(iframe);

    let button = document.createElement("button");
    let deleteGif = ()=> {
        // alert(gifUrl)
        let div = document.getElementById(randomNumber);
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
    }
    button.addEventListener("click", deleteGif)
    button.innerText = "delete"
    gifDiv.appendChild(button);

    div.appendChild(gifDiv);
}



