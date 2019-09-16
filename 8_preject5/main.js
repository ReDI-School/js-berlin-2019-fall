// BONUS 2 - let the user define the upper limit

let secretNumber = Math.floor(Math.random() * 100);
let numberElement = document.getElementById("number");
let upperLimitElement = document.getElementById("upperLimit");
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

function reset() {
    let upperLimit = parseInt(upperLimitElement.value);
    secretNumber = Math.floor(Math.random() * upperLimit);
    guesses = 0;

    console.log("Secret number is " + secretNumber);
}
