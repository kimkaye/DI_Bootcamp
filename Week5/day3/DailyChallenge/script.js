function makeAllCaps(arrayOfWords){
    return new Promise(function (resolve, reject) {
        if(arrayOfWords.every(i => (typeof i === "string"))){
            let capitalaizedArr = arrayOfWords.map(function(x){ return x.toUpperCase();});
            resolve(capitalaizedArr)
        } else {
            reject("the array contains things that are not strings")
            // throw new Error("the array contains things that are not strings")
        }
    });
}

function sortWords(wordArr){
    return new Promise(function (resolve, reject){
        wordArr.sort();
        resolve(wordArr)
    })
}

let namesArr = ["kim", "ariel"];

makeAllCaps(namesArr)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))



//2

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(morse){
    return new Promise(function (resolve, reject) {
        let jsObject = JSON.parse(morse);
        if(Object.keys(jsObject).length !== 0){
            resolve(jsObject);
        }else {
            reject("the object is empty!")
        }
    });
}
function toMorse(morseJS){
    return new Promise(function (resolve, reject) {

        let word = prompt("Please enter word or a sentence");
        let morseArr = [];
        for(let i=0; i < word.length; i++){
            let currentLetter = word[i];
            let morseValue = morseJS[currentLetter];
            if(morseValue === undefined){
                reject("the character doesn't exist")
            }else {
                morseArr.push(morseValue);
            }
        }
        resolve(morseArr);

    })
}

function joinWords(arrMorse){
    return new Promise(function (resolve, reject) {
        let joinWord = arrMorse.join('\n');
        resolve(joinWord);
    })
}

toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
