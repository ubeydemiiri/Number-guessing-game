const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const result = document.getElementById("result");

    if (userGuess < randomNumber) {
        result.textContent = "Your number is less than the correct number, try again!";
    } else if (userGuess > randomNumber) {
        result.textContent = "Your number is greater than the correct number, try again!";
    } else {
        result.textContent = "Congratulations! You guessed the right number!";
    }
}
