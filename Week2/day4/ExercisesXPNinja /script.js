// Exercise 1: Random Number

//Get a random number between 1 and 100.

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("the random number is: " + randomNumber);
// Console.log all even numbers from 0 to the random number.

for(let i = 0; i <= randomNumber; i++){
    if(i%2 === 0) {
        console.log(i);
    }
}

//Exercise 2: Capitalized Letters

//Create a function that takes a string as an argument.

function capitalize(string){
    let evenString = "";
    let oddString = "";
    for(let i = 0; i<string.length; i++){
        if(i%2 === 0){
            evenString += string[i].toUpperCase();
            oddString += string[i];
        }else {
            evenString += string[i];
            oddString += string[i].toUpperCase();
        }
    }
    let arrNewString = [evenString, oddString];
    return arrNewString;
}
console.log(capitalize("ariel"));

//Exercise 3 : Is Palindrome?

function isPalindrome(string){
    let isTrue = true;
    console.log(string.length);
    for(let i=0; i<string.length; i++){
        if(string[i] !== string[string.length-(i+1)]){
            isTrue = false;
        }
    }
    return isTrue;
}
console.log(isPalindrome("maram"));

//Exercise 4 : Biggest Number

function biggestNumberInArray(arrayNumber){
    let maxNum = 0;
    for(let i = 0; i<arrayNumber.length; i++){
        if(arrayNumber[i] > maxNum){
            maxNum = arrayNumber[i];
        }
    }
    return maxNum;
}
console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));

//Exercise 5: Unique Elements

function uniqueElements(list){
    let uniqueElementsList = [];
    for(let i = 0; i < list.length; i++){
        if(list[i] !== list[i+1]){
            uniqueElementsList += list[i];
        }
    }
    return uniqueElementsList;
}

console.log(uniqueElements([1,2,3,3,3,3,4,5]));

