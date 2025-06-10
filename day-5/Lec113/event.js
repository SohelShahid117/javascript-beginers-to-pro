//113. JavaScript Event Handling: (click event)
const clickButton = document.getElementById("clickBtn");
// console.log(clickButton);

const message = document.getElementById("message");

clickButton.addEventListener("click", () => {
  console.log("hi");
  alert("the button is clicked");
  message.innerText = "the button is clicked";
});

//114. JavaScript Event Handling: (hover event)
const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "lightGreen";
  hoverDiv.innerText = "u r hovering";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "lightblue";
  hoverDiv.innerText = "Hover Me";
});

//115. Handling Keyboard Events (keydown and keyup)

const inputField = document.getElementById("inputField");
const keyMessage = document.getElementById("keyMessage");
console.log(keyMessage);

inputField.addEventListener("keydown", (e) => {
  keyMessage.innerText = `u pressed ${e.key}`;
});
inputField.addEventListener("keyup", (e) => {
  keyMessage.innerText = `u released ${e.key}`;
});

//116. Adding Event Listeners to Elements: addEventListener()
const eventBtn = document.getElementById("eventBtn");
const eventMsg = document.getElementById("eventMsg");
// console.log(eventBtn, eventMsg);
eventBtn.addEventListener("click", () => {
  eventMsg.innerText = "hi";
});

setTimeout(() => {
  eventBtn.innerText = "changed btn text";
  eventBtn.style.backgroundColor = "lightGreen";
  eventBtn.style.padding = "10px";
  eventBtn.style.fontWeight = "bold";
  eventBtn.style.borderRadius = "10px";
}, 5000);

//117. Event Object: event.target, event.type, preventDefault() with practical project
