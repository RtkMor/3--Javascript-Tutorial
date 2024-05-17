// NOTE - 1
// const user = {
//     username: 'Ritik',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database!");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());




// Note - 2
function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

// If we don't use 'new' keyword then our values will get overwrite
// const userOne = User('Ritik', 7, true);
// console.log(userOne);
// const userTwo = User('Chai or Code', 12, false);
// console.log(userOne);

// correct way to define 2 different objects
const userOne = new User('Ritik', 7, true);
console.log(userOne);
const userTwo = new User('Chai or Code', 12, false);
console.log(userOne);

// 'new' keyword, an empty object instance get created, then the constructor get called, it will add all the this.variables and finally give you a wrapped object with these properties

