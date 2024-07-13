// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     },
//   ]


// Foreach function never returns a value.


//   cars.forEach((item)=>{
//     console.log(item)
//     return item
//   })


const myNums = [1,2,3,4,5,6,7,8,9,10]

// Here we Implicitly returns a value .
const newNums= myNums.filter((num)=>num >5)


// Here we Explicitly returns a value .
const newNums2= myNums.filter((num)=>{
    return num >5
})
console.log(newNums)


// Doing same with a foreach loop

const finalarr= []

myNums.forEach(element => {
    if(element>5)finalarr.push(element)
});

console.log(finalarr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// get userBooks with genere as HISTORY

let userbook= books.filter((item)=>(item.genre=='History'));
console.log(userbook);

// get userBooks with publish after 2000
userbook= books.filter((item)=>(item.publish>2000));
console.log(userbook);

//get userBooks wwhere year >=1995 and genre is HISTORY.
userbook= books.filter((item)=>(item.genre=='History' && item.publish>=1995));
console.log(userbook);
