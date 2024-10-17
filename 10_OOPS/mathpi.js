const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);


console.log(Math.PI);


const Game = {
    title :"FIFA",
    price : 4000,
    isAvailable:true
}

const prop = Object.getOwnPropertyDescriptor(Game,"title");
console.log(prop);

// Object.defineProperty(Game,"title",{ value: 'FIFA', writable: false, enumerable: true, configurable: true })
// const prop2 = Object.getOwnPropertyDescriptor(Game,"title");
// console.log(prop2);


