function addTwoXFive(numOne, numTwo) {
  var mathedSmile = (numOne + numTwo) * 5;
  return mathedSmile;
}

var getMathed = addTwoXFive(5, 10);
console.log(getMathed);
getMathed = addTwoXFive(9, 10);
console.log(getMathed);
getMathed = addTwoXFive(3, 8);
console.log(getMathed);

function tennerString(str) {
  if (str.length > 10) {
    return true;
  } else if (str.length <= 10) {
    return false;
  } else {
    console.log("You Messed Up!?!??!?");
  }
}

getMathed = tennerString("Hi");
console.log(getMathed);
getMathed = tennerString("Hiiiiiiiiiiiiiiiii");
console.log(getMathed);
getMathed = tennerString("Hiiiiiiiii");
console.log(getMathed);
getMathed = tennerString(1);
console.log(getMathed);

var strArray = ["hi", "bye", "phone", "phan", "pan", "pharaoh", "pharmer"];
var strArray2 = ["hi", "bye", "pahone", "phan", "pan", "pharaoh", "pharmer"];
var strArray3 = ["hi", "bye", "pahone", "pahan", "pan", "pharaoh", "pharmer"];

function getFirstPh(ary) {
  for (i = 0; i < ary.length; i++) {
    if (ary[i].startsWith("ph")) {
      return ary[i];
    } else if (!ary[i].startsWith("ph")) {
      console.log(`${ary[i]} does not begin with ph`);
    } else {
      console.log("SOMETHING IS WRONGGG");
    }
  }
}

var firstPh = getFirstPh(strArray);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
firstPh = getFirstPh(strArray2);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
firstPh = getFirstPh(strArray3);
console.log(`%c ${firstPh.toUpperCase()}`, "color: #B4DA55");
