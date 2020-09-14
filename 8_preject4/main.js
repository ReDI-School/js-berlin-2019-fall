// BONUS 2 - count the amount of guesses

let secretNumber = Math.floor(Math.random() * 100);
let numberElement = document.getElementById("number");
let resultElement = document.getElementById("result");
let guesses = 0;

function guess() {
    let guessedNumber = parseInt(numberElement.value);

    guesses++

    if (guessedNumber === secretNumber) {
        resultElement.textContent = "Guess " + guesses + ": YOU WON!!!";
    }

    if (guessedNumber > secretNumber) {
        resultElement.textContent = "Guess " + guesses + ": My secret number is smaller";
    }

    if (guessedNumber < secretNumber) {
        resultElement.textContent = "Guess " + guesses + ": My secret number is bigger";
    }
}
