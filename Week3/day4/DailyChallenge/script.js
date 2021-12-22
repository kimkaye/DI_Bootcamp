let listTasks = [];

function addTask(){
    let counter = 0;
    let inputValue = document.getElementById("input").value;
    if(inputValue !== ""){
        listTasks.push(inputValue);
        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("id", "check");
        let newlabel = document.createElement("label");
        newlabel.setAttribute("for", "check");
        let xButton =  document.createElement("i");
        xButton.innerHTML = '<i class="fa fa-window-close-o" aria-hidden="true"></i>';
        let newTextNode = document.createTextNode(inputValue);
        newlabel.appendChild(newTextNode);
        document.getElementsByClassName("listTasks")[counter].appendChild(xButton);
        document.getElementsByClassName("listTasks")[counter].appendChild(newInput);
        document.getElementsByClassName("listTasks")[counter].appendChild(newlabel);
    }
    counter++;
    console.log(listTasks);
}







