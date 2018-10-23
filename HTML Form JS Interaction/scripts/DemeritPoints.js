//console.log("I made it to Demerit Points!"); //Debugging line to console ensuring JavaScript Link

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

function checkSpeed (speed) {
  speedLimit = 70; //add value here, remember to initialize with constant not let for security purposes
  kmPerPoint = 5; //add value here
  let calcpoints = 0.0;
  if (speed <= 70) {
    return 'Ok'; //Add formula for calculating the acceptable speed from above variables, //after return, none of the other code will run, there is no need to report demerit points
  } else {
    calcpoints = (speed - speedLimit) / kmPerPoint;
    return calcpoints;
  }
  // This variable and formula are const (constant) for security so it cannot be changed, for example when cross-scripting
  const points = Math.floor (calcpoints); //Add formula for calculating the point demerits
  if (speed >= 130) return console.log ('License Suspended'); //Add conditional to check for points to suspend license
  else console.log ('Points', points)
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
    console.log("Your speed is", checkSpeed(firstNumber)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "You have a " + checkSpeed(firstNumber) + " point speeding ticket";
  }
}
