// Function that takes 2 integers as arguments, adds them together, then multiplies by 5.
// Returns the variable after the math is done.

function addTwoXFive(numOne, numTwo) {
  var mathedSmile = (numOne + numTwo) * 5;
  return mathedSmile;
}

// Running the Function 3 times and storing the value in a variable. Then console logging the result.
var getMathed = addTwoXFive(5, 10);
console.log(getMathed);
getMathed = addTwoXFive(9, 10);
console.log(getMathed);
getMathed = addTwoXFive(3, 8);
console.log(getMathed);

// Function that uses the .length method to check the length of the string that was input as an argument
// returns true if the string length is greater than 10, and false if it is equal to or less than 10.
function tennerString(str) {
  if (str.length > 10) {
    return true;
  } else if (str.length <= 10) {
    return false;
  } else {
    console.log("You Messed Up!?!??!?");
  }
}

// storing the true or false value into the variable 3 times based on the string input as an argument.
// also ran the function once to show the else block works.
getMathed = tennerString("Hi");
console.log(getMathed);
getMathed = tennerString("Hiiiiiiiiiiiiiiiii");
console.log(getMathed);
getMathed = tennerString("Hiiiiiiiii");
console.log(getMathed);
getMathed = tennerString(1);
console.log(getMathed);

// Arrays to be passed as arguments into the getFirstPh function.
var strArray = ["hi", "bye", "phone", "phan", "pan", "pharaoh", "pharmer"];
var strArray2 = ["hi", "bye", "pahone", "phan", "pan", "pharaoh", "pharmer"];
var strArray3 = ["hi", "bye", "pahone", "pahan", "pan", "pharaoh", "pharmer"];

// Function that uses the .startsWith function to check each string in the input Array to see if it starts with "ph"
// if it does, return the string that matched, and stop running.
function getFirstPh(ary) {
  for (i = 0; i < ary.length; i++) {
    if (ary[i].startsWith("ph")) {
      return ary[i];
    }
  }
}

// storing the first string that matches into the firstPh variable. Added color to stand out more in console log.
var firstPh = getFirstPh(strArray);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
firstPh = getFirstPh(strArray2);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
firstPh = getFirstPh(strArray3);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
