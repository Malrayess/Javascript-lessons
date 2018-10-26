//console.log("I made it to Modulus.js!"); //Debugging line to console ensuring JavaScript Link

let stop = false;

function testNaN (number) {
  console.log(stop);
  if (isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }
}

let number = [2, 25, 0]; //Boundary Numbers
let skipCount = 3; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
console.log(difference);
let startingNumber = number[0]; //Hint: used in the FOR Loop
let result = "";
let counterO = 0;
let counterE = 0;
let arrE = [];
let arrO = [];

function evenorodd () {
if (number[0] % 2 !=0) { //if the first number modulus 2 does not equal 0
  result = "The first number is odd, "; //console this message saying the number is odd
} else {result = "The first number is even, "}; //console this message saying the number is even

if (number[1] % 2 !=0) { //if the second number modulus 2 does not equal 0
  result += "The second number is odd"; //console this message saying the number is odd
} else {result += "The second number is even"};  //console this message saying the number is even
return result; //consoles the message result: odd or even
}

function counters () {
for (let i=0; i<=difference; i++) { //starting at 0 and less then or = to the difference adding by ones
  even = (startingNumber += skipCount) % 2; // defines even and the modulus portion of the sequence
  if (even == 0) { // if even equals 0
    arrE[counterE] = startingNumber; // fills the even number array with even numbers
    counterE += 1; // increases the even number counter by 1
  }
  if (even == 1) { // if even equals 0
    arrO[counterO] = startingNumber; // fills the odd number array with odd numbers
    counterO += 1; // increases the odd number counter by 1
  }
  return "This number is", even, "; This iteration is number", i+skipCount; //Example of Concatenating
}
return "There are ", counterE, " even numbers"; // logs in how many even numbers there are
return "There are ", counterO, " odd numbers"; // logs in how many odd numbers there are
}

function displaynumbersets () {
  return "These are the even numbers: "; // logs in this statement
  for (let a=0; a<counterE; a++) { // starting at 0 and less then the counter of even numbers adding by ones
    return arrE[a]; // logs in the even numbers
  }
  return "These are the odd numbers: ";  // logs in this statement
  for (let a=0; a<counterO; a++) { // starting at 0 and less then the counter of odd numbers adding by ones
    return arrO[a]; // logs in the odd numbers
  }
}
// This coding illustrates the advanced method
function main() {
  let firstNumber, secondNumber, thirdNumber, fourthNumber, text;

  //get the value of the speed input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  thirdNumber = document.getElementById("textfield3").value;
  fourthNumber = document.getElementById("textfield4").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest2").innerHTML = alert ( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest3").innerHTML = alert ( testNaN (thirdNumber) );
  document.getElementById("validityTest3").innerHTML = testNaN (thirdNumber);

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest4").innerHTML = alert ( testNaN (fourthNumber) );
  document.getElementById("validityTest4").innerHTML = testNaN (fourthNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said so." //Change to more appropriate
  } else {
    console.log(evenorodd(firstNumber, secondNumber, thirdNumber, fourthNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = evenorodd(firstNumber, secondNumber, thirdNumber, fourthNumber);

    console.log(counters(firstNumber, secondNumber, thirdNumber, fourthNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = counters(firstNumber, secondNumber, thirdNumber, fourthNumber);

    console.log(displaynumbersets(firstNumber, secondNumber, thirdNumber, fourthNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = displaynumbersets(firstNumber, secondNumber, thirdNumber, fourthNumber);
  }
}
