//console.log("I made it to Landscape and Portrait!"); //Debugging line to console ensuring JavaScript Link

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

function geometry (width, height) { //notice these parameters
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width < height) ? 'Landscape' : 'Portrait'; //ternary operator example
  //seems odd, the inequality, here, is reading the opposite
}

// This coding illustrates the advanced method
function main() {
  let firstNumber, secondNumber, text;

  //get the value of the width input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  //get the value of the height unput field, id="textfield2"
  secondNumber = document.getElementById("textfield2").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest2").innerHTML = alert ( testNaN (secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said said so." //Change to more appropriate
  } else {
    console.log("What did you say", geometry (firstNumber, secondNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "The display geometrty is " + geometry (firstNumber, secondNumber);
  }
}
