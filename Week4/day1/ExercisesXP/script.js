// Exercise 1 : Scope

// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// //prediction: 3
//
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// //prediction: 0
//
//
// function q22() {
//     alert(a);
// }
// //prediction: undefined
//
//
//
// //#3
// function q3() {
//     window.a = "hello";
// }
// //prediction: hello
//
//
// function q32() {
//     alert(a);
// }
// //prediction: undefined
//
//
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// //prediction: test
//
//
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// //prediction: 5


// Exercise 2 : Ternary Operator

// let experiencePoints ="";

// function winBattle(){
//     return true;
// }
//
// function experiencePoints() {
//     return (winBattle ? 10 : 1);
// }
//
// console.log(experiencePoints());


// function winBattle(){
//     return true;
// }
//
// function experiencePoints(winBattle) {
//     return (winBattle ? 10:1);
// }
//
// console.log(experiencePoints(winBattle()));


// Exercise 3 : Colors

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// console.log(colors.includes("Violet"));
// colors.forEach((color, index) => {
//     console.log((index+1) + "# choice is", color) // logs each element of the array
// });

//Exercise 4 : Colors #2
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
//
// color.forEach((col, index) => {
//     const end = ordinal[index];
//     index < ordinal.length ? console.log((index+1) + end + " is " + col) : console.log(index + ordinal[3] + " is " + col);
// });

//Exercise 5 : Is It A String ?

function isString(word) {
    return (typeof word === 'string' ? true:false);
}

console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 6 : Bank Details

let bankAmount = 100;
let vat = 1.17;
let details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((elem, index, arr) =>  arr[index] *= vat
)
console.log(details);

details.forEach((elem, index, arr) =>  bankAmount += arr[index]
)
console.log(bankAmount);