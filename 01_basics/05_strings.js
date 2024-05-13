const name = "Ritik"
const game = new String("Genshin Impact")

console.log(name);
console.log(game);

console.log(name.length);
console.log(game.toUpperCase());

console.log(game[4]);
console.log(game.charAt(4));
console.log(game.indexOf('I'));

const newString = game.substring(0,10);
const anotherString = game.slice(-14, 10);
console.log(newString);
console.log(anotherString);

const newStringOne = "     Ritik     "
console.log(newStringOne.trim());

const url = "https://ritik.com/ritik%20mor"
console.log(url.replace("%20","-"));

console.log(url.includes("ritik"));
console.log(url.includes("jatin"));

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}