let plants = ["planets Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let colors = [];
let newDiv = document.createElement("div");


for (let i = 0; i<plants.length; i++) {
    let divPlants =  document.createElement("div");
    img.setAttribute("class", shoppingPictures[i])

    let text = document.createTextNode(`The user bought ${shoppingItems[i]}`);
    para.appendChild(text);
    div.appendChild(para);

    if (shoppingItems[i] == "shampoo"){
        img.classList.add("cart");
    } else {
        img.classList.add("cartTwo");
    }

    // div.appendChild(img);
}



