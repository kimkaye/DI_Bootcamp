// Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
//
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
//
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// prediction: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercise 2: Display Student Info

// const student = {
//     first: 'Elie',
//     last: 'Schoppik'
// };

// function getDetails ({first : firstName, last: lastName}) {
//     console.log('your full name is ' + firstName, lastName)
// }
//
// getDetails({first : "Elie",last : "Schoppik"});


//Exercise 3: User & Id - לחזור לזה!

// const users = { user1: 18273, user2: 92833, user3: 90315 };
//
// let usersArr = Object.entries(users);
//
//
// usersArr.forEach(function(element, index, arr) {
//     element[1] = (element[1] * 2);
// });
//
// console.log(usersArr);


//
// Exercise 4 : Person Class
//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const member = new Person('John');
// console.log(typeof member);

// prediction: object (the type of member is person that its an object)
//
// Exercise 5 : Dog Class
//
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// // 2 this one
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// }

//Exercise 6 : Challenges - לחזור לזה
//
// console.log([2] === [2])
// //false
// console.log({} === {})
// //false

//
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};
// object1.number = 4;
//
// console.log(object1, object2, object3, object4 )

// prediction: object1 - 4, object2 - 4, object3 - 4, object 4 - 5


// Create a class Animal with the attributes name, type and color

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Animal.prototype.sound = function () {
//     console.log(`${this.name} makes a noise.`);
// }


class Mamal extends Animal {
    constructor(name,type, color) {
        super(name, type, color);
    }

    sound(soundItMakes) {
        return `${this.name} ${this.type} ${this.color} ${soundItMakes}.`
    }
}


let cow = new Mamal("shula", "cow", "white and black");
console.log(cow.sound('moo'));







