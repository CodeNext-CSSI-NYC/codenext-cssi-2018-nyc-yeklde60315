// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
// var readline = require("readline-sync");
// var userNum = readline.question( "Please write in a number:");
//
// if(userNum>0) {
//   console.log("positive");
// }
//  else if((userNum<0)){
//   console.log("negative");
// }
//  else {
//   console.log("zero");
// }


// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// var readline = require("readline-sync");
// var userNum = parseFloat(readline.question( "Please write in first number:"));
// var userNum2 = parseFloat(readline.question( "Please write in second number:"));
// var userNum3 = parseFloat(readline.question( "Please write in third number:"));
//
// if(userNum > userNum2 && userNum > userNum3){
//   console.log( "The first Number ");
// } else if (userNum < userNum2 && userNum < userNum3) {
//   console.log("The Second Number");
// } else {
//   console.log("The Third Number");
// }




// 3. Ask the user for a number and print whether it is odd or even
//
// var readline = require("readline-sync");
// var userNum = parseFloat(readline.question( "Please write a number:"));
//
// if (userNum % 2 == 0){
//   console.log("Even");
// }else if (userNum % 2 != 0){
//
//   console.log("odd");
// }



// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant


// var vowels = ['a','e','i','u','o']
//
//
// var readline = require("readline-sync");
// var userletter = readline.question( "Please write a letter:");
//
// if(userletter== vowels){
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }



// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
var readline = require("readline-sync");
var useryear = readline.question( "Please write a year:");

if(useryear%4==0){
  console.log("its a leap year" )
}else{
  console.log("its not a leap year")
}













// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
