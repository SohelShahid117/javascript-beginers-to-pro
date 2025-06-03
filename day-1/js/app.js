console.log("this part from javascript app.js file");
console.log("enjoy Javascript");

//75. Statements and Comments in JavaScript
/*
76. Variables
and 
Constants
*/

// using var,let & const
const name = "shahid"; //const use for fixed values
console.log(name);

let age = 35; //let use for changeable values
console.log(age);

age = 40;
console.log(age);

//77. Data Types in JS (strings, numbers, booleans, undefined, null) part 1

//string
let greeting = "hello";
let greeting2 = "how r u?";
let templateLiteral = `enjoy Javascript ${name} 😀`; //deprecated-অবমূল্যায়ন
console.log(greeting);
console.log(greeting2);
console.log(templateLiteral);

//number
let num1 = 33; //integer
let price = 55.99; //float
let bignumber = 1e7; //exponential notation
console.log(num1);
console.log(price);
console.log(bignumber);

//what is the difference between undefined & null?
//when use undefined & when use null in javascript

let x; //undefined:A variable has been declared but has not been assigned a value.
//undefined — Something is missing or not yet assigned

console.log(x);
console.log(typeof x);

function test() {}
console.log("function is " + test()); // undefined

let y = null; //null:Represents an intentional absence of value;No value (intentionally empty)
//Use null when you want to deliberately(-ইচ্ছাকৃতভাবে) clear or reset a value.

console.log(y);
console.log(typeof y);

console.log(undefined == null); //equality
console.log(undefined === null); //Strict equality
