let number = [2, 27, 0]; //Boundary Numbers
let skipCount = 3; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
console.log(difference);
let startingNumber = number[0]; //Hint: used in the FOR Loop
let result = "";
let counterO = 0;
let counterE = 0;
let arrE = [];
let arrO = [];


if (number[0] % 2 !=0) { //if the first number modulus 2 does not equal 0
  result = "The first number is odd, "; //console this message saying the number is odd
} else {result = "The first number is even, "}; //console this message saying the number is even

if (number[1] % 2 !=0) { //if the second number modulus 2 does not equal 0
  result += "The second number is odd"; //console this message saying the number is odd
} else {result += "The second number is even"};  //console this message saying the number is even
console.log(result); //consoles the message result: odd or even

for (let i=0; i<=difference; i++) { //starting at 0 and less then or = to the difference adding by ones
  even = (startingNumber += skipCount) % 2; // defines even and the modulus portion of the sequence
  if (even == 0) { // if even equals 0
    arrE[counterE] = startingNumber; // fills the even number array with even numbers
    counterE += 1; // increases the even number counter by 1
  }
  if (even == 1) { // if even equals 0
    arrO[counterO] = startingNumber; // fills the odd number array with odd numbers
    counterO += 1; // increases the odd number counter by 1
  }
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
console.log("There are ", counterE, " even numbers"); // logs in how many even numbers there are
console.log("There are ", counterO, " odd numbers"); // logs in how many odd numbers there are

console.log("These are the even numbers: "); // logs in this statement
for (let a=0; a<counterE; a++) { // starting at 0 and less then the counter of even numbers adding by ones
  console.log(arrE[a]); // logs in the even numbers
}

console.log("These are the odd numbers: ");  // logs in this statement
for (let a=0; a<counterO; a++) { // starting at 0 and less then the counter of odd numbers adding by ones
  console.log(arrO[a]); // logs in the odd numbers
}
