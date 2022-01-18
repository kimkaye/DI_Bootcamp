let fs = require('fs');
// fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     let stringData = data.toString();
//     let sumRight = 0;
//     let sumLeft = 0;
//     for(let i = 0; i < stringData.length; i++){
//         if(stringData.charAt(i) === '>'){
//             sumRight++;
//         }else if (stringData.charAt(i) === '<'){
//             sumLeft++;
//         }
//     }
//     let totalSteps = sumRight - sumLeft;
//     if(totalSteps > 0){
//         console.log(totalSteps + " To the right");
//     }else if(totalSteps < 0){
//         console.log(totalSteps + " To the left");
//     }else{
//         console.log(totalSteps);
//     }
//     console.log(totalSteps);
// });

console.log("-----Right Left---------", '\n',);


fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    let stringData = data.toString();
    let sumOfSteps = 0;
    let sumRight = 0;
    let sumLeft = 0;
    let currentSteps = 0;
    for(let i = 0; i < stringData.length; i++){
        let currentChar = stringData.charAt(i);
        if(currentChar === '>'){
            sumRight++;
            sumOfSteps++;
            currentSteps = sumRight - sumLeft;
            if(currentSteps === -1){
                console.log("we got " + (sumOfSteps));
                break;
            }
        }else if (currentChar === '<'){
            sumLeft++;
            sumOfSteps++;
            currentSteps = sumRight - sumLeft;
            if(currentSteps === -1){
                console.log("we got " + (sumOfSteps));
                break;
            }
        }
    }

});