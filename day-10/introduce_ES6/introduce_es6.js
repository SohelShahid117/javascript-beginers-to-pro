//143. Introduction to ES6+ Syntax: let, const, Arrow Functions

var num = 88;
let age = 32;
age = 32 + 5;
console.log(num);
console.log(age);

const pi = 3.1416;
console.log(pi);

//old function
function addNumbs(num1, num2) {
  return num1 + num2;
}
let result = addNumbs(8, 9);
console.log(result);

const add = (a, b) => {
  return a + b;
};
console.log(add(7, 8));

const sub = (a, b) => a - b;
console.log(sub(7, 9));
