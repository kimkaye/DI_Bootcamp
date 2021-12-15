// Exercise 1 : Information
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).

function infoAboutMe(){
    console.log("my name is Kim, my age is 26 and i like to cook and bake :)")
}
// Call the function.
infoAboutMe();

// Part II : function with three parameters
//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is " + personName + " your age is " + personAge + " and your favorite color is "+ personFavoriteColor);
}
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
function calculateTip(){
    let bill = prompt("what is the amount of the bill? ");
    let billSum = parseInt(bill);
    if(billSum < 50){
        billSum += billSum*(0.2);
    }else if(50 < billSum < 200){
        billSum += billSum*(0.15);
    }else {
        billSum += billSum*(0.1);
    }
    console.log(billSum);
}
//Console.log the tip amount and the final bill (bill + tip).
//Call the calculateTip() function.

// calculateTip();

//Exercise 3 : Find The Numbers Divisible By 23

function isDivisible(){
    let sum = 0;
    for(let i=0; i < 500; i++){
        if(i % 23 == 0){
            console.log(i);
            sum+= i;
        }
    }
    console.log("sum: " + sum);
}
isDivisible();

//Bonus: Add a parameter divisor to the function.

function isDivisible(divisor){
    let sum = 0;
    for(let i=0; i < 500; i++){
        if(i % divisor == 0){
            console.log(i);
            sum+= i;
        }
    }
    console.log("sum: " + sum);
}
isDivisible(100);

// Exercise 4 : Shopping List

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
//Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// let shoppingList = ["banana", "orange", "apple"];
// //Create a function called myBill() that takes no parameters.
// function myBill(){
//     let sum = 0;
//     for(let i = 0; i< shoppingList.length; i++) {
//         if (stock[shoppingList[i]] != 0) {
//             sum+= prices[shoppingList[i]];
//         }
//     }
//     console.log(sum);
// }
// myBill();

// Bonus: If the item is in stock, decrease the item’s stock by 1

let shoppingList = ["banana", "orange", "apple"];
//Create a function called myBill() that takes no parameters.
function myBill(){
    let sum = 0;
    for(let i = 0; i< shoppingList.length; i++) {
        if (stock[shoppingList[i]] != 0) {
            sum+= prices[shoppingList[i]];
            stock[shoppingList[i]] --;
        }
    }
    console.log(sum);
    //check:
    console.log(stock["banana"]);
    console.log(stock["orange"]);
    console.log(stock["apple"]);
}
myBill();

// Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange){
    let sumOfChange;
    sumOfChange = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01);
    console.log(sumOfChange);
    if(sumOfChange >= itemPrice){
        return true;
    }else {
        return false;
    }
}

changeEnough(4.25, [25, 20, 5, 0])


// Exercise 6 : Vacations Costs
//Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
function hotelCost() {
    let nights = 0;
    let isValid = false;
    let totalPrice = 0;
    do {
        nights = prompt("Please input number of nights you want to stay", "");
        nights = parseInt(nights);
        if (typeof (nights) == "number") {
            isValid = true;
        }
        if (isValid) {
            totalPrice = nights * 140;
            return totalPrice + "$";
        } else {
            nights = prompt("Please input number of nights you want to stay", "");
        }
    } while (!isValid);
}
// hotelCost();

//Define a function called planeRideCost().
//???im not sure how to make sure the user wont give a number for destination

function planeRideCost(){
    let destination = "";
    let isValid = false;
    do {
        destination = prompt("Please enter your destination", "").toLowerCase();
        if (typeof (destination) == "string") {
            isValid = true;
        }
        if (isValid) {
            if(destination == "london"){
                return 183 + "$";
            }else if(destination == "paris"){
                return 220 + "$";
            }else {
                return 300 + "$";
            }
        } else {
            destination = prompt("Please enter your destination", "");
        }
    } while (!isValid);
}
// planeRideCost();

function rentalCarCost(){
    let days = 0;
    let isValid = false;
    let totalPrice = 0;
    do {
        days = prompt("Please input number of days you want to rent a car", "");
        days = parseInt(days);
        if (typeof (days) == "number") {
            isValid = true;
        }
        if (isValid) {
            if(days <= 10) {
                totalPrice = days * 40;
            }else {
                totalPrice = (days * 40) * 0.95;
            }
            return totalPrice + "$";
        } else {
            days = prompt("Please input number of days you want to rent a car", "");
        }
    } while (!isValid);
}
// rentalCarCost();
//check
// console.log(rentalCarCost());


function totalVacationCost(){
    console.log("The car cost: " + rentalCarCost() + " the hotel cost: " + hotelCost() + " the plane tickets cost: " + planeRideCost());
}
totalVacationCost();






