//console.log("I made it to Greeting.js!"); //Debugging line to console ensuring JavaScript Link

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

function time(time) {
for (let i=0; i<24; i++) {
  if (time < 12 && time >= 6) {
    return 'Good Morning';
  } else if (time < 18 && time >= 12) {
    return 'Good Afternoon';
  } else if (time < 23 && time >= 18) {
    return 'Good Evening';
  } else if (time < 6 && time >= 0) {
    return 'Why am I awake at this time?';
  }
 }
}
// This coding illustrates the advanced method
function main() {
  let timern, text;

  //get the value of the speed input field, id="textfield1"
  timern = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (timern) );
  document.getElementById("validityTest1").innerHTML = testNaN (timern);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said so." //Change to more appropriate
  } else {
    console.log("The time is: ", time(timern)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "Your time is: " + time(timern) + ".";
  }
}
