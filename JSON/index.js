/*
 JSON is used to send and receive data.
 JSON is a text format that is completely langauage independent.
 Meaning JSON is used to send & receive data in many Languages not just in JavaScript
*/

const car = {
    brandName : 'BMW',
    wheels : 4,
    moveCar : function () {
        console.log(`${this.brandName} car is moving`)
    }
}

// changing object into JSON
// JSON stores data as a string form
// JSON doesn't store function
const sendJSON = JSON.stringify(car);

console.log(sendJSON);

// coverting JSON data into original form 
const receiveJSON = JSON.parse(sendJSON);

console.log(receiveJSON);