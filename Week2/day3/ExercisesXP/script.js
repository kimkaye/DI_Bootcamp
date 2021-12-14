// Exercise 1 : List Of People

let people = ["Greg", "Mary", "Devon", "James"]

// Write code to remove “Greg” from the people array.

people.splice(0, 1);
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
console.log(people);

// Write code to add your name to the end of the people array.

people.splice(people.length, 0, "kim");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.

console.log(people.slice(1, people.length-1));

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
//because there is no Foo - it gives -1

// Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .

for (let i = 0; i < people.length; i++) {
    if(people[i] != "Jason") {
        console.log(people[i]);
    }else {
        break;
    }
}

// Exercise 2 : Your Favorite Colors

let colors = ["pink", "yellow", "green", "blue"]
let suffix = ["st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log("My " + (i+1) + suffix[i] +  " choice is " + colors[i]);
}

//Exercise 3 : Repeat The Question

// let number = prompt("choose a number: ");
// console.log(parseInt(number));
// console.log(number);
//
// // While the number is smaller than 10 continue asking the user for a new number.
// let number = prompt("choose a number: ");
// while (number < 10){
//     number = prompt("choose a number: ");
// }

// Exercise 4 : Building Management
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

//Console.log the number of floors in the building.
console.log(building["numberOfFloors"]);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["thirdFloor"]);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building["nameOfTenants"][1]+ " " + building["numberOfRoomsAndRent"]["dan"][0]);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sumSarahDavid = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1];
console.log(sumSarahDavid);
let sumDan = building["numberOfRoomsAndRent"]["dan"][1];
console.log(sumDan);
while (sumSarahDavid > sumDan){
    sumDan+=1200;
}
console.log(sumDan);

// Exercise 5 : Family
//Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.

let family = {
    numberOfFamilyMembers: 6,
    lastName: 'kaye',
    city: 'tel-aviv'
}

// Using a for loop, console.log the keys of the object.

for (const [key, value] of Object.entries(family)) {
    console.log(`${key}`);
}

// Using a for loop, console.log the values of the object.

for (const [key, value] of Object.entries(family)) {
    console.log(`${value}`);
}

//Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

for (const [key, value] of Object.entries(details)) {
    console.log(`${key} ${value}`);
}

// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = "";
let sortedNames = names.sort();

for(let i = 0; i<sortedNames.length; i++){
    secret += sortedNames[i].charAt(0);
}
console.log(secret);



















