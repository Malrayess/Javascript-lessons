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


// This coding illustrates the advanced method
function main() {
  let firstNumber, secondNumber, thirdNumber, fourthNumber, text;

  //get the value of the speed input field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  thirdNumber = document.getElementById("textfield2").value;
  fourthNumber = document.getElementById("textfield2").value;

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
    console.log(equality(firstNumber, secondNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = equality(firstNumber, secondNumber);
  }
}
