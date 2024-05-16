const data = {
    username: 'rtkmor',
    email: 'rtkmor@gmail.com',
    password: '123456'
}


// Promise One
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // like -> DB calls, cryptography, network calls etc
//     setTimeout(function(){
//         console.log("Async task is completed!");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed!");
// });



// Promise Second
// new Promise(function(resolve, reject){
//     // Do an async task
//     // like -> DB calls, cryptography, network calls etc
//     setTimeout(function(){
//         console.log("Async task 2 is completed!");
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log("Promise 2 Consumed!");
// });



// Promise Third
// const promiseThird = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async Task 3rd is completed, providing data to resolve!');
//         resolve(data);
//     }, 1000);
// });

// promiseThird.then( user => {
//     console.log(user);
// });



// Promise Fourth
// const promiseFourth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false;
//         const errorMessage = 'Something Went Wrong!';
//         if(!error){
//             console.log('Async Task 4th is completed, providing data to resolve!');
//             resolve(data);
//         }
//         else{
//             console.log('Async Task 4th failed!');
//             reject(errorMessage);
//         }
//     }, 1000);
// });

// we can't just define username here, and say that we will return something from our promise resolve function, -> this will show promise pending
// instead what happens is, we can use chaining, .then().then(), when we return something in our first .then() it got passed to the next .then()
// const username = promiseFourth.then((user) => {
//     console.log(user);
//     return user.username;
// }).catch((e) => {
//     console.log(e);
// })

// promiseFourth.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((e) => {
//     console.log(e);
// }).finally(() => {
//     setTimeout(() => {
//         console.log('The promise is either resolved or rejected!');
//     }, 1000);
// })



// Promise Fifth (using async await)
// const promiseFifth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false;
//         if(!error){
//             console.log('Async Task 5th is completed, providing data to resolve!');
//             resolve(data);
//         }
//         else{
//             reject('ERROR - Something Went Wrong!');
//         }
//     }, 1000);
// })

// async function consumePromiseFifth(){
//     try {
//         const response = await promiseFifth;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFifth();



// API data fetch using async await method -> fetch() is a type of promise
// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const userData = await response.json();     // Important, this process also takes time
//     console.log(userData);
// }
// getAllUsers();

// API data fetch using .then().catch() method
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));