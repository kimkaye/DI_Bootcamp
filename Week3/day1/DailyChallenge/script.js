let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let colors = ["blue","green","yellow","pink","grey","white","red","orange"];

let section = document.getElementsByClassName("listPlanets")[0];
console.log(section);
for (let i = 0; i<planets.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("planet", planets[i]);
    newDiv.style.backgroundColor = colors[i];
    section.appendChild(newDiv);
    // newDiv.
}



