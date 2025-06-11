//121. Adding and removing elements dynamically with JavaScrip
console.log("hello");

const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");

console.log(list);
console.log(list.children);
console.log(list.children.length);
console.log(addItem);
console.log(removeItem);

addItem.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
  console.log(newItem);
});

removeItem.addEventListener("click", () => {
  list.removeChild(list.lastChild);
});

/*
how to add new element:
1.createElement
2.innerText || textContent e add korte hobe
3.appendChild korte hobe
*/

/*
how to remove element:
1.removeChild e konta remove korbo seta bole dite hobe
2.

*/

//122. Forms and Input Handling in JavaScript

const contactForm = document.getElementById("contactForm");
console.log(contactForm);

//123. Handling Input and Form Validation
// contactForm.addEventListener("click", () => {
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");

  const userName = contactForm.elements["userName"].value;

  const email = contactForm.elements["email"].value;

  const password = contactForm.elements["password"].value;

  console.log("Name : " + userName);
  console.log("Email : " + email);
  console.log("Password : " + password);

  if (!userName || !email || !password) {
    alert("Pls fill out the all field correctly");
  } else {
    alert("Registration submit successfully");
  }
});

//124. Form Submission with preventDefault() [practical feedback form]
