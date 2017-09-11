var inquirer = require('inquirer');

var flashCards = require('./flashCards.js');

var questions = require('./questions.js').questions;

var clozeQuestions = [];

for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCards(questions[i].full, questions[i].cloze);
 	clozeQuestions.push(q);
}

var currentQuestion = 0;

var answersRight = 0;

var answersWrong = 0;


function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		
		if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('NICE!');
			answersRight++;
		} else {
			console.log('NOPE!');
			answersWrong++;
		}

		
		console.log(clozeQuestions[currentQuestion].full);
		console.log('-------------------------------------\n');

		if (currentQuestion < clozeQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Game Over!');
			console.log('Correct Answers: ' + answersRight);
			console.log('Incorrect Answers: ' + answerWrong);

			console.log('-------------------------------------\n');

			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					
					currentQuestion = 0;
					answersRight = 0;
					answersWrong = 0;

					askQuestion();
				} else {
			
					console.log('Thanks for playing!');
				}
			})
		}
	})
}


askQuestion();

