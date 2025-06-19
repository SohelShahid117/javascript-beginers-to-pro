//147. Practical Project: A "Shopping Cart" Demo Using ES6+ Features

const products = [
  { name: "Laptop", price: 500 },
  { name: "Phone", price: 200 },
];

const addProduct = (pName = "", pPrice = 0) => {
  return [...products, { name: pName, price: pPrice }];
};

// addProduct("Fan", 50);
console.log(products);

// console.log(addProduct("Fan", 50));
// console.log(addProduct());

const calculateTotalPrice = (...prices) => {
  return prices.reduce(
    (totalPrice, singlePrice) => totalPrice + singlePrice,
    0
  );
};

const displayProductDetails = ({ name, price }) => {
  return `Product is : ${name} & price is : ${price}`;
};

const updatedCart = addProduct("mouse", 20);
console.log(updatedCart);

const sumOfPrice = calculateTotalPrice(500, 200, 20);
// const sumOfPrice = calculateTotalPrice({ ...products.price });
console.log("total price = ", sumOfPrice);

console.log(displayProductDetails({ name: "Tablet", price: 900 }));
