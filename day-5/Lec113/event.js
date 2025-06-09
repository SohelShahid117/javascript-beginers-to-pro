//113. JavaScript Event Handling: (click event
const clickButton = document.getElementById("clickBtn");
// console.log(clickButton);

const message = document.getElementById("message");

clickButton.addEventListener("click", () => {
  console.log("hi");
  alert("the button is clicked");
  message.innerText = "the button is clicked";
});
