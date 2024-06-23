// Singleton : When we make object using a constructor its a singleton .
// Singleton means its one of its own kind.

// Two way to declare objects : Literals and Constructor

// Object literals

// 1. By default a key is of string type for system.

const JsUser = {
  name: "Sid",
  fullName: "Sidhant Kaushal",
  age: 18,
  location: "sid@gmail.com",
  lastLoginDays: ["Monday", "Saturday"],
};

// Two ways to represent keys and values of an object.
// If we declare a key as a string then we cannot access it using dot notation.
console.log(JsUser.stringKey);
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["fullName"]);

// ***********SYMBOL DATATYPE

const mySym = Symbol("key1");
const uniqSym = Symbol("key2");

//*********Using key in symbol */

const newObj = {
  name: "MRKING",
  radioSound: true,
  [mySym]: "newkey",
  [uniqSym]: "uniqkey",
};

console.log(newObj);

//Access a symbol
console.log(newObj[mySym]);

//Locking a Value/Object

// Object.freeze(newObj);

//Below code won't work as the object is freezed and it cannot be changed .
newObj["radioSound"] = "newnew";
console.log(newObj);
console.log(newObj[mySym]);

// Adding a function to the object

newObj.greetings = function () {
  console.log(`This is for you ${this.name}`);
};

console.log(newObj);

newObj.greetings();

//DONE
