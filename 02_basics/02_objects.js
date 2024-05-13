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

console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySymbol]);
console.log(mySymbol);


JsUser.email = "rtkmor@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "alconime@gmail.com";
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();