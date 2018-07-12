
var randomInt = require('random-int');
var num =randomInt(1,3);
// var rock = 1
// var paper = 2
// var scissors= 3
var readline = require("readline-sync");
var user = readline.question( "chooses rock, paper, scissors");

let  compChoice;

if (num==1){

  compChoice="rock"
} else if (num==2){

  compChoice="paper"

}else {

  compChoice="scissors"
}






if(compChoice==1 && user == 1){

  console.log("tie");

}else if (compChoice==1 && user== 2){
  console.log( "you lose");

}else {

  console.log( "you win");
}



// if(compChoice==1 && user == 1){
//
//   console.log("tie");
//
// }else if (compChoice==1 && user== 2){
//   console.log( "you lose");
//
// }else {
//
//   console.log( "you win");
// }
//
//
//
//
// if(compChoice==1 && user == 1){
//
//   console.log("tie");
//
// }else if (compChoice==1 && user== 2){
//   console.log( "you lose");
//
// }else {
//
//   console.log( "you win");
// }
