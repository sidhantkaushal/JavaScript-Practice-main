function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    SetUsername(username); // From this method call its reference is cleaned up once it is called .
    SetUsername.call(this, username); // Here we hold the reference of the function to createUser function's this .
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);