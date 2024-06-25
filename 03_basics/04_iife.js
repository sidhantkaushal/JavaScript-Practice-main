// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// Named IIFE
(function coffee(){
    console.log(`We are inside an iife`);
})();

// Unamed parameterized iife

((name)=>{
    console.log(`${name} is a king.`)
})('sid');


// NOTE : It is important to terminate an iife in case 
// if we write two iife on after the other because once invoked 
// it doesn't know where to stop the context hence we need to terminate it.