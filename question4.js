/* 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign 
them values and log their values to the console before and after they are declared to demonstrate variable 
hoisting.
*/

console.log(x); // undefined due to hoisting
console.log(y); // throws referenceerror
console.log(z); // throws referenceerror

var x = "pw";
let y = "Skills";
const z = "!";

console.log(x); // "pw"
console.log(y); // "skills"
console.log(z); // "!"
