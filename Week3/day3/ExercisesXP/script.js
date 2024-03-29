//Exercise 1 : Move The Box - Move the box from left to right

function myMove(){
    let animate = document.getElementById("animate");
    let stop = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (stop === 350) {
            clearInterval(id);
        } else {
            stop++;
            animate.style.left = stop + 'px';
        }
    }
}

//Exercise 2: Drag & Drop

let draggedItem = document.getElementById("item");
console.log(draggedItem)


//1. dragstart MANDATORY
draggedItem.addEventListener("dragstart", startToDrag);


function startToDrag (e) {
    console.log('e.target : ', e.target)
    console.log("starting");
    e.target.classList.toggle("draggedItemAfter");
    console.log('e.dataTransfer : ', e.dataTransfer)

    //set the data to be dropped in the future
    //set the data MANDATORY
    e.dataTransfer.setData("text/plain", e.target.id);
}

//2. Retrieve the valid drop target
let allDropTargets = document.querySelectorAll(".dropzone");

for (let dropzone of allDropTargets){
    // dragover event MANDATORY
    dropzone.addEventListener("dragover", draggingOver)

    //drop event MANDATORY
    dropzone.addEventListener("drop", droppingItem)
}

function draggingOver(e){
    // preventDefault() MANDATORY
    e.preventDefault();
}

//3. Drop
function droppingItem(e){
    //preventDefault MANDATORY
    e.preventDefault();

    //getData MANDATORY that we set in the dragstart event
    //we retrieve the id of the element that we want to drop
    let dataItem = e.dataTransfer.getData("text/plain");
    console.log("dataItem", dataItem) //id of the green box

    //find the element with this specific id
    let draggedItem = document.getElementById(dataItem);
    //append the element in the drop zone
    console.log("e.target : ", e.target)
    e.target.appendChild(draggedItem);
}

