// let arr = JSON.parse(localStorage.getItem("key")) || [];

const todoForm = document.getElementById('todo-form');
const todoInputName = document.querySelector('.todoInputName');
const todoInputDescription = document.querySelector('.todoInputDescription');
const todoInputStart = document.querySelector('.todoInputStart');
const todoInputEnd = document.querySelector('.todoInputEnd');

console.log(todoForm);

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(todoInputName.value, todoInputDescription.value, todoInputStart.value, todoInputEnd.value);
});

function addTask(name, description, startDate, endDate){
    if(name !== '' && description !== '' && startDate !== '' && endDate !== ''){
        // console.log("working!" + name + description + startDate + endDate );
        let tasks = getFromLocalStorage() || [];
        console.log(tasks)
        let task = {
            id: Date.now(),
            name: name,
            description: description,
            start: startDate,
            end: endDate,
            isCompleted: false,
        };
        tasks.push(task);
        addToLocalStorage(tasks)
        // console.log(window.location.href+"/display.html")
        window.open("./display.html", '_blank').focus();
        todoInputName.value = '';
        todoInputDescription.value = '';
        todoInputStart.value = '';
        todoInputEnd.value = '';
    }else {

    }
}
function addToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function loadFromLocalStorage() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

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
    return undefined;
}

//
// let newHtmlDiv = document.getElementById("write");
// newHtmlDiv.innerHTML = window.location.search;


