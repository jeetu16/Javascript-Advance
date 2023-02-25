// Object 

let person = {
    firstName : 'Jeetu',
    lastName : 'Dewangan',
    age : 25
};

// access object elements
// console.log(person.age);
// console.log(person['firstName']);
// console.log(person.mobile) // undefined

// modify object elments
//person.age = 27;

// adding new property into obeject
//person.address = 'bhilai';


// deleting object property
//delete person.lastName

// checking object has that property or not
// Method 1
//console.log(person.height) // if this give 'undefined' then object person don't have height property

// Method 2
// console.log('age' in person)

// accessing all elements of object

for (let ele in person) {
    console.log(`${ele} : ${person[ele]}`)
}


console.log(person)
