// Exercise 1
let favoriteFood = "pasta";
let favoriteMeal = "lunch";
let globalAdress = `I eat ${favoriteFood} at every ${favoriteMeal}`;
console.log(globalAdress);

// Exercise 2

//part 1
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = watchedSeries.length;
console.log(watchedSeriesLength);
let myWatchedSeries = `${watchedSeries} `;
console.log(myWatchedSeries);
let global = `I watched ${watchedSeriesLength} series : ${watchedSeries}`;
console.log(global);

//part 2
watchedSeries.splice(2, 1, "friends");
console.log(watchedSeries);
watchedSeries.push("you")
console.log(watchedSeries);
watchedSeries.splice(0, 0, "how i met your mother");
console.log(watchedSeries);
watchedSeries.splice(1,1 );
console.log(watchedSeries);
let money = watchedSeries[1];
let thirdLetter = money.charAt(2);
console.log(thirdLetter);
console.log(watchedSeries);

// Exercise 3
let celsiusTemperature = 20;
let fahrenheit = celsiusTemperature * 9 / 5 + 32;
console.log(fahrenheit);

// Exercise 4
let c;
let a = 34;
let b = 21;
console.log(a+b) //first expression
// Prediction: 55 (because 34+21 = 55)
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 (2+21)
// Actual: 23

// c is undefined because we didn't give him a value
console.log(3 + 4 + '5');
//the 3+4=7 and then the 5 does not count it is just written so it is 75

// Exercise 5 - Guess The Answers #1

console.log(typeof(15));
// Prediction: number
// Actual: number

console.log(typeof(5.5));
// Prediction:number
// Actual:number

console.log(typeof(NaN));
// Prediction:null
// Actual:number

console.log(typeof("hello"));
// Prediction: string
// Actual:string

console.log(typeof(true));
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2));
// Prediction:boolean
// Actual:boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:hamburger
// Actual:NaN

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3");
// Prediction:NaN
// Actual:-2

console.log("johnny" + 5);
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5);
// Prediction:NaN
// Actual:NaN

console.log(99 * "hello");
// Prediction:NaN
// Actual:NaN

console.log(1 != 1)
// Prediction:false
// Actual:false

console.log(1 == "1");
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction:false
// Actual:false

//Exercise 5 : Guess The Answers #2

console.log(5 + "34")
// Prediction:534
// Actual:534

console.log(5 - "4")
// Prediction:1
// Actual:1

console.log(10 % 5)
// Prediction:0
// Actual:0

console.log(5 % 10)
// Prediction:5
// Actual:5

console.log("Java" + "Script")
// Prediction:JavaScript
// Actual:JavaScript

console.log(" " + " ")
// Prediction: " "
// Actual:" "

console.log(" " + 0);
// Prediction: 0
// Actual: 0

console.log(true + true)
// Prediction:2
// Actual:2

console.log(true + false)
// Prediction:1
// Actual:1

console.log(false + true)
// Prediction:1
// Actual:1

console.log(false - true)
// Prediction:-1
// Actual:-1

console.log(!true)
// Prediction:false
// Actual:false

console.log(3 - 4)
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill")
// Prediction:nan
// Actual:nan




























