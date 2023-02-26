// Constructor
// When you create a object constructor always naming in CapitalCase

function Student(first,last,age,cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    this.nationality = "Indian";
}


let student1 = new Student('jeetu','dewangan',27,'12th');
// adding property in object instance
student1.nationaility = "Indian";

let student2 = new Student('ajay','singh',32,'1st Year');

console.log(student1);
console.log(student2);

