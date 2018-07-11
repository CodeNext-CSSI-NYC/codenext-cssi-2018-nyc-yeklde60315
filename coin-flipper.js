
var randomInt = require('random-int');
var num =randomInt(0,1);
var result;
var readline = require("readline-sync");
var user = readline.question( "chooses heads or tails");



if(num==0) {
result = "heads";

} else{
  result="tails";

}


if (user == result ) {

 console.log(user, result,"your right");
}
else  {
 console.log(user, result, "you're wrong");
}
