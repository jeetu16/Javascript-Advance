// prototype is a highest level of object from which every object inherits the properties

function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}


let student1 = new Student('jeetu', 'dewangan', 27, '12th');


let student2 = new Student('ajay', 'singh', 32, '1st Year');

// adding property through prototype 
Student.prototype.nationality = "Indian";

for(const key in student1) {
    console.log(`${key} : ${student1[key]}`)
}


// adding method through prototype
Student.prototype.showDetails = function () {
    console.log(`My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am ${this.nationality}`)
}

student1.showDetails();
console.log(student1);
console.log(student2);
