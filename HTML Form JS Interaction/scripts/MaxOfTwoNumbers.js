//console.log("I made it to MaxOfTwoNumbers.js!"); //Debugging line to console ensuring JavaScript Link

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

function equality (numberA, numberB) {
  for (let i=3; i<=6; i++) {
    if (numberA > numberB) {
      result = "Number A is bigger than Number B, " + numberA + " is bigger than " + numberB;
    } else if (numberA < numberB) {
      result = "Number B is bigger than Number A, " + numberB + " is bigger than " + numberA;
    } else if (numberA == numberB) {
      result = "Number A is equal to Number B, " + numberA + " is equal to " + numberB;
    }
  }
}

// This coding illustrates the advanced method
function main() {
  let firstNumber, text;

  //get the value of the speed input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said said so." //Change to more appropriate
  } else {
    console.log("The time is ", equality(firstNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "Your time is: " + equality(firstNumber) + ".";
  }
}
