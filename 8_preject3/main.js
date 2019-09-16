// BONUS 1 - use a random number

let secretNumber = Math.floor(Math.random() * 100);
let numberElement = document.getElementById("number");
let resultElement = document.getElementById("result");

function guess() {
    let guessedNumber = parseInt(numberElement.value);

    if (guessedNumber === secretNumber) {
        resultElement.textContent = "YOU WON!!!";
    }

    if (guessedNumber > secretNumber) {
        resultElement.textContent = "My secret number is smaller";
    }

    if (guessedNumber < secretNumber) {
        resultElement.textContent = "My secret number is bigger";
    }
}
