 
// Declaring an actual object is the object literal .

 const obj ={
    username:"Sidhant Kaushal",
    gender:"M",
    mobileNumber:9810093021,
    region:"New Delhi",
    signedIn:true,
    getUserName: function (){
      console.log(`My username is ${this.username}`);
    },
    getContext: function(){
      console.log(this);
      
    }
 }

obj.getUserName();
obj.getContext();
// Global instance in nodejs is empty while in browser we get a window object .
console.log(this);


// This is a function which is further used as a constructor function with the use of new keyword .

function User(username,gender,region){
   this.username=username;
   this.gender=gender;
   this.region=region;

}

const firstUser = new User("Vaishnav","M","Dilshad Garden");
const secondUser = new User("Ayush","M","SuperTech");

console.log(firstUser);
console.log(secondUser);


mmmmmmmmmmmmmmmmm