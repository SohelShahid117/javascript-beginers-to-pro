//133. Error Handling in JavaScript (Syntax, Runtime & Logical Errors)
/*
error types:
1.syntax error
2.run time  or ReferenceError
3.logical error
*/

console.log("hello world");
// console.log("hello world        //SyntaxError: Invalid or unexpected token

let x = 10;
console.log(x);
// console.log(y);  //ReferenceError: y is not defined---->run time error

const result = x / 0; //logical error
console.log(result);
