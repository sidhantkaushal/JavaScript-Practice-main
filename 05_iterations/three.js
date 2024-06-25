// for of 

["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]

for (const iterator of arr) {
    console.log(iterator)
    
}

const greetings="HEYYYOOO";

for (const iterator of greetings) {
    console.log(`Each char is ${iterator}`);
}


// MAPS : store information as key value pair.

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FN', "France")


const myObj={
    one:"one",
    two:"two",
    three:"three",
}

// Objects are not iterable like this 
// for (const [key,val] of myObj){
    // console.log(`${key}`);
// }
// 
for (const [key,value] of map) {
    console.log(`${key} and ${value}`)
    
}
