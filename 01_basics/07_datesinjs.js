let mydate= new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());

//Date is also an object in javascript.

//Ways to declare date
let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 1, 23,1,20,40)
let myCreatedDate2 = new Date("2001-12-04")
let myCreatedDate3 = new Date("12-04-2001")

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());



// TIMESTAMPS

//Gives millisecond
let myTimeStamp =Date.now()
console.log(myTimeStamp);

let myTimeinSec = Math.floor(Date.now()/1000)

console.log(myTimeinSec);


let newDate =new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());



// Adjust the date and time in depth

newDate.toLocaleString('default',{
    dayPeriod:"short"
})

console.log(newDate);



//DONE