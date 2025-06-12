//126. Advanced Array Methods (Map, Filter, Reduce)

//1.map() method
const numbers = [1, 2, 3, 4];

const square = numbers.map((n) => n * n);
const square2 = numbers.map((n) => n ** 2);
const cube = numbers.map((n) => n ** 3);

console.log(square);

square[1] = 5;
console.log("modified sqr : ", square);

console.log(square2);
console.log("cube : ", cube);

console.log(numbers);

//2.filter() method:apply a specific condition

const myFavNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = myFavNumbers.filter((x) => x % 2 == 0);
const oddNumbers = myFavNumbers.filter((x) => x % 2 !== 0);
console.log("evenNumbers : ", evenNumbers);
console.log("oddNumbers : ", oddNumbers);
console.log(myFavNumbers);

//3.reduce() method : produce a single value(sum,total product price)

const productPrice = [10, 20, 30, 40, 50];

let initialValue = 0;

const totalPrice = productPrice.reduce(
  (prevValue, currentValue, currentIndex, mainArray) => {
    //prevValue, currentValue-->required
    //currentIndex,mainArray--->optional
    console.log("pre value : " + prevValue);
    console.log("current value : " + currentValue);
    return prevValue + currentValue;
  },
  initialValue
);

//here, prevValue = initialValue

console.log(totalPrice);

//product display:map()
//product filtering : filter()
//total price:reduce()

//127. Using find() and some() methods for advanced searches

//find():returns the first element match with condition

const users = [
  { name: "Tuhin", age: 19 },
  { name: "Aadil", age: 4 },
  { name: "Sumi", age: 33 },
  { name: "Sohel", age: 35 },
];

//find() method return first element match with condition
const findUser = users.find((user) => user.age >= 20);
console.log("find user : ", findUser);

//filter() method return an array[]
const filterUser = users.filter((user) => user.age >= 20);
console.log("filter user : ", filterUser);

//some() method return true || false
const hasYounger = users.some((user) => user.age >= 18);
console.log(hasYounger);

let initialAge = 0;
const totalAge = users.reduce((preAge, user) => {
  return preAge + user.age;
}, initialAge);
console.log("total age is : ", totalAge);
