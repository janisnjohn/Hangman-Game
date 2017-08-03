


// generate a random letter and store it in a variable for later.


var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];
// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;
var wordsList["Superman", "Batman", "Wonder Women", "Captain America", "Iron Man", "Spider Man"]
chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    if (chosenWord[i] === letter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
// Promp user and ask them to guess a letter between a and z.
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// check to see if the letter is correct within the word.
	if (userGuess === letterInWord) {

		// subtract number of guesses.
		numGuesses--;

	}
	else {

		numGuesses--;
		wrongGuesses.push(userGuess);
	}

	if (guessesLeft === 0) {
		alert("Game Over! You used up all 10 guesses.");
		loses++;
		guessesLeft=10;
		wrongGuesses=[];
		computerGuess=computerChoices[Math.floor(Math.random()* computerChoices.length)];
	}
	// if letter is wrong prompt to the user to guess again and subtract guesses left. repeat until user gets the letter correct or if they used up all guesses.


	var html=
	"<p>Wins: " + wins + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Letters Guessed: " + wrongGuesses + "</p>";

	document.querySelector("#game").innerHTML = html;

// 	if (guessesLeft===0) {
// 			alert(You Lose!!!!);
// }
};
