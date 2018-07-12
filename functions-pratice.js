// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"

//1b. Call it three times in a row. Run your code to make sure it works.

//
// function sound(){
//   console.log("meow");
// }
//
// sound();
// sound();
// sound();






// 2a. Write (declare) a function that takes one parameter and prints out the square of that number

// 2b. Call it three times with three different parameters. Run your code to make sure it works.

// function math(num){
//   return num**2 ;
// }
//
//
// var readline= require("readline-sync");
// var num = parseInt(readline.question( "write in a number"));
// var num2 = parseInt(readline.question( "write in a number"));
// var num3 = parseInt(readline.question( "write in a number"));
//
//
//
// console.log(math(num));
// console.log(math(num2));
// console.log(math(num3));





// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.


// Run your code to make sure it works.


function greaterThan(num,num2){
  if(num>num2){
    console.log(num + " is greater than" + num2);
  } else {

  console.log(num2 + " is greater than" + num);
  }
}


var readline= require("readline-sync");
var num = parseInt(readline.question( "write in a number"));
var num2 = parseInt(readline.question( "write in a number"));


console.log(greaterThan(num,num2));




















// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
