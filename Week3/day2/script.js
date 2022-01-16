// //the same - retrieve the element node with the id "container"
// let divOnThePage = document.getElementById("container");
// let divOnThePageQuery = document.querySelector("#container");
// //querySelector : select only one (the first one)
//
// //the same
// let allDivOnThePage = document.getElementsByTagName("div");
// let allDivOnThePageQuery = document.querySelectorAll("div");
// console.log("get elements :", allDivOnThePage, "get query :" , allDivOnThePageQuery)
// //querySelectorAll : select all the element node
//
// // console.log(allDivOnThePageQuery)
//
//
// // I want to retrieve all the paragraphs with the
// // class "article" that are in the first div
//
// // --> very hard this way
// // let divNode = document.getElementById("container");
// // let allPara = divNode.getElementsByTagName("p");
// // let paraNode = allPara.getElementsByClassName("article")
// // console.log(paraNode)
//
// //--> easy when we use querySelector
// let allParaClassArticle = document.querySelectorAll("#container p.article");
// console.log(allParaClassArticle)
// index.html
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title></title>
// </head>
// <body>
//
// <div id="container">
//     <p class="article">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     <p>Hello paragraph</p>
//     <section class="article">Hello Article</section>
// </div>
//
// <div>
//     <p class="article">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// </div>
// <script src="script1.js"></script>
// </body>
// </html>
//
// Lise  11:42 AM
// Exercise 1 - basic add event listener
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundcolor of the page to red
// 3. the same for blue
//     Exercise 2 - using the event object
// let colors = ["blue", "yellow", "green", "pink"];
// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)
// (edited)
//
// Lise  11:48 AM
// Events Lesson
// Script.js
// // ------ LESSON ---------
//
// //NOT GOING TO USE
// function inform(){
//     confirm("Do you want to play the game")
// }
//
//
// //NOT GOING TO USE
// //doesn't work when the same event is several times on the same element
// let button = document.getElementById("btn");
//
// button.onclick = function() {
//     confirm("Do you want to play the game");
// }
//
// button.onclick = function() {
//     console.log("Hello")
// }
//
//
// // -------------AddEventListener------------
// // 1. retrieve the element
// let buttonNode = document.getElementById("btnNode");
//
// // //2. Add the event listener method
// // // element.addEventListener(click,callback function)
//
// // //anonymous function
// // // buttonNode.addEventListener(
// // // 	"click",
// // // 	function () {
// // // 		console.log("you clicked")
// // // 	}
// // // )
//
// // // to call the callback function, we write the function without parentheses
// // // -> meaning we are calling the reference of the function
// buttonNode.addEventListener("click", informUser)
//
// function informUser () {
//     console.log("you clicked")
// }
//
//
// // // Buttons
// let btnBlue = document.getElementById("btnBlue");
// let btnRed = document.getElementById("btnRed");
//
// // //an even is FIRED
// btnRed.addEventListener("click", clickButton);
// btnRed.addEventListener("click", welcomeUser);
//
// function clickButton(){
//     console.log("You clicked the RED button")
// }
//
// function welcomeUser(){
//     console.log("Hello User")
// }
//
// btnBlue.addEventListener("mouseover", hoverButton);
//
// function hoverButton(){
//     console.log("You hovered on the BLUE button")
// }
//
// // Buttons - several events on the same element
// let btnYellow = document.getElementById("btnYellow");
// let btnGreen = document.getElementById("btnGreen");
//
// btnYellow.addEventListener("click", clickButtonSecond);
// btnYellow.addEventListener("mouseover", hoverButtonSecond);
//
// btnGreen.addEventListener("mouseover", hoverButtonSecond);
//
// function clickButtonSecond(){
//     console.log("You clicked the YELLOW button")
// }
//
// function hoverButtonSecond(){
//     console.log("You hovered on the button")
// }
//
// //Exercise
//
// //NOT EFFICIENT WITHOUT EVENTS
//
// let btnPink = document.getElementById("btnPink");
// let btnOrange = document.getElementById("btnOrange");
//
// btnPink.addEventListener("click", clickButtonPink);
// btnOrange.addEventListener("click", clickButtonOrange);
//
// function clickButtonPink () {
//     document.body.style.backgroundColor = "pink";
// }
//
// function clickButtonOrange () {
//     document.body.style.backgroundColor = "orange";
// }
// index.html
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title></title>
// <link rel="stylesheet" href="style.css">
// </head>
// <body>
//
// <!-- inline event handler -->
// <button onclick="inform()">Click here to play - Inline event </button><br>
//     <button id="btn">Click here to play</button><br>
//     <button id="btnNode">Click here to play - Add Event Listener </button><br>
//
//     <button id="btnBlue">BLUE</button><br>
//     <button id="btnRed">RED</button><br>
//
//
//     <button id="btnYellow">YELLOW</button><br>
//     <button id="btnGreen">GREEN</button><br>
//
//     <button id="btnPink">PINK</button><br>
//     <button id="btnOrange">ORANGE</button><br>
//
//     <script src="script1.js"></script>
// </body>
// </html>
// style.css
// #btnRed {
//     background-color:  red;
//     font-size: 30px;
// }
//
// #btnBlue {
//     background-color:  blue;
//     font-size: 30px;
//     color:  white;
// }
//
// #btnGreen {
//     background-color:  green;
//     font-size: 30px;
// }
//
// #btnPink {
//     background-color:  pink;
//     font-size: 30px;
//     color:  white;
// }
//
//
// #btnOrange {
//     background-color:  orange;
//     font-size: 30px;
// }
//
// #btnYellow {
//     background-color:  yellow;
//     font-size: 30px;
//     color:  white;
// }
// 11:51
// Exercise with the event object
// //Exercise with event
// let btnBlue = document.getElementById("btnBlue");
// let btnRed = document.getElementById("btnRed");
//
// btnBlue.addEventListener("click", clickButtonEvent);
// btnRed.addEventListener("click", clickButtonEvent);
//
// //My point: I want the function clickButtonEvent to be reusable
// //automatically when we use the addEventListener, an event object is passed
// //to the callback function
//
// function clickButtonEvent (event) {
//     console.log("event is : ", event)
//     console.log("event target is : ", event.target); //event.target is the button
//     console.log("event id is : ", event.target.id);
//     console.log("event textContent is : ", event.target.textContent);
//     document.body.style.backgroundColor = event.target.textContent.toLowerCase();
// }
// 11:56
// Exercise 3  - first finish the first 2 exercises
// let pics = [
// "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// ]
// 1.  Using this array, create a button on the page that when clicked on display one animal randomly
// 2.  Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// 3.  Add a button next to each image
// 4.  When we click on one image, it should disapear(ie. be deleted), When we hover on the image, it should display the "alt" attribute.
//
// Lise  12:07 PM
// ---Solution Exercise 1---
// script1.js
// // Exercise 1 - basic add event listener
// // 1. Create two buttons - id of "red", id of "blue"
// // 2. When we click on the red button -> Change the backgroundcolor of the page to red
// // 3. the same for blue
//
// // 1. Retrieve the element we want to work with
// let btnBlue = document.querySelector("#btnBlue");
// let btnRed = document.querySelector("#btnRed");
//
// // 2. Add an event listener to each of them
// btnBlue.addEventListener("click", clickButtonBlue)
// btnRed.addEventListener("click", clickButtonRed)
//
// //3. Build the callback function
// function clickButtonBlue () {
//     document.body.style.backgroundColor = 'blue'
// }
//
// function clickButtonRed () {
//     document.body.style.backgroundColor = 'red'
// }
// index.html
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <title></title>
//             <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <button id="btnBlue">BLUE</button>
// <button id="btnRed">RED</button>
//
// <script src="script1.js"></script>
// </body>
// </html>
// style.css
// #btnRed {
//     background-color:  red;
//     font-size: 30px;
// }
//
// #btnBlue {
//     background-color:  blue;
//     font-size: 30px;
//     color:  white;
// }
//
// Lise  12:52 PM
// Solution Exercise 2
// script1.js
// // Exercise 2 - using the event object
// // let colors = ["blue", "yellow", "green", "pink"];
// // Add inside the HTML file a div of id "container" (do it directly in the HTML)
// // Add one button per color inside the div container (do it directly in the JS)
// // Each button should have an "click" event listener
// // that changes the background color of the document,
// // to the color of the button (do it directly in the JS)
//
// // <button>BLUE</button>
//
// let colors = ["blue", "yellow", "green", "pink"];
//
// let divNode = document.getElementById("container");
//
// //add the list of colors in the DOM
// for (let elem of colors){
//     let newButton = document.createElement("button");
//     let newText = document.createTextNode(elem.toUpperCase());
//     newButton.setAttribute("id", `btn${elem}`);
//     newButton.addEventListener("click", changeColorOfBg);
//     newButton.appendChild(newText);
//     divNode.appendChild(newButton);
// }
//
// //create a callback function for the addEventListener
// function changeColorOfBg (e){
//     // console.log("e is : ", e);
//     // console.log("e.target is : ", e.target);
//     let textOfButton = e.target.textContent;
//     console.log("e.target.textContent is : ", e.target.textContent);
//     let textOfButtonLower = textOfButton.toLowerCase();
//     document.body.style.backgroundColor = textOfButtonLower;
//
//     // the same in one line
//     // document.body.style.backgroundColor = e.target.textContent.toLowerCase();
// }
//
// // when we use addEventListener, automatically an event object is created
// // event object is an JS object that contains information about the event
// // that happened
// // If we want to use this useful JS OBJECT, we need to retrieve it
// // by passing a parameter into the callback function
//
// // BEHIND THE SCENES
// //when the user click on a button
// //the function addEventListener will be called
//
// // function addEventListener (){
// //     let eventObj = {
// //         type : "eventType";
// //         target : "theTargetElement";
// //     }
//
// //     callbackFunction(eventObj)
// // }
//
//
// // function callbackFunction (e) {
// //     console.log(e.type) -> "eventType";
// // }
//     index.html
//     <!DOCTYPE html>
//     <html>
//     <head>
//     <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title></title>
//     <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//     <div id="container"></div>
//
//     <script src="script1.js"></script>
//     </body>
// </html>
//     style.css
//     button {
//         margin:  30px;
//     }
//
//     #btnblue {
//         background-color:  blue;
//         font-size: 30px;
//         color:  white;
//     }
//
//     #btnyellow {
//         background-color:  yellow;
//         font-size: 30px;
//     }
//
//     #btngreen {
//         background-color:  green;
//         font-size: 30px;
//     }
//
//     #btnpink {
//         background-color:  pink;
//         font-size: 30px;
//     }
//
//     Amichai Berger  1:16 PM
// @channel I'll be available from 1430
//
//     Lise  1:39 PM
//     Lesson on forms
//     script1.js
//     document.forms -> retrieve all the forms on the page
//
//     document.forms[0] -> retrieve the first form
//
//     document.forms[0].name -> retrieve the name attribute of the first form
//
//     document.forms[0].elements -> retrieve the children of the form
//
//     document.forms[0].elements[0] -> retrieve the first child of the form
//
//     document.forms[0].elements.username -> retrieve the child of the form that has the id "username"
//
// //retrieve the form
//     let firstForm = document.forms[0];
// // let inputFirstForm = firstForm.elements.username;
//
// //create the array, it should be an array of users, each user is an object
//     let allUsers = [];
//
// // add an event listener to the form. The event is submit
// // when the user will click on the button OR press the ENTER key
// // it will submit the form
//     firstForm.addEventListener("submit", addUser);
//
// //when the
//
// is submitted, the callback function addUser is executed
// //this callback function takes a parameter: the event object (e)
//     function addUser(e){
//         //very important step to avoid refreshing the page
//         e.preventDefault();
//         console.log("e.target ", e.target); //form that the user submitted
//         console.log("e.target.elements ", e.target.elements); //show the children of the form (ie. the 2 inputs and the button)
//
//         //find the input elements by id
//         let firstInput = e.target.elements.username; //input username
//         let secondInput = e.target.elements.password; //input password
//         console.log(firstInput, secondInput)
//
//         //find the value of those input
//         let firstInputValue = firstInput.value; //value of the username input
//         let secondInputValue = secondInput.value; //value of the password input
//         console.log(firstInputValue, secondInputValue)
//
//         // create an object that hold the values of the user
//         let objUser = {
//             username : firstInputValue,
//             password : secondInputValue
//         }
//
//         // push the object to the array
//         allUsers.push(objUser);
//
//         console.log(allUsers);
//     }
//
//
// //SYNTAX IN ONE LINE
//     function addUser(e){
//         e.preventDefault();
//         let objUser = {};
//
//         objUser["username"] = e.target.elements.username.value;
//         objUser["password"] = e.target.elements.password.value;
//
//         allUsers.push(objUser);
//         console.log(allUsers);
//     }
//
// // show the users on the page
//     let div = document.getElementById("users")
//     let btn = document.getElementById("btn");
//     btn.addEventListener("click", showUsers);
//
//     function showUsers(){
//         for (let elem of allUsers){
//             let para =  document.createElement("p");
//             let text = document.createTextNode(`The user is ${elem.username}, the password is ${elem.password}`)
//             para.appendChild(text);
//             div.appendChild(para)
//         }
//     }
//     index.html
//     <!DOCTYPE html>
//     <html>
//     <head>
//     <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title></title>
//     <link rel="stylesheet" href="">
//     </head>
//     <body>
//     <form name="my">
//         <label for="username">Username</label>
//         <input name="one" id="username"><br>
//             <label for="password">Password</label>
//             <input name="two" id="password">
//                 <button>Click here to sign up</button>
//     </form>
//
//     <button id="btn">Click here to display the users</button>
//
//     <div id="users"></div>
//
//     <script src="script1.js"></script>
//     </body>
// </html>
//
//
//
//
//
//
