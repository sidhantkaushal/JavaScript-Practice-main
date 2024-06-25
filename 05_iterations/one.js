//for 

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}


for (let i = 1; i < 10; i++) {
    console.log(`Outerloop value : ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop val ${j} and outer loop val ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}


// Keywords : break and continue .

// for (let index = 0; index < array.length; index++) {
    // if(index==5){
        // console.log(`Detected 5`);
        // break;
    // }
    // console.log(`Value of i is ${index}`);    
// }


for (let index = 0; index <=5; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);    
}