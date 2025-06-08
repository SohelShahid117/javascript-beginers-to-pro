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
