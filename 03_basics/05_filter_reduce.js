const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Filter -> Can be used just to filter values from the array, can't be used to modify the element
const newNums1 = myNums.filter( (item) => {
    return item > 4
})
console.log(newNums1);


// Map -> Can be used to filter as well as modify values from the array (but if we try to filter then the remaining spots become undefined)
const newNums2 = myNums.map( (item) => {
    if(item<=5) return item + 20
    return item + 10
})
console.log(newNums2);


// Reduce -> Initial Value and Current Value of Array, then perform operation between these two
let initalValue = 0;
const newValue = myNums.reduce( (initalValue, item) => initalValue + item)
console.log(newValue);

/// Everything else on filter is easy pizzy
/// you can do chaining as well, like -> myNums.map().map().filter()