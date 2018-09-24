//Hello World Function
function greet (firstName, lastName){ //Parameters
  console.log("Hello " + firstName + " World " + lastName);
}

function square (number) {
  return number*number;
}

let MaherAlRayess = ["Maher", "AlRayess", 15, true];
let MaherAlRayess2 = ["Maher2", "AlRayess2", 16, true];

//Calling functions, with arguements
greet (MaherAlRayess[0], MaherAlRayess[1])
greet (MaherAlRayess2[0], MaherAlRayess2[1]);
greet (square(MaherAlRayess[2]), MaherAlRayess2[2]);
