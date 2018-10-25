//console.log("I made it to OrderingGrades.js!"); //Debugging line to console ensuring JavaScript Link

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

function calculatedGrade (marks) {
  const average = calculateAverage (marks); console.log(average);
  if (average <= 100 && average >= 90) return 'A'; //Add appropriate grade or feedback
  if (average <= 89 && average >= 80) return 'B'; //Add approriate conditional
  if (average <= 79 && average >= 70) return 'C';
  if (average <= 69 && average >= 60) return 'D';
  return 'F'; //This is the last grade left, using the funnel image (metaphor)
}

function calculateAverage (marks) {
  let sum = 0;
  for (mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}

// This coding illustrates the advanced method
function main() {
  let firstNumber, secondNumber, thirdNumber, text;

  //get the value of the speed input field, id="textfield1"
  firstNumber = parseInt (document.getElementById("textfield1").value, 10);
  secondNumber = parseInt (document.getElementById("textfield2").value, 10);
  thirdNumber = parseInt (document.getElementById("textfield3").value, 10);

  let marks = [firstNumber, secondNumber, thirdNumber];

  //validate if user typed a number, odd validation by TRUE Conditional
  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  document.getElementById("validityTest2").innerHTML = alert ( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  document.getElementById("validityTest3").innerHTML = alert ( testNaN (thirdNumber) );
  document.getElementById("validityTest3").innerHTML = testNaN (thirdNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said so." //Change to more appropriate
  } else {
    console.log(calculatedGrade(marks)); //difference between calling functions with arguement and sending to parameter's, local variables
    document.getElementById("large").innerHTML = "Your grade is: " + calculatedGrade(marks) + ".";
  }
}
