console.log("I made it to childTemplate.js!"); //Debugging line to console ensuring JavaScript Link

function main () {
  let firstNumber, secondNumber, text;

  //get the value of the width input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  //get the value of the height unput field, id="textfield2"
  secondNumber = document.getElementById("textfield2").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest2").innerHTML = alert ( testNaN (secondNumber)
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said said so." //Change to more appropriate
  } else {
    console.log("What did you say", geometry (firstNumber, secondNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "What did you say " + geometry (firstNumber, secondNumber);
  }
}
