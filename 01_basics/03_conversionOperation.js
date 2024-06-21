let score=undefined;
let valueScore=Number(score);
console.log(valueScore);
console.log(typeof valueScore);


//Number conversion 
// "12"=>Number(12) 
// "11se"=>Number(NaN)
// ""=>Number(0)
//null=>Number(0)
//true/false=>Number(1/0)
//undefined =>Number(NaN)

let isLogged=1;
let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);


//Boolean conversion
// ""=>false
// "str"=>true
// 1/0=>True/false


let someNumber=NaN; 
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


 
//************OPERATIONS****************** */

let val=12;
let negativeval=-val;
console.log(negativeval);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


let str1="sidhant";
let str2="kaushal";
let str3=str1+" "+str2;
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(typeof(+true));
//convert to number