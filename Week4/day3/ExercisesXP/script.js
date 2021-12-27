//
// Exercise 1 : Analyzing
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
//
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
//
// // prediction: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]
//
// // ------2------
// const country = "USA";
// console.log([...country]);
//
// // prediction: [U, S, A]
//
//
// // ------Bonus------
//     let newArray = [...[,,]];
// console.log(newArray);
// // prediction: ?
//Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let helloUsers = users.map(function(element){
    return `Hello ${element.firstName} `;
})

console.log(helloUsers);


let fullStackArr = users.filter(function (e) {
    return e.role === 'Full Stack Resident';
});

console.log(fullStackArr);


let helloFullStack = fullStackArr.map(function(element){
    return `Hello ${element.firstName} `;
})

console.log(helloFullStack);


//Exercise 3 : Star Wars

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(epic.reduce(reducer));


//Exercise 4 : Employees #2

let student = [{name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}];



let passTheCourse = student.filter(function (e) {
    return e.isPassed === true;
});

console.log(passTheCourse);








