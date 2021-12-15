// Daily Challenge: Words In The Stars

// var arr = prompt("Enter your words").split(", ");
// console.log(arr);
//
// function longestStringForLoop(arr) {
//     let word = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (word.length < arr[i].length) {
//             word = arr[i];
//         }
//     }
//     return word;
// }
// let maxWord = longestStringForLoop(arr).length;
//
// function frame(){
//     let border="";
//     let word = "";
//     // for(let j = 0; j< arr.length; j++) {
//         for (let i = 0; i < maxWord + 4; i++) {
//             border += "*"
//         }
//     console.log(border + "\n* " + word + " *\n" + border);
//
//     // }
// }
// frame();
//


// let stars = "";
// for(let i = 0; i < maxWord; i++){
//     stars += "*";
// }
// console.log(stars);




let arr = prompt("Enter your words").split(", ");
console.log(arr);

function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
let maxWordLength = longestStringForLoop(arr).length;

let answer = "";
let firstLine = "";
for(let i = 0; i<maxWordLength+4; i++){
    firstLine += "*";
}


for(let i = 0; i<arr.length; i++){
    let currntWord = arr[i];
    let rowToPrint = "* " + currntWord;
    let space = maxWordLength - currntWord.length;
    for(let j = 0; j < space; j++){
        rowToPrint += " ";
    }
    answer += rowToPrint + " *"+"\n";
}
console.log(firstLine + "\n" + answer + firstLine);


