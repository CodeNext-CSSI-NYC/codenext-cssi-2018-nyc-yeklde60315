// // 1. Create an object called myObj with the following key-value pairs:
// // a -> 23
// // b -> 12
// // c -> 3
// // After you create this object, add the key value pair d -> 14 to the object
// // Print out the object to make sure it looks like you expect
// // Change the value associated with the key b from 12 to 19
// // Create an array called myObjKeys that contains the keys from this object using Object.keys()
// // Print it out to make sure it looks right
// // Create an array called myObjValues that contains the values from this object using Object.values()
// // Print it out to make sure it looks right
// // Print out the value associated with the key "a" using both styles of accessing object values.
// // Make sure you know how to use both of them.
//
//
//
// // creating a object
// let myObj={"a": 23, "b": 12, "c": 3}
//
// //adding something new
// myObj["d"] =14;
//
// //changing key b from 12 to 19
// myObj["b"]=19;
//
// //creating an array for my objkeys
// let myObjKeys=Object.keys(myObj);
// //creating an array for myobjvaluse
// let myObjValues=Object.values(myObj);
//
// console.log(myObj);
// console.log(myObjKeys);
// console.log(myObjValues);
//
// console.log(myObj["a"]);
//
//

// // 2. Create an object that contains any key-value pairs you want.
// // Print it out, make sure it looks right.
// // Delete one of the key-value pairs.
// // Add a new one.
// // Change the value associated with one of the existing keys.
// // Print it out again. Does it look as you expected?
// // Store one of the values from the object into a variable called myVal.
// // Print out another value from the object.
// // The purpose of the previous two things is to make sure you know both ways to
// // access values in objects using keys. Make sure you can do both.
//
//
//
//creating my own obj
// let myObj={Pizza:"cheese",Music:"Pop",Favword:"Hi"}
//
// //deleting one of mu key-value pair
//
// delete myObj["Favword"];
// myObj["girl"]="Lisbeth";
// myObj["Music"]="Country";
//
// let myVal = myObj["Pizza"];
// console.log(myObj["Pizza"]);
//
//
//
// console.log(myVal);
// console.log(myObj);
//



// // 3. Write a function that takes a string as input and returns an object
// // whose key-value pairs are counts of the number of times each letter appears.
// function letterCount(str) {
//
// }
// // For example, letterCount("mississippi") would return something like:
// // {
// //   m: 1,
// //   i: 4,
// //   s: 4,
// //   p: 2
// // }
// // Hint: Loop through str. For each letter, check if it already exists in obj as a property.
// // You can check to see if a certain key already exists in an object using
// // obj.hasOwnProperty(key). It returns true or false depending on whether it exists.
// // If it doesn't, you should set the value to 1. If it does, hmmmmm, what should you do?
//
//
//



//let myStr={state:"mississippi" };


function letterCount(str){
// counting the frequency of characters
  let letterCounter={};

  for(i=0; i< str.length; i++){

    // looking at the one letter one at a time
      let letter= str[i];



      if(letterCounter.hasOwnProperty(letter)== false){
        letterCounter[letter]=1;
      }else{

        letterCounter[letter]++;
      }


    }
    return letterCounter;
}

console.log(letterCount("mississippi"));







// // 4. Write a function that takes a string as input and returns a different string
// // that contains each letter in the original string exactly once.
// function eachLetterOnce(str) {
//
// }
// // So eachLetterOnce("mississippi") would return "misp" (letters may be in another order).
// // Hint: Use an object to keep track of what letters appear in the word. You can
// // set obj[letter] = true for each letter you come across.
// // At the end, get the keys of that object (which is an array) and use join
// // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
// // to create a string.
//
//
//
// // 5. Write a function that takes one parameter, an object, and prints out a line
// // like the followng for every key-value pair in the object:
// // "The key ___ has a value of ___"
// function printKeysAndValues(obj) {
//
// }
// // Hint: You will need to get the array of keys, and use a for loop to go through all of the keys.
// // Hint2: Inside the for loop, you will need to use the index to access the key,
// // and then you will need to use the key to access the corresponding value.
