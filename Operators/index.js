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
  let number = startingNumber;
  console.log(number);
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

let number = [4, 7, 28, 10];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (3, 6, 113);
skipCounting (8, 11, -351);

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
