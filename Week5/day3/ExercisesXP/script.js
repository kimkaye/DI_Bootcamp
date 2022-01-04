// // Exercise 1 : Comparison
//
function compareToTen(num){
    return new Promise((resolve, reject) => {
        if(num >= 10){
            let result = num + " is greater then 10 - success!"
            resolve(result)
        }else{
            let error = num + " is less then 10 - error!"
            reject(error)
        }
    })
}
//
//
// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//
// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//
// //Exercise 2 : Promises - לחזור
//
// let success = true;
//
// let end = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (success) {
//             resolve("success");
//         } else {
//             reject("error");
//         }
//     }, 4000);
// });
//
// console.log(end);
//
//
// //shorter way:How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//
// Promise.resolve('Success').then(function(value) {
//     setTimeout(() => {
//         console.log(value); // "Success"
//     }, 4000);
// });
//
// // function resolved(result) {
// //     console.log('Success');
// // }
//
// function rejected(result) {
//     console.error(result);
// }
//
// Promise.reject(new Error('fail')).then(resolved, rejected);
// // expected output: Error: fail
//


//Exercise 3 : Resolve & Reject





