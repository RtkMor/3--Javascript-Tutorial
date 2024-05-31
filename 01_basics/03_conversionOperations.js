// ********* Conversion ********* //

let score = "35"

// you want to or not want to use brackets is up to you, both are correct
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score);

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "35" => 35
// "35abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN


// ********* Operations ********* //

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

console.log("1" + 2 + 3);
console.log("1" + (2 + 3));
console.log(1 + 2 + "3");
console.log(2 + 3 * 4 % 2);

