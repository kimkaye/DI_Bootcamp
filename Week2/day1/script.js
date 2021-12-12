//let pet => declaring
//= "dog" => defining
// let pet = "dog";
//the same:
// let color;
// color = "blue";

//when you chose const you have to do like this: (because const cant be change)
// const country = "israel";

// variable name in CamelCase
let myFavoritePet;

// Declaring and defining
// let pet => Declaring
// = "dog" => Defining/Assigning
let pet = "dog";

// // declaring
let color;
console.log(color) //undefined

// //defining
color = "blue";
console.log(color) //"blue"

// //defining again - updating the value
color = "red";
console.log(color) //"red"


//Difference let and const

let computer = "apple";
console.log(computer)
computer = "hp";
console.log(computer)

const language = "javascript";
console.log(language);
language = "python"; //error
console.log(language);


//Concatenation

let username = "John";
let age = 22;
// "John is 22 years old"
console.log(username + " is " + age + " years old");
console.log(`${username} is ${age} years old`)

// Exercise 1 of the lesson

let addressNumber = 12;
let addressStreet = "Ben Yehuda";
let country = "Israel";

let globalAdress = `I live at ${addressNumber} ${addressStreet} in ${country}`;
console.log(globalAdress)

// --------- Part II -------------

//string - list of characters wrapped between quotes
// methods and properties

let username = "THOMAS";
console.log(username.toLowerCase())

let email = "john@gmail.com";
let chocolate = email.includes("@");
// console.log(email.includes("@"))
console.log(chocolate)


let numberOfCharacters = email.length;
console.log(numberOfCharacters)
let firstLetter = email[0];
let secondLetter = email.charAt(1);
console.log(firstLetter)
console.log(secondLetter)

// -------------- PART III -----------------

//Comparaison

let username = "John";
let dadName = "jOhN";
username == dadName;
// --> false
username.toLowerCase() == dadName.toLowerCase();
// --> true

1 != 2
// --> true
!true
// --> false

//comparison

// == compares the value
1 == "1"
// -->true

// === compares the value AND the data type
1 === "1"
// -->false

typeof(1)
// -->'number'
typeof("1")
// -->'string'

// Incrementation
let number = 2;

//increment the number by one
//1st possibility
// the variable number = 2 + 1
number = number + 1;
number += 1;
number ++

// Example:
let myNumber = 2;

number += 1
// --> 3
number += 3
// --> 6
number -= 3
// --> 3
number *= 3
// --> 9


// ----- PART IV -----

// Primitive data type: string, number, boolean
// Complex data type

// Array is a list of elements

let colors = ["blue", "red", "yellow"];
let list = ["blue", 2, true, ["chocolate", "vanilla"]];
console.log("the length of the array is", colors.length);
console.log(colors[1]) //element at position 1

//change the value of the element at position 1
colors[1] = "black";
console.log(colors)

// add the color orange at the end of the array
colors.push("orange")
console.log(colors)

//delete the last color of the array
colors.pop()
console.log(colors)


let shopping = ["shampoo", ["banana", "apple"], "water" , ["chocolate", "vanilla", "caramel"]]
// "I bought shampoo, an apple, and 3 bars of chocolate"

console.log(`I bought ${shopping[0]}, an ${shopping[1][1]}; and 3 bars of ${shopping[3][0]}`)


let animals = ["dog", "cat", "rabbit"];
// // console.log(animals[2])
//I want to know which animal is the last one
console.log(animals);
console.log("the last animal is : ", animals.pop());
console.log(animals);
let lengthArray = animals.length;
//  -> 3
let positionOfLastElement = lengthArray - 1;
// -> position of the last element: 2
let lastElement = animals[positionOfLastElement];
// -> find the last element : "rabbit"
// -> the same as doing animals[3-1] -> the same as doing animals[2]
console.log("the last animal is : ", lastElement)

// // The same as above
let valueLast = animals[animals.length-1];


//User defined functions

let newAnimal = prompt("Which animal do you want to add");
animals.push(newAnimal)
console.log(animals)

// 1st parameter is where we want to add or delete
// 2nd parameter is how many elements I want to delete
// 3rd parameter what element to add

// Add the newAnimal at the position 0, without deleting any animals
animals.splice(0,0,newAnimal)
console.log(animals)
console.log(animals[animals.length-1])

// Add the newAnimal at the position 1, while deleting 2 animals from the position 1
animals.splice(1,2,newAnimal)
console.log(animals)
console.log(animals[animals.length-1])

