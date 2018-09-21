console.log('Variables Object Start');

let MaherAlRayess = {
  firstName: "Maher",
  lastName: "AlRayess",
  age: 15,
  male: true,
}

let MaherAlRayess2 = {
  firstName: "Maher2",
  lastName: "AlRayess2",
  age: 15,
  male: true,
}

// Your code Goes here, swap first names
let memory = MaherAlRayess.firstName;
MaherAlRayess.firstName = MaherAlRayess2.firstName;
MaherAlRayess2.firstName = memory;

//print first name only
console.log("Maher's first name is: " + MaherAlRayess.firstName);
console.log("Maher2's first name is: " + MaherAlRayess2.firstName);
