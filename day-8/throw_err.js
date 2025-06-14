//135. Throwing custom errors with throw
function checkAge(age) {
  if (age < 18) {
    // console.log("u r not eligible to vote");
    throw new Error("u r not eligible to vote");
  }
  console.log("u can vote");
}
// checkAge(15);

try {
  checkAge(15);
} catch (error) {
  console.log("error is : ", error.message);
} finally {
  console.log("age verification completed");
}
