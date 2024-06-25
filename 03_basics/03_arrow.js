const user = {
    username:"sidhant",
    price: 999,
    welcome:function () {
        console.log(`${this.username} welcome to the website.`);
        console.log(this)
    }
}

user.welcome();
user.username="vineet";
user.welcome();

// Current context in node js environment is an empty object.
// Current context in a browser is a window object.
// So browser has a global object known as window object.

console.log(this);



function tea(){
    // Here we get a global object with a lot of extra information.
    console.log(this);
}

tea()



const arrowfun = ()=>{
    let username="user";
    // This keyword in an arrow function doesn't give the same information as it gives in a normal function.
    console.log(this);
    console.log(`${this.username} is the user.` );
}

arrowfun();

// Arrow Functions 


//Explicit return 
// When we write curly braces we need to write return keyword.

const addTwo=(num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(1,2));

// Implicit return 
// When we use parantheses we do not have to use return keyword.

const addThree=(num1,num2,num3)=>(num1+num2+num3);
console.log(addThree(1,2,3));

//DONE


