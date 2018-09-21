let FirstName = "Maher";
let lastName = "Al-Rayess";

//new code goes here
// Add a third variable
let memory = FirstName;
FirstName = lastName;
lastName = memory;

//Print variables to console
console.log("My first name is: " + FirstName);
console.log("My last name is: " + lastName);
