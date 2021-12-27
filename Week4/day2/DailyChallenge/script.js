// Daily Challenge: Groceries
let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let groceriesCopy = groceries;

// console.log(groceriesCopy);

groceries.totalPrice = "35$";

//yes, it will change in both of the arrays

groceries.other.payed = false;

//yes, it will change in both of the arrays



