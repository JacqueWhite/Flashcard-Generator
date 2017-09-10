var inquirer = require("inquirer");

// Basic Card Constructor
var BasicCard = function(){
	this.front = front;
	this.back = back;
};
console.log(BasicCard);


// Question 1
var questionOne = new BasicCard(
	"What is the spanish word for HELLO?", "Hola");
//console.log(questionTwo.front); 
//console.log(questionTwo.back);

// Question 1
var questionTwo = new BasicCard(
	"What is the spanish word for PLEASE?", "Por Favor");
//console.log(questionTwo.front); 
//console.log(questionTwo.back);

// Question 1
var questionThree = new BasicCard(
	"What is the spanish word for BEER?", "Cervesa");
//console.log(questionTwo.front); 
//console.log(questionTwo.back);


// Start Inquire Prompt
inquirer.prompt([{
    type: 'input',
    message: questionOne.front,
    name: 'answerOne'
}, {
    type: 'input',
    message: questionTwo.front,
    name: 'answerTwo'
}]);



module.exports = BasicCard;