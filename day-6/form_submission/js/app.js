//124. Form Submission with preventDefault() [practical feedback form]
console.log("hello world");

const feedbackForm = document.getElementById("feedbackForm");
console.log(feedbackForm);

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");

  const feedbackMsg = feedbackForm.elements["feedback"].value;
  console.log(feedbackMsg);

  if (!feedbackMsg) {
    alert("please write your feedback");
  } else {
    alert("thank u for your feedback");
  }
});
