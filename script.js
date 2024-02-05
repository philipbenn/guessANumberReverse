var start = 0;
var end = 100;
var middle;
var isFirstGuess = true;
var guessList = document.getElementById('guess-list');

function getGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    if (start > end) {
        alert('The only remaining possibility is ' + start + '. Computer will not continue guessing.');
        return;
    }

    if (isFirstGuess) {
        middle = getGuess(40, 60);
        isFirstGuess = false;
    } else {
        middle = getGuess(start, end);
    }

    document.getElementById('computer-guess').innerText = 'Computer is guessing: ' + middle;

    var listItem = document.createElement('li');
    listItem.textContent = 'Computer guessed ' + middle;

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
        start = middle + 1;
    } else if (result === 'lower') {
        end = middle - 1;
    } else if (result === 'correct') {
        var listItem = document.createElement('li');
        listItem.textContent = 'Computer guessed ' + middle + ', which was correct.';
        guessList.appendChild(listItem);

        alert('Correct! The Computer guessed the number.');
        clearGuessList();

        start = 0;
        end = 100;
        isFirstGuess = true;

        makeGuess();
        return;
    }

    makeGuess();
}

makeGuess();
