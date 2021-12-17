let number = prompt("Please input number", "");
number = parseInt(number);
let counter = 1;

let text = number +  " bottles of beer on the wall" + '\n' + number + " bottles of beer " + "Take 1 " + " down, pass it around " + (number = number-counter) + " bottles of beer on the wall" + "\n";
counter++;
while (number > 0){
    text += number + " bottles of beer on the wall" + '\n' + number + " bottles of beer " + "Take " + counter +  " down, pass them around " + (number = number-counter) + " bottles of beer on the wall" + "\n";
    counter++;
}

console.log(text);