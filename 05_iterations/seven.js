const newNums=[1,2,3,4,5,6,7,8,9,10]

// Add ten to every number of the array:

const newArr = newNums.map((item)=>item+10)
console.log(newArr)

// DO same with foreach 

const newArrFor=[]

newNums.forEach((item)=>{
    newArrFor.push(item+10)
})
console.log(newArrFor);

// Chaining method : Using more than one method (map,reduce etc) together .
// Result of first chain is passed to next until chain ends.

// Multipy by 10 , add 1 , filter value >=40 .

const chainArr = newNums.map((item)=>item*10).map((item)=>item+1).filter((item)=>item >= 40)

console.log(chainArr)


