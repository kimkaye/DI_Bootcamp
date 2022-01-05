// Daily Challenge : Promises

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});


// const fetchSwapi = async function(){
//     try {
//         let values = await Promise.all([promise1, promise2, promise3]);
//         console.log(values);
//     }catch{
//         console.log("oops!");
//     }
// }
//
// fetchSwapi();

function promiseAll(arrayOfPromise){
    let newArr = [];
    return new Promise(async (resolve, reject) => {
        for(let i = 0; i<arrayOfPromise.length; i++){
            let promise = arrayOfPromise[i];
            try{
                let result = await promise;
                newArr.push(result);
            }catch(err){
                console.error("an error was found "+ err)
            }
        }
        resolve(newArr);
    })
}
let arrOfPromise = [promise1, promise2, promise3];
promiseAll(arrOfPromise)
    .then((result) => console.log(result))


