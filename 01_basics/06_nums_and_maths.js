const score =1000000;
//Explicit declaration as a number
const bal= new Number(300.15);

// Fix the decimal points notation.
console.log(bal.toFixed(1));

//Give a precison value and 0 isn't valued if it is in front.
console.log(bal.toPrecision(4))


//Convert the number system accordingly.
console.log(score.toLocaleString('en-IN'))
 


/****************************MATHS*********** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(12.121));
console.log(Math.ceil(1212.1212));
console.log(Math.min(2,25,56,7,3,121));
console.log(Math.max(1,2,3,45,3,64,31));
//Gives a value between 0 and 1.

console.log(Math.random()+1);
console.log(Math.random()*10 +1) ;
console.log(Math.floor(Math.random()*10));

let minrange=10;
let maxrange=20;
console.log(Math.floor(Math.random()*10) + minrange);