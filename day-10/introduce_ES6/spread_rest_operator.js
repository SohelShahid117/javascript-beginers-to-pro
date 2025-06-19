//145. Uses of Spread and Rest Operators
//using Spread Operators  expands the element of array & object

const numbers = [1, 2, 3];

console.log(numbers);

numbers.push(8);
numbers.push(9);

console.log(numbers);

const newNumbers = [...numbers, 5, 6]; //spread operator

console.log("suing spread operator : ", newNumbers);

const user = {
  name: "Sohel",
  age: 34,
};

console.log(user);

user.city = "BD";

console.log(user);

const updatedUser = { ...user, zipCode: 123 }; //spread operator

console.log(updatedUser);

const oldNumbers = [10, 29, 29, 39, 48];

const [a, ...b] = oldNumbers; //rest operator
console.log(a);
console.log(b);
