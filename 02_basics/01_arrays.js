// array

const myArr = [0, 1, 2, 3, 4, 5]

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();

// checking whether this element is present in the array or not
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(10));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr)
// console.log(typeof myArr)
// console.log(newArr)
// console.log(typeof newArr)

// console.log("A ", myArr);
// const newArr1 = myArr.slice(1,3);
// console.log(newArr1);

// console.log("B ", myArr);
// const newArr2 = myArr.splice(1,3);
// console.log(newArr2);

// console.log("C ", myArr);

const marvelHeros = ["Thor", "IronMan", "CaptainAmerica"];
const dcHeros = ["BatMan", "SuperMan", "Flash"];
// marvelHeros.push(dcHeros);   // not a good way to concatenate all heros together
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros);       // you have to create a new array to perform and store the concatenate result, can only be applied to 2 arrays at a time
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];       // ... => spread operator, most commonly used operator
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13, [14, 15]]]];
// console.log(anotherArray);

const usableAnotherArray = anotherArray.flat(Infinity);
// console.log(usableAnotherArray);

console.log(Array.isArray(["Hitman"]));
console.log(Array.isArray("Hitman"));
console.log(Array.from("Hitman"));
console.log(Array.from({value: "Hitman"}));     // interesting case
