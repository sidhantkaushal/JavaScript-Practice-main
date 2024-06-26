const coding =['js','rubby','python']

// Three ways to use forEach function.

// coding.forEach(function(val){
//     console.log(val)
// });


// coding.forEach((ele)=>{
//     console.log(ele)
// })

// coding.forEach(printMe);


// function printMe(val){
//     console.log(val)
// }

// The callback function has item , indexes and the array itself.
coding.forEach((item ,index, arr)=>{
    console.log(item,index,arr);

})

// Iterating an array of objects

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
  ]


  cars.forEach((item)=>{
    console.log(item.color,item.registration);
  })
