/* We have primitive and non-primitive category which 
is based on storing and accessing process i.e call by value 
and call by reference.
*/

// Primitive types(7 types): 
/*
String,
number,
boolean,
null(it means empty and not 0),
undefined, symbol(represent uniqueness),
BigInt.
*/

let str="sidhant";
let val=21;
let isActive=true;
let Temp=null;
let someVal;
let num=491242414141n;

// Reference (Non primitive):
// Array, Objects, Functions.

let arr=['temp1','temp2','temp3'];

let obj={
    id:3,
    name:"Myname",
    address:"New State",
}

let currFun= function (){
    console.log("I am a function");
}
//example of types

console.log(typeof str); // string
console.log(typeof val); // number
console.log(typeof isActive); //boolean
console.log(typeof Temp); //Object
console.log(typeof someVal); //undefined
console.log(typeof num); //BigInt
console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof currFun); // Function



//stack and heap memory
/*
1. We get a copy in case to stack and reference in case of heap.
2. In primitive datatypes the Call by value / copy is send .
3. In non primitive datatypes the Call by reference / actual value is shared.
*/


let myyoutubename="hiteshchoudharydotcom"
let anothername=myyoutubename

anothername="sidhantyoutube"

console.log(myyoutubename);
console.log(anothername);

let firstobj={
    email: "example.com",
    val: 20,
}

let secobj=firstobj;

secobj.val=121;

console.log(firstobj);
console.log(secobj);
