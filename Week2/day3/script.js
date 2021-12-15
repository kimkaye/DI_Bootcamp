// console.log("hello")
// console.log("hello")
// console.log("hello")

// for (statement 1; statement 2; statement 3) {
//       // code block to be executed
// }

// statement 1: when do I start the loop - starting point
// statement 2: condition - while the condition is true,
// run the loop
// statement 3: how we should increase the counter


// for (let counter = 0; counter <= 2; counter++) {
//     console.log("hello");
// }

// 1st step
// 	counter = 0
// 	0 <= 2 -> true
// 	console.log("hello")
// 	counter ++ -> counter = 1

// 2nd step
// 	counter = 1
// 	1 <= 2 -> true
// 	console.log("hello")
// 	counter ++ -> counter = 2

// 3rd step
// 	counter = 2
// 	2 <= 2 -> true
// 	console.log("hello")
// 	counter ++ -> counter = 3

// 4th step
// 	counter = 3
// 	3 <= 2 -> false
// 	STOP THE LOOP

// //same
// for (let counter = 1; counter <= 3; counter++) {
//     console.log("hello");
// }
//
// //same
// for (let counter = 1; counter < 4; counter++) {
//     console.log("hello");
// }
//
// for (let counter = 1; counter < 11; counter += 2) {
//     console.log("counter", counter)
//     console.log("hello");
// }

// 1st step
// 	counter = 1
// 	1 < 11 -> true
// 	console.log(counter) => 1
// 	console.log("hello")
// 	counter+=2 -> counter = 3

// 2nd step
// 	counter = 3
// 	3 < 11 -> true
// 	console.log(counter) => 3
// 	console.log("hello")
// 	counter+=2 -> counter = 5

// 3rd step
// 	counter = 2
// 	2 <= 2 -> true
// 	console.log("hello")
// 	counter ++ -> counter = 3



//Exercise 1
// for (let i = 0; i < 15; i++) {
//     if(i%2 == 0){
//         alert("the number is even");
//     }else {
//         alert("the number is odd");
//     }
// }

//Exercise 2 - class

// let fruits = ["apple", "banana", "pear", "melon"];
// // -> the result
// // let fruits = ["apples", "bananas", "pears", "melons"];
// for (let i = 0; i < fruits.length; i++) {
//     fruits[i] = fruits[i] + 's';
// }
// console.log(fruits);


let users = [
    {
        username:"John",
        lastName : "Smith"
    },
    {
        username:"Tom",
        lastName : "Smith"
    },
    {
        username:"Lea",
        lastName : "Smith"
    }
];

// 1. console.log the username of each user
for (let i = 0; i < users.length; i++) {
    console.log(users[i].username);
}

// for (let username of users) {
//     console.log(username);
// }










let names= ["john", "sarah", 23, "Rudolf",34]
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'string') {
        let firstChar = names[i][0];
        if(firstChar == firstChar.toUpperCase()){
            alert ('upper case true');
        }else {
            firstChar = firstChar.toUpperCase();
            alert (names[i]);
        }
    }else {
        continue;
    }
}