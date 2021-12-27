// Exercises XP Gold

// Exercise 1 : Landscape


let landscape = function() {

    let result = "";

    let flat = function(x) {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }

    let mountain = function(x) {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

console.log(landscape());

// prediction: ____/''''\____ - it will go to the first function flat and will add to the result 4 (like the x) "_" tns then to mountain and then flat again