//144. Destructuring Arrays and Objects in JavaScript
const fruits = ["apple", "orange", "banana"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("destructuring array : ");
const [x, y, z] = fruits;
console.log(x);
console.log(y);
console.log(z);

console.log("destructuring objects : ");

const users = {
  name: "shahid",
  age: 34,
  email: "s@g.c",
  country: "BD",
};
console.log(users.name);

const { name, age, email, country } = users;
console.log(age, email);

console.log(`\n hello, I m ${name}`);

console.log("nested destructuring");

const person = {
  name2: "sohel",
  address: {
    country2: "IRAN",
    city: "Tehran",
  },
  hobbies: ["reading", "gardening", "coding"],
};

// const { name2, address, hobbies } = person;
const {
  name2,
  address: { country2, city },
  hobbies: [a, b, c],
} = person;

// const { country2, city } = address;
// const [a, b, c] = hobbies;

console.log(`person name is ${name2},address is ${city}.hobbies is ${a}`);
