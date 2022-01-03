let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

let xhr = new XMLHttpRequest();

function requestData () {
    //this line is for ex 2
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    //this line is for ex 1
    // xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
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
    }
};

// // 6. triggers periodically while the response is being downloaded
// xhr.onprogress = function(event) {
//     console.log("progress", xhr)
//     document.body.style.backgroundColor = "red";
// };

// //7. when the request couldn't be made - when there is a NETWORK error
// xhr.onerror = function(event) {
//     console.log("error", xhr);
//     displayError(xhr)
// };
// const displayError = (xhr) => {
//     console.log("in display error")
//     let error = document.getElementById("error");
//     let h2 = document.createElement("h2");
//     h2.textContent = `Error : ${xhr.status}`
//     h2.style.backgroundColor = 'pink';
//     error.appendChild(h2);
// }