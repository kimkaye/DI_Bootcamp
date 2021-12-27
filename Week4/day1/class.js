//ARRAY DESTRUCTURING

let colors = ["blue", "red", "yellow"];
// let colorA = colors[0];
// let colorB = colors[1];
// let colorC = colors[2];
let [colorA, colorB, colorC] = ["blue", "red", "yellow"];
console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// let [colorA, colorB, colorC] = colors;
// console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// let [colorA, colorB, colorC] = ["blue", "red"];;
// console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


function getColors (){
    let colors = ["blue", "red"];
    return colors;
}

let myFavColors = getColors();
console.log(myFavColors)

let [firstColor, secondColor] = myFavColors;
console.log("firstColor is :" , firstColor, "secondColor is :" , secondColor)


// let [firstColor, secondColor] = getColors();
// console.log("firstColor is :" , firstColor, "secondColor is :" , secondColor)

//OBJECT DESTRUTURING

let family = {
    name: "Smith",
    member : 2
}

// // let first = family["name"];
// // let second = family["member"];

let {name, member} = family
console.log("name is ",  name, "member is ", member)



function getFamily(){
    let family = {
        name: "Smith",
        member : 2
    }
    return family;
}



let details = getFamily()
let {name, member} = details


function say(message) {
    return message;
}

// ASSIGNING THE RESULT OF THE INVOKATION OF THE FUNCTION
// TO THE VARIABLE WORD
let word = say("Hello"); //-> word = "Hello"
document.body.textContent = word;


//------------------
// multiple return statements in the function
//------------------

// function compare(a, b, operator) {
//     return a+b;
//     console.log("hello") //this line won't be executed
// }

function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    } else {
        return "ERROR";
    }
    console.log("Hello"); //never executed
}

// let resultA = compare(2,3,"+");
// console.log(`The result of the function is ${resultA}`) //5

// let resultB = compare(2,3,"-");
// console.log(`The result of the function is ${resultB}`) //-1

// let resultC = compare(2,3,"*");
// console.log(`The result of the function is ${resultC}`) // ERROR


// TERNARY OPERATOR
// condition ? condition is true : condition is false


function getTemp (temp) {
    if (temp > 20) {
        document.body.textContent = "Summer";
    } else {
        document.body.textContent = "Winter"
    }
}

getTemp(24)


function getTempOne (temp) {
    temp > 20 ? document.body.textContent = "Summer" : document.body.textContent = "Winter";
}

getTempOne(24)


function getTempTwo (temp) {
    let season = temp > 20 ? "Summer" : "Winter";
    document.body.textContent = season;
}

getTempTwo(24)


const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";

document.body.textContent = getTempThree(24)


//---------------------------------
// Array methods and arrow function
//---------------------------------

// 1st possibility: Callback function
let classmates = ["Josh", "Lily", "Sophie", "Mark"];

//With function declaration
classmates.forEach(showClassmates)

function showClassmates(classmateName,classmateIndex, classmateArray){
    console.log("classmateName" , classmateName)
    console.log("classmateIndex" , classmateIndex)
    console.log("classmateArray" , classmateArray)
}

//with anonymous function
classmates.forEach(function (element, index, array) {
    console.log(`${element} is at the index ${index}`)
})

//with anonymous arrow function
classmates.forEach((element, index, array) => console.log(`${element} is at the index ${index}`))

classmates.forEach((element) => console.log(`${element}`))