let number = [2, 24]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
console.log(difference);
let startingNumber = number[0]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
