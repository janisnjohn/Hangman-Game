


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
var wordsList = ["Superman", "Batman", "Wonder Woman", "Captain America", "Iron Man", "Spider Man"];
chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    if (chosenWord[i] === letter) {
    // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
    //display the number of blanks in html
    numBlanks = chosenWord.length
	// User guesses a letter for the word
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//check to see if the letter is in the word.
	for (i=0; chosenWord.length; i++;) {
	if (userGuess === chosen {

	//if correct, place the letter in the correct space.
	
		numGuesses--;
}
	}
	else {

		numGuesses--;
		wrongGuesses.push(userGuess);
	}
	// if letter is wrong prompt to the user to guess again and subtract guesses left. repeat until user gets the letter correct or if they used up all guesses.


	var html=
	"<p>Wins: " + wins + "</p>" +
	"<p>Current Word <br>" + letterInWord+ "</p>" +
	"<p>Number of Guesses Remaining " + numGuesses + "</p>" +
	"<p>Letters Already Guessed <br>" + wrongGuesses + "</p";

 
	document.querySelector("#game").innerHTML = html;

// 	if (guessesLeft===0) {
// 			alert(You Lose!!!!);
// }
};
