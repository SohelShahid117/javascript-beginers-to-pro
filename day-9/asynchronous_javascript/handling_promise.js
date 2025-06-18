//140. Using .then(), .catch(), and .finally() with Promises

/*
promise resolve hole then() use hobe
promise rejected hole catch() use hobe

after promise settled use finally()
*/

const fetchData = () => {
  return new Promise((resolve, reject) => {
    /*
    const success = true;
    if (success) {
      resolve();
    } else {
      reject();
    }
      */

    setTimeout(() => {
      const success = true;
      //   const success = false;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("data fetched failed");
      }
    }, 5000);
  });
};

fetchData()
  .then((message) => {
    console.log("message : ", message);
  })
  .catch((err) => {
    console.log("error : ", err);
  })
  .finally(() => {
    console.log("complete the promise");
  });
