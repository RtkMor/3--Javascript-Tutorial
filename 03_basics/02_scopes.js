let a = 300;
var c = 100;

if(true){
    let a = 30;
    const b = 20;
    var c = 10;
    console.log("Inner value of 'a' - ", a);
    console.log("Inner value of 'c' - ", c);
}

console.log("Outer value of 'a' - ", a);
console.log("Outer value of 'c' - ", c);              // we have re-declared it inside the if-else scope but it still coming outside


// Hosting  --> Javascript first store all the functions that are declared and use them, it doesnot matter if you are using that function before the declaration

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// addTwo(5);  // --> We can't use this function because this function first get stored in a datatype instead of declaring it alltogether
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

