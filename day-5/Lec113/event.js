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
