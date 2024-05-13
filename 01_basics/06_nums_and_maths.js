const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

const offSetNumber = 123.459
console.log(offSetNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-US"));
console.log(hundreds.toLocaleString("en-IN"));


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));


// How to generate a random number between r1 and r2
// Step - 1 => use Math.random() and multiply it with r2 - r1 + 1;
const r1 = 10, r2 = 20;
const num = Math.random() * (r2 - r1 + 1);
// Step - 2 => Take floor of the value and add the min range value
const ans = Math.floor(num) + r1;
console.log(ans);
// ans will have values [r1, r2)
