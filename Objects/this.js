// Object 'this' keyword
// this point always object

// Way 1
let person = {
    firstName : 'Jeetu',
    lastName : 'Dewangan',
    age : 37,
    getInformation() {
        console.log(`My name is ${this.firstName} ${this.lastName} and My age is ${this.age}`)
    }
}
person.getInformation();


// Way 2
function getAge() {
    console.log(`Age is ${this.age}`);
}

person.myAge = getAge;
person.myAge()

// console.log(person);