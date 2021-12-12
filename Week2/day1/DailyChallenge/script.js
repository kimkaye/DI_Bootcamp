// Exercise 1:
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0, 1);
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.splice(3, 0, "kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
const reversed = fruits.reverse();
console.log('reversed:', reversed);

// Exercise 2:
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let newArray = moreFruits[1];
console.log(newArray);
let newArray1 = newArray[1];
console.log(newArray1);
let global = `${newArray1}`;
console.log(global);












