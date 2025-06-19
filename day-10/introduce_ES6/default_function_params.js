//146. Default Function Parameters

// const greet = (name) => {
const greet = (name = "Guest") => {
  //default params
  console.log(`hello ${name}`);
};

greet("Shahid"); //argument pass
greet();

const calculatePrice = (price, tax = 0.1, discount = price * 0.2) => {
  return price + price * tax - discount;
};

console.log(calculatePrice(100));
