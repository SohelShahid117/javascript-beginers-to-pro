//139. Understanding Promises in JavaScript: resolve, reject

//creating new promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; //initial state
  // const success = false; //initial state
  if (success) {
    // console.log("the task completed successfully");
    resolve("the task completed successfully 2"); //go to then
  } else {
    reject("mission failed"); //go to catch()
  }
});

//handling promises using then(),catch()
myPromise
  .then((message) => {
    //then for resolve
    console.log("message is : ", message);
  })
  .catch((err) => {
    //catch for reject
    console.log("error is : ", err);
  }); //as like try catch
