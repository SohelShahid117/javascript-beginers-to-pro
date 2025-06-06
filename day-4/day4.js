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
