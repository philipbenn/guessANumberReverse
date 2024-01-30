var min = 1;
var max = 100;
var computerGuess;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    computerGuess = getRandomNumber(min, max);
    document.getElementById('computer-guess').innerText = 'Computer is guessing: ' + computerGuess;
}

function checkGuess(result) {
    if (result === 'higher') {
        min = computerGuess + 1;
    } else if (result === 'lower') {
        max = computerGuess - 1;
    } else if (result === 'correct') {
        alert('Correct! The Computer guessed the number.');
        return;
    }

    makeGuess();
}

makeGuess();