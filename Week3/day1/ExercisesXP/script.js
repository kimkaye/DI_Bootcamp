// //Exercise 1 : Change The Navbar
// let div = document.body.children[0];
// div.setAttribute("id", "socialNetworkNavigation");
// //We are going to add a new <li> to the <ul>.
//
//
// let newLi = document.createElement("li");
// let newTextNode = document.createTextNode("Logout");
// newLi.appendChild(newTextNode);
// document.body.children[0].children[0].appendChild(newLi);

//Exercise 2 : Users
//In the HTML above change the name “Pete” to “Richard”.
// document.getElementsByTagName("li")[1].innerHTML = "Richard";

// Change each first name of the two <ul>'s to your name.

// let classArr = document.getElementsByClassName('list');
// for (let i = 0; i < classArr.length; i++) {
//     let liEl = classArr[i];
//     liEl.children[0].innerHTML = "Kim"
// }
// console.log(classArr)

//At the end of each <ul> add a <li> that says “Hey students”.

// let arr = document.getElementsByClassName('list');
// for (let i = 0; i < arr.length; i++) {
//     let newLi = document.createElement("li");
//     let textNode = document.createTextNode("Hey students");
//     newLi.appendChild(textNode);
//     let liEl = arr[i];
//     liEl.appendChild(newLi);
// }

// Delete the name Sarah from the second <ul>.

// let secondUl = document.getElementsByClassName('list')[1];
// let secondLi = document.getElementsByClassName('list')[1].children[1];
// secondUl.removeChild(secondLi);

//Exercise 3 : Users And Style
let div = document.body.getElementsByTagName('div')[0];
console.log(div);
div.style.background = "lightblue";
div.style.padding = "20px";
let firstLi = document.body.getElementsByTagName('li')[0];
firstLi.style.display = "none";
let secondLi = document.body.getElementsByTagName('li')[1];
secondLi.style.border = "thick solid #0000FF";
let allBody = document.getElementsByTagName('body')[0];
allBody.style.fontSize = "30px";











