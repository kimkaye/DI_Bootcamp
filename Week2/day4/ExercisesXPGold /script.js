// Exercise 1 : Is_Blank

function isBlank(string){
    if(string == ""){
        return true;
    }
    else {
        return false
    }
}
console.log(isBlank("kim"));

//Exercise 2 : Abbrev_name

function abbrevName(name){
    const arr = name.split(" ");
    console.log(arr);
    console.log(arr[0] + " " +  arr[0][0] +".");

}
abbrevName("Kim Kaye");

//Exercise 3 : SwapCase

function SwapCase(string){
    let newWord = "";
    for(let i = 0; i<string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            newWord = newWord + string[i].toUpperCase();
        }else {
            newWord = newWord + string[i].toLowerCase();
        }
    }
    console.log(newWord);
}
SwapCase("KiM kAyE");

//Exercise 4 : Omnipresent Value

function isOmnipresent(arr, num){
    let isNumOmni = true;
    for(let i= 0; i< arr.length; i++){
        if(num != arr[i][0] && num != arr[i][1]){
            return false;
        }
    }
    return true;
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));