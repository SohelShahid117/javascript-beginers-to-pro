//139. Understanding Promises in JavaScript: resolve, reject

//creating new promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; //initial state
  if (success) {
    // console.log("the task completed successfully");
    resolve("the task completed successfully 2");
  } else {
    reject("mission failed");
  }
});

//handling promises using then(),catch()
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  }); //as like try catch
