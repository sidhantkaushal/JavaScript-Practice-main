class User{
    constructor(username){
        this.username=username;
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
    }

}

class Teacher extends User {
    constructor(username,email,password) {
        // This super keyword is used to call constructor and methods of super class.
        // super(): Calls the parent class constructor.
        //super.methodName(): Calls a method from the parent class.
        super(username);
        this.email=email;
        this.password=password;
        
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com", "123")

console.log(chai.addCourses());

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);
