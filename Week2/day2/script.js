// // ------------ PART I ----------------
//
// // array : list of elements
// // ordered list
// // indexed list
// let shopping = ["shampoo", ["chocolate", "vanilla"], ["paper", "pen"]];
//
// //change the value of an element inside the array
// shopping[0] = "computer";
//
// //object
// // key : value pair
// // key: value pair
// // {
// // 	key : value,
// // 	key : value,
// // 	key : value,
// // }
//
// let shoopingObj = {
//     apple: 2,
//     pears: 4,
//     banana: 5,
//     isShampooAvailable: true,
//     usernameBuyer: "John",
//     coupons : ["12$", "14$"]
// };
//
// console.log(shoopingObj)
//
// // objectName.propertyName
// console.log("how many apples I need to buy ", shoopingObj.apple)
//
// // objectName["propertyName"]
// console.log("how many apples I need to buy ", shoopingObj["apple"])
//
// //value of the second coupon
// console.log(shoopingObj["coupons"][1])
//
// //change the value of a key
// shoopingObj["usernameBuyer"] = "Thomas";
// console.log(shoopingObj)
//
// //add a new key:value pair
// shoopingObj["lastNameBuyer"] = "Smith";
// console.log(shoopingObj)
//
//
//
// let family = {
//     lastname : "Smith",
//     members : 4,
//     hasADog : true,
//     nameOfMembers : ["Lea", "David", "Mom", "Dad"],
//     friends : {
//         name : "Jack",
//         lastname : "ABC",
//         age : 12,
//         favoriteColors : ["blue", "red"],
//     }
// };
//
// //1. Retrieve the number of the members of the family
// console.log(`There are ${family.members} members in the family`)
// console.log(`There are ${family["members"]} members in the family`)
//
// //2. Retrieve the name of Lea
// // positionLea = 3
// // --> she would be the 4th member
//
// // positionLea = 0
// // --> she would be the 1th member
// let positionOfLea = family["nameOfMembers"].indexOf("Lea");
// console.log("index of Lea in the array : " , positionOfLea)
// console.log(`The ${positionOfLea+1}# member of the family is Lea`)
//
//
// // Find the age of my friend
// console.log(`The age of my friend ${family.friends.name} is ${family.friends.age}`)
// console.log(`The age of my friend ${family["friends"]["name"]} is ${family["friends"]["age"]}`)
//
//
//
//
// //exercise
//
// let userCart = {
//     username : "John",
//     password: 1234,
//     isUserSignedIn : true,
//     cart : {
//         apple : 2,
//         banana : 1,
//         pear : 5,
//     },
//     prices : {
//         apple : 0.5,
//         banana : 0.8646466363,
//         pear : 0.2
//     }
// };
//
// // 1. Add the lastname Smith to the object
// userCart["lastname"] = "Smith"
// console.log(userCart.lastname);
//
// // 2. Change the price of the pear, so it will contain the Taxes. 17%
// // let pearWithTax = userCart.prices.pear * 1.17;
// // console.log(pearWithTax);
// userCart["prices"]["pear"]*=1.17;
// console.log(userCart);
//
//
//
// // 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// let fruit = prompt("witch fruit do you prefer? apple, banana, pear?: ").toLowerCase();
// console.log(fruit);
// // alert("Your want " + fruit);
// // let answer = fruit.toLowerCase();
// // if (answer === "apple"){
// //     answer = userCart.prices.apple;
// // }else if (answer === "banana"){
// //     answer = userCart.prices.banana;
// // }else{
// //     answer = userCart.prices.pear;
// // }
// let finalAnswer = userCart["prices"][fruit];
// console.log(finalAnswer);
//
// // Make sure that your code accept all type of strings,
// // for example "Banana" or "banana" or "BaNaNA"
// // 4. Console.log the price for the specific fruit the user wants
// // let yourFruit =
//
//
// //exercise solution
//
// // Exercise
//
// let userCart = {
//     username : "John",
//     password: 1234,
//     isUserSignedIn : true,
//     cart : {
//         apple : 2,
//         banana : 1,
//         pear : 5,
//     },
//     prices : {
//         apple : 0.5,
//         banana : 0.8646466363,
//         pear : 0.2
//     }
// };
//
// // 1. Add the lastname Smith to the object
// userCart["lastname"] = "Smith";
// console.log(userCart)
//
// // 2. Change the price of the pear, so it will contain the Taxes. 17%
// // userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17
// userCart["prices"]["pear"] *= 1.17
// console.log(userCart)
//
// // 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// // Make sure that your code accept all type of strings,
// // for example "Banana" or "banana" or "BaNaNA"
// let answerUser = prompt("Which fruit do you want: Apple,Banana,Pear").toLowerCase()
// console.log(answerUser)
// // "banana" == "BaNAna"
// // false
//
// // 4. Console.log the price for the specific fruit the user wants
// // let priceForSpecificFruit = userCart.prices.answerUser
// // dot notation doesn't work with variables
// // line 120 not working
// let priceForSpecificFruit = userCart["prices"][answerUser];
// //if the answer is apple,
// // userCart.prices.answerUser
// // userCart.prices.apple
// //if the answer is pear,
// // userCart.prices.answerUser
// // userCart.prices.pear
// console.log("priceForSpecificFruit : ", priceForSpecificFruit)
// console.log(`The price for a ${answerUser} is ${priceForSpecificFruit}`)

// Exercise 1 - Conditionals

// let age = prompt("how old are you");
// if(age < 18){
//     alert("Sorry, you are too young to drive this car. Powering off");
// }else if(age == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }else {
//     alert("Powering On. Enjoy the ride!");
// }
//

// Exercise 1 - Conditionals

let userCart = {
    username : "Johnny",
    password: 12345,
    isUserSignedIn : true,
    cart : {
        apple : 2,
        banana : 1,
        pear : 5,
    },
    prices : {
        apple : 0.5,
        banana : 0.8646466363,
        pear : 0.2
    }
};
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

if(userCart["isUserSignedIn"] == true){
    alert("user name: " + userCart["username"] + " "+ "password: "+ userCart["password"])
}else {
    alert("you need to sign in")
}


// 3rd exercise
//  1. If the user is John AND his password is 1234 - alert him "You are signed in"
//  2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"

if(userCart["username"] == "John" && userCart["password"] == 1234){
    alert("You are signed in")
}else if(userCart["username"] == "John" || userCart["password"] == 1234){
    alert("One credential is false")
}else{
    alert("you need to sign in")
}







