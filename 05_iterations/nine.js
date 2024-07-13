// get initial values 

 const myNums=[1,2,3];

// Apply reduce function 
// Get sum of all elements with accumulator and currentvalue.
const redVal=myNums.reduce((accumulator,currentvalue)=>(accumulator+currentvalue),0)
console.log(redVal)

// Do it with reduce and foreach.
let forEachsum=0;

myNums.forEach((item)=>(forEachsum+=item))
console.log(forEachsum);


// Add all the prices of the shoping cart array.
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


//  const myTotal=shoppingCart.reduce((accumulator,currentvalue)=>{
//     console.log(currentvalue)
//     return accumulator+currentvalue.price},0)

const myTotal=shoppingCart.reduce((accumulator,currentvalue)=> accumulator+currentvalue.price,0)
 console.log(myTotal)


