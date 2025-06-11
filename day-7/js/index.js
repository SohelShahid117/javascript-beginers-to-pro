//125. Practical Project: Create a "Contact Us" Form with Validation
console.log("hi");

//variable initialization
const form = document.getElementById("contactForm");
console.log(form);

const name = form.elements["name"];
console.log(name);

const email = form.elements["email"];
const subject = form.elements["subject"];
const message = form.elements["message"];

const nameErr = document.getElementById("nameErr");
console.log(nameErr);
const emailErr = document.getElementById("emailErr");
const subjectErr = document.getElementById("subjectErr");
const messageErr = document.getElementById("messageErr");
const successMsg = document.getElementById("successMsg");

//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("hello");
  console.log(name.value);
  console.log(name.value.trim());

  nameErr.textContent = "";
  emailErr.textContent = "";
  subjectErr.textContent = "";
  messageErr.textContent = "";
  successMsg.style.display = "none";

  let isValid = true;

  if (name.value.trim() === "") {
    nameErr.textContent = "name is required";
    isValid = false;
  }

  /*
  function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
  */
  let regexEmail = /\S+@\S+\.\S+/;

  if (!regexEmail.test(email.value)) {
    emailErr.textContent = "email is required";
    isValid = false;
  }

  //34 min done
});
