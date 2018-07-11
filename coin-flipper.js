let result;
var randomInt = require('random-int');
var ourNum =randomInt(0,1);
var heads=0;
var tails=1;
var readline = require("readline-sync");
var user = readline.question( "chooses heads or tails")

if (user == 0 && ourNum == 0) {
  result= "heads";
 console.log("your right")
}
else if(user == 1 && ourNum==1) {
result="tails";
console.log("your right ")
}else{
 console.log("your wrong")
}
