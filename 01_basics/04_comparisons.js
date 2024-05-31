/*
    > , < , >= , <= , == , === , !=
*/

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

console.log("2" == 2); // true (check only the value after conversion)
console.log("2" === 2); // false (check the value as well as the datatype)

let obj1 = {firstName: "Ritik", lastName: "Mor"}
let obj2 = {firstName: "Ritik", lastName: "Mor"}
console.log(obj1 === obj2)  // false -> comparing two objects always return false, whether they are exact same or not, it doesnt matter
