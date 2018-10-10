function isLandscape (width, height) {
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
}

let width = 800;
let height = 800;
console.log("This display geometry is", isLandscape (width, height)); //Difference between calling functions with arguements and sending to parameter's, local variables
