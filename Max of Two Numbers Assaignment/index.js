let numberA = 7;
let numberB = 6;
let result = "";
console.log(numberA);
console.log(numberB);

for (let i=3; i<=6; i++) {
  if (numberA > numberB) {
    result = "Number A is bigger than Number B, " + numberA + " is bigger than " + numberB;
  } else if (numberA < numberB) {
    result = "Number B is bigger than Number A, " + numberB + " is bigger than " + numberA;
  } else if (numberA == numberB) {
    result = "Number A is equal to Number B, " + numberA + " is equal to " + numberB;
  }
}
console.log(result);
