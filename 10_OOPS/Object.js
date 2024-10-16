function multipyByFive(num){
    return num*5;
}

multipyByFive.power=10;
console.log(multipyByFive(10));
console.log(multipyByFive.power);
console.log(multipyByFive.prototype);



function CreateUser(username,score){
    this.username=username;
    this.score=score;
}

