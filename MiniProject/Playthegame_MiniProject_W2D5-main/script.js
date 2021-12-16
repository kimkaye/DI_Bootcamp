//First Part

function playTheGame(){
    let userAnswer = confirm("would like to play the game?");
    if(userAnswer == false){
        alert("No problem, Goodbye");
    }else {
        let userNumber = prompt("Please enter a number between 0 and 10");
        userNumber = parseInt(userNumber);
        if(isNaN(userNumber)){
            alert("Sorry Not a number, Goodbye");
        }else if(userNumber < 1 || userAnswer > 10){
            alert("Sorry it’s not a good number, Goodbye.");
        }else {
            let computerNumber = Math.floor(Math.random() * 10) + 1;
            console.log(computerNumber);
            test(userNumber, computerNumber);
        }
    }
}
// function test(userNumber,computerNumber){
//     for(let i = 0; i< 2; i++) {
//         if (userNumber == computerNumber) {
//             alert("WINNER");
//             break;
//         } else if (userNumber > computerNumber) {
//             userNumber = prompt("Your number is bigger then the computer’s, guess again");
//         } else if (userNumber < computerNumber) {
//             userNumber = prompt("Your number is smaller then the computer’s, guess again");
//         }
//
//     }
//
// }

function test(userNumber,computerNumber){
    let numbersOfGuessing = 1;
    while(numbersOfGuessing != 3){
        if (userNumber == computerNumber) {
            alert("WINNER");
            numbersOfGuessing = 0;
            break;
        } else if (userNumber > computerNumber) {
            userNumber = prompt("Your number is bigger then the computer’s, guess again");
            numbersOfGuessing++;
        } else if (userNumber < computerNumber) {
            userNumber = prompt("Your number is smaller then the computer’s, guess again");
            numbersOfGuessing++
        }
    }
    if(numbersOfGuessing == 3){
        alert("out of chances");
    }

}

