// // let title = document.body.children[0];
// //find the first child of the body
// //find the child at the position 0
//
// // let parentTitle = title.parentNode;
// // console.log(parentTitle)
// //find the parent of the h1
//
// // //find the div
// // let divElementNode = document.body.firstElementChild;
// // //find the children of the div
// // let childrenOfDiv = divElementNode.children;
// // console.log(childrenOfDiv)
// //
// // for (let i = 0; i<childrenOfDiv.length; i++){
// //     childrenOfDiv[i].style.color = "red";
// // }
// //
// // for (let elemNode of childrenOfDiv){
// //     elemNode.style.color = "red";
// // }
// //
// // // childrenOfDiv.push("hello") //not possible, an HTML collection is not an array
// // console.log(childrenOfDiv.length)
//
//
//
//
// // For each of the questions, find 2 WAYS of accessing :
//
// //1. The div DOM node?
//
// // let divElementNode = document.body.children[0];
// // console.log(divElementNode);
// // let secondDivElementNode = document.body.firstElementChild;
// // console.log(secondDivElementNode);
// //
// //
// //
// // //2. The ul DOM node?
// //
// // let ulDom = document.body.children[1];
// // console.log(ulDom);
// //
// //
// //
// //
// // // 3. The second li (with Pete)?
// //
// // let secondLi = ulDom.children[1];
// // console.log(secondLi);
// // let sSecondLi = ulDom.children[1];
//
//
//
// ////--- PART II ---
// // // Find the element with the id titleTwo
// // let secondTitle = document.getElementById("titleTwo");
// // console.log(secondTitle)
// //
// // // Find all the elements with the class title
// // let allH1 = document.getElementsByClassName("title");
// // console.log(allH1)
// //
// // // Find all the elements with the tag h1
// // let allH1Tag = document.getElementsByTagName("h1");
// // console.log(allH1Tag)
// //
// // //find the element with id titleTwo
// // let secondTitleQuery = document.querySelector("#titleTwo")
// // console.log(secondTitleQuery)
// //
// // //find all the H3 that are inside the div
// // let divElementNode = document.body.firstElementChild;
// // let allH3 = divElementNode.getElementsByTagName("h3");
// // console.log(allH3)
// //
// // //find all the H3 that are inside the div
// // let allH3Query = document.querySelectorAll("div h3")
// // console.log(allH3Query)
// //
// // // gives back a list
// // let divInsidePage = document.getElementsByTagName("div");
// // console.log(divInsidePage[0])
//
//
//
//
// //For each of the questions, find 2 WAYS to access :
// //
// //
// //
//
// // 1. The div node
//
//
// let div = document.querySelector('#container'); // div
// console.log(div);
//
//
// // 2. The ul nodes, and render all of it's children one by one
//
// let ul = document.querySelectorAll('.list'); // ul
// console.log(ul);
// for(let i = 0; i < ul.length; i++){
//     console.log(ul[i]);
// }
//
//
// // 3. The first li of each ul
//
// // let liPeteFirstWay = document.body.children[1].children[1];
// // let li = document.body.querySelectorAll('.list');
// let elements = document.querySelectorAll('ul > li:first-child');
// console.log(elements);
//
//
// // Exercise 1
// // 1. The div DOM node?
//
// let divFirstWay = document.body.children[0];
// console.log(divFirstWay)
// let divSecondWay = document.body.firstElementChild;
// console.log(divSecondWay)
//
// // 2. The ul DOM node?
// let ulFirstWay = document.body.firstElementChild.nextElementSibling;
// console.log(ulFirstWay);
// let ulSecondWay = document.body.children[1];
// console.log(ulSecondWay);
//
// // 3. The second li (with Pete)?
// let liPeteFirstWay=document.body.children[1].children[1];
// //document.body.children[1] -> ul
// //document.body.children[1].children[1] -> second child of the ul -> <li>Pete</li>
// console.log(liPeteFirstWay)
// let liPeteSecondWay=document.body.children[1].lastElementChild;
// //document.body.children[1] -> ul
// //document.body.children[1]..lastElementChild -> last child of the ul -> <li>Pete</li>
// console.log(liPeteSecondWay)
//
// // 4. To retrieve the text node inside the li containing Pete
// let liPeteThirdWay= document.body.children[1].lastElementChild;
// let textNodeOfLi = liPeteThirdWay.textContent;
// console.log(textNodeOfLi)
//
// //5. Change the font size of the li containing Pete
// liPeteThirdWay.style.fontSize = "45px";
//
// //6. Change Pete to Tom
// // liPeteThirdWay.textContent = "Tom";
//
// //7. Change Pete to Pete Smith
// liPeteThirdWay.textContent += " Smith";
//
// // With dynamic variables
// let username = "Sarah";
// liPeteThirdWay.textContent = username;
//
// //1. Create a new element
// // document.createElement("tag")
// let newParagraph = document.createElement("p");
//
// //2. Create a text node
// //document.createTextNode("text")
// let newText = document.createTextNode("Hello new paragraph");
//
// // 3. Append the text to the element
// newParagraph.appendChild(newText)
//
// let findDiv = document.getElementById("container");
// //4. append the paragraph to the div
// findDiv.appendChild(newParagraph)
//
// //Exercise with shopping
//
// let shoppingItems = ["shampoo", "chocolate"];
// let div = document.getElementById("shopping");
//
// for (let i = 0; i<shoppingItems.length; i++) {
//     let para =  document.createElement("p");
//     let text = document.createTextNode(`The user bought ${shoppingItems[i]}`);
//     para.appendChild(text);
//     div.appendChild(para);
// }
//
//
// //Exercise with pic and classes
//
// let shoppingPictures = ["shampoo.jpg", "chocolate.jpg"]
//
// for (let i = 0; i<shoppingItems.length; i++) {
//     let para =  document.createElement("p");
//
//     let img = document.createElement("img");
//     // img.style.width = "100px";
//     // img.style.border = "3px solid red";
//     // img.style.heigth = "100px";
//     img.classList.add("cart")
//     img.setAttribute("src", shoppingPictures[i])
//
//     let text = document.createTextNode(`The user bought ${shoppingItems[i]}`);
//     para.appendChild(text);
//     div.appendChild(para);
//     div.appendChild(img);
// }
//
//
// // dynamic with conditional
//
// for (let i = 0; i<shoppingItems.length; i++) {
//     let para =  document.createElement("p");
//
//     let img = document.createElement("img");
//     img.setAttribute("src", shoppingPictures[i])
//
//     let text = document.createTextNode(`The user bought ${shoppingItems[i]}`);
//     para.appendChild(text);
//     div.appendChild(para);
//
//     if (shoppingItems[i] == "shampoo"){
//         img.classList.add("cart");
//     } else {
//         img.classList.add("cartTwo");
//     }
//
//     div.appendChild(img);
// }
//
// .cart {
//     width : 100px;
//     height: 100px;
//     border:  3px solid red;
// }
//
// .cartTwo {
//     width : 100px;
//     height: 100px;
//     border:  3px solid blue;
// }
//
// //Exercise 2
//
// // 1. The div node
//
// let divFirstWay = document.getElementById("container");
// console.log(divFirstWay)
// let divSecondWay = document.querySelector("#container");
// console.log(divSecondWay)
//
// // 2. The ul nodes, and render all of it's children one by one
// let ulNodeFirstWay = document.getElementsByClassName("list");
// console.log(ulNodeFirstWay)
// let ulNodeSecondWay = document.querySelectorAll(".list");
// console.log(ulNodeSecondWay)
// let ulNodeThirdWay = document.querySelectorAll("ul");
// console.log(ulNodeThirdWay)
// let ulNodeFourthWay = document.getElementsByTagName("ul");
// console.log(ulNodeFourthWay)
//
// // the same as doing collection.children
// // but the children property only work with element
// // element.children
// console.log(ulNodeFirstWay.children) //impossible
//
// for (let item of ulNodeFirstWay) {
//     // console.log("ul is ", ul)
//     // for (let li of ul.children) {
//     // 	console.log(" li is ", li)
//     // }
//     console.log("li is ", item.children[0]);
//     console.log("li is ", item.children[1])
// }
//
//
// // ulNodeFirstWay is NodeList(2)[ul.list, ul.list]
// // 3. The first li of each ul
// for (let item of ulNodeFirstWay) {
//     console.log("li is ", item.firstElementChild);
// }
// index.html
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>
//
// let person = [
//     {
//         username : "John",
//         isSignIn : true
//     },
//     {
//         username : "Sarah",
//         isSignIn : false
//     },
//     {
//         username : "Tom",
//         isSignIn : true
//     },
// ];
//
// let div = document.querySelector("#shopping");
//
// //appendChild method syntax
// //element.appendChild(something)
// //whereToAppend.appendChild(whatToAppend)
//
// for (let elem of person){
//     console.log(elem)
//     let title =  document.createElement("h1");
//     let text = document.createTextNode(elem.username);
//     title.appendChild(text)
//
//     //change the color depending on the isSignIn key of the person object
//     if (elem.isSignIn){
//         // h1.style.color="blue";
//         title.classList.add("signedIn")
//     } else {
//         title.classList.add("notSignedIn")
//     }
//
//
//     div.appendChild(title)
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
// <div id="shopping"></div>
//
// <script src="script1.js"></script>
// </body>
// </html>
// style.css
//     .signedIn {
//     color:  blue;
// }
//
// .notSignedIn {
//     color:  red;
// }
//
//
//
//
//
//
//
//
