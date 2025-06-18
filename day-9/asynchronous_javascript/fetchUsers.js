//142. Practical Example of Data Fetching using JSONPlaceholder API

//https://jsonplaceholder.typicode.com/users

const fetchUsersData = async () => {
  try {
    console.log("data fetching...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);

    const responseUsers = await response.json(); //data parse using json()
    console.log(responseUsers);
  } catch (error) {
    console.log("failed to fetch users data : ", error.message);
  }
};
fetchUsersData();
