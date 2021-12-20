// Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

//Using DOM methods, remove the last paragraph in the <article> tag.

let article = document.getElementsByTagName('article')[0];
let lastP = article.lastElementChild;
article.removeChild(lastP);

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

function changeColor() {
    this.style.backgroundColor = "red";
    return false;
}

h1.addEventListener('click', changeColor)

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.getElementsByTagName("h3")[0];

function hideElement() {
    this.style.display = "none";
    return false;
}

h3.addEventListener('click', hideElement);

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

function inform(){
    alert("You clicked me")
}

//Exercise 1 : Work With Forms
//Retrieve the form and console.log it.
let form = document.getElementsByTagName("form")[1];
console.log(form);

//Retrieve the inputs by their id and console.log them.
let firstName = document.getElementById('fname');
console.log(firstName);
let lastName = document.getElementById('lname');
console.log(lastName);
//Retrieve the inputs by their name attribute and console.log them.
let lastNameName = document.getElementsByName('lname')[0];
console.log(lastNameName);
let firstNameName = document.getElementById('fname');
console.log(firstNameName);

//When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// let arr = [firstName, lastName];
function getValue(e) {
    let valueFirstName = firstName.value;
    let valueLastName = lastName.value;
    let ul = document.body.getElementsByTagName('ul')[0];
    console.log(ul);
    e.preventDefault();
    if(valueLastName !== "" || valueFirstName !== "") {
        let firstNameLi = document.createElement("li");
        let textNodeF = document.createTextNode(valueFirstName);
        firstNameLi.appendChild(textNodeF);
        ul.appendChild(firstNameLi);

        let lastNameLi = document.createElement("li");
        let textNodeL = document.createTextNode(valueLastName);
        lastNameLi.appendChild(textNodeL);
        ul.appendChild(lastNameLi);
    }else {
        alert("the field was empty")
    }

}
form.addEventListener("submit", getValue);

//Exercise 3 : Transform The Sentence - (textContent?)
let allBoldItems = [];
function getBold_items(){
    let stringArr = document.getElementsByTagName('strong');
    console.log(stringArr);
    for(let i = 0; i < stringArr.length; i++){
        allBoldItems[i] = stringArr[i];
    }
    return allBoldItems;
}
getBold_items();

function highlight(){
    let boldArr = getBold_items();
    for(let i = 0; i<boldArr.length; i++){
        boldArr[i].style.color = "red";
    }
    return boldArr;
}
// highlight();

function return_normal(){
    let boldArrRed = highlight();
    for(let i = 0; i<boldArrRed.length; i++){
        boldArrRed[i].style.color = "black";
    }
}
return_normal();


//Exercice 3 : Volume Of A Sphere

let firstForm = document.forms[0];
let volume = document.getElementById('volume');
firstForm.addEventListener("submit", VolumeOfASphere);
function VolumeOfASphere(e){
    e.preventDefault();
    let radius = document.getElementById('radius').value;
    console.log(radius);
    radius = Number(radius);
    let sphere = (4*Math.PI*radius*radius*radius)/3;
    // console.log(volume)
    volume.value = sphere;

    // return sphere;
}
