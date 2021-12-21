// Daily Challenge: Letters
// Daily Challenge : accept only Letters//

let input = document.querySelector('input');

input.addEventListener('keypress', function(e) {
    let charCode = e.charCode;
    if(charCode < 65 || charCode < 90){
        alert("not a letter! try again")
    }
});
