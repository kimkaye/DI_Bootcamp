// //1st exercise
// //You need to guess what will be console logged, and explain why
//
//
// let username = "John";
//
// function checkName (){
//     console.log("In the function",username);
//     username += "Smith";
//     console.log("Still in the function",username);
// }
//
// console.log("before the function", username);
//
// checkName()
//
// console.log("after the function", username);
//
// //prediction:before the function John
// // In the function John
// //     Still in the function JohnSmith
// // after the function JohnSmith
//
//
//
//
// //2ns exercise
// //You need to guess what will be console logged, and explain why
//
//
// let username = "John";
//
// function checkName (){
//     let username = "Tom";
//     console.log("In the function",username);
//     username += "Smith";
//     console.log("Still in the function",username);
// }
//
// console.log("before the function", username);
//
// checkName()
//
// console.log("after the function", username);

//3ns exercise
//Exercise on object destructuring
// Display in the body the name, email and phone of every employee

// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]
// for(let i=0; i< employees.length; i++){
//     let name = employees[i].name;
//     let email = employees[i].email;
//     let phone = employees[i].phone;
//     document.body.textContent += "the name: " + name + " the email: " +  email + " the phone: " + phone;
// }
//

// Exercise
// Using this let classmates = ["Josh", "Lily", "Sophie", "Mark"];
// Use for each and arrow function, to add a & after Sophie and a ! after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Try to use tenary operator

// 1st possibility: Callback function
let classmates = ["Josh", "Lily", "Sophie", "Mark"];
classmates.forEach((elem, index, arr) => elem === "Sophie" ? arr[index] += "&" : arr[index] += "!"
)

console.log(classmates);



