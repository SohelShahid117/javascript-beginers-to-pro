//128. Practical examples of Managing Shopping Cart Calculation (E-commerce cart)
const cartItem = [
  { name: "laptop", price: 800, quantity: 1 },
  { name: "mouse", price: 80, quantity: 2 },
  { name: "keyBoard", price: 180, quantity: 1 },
];

const totalCost = cartItem.reduce((preValue, item) => {
  return preValue + item.price;
}, 0);

console.log("total price without qty : ", totalCost);

const totalCost2 = cartItem.reduce((preValue, item) => {
  return preValue + item.price * item.quantity;
}, 0);

console.log("total price with qty : ", totalCost2);

//get items that cost 100 $
const expensiveItem = cartItem.filter((item) => item.price >= 100);
console.log("expensive item : ", expensiveItem);

const lowPriceItem = cartItem.filter((item) => item.price < 100);
console.log("low price item : ", lowPriceItem);

const mdPriceItem = cartItem.filter(
  (item) => item.price > 50 && item.price < 200
);
console.log("medium price item : ", mdPriceItem);

const displayItems = expensiveItem.map((item) =>
  console.log("every single item : ", item)
);

//129. Practical Examples of Filtering and Transforming User Data
