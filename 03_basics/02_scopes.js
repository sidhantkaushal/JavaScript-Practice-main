

if(true){
    // This is block scope
    let a=10;
    const b=20;
    var c=30;
}


// console.log(a);
// console.log(b);
console.log(c);

// Var has a global scope while let and const have block scope.

// The global scope in browser's console and code environment of nodejs are different.


// 21 Done


// The smaller can ask for things but the older cannot.
// This is somewhat closure where the inner function can access information from its outer function.

function one(){
    const username="sid";
    function two(){
        const website="youtube";
        console.log(username);
    }
    //This line gives error as its out of scope.
    // console.log(website);
    two();
}

one();

 
//+++++++++++++ Interesting +++++++++++++

