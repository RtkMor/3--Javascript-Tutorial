// singleton
// object.create

// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Ritik",
    "full name": "Ritik Mor",
    [mySymbol]: "myKey1",
    age: 22,
    location: "Hisar",
    email: "alconime@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySymbol]);
// console.log(mySymbol);


JsUser.email = "rtkmor@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "alconime@gmail.com";
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// JsUser.greeting();


// Objects Part-2

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 5 };
const obj3 = { d: 6, e: 7};

// const obj4 = Object.assign({}, obj1, obj2, obj3);        // old way to do
const obj4 = {...obj1, ...obj2, ...obj3};                   // common way to do is by spread operator

console.log(obj4);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(obj4 === obj1);
// Expected output: true


const course = {
    courseName: "Javascript Tutorials",
    price: "999",
    courseInstructor: "Ritik"
}

const {courseInstructor: instructor} = course;
console.log(instructor);
