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
let result = "";
for (let i=0; i<=(number[1] - number[0]); i++) { //starting at 0 and less then or = to the difference adding by ones
  even = (startingNumber += skipCount) % 2; // defines even and the modulus portion of the sequence
  if (even == 0) { // if even equals 0
    arrE[counterE] = startingNumber; // fills the even number array with even numbers
    counterE += 1; // increases the even number counter by 1
  }
  if (even == 1) { // if even equals 0
    arrO[counterO] = startingNumber; // fills the odd number array with odd numbers
    counterO += 1; // increases the odd number counter by 1
  }
  result += "This number is" + even + "; This iteration is number" + (i+skipCount) + ", "; //Example of Concatenating
}
return result + "</br></br> There are " + counterE + " even numbers , and there are " + counterO + " odd numbers"; // logs in how many even numbers there are
 // logs in how many odd numbers there are
}

function displaynumbersets () {
  let result = "";
  result += "These are the even numbers: "; // logs in this statement
  for (let a=0; a<counterE; a++) { // starting at 0 and less then the counter of even numbers adding by ones
    result += arrE[a] + ", "; // logs in the even numbers
  }
  result += "</br> These are the odd numbers: ";  // logs in this statement
  for (let a=0; a<counterO; a++) { // starting at 0 and less then the counter of odd numbers adding by ones
    result += arrO[a] + ", "; // logs in the odd numbers
  }
  return result;
}

// This coding illustrates the advanced method
function main() {
  let firstNumber, secondNumber, text;

  //get the value of the speed input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;

  number[0] = parseInt (firstNumber);
  number[1] = parseInt (secondNumber);

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest2").innerHTML = alert ( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said so." //Change to more appropriate
  } else {
    console.log(evenorodd()); //difference between calling functions with arguement and sending to parameter's, local variables

    document.getElementById("Difference").innerHTML = "The difference between the two numbers is equal to " + (number[1] - number[0]);

    document.getElementById("large").innerHTML = evenorodd();

    document.getElementById("counters").innerHTML = counters ();

    document.getElementById("numbersets").innerHTML = displaynumbersets ();

  }
}
