class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return '123';
    }
}


const sid= new User("Sid");

// console.log(sid.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone", "iphone@zig.com");
iphone.logMe()