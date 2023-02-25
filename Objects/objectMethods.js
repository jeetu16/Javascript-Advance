
// Object Methods

// Way 1
// let person = {
//     firstName : 'Jeetu',
//     lastName : 'Dewangan',
//     age : 27,
//     sayBye : function () {
//         console.log("Bye everyone !");
//     }
// };
// person.sayBye()

// Way 2
// person.sayHello = function () {
//     console.log("Hello !")
// }
// person.sayHello()

// Way 3
// function greet() {
//     console.log("Hey everyone!");
// }
// person.sayHello = greet;
// person.sayHello();

// Way 4 (ES6 version)

let car = {
    carName : 'Audi',
    released : 2015,

    carDrive() {
        console.log("This car is driving");
    }
};

car.carDrive();