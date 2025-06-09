//107. Looping through arrays using `for` and `for...of`

const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("using for...of loop: ");
for (const x of fruits) {
  console.log(x);
}

//108. Controlling Loops with break and continue with Practical Project

console.log("Loops with break and continue");

for (let i = 0; i < 5; i++) {
  //   if (i == 2) break;
  if (i == 2) continue;
  console.log(i);
}

console.log("apply break-continue");
const numbers = [1, 2, 3, 4, 5, 7, 10, 12, 17, 19, 20];
for (let i = 0; i < numbers.length; i++) {
  //   if (i == 2) break;
  if (numbers[i] % 2 == 0) continue;
  console.log(numbers[i]);
}
// loracef drp ambrox drp

console.log("apply break-continue--->using for...of loop");

for (n of numbers) {
  //   if (i == 2) break;
  if (n % 2 == 0) continue;
  console.log(n);
}

console.log("-------------------------");
const data = [10, 20, "invalid", 30, "invalid", "error", 40, "wrong", 50];
for (let item of data) {
  if (typeof item !== "number") {
    continue;
  }
  console.log(item);
}

//Source code for this module

//110. Working with Dates and Time in JavaScript

const now = new Date();
console.log(now);

// const specificDate = new Date("6/9/2025");
// console.log(specificDate);

const customDate = new Date(2025, 6, 8, 15, 10, 30);
console.log(customDate);
