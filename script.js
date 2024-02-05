var min = 1;
var max = 100;
var computerGuess;
var guessList = document.getElementById('guess-list');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    computerGuess = getRandomNumber(min, max);
    document.getElementById('computer-guess').innerText = 'Computer is guessing: ' + computerGuess;

    var listItem = document.createElement('li');
    listItem.textContent = 'Computer guessed ' + computerGuess;

    guessList.appendChild(listItem);
}

function clearGuessList() {
    guessList.innerHTML = '';
}

document.getElementById('tooLowBtn').addEventListener('click', function() {
    checkGuess('higher');
});

document.getElementById('tooHighBtn').addEventListener('click', function() {
    checkGuess('lower');
});

document.getElementById('correctBtn').addEventListener('click', function() {
    checkGuess('correct');
});

function checkGuess(result) {
    if (result === 'higher') {
        min = computerGuess + 1;
    } else if (result === 'lower') {
        max = computerGuess - 1;
    } else if (result === 'correct') {
        var listItem = document.createElement('li');
        listItem.textContent = 'Computer guessed ' + computerGuess + ', which was correct.';
        guessList.appendChild(listItem);

        alert('Correct! The Computer guessed the number.');
        clearGuessList();
        makeGuess();
        return;
    }

    makeGuess();
}

makeGuess();
