class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username - ${this.username}`);
    }

    // Static method are not able to accessed outside this class
    static createId(){
        console.log("Id - 123");
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // this.username = username;
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(courseName){
        console.log(`${courseName} course is added by ${this.username} teacher!`);
    }
}

const chai = new User('chai');
const tea = new Teacher('tea', 'tea@gmail.com', '123');

console.log(chai);
console.log(tea);

chai.logMe();
tea.logMe();
tea.addCourse('Javascript');

// chai.createId(); --> Will throw an error

