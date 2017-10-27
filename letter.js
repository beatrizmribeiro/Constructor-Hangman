var word = require("./word");

var Letter = function (input) {
	var wordUse = new Word(input)
	this.letters = wordUse.text.split("");
	this.length = wordUse.length;
	this.array = [];
	this.blankSpace = function() {
		for (var i=0; i < this.length; i++){
			this.array.push("_");
		}
		console.log(this.array.join("  "));
	}


	this.blankReplace = function (answer){
		for(var i = 0; i < this.length; i++){
			if (this.letters[i] == answer){
				this.array[i] = answer;
			};
		};
	};
};


module.exports = letter;