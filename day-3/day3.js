//89. Boolean values: true and false

// let isJavascriptFun = true;
let isJavascriptFun = 1;
console.log(isJavascriptFun);

let isMathHard = false; //0,null,undefined,empty string ""
console.log(isMathHard);

let num1 = 8;
let num2 = 5;
console.log(num1 > num2);

//90. Conditional statements: if, else if, else

// let age = 18;
let age = 16;
if (age >= 18) {
  console.log("u can vote");
} else {
  console.log("u can't vote");
}

// let marks = 90;
// let marks = 50;
let marks = 30;
if (marks >= 80) {
  console.log("Grade:A+");
} else if (marks >= 70) {
  console.log("Grade:A");
} else if (marks >= 60) {
  console.log("Grade:A-");
} else if (marks >= 50) {
  console.log("Grade:B");
} else if (marks >= 40) {
  console.log("Grade:C");
} else if (marks >= 33) {
  console.log("Grade:D");
} else {
  console.log("Grade:F");
}

//91. Logical operators (&&, ||, !) in details

/*
Logical AND (&&)--->both condition true
Logical OR (||)---->condition one or both true
Logical NOT (!)---->reverse korbe vice-versa
*/
const mathScore = 40;
const scienceScore = 90;
if (mathScore >= 50 && scienceScore >= 50) {
  console.log("u r passed");
} else {
  console.log("u r failed");
}

const isProMembership = false;
// const isCouponCode = true;
const isCouponCode = false;
if (isProMembership || isCouponCode) {
  console.log("u r enrolled my course");
} else {
  console.log("u can't enrolled my course");
}

const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("login please");
} else {
  console.log("welcome back");
}

//92. Practical Example of Logical Operators (AND, OR and NOT)

//93. Basic Functions in JavaScript
function greet() {
  console.log("hello world");
}
greet();

function greetUser(name) {
  //name : parameter
  console.log(`hello ${name}`);
}
greetUser("Shahid"); //shahid : argument
greetUser("Aadil"); //Aadil : argument

//94. Parameters, Arguments and return values of Function

function addNumbers(a, b) {
  // return a + b;
  // return a - b;
  // return a * b;
  return a / b;
}
const add = addNumbers(3, 4);
console.log(add);

//95. How to Work with Arrow functions

const sum = (a, b) => {
  // const result = a + b;
  // console.log(result);
  return a + b;
};
sum(33, 4);
console.log(sum(4, 5));
const add2 = sum(9, 5); //kono function k 1t variable e rakake bole Function Expressions
console.log(add2);

const multiplication = (a, b) => a * b;
console.log(multiplication(22, 3));

//96. Function Expressions, Anonymous Functions and Callbacks

const friends = ["Samsul", "nurnahar", "tuhin", "aadil", "sumi", "mariam"];
friends.forEach((f) => {
  console.log(`welcome ${f}`);
});

//97. Arrays in JavaScript: Creating and accessing arrays
