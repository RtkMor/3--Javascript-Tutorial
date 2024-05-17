const myHeros = ['hulk', 'spiderman'];

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

// Note -> You can't define a prototype function using arrow function (it will not show error but it will also do nothing)

createUser.prototype.increment = function(){
    this.score += 10;
}

createUser.prototype.printMe = function(){
    console.log(`Price is -> ${this.score}`);
}

// You have to use 'new' keyword otherwise it will throw an error (or just define the protypical functions within the createUser function)
// const chai = createUser('Chai', 25);
// const tea = createUser('Tea', 250);

const chai = new createUser('Chai', 25);
const tea = new createUser('Tea', 250);

// chai.printMe();


// Part - 2 (Actual Prototyping)

const student = {
    name: 'Ritik',
    study: true
}

const teacher = {
    makeVideos: true
}

const TASupport = {
    isAvailable: false
}

// now suppose we want to inherit all the properites of the students into the teacher then how can we do that?

// 1st Method (Old method)
// teacher.__proto__ = student;

// 2nd method (Modern method)
Object.setPrototypeOf(teacher, student);

console.log(teacher.name);