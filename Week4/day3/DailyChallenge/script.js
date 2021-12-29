// Daily Challenge: Car Inventory


//Part I

// let inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];
//
// function getCarHonda(inventory){
//     const found = inventory.find(element => element.car_make === "Honda" );
//     return `This is a ${found.car_make} ${found.car_model} from ${found.car_year}`;
// }
//
// console.log(getCarHonda(inventory));

//Part II

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// function sortCarInventoryByYear(carInventory){
//     carInventory.sort();
//     console.log(carInventory);
// }
// sortCarInventoryByYear(inventory);![](../../../../../../../var/folders/mx/m5x6zf651z9816y_lxnkpsh40000gn/T/TemporaryItems/NSIRD_screencaptureui_zf1b4w/Screen Shot 2021-12-28 at 10.41.17.png)


// sort by salary
inventory.sort(function (x, y) {
    return x.car_year - y.car_year;
});

console.log(inventory);