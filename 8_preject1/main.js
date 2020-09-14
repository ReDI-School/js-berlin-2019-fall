// simple number guessing game

let secretNumber = 42;
let numberElement = document.getElementById("number");

function guess() {
    let guessedNumber = parseInt(numberElement.value);

    if (guessedNumber === secretNumber) {
        console.log("YOU WON!!!");
    }

    if (guessedNumber > secretNumber) {
        console.log("My secret number is smaller");
    }

    if (guessedNumber < secretNumber) {
        console.log("My secret number is bigger");{}
    }
}
