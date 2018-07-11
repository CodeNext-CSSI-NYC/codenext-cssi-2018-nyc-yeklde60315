
var randomInt = require('random-int');
var ourNum =randomInt(0,10);

var readline = require("readline-sync");

var userNum = readline.question("Please guess a number from 1 to 10: ");
if(userNum == ourNum) {
  console.log("You guessed it! Lucky!");
}
 else if((userNum < ourNum)){
  console.log("Nope, that's not it! Sorry!");
}
 else {
  console.log("Sorry, your guess is too high!");
}
