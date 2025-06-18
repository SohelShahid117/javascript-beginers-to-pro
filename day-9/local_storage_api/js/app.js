// console.log("hi");
//137. Web Storage API: Storing and retrieving data with localStorage (with Practical)

//initialization the element
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const saveBtn = document.getElementById("saveData");
const clearBtn = document.getElementById("clearForm");

console.log(name, email, message, saveBtn, clearBtn);
console.log(
  name.value,
  email.value,
  message.value,
  saveBtn.value,
  clearBtn.value
);

const saveFormData = () => {
  const nameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const formData = {
    nameValue,
    emailValue,
    messageValue,
  };
  console.log(formData);

  //save data to local storage
  //   localStorage.setItem("formData", formData);
  localStorage.setItem("formData", JSON.stringify(formData));
  localStorage.setItem("user", JSON.stringify(formData));
  alert("data saved successfully");
};
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveFormData();
});

//load data from local storage

const loadFormData = () => {
  const getData = localStorage.getItem("user");
  console.log(getData);

  if (getData) {
    const parseData = JSON.parse(getData);
    console.log("parse data : ", parseData);

    const nameParse = parseData.nameValue;
    const emailParse = parseData.emailValue;
    const messageParse = parseData.messageValue;
    console.log(nameParse, emailParse, messageParse);

    name.value = nameParse;
    email.value = emailParse;
    message.value = messageParse;
  }
};

//during DOM content loaded get the data
document.addEventListener("DOMContentLoaded", loadFormData());

//clear form data from local storage

const clearData = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("formData");
  alert("data cleared successfully");
};

clearBtn.addEventListener(
  "click",
  () => {
    localStorage.removeItem("user");
    localStorage.removeItem("formData");
    alert("data cleared successfully!");
  }
  //   clearData()
);

/*

function clearData() {
  localStorage.removeItem("user");
  localStorage.removeItem("formData");
  alert("Data cleared successfully!");
}

clearBtn.addEventListener("click", clearData);
*/
