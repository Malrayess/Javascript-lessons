checkSpeed (70); //add value here

function checkSpeed (speed) {
  speedLimit = 70; //add value here, remember to initialize with constant not let for security purposes
  kmPerPoint = 5; //add value here
  let calcpoints = 0.0;
  if (speed <= 70) {
    return console.log ('Ok'); //Add formula for calculating the acceptable speed from above variables, //after return, none of the other code will run, there is no need to report demerit points
  } else {
  calcpoints = (speed - speedLimit) / kmPerPoint;
  }
  // This variable and formula are const (constant) for security so it cannot be changed, for example when cross-scripting
  const points = Math.floor (calcpoints); //Add formula for calculating the point demerits
  if (speed >= 130) return console.log ('License Suspended'); //Add conditional to check for points to suspend license
  else console.log ('Points', points)
  }
