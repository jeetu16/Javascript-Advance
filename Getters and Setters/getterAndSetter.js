// we use getter and setter as a property but it is not a property it is a function

// also used for manipulating object properties.



let person = {
    firstName : "jeetu",
    age : 25,
    get getName () {
        return this.firstName.toUpperCase();
    },
    set setName(n) {
        this.age = n;
    }
}

person.setName = 20;


console.log(person)
// console.log(person.getName);

