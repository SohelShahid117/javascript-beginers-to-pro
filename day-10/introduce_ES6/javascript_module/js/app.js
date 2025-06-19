//148. JavaScript Modules: How export, default export and import works
console.log("hi");

import greet from "./greet.js";
import { add, subtract } from "./main.js";

const result = add(2, 3);

console.log(result);

console.log(subtract(5, 6));

const greetMe = greet("Aadil");
console.log(greetMe);
