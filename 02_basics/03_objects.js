// Singleton : When we make object using a constructor its a singleton
// Singleton means its one of its own kind.

// Two way to declare objects : Literals and Constructor


// Object literals 

// 1. By default a key is of string type for system.

const JsUser={
    name:"Sid",
    "fullName":"Sidhant Kaushal",

    age: 18,
    location: "sid@gmail.com",
    lastLoginDays:["Monday","Saturday"]
}

// Two ways to represent keys and values of an object.
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["fullName"]);


// ***********SYMBOL DATATYPE

const mySym = Symbol("key1");

//*********Using key in symbol */

const newObj={
    radioSound:true,
    [mySym]: "newkey"
}
//Access a symbol
console.log(newObj[mySym])

//Locking a Value/Object

JsUser.emai



