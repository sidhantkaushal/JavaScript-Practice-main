// Falsy values  

// false , 0, -0, BigInt 0n , "" , null , undefined , NaN .

// Truthy values

// "0" , 'false' , " " , [] , {} , function(){}


// To check array check its length .
// To check empty object check its keys length .

const arr = []
const obj={}

if(arr.length==0) console.log("Array is empty");
if(Object.keys(obj).length==0) console.log("Object is empty");


// Some cases of true 

console.log(false==0);
console.log(false=='');
console.log(''==0);


// Nullish Coalescing Operator (??): Based on null undefined

// Its a fallback to handle values from databases.
let val1;
val1= 5 ?? 10;

val1= null ?? 10;

console.log(val1);

// In case of values from Api it helps in handling some cases.

// Terniary Operator 

// condition ? true : false

const price =400;

price <200 ? console.log(`Buy it`): console.log('Costly');