let form = document.getElementById("form")

form.addEventListener("submit", submitFunction)
function submitFunction(event){
    event.preventDefault();
    let firstNameValue = document.getElementById("fname").value;
    let lastNameValue = document.getElementById("lname").value;
    let userData = {
        name: firstNameValue,
        lastname: lastNameValue
    };
    let tojson = JSON.stringify(userData);
    console.log(tojson);

}








