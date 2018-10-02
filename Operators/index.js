let number = [4, 7, 28, 10, 0, 100, 5, 1, '1'];

function simpleOperators (numberA, numberB) {
  let adding = number[0] + number [1]
  let subtract = number[0] - number [1]
  let multiply = number[0] * number [1]
  let divide = number[0] / number [1]
  console.log(number);
  console.log(adding);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
}

//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  //let number = startingNumber;
  console.log(number);
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

/*
//simpleComparison using WHILE and Skip Counting Algorithm
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount);
  }
}

function NotEqual (valueArray, i) {
    if (valueArray !=5) {//This is when we do stop, so we accept every other value (common logic for "not")
      console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
      return i;
    } else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop}
  }
for (let i=0; i==done; i++) {
  NotEqual (if i == number[i], i, );
}
*/

/*
function LooseEquality (firstOperant, secondOperant) { //Changes the second operand to the typeof the first operand
  console.log(firstOperant == secondOperant);
}

function StrictEquality (firstOperant, secondOperant) {
  console.log(firstOperant === secondOperant);
}

//Loose vs. Strict example, == symbol or === symbol returns back boolean
LooseEquality (number[7], number[7]);
LooseEquality (number[8], number[7]);

StrictEquality (number[8], number[7]);
*/

//Not Equality Starter Code
//Outputing individual values of an array, we want to start stop at the value 5, where ever it is in the array
/*for (let i=0; i<number.length; i++) {//we do not know when to stop in the array
  if (number[i] !=5) {//This is when we do stop, so we accept every other value (common logic for "not")
    console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
  } else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop}
}*/

/*
//truth vs. falsy example
console.log(1 == 1); // returns true
console.log('1' == 1); // returns true
console.log('1' === 1); // returns false
*/

//howManyTimes (number[4], number[5], number[6]);
/* // This is a broken code, infinite loop
while (number <= 100) {
  let number = 0
  console.log(number);
  number += 5;
}
*/

/*
let number = [4, 7, 28, 10];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (3, 6, 113);
skipCounting (8, 11, -351);
*/

/*
let skipCount = 0; // skip count by 2's to 10
for (let i=1; i<=5; i++){
  skipCount += 2;
  console.log(skipCount);
}
*/

/*
let RskipCount = 15; // skip count by 3's backwards
console.log(RskipCount);
for (let i=1; i<=5; i++){
  RskipCount -= 3;
  console.log(RskipCount);
}
*/

/*
let MskipCount = 15; // skip count by
console.log(MskipCount);
for (let i=1; i<=5; i++){
  MskipCount *= 3;
  console.log(MskipCount);
}
*/

/*
//using falsy: preferences
let userColor = 'red'; // user not defined yet
let defaultColor = 'blue'; //default color chosen by developer
let currentColor = userColor || defaultColor;
console.log(currentColor); //returns "blue"
*/

//if a costumer has more than 100 points, they are gold, otherwise they are silver
let points = 90;
let type = points > 100 ? 'gold' : 'silver'//points > 100 return
console.log(type);
