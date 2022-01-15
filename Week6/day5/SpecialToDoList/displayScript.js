let tasksContainerDiv = document.getElementById('taskContainer');
let hiddenForm = document.getElementById('editedForm');


function getFromLocalStorage() {
    const tasksString = localStorage.getItem('tasks');
    console.log(tasksString)
    // if reference exists
    if (tasksString) {
        // converts back to array and store it in todos array
        let arrResult =  JSON.parse(tasksString);
        console.log(arrResult)
        return arrResult
    }
}
let taskResults = getFromLocalStorage();
console.log(taskResults);

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;
console.log(fullDate);

let sortedArr = taskResults.sort((a,b) =>  new Date(a.start)-new Date(b.start))
console.log(sortedArr);

for(let i = 0; i< sortedArr.length; i++){
    let task = sortedArr[i];
        let name = task.name;
        let description = task.description;
        let startDate = task.start;
        let endDate = task.end;
        console.log(startDate)
        let date1 = new Date(endDate);
        let date2 = new Date(startDate);
        let Difference_In_Time = date1.getTime() - date2.getTime();
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //
        let textNameDiv = document.createElement("div");
        textNameDiv.setAttribute("id", "textNameId" + i);
        textNameDiv.innerHTML = name;

        textNameDiv.addEventListener("click", () => {
            document.getElementById("myDropdown" + i).classList.toggle("show");
        });
        textNameDiv.setAttribute("class", "dropbtn");


        let textDescriptionDiv = document.createElement("div");
        textDescriptionDiv.setAttribute("id", "textDescriptionId" + i);
        textDescriptionDiv.innerHTML = description + " " + "(" + Difference_In_Days + " days left)";
        textDescriptionDiv.setAttribute("id", "myDropdown" + i);
        textDescriptionDiv.setAttribute("class", "dropdown-content");
        textDescriptionDiv.style.padding = "15px";

        let x = document.createElement("input");
        x.setAttribute("type", "checkbox");
        x.addEventListener("click", () => {
            task.isCompleted = true;
            localStorage.setItem('tasks', JSON.stringify(sortedArr));
        });
        tasksContainerDiv.appendChild(x);
        if(task.isCompleted == true) {
            textNameDiv.style.backgroundColor = "green";
        }
        if(date1.getTime() < date.getTime()){
            textNameDiv.style.backgroundColor = "red";
        }

        textNameDiv.appendChild(textDescriptionDiv);
        tasksContainerDiv.appendChild(textNameDiv);
        let button = document.createElement("button");
         let deleteTask = ()=> {
             let result = confirm("Are you sure you want to delete?");
             if (result) {
                 textNameDiv.remove();
                 button.remove();
                 x.remove();
                 alert("The task has been removed!");
                 sortedArr = sortedArr.filter(function(item) {
                     return item.name !== task.name
                 })
                 localStorage.setItem('tasks', JSON.stringify(sortedArr));
             }
          }
          button.addEventListener("click", deleteTask)
        button.innerText = "delete"
          tasksContainerDiv.appendChild(button);


    let editButton = document.createElement("button");


    let editTask = ()=> {
        hiddenForm.style.display = 'inline-block'
        hiddenForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const todoInputName = document.querySelector('.todoInputName').value;
            const todoInputDescription = document.querySelector('.todoInputDescription').value;
            const todoInputStart = document.querySelector('.todoInputStart').value;
            const todoInputEnd = document.querySelector('.todoInputEnd').value;
            task.name = todoInputName;
            task.description = todoInputDescription;
            task.start = todoInputStart;
            task.end = todoInputEnd;
            localStorage.setItem('tasks', JSON.stringify(sortedArr));
        });
    }

    editButton.addEventListener("click", editTask)
    editButton.innerText = "Edit"
    tasksContainerDiv.appendChild(editButton);



}

