
// // Promise 1


// const promiseOne= new Promise((resolve,reject)=>{
//     //Here we do the async tasks.
//     // DB Calls, cryptography, network.

//     setTimeout(()=>{ 
//         console.log("Async task is complete");
//         const data="variable"
//         resolve(data);
        
//         // ************ When resolve executes it is connected to .then().
//     },1000)


// });

// // Promise Consumption 

// promiseOne.then((str)=>
//     {
//     console.log(str);
//     console.log("promise is consumed");
// });









// // Promise 2


// // Not important to store promise in a variable ;


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },1000);
// }).then(()=>{
//     console.log("Async 2 promise is resolved.");
// })





// Promise 3


// // Data from network or else is passed through the resolve which is consumed in then .

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 3 task is done");
//         resolve({username:"Sid",email:"sid@gmail.com"});
//     },1000);
// });

// promiseThree.then((data)=>{
//     console.log(data);
//     console.log(`Async Promise 3 is resolved`);
// });

     

// Promise 4


// Writing both Resolve and Reject and then consuming them in then and catch .

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         let error=true;
//         if(!error){
//             resolve({username:"Sidhant",password:"123"});
//         }
//         else{
//             reject(`ERROR: Something went wrong`);
//         }
        
//     },1000);
// })



// // Chaining 
// // Whatever we return goes to next then().
// // Best way to write promise chaning 


// promiseFour
// .then((data)=>{
//     console.log(data);
//     return data.username;
//     // This returned data goes as input parameter for the next callback function of next then .
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     // This works for all the cases .
//     console.log("The promise is either resolved or rejected");
// })



// // Promise 5


// Handling promise with async and await .
// Downside is that async await cannot handle error directly like .then has a catch block.
// To resolve we use TRY & CATCH blocks .

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"Rega",password:"123"});
//         }
//         else{
//             reject(`ERROR: Rega went wrong`);
//         }
        
//     },1000);
// })


// async function consumePromiseFive(){
//     try {
//         let data = await promiseFive;
//         console.log(data);
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();

 



// Fetch library
// since response.json() also takes some time so we use await with it .
   

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers();





// // Doing same with promise chaining/ thening
// *********** The data from this api comes first when we run this file and then other promises are consumed . (Explaination in n)

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    let arr=[];
    data.map((ele)=>{
        let username=ele.name;
        let id=ele.id;
        let newUser={
            "rank":id,
            "name": username
        }
        arr.push(newUser);
    })
    return arr;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})