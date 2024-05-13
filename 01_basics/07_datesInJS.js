
let myDate = new Date();
// console.log(`myDate = ${myDate} \n`);
// console.log(`myDate ISO string = ${myDate.toISOString()} \n`);
// console.log(`myDate Date string = ${myDate.toDateString()} \n`);
// console.log(`myDate Time String = ${myDate.toTimeString()} \n`);
// console.log(`myDate JSON = ${myDate.toJSON()} \n`);
// console.log(`myDate Locale String = ${myDate.toLocaleString()} \n`);
// console.log(`myDate Locale Date String = ${myDate.toLocaleDateString()} \n`);
// console.log(`myDate Locale Time String = ${myDate.toLocaleTimeString()} \n`);

// let myCreatedDate = new Date(2024, 5, 6)
// let myCreatedDate = new Date(2024, 5, 6, 5, 30)
// let myCreatedDate = new Date("06-06-2024, 5:30:30 PM")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp.toLocaleString());

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// define how you want to show the output
console.log(newDate.toLocaleString("default", {
    weekday: "long",
}))
