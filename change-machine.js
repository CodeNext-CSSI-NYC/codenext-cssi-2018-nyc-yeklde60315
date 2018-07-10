// Author: Yenry Simon
console.log("Bleep Bloop! Want to hear a joke ? YOU  ha ha ha ! I'm a change machine ");
var readline = require("readline-sync");
var number = parseInt(readline.question("Please enter cents as a positive integer:"));
console.log(number + " cents makes:"+ quarters + dimes + nickels + pennies);

var quarters = Math.floor(number/25);

var reminder= number%25;

var dimes= Math.floor(reminder/10);
 reminder= reminder%10;

var nickels = Math.floor(reminder/5);
reminder= reminder%5;

var pennies= Math.floor(reminder/1);
reminder=reminder%1;
