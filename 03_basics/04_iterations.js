const myArr = ['java', 'cpp', 'ruby', 'python'];

const myMap = new Map();
myMap.set('js','javascript');
myMap.set('cpp','c++');
myMap.set('rb','ruby');
myMap.set('py','python');

const myObject = {
    "js": 'javascript',
    cpp: 'c++',
    py: 'python',
    rb: 'ruby'
}


// Methods by which we can iterate in an array

// Method - 1 (simple for loop)
// for(let i=0 ; i<myArr.length ; i++){
//     console.log(myArr[i]);
// }

// Method - 2 (for of loop)
// for(const val of myArr){
//     console.log(val);
// }

// Method - 3 (for in loop)
// for(const val in myArr){
//     console.log(`Index - ${val} and value - ${myArr[val]}`);
// }

// Method - 4 (for each loop)
// myArr.forEach(element => {
//     console.log(element);
// });



// Methods by which we can iterate in a map

// Method - 1 (for of loop)
// for (const [key, val] of myMap) {
//     console.log(`key - ${key}, and value - ${val}`);
// }

// Method - 2 (for in loop)     ---------- NOTE ---> Can't be used, it dont give any error nor it print anything
// for(const key in myMap){
//     console.log(`Key - ${key} and value - ${myMap[key]}`);
// }

// Method - 3 (for each loop) (can't be used to console the keys)
// myMap.forEach(element => {
//     console.log(element);
// });



// Methods by which we can iterate in an object

// Method - 1 (for in loop)
// for (const key in myObject) {
//     console.log(`key - ${key}, and value - ${myObject[key]}`);
// }






////// NOTE ----> Important Fact, when we define a printMe function and want to use it as a callback function for our .forEach then we only pass it by reference, and don't want to execute it

myArr.forEach(printMe)

function printMe(item){
    console.log(item);
}