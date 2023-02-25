// nested oject

let user = {
    id : 101,
    email : "abc@gmail.com",
    personalInfo : {
        firstName : 'jeetu',
        lastName : 'dewangan',
        address : {
            street : 12,
            city : 'Bhilai',
            country : 'India'
        }
    }
}

// console.log(user)
// accessing nested object
console.log(user.personalInfo.address['street'])