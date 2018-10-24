//console.log("I made it to FizzBuzz!"); //Debugging line to console ensuring JavaScript Link

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

function fizzBuzz (input) { //These match order of logic
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 5 === 0) return 'Buzz';
  if (input % 3 === 0) return "Fizz";
  if (typeof input !=='number') return 'This is not a number'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
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
    console.log("Your message is: ", fizzBuzz(firstNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "Your message is: " + fizzBuzz(firstNumber) + "!";
  }
}
