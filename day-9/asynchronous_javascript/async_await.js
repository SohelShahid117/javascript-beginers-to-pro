//141. Easy Explanation of async and wait
/*
1.javascript er kono function k asynchronously handle korte gele tokon amra use korbo async-await

2.kono function k asynchronous kore felle seti 1t promise return kore--->resolve_reject send korbe

3.data database teke nie aste j time t lagbe seti holo await

4.data fetch kore ana or something kiso korte jodi time lage tokoni amra async_await use korbo

*/

// practical example of data fetching

//free fake data : https://jsonplaceholder.typicode.com/

//normal function
/*
const fetchPosts = () => {
  try {
    console.log("fetching posts...");
  } catch (error) {
    console.log("error fetching posts : ", error);
  }
};

fetchPosts();
*/
//akane timing nie khela hosse so apply async-await

const fetchPosts = async () => {
  try {
    console.log("fetching posts...");

    //data fetch hote time lagbe oijonno await use kora hoyeche

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);
    if (!response.ok) {
      throw new Error("data fetching failed");
    }

    //parse the JSON & await for it
    const postData = await response.json();
    console.log(postData);
  } catch (error) {
    console.log("error fetching posts : ", error);
  }
};

fetchPosts();
