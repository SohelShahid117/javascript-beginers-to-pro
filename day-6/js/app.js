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
