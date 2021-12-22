const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
];
let parent;

function createColors() {
    for(let i = 0; i<colors.length; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = colors[i];
        parent = document.getElementById("side");
        parent.appendChild(newDiv)
    }
}
createColors();
let divArray = [];
function createGrid(){
    for(let i=0; i<= 1440; i++){
        let blankDiv = document.createElement("div");
        parent = document.getElementById("game");
        parent.appendChild(blankDiv);
        divArray[i] = blankDiv;
    }
}
createGrid();

side.addEventListener("click", pickColor);
let color= "white";

function pickColor(e){
    color = e.target.style.backgroundColor;
    console.log(color);
}
game.addEventListener("mousedown", beginColor);
function beginColor(e){
    if (color != "white"){
        e.target.style.backgroundColor = color;
    }
}

game.addEventListener("mouseover", beginColor);


//clear button:

let button= document.getElementById("clear")
console.log(button);
button.addEventListener("click",function(){
    for (let i = 0; i < divArray.length; i++){
        divArray[i].style.backgroundColor = "white";
    }
})

