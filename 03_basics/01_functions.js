function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(4,5);
console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("Enter a username ");
        return;
    }
    return `${username}, you are welcomed.`
}

console.log(loginUserMessage("Sidhant"));
console.log(loginUserMessage());

// 20 DONE

// ... is both REST/SPREAD OPERATOR .

function calculateCartPrice(val1,val2,...nums){
    return nums;
}

console.log(calculateCartPrice(100,200,300,400));

 const user ={
    username:  "vineet",
    designation: "manager",
 }

 function getEmployeeDetails(obj){
    console.log(`${obj.username} is the ${obj.designation} in the company.`);
 }

 getEmployeeDetails(user);

function getSecondVal(arr){
    return arr[1];
}

console.log(getSecondVal([100,2,300]));


