var Letter = require("./letter.js");

var inquirer = require('inquirer');

var colors = require("colors");

var myWords = ["snoopy", "charlie", "woodstock", "lucy", "linus", "sally", "peppermint", "lila", "belle", "olaf", "marbles"];
var guesses = 10;
var selectedWord = "";
var lettersInChosenWord = false;






var setupGame = function() {
	guesses = 10;
	console.log("\nHello my sweet Baboo, let's play a game!\n".magenta.bold);
	console.log("************************************************************************".magenta)
	console.log("Guesses Remaining: ".blue + guesses);
	selectedWord = myWords[Math.floor(Math.random() * myWords.length)];
	newWord = new Letter(selectedWord);
	newWord.blankSpace();


		inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Guess a letter!'.white
		 	}
			]).then(checkGuess);

};


var checkGuess = function(answers) {
	answer = answers.guess;
	lettersInChosenWord = false;
	for (var i=0; i < newWord.letters.length; i++) {
		if (newWord.letters[i] == answer) {
			lettersInChosenWord = true;
		}
	}

	if(lettersInChosenWord) {
		for (var i = 0; i < newWord.letters.length; i++) {
			if (newWord.letters[i] == answer) {
				console.log("\nCORRECT!");
				newWord.blankReplace(answer);
				console.log("\nGuesses Remaining: ".blue + guesses);
				console.log(newWord.array.join("  "));
				if (newWord.letters.toString() == newWord.array.toString()) {
					console.log("\nUHUUUUU CONGRATULATIONS! YOU DID IT!!!!!!\n".bold.red);
					return newRound();
				} else {
					return newGuesses();
				}
			}
		}
	}
	else {
		console.log("\nI'm sorry. That's the wrong answer! But never, ever, EVER, give up!!!!!\n".yellow);
		guesses--;
		console.log("Guesses Remaining: ".blue + guesses);
		console.log(newWord.array.join("  "));
		if (guesses > 0) {
			newGuesses();
		} else if (guesses === 0) {
			endGame();
		}
	}
};





var endGame = function() {
	inquirer.prompt([
	 	{
	 		type: 'confirm',
	 		name: 'end',
	 		message: 'OH NO! YOU ARE OUT!!!!! Do you want to leave the game???'.bold.red
	 	}
		]).then(function (answers) {
			var end = answers.end;
			if (!end) {
				setupGame();
			}
			else {
				return;
			}
		}); 
};

var newGuesses = function() {
	inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Guess a letter!'.white
		 	}
			]).then(checkGuess);
};

var newRound = function() {
	lettersInChosenWord = false;
	guesses = 10;
	console.log("Guesses Remaining: ".blue + guesses);
	selectedWord = myWords[Math.floor(Math.random() * myWords.length)];
	newWord = new Letter(selectedWord);
	newWord.blankSpace();	
		inquirer.prompt([
			{
		    	type: 'input',
		    	name: 'guess',
		    	message: 'Guess a letter!'.white
		 	}
			]).then(checkGuess);
};



setupGame ();
