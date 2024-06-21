//Arrays
const myArr=[0,1,2,3,4]
/* 1. JavaScript arrays are resizeable,
    can contain mix of datatype,
    not associative arrays (index must be nonnegative integers),
    Arrays copy operation make shallow copy.
*/

// Shallow copies share the same reference point 
// while deep copy have completely different reference point.

const myHeros=[]

const myArr2 = new Array(1,2,3,4);

console.log(myArr2[0]);

// Array Methods

myArr.push(5);
console.log(myArr);

myArr.pop();
console.log(myArr);

// Insert from front
myArr.unshift(12);
console.log(myArr); 
//Remove from front
myArr.shift();
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.indexOf(1));

// The join function binds the array 
// and converts it into String.

const newArr = myArr.join();
console.log(newArr)

const Arrtest=[0,1,2,3,4,5,6]
// Slice and Splice
// The splice function manipulates the original Array
// too and makes it trim the specified length.
console.log(Arrtest.slice(1,2));
console.log(`Original Array after slice is : ${Arrtest}`);

console.log(Arrtest.splice(1,2));
console.log(`Original Array after splice is : ${Arrtest}`);


//





