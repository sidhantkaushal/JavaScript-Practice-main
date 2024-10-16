
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// Array 

let myHeros = ["thor", "spiderman"]

//Object Literal

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Creation of a method for Object .

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Creation of a method for Array .

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

console.log(Object);


// inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()