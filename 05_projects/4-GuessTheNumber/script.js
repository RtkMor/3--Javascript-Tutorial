const correctNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector("form");

let nums = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // check the guessed number
  const guessedNumber = parseInt(document.querySelector("#guessField").value);

  if (guessedNumber === "" || isNaN(guessedNumber)) {
    alert("Please provide a valid number");
  } else if (guessedNumber === correctNumber) {
    document.querySelector(
      ".lowOrHi"
    ).innerHTML = `You Won! ${guessedNumber} is the correct number!`;
    newGame();
  } else {
    // Update the guessed number array
    nums.push(guessedNumber);
    document.querySelector(".guesses").innerHTML = nums;

    // Update the guesses remaining
    const remainingGuessesSelector = document.querySelector(".lastResult");
    const remainingGuesses = parseInt(remainingGuessesSelector.innerHTML);
    remainingGuessesSelector.innerHTML = remainingGuesses - 1;

    // Display whether the guessed number is high or low
    if (guessedNumber > correctNumber) {
      document.querySelector(".lowOrHi").innerHTML =
        "Your number is greater than correct number";
    } else {
      document.querySelector(".lowOrHi").innerHTML =
        "Your number is smaller than correct number";
    }

    if (remainingGuesses === 1) {
      endGame();
      newGame();
    }
  }
});

function endGame() {
  document.querySelector("#subt").style.display = "none";
  document.querySelector(
    ".lowOrHi"
  ).innerHTML = `The correct number was ${correctNumber}!`;
}

const div = document.createElement("div");
div.id = "restart";

function newGame() {
  const button = document.createElement("button");
  button.style.padding = '10px';
  button.style.borderRadius = '10px';
  button.textContent = "Start Over!";
  button.addEventListener("click", function () {
    window.location.reload();
  });
  div.innerHTML = "";
  div.appendChild(button);
  document.querySelector('#wrapper').appendChild(div);
}
