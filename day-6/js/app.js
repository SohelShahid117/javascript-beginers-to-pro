//119. Selecting elements: getElementById(), querySelector(), querySelectorAll()
console.log("hi");

//get element by id
const header = document.getElementById("header");
console.log(header);
console.log(header.innerText);
header.innerText = "enjoy javascript";

//get element by class name
const coding = document.getElementsByClassName("coding");
console.log(coding);
console.log(coding[0].innerText);
console.log((coding[1].innerText = "enjoy codingggggggggggggg"));
// console.log(coding[2].innerText);

// querySelector-->use for select first element/children
// querySelectorAll-->use for select all element/children
const msg = document.querySelectorAll(".message");
console.log(msg);
console.log(msg[0].innerText);
msg.forEach((m) => {
  console.log(m.innerText);
});

//120. Modifying element content: textContent, innerHTML, style
const greeting = document.getElementById("greeting");
console.log(greeting);
console.log(greeting.textContent);
console.log(greeting.innerText);
// greeting.textContent = "good evening";
// setTimeout(() => {
//   greeting.textContent = "good evening";
// }, 5000);

const info = document.getElementById("info");
console.log(info);
info.innerHTML =
  "<b> visit <a href='https://www.w3schools.com' target='_blank'>this link</a> for details </b> ";

greeting.style.color = "red";
greeting.style.padding = "10px";
greeting.style.border = "5px dotted lightGreen";

const textContenet = document.getElementsByClassName("text_contenet");
console.log(textContenet);
console.log(textContenet[0].innerText);
textContenet[0].style.color = "red";
textContenet[0].style.backgroundColor = "yellow";
textContenet[0].style.padding = "50px";

//121. Adding and removing elements dynamically with JavaScript
