//99. Iterating over arrays using for loops and forEach()
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("now apply forEach");

fruits.forEach((f) => {
  console.log(f);
});

console.log("now apply map");

fruits.map((f) => {
  console.log(f);
});

//100. Combining, slicing, and joining arrays: concat(), slice(), join()

const arr1 = [1, 2];
const arr2 = [3, 4];
// const combinedArr = arr1.concat(arr2);
const combinedArr = arr2.concat(arr1);
console.log(combinedArr);

const slicedArr = combinedArr.slice(1, 3);
console.log(slicedArr);

const words = ["hello", "javascript"];
const sentence = words.join("     ");
console.log(sentence);

//101. Introduction to JavaScript Object

const car = {
  brand: "Toyota",
  year: 2021,
  start: () => {
    console.log("the car started");
  },
  stop: () => {
    console.log("the car stopped");
  },
};

console.log(car);
car.start();

//102. Creating Objects with Properties and Method

const student = {
  name: "Sohel",
  age: 35,
  subject: ["Math", "Physics", "ICT"],

  //object e method hobe always regular function.not arrow function
  greet: (nam) => {
    console.log(`Hi,I am ${nam}`);
  },
  //104. Using this Keyword Inside Methods
  greet2: function () {
    console.log(`Hi,I am ${this.name},Nice to meet u.My age is ${this.age}`);
  },
};

//103. Accessing and Modifying Object Properties

(student.name = "Shahid"), (student.age = 37);

console.log(student.name);
student.greet(student.name);
student.greet2();
console.log(student["subject"]);

//104. Using this Keyword Inside Methods

const person = {
  firstName: "Sohel",
  lastName: "Shahid",
  fullName: function () {
    return `hi I am ${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

//105. Practical Project: Create a Calculator Object and Apply Properties & Methods

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Error : Can not divided by 0";
    } else {
      return a / b;
    }
  },
};

console.log(Calculator.add(4, 5));
console.log(Calculator.subtract(4, 5));
console.log(Calculator.multiply(4, 5));
console.log(Calculator.divide(4, 5));
console.log(Calculator.divide(4, 0));

//106. Introduction to Loops in JavaScript (`for` loop, `while` loop, `do...while`)

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log("j = " + j);
  j++;
}

//use the browser console
// let password;
// do {
//   // password = prompt("enter your password");
// } while (password !== "12345");
// console.log(password);

let i = 5;
do {
  console.log("i = " + i);
  i++;
} while (i > 10);
